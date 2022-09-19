--- Atributo derivado Level do Player
CREATE OR REPLACE FUNCTION get_player_level(_id_player INTEGER)
    RETURNS BIGINT AS $$
    DECLARE
        xp_player BIGINT;
BEGIN
	SELECT experiencia INTO xp_player FROM player WHERE id=_id_player;
  	RETURN ((xp_player) / 1000) + 1;
END;
$$ LANGUAGE plpgsql;

--- Atributo derivado Idade da Conta
CREATE OR REPLACE FUNCTION get_conta_idade(_id_conta INTEGER)
    RETURNS SMALLINT AS $$  
DECLARE
	_idade SMALLINT;
BEGIN
  _idade := (SELECT EXTRACT(year FROM age(current_date, data_de_aniversario)) FROM conta WHERE id=_id_conta);
  RETURN _idade;
END;
$$ LANGUAGE plpgsql;

--- Validar a passagem para nova regiao
CREATE OR REPLACE FUNCTION valid_region_change(_id_posicao INTEGER, _id_player INTEGER)
  RETURNS BOOLEAN AS $$
DECLARE
  _permitido BOOLEAN;
  _vip_check BOOLEAN;
  _id_conta INTEGER;
  _vip_dias SMALLINT;
  
BEGIN
	_vip_check := (SELECT vip_check FROM regiao INNER JOIN localizacao ON regiao.id = localizacao.id_regiao WHERE localizacao.id = _id_posicao);
	_id_conta := (SELECT id_conta FROM conta INNER JOIN player ON player.id_conta = conta.id WHERE player.id = _id_player);
	IF _vip_check = FALSE THEN
		_permitido := TRUE;
	ELSE 
		_vip_dias := (SELECT vip_dias FROM conta INNER JOIN player ON player.id_conta = conta.id WHERE player.id = _id_player);
		IF _vip_dias > 0 THEN
			_permitido = TRUE;
		ELSE
			_permitido = FALSE;
		END IF;
	END IF;
	RETURN _permitido;
END;
$$ LANGUAGE plpgsql;

-- Função que retorna o id do item a partir do id da instância do item
CREATE OR REPLACE FUNCTION get_id_item(_id_instancia INTEGER)
	RETURNS INTEGER AS $$
	DECLARE
  	_id_item INTEGER;
BEGIN
	_id_item := (SELECT id_item FROM instancia_item WHERE id=_id_instancia);
	RETURN _id_item;
END;
$$ LANGUAGE plpgsql;

--- Atributo posição do player
CREATE OR REPLACE FUNCTION get_player_position(_id_player INTEGER)
  RETURNS INTEGER AS $$
  DECLARE 
  	_id_posicao INTEGER;
BEGIN
	_id_posicao := (SELECT id_localizacao FROM player WHERE player.id = _id_player);
  	RETURN _id_posicao;
END;
$$ LANGUAGE plpgsql;

--- Retorna preço do item
CREATE OR REPLACE FUNCTION get_preco_item (_id_item INTEGER)
  RETURNS BIGINT AS $$
  DECLARE
  	_preco_item BIGINT;
BEGIN
  	_preco_item := (SELECT COALESCE(armas.preco, equipamento.preco, mochila.preco)  FROM item 
					FULL OUTER JOIN armas ON item.id = armas.id
					FULL OUTER JOIN equipamento ON item.id = equipamento.id
					FULL OUTER JOIN mochila ON item.id = mochila.id 
					WHERE item.id = _id_item);
	IF _preco_item IS NULL THEN
		RAISE EXCEPTION 'Esse item não possui preço.';
	ELSE
		RETURN _preco_item;
	END IF;
END;	
$$ LANGUAGE plpgsql;

-- Função que retorna o tipo do item a partir do id dele
CREATE OR REPLACE FUNCTION get_tipo_item (_id_item INTEGER)
  RETURNS tipoitem AS $$
  DECLARE
  	_tipo_item tipoitem;
BEGIN
	_tipo_item := (SELECT tipo FROM item WHERE item.id = _id_item);
  	RETURN _tipo_item;
END;
$$ LANGUAGE plpgsql;

-- Procedure para vender um item (TRANSACTION)
CREATE OR REPLACE PROCEDURE vende_item(_id_instancia_item INTEGER, _id_player INTEGER, _id_npc INTEGER)
  AS $$
	DECLARE
		_id_item INTEGER;
		_preco_item BIGINT DEFAULT 0;
  BEGIN
		_id_item = get_id_item(id_instancia);
		_preco_item = get_preco_item(_id_item);

    INSERT INTO vende (id_player, id_instancia_item, id_npc) VALUES
    (_id_player, _id_instancia_item, _id_npc);

    INSERT INTO inventario_guarda_instancia_item (id_player, id_instancia_item) VALUES
    (_id_player, _id_instancia_item);

    UPDATE player
      SET riqueza = riqueza - _preco_item
      WHERE id = _id_player;

    DELETE FROM npc_carrega_instancia_item
      WHERE id_instancia_item = _id_instancia_item;
	END;
