docker exec tibia_db_1 psql -U postgres -c 'create database tibia;'
docker exec tibia_db_1 psql -U postgres -d tibia -a -f /app/db/ddl.sql
docker exec tibia_db_1 psql -U postgres -d tibia -a -f /app/db/dml.sql

docker exec grupo01_tibia_db_1 psql -U postgres -c 'create database tibia;'
docker exec grupo01_tibia_db_1 psql -U postgres -d tibia -a -f /app/docs/SQL/ddl-db.sql
docker exec grupo01_tibia_db_1 psql -U postgres -d tibia -a -f /app/docs/SQL/dml-db.sql

#  docker exec -it grupo01_tibia_db_1 psql -U postgres
#  terminal do banco de dados