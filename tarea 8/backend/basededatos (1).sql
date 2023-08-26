-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 26-08-2023 a las 04:11:46
-- Versión del servidor: 10.4.25-MariaDB
-- Versión de PHP: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `basededatos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_c` int(11) NOT NULL,
  `nombre_c` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_c`, `nombre_c`) VALUES
(1, 'juego'),
(2, 'consola'),
(3, 'accesorios');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cliente`
--

CREATE TABLE `cliente` (
  `id_cl` int(11) NOT NULL,
  `nombre_cl` varchar(32) DEFAULT NULL,
  `mail` varchar(32) DEFAULT NULL,
  `contraseña` varchar(32) DEFAULT NULL,
  `telefono` varchar(32) DEFAULT NULL,
  `direccion` varchar(32) DEFAULT NULL,
  `numero_de_tarjeta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `cliente`
--

INSERT INTO `cliente` (`id_cl`, `nombre_cl`, `mail`, `contraseña`, `telefono`, `direccion`, `numero_de_tarjeta`) VALUES
(1, 'Carlos', 'carlos@gmail.com', 'papas', '5253525', 'alberdi 421', 152141414),
(3, 'fede', 'fede@gmail.com', 'loco', '41414424124', 'culpina200', 51513513),
(4, 'Diego', 'eretet@gmail.com', 'dadadada', '4132421', 'directorio42', 2147483647),
(5, 'Juan', 'erwsss@gmail.com', 'record', '24312342', 'Lafuente500', 2147483647),
(6, 'Diego', 'erwsss@gmail.com', 'loco', '141241414', 'culpina200', 141414414),
(7, 'Diego', 'erwsss@gmail.com', 'loco', '141241414', 'culpina200', 141414414),
(8, 'Diego', 'erwsss@gmail.com', 'loco', '141241414', 'culpina200', 141414414),
(9, 'Diego', 'erwsss@gmail.com', 'loco', '141241414', 'culpina200', 141414414),
(10, 'Diego', 'erwsss@gmail.com', 'loco', '141241414', 'culpina200', 141414414),
(11, 'Diego', 'erwsss@gmail.com', 'loco', '141241414', 'culpina200', 141414414),
(12, 'fede', 'eretet@gmail.com', 'record', '4343442', 'alberdi 421', 2144515415),
(14, 'fede', 'fede@gmail.com', '2333', '333333', 'culpina200', 333333333),
(15, 'carlos', 'Carlos@gmail.com', 'loco', '24242424', 'culpina200', 2147483647);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `correo`
--

CREATE TABLE `correo` (
  `id_co` int(11) NOT NULL,
  `cuerpo` text DEFAULT NULL,
  `mail_co` varchar(200) DEFAULT NULL,
  `nombre` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `marca`
--

CREATE TABLE `marca` (
  `id_m` int(11) NOT NULL,
  `nombre_m` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `marca`
--

INSERT INTO `marca` (`id_m`, `nombre_m`) VALUES
(1, 'Switch'),
(2, 'Play Station'),
(3, 'Xbox');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `orden`
--

CREATE TABLE `orden` (
  `id_o` int(11) NOT NULL,
  `id_producto` int(11) DEFAULT NULL,
  `id_venta` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `orden`
--

INSERT INTO `orden` (`id_o`, `id_producto`, `id_venta`) VALUES
(1, 1, 29),
(2, 2, 29),
(3, 3, 33),
(4, 4, 36),
(5, 4, 40),
(6, 5, 40),
(7, 1, 32),
(8, 4, 39),
(9, 5, 41),
(10, 15, 35),
(11, 15, 37),
(12, 19, 30),
(13, 1, 30),
(14, 2, 31);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_p` int(11) NOT NULL,
  `nombre_p` varchar(32) DEFAULT NULL,
  `precio` int(11) DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `id_marca` int(11) DEFAULT NULL,
  `id_stock` int(11) DEFAULT NULL,
  `ingreso` date DEFAULT NULL,
  `cantidades` int(11) DEFAULT NULL,
  `imagen` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`id_p`, `nombre_p`, `precio`, `id_categoria`, `id_marca`, `id_stock`, `ingreso`, `cantidades`, `imagen`) VALUES
