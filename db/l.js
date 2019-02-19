CREATE TABLE `users` (
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `comments` (
	`comment` TEXT NOT NULL,
	`id` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	PRIMARY KEY (`id`)
);

ALTER TABLE `comments` ADD CONSTRAINT `comments_fk0` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`);
