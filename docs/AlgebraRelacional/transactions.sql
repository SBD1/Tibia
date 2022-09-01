-- NPC vende item ao player
BEGIN; 
    CALL vende_item(1, 4, 22);
COMMIT; --OR ROLLBACK

-- Player pega item do chão 
BEGIN; 
	INSERT INTO instancia_item_posicao (id_instancia_item, id_localizacao) VALUES (5, 28);
	CALL "get_item_on_the_floor" (5, 3);
	SELECT * from inventario_guarda_instancia_item;
COMMIT; --OR ROLLBACK