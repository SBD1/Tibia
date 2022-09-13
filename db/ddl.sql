--
-- PostgreSQL database dump
--

-- Dumped from database version 14.5
-- Dumped by pg_dump version 14.5

-- Started on 2022-09-13 00:27:39

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
-- TOC entry 880 (class 1247 OID 16396)
-- Name: pch; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.pch AS character varying(7)
	CONSTRAINT pch_check CHECK (((VALUE)::text = ANY (ARRAY[('corpo'::character varying)::text, ('cabeca'::character varying)::text, ('pernas'::character varying)::text, ('pes'::character varying)::text])));


ALTER DOMAIN public.pch OWNER TO postgres;

--
-- TOC entry 884 (class 1247 OID 16399)
-- Name: tipocriatura; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipocriatura AS character varying(20)
	CONSTRAINT tipocriatura_check CHECK (((VALUE)::text = ANY (ARRAY[('anfibios'::character varying)::text, ('aquaticos'::character varying)::text, ('aves'::character varying)::text, ('bosses'::character varying)::text, ('constructos'::character varying)::text, ('criaturas_magicas'::character varying)::text, ('demonios'::character varying)::text, ('dragoes'::character varying)::text, ('elementais'::character varying)::text, ('extra_dimensionais'::character varying)::text, ('fadas'::character varying)::text, ('gigantes'::character varying)::text, ('humanos'::character varying)::text, ('humanoides'::character varying)::text, ('imortais'::character varying)::text, ('licantropos'::character varying)::text, ('mamiferos'::character varying)::text, ('mortos-vivos'::character varying)::text, ('plantas'::character varying)::text, ('repteis'::character varying)::text, ('slimes'::character varying)::text, ('the_ruthless_seven'::character varying)::text, ('triangle_of_terror'::character varying)::text, ('vermes'::character varying)::text])));


ALTER DOMAIN public.tipocriatura OWNER TO postgres;

--
-- TOC entry 888 (class 1247 OID 16402)
-- Name: tipoitem; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipoitem AS character varying(12)
	CONSTRAINT tipoitem_check CHECK (((VALUE)::text = ANY (ARRAY[('armas'::character varying)::text, ('equipamento'::character varying)::text, ('mochila'::character varying)::text, ('riqueza'::character varying)::text, ('none'::character varying)::text])));


ALTER DOMAIN public.tipoitem OWNER TO postgres;

--
-- TOC entry 892 (class 1247 OID 16405)
-- Name: tiponpc; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tiponpc AS character varying(12)
	CONSTRAINT tiponpc_check CHECK (((VALUE)::text = ANY (ARRAY[('comerciante'::character varying)::text, ('guia'::character varying)::text])));


ALTER DOMAIN public.tiponpc OWNER TO postgres;

--
-- TOC entry 896 (class 1247 OID 16408)
-- Name: tipopersonagem; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.tipopersonagem AS character(8)
	CONSTRAINT tipopersonagem_check CHECK ((VALUE = ANY (ARRAY['player'::bpchar, 'criatura'::bpchar, 'npc'::bpchar])));


ALTER DOMAIN public.tipopersonagem OWNER TO postgres;

--
-- TOC entry 900 (class 1247 OID 16411)
-- Name: vocacao; Type: DOMAIN; Schema: public; Owner: postgres
--

CREATE DOMAIN public.vocacao AS character varying(12)
	CONSTRAINT vocacao_check CHECK (((VALUE)::text = ANY (ARRAY[('cavaleiro'::character varying)::text, ('feiticeiro'::character varying)::text, ('paladino'::character varying)::text, ('druida'::character varying)::text, ('none'::character varying)::text])));


ALTER DOMAIN public.vocacao OWNER TO postgres;

