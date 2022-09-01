-- NPC vende item ao player
BEGIN; 
CALL vende_item(1, 4, 22);
COMMIT; --OR ROLLBACK
