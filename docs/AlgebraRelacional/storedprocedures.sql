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
	_id_posicao := (SELECT id_localizacao FROM personagem INNER JOIN player ON player.idpersonagem = personagem.id WHERE player.id = _id_player);
  	RETURN _id_posicao;
END;
$$ LANGUAGE plpgsql;

