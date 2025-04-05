CREATE TABLE encrypted_keys (
    key_id integer PRIMARY KEY,
    key VARCHAR(255) NOT NULL,
    table_name VARCHAR(255) NOT NULL,
    decrypted BOOLEAN NOT NULL DEFAULT FALSE
);

INSERT INTO encrypted_keys (key_id, key, table_name, decrypted) VALUES 
(1, '041c0e1010030b07001c1d11', 'statement', 0),-- ttteanemss/statements
(2, '151d1d0a01060b19151f0b17', 'vault', 0);  -- burnthepaper
