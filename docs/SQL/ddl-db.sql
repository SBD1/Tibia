--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-08-29 22:02:33

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
-- TOC entry 5 (class 2615 OID 16835)
-- Name: replays; Type: SCHEMA; Schema: -; Owner: postgres
--

CREATE SCHEMA replays;


ALTER SCHEMA replays OWNER TO postgres;

--
-- TOC entry 869 (class 1247 OID 16396)
-- Name: pch; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.pch AS character varying(7)
	CONSTRAINT pch_check CHECK (((VALUE)::text = ANY (ARRAY[('corpo'::character varying)::text, ('cabeca'::character varying)::text, ('pernas'::character varying)::text, ('pes'::character varying)::text])));


ALTER DOMAIN public.pch OWNER TO postgres;

--
-- TOC entry 873 (class 1247 OID 16399)
-- Name: tipocriatura; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipocriatura AS character varying(20)
	CONSTRAINT tipocriatura_check CHECK (((VALUE)::text = ANY (ARRAY[('anfibios'::character varying)::text, ('aquaticos'::character varying)::text, ('aves'::character varying)::text, ('bosses'::character varying)::text, ('constructos'::character varying)::text, ('criaturas_magicas'::character varying)::text, ('demonios'::character varying)::text, ('dragoes'::character varying)::text, ('elementais'::character varying)::text, ('extra_dimensionais'::character varying)::text, ('fadas'::character varying)::text, ('gigantes'::character varying)::text, ('humanos'::character varying)::text, ('humanoides'::character varying)::text, ('imortais'::character varying)::text, ('licantropos'::character varying)::text, ('mamiferos'::character varying)::text, ('mortos-vivos'::character varying)::text, ('plantas'::character varying)::text, ('repteis'::character varying)::text, ('slimes'::character varying)::text, ('the_ruthless_seven'::character varying)::text, ('triangle_of_terror'::character varying)::text, ('vermes'::character varying)::text])));


ALTER DOMAIN public.tipocriatura OWNER TO postgres;

--
-- TOC entry 877 (class 1247 OID 16402)
-- Name: tipoitem; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipoitem AS character varying(12)
	CONSTRAINT tipoitem_check CHECK (((VALUE)::text = ANY (ARRAY[('armas'::character varying)::text, ('equipamento'::character varying)::text, ('mochila'::character varying)::text, ('riqueza'::character varying)::text, ('none'::character varying)::text])));


ALTER DOMAIN public.tipoitem OWNER TO postgres;

--
-- TOC entry 881 (class 1247 OID 16405)
-- Name: tiponpc; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tiponpc AS character varying(12)
	CONSTRAINT tiponpc_check CHECK (((VALUE)::text = ANY (ARRAY[('comerciante'::character varying)::text, ('guia'::character varying)::text])));


ALTER DOMAIN public.tiponpc OWNER TO postgres;

--
-- TOC entry 885 (class 1247 OID 16408)
-- Name: tipopersonagem; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipopersonagem AS character(8)
	CONSTRAINT tipopersonagem_check CHECK ((VALUE = ANY (ARRAY['player'::bpchar, 'criatura'::bpchar, 'npc'::bpchar])));


ALTER DOMAIN public.tipopersonagem OWNER TO postgres;

--
-- TOC entry 889 (class 1247 OID 16411)
-- Name: vocacao; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.vocacao AS character varying(12)
	CONSTRAINT vocacao_check CHECK (((VALUE)::text = ANY (ARRAY[('cavaleiro'::character varying)::text, ('feiticeiro'::character varying)::text, ('paladino'::character varying)::text, ('druida'::character varying)::text, ('none'::character varying)::text])));


ALTER DOMAIN public.vocacao OWNER TO postgres;

