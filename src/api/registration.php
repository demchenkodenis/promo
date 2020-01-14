<?php
	//подключение базы данных
	include_once('db-prod.php');

	//подлючение PHPMailer для отправки писем
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require('phpmailer/Exception.php');
	require('phpmailer/PHPMailer.php');

	echo $_POST;
	exit;

	if(isset($_POST['name'])){
		$name = $_POST['name'];
	}

	if(isset($_POST['lastname'])){
		$lastname = $_POST['lastname'];
	}

	if(isset($_POST['city'])){
		$city = $_POST['city'];
	}

	if(isset($_POST['email'])){
		$email = $_POST['email'];
	}

	if(isset($_POST['phone'])){
		$phone = $_POST['phone'];
	}
	if(isset($_POST['password'])){
		$password = $_POST['password'];
		$info_code = $password;
	}

	$password = md5(md5($password.'-'.time()));

	$dateRegistration = date("Y-m-d");

	$verificationCode = md5($dateRegistration.'-'.time());

	$token = md5($name.''.$lastname.''.$city.''.$email.''.$phone.''.$password);

	$result = $db->query('INSERT INTO users(`name`, `lastname`, `city`, `email`, `phone`, `password`, `date_registration`, `verification_code`, `info_code`, `token`) VALUES("?s", "?s", "?s", "?s", "?s", "?s", "?s", "?s", "?s", "?s")', $name, $lastname, $city, $email, $phone, $password, $dateRegistration, $verificationCode, $info_code, $token);


	$mail = new PHPMailer(true);
	$mail->setLanguage('ru', 'phpmailer/phpmailer.lang-ru.php');
	try {
	    
	    //Recipients
	    $mail->setFrom('maycrystal@example.com', 'Майская хрустальная');
	    $mail->addAddress($email, $name.' '.$lastname);     // Add a recipient

	    // Content
	    $mail->isHTML(true);                                  // Set email format to HTML
	    $mail->Subject = 'Регистрация на промосайте Майская Хрустальная';
	    $mail->Body    = 'Здравствуйте '.$name.' '.$lastname.'! Вы получили это письмо, потому что Ваш e-mail был указан для регистрации на промосайте <a href="#">Майская Хрустальная</a>.<br>Для принятия участия в акции, перейдите по ссылке <a href="https://denisdemchenko.ru/project/maycrystal/activate.php?verification=">'.$verificationCode.'</a>';

	    $mail->send();
	    echo 'Message has been sent';
	} catch (Exception $e) {
	    echo "Сообщение не было отправлено. Mailer Error: {$mail->ErrorInfo}";
	}

	//получаем последний добавленый id
	$lsuid = $db->getLastInsertId();



	echo json_encode(array('lsuid' => $lsuid, 't' => $token));  //переводим массив в json строку
?>