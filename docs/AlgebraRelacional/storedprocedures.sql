--- Atributo derivado Level do Player
CREATE OR REPLACE FUNCTION get_player_level(_id_player INTEGER)
    RETURNS BIGINT AS $$
    DECLARE
        xp_player BIGINT;
BEGIN
  RETURN (SELECT experiencia INTO xp_player FROM player WHERE id=_id_player) / 1000;
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
CREATE OR REPLACE FUNCTION valid_region_change(_id_posicao INTEGER, _id_player INTEGER, _vip_check BOOLEAN, _id_conta INTEGER, _vip_dias SMALLINT)
  RETURNS BOOLEAN AS $$
DECLARE
  _regiao_vip BOOLEAN;
  _player_vip SMALLINT;
  _permitido BOOLEAN;
BEGIN
  _regiao_vip := (SELECT r.vip_check FROM regiao r WHERE r.id = (SELECT p.id_regiao FROM localizao WHERE p.id = _id_posicao));
  IF vip = FALSE THEN
    _permitido := TRUE;
  ELSE 
    _player_vip := (SELECT d.vip_dias FROM conta d WHERE d.id = (SELECT c.id_conta FROM conta WHERE c.id = _id_conta));
    IF _player_vip > 0 THEN
      _permitido = TRUE;
    ELSE
      _permitido = FALSE;
	END IF;
  END IF;
    RETURN _permitido;
END;
$$ LANGUAGE plpgsql;

-- Função que retorna o id do item a partir do id da instância do item
CREATE OR REPLACE FUNCTION get_id_item (_id_instancia INTEGER)
  RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT id_item FROM instancia_item WHERE id=_id_instancia);
END;
$$ LANGUAGE plpgsql;

--- Atributo posição do player
CREATE OR REPLACE FUNCTION get_player_position(_id_player INTEGER)
  RETURNS INTEGER AS $$
BEGIN
  RETURN (SELECT id_posicao FROM player WHERE id = _id_player);
END;
$$ LANGUAGE plpgsql;