--
-- TOC entry 266 (class 1255 OID 16883)
-- Name: get_conta_idade(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_conta_idade(_id_conta integer) RETURNS smallint
    LANGUAGE plpgsql
    AS $$  
DECLARE
	_idade SMALLINT;
BEGIN
  _idade := (SELECT EXTRACT(year FROM age(current_date, data_de_aniversario)) FROM conta WHERE id=_id_conta);
  RETURN _idade;
END;
$$;


ALTER FUNCTION public.get_conta_idade(_id_conta integer) OWNER TO postgres;

--
-- TOC entry 257 (class 1255 OID 16875)
-- Name: valid_region_change(integer, integer, boolean, integer, smallint); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.valid_region_change(_id_posicao integer, _id_player integer, _vip_check boolean, _id_conta integer, _vip_dias smallint) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
DECLARE
  _regiao_vip BOOLEAN;
  _player_vip SMALLINT;
  _permitido BOOLEAN;
BEGIN
  _regiao_vip := (SELECT r.vip_check FROM regiao r WHERE r.id = (SELECT p.id_regiao FROM localizao WHERE p.id = _id_posicao));
  IF vip = FALSE THEN
    _permitido := TRUE;
  ELSE 
    _player_vip := (SELECT d.vip_dias FROM conta d WHERE d.id = (SELECT c.id_conta FROM conta WHERE c.id = _id_conta));
    IF _player_vip > 0 THEN
      _permitido = TRUE;
    ELSE
      _permitido = FALSE;
	END IF;
  END IF;
    RETURN _permitido;
END;
$$;


ALTER FUNCTION public.valid_region_change(_id_posicao integer, _id_player integer, _vip_check boolean, _id_conta integer, _vip_dias smallint) OWNER TO postgres;

--
-- TOC entry 267 (class 1255 OID 16921)
-- Name: verificar_limite_inventario(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.verificar_limite_inventario() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    DECLARE
        capacidade_inventario INTEGER;
		peso_item_atual INTEGER;
        soma_peso_itens INTEGER;
    BEGIN
        SELECT capacidade INTO capacidade_inventario FROM inventario WHERE id_player = NEW.id_player;
		
        SELECT (COALESCE(soma_tot.peso_armas, 0) + COALESCE(soma_tot.peso_equip, 0) + COALESCE(soma_tot.peso_mochila, 0) + COALESCE(soma_tot.peso_riqueza, 0))
			INTO soma_peso_itens FROM(
				SELECT SUM(armas.peso) as peso_armas, SUM(equipamento.peso) as peso_equip, SUM(mochila.peso) as peso_mochila, SUM(riqueza.peso) as peso_riqueza 
					FROM inventario_guarda_instancia_item 
						LEFT JOIN instancia_item ON instancia_item.id = inventario_guarda_instancia_item.id_instancia_item 
						LEFT JOIN armas ON armas.id = instancia_item.id_item 
						LEFT JOIN equipamento ON equipamento.id = instancia_item.id_item 
						LEFT JOIN mochila ON mochila.id = instancia_item.id_item
						LEFT JOIN riqueza ON riqueza.id = instancia_item.id_item) 
					as soma_tot;
					
		SELECT (COALESCE(armas.peso, 0) + COALESCE(equipamento.peso, 0) + COALESCE(mochila.peso, 0) + COALESCE(riqueza.peso, 0)) INTO peso_item_atual FROM instancia_item
			LEFT JOIN armas ON armas.id = instancia_item.id_item 
			LEFT JOIN equipamento ON equipamento.id = instancia_item.id_item 
			LEFT JOIN mochila ON mochila.id = instancia_item.id_item
			LEFT JOIN riqueza ON riqueza.id = instancia_item.id_item
		WHERE instancia_item.id = NEW.id_instancia_item;
		
		RAISE NOTICE 'soma_peso_item := %', soma_peso_itens;
		RAISE NOTICE 'capacidade := %', capacidade_inventario;
        IF soma_peso_itens + peso_item_atual > capacidade_inventario THEN
            RAISE EXCEPTION 'Peso máximo do inventário alcançado. Não é possível adicionar mais items.';
        END IF;
        RETURN NEW;
    END;
$$;


ALTER FUNCTION public.verificar_limite_inventario() OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 210 (class 1259 OID 16413)
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
-- TOC entry 211 (class 1259 OID 16418)
-- Name: batalha; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha (
    id integer NOT NULL,
    tipo character(6) NOT NULL
);


ALTER TABLE public.batalha OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16421)
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
-- TOC entry 3617 (class 0 OID 0)
-- Dependencies: 212
-- Name: batalha_idbatalha_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.batalha_idbatalha_seq OWNED BY public.batalha.id;


--
-- TOC entry 213 (class 1259 OID 16422)
-- Name: batalha_pvc_cm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvc_cm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idinstcriatura integer NOT NULL
);


