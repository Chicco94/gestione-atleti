-- phpMyAdmin SQL Dump
-- version 4.5.4.1deb2ubuntu2.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Creato il: Feb 23, 2022 alle 15:44
-- Versione del server: 5.6.16-1~exp1
-- Versione PHP: 7.0.33-0ubuntu0.16.04.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `custom-gestione-atleti`
--

-- --------------------------------------------------------

--
-- Struttura della tabella `db_connector_athletemodel`
--

CREATE TABLE `db_connector_athletemodel` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `cognome` varchar(50) NOT NULL,
  `date_of_birth` datetime(6) DEFAULT NULL,
  `sex` varchar(50) DEFAULT NULL,
  `piede_partenza_blocchi` varchar(50) DEFAULT NULL,
  `primo_piede` varchar(50) DEFAULT NULL,
  `secondo_piede` varchar(50) DEFAULT NULL,
  `passi_ostacoli_alti` varchar(50) DEFAULT NULL,
  `passi_ostacoli_bassi` varchar(50) DEFAULT NULL,
  `rincorsa_lungo` varchar(50) DEFAULT NULL,
  `passi_lungo` varchar(50) DEFAULT NULL,
  `piede_stacco_lungo` varchar(50) DEFAULT NULL,
  `rincorsa_alto_1` varchar(50) DEFAULT NULL,
  `rincorsa_alto_2` varchar(50) DEFAULT NULL,
  `passi_alto` varchar(50) DEFAULT NULL,
  `piede_stacco_alto` varchar(50) DEFAULT NULL,
  `tessera` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dump dei dati per la tabella `db_connector_athletemodel`
--

INSERT INTO `db_connector_athletemodel` (`id`, `name`, `cognome`, `date_of_birth`, `sex`, `piede_partenza_blocchi`, `primo_piede`, `secondo_piede`, `passi_ostacoli_alti`, `passi_ostacoli_bassi`, `rincorsa_lungo`, `passi_lungo`, `piede_stacco_lungo`, `rincorsa_alto_1`, `rincorsa_alto_2`, `passi_alto`, `piede_stacco_alto`, `tessera`) VALUES
(2, 'Massimo', 'Bernecoli', '1980-11-03 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(3, 'Enrico', 'Cominato', '1994-02-07 00:00:00.000000', 'Maschio', 'Sinistro', '1 piede e 8 dita', '1 piede e 8 dita', '3', '17', '', '14', 'Sinistro', '', '', '8', 'Sinistro', 'aa'),
(4, 'Valerio', 'Iala', '1990-10-20 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(5, 'Said', 'El Bouhali', '1982-05-15 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(6, 'Gioele', 'Vitali', '2005-06-11 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(7, 'Lorenzo', 'Zullato', '2004-10-20 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(8, 'Andrei', 'Neagu', '2003-02-01 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(9, 'Matteo', 'Grigolato', '2002-04-01 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(10, 'Christian', 'Capato', '2005-02-14 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(11, 'Paolo', 'Dazzani', '1966-06-26 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(12, 'Valentino', 'Bellinazzi', '2004-07-18 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(13, 'Giulio', 'Roccato', '2005-11-29 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(14, 'Pietro', 'Roccato', '2003-10-20 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(15, 'Marcello', 'Merlin', '1999-10-10 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(16, 'Rudy', 'Magagnoli', '1977-11-26 00:00:00.000000', 'Maschio', '', '', '', '', '', '', '', '', '', '', '', '', NULL),
(27, 'Elisabetta', 'Greggio', '1996-07-09 22:00:00.000000', 'Femmina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(28, 'Eleonora', 'Barcaro', '2008-04-16 22:00:00.000000', 'Femmina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(29, 'Chiara', 'Moretto', '2009-02-02 23:00:00.000000', 'Femmina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(30, 'Sara', 'Calabrese', '2002-01-01 23:00:00.000000', 'Femmina', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(31, 'test', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(32, 'test', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

--
-- Indici per le tabelle scaricate
--

--
-- Indici per le tabelle `db_connector_athletemodel`
--
ALTER TABLE `db_connector_athletemodel`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT per le tabelle scaricate
--

--
-- AUTO_INCREMENT per la tabella `db_connector_athletemodel`
--
ALTER TABLE `db_connector_athletemodel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
