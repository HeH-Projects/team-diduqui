--Insert data into the database--

--Add secretaries--
INSERT INTO public.secretary(firstname, lastname, email, password, phone)
VALUES('Jackie', 'ONeil', 'jackie.oneil@gmail.com', 'Test123*', '0495/786583');

INSERT INTO public.secretary(firstname, lastname, email, password, phone)
VALUES('Ehy', 'Tan', 'ehy.tan@gmail.com', 'Test123*', '0495/786581');

INSERT INTO public.secretary(firstname, lastname, email, password, phone)
VALUES('Michelle', 'Carter', 'michelle.carter@gmail.com', 'Test123*', '0495/786582');


--Add doctor--
INSERT INTO public.doctor(email, firstname, lastname, phone, specialty)
VALUES('Durin.A@gmail.com','Anne-lise', 'Durin', '0495/786580', 'Surgeon');


--Add customer--
INSERT INTO public.customer(email, firstname, lastname, address ,billingaddress)
VALUES('Gerard.M@gmail.com','Gerard','Menfroid','10 Avenue Maistriau','8 Avenue Maistriau');

--Add room--
INSERT INTO public.room(name, description)
VALUES('Exam room','Room that is use only for exams');

--Add dog--
INSERT INTO public.dog(dogbreed, name, customerId)
VALUES('Poodle','Bob',1);

--Add appointment--
INSERT INTO public.appointment(name, dogId, roomId, doctorId, date, duration)
VALUES('Basic exam', 1, 1, 1,'2001-09-28 10:00:00', 30);