ALTER TABLE public.batalha_pvc_cm OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16425)
-- Name: batalha_pvc_sm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvc_sm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idinstcriatura integer NOT NULL
);


ALTER TABLE public.batalha_pvc_sm OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16428)
-- Name: batalha_pvp_cm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvp_cm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idplayer_vivo integer NOT NULL
);


ALTER TABLE public.batalha_pvp_cm OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16431)
-- Name: batalha_pvp_sm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvp_sm (
    idbatalha integer NOT NULL,
    idplayer_morto integer NOT NULL,
    idplayer_vivo integer NOT NULL
);


ALTER TABLE public.batalha_pvp_sm OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 16923)
-- Name: capacidade_inventario; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.capacidade_inventario (
    capacidade integer
);


ALTER TABLE public.capacidade_inventario OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16434)
-- Name: conta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conta (
    email character varying(320) NOT NULL,
    senha character varying(31) NOT NULL,
    nome character varying(50) NOT NULL,
    data_de_criacao timestamp with time zone,
    data_de_aniversario date NOT NULL,
    genero character(10) NOT NULL,
    localidade character varying(50) NOT NULL,
    idade smallint,
    banimento boolean DEFAULT false NOT NULL,
    vip_dias smallint NOT NULL,
    id integer NOT NULL
);


ALTER TABLE public.conta OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16438)
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
-- TOC entry 3618 (class 0 OID 0)
-- Dependencies: 218
-- Name: conta_idconta_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.conta_idconta_seq OWNED BY public.conta.id;


--
-- TOC entry 219 (class 1259 OID 16439)
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
-- TOC entry 220 (class 1259 OID 16444)
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
-- TOC entry 3619 (class 0 OID 0)
-- Dependencies: 220
-- Name: criatura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.criatura_id_seq OWNED BY public.criatura.id;


--
-- TOC entry 221 (class 1259 OID 16445)
-- Name: equipamento; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.equipamento (
    id integer NOT NULL,
    nome character varying(50),
    vocacao public.vocacao NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    defesa integer NOT NULL,
    pch public.pch NOT NULL,
    peso double precision NOT NULL
);


ALTER TABLE public.equipamento OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16450)
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
-- TOC entry 223 (class 1259 OID 16456)
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
-- TOC entry 3620 (class 0 OID 0)
-- Dependencies: 223
-- Name: guilda_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.guilda_id_seq OWNED BY public.guilda.id;


--
-- TOC entry 224 (class 1259 OID 16457)
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
-- TOC entry 225 (class 1259 OID 16461)
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
-- TOC entry 226 (class 1259 OID 16464)
-- Name: instancia_criatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_criatura (
    id integer NOT NULL,
    idcriatura integer NOT NULL
);


ALTER TABLE public.instancia_criatura OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16467)
-- Name: instancia_criatura_carrega_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_criatura_carrega_instancia_item (
    idinstanciacriatura integer NOT NULL,
    idinstanciaitem integer NOT NULL
);


ALTER TABLE public.instancia_criatura_carrega_instancia_item OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16470)
-- Name: instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_item (
    id integer NOT NULL,
    id_item integer NOT NULL
);


ALTER TABLE public.instancia_item OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16473)
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
-- TOC entry 3621 (class 0 OID 0)
-- Dependencies: 229
-- Name: instanciacriatura_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instanciacriatura_id_seq OWNED BY public.instancia_criatura.id;


--
-- TOC entry 230 (class 1259 OID 16474)
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
-- TOC entry 3622 (class 0 OID 0)
-- Dependencies: 230
-- Name: instanciaitem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.instanciaitem_id_seq OWNED BY public.instancia_item.id;


--
-- TOC entry 231 (class 1259 OID 16475)
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
    id_player integer NOT NULL
);


ALTER TABLE public.inventario OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16479)
-- Name: inventario_guarda_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.inventario_guarda_instancia_item (
    id_instancia_item integer NOT NULL,
    id_player integer NOT NULL
);


