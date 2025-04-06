CREATE TABLE safe_logs (
    log_id INTEGER PRIMARY KEY,
    person_id INT NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    new_combination VARCHAR(10),
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE
);

INSERT INTO safe_logs (person_id, timestamp, new_combination) VALUES
(1, '2025-04-02 00:10:00', '060994'),
(1, '2025-04-01 22:00:00', '123456'),
(1, '2025-04-01 22:30:00', '654321'),
(2, '2025-04-01 23:00:00', '111111'),
(2, '2025-04-01 23:30:00', '222222'),
(3, '2025-04-01 23:45:00', '333333'),
(3, '2025-04-02 00:00:00', '444444'),
(4, '2025-04-02 00:05:00', '555555'),
(4, '2025-04-02 00:10:00', '666666');
