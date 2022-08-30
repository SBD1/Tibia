-- Procedure para vender um item, deve ser usada dentro de uma Transaction
CREATE OR REPLACE PROCEDURE vende_item(_id_instancia_item INTEGER, _id_player INTEGER, _id_npc INTEGER)
  AS $$
	DECLARE
		_id_item INTEGER;
		_preco_item moeda DEFAULT 0;
  BEGIN
		_id_item = get_id_item(id_instancia);
		_preco_item = get_preco_item(_id_item);

    INSERT INTO vende (id_player, id_instancia_item, id_npc) VALUES
    (_id_player, _id_instancia_item, _id_npc);

    INSERT INTO inventario_guarda_instancia_item (id_player, id_instancia_item) VALUES
    (_id_player, _id_instancia_item);

-- FALTA SUBTRAIR AS MOEDAS DO PLAYER (COMO?)
    UPDATE riqueza
      SET quantidade = quantidade - _preco_item
      WHERE nome = _nome_treinador;

    DELETE FROM npc_carrega_instancia_item
      WHERE id_instancia_item = _id_instancia_item;
	END;
$$ LANGUAGE plpgsql;


