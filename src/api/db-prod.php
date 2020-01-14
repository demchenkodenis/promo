<?php

	// Подключаем библиотеку
	namespace Krugozor\Database\Mysql;
	require_once('Mysql/Mysql.php');
	require_once('Mysql/Exception.php');
	require_once('Mysql/Statement.php');

	// Подключение к СУБД, выбор кодировки и базы данных.
	$db = Mysql::create('localhost', 'architect_promo', 'x29nfzyk2ytd')
	           ->setCharset('utf8')
	           ->setDatabaseName('architect_promo');

?>