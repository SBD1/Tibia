docker exec tibia_db_1 psql -U postgres -c 'create database tibia;'
docker exec tibia_db_1 psql -U postgres -d tibia -a -f /app/db/ddl.sql
docker exec tibia_db_1 psql -U postgres -d tibia -a -f /app/db/dml.sql
