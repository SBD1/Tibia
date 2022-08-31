CREATE DOMAIN public.pch AS character varying(7)
	CONSTRAINT pch_check CHECK (((VALUE)::text = ANY (ARRAY[('corpo'::character varying)::text, ('cabeca'::character varying)::text, ('pernas'::character varying)::text, ('pes'::character varying)::text])));
ALTER DOMAIN public.pch OWNER TO postgres;


CREATE DOMAIN public.tipocriatura AS character varying(20)
	CONSTRAINT tipocriatura_check CHECK (((VALUE)::text = ANY (ARRAY[('anfibios'::character varying)::text, ('aquaticos'::character varying)::text, ('aves'::character varying)::text, ('bosses'::character varying)::text, ('constructos'::character varying)::text, ('criaturas_magicas'::character varying)::text, ('demonios'::character varying)::text, ('dragoes'::character varying)::text, ('elementais'::character varying)::text, ('extra_dimensionais'::character varying)::text, ('fadas'::character varying)::text, ('gigantes'::character varying)::text, ('humanos'::character varying)::text, ('humanoides'::character varying)::text, ('imortais'::character varying)::text, ('licantropos'::character varying)::text, ('mamiferos'::character varying)::text, ('mortos-vivos'::character varying)::text, ('plantas'::character varying)::text, ('repteis'::character varying)::text, ('slimes'::character varying)::text, ('the_ruthless_seven'::character varying)::text, ('triangle_of_terror'::character varying)::text, ('vermes'::character varying)::text])));
ALTER DOMAIN public.tipocriatura OWNER TO postgres;


CREATE DOMAIN public.tipoitem AS character varying(12)
	CONSTRAINT tipoitem_check CHECK (((VALUE)::text = ANY (ARRAY[('armas'::character varying)::text, ('equipamento'::character varying)::text, ('mochila'::character varying)::text, ('riqueza'::character varying)::text, ('none'::character varying)::text])));
ALTER DOMAIN public.tipoitem OWNER TO postgres;


CREATE DOMAIN public.tiponpc AS character varying(12)
	CONSTRAINT tiponpc_check CHECK (((VALUE)::text = ANY (ARRAY[('comerciante'::character varying)::text, ('guia'::character varying)::text])));
ALTER DOMAIN public.tiponpc OWNER TO postgres;


CREATE DOMAIN public.tipopersonagem AS character(8)
	CONSTRAINT tipopersonagem_check CHECK ((VALUE = ANY (ARRAY['player'::bpchar, 'criatura'::bpchar, 'npc'::bpchar])));
ALTER DOMAIN public.tipopersonagem OWNER TO postgres;


CREATE DOMAIN public.vocacao AS character varying(12)
	CONSTRAINT vocacao_check CHECK (((VALUE)::text = ANY (ARRAY[('cavaleiro'::character varying)::text, ('feiticeiro'::character varying)::text, ('paladino'::character varying)::text, ('druida'::character varying)::text, ('none'::character varying)::text])));
ALTER DOMAIN public.vocacao OWNER TO postgres;


CREATE TABLE public.mapa (
    id SERIAL,
    nome character(15)  NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE public.regiao (
    id SERIAL,
    vip_check boolean DEFAULT false NOT NULL,
    id_mapa integer  NOT NULL,
    nome character(32)  NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_mapa) REFERENCES mapa(id)
);

CREATE TABLE public.localizacao (
    id SERIAL,
    posicao_x numeric DEFAULT 0 NOT NULL,
    posicao_y numeric DEFAULT 0 NOT NULL,
    posicao_z numeric DEFAULT 0 NOT NULL,
    id_regiao integer  NOT NULL,
    
    PRIMARY KEY(id),
    FOREIGN KEY(id_regiao) REFERENCES regiao(id)
);

CREATE TABLE public.personagem (
    id SERIAL,
    tipo tipopersonagem  NOT NULL,
    
    PRIMARY KEY (id)
);

CREATE TABLE public.conta (
    email varchar(320)  NOT NULL,
    senha character(31)  NOT NULL,
    nome character(50)  NOT NULL,
    data_de_criacao timestamp with time zone  NULL,
    data_de_aniversario date  NOT NULL,
    genero character(10)  NOT NULL,
    localidade character(50)  NOT NULL,
    idade smallint  NULL,
    banimento boolean DEFAULT false NOT NULL,
    vip_dias smallint  NOT NULL,
    id SERIAL,
    
    PRIMARY KEY (id),
    UNIQUE (email)
);