(1, 'Dead Space', 123313, 1, 2, 1, '2023-04-12', 12, '1'),
(2, 'PS5', 400000, 1, 1, 1, '2022-05-25', 232, 'v1692691037/65501212-7f77-4fb7-91c5-6366b2e731c0.__CR0_0_600_450_PT0_SX600_V1____uzxeks.jpg'),
(3, 'Metroid Prime', 32000, 1, 1, 1, '2023-04-19', 0, 'v1692691038/1019-producto-metroid-prime-remastered-nintendo-switch-458_u9pdxl.jpg'),
(4, 'Resident Evil 4', 25000, 1, 3, 2, '2023-03-31', 24, 'v1692691037/residentevil4_3870863t_k355x2.jpg'),
(5, 'Street Fighter 6', 34000, 1, 3, 1, '2023-06-08', 0, 'v1692691036/descarga_6_wxojkn.jpg'),
(6, 'Legend of Zelda tears of a kingd', 34000, 1, 1, 2, '2023-06-18', 14, 'v1692691038/91O9Uk5oWAL._SL1500__wqhvnj.jpg'),
(15, 'Rachet and Clank', 25000, 1, 2, 1, '2023-08-25', 20, 'jkelpj80nsqg2rklr1ou'),
(16, 'Xbox control', 350000, 3, 3, 1, '2023-08-25', 40, 'tgzroclnjeuguu2tzibm'),
(17, 'Switch', 240000, 2, 1, 1, '2023-08-25', 35, 'igatgi6c4iskjcpfzsig'),
(18, 'Elder Ring', 40000, 1, 3, 1, '2023-08-25', 10, 'cx0obwrgobxr9bvr70bj'),
(19, 'Spider man', 26000, 1, 2, 1, '2023-08-25', 15, 'z7wplkkt27n1kfapxloo'),
(20, 'Mario Party', 30000, 1, 1, 1, '2023-08-25', 23, 'dcmhb9fwqevnjwsz6fkl'),
(21, 'Halo', 26000, 1, 3, 1, '2023-08-25', 20, 'qcoturhvrn8hqfggvazf'),
(22, 'Xbox', 400000, 2, 3, 1, '2023-08-25', 25, 'pufbpjqdf5wfp3llxwa7'),
(23, 'Call of Duty', 30000, 1, 3, 1, '2023-08-25', 12, 'inr2ixylzfpzl730wips'),
(24, 'Howarts', 25000, 1, 3, 1, '2023-08-25', 40, 'ubt2mnfvtlivullcbspu'),
(25, 'Wild Hearts', 35000, 1, 2, 1, '2023-08-25', 20, 'itwc1kze1bw37ur6vkbi'),
(26, 'God of War', 30000, 1, 2, 1, '2023-08-25', 22, 'awhfqzla2lun8qcsnohk'),
(27, 'Demon Souls', 30000, 1, 1, 1, '2023-08-25', 26, 'rp9exierneooqy80jzsz'),
(28, 'Ps5 control', 25000, 3, 2, 1, '2023-08-25', 30, 'bctv373brmk3l8hqecnj'),
(29, 'Mario kart', 22000, 1, 1, 1, '2023-08-25', 12, 'jkch7nbx4dunr4bhuh0x');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `stock`
--

CREATE TABLE `stock` (
  `id_s` int(11) NOT NULL,
  `nombre_s` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `stock`
--

INSERT INTO `stock` (`id_s`, `nombre_s`) VALUES
(1, 'Sin stock'),
(2, 'Hay stock');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `venta`
--

CREATE TABLE `venta` (
  `id_v` int(11) NOT NULL,
  `id_cliente` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `venta`
--

INSERT INTO `venta` (`id_v`, `id_cliente`) VALUES
(29, 1),
(33, 1),
(36, 1),
(40, 1),
(32, 3),
(39, 3),
(41, 3),
(35, 4),
(37, 4),
(30, 5),
(31, 5),
(34, 5),
(38, 5),
(42, 5),
(43, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_c`);

--
-- Indices de la tabla `cliente`
--
ALTER TABLE `cliente`
  ADD PRIMARY KEY (`id_cl`);

--
-- Indices de la tabla `correo`
--
ALTER TABLE `correo`
  ADD PRIMARY KEY (`id_co`);

--
-- Indices de la tabla `marca`
--
ALTER TABLE `marca`
  ADD PRIMARY KEY (`id_m`);

--
-- Indices de la tabla `orden`
--
ALTER TABLE `orden`
  ADD PRIMARY KEY (`id_o`),
  ADD KEY `id_producto` (`id_producto`),
  ADD KEY `id_venta` (`id_venta`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_p`),
  ADD KEY `id_categoria` (`id_categoria`),
  ADD KEY `id_marca` (`id_marca`),
  ADD KEY `id_stock` (`id_stock`);

--
-- Indices de la tabla `stock`
--
ALTER TABLE `stock`
  ADD PRIMARY KEY (`id_s`);

--
-- Indices de la tabla `venta`
--
ALTER TABLE `venta`
  ADD PRIMARY KEY (`id_v`),
  ADD KEY `id_cliente` (`id_cliente`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_c` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `cliente`
--
ALTER TABLE `cliente`
  MODIFY `id_cl` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT de la tabla `correo`
--
ALTER TABLE `correo`
  MODIFY `id_co` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `marca`
--
ALTER TABLE `marca`
  MODIFY `id_m` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `orden`
--
ALTER TABLE `orden`
  MODIFY `id_o` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_p` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;

--
-- AUTO_INCREMENT de la tabla `stock`
--
ALTER TABLE `stock`
  MODIFY `id_s` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `venta`
--
ALTER TABLE `venta`
  MODIFY `id_v` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `orden`
--
ALTER TABLE `orden`
  ADD CONSTRAINT `orden_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_p`),
  ADD CONSTRAINT `orden_ibfk_2` FOREIGN KEY (`id_venta`) REFERENCES `venta` (`id_v`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_categoria`) REFERENCES `categoria` (`id_c`),
  ADD CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`id_marca`) REFERENCES `marca` (`id_m`),
  ADD CONSTRAINT `producto_ibfk_3` FOREIGN KEY (`id_stock`) REFERENCES `stock` (`id_s`);

--
-- Filtros para la tabla `venta`
--
ALTER TABLE `venta`
  ADD CONSTRAINT `venta_ibfk_1` FOREIGN KEY (`id_cliente`) REFERENCES `cliente` (`id_cl`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
