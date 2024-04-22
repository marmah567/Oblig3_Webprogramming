CREATE TABLE Ticket (
    firstname VARCHAR(255),
    lastname VARCHAR(255),
    phone VARCHAR(255),
    email VARCHAR(255),
    number VARCHAR(255),
    movie VARCHAR(255),
    primary key (firstname)
);

CREATE TABLE Movie (
    movie VARCHAR(255),
    primary key (movie)
);