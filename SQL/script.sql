-- 1) Tablas sin dependencias
CREATE TABLE directores (
    id_director SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    nacionalidad VARCHAR(50),
    anio_nacimiento INT
);

CREATE TABLE clientes (
    id_cliente SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    ciudad VARCHAR(50),
    email VARCHAR(100)
);

-- 2) Tipo ENUM para los géneros
CREATE TYPE genero_pelicula AS ENUM (
    'Ciencia ficción',
    'Animación',
    'Comedia',
    'Drama',
    'Acción',
    'Terror'
);

-- 3) Tabla peliculas (FK a directores, columna genero del tipo ENUM)
CREATE TABLE peliculas (
    id_pelicula SERIAL PRIMARY KEY,
    titulo VARCHAR(150) NOT NULL,
    anio INT,
    genero genero_pelicula,
    precio_alquiler NUMERIC(5,2),
    id_director INT REFERENCES directores(id_director)
);

-- 4) Tabla alquileres (dos FK: a peliculas y a clientes)
CREATE TABLE alquileres (
    id_alquiler SERIAL PRIMARY KEY,
    id_pelicula INT REFERENCES peliculas(id_pelicula),
    id_cliente INT REFERENCES clientes(id_cliente),
    fecha_alquiler DATE
);

-- 5) Datos
INSERT INTO directores (nombre, nacionalidad, anio_nacimiento) VALUES
('Christopher Nolan', 'Británica', 1970),
('Hayao Miyazaki', 'Japonesa', 1941),
('Greta Gerwig', 'Estadounidense', 1983),
('Pedro Almodóvar', 'Española', 1949);

INSERT INTO clientes (nombre, ciudad, email) VALUES
('Ana López', 'Madrid', 'ana.lopez@email.com'),
('Bruno Sanz', 'Barcelona', 'bruno.sanz@email.com'),
('Carla Ruiz', 'Madrid', 'carla.ruiz@email.com'),
('David Gómez', 'Valencia', 'david.gomez@email.com'),
('Elena Marín', 'Sevilla', 'elena.marin@email.com');

INSERT INTO peliculas (titulo, anio, genero, precio_alquiler, id_director) VALUES
('Origen', 2010, 'Ciencia ficción', 3.50, 1),
('Interstellar', 2014, 'Ciencia ficción', 3.50, 1),
('El viaje de Chihiro', 2001, 'Animación', 2.99, 2),
('Mi vecino Totoro', 1988, 'Animación', 2.99, 2),
('Barbie', 2023, 'Comedia', 4.00, 3),
('Lady Bird', 2017, 'Drama', 3.00, 3),
('Volver', 2006, 'Drama', 3.00, 4);

INSERT INTO alquileres (id_pelicula, id_cliente, fecha_alquiler) VALUES
(1, 1, '2025-01-10'),
(3, 1, '2025-01-12'),
(5, 2, '2025-01-15'),
(2, 3, '2025-01-15'),
(1, 4, '2025-01-18'),
(7, 5, '2025-01-20'),
(5, 1, '2025-01-22'),
(3, 4, '2025-01-25'),
(2, 2, '2025-01-26'),
(6, 3, '2025-02-01');