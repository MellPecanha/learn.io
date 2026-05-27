CREATE TABLE "user" (
    id SERIAL PRIMARY KEY,
    USERNAME VARCHAR(258) NOT null,
    PASSWORD VARCHAR(258) NOT NULL
);
-- Adiciona o tipo enum e a coluna na tabela user
CREATE TYPE user_role_enum AS ENUM ('PROFESSOR', 'ALUNO');
ALTER TABLE "user"
ADD COLUMN role user_role_enum DEFAULT 'ALUNO';
