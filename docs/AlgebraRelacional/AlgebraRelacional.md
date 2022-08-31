# Álgebra Relacional

|    Data    | Versão |                 Descrição                  |                   Autor                   |
| :--------: | :----: | :----------------------------------------: | :---------------------------------------: |
| 31/01/2022 |  0.1   | Criação do documento de álgebra relacional | [João Durso](https://github.com/jvsdurso) |

Este documento servirá para mapear os códigos referentes à Álgebra Relacional, _Triggers_, _Stored Procedures_ e _Transactions_. Esses códigos serão aplicados diretamente no jogo ou na criação do banco de dados para ao qual ele irá se referir.

Os documentos desenvolvidos no módulo 3, [SQL](../SQL/SQL.md) foram utilizados como base para toda documentação apresentada nessa página.

## Stored Procedures e Triggers

_Stored Procedure_ é um conjunto de comandos em SQL que podem ser executados de uma só vez, como em uma função. Ele armazena tarefas repetitivas e aceita parâmetros de entrada para que a tarefa seja efetuada de acordo com a necessidade individual.

Já os _Triggers_ são procedimentos armazenados no banco de dados que são chamados automaticamente sempre que ocorre um evento especial no banco de dados. Por exemplo, ao tentar inserir algum dado em uma tabela, você pode fazer verificações/ajustes antes de concluir a tarefa.

Os _Stored Procedures_ e _Triggers_ desenvolvidos pelo grupo podem ser vistos nos arquivos:

- [StoredProcedures.sql](https://github.com/SBD1/Tibia/blob/main/docs/AlgebraRelacional/storedprocedures.sql)
- [Triggers.sql](https://github.com/SBD1/Tibia/blob/main/docs/AlgebraRelacional/triggers.sql)

## Transactions

_Transaction_ é uma unidade lógica de processamento que tem por objetivo preservar a integridade e a consistência dos dados.

As _Transactions_ que serão executadas no jogo podem ser vistas no arquivo [Transactions.sql](https://github.com/SBD1/Tibia/blob/main/docs/AlgebraRelacional/transactions.sql).

# Referências

- [Trigger](https://www.alura.com.br/artigos/trigger-em-sql?gclid=Cj0KCQjwjbyYBhCdARIsAArC6LKMl5E4dkJfwyX0wmEtS9gzGiAAbNK9iXwC-SNzoxJ5IFVO5DhQBroaAv50EALw_wcB).)
- [Stored Procedure](https://www.devmedia.com.br/introducao-aos-stored-procedures-no-sql-server/7904#:~:text=Stored%20Procedure%2C%20que%20traduzido%20significa,acordo%20com%20a%20necessidade%20individual.)