CREATE TABLE public.player (
    id INTEGER NOT NULL,
    nome character(32)  NOT NULL,
    vocacao vocacao  NOT NULL,
    vida_maxima integer DEFAULT 155 NOT NULL,
    vida_atual integer DEFAULT 155 NOT NULL,
    mana_maxima integer DEFAULT 60 NOT NULL,
    mana_atual integer DEFAULT 60 NOT NULL,
    genero character(10)  NOT NULL,
    experiencia bigint DEFAULT 0 NOT NULL,
    level smallint DEFAULT 0 NOT NULL,
    data_de_criacao timestamp with time zone  NOT NULL,
    id_conta integer  NOT NULL,
    id_localizacao integer  NOT NULL,
    riqueza bigint DEFAULT 0 NOT NULL,
    
    PRIMARY KEY (id),
    UNIQUE (nome),
    FOREIGN KEY (id_conta) REFERENCES conta(id),
    FOREIGN KEY (id_localizacao) REFERENCES localizacao (id),
    FOREIGN KEY (id) REFERENCES personagem(id)
);

CREATE TABLE public.criatura (
    id INTEGER NOT NULL,
    nome character(50)  NOT NULL,
    ataque INTEGER  NOT NULL,
    vida integer  NOT NULL,
    experiencia integer  NOT NULL,
    defesa INTEGER  NOT NULL,
    tipo tipocriatura  NOT NULL,
    id_localizacao integer  NOT NULL,

    PRIMARY KEY (id),
    UNIQUE (nome),
    FOREIGN KEY (id_localizacao) REFERENCES localizacao (id),
    FOREIGN KEY (id) REFERENCES personagem (id)
);

CREATE TABLE public.instancia_criatura (
    id SERIAL,
    id_criatura integer  NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_criatura) REFERENCES criatura (id)
);


CREATE TABLE public.item (
    id SERIAL,
    tipo tipoitem NOT NULL,
    
    PRIMARY KEY (id)    
);

CREATE TABLE public.armas (
    id integer  NOT NULL,
    nome character(50)  NULL,
    ataque integer  NOT NULL,
    defesa integer  NOT NULL,
    vocacao vocacao  NOT NULL,
    min_level smallint  NOT NULL,
    bonus smallint  NOT NULL,
    descricao text  NULL,
    peso numeric  NOT NULL,
    preco bigint  NULL,
    
    PRIMARY KEY (id), 
    UNIQUE (nome),
    FOREIGN KEY (id) REFERENCES item (id)
);

CREATE TABLE public.equipamento (
    id integer  NOT NULL,
    nome character(50)  NULL,
    vocacao vocacao  NOT NULL,
    min_level smallint  NOT NULL,
    bonus smallint  NOT NULL,
    descricao text  NULL,
    defesa integer  NOT NULL,
    pch pch  NOT NULL,
    peso numeric  NOT NULL,
    preco bigint  NULL,
    
    PRIMARY KEY (id),
    UNIQUE (nome),
    FOREIGN KEY (id) REFERENCES item (id)
);

CREATE TABLE public.riqueza (
    id integer  NOT NULL,
    nome character(50)  NULL,
    aumento bigint  NOT NULL,
    min_level smallint  NOT NULL,
    descricao text  NULL,
    peso numeric  NOT NULL,
    
    PRIMARY KEY (id),
    UNIQUE (nome),
    FOREIGN KEY (id) REFERENCES item(id)
);

CREATE TABLE public.mochila (
    id integer  NOT NULL,
    nome character(50)  NOT NULL,
    capacidade smallint  NOT NULL,
    min_level smallint  NOT NULL,
    bonus smallint  NOT NULL,
    descricao text  NULL,
    peso numeric  NOT NULL,
    preco bigint  NULL,
    
    PRIMARY KEY(id),
    UNIQUE (nome),
    FOREIGN KEY (id) REFERENCES item(id)
);

CREATE TABLE public.batalha (
    id SERIAL,
    tipo character(6)  NOT NULL,

    PRIMARY KEY (id)
);

CREATE TABLE public.batalha_pvc_cm (
    id_batalha integer  NOT NULL,
    id_player_morto integer  NOT NULL,
    id_instancia_criatura integer  NOT NULL,

    PRIMARY KEY (id_batalha),
    FOREIGN KEY (id_batalha) REFERENCES batalha (id),
    FOREIGN KEY (id_player_morto) REFERENCES player (id),
    FOREIGN KEY (id_instancia_criatura) REFERENCES instancia_criatura (id)
);

CREATE TABLE public.batalha_pvc_sm (
    id_batalha integer  NOT NULL,
    id_player integer  NOT NULL,
    id_instancia_criatura integer  NOT NULL,
    
    PRIMARY KEY (id_batalha),
    FOREIGN KEY (id_batalha) REFERENCES batalha (id),
    FOREIGN KEY (id_player) REFERENCES player (id),
    FOREIGN KEY (id_instancia_criatura) REFERENCES instancia_criatura (id)
);

CREATE TABLE public.batalha_pvp_cm (
    id_batalha integer  NOT NULL,
    id_player_morto integer  NOT NULL,
    id_player_vivo integer  NOT NULL,
    
    PRIMARY KEY (id_batalha),
    FOREIGN KEY (id_batalha) REFERENCES batalha (id),
    FOREIGN KEY (id_player_morto) REFERENCES player (id),
    FOREIGN KEY (id_player_vivo) REFERENCES player (id)
);

