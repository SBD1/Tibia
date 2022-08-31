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
    preco bigint  NULL);

CREATE TABLE public.batalha (
    id integer SERIAL,
    tipo character(6)  NOT NULL);

CREATE TABLE public.batalha_pvc_cm (
    id_batalha integer  NOT NULL,
    id_player_morto integer  NOT NULL,
    id_instancia_criatura integer  NOT NULL);

CREATE TABLE public.batalha_pvc_sm (
    id_batalha integer  NOT NULL,
    id_player integer  NOT NULL,
    id_instancia_criatura integer  NOT NULL);

CREATE TABLE public.batalha_pvp_cm (
    id_batalha integer  NOT NULL,
    id_player_morto integer  NOT NULL,
    id_player_vivo integer  NOT NULL);

CREATE TABLE public.batalha_pvp_sm (
    id_batalha integer  NOT NULL,
    id_player_um integer  NOT NULL,
    id_player_dois integer  NOT NULL);

CREATE TABLE public.conta (
    email character(320)  NOT NULL,
    senha character(31)  NOT NULL,
    nome character(50)  NOT NULL,
    data_de_criacao timestamp with time zone  NULL,
    data_de_aniversario date  NOT NULL,
    genero character(10)  NOT NULL,
    localidade character(50)  NOT NULL,
    idade smallint  NULL,
    banimento boolean DEFAULT false NOT NULL,
    vip_dias smallint  NOT NULL,
    id SERIAL);

CREATE TABLE public.criatura (
    id SERIAL,
    nome character(50)  NOT NULL,
    ataque smallint  NOT NULL,
    vida integer  NOT NULL,
    experiencia integer  NOT NULL,
    defesa smallint  NOT NULL,
    tipo tipocriatura  NOT NULL,
    id_localizacao integer  NOT NULL);

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
    preco bigint  NULL);

CREATE TABLE public.guilda (
    id SERIAL,
    nome character(32)  NOT NULL,
    descricao text  NULL,
    capacidade smallint DEFAULT 50 NOT NULL,
    data_de_criacao timestamp with time zone  NOT NULL,
    id_dono character(32)  NULL);

CREATE TABLE public.habilidades (
    nomeplayer character(32)  NOT NULL,
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
    nivel_armas_de_dist integer  NOT NULL);

CREATE TABLE public.historico (
    level smallint  NOT NULL,
    dia_hora timestamp with time zone  NOT NULL,
    ultimo_dano character(32)  NULL,
    id_player_morto integer  NOT NULL);

CREATE TABLE public.instancia_criatura (
    id SERIAL,
    id_criatura integer  NOT NULL);

CREATE TABLE public.instancia_criatura_carrega_instancia_item (
    id_instancia_criatura integer  NOT NULL,
    id_instancia_item integer  NOT NULL);

CREATE TABLE public.instancia_item (
    id SERIAL,
    id_item integer  NOT NULL);

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
    id_player integer  NOT NULL);

CREATE TABLE public.inventario_guarda_instancia_item (
    id_instancia_item integer  NOT NULL,
    id_player integer  NOT NULL);

CREATE TABLE public.item (
    id SERIAL,
    tipo tipoitem NOT NULL);

CREATE TABLE public.localizacao (
    id SERIAL,
    posicao_x numeric DEFAULT 0 NOT NULL,
    posicao_y numeric DEFAULT 0 NOT NULL,
    posicao_z numeric DEFAULT 0 NOT NULL,
    id_regiao integer  NOT NULL);

CREATE TABLE public.mapa (
    id SERIAL,
    nome character(15)  NOT NULL);

CREATE TABLE public.mochila (
    id integer  NOT NULL,
    nome character(50)  NOT NULL,
    capacidade smallint  NOT NULL,
    min_level smallint  NOT NULL,
    bonus smallint  NOT NULL,
    descricao text  NULL,
    peso numeric  NOT NULL,
    preco bigint  NULL);

CREATE TABLE public.npc (
    id SERIAL,
    nome character(50)  NOT NULL,
    tipo tiponpc  NOT NULL,
    id_localizacao integer  NOT NULL);

CREATE TABLE public.npc_carrega_instancia_item (
    id_npc integer  NOT NULL,
    id_instancia_item integer  NOT NULL);

CREATE TABLE public.personagem (
    id SERIAL,
    tipo tipopersonagem  NOT NULL);

CREATE TABLE public.player (
    nome character(32)  NOT NULL,
    vocacao vocacao  NOT NULL,
    vida_maxima smallint DEFAULT 155 NOT NULL,
    vida_atual smallint DEFAULT 155 NOT NULL,
    ultimo_login timestamp with time zone  NULL,
    mana_maxima smallint DEFAULT 60 NOT NULL,
    mana_atual smallint DEFAULT 60 NOT NULL,
    genero character(10)  NOT NULL,
    experiencia bigint DEFAULT 0 NOT NULL,
    level smallint DEFAULT 0 NOT NULL,
    id SERIAL,
    data_de_criacao timestamp with time zone  NOT NULL,
    id_conta integer  NOT NULL,
    id_localizacao integer  NOT NULL,
    riqueza bigint DEFAULT 0 NOT NULL);

CREATE TABLE public.players_guilda (
    id_guilda integer  NOT NULL,
    id_player integer  NOT NULL);

CREATE TABLE public.regiao (
    id SERIAL,
    vip_check boolean DEFAULT false NOT NULL,
    idmapa integer  NOT NULL,
    nome character(32)  NOT NULL);

CREATE TABLE public.riqueza (
    id integer  NOT NULL,
    nome character(50)  NULL,
    aumento bigint  NOT NULL,
    min_level smallint  NOT NULL,
    descricao text  NULL,
    peso numeric  NOT NULL);

CREATE TABLE public.vende (
    id_npc integer  NOT NULL,
    id_instancia_item integer  NOT NULL,
    id_player integer  NOT NULL);