ALTER TABLE public.inventario_guarda_instancia_item OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16482)
-- Name: item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.item (
    id integer NOT NULL,
    tipo public.tipoitem DEFAULT 'none'::character varying NOT NULL
);


ALTER TABLE public.item OWNER TO postgres;

--
-- TOC entry 234 (class 1259 OID 16488)
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
-- TOC entry 3623 (class 0 OID 0)
-- Dependencies: 234
-- Name: item_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.item_id_seq OWNED BY public.item.id;


--
-- TOC entry 235 (class 1259 OID 16489)
-- Name: localizacao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.localizacao (
    id integer NOT NULL,
    posicao_x numeric DEFAULT 0 NOT NULL,
    posicao_y numeric DEFAULT 0 NOT NULL,
    posicao_z numeric DEFAULT 0 NOT NULL,
    id_regiao integer NOT NULL
);


ALTER TABLE public.localizacao OWNER TO postgres;

--
-- TOC entry 236 (class 1259 OID 16497)
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
-- TOC entry 3624 (class 0 OID 0)
-- Dependencies: 236
-- Name: localizacao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.localizacao_id_seq OWNED BY public.localizacao.id;


--
-- TOC entry 237 (class 1259 OID 16498)
-- Name: mapa; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.mapa (
    id integer NOT NULL,
    nome character varying(15) NOT NULL
);


ALTER TABLE public.mapa OWNER TO postgres;

--
-- TOC entry 238 (class 1259 OID 16501)
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
-- TOC entry 3625 (class 0 OID 0)
-- Dependencies: 238
-- Name: mapa_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.mapa_id_seq OWNED BY public.mapa.id;


--
-- TOC entry 239 (class 1259 OID 16502)
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
-- TOC entry 240 (class 1259 OID 16507)
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
-- TOC entry 241 (class 1259 OID 16512)
-- Name: npc_carrega_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.npc_carrega_instancia_item (
    idnpc integer NOT NULL,
    idinstanciaitem integer NOT NULL
);


ALTER TABLE public.npc_carrega_instancia_item OWNER TO postgres;

--
-- TOC entry 242 (class 1259 OID 16515)
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
-- TOC entry 3626 (class 0 OID 0)
-- Dependencies: 242
-- Name: npc_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.npc_id_seq OWNED BY public.npc.id;


--
-- TOC entry 243 (class 1259 OID 16516)
-- Name: personagem; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.personagem (
    id integer NOT NULL,
    tipo public.tipopersonagem NOT NULL,
    idlocalizacao integer NOT NULL
);


ALTER TABLE public.personagem OWNER TO postgres;

--
-- TOC entry 244 (class 1259 OID 16521)
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
-- TOC entry 3627 (class 0 OID 0)
-- Dependencies: 244
-- Name: personagem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personagem_id_seq OWNED BY public.personagem.id;


--
-- TOC entry 245 (class 1259 OID 16522)
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
    genero character(10) NOT NULL,
    experiencia bigint DEFAULT 0 NOT NULL,
    idpersonagem integer NOT NULL,
    level smallint DEFAULT 0 NOT NULL,
    id integer NOT NULL,
    data_de_criacao timestamp with time zone NOT NULL,
    id_conta integer NOT NULL
);


ALTER TABLE public.player OWNER TO postgres;

--
-- TOC entry 246 (class 1259 OID 16534)
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
-- TOC entry 3628 (class 0 OID 0)
-- Dependencies: 246
-- Name: player_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.player_id_seq OWNED BY public.player.id;


--
-- TOC entry 251 (class 1259 OID 16848)
-- Name: players_guilda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.players_guilda (
    id_guilda integer NOT NULL,
    id_player integer NOT NULL
);


ALTER TABLE public.players_guilda OWNER TO postgres;

--
-- TOC entry 247 (class 1259 OID 16535)
-- Name: regiao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.regiao (
    id integer NOT NULL,
    vip_check boolean DEFAULT false NOT NULL,
    idmapa integer NOT NULL,
    nome character varying(32) NOT NULL
);


