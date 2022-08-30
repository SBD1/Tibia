--
-- PostgreSQL database dump
--

-- Dumped from database version 14.4
-- Dumped by pg_dump version 14.4

-- Started on 2022-08-18 21:47:23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 927 (class 1247 OID 16783)
-- Name: pch; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.pch AS character varying(7)
	CONSTRAINT pch_check CHECK (((VALUE)::text = ANY ((ARRAY['corpo'::character varying, 'cabeca'::character varying, 'pernas'::character varying, 'pes'::character varying])::text[])));


ALTER DOMAIN public.pch OWNER TO postgres;

--
-- TOC entry 885 (class 1247 OID 16575)
-- Name: tipocriatura; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipocriatura AS character varying(20)
	CONSTRAINT tipocriatura_check CHECK (((VALUE)::text = ANY ((ARRAY['anfibios'::character varying, 'aquaticos'::character varying, 'aves'::character varying, 'bosses'::character varying, 'constructos'::character varying, 'criaturas_magicas'::character varying, 'demonios'::character varying, 'dragoes'::character varying, 'elementais'::character varying, 'extra_dimensionais'::character varying, 'fadas'::character varying, 'gigantes'::character varying, 'humanos'::character varying, 'humanoides'::character varying, 'imortais'::character varying, 'licantropos'::character varying, 'mamiferos'::character varying, 'mortos-vivos'::character varying, 'plantas'::character varying, 'repteis'::character varying, 'slimes'::character varying, 'the_ruthless_seven'::character varying, 'triangle_of_terror'::character varying, 'vermes'::character varying])::text[])));


ALTER DOMAIN public.tipocriatura OWNER TO postgres;

--
-- TOC entry 911 (class 1247 OID 16716)
-- Name: tipoitem; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipoitem AS character varying(12)
	CONSTRAINT tipoitem_check CHECK (((VALUE)::text = ANY ((ARRAY['armas'::character varying, 'equipamento'::character varying, 'mochila'::character varying, 'riqueza'::character varying, 'none'::character varying])::text[])));


ALTER DOMAIN public.tipoitem OWNER TO postgres;

--
-- TOC entry 892 (class 1247 OID 16594)
-- Name: tiponpc; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tiponpc AS character varying(12)
	CONSTRAINT tiponpc_check CHECK (((VALUE)::text = ANY ((ARRAY['comerciante'::character varying, 'guia'::character varying])::text[])));


ALTER DOMAIN public.tiponpc OWNER TO postgres;

--
-- TOC entry 871 (class 1247 OID 16530)
-- Name: tipopersonagem; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipopersonagem AS character(8)
	CONSTRAINT tipopersonagem_check CHECK ((VALUE = ANY (ARRAY['player'::bpchar, 'criatura'::bpchar, 'npc'::bpchar])));


ALTER DOMAIN public.tipopersonagem OWNER TO postgres;

--
-- TOC entry 878 (class 1247 OID 16547)
-- Name: vocacao; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.vocacao AS character varying(12)
	CONSTRAINT vocacao_check CHECK (((VALUE)::text = ANY ((ARRAY['cavaleiro'::character varying, 'feiticeiro'::character varying, 'paladino'::character varying, 'druida'::character varying, 'none'::character varying])::text[])));


ALTER DOMAIN public.vocacao OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 232 (class 1259 OID 16740)
-- Name: armas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.armas (
    id integer NOT NULL,
    nome character varying(50),
    ataque integer NOT NULL,
    defesa integer NOT NULL,
    vocacao public.vocacao NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    peso double precision NOT NULL
);


ALTER TABLE public.armas OWNER TO postgres;

--
-- TOC entry 245 (class 1259 OID 25183)
-- Name: batalha; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha (
    id integer NOT NULL,
    tipo character(6) NOT NULL
);


ALTER TABLE public.batalha OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 25182)
-- Name: batalha_idbatalha_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.batalha_idbatalha_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.batalha_idbatalha_seq OWNER TO postgres;

--
-- TOC entry 3596 (class 0 OID 0)
-- Dependencies: 244
-- Name: batalha_idbatalha_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.batalha_idbatalha_seq OWNED BY public.batalha.id;


--
-- TOC entry 248 (class 1259 OID 25229)
-- Name: batalha_pvc_cm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvc_cm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idinstcriatura integer NOT NULL
);