CREATE TABLE public.batalha_pvp_sm (
    id_batalha integer  NOT NULL,
    id_player_um integer  NOT NULL,
    id_player_dois integer  NOT NULL,

    PRIMARY KEY (id_batalha),
    FOREIGN KEY (id_batalha) REFERENCES batalha (id),
    FOREIGN KEY (id_player_um) REFERENCES player (id),
    FOREIGN KEY (id_player_dois) REFERENCES player (id)    
);


CREATE TABLE public.guilda (
    id SERIAL,
    nome character(32)  NOT NULL,
    descricao text  NULL,
    capacidade smallint DEFAULT 50 NOT NULL,
    data_de_criacao timestamp with time zone  NOT NULL,
    id_dono INTEGER NOT  NULL,
    
    PRIMARY KEY (id),
    UNIQUE (nome),
    FOREIGN KEY (id_dono) REFERENCES player(id)
);

CREATE TABLE public.habilidades (
    id_player INTEGER  NOT NULL,
    velocidade smallint DEFAULT 110 NOT NULL,
    dano_a_distancia integer  NOT NULL,
    dano_de_combate integer  NOT NULL,
    capacidade integer  NOT NULL,
    defesa_total integer  NOT NULL,
    nivel_magia integer  NOT NULL,
    nivel_espada integer  NOT NULL,
    nivel_machado integer  NOT NULL,
    nivel_defesa integer  NOT NULL,
    nivel_punhos integer  NOT NULL,
    nivel_porrete integer  NOT NULL,
    nivel_armas_de_dist integer  NOT NULL,

    PRIMARY KEY (id_player),
    FOREIGN KEY (id_player) REFERENCES player (id)
);

CREATE TABLE public.historico (
    level smallint  NOT NULL,
    dia_hora timestamp with time zone  NOT NULL,
    ultimo_dano character(32)  NULL,
    id_player_morto integer  NOT NULL,

    PRIMARY KEY (id_player_morto),
    FOREIGN KEY (id_player_morto) REFERENCES player(id)
);


CREATE TABLE public.instancia_criatura_carrega_instancia_item (
    id_instancia_criatura integer  NOT NULL,
    id_instancia_item integer  NOT NULL,

    PRIMARY KEY (id_instancia_criatura),
    FOREIGN KEY (id_instancia_criatura) REFERENCES instancia_criatura(id)    
);

CREATE TABLE public.instancia_item (
    id SERIAL,
    id_item integer  NOT NULL,
    
    PRIMARY KEY (id),
    FOREIGN KEY (id_item) REFERENCES item(id)
);

CREATE TABLE public.inventario (
    look_corpo integer  NULL,
    look_cabeca integer  NULL,
    look_pernas integer  NULL,
    look_pes integer  NULL,
    look_costas integer  NULL,
    mao_dir integer  NULL,
    mao_esq integer  NULL,
    fonte_de_luz integer  NULL,
    capacidade integer DEFAULT 410 NOT NULL,
    id_player integer  NOT NULL,

    PRIMARY KEY (id_player),
    FOREIGN KEY (id_player) REFERENCES player(id)  
);

CREATE TABLE public.inventario_guarda_instancia_item (
    id_instancia_item integer  NOT NULL,
    id_player integer  NOT NULL,
    
    PRIMARY KEY (id_instancia_item, id_player),
    FOREIGN KEY (id_instancia_item) REFERENCES instancia_item (id),
    FOREIGN KEY (id_player) REFERENCES player (id)
);

CREATE TABLE public.npc (
    id INTEGER NOT NULL,
    nome character(50)  NOT NULL,
    tipo tiponpc  NOT NULL,
    id_localizacao integer  NOT NULL,
    
    PRIMARY KEY (id),
    UNIQUE (nome),
    FOREIGN KEY (id_localizacao) REFERENCES localizacao (id),
    FOREIGN KEY (id) REFERENCES personagem(id)
);

CREATE TABLE public.npc_carrega_instancia_item (
    id_npc integer  NOT NULL,
    id_instancia_item integer  NOT NULL,
    
    PRIMARY KEY (id_npc, id_instancia_item),
    FOREIGN KEY (id_npc) REFERENCES npc(id),
    FOREIGN KEY (id_instancia_item) REFERENCES instancia_item (id)

);

CREATE TABLE public.players_guilda (
    id_guilda integer  NOT NULL,
    id_player integer  NOT NULL,
    
    PRIMARY KEY (id_guilda),
    FOREIGN KEY (id_guilda) REFERENCES guilda(id),
    FOREIGN KEY (id_player) REFERENCES player(id)
);

CREATE TABLE public.vende (
    id_npc integer  NOT NULL,
    id_instancia_item integer  NOT NULL,
    id_player integer  NOT NULL,

    FOREIGN KEY (id_player) REFERENCES player(id),
    FOREIGN KEY (id_npc) REFERENCES npc(id)  
);

