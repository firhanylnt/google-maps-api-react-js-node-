-- phpMyAdmin SQL Dump
-- version 4.6.6deb5ubuntu0.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Feb 11, 2022 at 10:32 AM
-- Server version: 5.7.37-0ubuntu0.18.04.1
-- PHP Version: 7.2.24-0ubuntu0.18.04.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `maps_data`
--

-- --------------------------------------------------------

--
-- Table structure for table `titik_keramaian`
--

CREATE TABLE `titik_keramaian` (
  `id` int(11) NOT NULL,
  `longitude` varchar(100) NOT NULL,
  `latitude` varchar(100) NOT NULL,
  `brand` varchar(100) NOT NULL,
  `time` datetime NOT NULL,
  `user_count` varchar(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `titik_keramaian`
--

INSERT INTO `titik_keramaian` (`id`, `longitude`, `latitude`, `brand`, `time`, `user_count`) VALUES
(1, '106.77709118108051', '-6.142837378870265', 'Infinix', '2021-10-20 08:00:00', '1'),
(2, '106.77709118108051', '-6.142837378870265', 'Samsung', '2021-10-20 07:00:00', '1'),
(3, '106.77809118108054', '-6.142837378870266', 'Xiaomi', '2021-10-20 09:00:00', '1'),
(4, '106.7790911810806', '-6.142837378870266', 'Xiaomi', '2021-10-20 07:00:00', '1'),
(5, '106.7790911810806', '-6.142837378870266', 'Oppo', '2021-10-20 07:00:00', '5'),
(6, '106.7790911810806', '-6.142837378870266', 'Xiaomi', '2021-10-20 08:00:00', '2'),
(7, '106.78109118108071', '-6.142837378870266', 'Itel', '2021-10-20 08:00:00', '8'),
(8, '106.78209118108074', '-6.142837378870266', 'Huawei', '2021-10-20 08:00:00', '6'),
(9, '106.78209118108074', '-6.142837378870266', 'Samsung', '2021-10-20 08:00:00', '1'),
(10, '106.78209118108074', '-6.142837378870266', 'Samsung', '2021-10-20 07:00:00', '2');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `titik_keramaian`
--
ALTER TABLE `titik_keramaian`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `titik_keramaian`
--
ALTER TABLE `titik_keramaian`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
