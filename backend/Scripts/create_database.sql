
--Tables creation--
CREATE TABLE IF NOT EXISTS public.appointment
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(100) NOT NULL,
    dogId int NOT NULL,
    roomId int NOT NULL,
    doctorId int NOT NULL,
    description VARCHAR(500),
    date TIMESTAMP NOT NULL,
    duration int NOT NULL
);


CREATE TABLE IF NOT EXISTS public.customer
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(200),
    firstname VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    billingaddress VARCHAR(200) NOT NULL,
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
    dogbreed VARCHAR(50) NOT NULL,
    name VARCHAR(50) NOT NULL,
    customerId int NOT NULL,
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
    FOREIGN KEY(customerId)
    REFERENCES customer(id) ON DELETE CASCADE;

ALTER TABLE public.appointment
    ADD CONSTRAINT fk_appointment_id_room
    FOREIGN KEY(roomId)
    REFERENCES room(id) ON DELETE CASCADE;

ALTER TABLE public.appointment
    ADD CONSTRAINT fk_appointment_id_dog
    FOREIGN KEY(dogId)
    REFERENCES dog(id) ON DELETE CASCADE;

ALTER TABLE public.appointment
    ADD CONSTRAINT fk_appointment_id_doctor
    FOREIGN KEY(doctorId)
    REFERENCES doctor(id) ON DELETE CASCADE;


