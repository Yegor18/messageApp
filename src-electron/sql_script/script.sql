CREATE TABLE IF NOT EXISTS public."Notifications"
(
    message character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    caption character varying(255) COLLATE pg_catalog."default" DEFAULT 'NULL::character varying'::character varying,
    template character varying(255) COLLATE pg_catalog."default" NOT NULL DEFAULT 'NULL::character varying'::character varying,
    "position" character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    icon character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    type character varying(255) COLLATE pg_catalog."default" DEFAULT NULL::character varying,
    id bigint NOT NULL DEFAULT nextval('"Notifications_id_seq"'::regclass),
    CONSTRAINT "Notifications_pkey" PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Notifications"
    OWNER to postgres;
