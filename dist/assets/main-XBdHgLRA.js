(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(t){if(t.ep)return;t.ep=!0;const o=n(t);fetch(t.href,o)}})();function f(){for(var r=document.getElementsByClassName("collapsible"),e=0;e<r.length;e++){r[e].classList.toggle("active");var n=r[e].nextElementSibling;n.style.display==="block"?n.style.display="none":n.style.display="block"}}window.toggleSection=f;const E=`CREATE TABLE network_logs (\r
    log_id SERIAL PRIMARY KEY,\r
    person_id INT NOT NULL,\r
    device_name VARCHAR(255) NOT NULL,\r
    connection_time TIMESTAMP NOT NULL,\r
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE\r
);\r
\r
INSERT INTO network_logs (log_id, person_id, device_name, connection_time) VALUES\r
(1, 1, 'AJ-Phone', '2025-04-02 00:37:00'),\r
(2, 2, 'Chris-Laptop', '2025-04-02 00:15:00'),\r
(3, 3, 'Doug-Tablet', '2025-04-01 23:50:00');\r
`,b=`CREATE TABLE crime_scene_report (\r
    scene_id integer PRIMARY KEY,\r
    type VARCHAR(255) NOT NULL,\r
    description TEXT NOT NULL,\r
    location VARCHAR(255) NOT NULL\r
);\r
\r
INSERT INTO crime_scene_report (type, description, location) VALUES \r
('burglary','Doug Didlesworth reported that their heirloom went missing.', 'Didleworths Manor');\r
\r
\r
`,I=`CREATE TABLE evidence (\r
    evidence_id integer PRIMARY KEY,\r
    item VARCHAR(255) NOT NULL,\r
    description VARCHAR(255) NOT NULL\r
);\r
\r
INSERT INTO evidence (item, description) VALUES\r
('newspaper', 'newspaper that the culprit sends to you indicating there was a missing heirloom in the Diddlesworth family. And some encircled words that when you combine them it will from "TTEANEMSS"'),\r
('shiny marble', 'so shiny it can be sell for a cheap price.'),\r
('water gun', 'to abolish the fire if the fire is too big.'),\r
('piece of paper', 'along with the newspaper. There is a piece of paper with a statement that says "did you try to BURN THE PAPER"'),\r
('katana', 'heads will roll!'),\r
('burnt paper', 'burnt paper that left in the library.'),\r
('axe', 'found in the kitchen. That can be use to chop the wood or break the vault.'),\r
('poster', 'a piece of note that is left beside the vault that says "I should wear green outfit today!"');\r
`,S=`CREATE TABLE guest_list (\r
    guest_id INTEGER PRIMARY KEY,\r
    person_id INTEGER,\r
    check_in TIMESTAMP,\r
    check_out TIMESTAMP\r
);\r
\r
insert into guest_list (person_id, check_in, check_out) values\r
(6, '2025-04-01 21:00:00', '2025-04-02 22:05:00');\r
\r
`,T=`CREATE TABLE person (\r
    person_id integer PRIMARY KEY,\r
    full_name VARCHAR(100),\r
    address VARCHAR(255)\r
);\r
\r
INSERT INTO person (full_name, address) VALUES\r
\r
('Elizabeth Diddlesworth', 'Diddlesworth Manor'),\r
('Billynette Diddlesworth', 'Diddlesworth Manor'),\r
('Doug Diddlesworth', 'Diddlesworth Manor'),\r
('Randy Diddlesworth', 'Diddlesworth Manor'),\r
('Michelle Diddlesworth', 'Diddlesworth Manor'),\r
('John Doe', 'Shadow Valley'),\r
('Jane Smith', 'Heavy Mountain View Valley'),\r
('Alice Johnson', 'Stardew Valley'),\r
('Bob Brown', 'Shadow Valley'),\r
('Charlie White', 'Heavy Mountain View Valley'),\r
('Daisy Green', 'Stardew Valley'),\r
('Ethan Blue', 'Shadow Valley'),\r
('Fiona Black', 'Heavy Mountain View Valley'),\r
('George Red', 'Stardew Valley'),\r
('Hannah Yellow', 'Shadow Valley'),\r
('Ian Purple', 'Heavy Mountain View Valley'),\r
('Jasmine Orange', 'Stardew Valley'),\r
('Kevin Pink', 'Shadow Valley'),\r
('Lily Gray', 'Heavy Mountain View Valley'),\r
('Mason Cyan', 'Stardew Valley'),\r
('Nora Magenta', 'Shadow Valley'),\r
('Oliver Brown', 'Heavy Mountain View Valley'),\r
('Penny Teal', 'Stardew Valley'),\r
('Quinn Indigo', 'Shadow Valley'),\r
('Ryan Violet', 'Heavy Mountain View Valley'),\r
('Sophie Gold', 'Stardew Valley'),\r
('Tyler Silver', 'Shadow Valley'),\r
('Uma Bronze', 'Heavy Mountain View Valley'),\r
('Victor Copper', 'Stardew Valley'),\r
('Wendy Platinum', 'Shadow Valley'),\r
('Xander Diamond', 'Heavy Mountain View Valley'),\r
('Yara Ruby', 'Stardew Valley'),\r
('Zane Emerald', 'Shadow Valley'),\r
('Ava Sapphire', 'Heavy Mountain View Valley'),\r
('Liam Topaz', 'Stardew Valley'),\r
('Mia Amethyst', 'Shadow Valley'),\r
('Noah Garnet', 'Heavy Mountain View Valley'),\r
('Olivia Opal', 'Stardew Valley'),\r
('Lucas Peridot', 'Shadow Valley'),\r
('Emma Aquamarine', 'Heavy Mountain View Valley'),\r
('James Citrine', 'Stardew Valley'),\r
('Isabella Tourmaline', 'Shadow Valley'),\r
('Benjamin Tanzanite', 'Heavy Mountain View Valley'),\r
('Charlotte Zircon', 'Stardew Valley'),\r
('Alexander Onyx', 'Shadow Valley'),\r
('Sophia Jade', 'Heavy Mountain View Valley'),\r
('William Quartz', 'Stardew Valley'),\r
('Amelia Beryl', 'Shadow Valley'),\r
('Ethan Coral', 'Heavy Mountain View Valley'),\r
('Avery Diamond', 'Stardew Valley'),\r
('Jackson Pearl', 'Shadow Valley'),\r
('Scarlett Ruby', 'Heavy Mountain View Valley'),\r
('Geiko(IT GUY!)', 'Heavy Mountain View Valley'),\r
('Sebastian Sapphire', 'Stardew Valley'),\r
('Flynn Rider', 'Shadow Valley'),\r
('Grace Emerald', 'Shadow Valley'),\r
('Henry Garnet', 'Heavy Mountain View Valley'),\r
('Chloe Amethyst', 'Stardew Valley'),\r
('Daniel Opal', 'Shadow Valley'),\r
('Victoria Topaz', 'Heavy Mountain View Valley'),\r
('Matthew Aquamarine', 'Stardew Valley'),\r
('Samantha Citrine', 'Shadow Valley'),\r
('David Tourmaline', 'Heavy Mountain View Valley'),\r
('Madison Zircon', 'Stardew Valley'),\r
('Joseph Onyx', 'Shadow Valley'),\r
('Aubrey Jade', 'Heavy Mountain View Valley'),\r
('Samuel Quartz', 'Stardew Valley'),\r
('Ella Beryl', 'Shadow Valley'),\r
('Gabriel Coral', 'Heavy Mountain View Valley'),\r
('Luna Diamond', 'Stardew Valley'),\r
('Anthony Pearl', 'Shadow Valley'),\r
('Aria Ruby', 'Heavy Mountain View Valley'),\r
('Isaac Sapphire', 'Stardew Valley'),\r
('Natalie Emerald', 'Shadow Valley'),\r
('Christopher Garnet', 'Heavy Mountain View Valley'),\r
('Zoe Amethyst', 'Stardew Valley'),\r
('Andrew Opal', 'Shadow Valley'),\r
('Mila Topaz', 'Heavy Mountain View Valley'),\r
('Joshua Aquamarine', 'Stardew Valley'),\r
('Sofia Citrine', 'Shadow Valley'),\r
('Elijah Tourmaline', 'Heavy Mountain View Valley'),\r
('Aaliyah Zircon', 'Stardew Valley'),\r
('Caleb Onyx', 'Shadow Valley'),\r
('Layla Jade', 'Heavy Mountain View Valley'),\r
('Nathan Quartz', 'Stardew Valley'),\r
('Hannah Beryl', 'Shadow Valley'),\r
('Isaiah Coral', 'Heavy Mountain View Valley'),\r
('Lydia Diamond', 'Stardew Valley');\r
`,V=`CREATE TABLE person_information (\r
    person_info_id INTEGER PRIMARY KEY,\r
    person_id INT UNIQUE NOT NULL,\r
    top_color VARCHAR(50),\r
    hat_color VARCHAR(50),\r
    height VARCHAR(50),\r
    birth_date DATE,\r
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE\r
);\r
\r
INSERT INTO person_information (person_id, top_color, hat_color, height, birth_date) VALUES\r
(1, 'Brown', 'Black', '165cm', '1994-06-09'),\r
(2, 'Green', 'Blonde', '155cm', '1992-03-12'),\r
(3, 'Blue', 'Gray', '162cm', '1972-08-21'),\r
(4, 'Blue', 'Black', '163cm', '1970-05-05'),\r
(5, 'Brown', 'Black', '164cm', '1998-11-11'),\r
(6, 'Green', 'Green', '161cm','2000-07-04'),\r
(7, 'Green', 'Green', '157cm','1995-01-01'),\r
(8, 'Red', 'Red', '160cm','1999-02-02'),\r
(9, 'Yellow', 'Yellow', '159cm','1997-03-03'),\r
(10, 'Black', 'Black', '158cm','1996-04-04'),\r
(11, 'White', 'White', '156cm','1994-05-05'),\r
(12, 'Pink', 'Pink', '155cm','1993-06-06'),\r
(13, 'Purple', 'Purple', '154cm','1992-07-07'),\r
(14, 'Orange', 'Orange', '153cm','1991-08-08'),\r
(15, 'Gray', 'Gray', '152cm','1990-09-09'),\r
(16, 'Brown', 'Brown', '151cm','1989-10-10'),\r
(17, 'Blue', 'Blue', '150cm','1988-11-11'),\r
(18, 'Green', 'Green', '157cm','1987-12-12'),\r
(19, 'Red', 'Red', '148cm','1986-01-01'),\r
(20, 'Yellow', 'Yellow', '147cm','1985-02-02'),\r
(21, 'Black', 'Black', '146cm','1984-03-03'),\r
(22, 'White', 'White', '145cm','1983-04-04'),\r
(23, 'Pink', 'Pink', '144cm','1982-05-05'),\r
(24, 'Purple', 'Purple', '143cm','1981-06-06'),\r
(25, 'Orange', 'Orange', '142cm','1980-07-07'),\r
(26, 'Gray', 'Gray', '141cm','1979-08-08'),\r
(27, 'Brown', 'Brown', '140cm','1978-09-09'),\r
(28, 'Blue', 'Blue', '139cm','1977-10-10'),\r
(29, 'Green', 'Green', '138cm','1976-11-11'),\r
(30, 'Red', 'Red', '137cm','1975-12-12'),\r
(31, 'Yellow', 'Yellow', '136cm','1974-01-01'),\r
(32, 'Black', 'Black', '135cm','1973-02-02'),\r
(33, 'White', 'White', '134cm','1972-03-03'),\r
(34, 'Pink', 'Pink', '133cm','1971-04-04'),\r
(35, 'Purple', 'Purple', '132cm','1970-05-05'),\r
(36, 'Orange', 'Orange', '131cm','1969-06-06'),\r
(37, 'Gray', 'Gray', '130cm','1968-07-07'),\r
(38, 'Brown', 'Brown', '129cm','1967-08-08'),\r
(39, 'Blue', 'Blue', '128cm','1966-09-09'),\r
(40, 'Green', 'Green', '127cm','1965-10-10'),\r
(41, 'Red', 'Red', '126cm','1964-11-11'),\r
(42, 'Yellow', 'Yellow', '125cm','1963-12-12'),\r
(43, 'Black', 'Black', '124cm','1962-01-01'),\r
(44, 'White', 'White', '123cm','1961-02-02'),\r
(45, 'Pink', 'Pink', '122cm','1960-03-03'),\r
(46, 'Purple', 'Purple', '121cm','1959-04-04'),\r
(47, 'Orange', 'Orange', '120cm','1958-05-05'),\r
(48, 'Gray', 'Gray', '119cm','1957-06-06'),\r
(49, 'Brown', 'Brown', '118cm','1956-07-07'),\r
(50, 'Blue', 'Blue', '117cm','1955-08-08'),\r
(51, 'Green', 'Green', '158cm','1954-09-09'),\r
(52, 'Red', 'Red', '115cm','1953-10-10'),\r
(53, 'Yellow', 'Yellow', '114cm','1952-11-11'),\r
(54, 'Green', 'Green', '162cm','1951-12-12'),\r
(55, 'Green', 'Green', '160cm','1950-01-01'),\r
(56, 'Pink', 'Pink', '111cm','1949-02-02'),\r
(57, 'Purple', 'Purple', '110cm','1948-03-03'),\r
(58, 'Orange', 'Orange', '109cm','1947-04-04'),\r
(59, 'Gray', 'Gray', '108cm','1946-05-05'),\r
(60, 'Brown', 'Brown', '107cm','1945-06-06'),\r
(61, 'Blue', 'Blue', '106cm','1944-07-07'),\r
(62, 'Green', 'Green', '105cm','1943-08-08'),\r
(63, 'Red', 'Red', '104cm','1942-09-09'),\r
(64, 'Yellow', 'Yellow', '103cm','1941-10-10'),\r
(65, 'Black', 'Black', '102cm','1940-11-11'),\r
(66, 'White', 'White', '101cm','1939-12-12'),\r
(67, 'Pink', 'Pink', '100cm','1938-01-01'),\r
(68, 'Purple', 'Purple', '99cm','1937-02-02'),\r
(69, 'Orange', 'Orange', '98cm','1936-03-03'),\r
(70, 'Gray', 'Gray', '97cm','1935-04-04'),\r
(71, 'Brown', 'Brown', '96cm','1934-05-05'),\r
(72, 'Blue', 'Blue', '95cm','1933-06-06'),\r
(73, 'Green', 'Green', '94cm','1932-07-07'),\r
(74, 'Red', 'Red', '93cm','1931-08-08'),\r
(75, 'Yellow', 'Yellow', '92cm','1930-09-09'),\r
(76, 'Black', 'Black', '91cm','1929-10-10'),\r
(77, 'White', 'White', '90cm','1928-11-11'),\r
(78, 'Pink', 'Pink', '89cm','1927-12-12'),\r
(79, 'Purple', 'Purple', '88cm','1926-01-01'),\r
(80, 'Orange', 'Orange', '87cm','1925-02-02');\r
`,R=`CREATE TABLE security_footage (\r
    footage_id INTEGER PRIMARY KEY,\r
    person_id INT NOT NULL,\r
    location VARCHAR(255) NOT NULL,\r
    timestamp TIMESTAMP NOT NULL,\r
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE\r
);\r
\r
INSERT INTO security_footage (person_id, location, timestamp) VALUES\r
(1,'Study Room', '23:45'),\r
(2,'Ballroom', '23:30'),\r
(4,'Safe Room', '23:59'),\r
(3,'Ballroom', '23:30'),\r
(5, 'Kitchen', '05:00'),\r
(6, 'Hallway', '22:00'),\r
(7, 'IT Room', '21:30'),\r
(8, 'Ballroom', '22:00'),\r
(9, 'Kitchen', '22:30'),\r
(10, 'Study Room', '22:45'),\r
(11, 'Hallway', '21:00'),\r
(12, 'Ballroom', '22:15'),\r
(13, 'Kitchen', '22:50'),\r
(14, 'Study Room', '23:00'),\r
(15, 'Hallway', '21:05'),\r
(16, 'Ballroom', '22:05'),\r
(17, 'Kitchen', '22:20'),\r
(18, 'Study Room', '23:10'),\r
(19, 'Hallway', '21:15'),\r
(20, 'Ballroom', '22:25'),\r
(21, 'Kitchen', '22:35'),\r
(22, 'Study Room', '23:20'),\r
(23, 'Hallway', '21:25'),\r
(24, 'Ballroom', '22:30'),\r
(25, 'Kitchen', '22:40'),\r
(26, 'Study Room', '23:30'),\r
(27, 'Hallway', '21:35'),\r
(28, 'Ballroom', '22:45'),\r
(29, 'Kitchen', '22:50'),\r
(30, 'Study Room', '23:40'),\r
(31, 'Hallway', '21:40'),\r
(32, 'Ballroom', '22:55'),\r
(33, 'Kitchen', '23:00'),\r
(34, 'Study Room', '23:05'),\r
(35, 'Hallway', '21:45'),\r
(36, 'Ballroom', '23:10'),\r
(37, 'Kitchen', '23:15'),\r
(38, 'Study Room', '23:20'),\r
(39, 'Hallway', '21:50'),\r
(40, 'Ballroom', '23:25'),\r
(41, 'Kitchen', '23:30'),\r
(42, 'Study Room', '23:35'),\r
(43, 'Hallway', '21:55'),\r
(44, 'Ballroom', '23:40'),\r
(45, 'Kitchen', '23:45'),\r
(46, 'Study Room', '23:50'),\r
(47, 'Hallway', '22:00'),\r
(48, 'Ballroom', '23:55'),\r
(49, 'Kitchen', '23:00'),\r
(50, 'Study Room', '23:05'),\r
(51, 'Hallway', '22:00'),\r
(52, 'Ballroom', '23:15'),\r
(53, 'Kitchen', '23:20'),\r
(54, 'Study Room', '23:25'),\r
(55, 'Library', '22:00'),\r
(56, 'Ballroom', '23:30'),\r
(57, 'Kitchen', '23:35'),\r
(58, 'Study Room', '23:40'),\r
(59, 'Hallway', '22:20'),\r
(60, 'Ballroom', '23:45'),\r
(61, 'Kitchen', '23:50'),\r
(62, 'Study Room', '23:55'),\r
(63, 'Hallway', '22:25'),\r
(64, 'Ballroom', '23:00'),\r
(65, 'Kitchen', '23:05'),\r
(66, 'Study Room', '23:10'),\r
(67, 'Hallway', '22:30'),\r
(68, 'Ballroom', '23:15'),\r
(69, 'Kitchen', '23:20'),\r
(70, 'Study Room', '23:25'),\r
(71, 'Hallway', '22:35'),\r
(72, 'Ballroom', '23:30'),\r
(73, 'Kitchen', '23:35'),\r
(74, 'Study Room', '23:40'),\r
(75, 'Hallway', '22:40'),\r
(76, 'Ballroom', '23:45'),\r
(77, 'Kitchen', '23:50'),\r
(78, 'Study Room', '23:55'),\r
(79, 'Hallway', '22:45'),\r
(80, 'Ballroom', '23:00');\r
\r
`,k=`CREATE TABLE statement (\r
    statement_id integer PRIMARY KEY,\r
    person_id INT NOT NULL,\r
    statement TEXT NOT NULL,\r
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE\r
);\r
\r
INSERT INTO statement (person_id, statement) VALUES\r
-- generate random facts and jokes for person_id 26\r
\r
(1, 'That heirloom cost more than this country!'),\r
(8, 'Why do programmers always get Christmas and Halloween mixed up? Because DEC 25 = OCT 31'),\r
(9, 'Where do hamburgers go to dance?The meat-ball.'),\r
(9, 'How do you find Will Smith in the snow? Look for fresh prints.'),\r
(9, 'What is brown and sticky? A stick.'),\r
(9, 'I did not like my beard at first. Then it grew on me.'),\r
(9, 'Time flies like an arrow. Fruit flies like a banana.'),\r
(9, 'What’s more amazing than a talking dog? A spelling bee.'),\r
(9, 'A burger walks into a bar. The bartender says Sorry, we dont serve food here'),\r
(9, 'Why is it always hot in the corner of a room? Because a corner is 90 degrees.'),\r
(9, 'To the guy who invented zero: Thanks for nothing!'),\r
(9, 'A backwards poet writes inverse.'),\r
(9, ''),\r
(9, 'About one in every 5,000 babies is born with a blocked or missing butt hole. This is a condition known as "imperforate anus" and generally requires surgery to create the opening.'),\r
(9, ''),\r
(9, 'The most expensive book ever purchased was Leonardo Da Vincis "Codex Leicester," which was sold to Bill Gates for $30.8 million.'),\r
(10, 'I was in the study room at 22:45.'),\r
(11, 'I was in the hallway at 21:00.'),\r
(12, 'I was in the ballroom at 22:15.'),\r
(13, 'I was in the kitchen at 22:50.'),\r
(79, 'Our brains are made up of about 75% water, which is one of the reasons that dehydration can lead to headaches, weariness, and decreased mental capacity.'),\r
(79, ''),\r
(79, 'Every minute the human body sheds over 30,000 dead skin cells.'),\r
(79, ''),\r
(79, 'One in 10 people born in Europe are thought to be conceived in an Ikea bed.'),\r
(79, ''),\r
(79, 'In order to fairly assess taxes in the 1600s, King Christian IV of Denmark asked ship captains to estimate the value of their cargo, and this value was decided as the taxable amount without further questions asked. However, the King also possessed the right to purchase the entire cargo at exactly the price they named.'),\r
(79, ''),\r
(79, 'John Phillips, an underachieving Princeton student in 1976, used publicly available books and papers to write a report on how to create a nuclear bomb. He received an A, but his paper was promptly confiscated by the FBI because it was so accurate.'),\r
(79, ''),\r
(14, 'I was in the study room at 23:00.'),\r
(5, 'What is the tallest building in the world? The library, it’s got the most stories!'),\r
(15, 'I was in the hallway at 21:05.'),\r
(16, 'I was in the ballroom at 22:05.'),\r
(17, 'I was in the kitchen at 22:20.'),\r
(10, ''),\r
(10, 'When my son told me to stop impersonating a flamingo, I had to put my foot down.'),\r
(10, ''),\r
(10, 'My dolphin puns are terrible on porpoise.'),\r
(10, ''),\r
(10, 'The Great Fire of London in 1666 destroyed more than 13,500 homes and displaced more than 80,000 people, but amazingly only caused 6 deaths.'),\r
(10, 'Why cant a bicycle stand on its own? Its two-tired.'),\r
(10, ''),\r
(10, 'A restaurant in Pensacola, Florida called McGuire Irish Pub has more than $500,000 worth of dollar bills hanging from the walls and ceiling.'),\r
(10, 'A plateau is the highest form of flattery.'),\r
(10, ''),\r
(10, 'The first number to be spelled using the letter "a" is "one thousand."'),\r
(10, 'What did the grape say when it was stepped on? Nothing, it just let out a little wine.'),\r
(10, 'John Phillips, an underachieving Princeton student in 1976, used publicly available books and papers to write a report on how to create a nuclear bomb. He received an A, but his paper was promptly confiscated by the FBI because it was so accurate.'),\r
(10, ''),\r
(5, 'What is the most used language in programming? Profanity.'),\r
(18, 'I was in the study room at 23:10.'),\r
(19, 'I was in the hallway at 21:15.'),\r
(20, 'I was in the ballroom at 22:25.'),\r
(1, 'You think this is fun?'),\r
(21, 'I was in the kitchen at 22:35.'),\r
(22, 'I was in the study room at 23:20.'),\r
(5, 'What kind of pants do ghosts wear? Boo jeans.'),\r
(23, 'I was in the hallway at 21:25.'),\r
(24, 'I was in the ballroom at 22:30.'),\r
(25, 'I was in the kitchen at 22:40.'),\r
(26, 'I was in the study room at 23:30.'),\r
(5, 'How much does a hipster weigh? An instagram.'),\r
(27, 'I was in the hallway at 21:35.'),\r
(28, 'I was in the ballroom at 22:45.'),\r
(29, 'I was in the kitchen at 22:50.'),\r
(5, 'What’s Forest Gump’s Facebook password? 1forest1'),\r
(30, 'I was in the study room at 23:40.'),\r
(31, 'I was in the hallway at 21:40.'),\r
(32, 'I was in the ballroom at 22:55.'),\r
(32, ''),\r
(1, 'I WILL REPORT YOU TO THE POLICE!'),\r
(53, 'But one person walks silly. Maybe he has an accident. As I recall during the party Michelle Diddlesworth is telling a story to everybody that she has an accident with other person last week.'),\r
(33, 'I was in the kitchen at 23:00.'),\r
(34, 'I was in the study room at 23:05.'),\r
(34, ''),\r
(1, 'Why are you talking to me? I am not a thief!'),\r
(35, 'I was in the hallway at 21:45.'),\r
(36, 'I was in the ballroom at 23:10.'),\r
(4, 'The official state question of New Mexico is "Red or green?", which refers to which type of chile sauce you would like on your food.'),\r
(37, 'I was in the kitchen at 23:15.'),\r
(38, 'I was in the study room at 23:20.'),\r
(39, 'I was in the hallway at 21:50.'),\r
(39, ''),\r
(40, 'I was in the ballroom at 23:25.'),\r
(41, 'I was in the kitchen at 23:30.'),\r
(2, 'I just want to sleep after the big party.'),\r
(3, 'The vault is in the library.'),\r
(42, 'I was in the study room at 23:35.'),\r
(53, 'based on the security footage there are many people who passed the hallway!'),\r
(43, 'I was in the hallway at 21:55.'),\r
(44, 'I was in the ballroom at 23:40.'),\r
(2, 'I am not a thief!'),\r
(45, 'I was in the kitchen at 23:45.'),\r
(46, 'I was in the study room at 23:50.'),\r
(53, 'The person who is walking silly is in the hall way between 21:30 to 22:00 they are wearing green tops and green hat and a height that maybe 157-162cm.'),\r
(47, 'I was in the hallway at 22:00.'),\r
(48, 'I was in the ballroom at 23:55.'),\r
(49, 'I was in the kitchen at 23:00.'),\r
(4, 'There was a period during the 18th century in which the British referred to cucumbers as "cowcumbers" because they were only thought to be good for animal food.'),\r
(50, 'I was in the study room at 23:05.'),\r
(51, 'I was in the hallway at 22:00.'),\r
(52, 'I was in the ballroom at 23:15.'),\r
(4, 'A single litter of kittens can have more than one father.'),\r
(3, 'vault code was 123456!'),\r
(7, 'I was in the kitchen at 23:20.'),\r
(3, 'you need to go through the narrow hallway before getting into the library'),\r
(55, 'I was in the hallway at 21:45.'),\r
(56, 'I was in the ballroom at 23:30.'),\r
(4, 'A ‘jiffy’ is an actual unit of time, referring to 1/100th of a second.'),\r
(2, 'I was in the ballroom all night.'),\r
(4, 'How is like to be a detective?'),\r
(57, 'I was in the kitchen at 23:35.'),\r
(3, 'The time I checked the vault at 22:00 the code was changed! Our Heirloom was stolen!'),\r
(58, 'I was in the study room at 23:40.'),\r
(59, 'I was in the hallway at 21:50.'),\r
(60, 'I was in the ballroom at 23:45.'),\r
(61, 'I was in the kitchen at 23:50.'),\r
(62, 'I was in the study room at 23:55.'),\r
(53, 'someone sprayed the camera in the hallway to make it blurry!'),\r
(63, 'I was in the hallway at 22:00.'),\r
(64, 'I was in the ballroom at 23:00.'),\r
(65, 'I was in the kitchen at 23:05.'),\r
(66, 'I was in the study room at 23:10.'),\r
(66, ''),\r
(66, 'After President James Garfield was shot, his doctors were so negligent and gave him such a bad infection, that his assassin openly confessed to the shooting at his trial, arguing that while he had done the shooting, it was the doctors who had done the killing. However, the jury was not impressed by his insane antics, and he was found guilty and publicly executed.'),\r
(66, 'The French surgeon Serge Voronoff is famous for his work in the 1920s of grafting monkey testicle tissue onto the testicles of men. This was thought to have a rejuvenating effect, and around 2,000 men had the procedure done.'),\r
(54, 'I Admit! I did try to take it. But one of the household came. So instead of stealing the precious gem, I just changed the combination. If you are trying to crack me to tell you the combination, i will not tell you! But I left a clue in a piece of paper.'),\r
(66, 'According to a 2020 study, at least 27% of Americans over the age of 18 have cut off contact with a family member.'),\r
(66, 'Until 1971, the Postmaster General (the head of the USPS) sat on the Presidents Cabinet and was in the line of succession of the president.'),\r
(66, ''),\r
(66, 'The book Enders Game was primarily written as a setup book so that the author, Orson Scott Card, could write the book he really wanted to write: Speaker for the Dead. As it turns out, Enders Game became wildly popular while Speaker for the Dead has only been read by a fraction of as many people.'),\r
(66, ''),\r
(68, 'After President James Garfield was shot, his doctors were so negligent and gave him such a bad infection, that his assassin openly confessed to the shooting at his trial, arguing that while he had done the shooting, it was the doctors who had done the killing. However, the jury was not impressed by his insane antics, and he was found guilty and publicly executed.'),\r
(67, 'I was in the hallway at 22:15.'),\r
(68, 'I was in the ballroom at 23:20.'),\r
(69, 'I was in the kitchen at 23:25.'),\r
(69, ''),\r
(69, 'The word LEGO is formed from the Danish word “Leg Godt” which means "play well" in English. In Latin, it means ‘putting together’.'),\r
(69, ''),\r
(69, ''),\r
(69, 'The French surgeon Serge Voronoff is famous for his work in the 1920s of grafting monkey testicle tissue onto the testicles of men. This was thought to have a rejuvenating effect, and around 2,000 men had the procedure done.'),\r
(69, ''),\r
(69, ''),\r
(69, 'The largest tsunami ever recorded occurred in Lituya Bay, Alaska in 1958, with a wave reaching the incredible height of 1720 feet.'),\r
(69, ''),\r
(69, 'The deepest hole ever drilled by man is the Kola Superdeep Borehole (40,226 feet).'),\r
(1, 'Yes I had an accident with Flynn Rider last week when we tried to climb the mountain in Stardew Valley, I just had a minor bruise but I think Flynn broke his leg.'),\r
(70, 'I was in the study room at 23:30.'),\r
(71, 'I was in the hallway at 22:30.'),\r
(72, 'I was in the ballroom at 23:35.'),\r
(3, 'There is a security footage in the hall way, you can ask geiko(IT Guy) for more information'),\r
(73, 'I was in the kitchen at 23:40.'),\r
(74, 'I was in the study room at 23:45.'),\r
(75, 'I was in the hallway at 22:45.'),\r
(76, 'I was in the ballroom at 23:50.'),\r
(76, ''),\r
(76, 'Lake Chargo-ggagoggm-anchaug-gagoggcha-ubunagun gamaugg, in the town of Webster, Massachusetts, is the longest place-name in the United State. It is also known as Webster Lake.'),\r
(76, ''),\r
(76, 'The nursery rhyme "Mary Had a Little Lamb" was actually based on a real girl in Boston named Mary Sawyer, whose pet lamb followed her to school one day.'),\r
(76, ''),\r
(76, 'Beaver anal secretions known as castoreum have been used as a vanilla flavor substitute for certain foods and luxury cosmetics.'),\r
(76, ''),\r
(76, 'Ostrich farms sometimes have difficulty getting their male ostriches to breed, since the male ostriches are more attracted to their human caretakers than to female ostriches.'),\r
(77, 'I was in the kitchen at 23:55.'),\r
(78, 'I was in the study room at 23:00.'),\r
(79, 'I was in the hallway at 22:00.'),\r
(80, 'I was in the ballroom at 23:05.');\r
`,A=`CREATE TABLE safe_logs (\r
    log_id INTEGER PRIMARY KEY,\r
    person_id INT NOT NULL,\r
    timestamp TIMESTAMP NOT NULL,\r
    new_combination VARCHAR(10),\r
    FOREIGN KEY (person_id) REFERENCES person(person_id) ON DELETE CASCADE\r
);\r
\r
INSERT INTO safe_logs (person_id, timestamp, new_combination) VALUES\r
(1, '2025-04-02 00:10:00', '060994'),\r
(1, '2025-04-01 22:00:00', '123456'),\r
(1, '2025-04-01 22:30:00', '654321'),\r
(2, '2025-04-01 23:00:00', '111111'),\r
(2, '2025-04-01 23:30:00', '222222'),\r
(3, '2025-04-01 23:45:00', '333333'),\r
(3, '2025-04-02 00:00:00', '444444'),\r
(4, '2025-04-02 00:05:00', '555555'),\r
(4, '2025-04-02 00:10:00', '666666');\r
`,v=`CREATE TABLE encrypted_keys (\r
    key_id integer PRIMARY KEY,\r
    key VARCHAR(255) NOT NULL,\r
    table_name VARCHAR(255) NOT NULL,\r
    decrypted BOOLEAN NOT NULL DEFAULT FALSE\r
);\r
\r
INSERT INTO encrypted_keys (key_id, key, table_name, decrypted) VALUES \r
(1, '041c0e1010030b07001c1d11', 'statement', 0),-- ttteanemss/statements\r
(2, '151d1d0a01060b19151f0b17', 'vault', 0);  -- burnthepaper\r
`;let s=null;const B=[b,I,S,T,V,R,k,E,A,v];async function w(r=[]){if(s)return s;try{const e=await initSqlJs({locateFile:n=>n==="sql-wasm.wasm"?window.sqlWasmPath:`https://cdn.jsdelivr.net/npm/sql.js@1.8.0/dist/${n}`});if(s=new e.Database,r.length>0)for(const n of r)try{s.exec(n)}catch(a){console.error("Error executing SQL:",a)}else console.log("Database initialized without SQL files.");return s}catch(e){throw console.error("Error initializing database:",e),e}}function p(){if(!s)throw new Error("Database not initialized. Call initializeDatabase() first.");return s}function L(r){return p().exec(r)}w(B).then(()=>{console.log("Database loaded successfully!"),document.getElementById("decryptionBtn").disabled=!1,document.getElementById("vaultBtn").disabled=!1}).catch(r=>{console.error("Error loading database:",r)});const c={initialize:w,getInstance:p,execute:L};function N(r){var e=r.trim();if(e)try{const n=g(e),a=c.execute(`select * from encrypted_keys where key = '${n}'`);if(a.length<=0){document.getElementById("section-result").innerHTML="Key not found";return}if(a[0].values[0][2]=="vault"){document.getElementById("section-result").innerHTML="Congratulations! You've cracked the vault and found the heirloom inside the vault. Diddleworths family is very grateful for your help, they will now gave you a reward and moved on in their lives because that's how life works. You can now also move on in your life and forget about this case. Good luck! <br/> <br/> ps: Sorry for wasting your time.";return}c.execute(`update encrypted_keys set decrypted = 1 where key = '${n}'`),document.getElementById("section-result").innerHTML=`${a[0].values[0][2]} are decrypted!`}catch(n){console.error("Error executing SQL query:",n),document.getElementById("section-result").innerHTML="Error: "+n.message}}function g(r){var e="";const n="whodunnitone";for(;r.length<n.length;)r+=r;for(var a=0;a<n.length;a++){var t=n[a].charCodeAt(0),o=r[a].charCodeAt(0),i=t^o,l=i.toString(16);l.length<2&&(l="0"+l),e+=l}return e}window.checkKey=N;window.encryptKey=g;document.addEventListener("DOMContentLoaded",function(){const r=CodeMirror.fromTextArea(document.getElementById("sqlQuery"),{mode:"text/x-sql",theme:"material",lineNumbers:!0,indenthWithTabs:!0,smartIndent:!0,matchBrackets:!0,autofocus:!0,tabSize:2,lineWrapping:!0,extraKeys:{"Ctrl-Space":"autocomplete","Ctrl-Enter":function(e){const n=e.getValue();m(n)}}});document.getElementById("sqlQueryBtn").addEventListener("click",function(){const e=r.getValue();m(e)})});function m(r){if(r!=="")try{const e=c.execute(r);if(!r.toLowerCase().startsWith("select")){document.getElementById("output").innerHTML="Only select queries are allowed.";return}if(e.length===0||e[0].values.length===0){document.getElementById("output").innerHTML="No results found.";return}_(e[0].columns,e[0].values)}catch(e){document.getElementById("output").innerHTML="Error: "+e.message}}function _(r,e){const n=document.createElement("table");n.setAttribute("border","1"),n.style.borderCollapse="collapse",n.style.width="100%";let a=!0;const t=r.indexOf("statement");var o=c.execute("select decrypted from encrypted_keys where table_name = 'statement'");t!==-1&&o[0].values[0][0]===1&&(a=!1);const i=document.createElement("tr");r.forEach(d=>{const h=document.createElement("th");h.innerText=d,i.appendChild(h)}),n.appendChild(i),e.forEach(d=>{const h=document.createElement("tr");d.forEach(y=>{const u=document.createElement("td");y===d[t]&&a?u.textContent=M():u.textContent=y,h.appendChild(u)}),n.appendChild(h)});const l=document.getElementById("output");l.innerHTML="",l.appendChild(n),l.style.display="block"}function M(){const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";let e="",n=Math.floor(Math.random()*22)+22;for(let a=0;a<n;a++)e+=r.charAt(Math.floor(Math.random()*r.length));return e}