ALTER TABLE public.regiao OWNER TO postgres;

--
-- TOC entry 248 (class 1259 OID 16539)
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
-- TOC entry 3629 (class 0 OID 0)
-- Dependencies: 248
-- Name: regiao_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.regiao_id_seq OWNED BY public.regiao.id;


--
-- TOC entry 249 (class 1259 OID 16540)
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
-- TOC entry 252 (class 1259 OID 16914)
-- Name: soma_peso_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.soma_peso_item (
    peso_armas double precision
);


ALTER TABLE public.soma_peso_item OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 16545)
-- Name: vende; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vende (
    idnpc integer NOT NULL,
    idinstanciaitem integer NOT NULL,
    nomeplayer character varying(32)
);


ALTER TABLE public.vende OWNER TO postgres;

--
-- TOC entry 3324 (class 2604 OID 16548)
-- Name: batalha id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha ALTER COLUMN id SET DEFAULT nextval('public.batalha_idbatalha_seq'::regclass);


--
-- TOC entry 3326 (class 2604 OID 16549)
-- Name: conta id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta ALTER COLUMN id SET DEFAULT nextval('public.conta_idconta_seq'::regclass);


--
-- TOC entry 3327 (class 2604 OID 16550)
-- Name: criatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura ALTER COLUMN id SET DEFAULT nextval('public.criatura_id_seq'::regclass);


--
-- TOC entry 3329 (class 2604 OID 16551)
-- Name: guilda id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda ALTER COLUMN id SET DEFAULT nextval('public.guilda_id_seq'::regclass);


--
-- TOC entry 3331 (class 2604 OID 16552)
-- Name: instancia_criatura id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura ALTER COLUMN id SET DEFAULT nextval('public.instanciacriatura_id_seq'::regclass);


--
-- TOC entry 3332 (class 2604 OID 16553)
-- Name: instancia_item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item ALTER COLUMN id SET DEFAULT nextval('public.instanciaitem_id_seq'::regclass);


--
-- TOC entry 3335 (class 2604 OID 16554)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3339 (class 2604 OID 16555)
-- Name: localizacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao ALTER COLUMN id SET DEFAULT nextval('public.localizacao_id_seq'::regclass);


--
-- TOC entry 3340 (class 2604 OID 16556)
-- Name: mapa id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapa ALTER COLUMN id SET DEFAULT nextval('public.mapa_id_seq'::regclass);


--
-- TOC entry 3341 (class 2604 OID 16557)
-- Name: npc id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc ALTER COLUMN id SET DEFAULT nextval('public.npc_id_seq'::regclass);


--
-- TOC entry 3342 (class 2604 OID 16558)
-- Name: personagem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem ALTER COLUMN id SET DEFAULT nextval('public.personagem_id_seq'::regclass);


--
-- TOC entry 3350 (class 2604 OID 16559)
-- Name: player id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player ALTER COLUMN id SET DEFAULT nextval('public.player_id_seq'::regclass);


--
-- TOC entry 3352 (class 2604 OID 16560)
-- Name: regiao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao ALTER COLUMN id SET DEFAULT nextval('public.regiao_id_seq'::regclass);


--
-- TOC entry 3354 (class 2606 OID 16562)
-- Name: armas armas_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_nome_key UNIQUE (nome);


--
-- TOC entry 3356 (class 2606 OID 16564)
-- Name: armas armas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_pkey PRIMARY KEY (id);


--
-- TOC entry 3358 (class 2606 OID 16566)
-- Name: batalha batalha_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha
    ADD CONSTRAINT batalha_pkey PRIMARY KEY (id);


--
-- TOC entry 3360 (class 2606 OID 16568)
-- Name: batalha_pvc_cm batalha_pvc_cm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3362 (class 2606 OID 16570)
-- Name: batalha_pvc_sm batalha_pvc_sm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3364 (class 2606 OID 16572)
-- Name: batalha_pvp_cm batalha_pvp_cm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3366 (class 2606 OID 16574)
-- Name: batalha_pvp_sm batalha_pvp_sm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_pkey PRIMARY KEY (idbatalha);


--
-- TOC entry 3368 (class 2606 OID 16576)
-- Name: conta conta_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_email_key UNIQUE (email);