ALTER TABLE public.batalha_pvc_cm OWNER TO postgres;

--
-- TOC entry 249 (class 1259 OID 25249)
-- Name: batalha_pvc_sm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvc_sm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idinstcriatura integer NOT NULL
);


ALTER TABLE public.batalha_pvc_sm OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 25189)
-- Name: batalha_pvp_cm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvp_cm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idplayer_vivo integer NOT NULL
);


ALTER TABLE public.batalha_pvp_cm OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 25209)
-- Name: batalha_pvp_sm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvp_sm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idplayer_vivo integer NOT NULL
);


ALTER TABLE public.batalha_pvp_sm OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16613)
-- Name: conta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conta (
    email character varying(320) NOT NULL,
    senha character varying(31) NOT NULL,
    nome character varying(50) NOT NULL,
    data_de_criacao timestamp with time zone,
    data_de_aniversario date NOT NULL,
    genero character(7) NOT NULL,
    localidade character varying(50) NOT NULL,
    idade smallint,
    banimento boolean DEFAULT false NOT NULL,
    vip_dias smallint NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.conta OWNER TO postgres;

--
-- TOC entry 243 (class 1259 OID 17055)
-- Name: conta_idconta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.conta_idconta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conta_idconta_seq OWNER TO postgres;

--
-- TOC entry 3597 (class 0 OID 0)
-- Dependencies: 243
-- Name: conta_idconta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conta_idconta_seq OWNED BY public.conta.id;


--
-- TOC entry 219 (class 1259 OID 16578)
-- Name: criatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.criatura (
    id integer NOT NULL,
    nome character varying(50),
    ataque smallint NOT NULL,
    vida integer NOT NULL,
    experiencia integer NOT NULL,
    defesa smallint NOT NULL,
    tipo public.tipocriatura NOT NULL,
    idpersonagem integer NOT NULL
);


ALTER TABLE public.criatura OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16577)
-- Name: criatura_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.criatura_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.criatura_id_seq OWNER TO postgres;

--
-- TOC entry 3598 (class 0 OID 0)
-- Dependencies: 218
-- Name: criatura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.criatura_id_seq OWNED BY public.criatura.id;


--
-- TOC entry 235 (class 1259 OID 16785)
-- Name: equipamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipamento (
    id integer NOT NULL,
    nome character varying(50),
    vocacao public.vocacao NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    peso double precision NOT NULL,
    defesa integer NOT NULL,
    pch public.pch NOT NULL
);


ALTER TABLE public.equipamento OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16699)
-- Name: guilda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.guilda (
    id integer NOT NULL,
    nome character varying(32) NOT NULL,
    descricao text,
    capacidade smallint DEFAULT 50 NOT NULL,
    data_de_criacao timestamp with time zone NOT NULL,
    id_dono character varying(32)
);


ALTER TABLE public.guilda OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16698)
-- Name: guilda_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.guilda_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.guilda_id_seq OWNER TO postgres;

--
-- TOC entry 3599 (class 0 OID 0)
-- Dependencies: 226
-- Name: guilda_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.guilda_id_seq OWNED BY public.guilda.id;


--
-- TOC entry 225 (class 1259 OID 16692)
-- Name: habilidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habilidades (
    nomeplayer character varying(32) NOT NULL,
    velocidade smallint DEFAULT 110 NOT NULL,
    dano_a_distancia integer NOT NULL,
    dano_de_combate integer NOT NULL,
    capacidade integer NOT NULL,
    defesa_total integer NOT NULL,
    nivel_magia integer NOT NULL,
    nivel_espada integer NOT NULL,
    nivel_machado integer NOT NULL,
    nivel_defesa integer NOT NULL,
    nivel_punhos integer NOT NULL,
    nivel_porrete integer NOT NULL,
    nivel_armas_de_dist integer NOT NULL
);


ALTER TABLE public.habilidades OWNER TO postgres;

--
-- TOC entry 239 (class 1259 OID 16887)
-- Name: historico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historico (
    level smallint NOT NULL,
    dia_hora timestamp with time zone NOT NULL,
    ultimo_dano character varying(32),
    idplayermorto integer NOT NULL
);


ALTER TABLE public.historico OWNER TO postgres;

--
-- TOC entry 237 (class 1259 OID 16802)
-- Name: instancia_criatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_criatura (
    id integer NOT NULL,
    idcriatura integer NOT NULL
);


