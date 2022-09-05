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

-- Equipar arma do inventário
BEGIN;
	INSERT INTO inventario_guarda_instancia_item (id_player, id_instancia_item) VALUES (3, 2);
	SELECT * FROM inventario_guarda_instancia_item;
	CALL "equip_weapon_from_inventory" (2, 3);
	SELECT id_player, mao_dir, mao_esq FROM inventario ORDER BY id_player ASC;
COMMIT; --OR ROLLBACK

-- Desequipar arma da mão direita
BEGIN; 
	CALL "unequip_weapon_from_right_hand" (3);	
	SELECT id_player, mao_dir, mao_esq FROM inventario ORDER BY id_player ASC;
COMMIT; --OR ROLLBACK

-- Desequipar arma da mão esquerda
BEGIN; 
	CALL "unequip_weapon_from_left_hand" (3);	
	SELECT id_player, mao_dir, mao_esq FROM inventario ORDER BY id_player ASC;
COMMIT; --OR ROLLBACK