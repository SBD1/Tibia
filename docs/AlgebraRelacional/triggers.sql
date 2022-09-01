CREATE OR REPLACE FUNCTION verificar_limite_inventario() RETURNS trigger AS $verificar_limite_inventario$
    DECLARE
        capacidade_inventario INTEGER;
		peso_item_atual INTEGER;
        soma_peso_itens INTEGER;
    BEGIN
        SELECT capacidade INTO capacidade_inventario FROM inventario WHERE id_player = NEW.id_player;
		
        SELECT (COALESCE(soma_tot.peso_armas, 0) + COALESCE(soma_tot.peso_equip, 0) + COALESCE(soma_tot.peso_mochila, 0) + COALESCE(soma_tot.peso_riqueza, 0))
			INTO soma_peso_itens FROM(
				SELECT SUM(armas.peso) as peso_armas, SUM(equipamento.peso) as peso_equip, SUM(mochila.peso) as peso_mochila, SUM(riqueza.peso) as peso_riqueza 
					FROM inventario_guarda_instancia_item 
						LEFT JOIN instancia_item ON instancia_item.id = inventario_guarda_instancia_item.id_instancia_item 
						LEFT JOIN armas ON armas.id = instancia_item.id_item 
						LEFT JOIN equipamento ON equipamento.id = instancia_item.id_item 
						LEFT JOIN mochila ON mochila.id = instancia_item.id_item
						LEFT JOIN riqueza ON riqueza.id = instancia_item.id_item) 
					as soma_tot;
					
		SELECT (COALESCE(armas.peso, 0) + COALESCE(equipamento.peso, 0) + COALESCE(mochila.peso, 0) + COALESCE(riqueza.peso, 0)) INTO peso_item_atual FROM instancia_item
			LEFT JOIN armas ON armas.id = instancia_item.id_item 
			LEFT JOIN equipamento ON equipamento.id = instancia_item.id_item 
			LEFT JOIN mochila ON mochila.id = instancia_item.id_item
			LEFT JOIN riqueza ON riqueza.id = instancia_item.id_item
		WHERE instancia_item.id = NEW.id_instancia_item;
		
		--RAISE NOTICE 'Capacidade utilizada := %', soma_peso_itens;
		--RAISE NOTICE 'Capacidade do inventario := %', capacidade_inventario;
		--RAISE NOTICE 'Peso do item a ser inserido := %', peso_item_atual;
        IF soma_peso_itens + peso_item_atual > capacidade_inventario THEN
            RAISE EXCEPTION 'Peso máximo do inventário alcançado. Não é possível adicionar mais items.';
        END IF;
        RETURN NEW;
    END;
$verificar_limite_inventario$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER trigger_verificar_limite_inventario
BEFORE INSERT ON inventario_guarda_instancia_item
FOR EACH ROW
EXECUTE FUNCTION verificar_limite_inventario();