--
-- TOC entry 3370 (class 2606 OID 16578)
-- Name: conta conta_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_id_key UNIQUE (id);


--
-- TOC entry 3372 (class 2606 OID 16580)
-- Name: conta conta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_pkey PRIMARY KEY (id);


--
-- TOC entry 3374 (class 2606 OID 16582)
-- Name: criatura criatura_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_nome_key UNIQUE (nome);


--
-- TOC entry 3376 (class 2606 OID 16584)
-- Name: criatura criatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_pkey PRIMARY KEY (id);


--
-- TOC entry 3378 (class 2606 OID 16586)
-- Name: equipamento equipamento_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_nome_key UNIQUE (nome);


--
-- TOC entry 3380 (class 2606 OID 16588)
-- Name: equipamento equipamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_pkey PRIMARY KEY (id);


--
-- TOC entry 3382 (class 2606 OID 16590)
-- Name: guilda guilda_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_nome_key UNIQUE (nome);


--
-- TOC entry 3384 (class 2606 OID 16592)
-- Name: guilda guilda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_pkey PRIMARY KEY (id);


--
-- TOC entry 3386 (class 2606 OID 16594)
-- Name: habilidades habilidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidades
    ADD CONSTRAINT habilidades_pkey PRIMARY KEY (nomeplayer);


--
-- TOC entry 3388 (class 2606 OID 16596)
-- Name: historico historico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico
    ADD CONSTRAINT historico_pkey PRIMARY KEY (idplayermorto);


--
-- TOC entry 3392 (class 2606 OID 16598)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_item_pkey PRIMARY KEY (idinstanciacriatura);


--
-- TOC entry 3390 (class 2606 OID 16600)
-- Name: instancia_criatura instanciacriatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura
    ADD CONSTRAINT instanciacriatura_pkey PRIMARY KEY (id);


--
-- TOC entry 3394 (class 2606 OID 16602)
-- Name: instancia_item instanciaitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item
    ADD CONSTRAINT instanciaitem_pkey PRIMARY KEY (id);


--
-- TOC entry 3398 (class 2606 OID 16913)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_pkey PRIMARY KEY (id_player, id_instancia_item);


--
-- TOC entry 3396 (class 2606 OID 16606)
-- Name: inventario inventario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_pkey PRIMARY KEY (id_player);


--
-- TOC entry 3400 (class 2606 OID 16608)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3402 (class 2606 OID 16610)
-- Name: localizacao localizacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao
    ADD CONSTRAINT localizacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3404 (class 2606 OID 16612)
-- Name: mapa mapa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapa
    ADD CONSTRAINT mapa_pkey PRIMARY KEY (id);


--
-- TOC entry 3406 (class 2606 OID 16614)
-- Name: mochila mochila_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_nome_key UNIQUE (nome);


--
-- TOC entry 3408 (class 2606 OID 16616)
-- Name: mochila mochila_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_pkey PRIMARY KEY (id);


--
-- TOC entry 3414 (class 2606 OID 16618)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_pkey PRIMARY KEY (idnpc, idinstanciaitem);


--
-- TOC entry 3410 (class 2606 OID 16620)
-- Name: npc npc_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_nome_key UNIQUE (nome);


--
-- TOC entry 3412 (class 2606 OID 16622)
-- Name: npc npc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_pkey PRIMARY KEY (id);


--
-- TOC entry 3416 (class 2606 OID 16624)
-- Name: personagem personagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem
    ADD CONSTRAINT personagem_pkey PRIMARY KEY (id);


--
-- TOC entry 3418 (class 2606 OID 16626)
-- Name: player player_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_id_key UNIQUE (id);


--
-- TOC entry 3420 (class 2606 OID 16628)
-- Name: player player_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_nome_key UNIQUE (nome);


--
-- TOC entry 3422 (class 2606 OID 16630)
-- Name: player player_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);


--
-- TOC entry 3432 (class 2606 OID 16852)
-- Name: players_guilda players_guilda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players_guilda
    ADD CONSTRAINT players_guilda_pkey PRIMARY KEY (id_guilda);


