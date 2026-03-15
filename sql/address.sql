CREATE TABLE address (
    id SERIAL PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    state VARCHAR(2) NOT NULL,
    zip_code VARCHAR(10) NOT NULL
);

alter table address 
add column person_id bigint not null;

alter table address 
add constraint fk_address_person
foreign key (person_id)
references person(id);