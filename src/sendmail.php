<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'vendor/autoload.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->Host = 'smtp.gmail.com';  
$mail->SMTPAuth = true;  
$mail->Username = '';
$mail->Password = ''; 
$mail->SMTPSecure = 'ssl';  
$mail->Port = 465;  
$mail->setLanguage('uk', 'phpmailer/language');
$mail->IsHTML(true);

// От кого письмо
$mail->setFrom('qqbynt@gmail.com', 'Фрілансер по жизни');
// Кому отправить
$mail->addAddress('proektkmc@gmail.com');
// Тема письма
$mail->Subject = 'Сайт';


// Тело писима

$body = '<h1>Якщо ти це прочитаеш то ти ахуений</h1>'
if(trim(!empty($_POST['company']))){
    $body.='<p><strong>Коммпанія:</strong> '.$_POST['company'].'</p>'
}
if(trim(!empty($_POST['name']))){
    $body.='<p><strong>Імя:</strong> '.$_POST['name'].'</p>'
}
if(trim(!empty($_POST['position']))){
    $body.='<p><strong>Посада:</strong> '.$_POST['position'].'</p>'
}
if(trim(!empty($_POST['address']))){
    $body.='<p><strong>Адреса:</strong> '.$_POST['address'].'</p>'
}
if(trim(!empty($_POST['phone']))){
    $body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>'
}
if(trim(!empty($_POST['email']))){
    $body.='<p><strong>Пошта:</strong> '.$_POST['email'].'</p>'
}

// Отправка
if (!$mail->send()){
    $message = 'Ошибака';
}else{
    $message = 'Данні відправлино';
}

$response = ['nessage' => $message];

header('Content-type: application/json');
echo json_encode($response);
?>