ALTER TABLE public.instancia_criatura OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 16990)
-- Name: instancia_criatura_carrega_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_criatura_carrega_instancia_item (
    idinstanciacriatura integer NOT NULL,
    idinstanciaitem integer NOT NULL
);


ALTER TABLE public.instancia_criatura_carrega_instancia_item OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16729)
-- Name: instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_item (
    id integer NOT NULL,
    iditem integer NOT NULL
);


ALTER TABLE public.instancia_item OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16801)
-- Name: instanciacriatura_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instanciacriatura_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.instanciacriatura_id_seq OWNER TO postgres;

--
-- TOC entry 3600 (class 0 OID 0)
-- Dependencies: 236
-- Name: instanciacriatura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instanciacriatura_id_seq OWNED BY public.instancia_criatura.id;


--
-- TOC entry 230 (class 1259 OID 16728)
-- Name: instanciaitem_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instanciaitem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.instanciaitem_id_seq OWNER TO postgres;

--
-- TOC entry 3601 (class 0 OID 0)
-- Dependencies: 230
-- Name: instanciaitem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instanciaitem_id_seq OWNED BY public.instancia_item.id;


--
-- TOC entry 224 (class 1259 OID 16677)
-- Name: inventario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventario (
    look_corpo integer,
    look_cabeca integer,
    look_pernas integer,
    look_pes integer,
    look_costas integer,
    mao_dir integer,
    mao_esq integer,
    fonte_de_luz integer,
    capacidade integer DEFAULT 410 NOT NULL,
    idplayer integer NOT NULL
);


ALTER TABLE public.inventario OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16813)
-- Name: inventario_guarda_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventario_guarda_instancia_item (
    idinstanciaitem integer,
    idplayer integer NOT NULL
);


ALTER TABLE public.inventario_guarda_instancia_item OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16719)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    tipo public.tipoitem DEFAULT 'none'::character varying NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16718)
-- Name: item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.item_id_seq OWNER TO postgres;

--
-- TOC entry 3602 (class 0 OID 0)
-- Dependencies: 228
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 214 (class 1259 OID 16508)
-- Name: localizacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.localizacao (
    id integer NOT NULL,
    posicao_x numeric DEFAULT 0 NOT NULL,
    posicao_y numeric DEFAULT 0 NOT NULL,
    posicao_z numeric DEFAULT 0 NOT NULL,
    idregiao integer NOT NULL
);


ALTER TABLE public.localizacao OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16507)
-- Name: localizacao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.localizacao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.localizacao_id_seq OWNER TO postgres;

--
-- TOC entry 3603 (class 0 OID 0)
-- Dependencies: 213
-- Name: localizacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.localizacao_id_seq OWNED BY public.localizacao.id;


--
-- TOC entry 210 (class 1259 OID 16483)
-- Name: mapa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mapa (
    id integer NOT NULL,
    nome character varying(15) NOT NULL
);


ALTER TABLE public.mapa OWNER TO postgres;

--
-- TOC entry 209 (class 1259 OID 16482)
-- Name: mapa_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.mapa_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.mapa_id_seq OWNER TO postgres;

--
-- TOC entry 3604 (class 0 OID 0)
-- Dependencies: 209
-- Name: mapa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mapa_id_seq OWNED BY public.mapa.id;


--
-- TOC entry 234 (class 1259 OID 16768)
-- Name: mochila; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mochila (
    id integer NOT NULL,
    nome character varying(50),
    capacidade smallint NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    peso double precision NOT NULL
);


ALTER TABLE public.mochila OWNER TO postgres;

--
-- TOC entry 221 (class 1259 OID 16597)
-- Name: npc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.npc (
    id integer NOT NULL,
    nome character varying(50),
    tipo public.tiponpc NOT NULL,
    idpersonagem integer NOT NULL
);


ALTER TABLE public.npc OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 16912)
-- Name: npc_carrega_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.npc_carrega_instancia_item (
    idnpc integer NOT NULL,
    idinstanciaitem integer NOT NULL
);


ALTER TABLE public.npc_carrega_instancia_item OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16596)
-- Name: npc_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.npc_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.npc_id_seq OWNER TO postgres;

--
-- TOC entry 3605 (class 0 OID 0)
-- Dependencies: 220
-- Name: npc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.npc_id_seq OWNED BY public.npc.id;


