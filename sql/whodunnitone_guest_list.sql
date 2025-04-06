CREATE TABLE guest_list (
    guest_id INTEGER PRIMARY KEY,
    person_id INTEGER,
    check_in TIMESTAMP,
    check_out TIMESTAMP
);

insert into guest_list (person_id, check_in, check_out) values
(6, '2025-04-01 21:00:00', '2025-04-02 22:05:00');

