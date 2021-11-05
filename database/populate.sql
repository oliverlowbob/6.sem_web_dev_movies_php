INSERT INTO `films`.`persons` (`name`) VALUES ('Tommy Lee');
INSERT INTO `films`.`persons` (`name`) VALUES ('Dronning Margrethe');
INSERT INTO `films`.`persons` (`name`) VALUES ('Fed Makker');
INSERT INTO `films`.`persons` (`name`) VALUES ('Endnu Federe Makker');

INSERT INTO `films`.`movies` (`title`, `overview`, `released`, `runtime`) VALUES ('Klasse Film', 'Denne film er mega fed', '1995-05-05', '120');

INSERT INTO `films`.`directors` (`person_id`, `movies_id`) VALUES (2, 1);

INSERT INTO `films`.`cast` (`persons_id`, `movies_id`) VALUES (1, 1);
INSERT INTO `films`.`cast` (`persons_id`, `movies_id`) VALUES (3, 1);
INSERT INTO `films`.`cast` (`persons_id`, `movies_id`) VALUES (4, 1);