--
-- TOC entry 216 (class 1259 OID 16533)
-- Name: personagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personagem (
    id integer NOT NULL,
    tipo public.tipopersonagem NOT NULL,
    idlocalizacao integer NOT NULL
);


ALTER TABLE public.personagem OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16532)
-- Name: personagem_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.personagem_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.personagem_id_seq OWNER TO postgres;

--
-- TOC entry 3606 (class 0 OID 0)
-- Dependencies: 215
-- Name: personagem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personagem_id_seq OWNED BY public.personagem.id;


--
-- TOC entry 217 (class 1259 OID 16550)
-- Name: player; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player (
    nome character varying(32) NOT NULL,
    vocacao public.vocacao DEFAULT 'none'::character varying NOT NULL,
    vida_maxima smallint DEFAULT 155 NOT NULL,
    vida_atual smallint DEFAULT 155 NOT NULL,
    ultimo_login timestamp with time zone,
    mana_maxima smallint DEFAULT 60 NOT NULL,
    mana_atual smallint DEFAULT 60 NOT NULL,
    genero character(7) NOT NULL,
    experiencia bigint DEFAULT 0 NOT NULL,
    idpersonagem integer NOT NULL,
    level smallint DEFAULT 0 NOT NULL,
    id integer NOT NULL,
    data_de_criacao timestamp with time zone NOT NULL,
    idconta integer NOT NULL
);


ALTER TABLE public.player OWNER TO postgres;

--
-- TOC entry 223 (class 1259 OID 16646)
-- Name: player_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.player_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.player_id_seq OWNER TO postgres;

--
-- TOC entry 3607 (class 0 OID 0)
-- Dependencies: 223
-- Name: player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.player_id_seq OWNED BY public.player.id;


--
-- TOC entry 212 (class 1259 OID 16495)
-- Name: regiao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regiao (
    id integer NOT NULL,
    vip_check boolean DEFAULT false NOT NULL,
    idmapa integer NOT NULL
);


ALTER TABLE public.regiao OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16494)
-- Name: regiao_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.regiao_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.regiao_id_seq OWNER TO postgres;

--
-- TOC entry 3608 (class 0 OID 0)
-- Dependencies: 211
-- Name: regiao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regiao_id_seq OWNED BY public.regiao.id;


--
-- TOC entry 233 (class 1259 OID 16754)
-- Name: riqueza; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.riqueza (
    id integer NOT NULL,
    nome character varying(50),
    quantidade bigint NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    peso double precision NOT NULL
);


ALTER TABLE public.riqueza OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16927)
-- Name: vende; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vende (
    idnpc integer NOT NULL,
    idinstanciaitem integer NOT NULL,
    nomeplayer character varying(32)
);


ALTER TABLE public.vende OWNER TO postgres;

--
-- TOC entry 3336 (class 2604 OID 25186)
-- Name: batalha id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha ALTER COLUMN id SET DEFAULT nextval('public.batalha_idbatalha_seq'::regclass);


--
-- TOC entry 3327 (class 2604 OID 17056)
-- Name: conta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta ALTER COLUMN id SET DEFAULT nextval('public.conta_idconta_seq'::regclass);


--
-- TOC entry 3324 (class 2604 OID 16581)
-- Name: criatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura ALTER COLUMN id SET DEFAULT nextval('public.criatura_id_seq'::regclass);


--
-- TOC entry 3330 (class 2604 OID 16702)
-- Name: guilda id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda ALTER COLUMN id SET DEFAULT nextval('public.guilda_id_seq'::regclass);


--
-- TOC entry 3335 (class 2604 OID 16805)
-- Name: instancia_criatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura ALTER COLUMN id SET DEFAULT nextval('public.instanciacriatura_id_seq'::regclass);


--
-- TOC entry 3334 (class 2604 OID 16732)
-- Name: instancia_item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item ALTER COLUMN id SET DEFAULT nextval('public.instanciaitem_id_seq'::regclass);


--
-- TOC entry 3332 (class 2604 OID 16722)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3311 (class 2604 OID 16511)
-- Name: localizacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao ALTER COLUMN id SET DEFAULT nextval('public.localizacao_id_seq'::regclass);


--
-- TOC entry 3308 (class 2604 OID 16486)
-- Name: mapa id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapa ALTER COLUMN id SET DEFAULT nextval('public.mapa_id_seq'::regclass);