--
-- TOC entry 3424 (class 2606 OID 16632)
-- Name: regiao regiao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao
    ADD CONSTRAINT regiao_pkey PRIMARY KEY (id);


--
-- TOC entry 3426 (class 2606 OID 16634)
-- Name: riqueza riqueza_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_nome_key UNIQUE (nome);


--
-- TOC entry 3428 (class 2606 OID 16636)
-- Name: riqueza riqueza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_pkey PRIMARY KEY (id);


--
-- TOC entry 3430 (class 2606 OID 16638)
-- Name: vende vende_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_pkey PRIMARY KEY (idinstanciaitem);


--
-- TOC entry 3472 (class 2620 OID 16922)
-- Name: inventario_guarda_instancia_item trigger_verificar_limite_inventario; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_verificar_limite_inventario BEFORE INSERT ON public.inventario_guarda_instancia_item FOR EACH ROW EXECUTE FUNCTION public.verificar_limite_inventario();


--
-- TOC entry 3433 (class 2606 OID 16639)
-- Name: armas armas_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3434 (class 2606 OID 16644)
-- Name: batalha_pvc_cm batalha_pvc_cm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3435 (class 2606 OID 16649)
-- Name: batalha_pvc_cm batalha_pvc_cm_idinstcriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_idinstcriatura_fkey FOREIGN KEY (idinstcriatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3436 (class 2606 OID 16654)
-- Name: batalha_pvc_cm batalha_pvc_cm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3437 (class 2606 OID 16659)
-- Name: batalha_pvc_sm batalha_pvc_sm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3438 (class 2606 OID 16664)
-- Name: batalha_pvc_sm batalha_pvc_sm_idinstcriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_idinstcriatura_fkey FOREIGN KEY (idinstcriatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3439 (class 2606 OID 16669)
-- Name: batalha_pvc_sm batalha_pvc_sm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3440 (class 2606 OID 16674)
-- Name: batalha_pvp_cm batalha_pvp_cm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3441 (class 2606 OID 16679)
-- Name: batalha_pvp_cm batalha_pvp_cm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3442 (class 2606 OID 16684)
-- Name: batalha_pvp_cm batalha_pvp_cm_idplayer_vivo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_idplayer_vivo_fkey FOREIGN KEY (idplayer_vivo) REFERENCES public.player(id);


--
-- TOC entry 3443 (class 2606 OID 16689)
-- Name: batalha_pvp_sm batalha_pvp_sm_idbatalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_idbatalha_fkey FOREIGN KEY (idbatalha) REFERENCES public.batalha(id);


--
-- TOC entry 3444 (class 2606 OID 16694)
-- Name: batalha_pvp_sm batalha_pvp_sm_idplayer_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_idplayer_morto_fkey FOREIGN KEY (idplayer_morto) REFERENCES public.player(id);


--
-- TOC entry 3445 (class 2606 OID 16699)
-- Name: batalha_pvp_sm batalha_pvp_sm_idplayer_vivo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_idplayer_vivo_fkey FOREIGN KEY (idplayer_vivo) REFERENCES public.player(id);


--
-- TOC entry 3446 (class 2606 OID 16704)
-- Name: criatura criatura_idpersonagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_idpersonagem_fkey FOREIGN KEY (idpersonagem) REFERENCES public.personagem(id);


--
-- TOC entry 3447 (class 2606 OID 16709)
-- Name: equipamento equipamento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3448 (class 2606 OID 16714)
-- Name: guilda guilda_id_dono_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_id_dono_fkey FOREIGN KEY (id_dono) REFERENCES public.player(nome);


--
-- TOC entry 3449 (class 2606 OID 16719)
-- Name: habilidades habilidades_nomeplayer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidades
    ADD CONSTRAINT habilidades_nomeplayer_fkey FOREIGN KEY (nomeplayer) REFERENCES public.player(nome);


--
-- TOC entry 3450 (class 2606 OID 16724)
-- Name: historico historico_idplayermorto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico
    ADD CONSTRAINT historico_idplayermorto_fkey FOREIGN KEY (idplayermorto) REFERENCES public.player(id);


--
-- TOC entry 3452 (class 2606 OID 16729)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_i_idinstanciacriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_i_idinstanciacriatura_fkey FOREIGN KEY (idinstanciacriatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3453 (class 2606 OID 16734)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_item_idinstanciaitem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_item_idinstanciaitem_fkey FOREIGN KEY (idinstanciaitem) REFERENCES public.instancia_item(id);


--
-- TOC entry 3451 (class 2606 OID 16739)
-- Name: instancia_criatura instanciacriatura_idcriatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura
    ADD CONSTRAINT instanciacriatura_idcriatura_fkey FOREIGN KEY (idcriatura) REFERENCES public.criatura(id);


--
-- TOC entry 3454 (class 2606 OID 16744)
-- Name: instancia_item instanciaitem_iditem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item
    ADD CONSTRAINT instanciaitem_iditem_fkey FOREIGN KEY (id_item) REFERENCES public.item(id);


--
-- TOC entry 3457 (class 2606 OID 16902)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3455 (class 2606 OID 16907)
-- Name: inventario inventario_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3456 (class 2606 OID 16759)
-- Name: inventario_guarda_instancia_item inventarioguardainstanciaitem_idinstanciaitem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventarioguardainstanciaitem_idinstanciaitem_fkey FOREIGN KEY (id_instancia_item) REFERENCES public.instancia_item(id);


--
-- TOC entry 3458 (class 2606 OID 16764)
-- Name: localizacao localizacao_idregiao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao
    ADD CONSTRAINT localizacao_idregiao_fkey FOREIGN KEY (id_regiao) REFERENCES public.regiao(id);


--
-- TOC entry 3459 (class 2606 OID 16769)
-- Name: mochila mochila_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3461 (class 2606 OID 16774)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_idinstanciaitem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_idinstanciaitem_fkey FOREIGN KEY (idinstanciaitem) REFERENCES public.instancia_item(id);


--
-- TOC entry 3462 (class 2606 OID 16779)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_idnpc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_idnpc_fkey FOREIGN KEY (idnpc) REFERENCES public.npc(id);


--
-- TOC entry 3460 (class 2606 OID 16784)
-- Name: npc npc_idpersonagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_idpersonagem_fkey FOREIGN KEY (idpersonagem) REFERENCES public.personagem(id);


--
-- TOC entry 3463 (class 2606 OID 16789)
-- Name: personagem personagem_idlocalizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem
    ADD CONSTRAINT personagem_idlocalizacao_fkey FOREIGN KEY (idlocalizacao) REFERENCES public.localizacao(id);


--
-- TOC entry 3464 (class 2606 OID 16794)
-- Name: player player_idconta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_idconta_fkey FOREIGN KEY (id_conta) REFERENCES public.conta(id);


--
-- TOC entry 3465 (class 2606 OID 16799)
-- Name: player player_idpersonagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_idpersonagem_fkey FOREIGN KEY (idpersonagem) REFERENCES public.personagem(id);


--
-- TOC entry 3470 (class 2606 OID 16853)
-- Name: players_guilda players_guilda_id_guilda_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players_guilda
    ADD CONSTRAINT players_guilda_id_guilda_fkey FOREIGN KEY (id_guilda) REFERENCES public.guilda(id);


--
-- TOC entry 3471 (class 2606 OID 16858)
-- Name: players_guilda players_guilda_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players_guilda
    ADD CONSTRAINT players_guilda_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3466 (class 2606 OID 16804)
-- Name: regiao regiao_idmapa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao
    ADD CONSTRAINT regiao_idmapa_fkey FOREIGN KEY (idmapa) REFERENCES public.mapa(id);


--
-- TOC entry 3467 (class 2606 OID 16809)
-- Name: riqueza riqueza_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3468 (class 2606 OID 16814)
-- Name: vende vende_idnpc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_idnpc_fkey FOREIGN KEY (idnpc) REFERENCES public.npc(id);


--
-- TOC entry 3469 (class 2606 OID 16819)
-- Name: vende vende_nomeplayer_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_nomeplayer_fkey FOREIGN KEY (nomeplayer) REFERENCES public.player(nome);


-- Completed on 2022-08-29 22:02:34

--
-- PostgreSQL database dump complete
--

