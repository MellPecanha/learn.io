CREATE TABLE person (
id BIGSERIAL PRIMARY KEY,
cpf VARCHAR(11) not null,
name VARCHAR(100) not null,
birth DATE not null,
email varchar(255) not null
);

ALTER TABLE person 
add column user_id int unique,
add constraint fk_user_id foreign key (user_id) references "user"(id);