--
-- TOC entry 3325 (class 2604 OID 16600)
-- Name: npc id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc ALTER COLUMN id SET DEFAULT nextval('public.npc_id_seq'::regclass);


--
-- TOC entry 3315 (class 2604 OID 16536)
-- Name: personagem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem ALTER COLUMN id SET DEFAULT nextval('public.personagem_id_seq'::regclass);


--
-- TOC entry 3323 (class 2604 OID 16647)
-- Name: player id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player ALTER COLUMN id SET DEFAULT nextval('public.player_id_seq'::regclass);


--
-- TOC entry 3309 (class 2604 OID 16498)
-- Name: regiao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao ALTER COLUMN id SET DEFAULT nextval('public.regiao_id_seq'::regclass);


--
-- TOC entry 3378 (class 2606 OID 16748)
-- Name: armas armas_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_nome_key UNIQUE (nome);


--
-- TOC entry 3380 (class 2606 OID 16746)
-- Name: armas armas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_pkey PRIMARY KEY (id);


--
-- TOC entry 3406 (class 2606 OID 25188)
-- Name: batalha batalha_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha
    ADD CONSTRAINT batalha_pkey PRIMARY KEY (id);


--
-- TOC entry 3412 (class 2606 OID 25233)
-- Name: batalha_pvc_cm batalha_pvc_cm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3414 (class 2606 OID 25253)
-- Name: batalha_pvc_sm batalha_pvc_sm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3408 (class 2606 OID 25193)
-- Name: batalha_pvp_cm batalha_pvp_cm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3410 (class 2606 OID 25213)
-- Name: batalha_pvp_sm batalha_pvp_sm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3360 (class 2606 OID 25272)
-- Name: conta conta_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_email_key UNIQUE (email);


--
-- TOC entry 3362 (class 2606 OID 17063)
-- Name: conta conta_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_id_key UNIQUE (id);


--
-- TOC entry 3364 (class 2606 OID 25270)
-- Name: conta conta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_pkey PRIMARY KEY (id);


--
-- TOC entry 3352 (class 2606 OID 16587)
-- Name: criatura criatura_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_nome_key UNIQUE (nome);


--
-- TOC entry 3354 (class 2606 OID 16585)
-- Name: criatura criatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_pkey PRIMARY KEY (id);


--
-- TOC entry 3390 (class 2606 OID 16793)
-- Name: equipamento equipamento_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_nome_key UNIQUE (nome);


--
-- TOC entry 3392 (class 2606 OID 16791)
-- Name: equipamento equipamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_pkey PRIMARY KEY (id);


--
-- TOC entry 3370 (class 2606 OID 16709)
-- Name: guilda guilda_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_nome_key UNIQUE (nome);


--
-- TOC entry 3372 (class 2606 OID 16707)
-- Name: guilda guilda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_pkey PRIMARY KEY (id);


--
-- TOC entry 3368 (class 2606 OID 16697)
-- Name: habilidades habilidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidades
    ADD CONSTRAINT habilidades_pkey PRIMARY KEY (nomeplayer);


--
-- TOC entry 3398 (class 2606 OID 25289)
-- Name: historico historico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico
    ADD CONSTRAINT historico_pkey PRIMARY KEY (idplayermorto);


--
-- TOC entry 3404 (class 2606 OID 16994)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_item_pkey PRIMARY KEY (idinstanciacriatura);


--
-- TOC entry 3394 (class 2606 OID 16807)
-- Name: instancia_criatura instanciacriatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura
    ADD CONSTRAINT instanciacriatura_pkey PRIMARY KEY (id);


--
-- TOC entry 3376 (class 2606 OID 16734)
-- Name: instancia_item instanciaitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item
    ADD CONSTRAINT instanciaitem_pkey PRIMARY KEY (id);


--
-- TOC entry 3396 (class 2606 OID 25296)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_pkey PRIMARY KEY (idplayer);


--
-- TOC entry 3366 (class 2606 OID 25274)
-- Name: inventario inventario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_pkey PRIMARY KEY (idplayer);


--
-- TOC entry 3374 (class 2606 OID 16727)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3342 (class 2606 OID 16518)
-- Name: localizacao localizacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao
    ADD CONSTRAINT localizacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3338 (class 2606 OID 16488)
-- Name: mapa mapa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapa
    ADD CONSTRAINT mapa_pkey PRIMARY KEY (id);


