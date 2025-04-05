CREATE TABLE evidence (
    evidence_id integer PRIMARY KEY,
    item VARCHAR(255) NOT NULL,
    description VARCHAR(255) NOT NULL
);

INSERT INTO evidence (item, description) VALUES
('newspaper', 'newspaper that the culprit sends to you indicating there was a missing heirloom.'),
('shiny marble', 'so shiny it can be sell for a cheap price.'),
('water gun', 'to abolish the fire if the fire is too big.'),
('piece of paper', 'along with the newspaper. There is a piece of paper with a statement that says "did you try to BURN THE PAPER"'),
('katana', 'heads will roll!'),
('burnt paper', 'burnt paper that left in the library.'),
('axe', 'found in the kitchen. That can be use to chop the wood or break the vault.'),
('poster', 'a piece of note that is left beside the vault that says "I should wear green outfit today!"');