$$ LANGUAGE plpgsql;


-- Pegar item do chão (TRANSACTION)
CREATE OR REPLACE PROCEDURE get_item_on_the_floor(_id_instancia_item INTEGER, _id_player INTEGER)
  AS $$
  BEGIN
    DELETE FROM instancia_item_posicao
    WHERE id_instancia_item = _id_instancia_item;

    INSERT INTO inventario_guarda_instancia_item (id_player, id_instancia_item)
    VALUES  (_id_player, _id_instancia_item);

  END;
$$ LANGUAGE plpgsql;

--- Conferir se um item existe
CREATE OR REPLACE FUNCTION check_item_exists(_id_instancia_item INTEGER)
  RETURNS BOOLEAN AS $$
BEGIN
  RETURN (SELECT count(*) FROM instancia_item WHERE id = _id_instancia_item);
END;
$$ LANGUAGE plpgsql;

--- Conferir se possui o item na mochila
CREATE OR REPLACE FUNCTION check_backpack_has_item(_id_player INTEGER, _id_instancia_item INTEGER)
  RETURNS BOOLEAN AS $$
BEGIN
  RETURN (SELECT count(*) FROM inventario_guarda_instancia_item WHERE id_instancia_item=_id_instancia_item and id_player=_id_player);
END;
$$ LANGUAGE plpgsql;

-- Equipar arma do inventário (TRANSACTION)
CREATE OR REPLACE PROCEDURE equip_weapon_from_inventory(_id_instancia_item INTEGER, _id_player INTEGER)
  AS $$
  DECLARE 
 	_id_item integer;
  	_tipo_item tipoitem;
	_is_empty integer;
  BEGIN
    DELETE FROM inventario_guarda_instancia_item
    WHERE id_instancia_item = _id_instancia_item;
	
	_id_item = get_id_item(_id_instancia_item);
	_tipo_item = get_tipo_item(_id_item);
	
	--RAISE NOTICE '_id_item: %', _id_item;
	--RAISE NOTICE '_tipo_item: %', _tipo_item;
	
	IF LOWER(_tipo_item) = 'armas' THEN
		SELECT mao_dir FROM inventario INTO _is_empty WHERE id_player = _id_player;
		
		IF _is_empty IS NOT NULL THEN
			SELECT mao_esq FROM inventario INTO _is_empty WHERE id_player = _id_player;
			IF _is_empty IS NOT NULL THEN
				RAISE EXCEPTION 'Você já está usando duas armas. Desequipe uma delas e tente novamente.';
			ELSE 
				UPDATE inventario 
					SET mao_esq = _id_instancia_item WHERE id_player = _id_player;
			END IF;
		ELSE 
			UPDATE inventario 
				SET mao_dir = _id_instancia_item WHERE id_player = _id_player;
		END IF;
		
	END IF;
	
  END;
$$ LANGUAGE plpgsql;

-- Desequipar arma da mão direita
CREATE OR REPLACE PROCEDURE unequip_weapon_from_right_hand(_id_player INTEGER)
  AS $$
  DECLARE 
 	_mao_dir integer;
  BEGIN
  	_mao_dir = (SELECT mao_dir FROM inventario WHERE id_player = _id_player);
    
	IF _mao_dir IS NULL THEN
		RAISE EXCEPTION 'Você não possui arma na mão direita.';
	ELSE
		UPDATE inventario
			SET mao_dir = NULL 
			WHERE id_player = _id_player;
	END IF;
  
  END;
$$ LANGUAGE plpgsql;

-- Desequipar arma da mão esquerda
CREATE OR REPLACE PROCEDURE unequip_weapon_from_left_hand(_id_player INTEGER)
  AS $$
  DECLARE 
 	_mao_esq integer;
  BEGIN
  	_mao_esq = (SELECT mao_esq FROM inventario WHERE id_player = _id_player);
    
	IF _mao_esq IS NULL THEN
		RAISE EXCEPTION 'Você não possui arma na mão esquerda.';
	ELSE
		UPDATE inventario
			SET mao_esq = NULL 
			WHERE id_player = _id_player;
	END IF;
  
  END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE FUNCTION get_id_posicao_with_coord(x INTEGER, y INTEGER)
	RETURNS INTEGER AS $$
	DECLARE
  	_id_posicao INTEGER;
BEGIN
	_id_posicao := (SELECT id FROM localizacao WHERE posicao_x = x and posicao_y = y);
	RETURN _id_posicao;
END;
$$ LANGUAGE plpgsql;

SELECT get_id_posicao_with_coord(50,31);