--
-- TOC entry 275 (class 1255 OID 18431)
-- Name: check_backpack_has_item(integer, integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.check_backpack_has_item(_id_player integer, _id_instancia_item integer) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN (SELECT count(*) FROM inventario_guarda_instancia_item WHERE id_instancia_item=_id_instancia_item and id_player=_id_player);
END;
$$;


ALTER FUNCTION public.check_backpack_has_item(_id_player integer, _id_instancia_item integer) OWNER TO postgres;

--
-- TOC entry 274 (class 1255 OID 18430)
-- Name: check_item_exists(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.check_item_exists(_id_instancia_item integer) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
BEGIN
  RETURN (SELECT count(*) FROM instancia_item WHERE id = _id_instancia_item);
END;
$$;


ALTER FUNCTION public.check_item_exists(_id_instancia_item integer) OWNER TO postgres;

--
-- TOC entry 278 (class 1255 OID 18445)
-- Name: equip_weapon_from_inventory(integer, integer); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.equip_weapon_from_inventory(IN _id_instancia_item integer, IN _id_player integer)
    LANGUAGE plpgsql
    AS $$
  DECLARE 
 	_id_item integer;
  	_tipo_item tipoitem;
	_is_empty integer;
  BEGIN
    DELETE FROM inventario_guarda_instancia_item
    WHERE id_instancia_item = _id_instancia_item;
	
	_id_item = get_id_item(_id_instancia_item);
	_tipo_item = get_tipo_item(_id_item);
	
	--RAISE NOTICE '_id_item: %', _id_item;
	--RAISE NOTICE '_tipo_item: %', _tipo_item;
	
	IF LOWER(_tipo_item) = 'armas' THEN
		SELECT mao_dir FROM inventario INTO _is_empty WHERE id_player = _id_player;
		RAISE NOTICE '_is_empty: %', _is_empty;
		RAISE NOTICE 'Entrei aqui1.';
		
		IF _is_empty IS NOT NULL THEN
			RAISE NOTICE 'Entrei aqui2.';
			SELECT mao_esq FROM inventario INTO _is_empty WHERE id_player = _id_player;
			RAISE NOTICE '_is_empty: %', _is_empty;
			IF _is_empty IS NOT NULL THEN
				RAISE EXCEPTION 'Você já está usando duas armas. Desequipe uma delas e tente novamente.';
			ELSE 
				UPDATE inventario 
					SET mao_esq = _id_instancia_item WHERE id_player = _id_player;
			END IF;
		ELSE 
			UPDATE inventario 
				SET mao_dir = _id_instancia_item WHERE id_player = _id_player;
		END IF;
		
	END IF;
	
  END;
$$;


ALTER PROCEDURE public.equip_weapon_from_inventory(IN _id_instancia_item integer, IN _id_player integer) OWNER TO postgres;

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
-- TOC entry 270 (class 1255 OID 16931)
-- Name: get_id_item(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_id_item(_id_instancia integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$
	DECLARE
  	_id_item INTEGER;
BEGIN
	_id_item := (SELECT id_item FROM instancia_item WHERE id=_id_instancia);
	RETURN _id_item;
END;
$$;


ALTER FUNCTION public.get_id_item(_id_instancia integer) OWNER TO postgres;

--
-- TOC entry 273 (class 1255 OID 18429)
-- Name: get_item_on_the_floor(integer, integer); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.get_item_on_the_floor(IN _id_instancia_item integer, IN _id_player integer)
    LANGUAGE plpgsql
    AS $$
  BEGIN
    DELETE FROM instancia_item_posicao
    WHERE id_instancia_item = _id_instancia_item;

    INSERT INTO inventario_guarda_instancia_item (id_player, id_instancia_item)
    VALUES  (_id_player, _id_instancia_item);

  END;
$$;


ALTER PROCEDURE public.get_item_on_the_floor(IN _id_instancia_item integer, IN _id_player integer) OWNER TO postgres;

--
-- TOC entry 267 (class 1255 OID 16926)
-- Name: get_player_level(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_player_level(_id_player integer) RETURNS bigint
    LANGUAGE plpgsql
    AS $$
    DECLARE
        xp_player BIGINT;
BEGIN
	SELECT experiencia INTO xp_player FROM player WHERE id=_id_player;
  	RETURN ((xp_player) / 1000) + 1;
END;
$$;


ALTER FUNCTION public.get_player_level(_id_player integer) OWNER TO postgres;

--
-- TOC entry 268 (class 1255 OID 16932)
-- Name: get_player_position(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_player_position(_id_player integer) RETURNS integer
    LANGUAGE plpgsql
    AS $$
  DECLARE 
  	_id_posicao INTEGER;
BEGIN
	_id_posicao := (SELECT id_localizacao FROM personagem INNER JOIN player ON player.idpersonagem = personagem.id WHERE player.id = _id_player);
  	RETURN _id_posicao;
END;
$$;


ALTER FUNCTION public.get_player_position(_id_player integer) OWNER TO postgres;

--
-- TOC entry 272 (class 1255 OID 16935)
-- Name: get_preco_item(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_preco_item(_id_item integer) RETURNS bigint
    LANGUAGE plpgsql
    AS $$
  DECLARE
  	_preco_item BIGINT;
BEGIN
  	_preco_item := (SELECT COALESCE(armas.preco, equipamento.preco, mochila.preco)  FROM item 
					FULL OUTER JOIN armas ON item.id = armas.id
					FULL OUTER JOIN equipamento ON item.id = equipamento.id
					FULL OUTER JOIN mochila ON item.id = mochila.id 
					WHERE item.id = _id_item);
	IF _preco_item = null THEN
		RAISE EXCEPTION 'Esse item não possui preço.';
	ELSE
		RETURN _preco_item;
	END IF;
END;	
$$;


ALTER FUNCTION public.get_preco_item(_id_item integer) OWNER TO postgres;

--
-- TOC entry 254 (class 1255 OID 16934)
-- Name: get_tipo_item(integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.get_tipo_item(_id_item integer) RETURNS public.tipoitem
    LANGUAGE plpgsql
    AS $$
  DECLARE
  	_tipo_item tipoitem;
BEGIN
	_tipo_item := (SELECT tipo FROM item WHERE item.id = _id_item);
  	RETURN _tipo_item;
END;
$$;


ALTER FUNCTION public.get_tipo_item(_id_item integer) OWNER TO postgres;

--
-- TOC entry 269 (class 1255 OID 16929)
-- Name: valid_region_change(integer, integer); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.valid_region_change(_id_posicao integer, _id_player integer) RETURNS boolean
    LANGUAGE plpgsql
    AS $$
DECLARE
  _permitido BOOLEAN;
  _vip_check BOOLEAN;
  _id_conta INTEGER;
  _vip_dias SMALLINT;
  
BEGIN
	_vip_check := (SELECT vip_check FROM regiao INNER JOIN localizacao ON regiao.id = localizacao.id_regiao WHERE localizacao.id = _id_posicao);
	_id_conta := (SELECT id_conta FROM conta INNER JOIN player ON player.id_conta = conta.id WHERE player.id = _id_player);
	IF _vip_check = FALSE THEN
		_permitido := TRUE;
	ELSE 
		_vip_dias := (SELECT vip_dias FROM conta INNER JOIN player ON player.id_conta = conta.id WHERE player.id = _id_player);
		IF _vip_dias > 0 THEN
			_permitido = TRUE;
		ELSE
			_permitido = FALSE;
		END IF;
	END IF;
	RETURN _permitido;
END;
$$;


ALTER FUNCTION public.valid_region_change(_id_posicao integer, _id_player integer) OWNER TO postgres;

--
-- TOC entry 276 (class 1255 OID 18401)
-- Name: vende_item(integer, integer, integer); Type: PROCEDURE; Schema: public; Owner: postgres
--

CREATE PROCEDURE public.vende_item(IN _id_instancia_item integer, IN _id_player integer, IN _id_npc integer)
    LANGUAGE plpgsql
    AS $$
	DECLARE
		_id_item INTEGER;
		_preco_item BIGINT DEFAULT 0;
  BEGIN
		_id_item = get_id_item(_id_instancia_item);
		_preco_item = get_preco_item(_id_item);

    INSERT INTO vende (id_player, id_instancia_item, id_npc) VALUES
    (_id_player, _id_instancia_item, _id_npc);

    INSERT INTO inventario_guarda_instancia_item (id_player, id_instancia_item) VALUES
    (_id_player, _id_instancia_item);

    UPDATE inventario
      SET riqueza = riqueza - _preco_item
      WHERE id_player = _id_player;

    DELETE FROM npc_carrega_instancia_item
      WHERE id_instancia_item = _id_instancia_item;
	END;
$$;


ALTER PROCEDURE public.vende_item(IN _id_instancia_item integer, IN _id_player integer, IN _id_npc integer) OWNER TO postgres;

--
-- TOC entry 271 (class 1255 OID 18434)
-- Name: verificar_id_npc_vendedor(); Type: FUNCTION; Schema: public; Owner: postgres
--

CREATE FUNCTION public.verificar_id_npc_vendedor() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
    DECLARE
        _tipo_npc tiponpc;
    BEGIN
        SELECT tipo INTO _tipo_npc FROM npc WHERE id = NEW.id_npc;
        IF LOWER(_tipo_npc) <> 'comerciante' THEN
            RAISE EXCEPTION 'Somente NPCs comerciantes podem vender ou carregar itens.';
        END IF;
        RETURN NEW;
    END;
$$;


ALTER FUNCTION public.verificar_id_npc_vendedor() OWNER TO postgres;

--
-- TOC entry 277 (class 1255 OID 16921)
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
		
		--RAISE NOTICE 'Capacidade utilizada := %', soma_peso_itens;
		--RAISE NOTICE 'Capacidade do inventario := %', capacidade_inventario;
		--RAISE NOTICE 'Peso do item a ser inserido := %', peso_item_atual;
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
    nome character(50),
    ataque integer NOT NULL,
    defesa integer NOT NULL,
    vocacao public.vocacao NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    peso numeric NOT NULL,
    preco bigint
);


ALTER TABLE public.armas OWNER TO postgres;

--
-- TOC entry 212 (class 1259 OID 16421)
-- Name: batalha_id_batalha_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.batalha_id_batalha_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.batalha_id_batalha_seq OWNER TO postgres;

--
-- TOC entry 211 (class 1259 OID 16418)
-- Name: batalha; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha (
    id integer DEFAULT nextval('public.batalha_id_batalha_seq'::regclass) NOT NULL,
    tipo character(6) NOT NULL
);


ALTER TABLE public.batalha OWNER TO postgres;

--
-- TOC entry 213 (class 1259 OID 16422)
-- Name: batalha_pvc_cm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvc_cm (
    id_batalha integer NOT NULL,
    id_player_morto integer NOT NULL,
    id_instancia_criatura integer NOT NULL
);


ALTER TABLE public.batalha_pvc_cm OWNER TO postgres;

--
-- TOC entry 214 (class 1259 OID 16425)
-- Name: batalha_pvc_sm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvc_sm (
    id_batalha integer NOT NULL,
    id_player integer NOT NULL,
    id_instancia_criatura integer NOT NULL
);


ALTER TABLE public.batalha_pvc_sm OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16428)
-- Name: batalha_pvp_cm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvp_cm (
    id_batalha integer NOT NULL,
    id_player_morto integer NOT NULL,
    id_player_vivo integer NOT NULL
);


ALTER TABLE public.batalha_pvp_cm OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16431)
-- Name: batalha_pvp_sm; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.batalha_pvp_sm (
    id_batalha integer NOT NULL,
    id_player_um integer NOT NULL,
    id_player_dois integer NOT NULL
);


ALTER TABLE public.batalha_pvp_sm OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16438)
-- Name: conta_id_conta_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.conta_id_conta_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.conta_id_conta_seq OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16434)
-- Name: conta; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.conta (
    email character varying(320) NOT NULL,
    senha character(31) NOT NULL,
    nome character(50) NOT NULL,
    data_de_criacao timestamp with time zone,
    data_de_aniversario date NOT NULL,
    genero character(10) NOT NULL,
    localidade character(50) NOT NULL,
    idade smallint,
    banimento boolean DEFAULT false NOT NULL,
    vip_dias smallint NOT NULL,
    id integer DEFAULT nextval('public.conta_id_conta_seq'::regclass) NOT NULL
);


ALTER TABLE public.conta OWNER TO postgres;

--
-- TOC entry 219 (class 1259 OID 16439)
-- Name: criatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.criatura (
    id integer NOT NULL,
    nome character(50) NOT NULL,
    ataque integer NOT NULL,
    vida integer NOT NULL,
    experiencia integer NOT NULL,
    defesa integer NOT NULL,
    tipo public.tipocriatura NOT NULL,
    id_localizacao integer NOT NULL
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
-- TOC entry 3631 (class 0 OID 0)
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
    nome character(50),
    vocacao public.vocacao NOT NULL,
    min_level smallint NOT NULL,
    bonus smallint NOT NULL,
    descricao text,
    defesa integer NOT NULL,
    pch public.pch NOT NULL,
    peso numeric NOT NULL,
    preco bigint
);


ALTER TABLE public.equipamento OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16450)
-- Name: guilda; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.guilda (
    id integer NOT NULL,
    nome character(32) NOT NULL,
    descricao text,
    capacidade smallint DEFAULT 50 NOT NULL,
    data_de_criacao timestamp with time zone NOT NULL,
    id_dono integer NOT NULL
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
-- TOC entry 3632 (class 0 OID 0)
-- Dependencies: 223
-- Name: guilda_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.guilda_id_seq OWNED BY public.guilda.id;


--
-- TOC entry 224 (class 1259 OID 16457)
-- Name: habilidades; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.habilidades (
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
    nivel_armas_de_dist integer NOT NULL,
    id_player integer NOT NULL
);


ALTER TABLE public.habilidades OWNER TO postgres;

--
-- TOC entry 252 (class 1259 OID 17594)
-- Name: habilidades_id_player_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.habilidades_id_player_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.habilidades_id_player_seq OWNER TO postgres;

--
-- TOC entry 3633 (class 0 OID 0)
-- Dependencies: 252
-- Name: habilidades_id_player_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.habilidades_id_player_seq OWNED BY public.habilidades.id_player;


--
-- TOC entry 225 (class 1259 OID 16461)
-- Name: historico; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.historico (
    level smallint NOT NULL,
    dia_hora timestamp with time zone NOT NULL,
    ultimo_dano character(32),
    id_player_morto integer NOT NULL
);


ALTER TABLE public.historico OWNER TO postgres;

--
-- TOC entry 229 (class 1259 OID 16473)
-- Name: instancia_criatura_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instancia_criatura_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.instancia_criatura_id_seq OWNER TO postgres;

--
-- TOC entry 226 (class 1259 OID 16464)
-- Name: instancia_criatura; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_criatura (
    id integer DEFAULT nextval('public.instancia_criatura_id_seq'::regclass) NOT NULL,
    id_criatura integer NOT NULL
);


ALTER TABLE public.instancia_criatura OWNER TO postgres;

--
-- TOC entry 227 (class 1259 OID 16467)
-- Name: instancia_criatura_carrega_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_criatura_carrega_instancia_item (
    id_instancia_criatura integer NOT NULL,
    id_instancia_item integer NOT NULL
);


ALTER TABLE public.instancia_criatura_carrega_instancia_item OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16474)
-- Name: instancia_item_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.instancia_item_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.instancia_item_id_seq OWNER TO postgres;

--
-- TOC entry 228 (class 1259 OID 16470)
-- Name: instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_item (
    id integer DEFAULT nextval('public.instancia_item_id_seq'::regclass) NOT NULL,
    id_item integer NOT NULL
);


ALTER TABLE public.instancia_item OWNER TO postgres;

--
-- TOC entry 253 (class 1259 OID 18414)
-- Name: instancia_item_posicao; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.instancia_item_posicao (
    id_instancia_item integer NOT NULL,
    id_localizacao integer NOT NULL
);


ALTER TABLE public.instancia_item_posicao OWNER TO postgres;

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
    id_player integer NOT NULL,
    riqueza bigint DEFAULT 0 NOT NULL
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
-- TOC entry 3634 (class 0 OID 0)
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
-- TOC entry 3635 (class 0 OID 0)
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
    nome character(15) NOT NULL
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
-- TOC entry 3636 (class 0 OID 0)
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
    nome character(50) NOT NULL,
    capacidade smallint NOT NULL,
    min_level smallint NOT NULL,
    descricao text,
    peso numeric NOT NULL,
    preco bigint
);


ALTER TABLE public.mochila OWNER TO postgres;

--
-- TOC entry 240 (class 1259 OID 16507)
-- Name: npc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.npc (
    id integer NOT NULL,
    nome character(50) NOT NULL,
    tipo public.tiponpc NOT NULL,
    id_localizacao integer NOT NULL
);


ALTER TABLE public.npc OWNER TO postgres;

--
-- TOC entry 241 (class 1259 OID 16512)
-- Name: npc_carrega_instancia_item; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.npc_carrega_instancia_item (
    id_npc integer NOT NULL,
    id_instancia_item integer NOT NULL
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
-- TOC entry 3637 (class 0 OID 0)
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
    tipo public.tipopersonagem NOT NULL
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
-- TOC entry 3638 (class 0 OID 0)
-- Dependencies: 244
-- Name: personagem_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.personagem_id_seq OWNED BY public.personagem.id;


--
-- TOC entry 245 (class 1259 OID 16522)
-- Name: player; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.player (
    nome character(32) NOT NULL,
    vocacao public.vocacao DEFAULT 'none'::character varying NOT NULL,
    vida_maxima integer DEFAULT 155 NOT NULL,
    vida_atual integer DEFAULT 155 NOT NULL,
    mana_maxima integer DEFAULT 60 NOT NULL,
    mana_atual integer DEFAULT 60 NOT NULL,
    genero character(10) NOT NULL,
    experiencia bigint DEFAULT 0 NOT NULL,
    level smallint DEFAULT 0 NOT NULL,
    id integer NOT NULL,
    data_de_criacao timestamp with time zone NOT NULL,
    id_conta integer NOT NULL,
    id_localizacao integer NOT NULL
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
-- TOC entry 3639 (class 0 OID 0)
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
    id_mapa integer NOT NULL,
    nome character(32) NOT NULL
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
-- TOC entry 3640 (class 0 OID 0)
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
    nome character(50),
    valor bigint NOT NULL,
    min_level smallint NOT NULL,
    descricao text,
    peso numeric NOT NULL
);


ALTER TABLE public.riqueza OWNER TO postgres;

--
-- TOC entry 250 (class 1259 OID 16545)
-- Name: vende; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.vende (
    id_npc integer NOT NULL,
    id_instancia_item integer NOT NULL,
    id_player integer NOT NULL
);


ALTER TABLE public.vende OWNER TO postgres;

--
-- TOC entry 3336 (class 2604 OID 16551)
-- Name: guilda id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda ALTER COLUMN id SET DEFAULT nextval('public.guilda_id_seq'::regclass);


--
-- TOC entry 3343 (class 2604 OID 16554)
-- Name: item id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item ALTER COLUMN id SET DEFAULT nextval('public.item_id_seq'::regclass);


--
-- TOC entry 3347 (class 2604 OID 16555)
-- Name: localizacao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao ALTER COLUMN id SET DEFAULT nextval('public.localizacao_id_seq'::regclass);


--
-- TOC entry 3348 (class 2604 OID 16556)
-- Name: mapa id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapa ALTER COLUMN id SET DEFAULT nextval('public.mapa_id_seq'::regclass);


--
-- TOC entry 3349 (class 2604 OID 16558)
-- Name: personagem id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem ALTER COLUMN id SET DEFAULT nextval('public.personagem_id_seq'::regclass);


--
-- TOC entry 3358 (class 2604 OID 16560)
-- Name: regiao id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao ALTER COLUMN id SET DEFAULT nextval('public.regiao_id_seq'::regclass);


--
-- TOC entry 3360 (class 2606 OID 17452)
-- Name: armas armas_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_nome_key UNIQUE (nome);


--
-- TOC entry 3362 (class 2606 OID 16564)
-- Name: armas armas_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_pkey PRIMARY KEY (id);


--
-- TOC entry 3364 (class 2606 OID 16566)
-- Name: batalha batalha_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha
    ADD CONSTRAINT batalha_pkey PRIMARY KEY (id);


--
-- TOC entry 3366 (class 2606 OID 16568)
-- Name: batalha_pvc_cm batalha_pvc_cm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_pkey PRIMARY KEY (id_batalha);


--
-- TOC entry 3368 (class 2606 OID 16570)
-- Name: batalha_pvc_sm batalha_pvc_sm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_pkey PRIMARY KEY (id_batalha);


--
-- TOC entry 3370 (class 2606 OID 16572)
-- Name: batalha_pvp_cm batalha_pvp_cm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_pkey PRIMARY KEY (id_batalha);


--
-- TOC entry 3372 (class 2606 OID 16574)
-- Name: batalha_pvp_sm batalha_pvp_sm_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_pkey PRIMARY KEY (id_batalha);


--
-- TOC entry 3374 (class 2606 OID 17582)
-- Name: conta conta_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_email_key UNIQUE (email);


--
-- TOC entry 3376 (class 2606 OID 16578)
-- Name: conta conta_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_id_key UNIQUE (id);


--
-- TOC entry 3378 (class 2606 OID 16580)
-- Name: conta conta_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.conta
    ADD CONSTRAINT conta_pkey PRIMARY KEY (id);


--
-- TOC entry 3380 (class 2606 OID 17469)
-- Name: criatura criatura_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_nome_key UNIQUE (nome);


--
-- TOC entry 3382 (class 2606 OID 16584)
-- Name: criatura criatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_pkey PRIMARY KEY (id);


--
-- TOC entry 3384 (class 2606 OID 17478)
-- Name: equipamento equipamento_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_nome_key UNIQUE (nome);


--
-- TOC entry 3386 (class 2606 OID 16588)
-- Name: equipamento equipamento_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_pkey PRIMARY KEY (id);


--
-- TOC entry 3388 (class 2606 OID 17494)
-- Name: guilda guilda_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_nome_key UNIQUE (nome);


--
-- TOC entry 3390 (class 2606 OID 16592)
-- Name: guilda guilda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_pkey PRIMARY KEY (id);


--
-- TOC entry 3392 (class 2606 OID 17600)
-- Name: habilidades habilidades_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidades
    ADD CONSTRAINT habilidades_pkey PRIMARY KEY (id_player);


--
-- TOC entry 3394 (class 2606 OID 16596)
-- Name: historico historico_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico
    ADD CONSTRAINT historico_pkey PRIMARY KEY (id_player_morto);


--
-- TOC entry 3398 (class 2606 OID 16598)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_item_pkey PRIMARY KEY (id_instancia_criatura);


--
-- TOC entry 3396 (class 2606 OID 16600)
-- Name: instancia_criatura instancia_criatura_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura
    ADD CONSTRAINT instancia_criatura_pkey PRIMARY KEY (id);


--
-- TOC entry 3440 (class 2606 OID 18418)
-- Name: instancia_item_posicao instancia_item_posicao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item_posicao
    ADD CONSTRAINT instancia_item_posicao_pkey PRIMARY KEY (id_instancia_item, id_localizacao);


--
-- TOC entry 3400 (class 2606 OID 16602)
-- Name: instancia_item instanciaitem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item
    ADD CONSTRAINT instanciaitem_pkey PRIMARY KEY (id);


--
-- TOC entry 3404 (class 2606 OID 16913)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_pkey PRIMARY KEY (id_player, id_instancia_item);


--
-- TOC entry 3402 (class 2606 OID 16606)
-- Name: inventario inventario_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_pkey PRIMARY KEY (id_player);


--
-- TOC entry 3406 (class 2606 OID 16608)
-- Name: item item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.item
    ADD CONSTRAINT item_pkey PRIMARY KEY (id);


--
-- TOC entry 3408 (class 2606 OID 16610)
-- Name: localizacao localizacao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao
    ADD CONSTRAINT localizacao_pkey PRIMARY KEY (id);


--
-- TOC entry 3410 (class 2606 OID 16612)
-- Name: mapa mapa_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mapa
    ADD CONSTRAINT mapa_pkey PRIMARY KEY (id);


--
-- TOC entry 3412 (class 2606 OID 17534)
-- Name: mochila mochila_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_nome_key UNIQUE (nome);


--
-- TOC entry 3414 (class 2606 OID 16616)
-- Name: mochila mochila_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_pkey PRIMARY KEY (id);


--
-- TOC entry 3420 (class 2606 OID 16618)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_pkey PRIMARY KEY (id_npc, id_instancia_item);


--
-- TOC entry 3416 (class 2606 OID 17551)
-- Name: npc npc_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_nome_key UNIQUE (nome);


--
-- TOC entry 3418 (class 2606 OID 16622)
-- Name: npc npc_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_pkey PRIMARY KEY (id);


--
-- TOC entry 3422 (class 2606 OID 16624)
-- Name: personagem personagem_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.personagem
    ADD CONSTRAINT personagem_pkey PRIMARY KEY (id);


--
-- TOC entry 3424 (class 2606 OID 16626)
-- Name: player player_id_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_id_key UNIQUE (id);


--
-- TOC entry 3426 (class 2606 OID 17405)
-- Name: player player_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_nome_key UNIQUE (nome);


--
-- TOC entry 3428 (class 2606 OID 16630)
-- Name: player player_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_pkey PRIMARY KEY (id);


--
-- TOC entry 3438 (class 2606 OID 16852)
-- Name: players_guilda players_guilda_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players_guilda
    ADD CONSTRAINT players_guilda_pkey PRIMARY KEY (id_guilda);


--
-- TOC entry 3430 (class 2606 OID 16632)
-- Name: regiao regiao_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao
    ADD CONSTRAINT regiao_pkey PRIMARY KEY (id);


--
-- TOC entry 3432 (class 2606 OID 17564)
-- Name: riqueza riqueza_nome_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_nome_key UNIQUE (nome);


--
-- TOC entry 3434 (class 2606 OID 16636)
-- Name: riqueza riqueza_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_pkey PRIMARY KEY (id);


--
-- TOC entry 3436 (class 2606 OID 16638)
-- Name: vende vende_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_pkey PRIMARY KEY (id_instancia_item);


--
-- TOC entry 3485 (class 2620 OID 18436)
-- Name: npc_carrega_instancia_item trigger_verificar_id_npc_vendedor; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_verificar_id_npc_vendedor BEFORE INSERT OR UPDATE ON public.npc_carrega_instancia_item FOR EACH ROW EXECUTE FUNCTION public.verificar_id_npc_vendedor();


--
-- TOC entry 3486 (class 2620 OID 18435)
-- Name: vende trigger_verificar_id_npc_vendedor; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_verificar_id_npc_vendedor BEFORE INSERT OR UPDATE ON public.vende FOR EACH ROW EXECUTE FUNCTION public.verificar_id_npc_vendedor();


--
-- TOC entry 3484 (class 2620 OID 16922)
-- Name: inventario_guarda_instancia_item trigger_verificar_limite_inventario; Type: TRIGGER; Schema: public; Owner: postgres
--

CREATE TRIGGER trigger_verificar_limite_inventario BEFORE INSERT ON public.inventario_guarda_instancia_item FOR EACH ROW EXECUTE FUNCTION public.verificar_limite_inventario();


--
-- TOC entry 3441 (class 2606 OID 16639)
-- Name: armas armas_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.armas
    ADD CONSTRAINT armas_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3442 (class 2606 OID 16644)
-- Name: batalha_pvc_cm batalha_pvc_cm_id_batalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_id_batalha_fkey FOREIGN KEY (id_batalha) REFERENCES public.batalha(id);


--
-- TOC entry 3443 (class 2606 OID 16649)
-- Name: batalha_pvc_cm batalha_pvc_cm_id_instancia_criatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_id_instancia_criatura_fkey FOREIGN KEY (id_instancia_criatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3444 (class 2606 OID 16654)
-- Name: batalha_pvc_cm batalha_pvc_cm_id_player_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_cm
    ADD CONSTRAINT batalha_pvc_cm_id_player_morto_fkey FOREIGN KEY (id_player_morto) REFERENCES public.player(id);


--
-- TOC entry 3445 (class 2606 OID 16659)
-- Name: batalha_pvc_sm batalha_pvc_sm_id_batalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_id_batalha_fkey FOREIGN KEY (id_batalha) REFERENCES public.batalha(id);


--
-- TOC entry 3446 (class 2606 OID 16664)
-- Name: batalha_pvc_sm batalha_pvc_sm_id_instancia_criatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_id_instancia_criatura_fkey FOREIGN KEY (id_instancia_criatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3447 (class 2606 OID 16669)
-- Name: batalha_pvc_sm batalha_pvc_sm_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvc_sm
    ADD CONSTRAINT batalha_pvc_sm_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3448 (class 2606 OID 16674)
-- Name: batalha_pvp_cm batalha_pvp_cm_id_batalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_id_batalha_fkey FOREIGN KEY (id_batalha) REFERENCES public.batalha(id);


--
-- TOC entry 3449 (class 2606 OID 16679)
-- Name: batalha_pvp_cm batalha_pvp_cm_id_player_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_id_player_morto_fkey FOREIGN KEY (id_player_morto) REFERENCES public.player(id);


--
-- TOC entry 3450 (class 2606 OID 16684)
-- Name: batalha_pvp_cm batalha_pvp_cm_id_player_vivo_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_cm
    ADD CONSTRAINT batalha_pvp_cm_id_player_vivo_fkey FOREIGN KEY (id_player_vivo) REFERENCES public.player(id);


--
-- TOC entry 3451 (class 2606 OID 16689)
-- Name: batalha_pvp_sm batalha_pvp_sm_id_batalha_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_id_batalha_fkey FOREIGN KEY (id_batalha) REFERENCES public.batalha(id);


--
-- TOC entry 3453 (class 2606 OID 16699)
-- Name: batalha_pvp_sm batalha_pvp_sm_id_player_dois_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_id_player_dois_fkey FOREIGN KEY (id_player_dois) REFERENCES public.player(id);


--
-- TOC entry 3452 (class 2606 OID 16694)
-- Name: batalha_pvp_sm batalha_pvp_sm_id_player_um_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.batalha_pvp_sm
    ADD CONSTRAINT batalha_pvp_sm_id_player_um_fkey FOREIGN KEY (id_player_um) REFERENCES public.player(id);


--
-- TOC entry 3455 (class 2606 OID 17399)
-- Name: criatura criatura_id_localizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_id_localizacao_fkey FOREIGN KEY (id_localizacao) REFERENCES public.localizacao(id) NOT VALID;


--
-- TOC entry 3454 (class 2606 OID 17394)
-- Name: criatura criatura_id_personagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.criatura
    ADD CONSTRAINT criatura_id_personagem_fkey FOREIGN KEY (id) REFERENCES public.personagem(id) NOT VALID;


--
-- TOC entry 3456 (class 2606 OID 16709)
-- Name: equipamento equipamento_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.equipamento
    ADD CONSTRAINT equipamento_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3457 (class 2606 OID 17589)
-- Name: guilda guilda_id_dono_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.guilda
    ADD CONSTRAINT guilda_id_dono_fkey FOREIGN KEY (id_dono) REFERENCES public.player(id) NOT VALID;


--
-- TOC entry 3458 (class 2606 OID 17601)
-- Name: habilidades habilidades_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.habilidades
    ADD CONSTRAINT habilidades_id_fkey FOREIGN KEY (id_player) REFERENCES public.player(id) NOT VALID;


--
-- TOC entry 3459 (class 2606 OID 16724)
-- Name: historico historico_id_player_morto_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.historico
    ADD CONSTRAINT historico_id_player_morto_fkey FOREIGN KEY (id_player_morto) REFERENCES public.player(id);


--
-- TOC entry 3461 (class 2606 OID 16729)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_i_id_instancia_criatura_fk; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_i_id_instancia_criatura_fk FOREIGN KEY (id_instancia_criatura) REFERENCES public.instancia_criatura(id);


--
-- TOC entry 3462 (class 2606 OID 16734)
-- Name: instancia_criatura_carrega_instancia_item instancia_criatura_carrega_instancia_item_id_instancia_item_fke; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura_carrega_instancia_item
    ADD CONSTRAINT instancia_criatura_carrega_instancia_item_id_instancia_item_fke FOREIGN KEY (id_instancia_item) REFERENCES public.instancia_item(id);


--
-- TOC entry 3460 (class 2606 OID 16739)
-- Name: instancia_criatura instancia_criatura_id_criatura_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_criatura
    ADD CONSTRAINT instancia_criatura_id_criatura_fkey FOREIGN KEY (id_criatura) REFERENCES public.criatura(id);


--
-- TOC entry 3463 (class 2606 OID 16744)
-- Name: instancia_item instancia_item_id_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item
    ADD CONSTRAINT instancia_item_id_item_fkey FOREIGN KEY (id_item) REFERENCES public.item(id);


--
-- TOC entry 3482 (class 2606 OID 18419)
-- Name: instancia_item_posicao instancia_item_posicao_id_instancia_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item_posicao
    ADD CONSTRAINT instancia_item_posicao_id_instancia_item_fkey FOREIGN KEY (id_instancia_item) REFERENCES public.instancia_item(id);


--
-- TOC entry 3483 (class 2606 OID 18424)
-- Name: instancia_item_posicao instancia_item_posicao_id_localizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.instancia_item_posicao
    ADD CONSTRAINT instancia_item_posicao_id_localizacao_fkey FOREIGN KEY (id_localizacao) REFERENCES public.localizacao(id);


--
-- TOC entry 3466 (class 2606 OID 16759)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_id_instancia_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_id_instancia_item_fkey FOREIGN KEY (id_instancia_item) REFERENCES public.instancia_item(id);


--
-- TOC entry 3465 (class 2606 OID 16902)
-- Name: inventario_guarda_instancia_item inventario_guarda_instancia_item_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario_guarda_instancia_item
    ADD CONSTRAINT inventario_guarda_instancia_item_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3464 (class 2606 OID 16907)
-- Name: inventario inventario_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.inventario
    ADD CONSTRAINT inventario_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3467 (class 2606 OID 16764)
-- Name: localizacao localizacao_id_regiao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.localizacao
    ADD CONSTRAINT localizacao_id_regiao_fkey FOREIGN KEY (id_regiao) REFERENCES public.regiao(id);


--
-- TOC entry 3468 (class 2606 OID 16769)
-- Name: mochila mochila_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.mochila
    ADD CONSTRAINT mochila_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3471 (class 2606 OID 16774)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_id_instancia_item_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_id_instancia_item_fkey FOREIGN KEY (id_instancia_item) REFERENCES public.instancia_item(id);


--
-- TOC entry 3472 (class 2606 OID 16779)
-- Name: npc_carrega_instancia_item npc_carrega_instancia_item_id_npc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc_carrega_instancia_item
    ADD CONSTRAINT npc_carrega_instancia_item_id_npc_fkey FOREIGN KEY (id_npc) REFERENCES public.npc(id);


--
-- TOC entry 3470 (class 2606 OID 16961)
-- Name: npc npc_id_localizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_id_localizacao_fkey FOREIGN KEY (id_localizacao) REFERENCES public.localizacao(id) NOT VALID;


--
-- TOC entry 3469 (class 2606 OID 16956)
-- Name: npc npc_id_personagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.npc
    ADD CONSTRAINT npc_id_personagem_fkey FOREIGN KEY (id) REFERENCES public.personagem(id) NOT VALID;


--
-- TOC entry 3473 (class 2606 OID 16794)
-- Name: player player_id_conta_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_id_conta_fkey FOREIGN KEY (id_conta) REFERENCES public.conta(id);


--
-- TOC entry 3475 (class 2606 OID 16946)
-- Name: player player_id_localizacao_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_id_localizacao_fkey FOREIGN KEY (id_localizacao) REFERENCES public.localizacao(id) NOT VALID;


--
-- TOC entry 3474 (class 2606 OID 16941)
-- Name: player player_id_personagem_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.player
    ADD CONSTRAINT player_id_personagem_fkey FOREIGN KEY (id) REFERENCES public.personagem(id) NOT VALID;


--
-- TOC entry 3480 (class 2606 OID 16853)
-- Name: players_guilda players_guilda_id_guilda_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players_guilda
    ADD CONSTRAINT players_guilda_id_guilda_fkey FOREIGN KEY (id_guilda) REFERENCES public.guilda(id);


--
-- TOC entry 3481 (class 2606 OID 16858)
-- Name: players_guilda players_guilda_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.players_guilda
    ADD CONSTRAINT players_guilda_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3476 (class 2606 OID 16804)
-- Name: regiao regiao_id_mapa_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.regiao
    ADD CONSTRAINT regiao_id_mapa_fkey FOREIGN KEY (id_mapa) REFERENCES public.mapa(id);


--
-- TOC entry 3477 (class 2606 OID 16809)
-- Name: riqueza riqueza_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.riqueza
    ADD CONSTRAINT riqueza_id_fkey FOREIGN KEY (id) REFERENCES public.item(id);


--
-- TOC entry 3479 (class 2606 OID 16936)
-- Name: vende vende_id_player_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_id_player_fkey FOREIGN KEY (id_player) REFERENCES public.player(id);


--
-- TOC entry 3478 (class 2606 OID 16814)
-- Name: vende vende_idnpc_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.vende
    ADD CONSTRAINT vende_idnpc_fkey FOREIGN KEY (id_npc) REFERENCES public.npc(id);


-- Completed on 2022-09-13 00:27:39

--
-- PostgreSQL database dump complete
--

