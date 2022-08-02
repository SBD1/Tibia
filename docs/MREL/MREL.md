## Histórico de revisão
 
| Data       | Versão | Alteração            | Autor                                     |
| ---------- | ------ | -------------------- | ----------------------------------------- |
| 03/07/2022 | 0.1    | Criação do documento | [João Durso](https://github.com/jvsdurso),  [Tomás Veloso](https://github.com/tomasvelos0), [Laís Ramos](https://github.com/laisramos123) |
| 04/07/2022 | 0.2    | Adição do MREL v1.0  | [João Durso](https://github.com/jvsdurso),  [Tomás Veloso](https://github.com/tomasvelos0), [Laís Ramos](https://github.com/laisramos123) |
| 31/07/2022 | 0.3    | Correção de erros | [João Durso](https://github.com/jvsdurso), [Laís Ramos](https://github.com/laisramos123) |
 
## Modelo Relacional
 
O MREL (Modelo Relacional) é utilizado para apoiar a implementação das aplicações, apresentando um projeto lógico de como as entidades e relacionamentos serão mapeadas no SGBD, porém é um modelo lógico não atrelado a algum SGBD específico.
 
![MREL v1.1](../assets/images/MREL/MRELv1_1.png)
 
## Versões Anteriores
 
<details>
<summary>Clique para apresentar a versão 1.0 do MREL</summary>
 
### MREL v1.0
 
Como o Modelo Relacional foi feito no [Google Drive](https://drive.google.com/file/d/116N7p4iBj1Jgl5VEohrv1pRYw0CqJupo/view?usp=sharing), através da plataforma Diagrams(draw.io), não teve como restaurar todo o histórico de modificações. Portanto, somente as mudanças a partir da versão 1.0 serão documentadas.
 
![MREL v1.0](../assets/images/MREL/MRELv1_0.png)
 
**Autor(es):**
[João Durso](https://github.com/jvsdurso)
</details>

<details>
<summary>Clique para apresentar a versão 1.1 do MREL</summary>
 
### MREL v1.1
As modificações realizadas nesta versão foram:
- Nome de criatura agora é chave candidata (único);
- Adição do atributo 'nome' em mapa, região e NPC;
- O email passa a ser chave primária de conta;
- ContaPossuiPlayer agora só possui o último acesso, que foi retirado de 'Player';
- Adição de 'level' em 'Player';
- Nome de player passa a ser chave primária de player;
- Player não possui mais capacidade, que foi atrelado ao inventário e às habilidades;
- Habilidade e Inventário não possui mais um id próprio, pois são entidades fraca. Agora a chave primária é o próprio 'Player' por meio de 'nomePlayer';
- Correções gramaticais.

 
![MREL v1.1](../assets/images/MREL/MRELv1_1.png)
 
**Autor(es):**
[João Durso](https://github.com/jvsdurso) <br>
[Lais Ramos](https://github.com/laisramos123) <br><br>
</details>