--
-- TOC entry 3386 (class 2606 OID 16776)
-- Name: mochila mochila_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_nome_key UNIQUE (nome);


--
-- TOC entry 3388 (class 2606 OID 16774)
-- Name: mochila mochila_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_pkey PRIMARY KEY (id);


--
-- TOC entry 3400 (class 2606 OID 16916)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_pkey PRIMARY KEY (idnpc, idinstanciaitem);


--
-- TOC entry 3356 (class 2606 OID 16606)
-- Name: npc npc_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_nome_key UNIQUE (nome);


--
-- TOC entry 3358 (class 2606 OID 16604)
-- Name: npc npc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_pkey PRIMARY KEY (id);


--
-- TOC entry 3344 (class 2606 OID 16540)
-- Name: personagem personagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem
    ADD CONSTRAINT personagem_pkey PRIMARY KEY (id);


--
-- TOC entry 3346 (class 2606 OID 16675)
-- Name: player player_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_id_key UNIQUE (id);


--
-- TOC entry 3348 (class 2606 OID 16567)
-- Name: player player_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_nome_key UNIQUE (nome);


--
-- TOC entry 3350 (class 2606 OID 25285)
-- Name: player player_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);


--
-- TOC entry 3340 (class 2606 OID 16501)
-- Name: regiao regiao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao
    ADD CONSTRAINT regiao_pkey PRIMARY KEY (id);


--
-- TOC entry 3382 (class 2606 OID 16762)
-- Name: riqueza riqueza_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_nome_key UNIQUE (nome);


--
-- TOC entry 3384 (class 2606 OID 16760)
-- Name: riqueza riqueza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_pkey PRIMARY KEY (id);


--
-- TOC entry 3402 (class 2606 OID 16931)
-- Name: vende vende_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_pkey PRIMARY KEY (idinstanciaitem);


