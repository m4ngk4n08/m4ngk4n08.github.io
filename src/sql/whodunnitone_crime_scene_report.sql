CREATE TABLE crime_scene_report (
    scene_id integer PRIMARY KEY,
    type VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    location VARCHAR(255) NOT NULL
);

INSERT INTO crime_scene_report (type, description, location) VALUES 
('burglary','Doug Didlesworth reported that their heirloom went missing.', 'Didleworths Manor');


