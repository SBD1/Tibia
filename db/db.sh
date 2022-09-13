docker exec tibia_db_1 psql -U postgres -c 'create database tibia;'

// Popular assim 
docker exec tibia_db_1 psql -U postgres -d tibia -a -f /app/db/ddl.sql
docker exec tibia_db_1 psql -U postgres -d tibia -a -f /app/db/dml.sql

// Ou assim (melhor opção)
docker exec tibia-db-1 pg_restore -U postgres -d tibia /app/db/last_backup