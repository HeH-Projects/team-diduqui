
--Tables creation--
CREATE TABLE IF NOT EXISTS public.appointment
(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(500),
    name VARCHAR(100) NOT NULL,
    duration TIMESTAMP
);


CREATE TABLE IF NOT EXISTS public.customer
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(200),
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    billing_address VARCHAR(200) NOT NULL,
    phone VARCHAR(20),
    address VARCHAR(200)
);


CREATE TABLE IF NOT EXISTS public.doctor
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(200) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    phone VARCHAR(20),
    specialty VARCHAR(40)
);


CREATE TABLE IF NOT EXISTS public.dog
(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(500),
    dog_breed VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    size FLOAT,
    weight FLOAT
);


CREATE TABLE IF NOT EXISTS public.room
(
    id SERIAL PRIMARY KEY NOT NULL,
    description VARCHAR(500),
    name VARCHAR(100) NOT NULL
);


CREATE TABLE IF NOT EXISTS public.secretary
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(200) NOT NULL,
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    password VARCHAR(200) NOT NULL,
    phone VARCHAR(20)
);


--Adding index to tables--
CREATE UNIQUE INDEX appointment_id_uindex ON public.Appointment (id);
CREATE UNIQUE INDEX customer_id_uindex ON public.customer (id);
CREATE UNIQUE INDEX doctor_id_uindex ON public.doctor (id);
CREATE UNIQUE INDEX dog_id_uindex ON public.dog (id);
CREATE UNIQUE INDEX room_id_uindex ON public.room (id);
CREATE UNIQUE INDEX secretary_id_uindex ON public.secretary (id);

--Adding foreign key--
ALTER TABLE public.dog
    ADD CONSTRAINT fk_dog_id_customer
    FOREIGN KEY(id)
    REFERENCES customer(id);

ALTER TABLE public.room
    ADD CONSTRAINT fk_room_id_appointment
    FOREIGN KEY(id)
    REFERENCES appointment(id);

ALTER TABLE public.customer
    ADD CONSTRAINT fk_customer_id_appointment
    FOREIGN KEY(id)
    REFERENCES appointment(id);

ALTER TABLE public.doctor
    ADD CONSTRAINT fk_doctor_id_appointment
    FOREIGN KEY(id)
    REFERENCES appointment(id);


