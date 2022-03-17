CREATE TABLE `users` (
  `id` int PRIMARY KEY AUTO_INCREMENT,
  `first_name` varchar(255),
  `last_name` varchar(255),
  `nick_name` varchar(255),
  `email` varchar(255) UNIQUE NOT NULL,
  `password` varchar(255),
  `phone_number` varchar(255),
  `number_id` varchar(255),
  `address` varchar(255),
  `birth_date` date,
  `role_id` int,
  `is_delete` int,
  `created_at` timestamp,
  `updated_at` timestamp,
  `created_by` int
);
