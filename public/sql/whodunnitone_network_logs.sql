CREATE TABLE network_logs (
    log_id SERIAL PRIMARY KEY,
    person_id INT NOT NULL,
    device_name VARCHAR(255) NOT NULL,
    connection_time TIMESTAMP NOT NULL,
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE
);

INSERT INTO network_logs (log_id, person_id, device_name, connection_time) VALUES
(1, 1, 'AJ-Phone', '2025-04-02 00:37:00'),
(2, 2, 'Chris-Laptop', '2025-04-02 00:15:00'),
(3, 3, 'Doug-Tablet', '2025-04-01 23:50:00');