--
-- TOC entry 3426 (class 2606 OID 16749)
-- Name: armas armas_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3446 (class 2606 OID 25234)
-- Name: batalha_pvc_cm batalha_pvc_cm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3447 (class 2606 OID 25244)
-- Name: batalha_pvc_cm batalha_pvc_cm_idinstcriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_idinstcriatura_fkey FOREIGN KEY (idinstcriatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3448 (class 2606 OID 25239)
-- Name: batalha_pvc_cm batalha_pvc_cm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3449 (class 2606 OID 25254)
-- Name: batalha_pvc_sm batalha_pvc_sm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3450 (class 2606 OID 25264)
-- Name: batalha_pvc_sm batalha_pvc_sm_idinstcriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_idinstcriatura_fkey FOREIGN KEY (idinstcriatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3451 (class 2606 OID 25259)
-- Name: batalha_pvc_sm batalha_pvc_sm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3440 (class 2606 OID 25194)
-- Name: batalha_pvp_cm batalha_pvp_cm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3441 (class 2606 OID 25199)
-- Name: batalha_pvp_cm batalha_pvp_cm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3442 (class 2606 OID 25204)
-- Name: batalha_pvp_cm batalha_pvp_cm_idplayer_vivo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_idplayer_vivo_fkey FOREIGN KEY (idplayer_vivo) REFERENCES public.player(id);


--
-- TOC entry 3443 (class 2606 OID 25214)
-- Name: batalha_pvp_sm batalha_pvp_sm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3444 (class 2606 OID 25219)
-- Name: batalha_pvp_sm batalha_pvp_sm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3445 (class 2606 OID 25224)
-- Name: batalha_pvp_sm batalha_pvp_sm_idplayer_vivo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_idplayer_vivo_fkey FOREIGN KEY (idplayer_vivo) REFERENCES public.player(id);


--
-- TOC entry 3420 (class 2606 OID 16588)
-- Name: criatura criatura_idpersonagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_idpersonagem_fkey FOREIGN KEY (idpersonagem) REFERENCES public.personagem(id);


--
-- TOC entry 3429 (class 2606 OID 16794)
-- Name: equipamento equipamento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3424 (class 2606 OID 16710)
-- Name: guilda guilda_id_dono_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_id_dono_fkey FOREIGN KEY (id_dono) REFERENCES public.player(nome);


--
-- TOC entry 3423 (class 2606 OID 17005)
-- Name: habilidades habilidades_nomeplayer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidades
    ADD CONSTRAINT habilidades_nomeplayer_fkey FOREIGN KEY (nomeplayer) REFERENCES public.player(nome);


--
-- TOC entry 3433 (class 2606 OID 25290)
-- Name: historico historico_idplayermorto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico
    ADD CONSTRAINT historico_idplayermorto_fkey FOREIGN KEY (idplayermorto) REFERENCES public.player(id);


--
-- TOC entry 3438 (class 2606 OID 16995)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_i_idinstanciacriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_i_idinstanciacriatura_fkey FOREIGN KEY (idinstanciacriatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3439 (class 2606 OID 17000)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_item_idinstanciaitem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_item_idinstanciaitem_fkey FOREIGN KEY (idinstanciaitem) REFERENCES public.instancia_item(id);


--
-- TOC entry 3430 (class 2606 OID 16808)
-- Name: instancia_criatura instanciacriatura_idcriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura
    ADD CONSTRAINT instanciacriatura_idcriatura_fkey FOREIGN KEY (idcriatura) REFERENCES public.criatura(id);


--
-- TOC entry 3425 (class 2606 OID 16735)
-- Name: instancia_item instanciaitem_iditem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item
    ADD CONSTRAINT instanciaitem_iditem_fkey FOREIGN KEY (iditem) REFERENCES public.item(id);


--
-- TOC entry 3432 (class 2606 OID 25297)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_idplayer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_idplayer_fkey FOREIGN KEY (idplayer) REFERENCES public.player(id);


--
-- TOC entry 3422 (class 2606 OID 16683)
-- Name: inventario inventario_idplayer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_idplayer_fkey FOREIGN KEY (idplayer) REFERENCES public.player(id);


--
-- TOC entry 3431 (class 2606 OID 16821)
-- Name: inventario_guarda_instancia_item inventarioguardainstanciaitem_idinstanciaitem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventarioguardainstanciaitem_idinstanciaitem_fkey FOREIGN KEY (idinstanciaitem) REFERENCES public.instancia_item(id);


--
-- TOC entry 3416 (class 2606 OID 16519)
-- Name: localizacao localizacao_idregiao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao
    ADD CONSTRAINT localizacao_idregiao_fkey FOREIGN KEY (idregiao) REFERENCES public.regiao(id);


--
-- TOC entry 3428 (class 2606 OID 16777)
-- Name: mochila mochila_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3434 (class 2606 OID 16922)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_idinstanciaitem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_idinstanciaitem_fkey FOREIGN KEY (idinstanciaitem) REFERENCES public.instancia_item(id);


--
-- TOC entry 3435 (class 2606 OID 16917)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_idnpc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_idnpc_fkey FOREIGN KEY (idnpc) REFERENCES public.npc(id);


--
-- TOC entry 3421 (class 2606 OID 16607)
-- Name: npc npc_idpersonagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_idpersonagem_fkey FOREIGN KEY (idpersonagem) REFERENCES public.personagem(id);


--
-- TOC entry 3417 (class 2606 OID 16541)
-- Name: personagem personagem_idlocalizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem
    ADD CONSTRAINT personagem_idlocalizacao_fkey FOREIGN KEY (idlocalizacao) REFERENCES public.localizacao(id);


--
-- TOC entry 3419 (class 2606 OID 17064)
-- Name: player player_idconta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_idconta_fkey FOREIGN KEY (idconta) REFERENCES public.conta(id);


--
-- TOC entry 3418 (class 2606 OID 16568)
-- Name: player player_idpersonagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_idpersonagem_fkey FOREIGN KEY (idpersonagem) REFERENCES public.personagem(id);


--
-- TOC entry 3415 (class 2606 OID 16502)
-- Name: regiao regiao_idmapa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao
    ADD CONSTRAINT regiao_idmapa_fkey FOREIGN KEY (idmapa) REFERENCES public.mapa(id);


--
-- TOC entry 3427 (class 2606 OID 16763)
-- Name: riqueza riqueza_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3436 (class 2606 OID 16932)
-- Name: vende vende_idnpc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_idnpc_fkey FOREIGN KEY (idnpc) REFERENCES public.npc(id);


--
-- TOC entry 3437 (class 2606 OID 16937)
-- Name: vende vende_nomeplayer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_nomeplayer_fkey FOREIGN KEY (nomeplayer) REFERENCES public.player(nome);


-- Completed on 2022-08-18 21:47:24

--
-- PostgreSQL database dump complete
--