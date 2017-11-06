CREATE TABLE public.Appointment
(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(500),
    name VARCHAR(100) NOT NULL,
    duration TIME
);


CREATE TABLE public.customer
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(200),
    billing_address VARCHAR(200) NOT NULL,
    phone VARCHAR(50),
    address VARCHAR(200)
);


CREATE TABLE public.doctor
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    phone VARCHAR(50),
    specialty VARCHAR(40)
);


CREATE TABLE public.dog
(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(500),
    dog_breed VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    size INT,
    weight INT
);


CREATE TABLE public.room
(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(500),
    name VARCHAR(100) NOT NULL
);


CREATE TABLE public.secretary
(
    id SERIAL PRIMARY KEY NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    email VARCHAR(200) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone VARCHAR(50)
);


CREATE UNIQUE INDEX appointment_id_uindex ON public.Appointment (id);
CREATE UNIQUE INDEX customer_id_uindex ON public.customer (id);
CREATE UNIQUE INDEX doctor_id_uindex ON public.doctor (id);
CREATE UNIQUE INDEX dog_id_uindex ON public.dog (id);
CREATE UNIQUE INDEX room_id_uindex ON public.room (id);
CREATE UNIQUE INDEX secretary_id_uindex ON public.secretary (id);

