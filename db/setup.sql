CREATE TABLE books (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  author VARCHAR(150) NOT NULL,
  year INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO books (title, author, year) VALUES
  ('Cien años de soledad', 'Gabriel García Márquez', 1967),
  ('Don Quijote de la Mancha', 'Miguel de Cervantes', 1605),
  ('Rayuela', 'Julio Cortázar', 1963),
  ('La casa de los espíritus', 'Isabel Allende', 1982),
  ('El túnel', 'Ernesto Sabato', 1948);