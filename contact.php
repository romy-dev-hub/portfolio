<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mail = new PHPMailer(true);

    try {
        // Server settings
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;
        $mail->Username   = 'roumaissa.hadibi.dev@gmail.com'; // Gmail
        $mail->Password   = 'ixgm yvgd ytif jggd'; // App Password from Google
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        // Recipients
        $mail->setFrom($_POST['email'], $_POST['name']);
        $mail->addAddress('roumaissa.hadibi.dev@gmail.com'); // own email

        // Content
        $mail->isHTML(false);
        $mail->Subject = 'New message from portfolio';
        $mail->Body    = "Name: " . $_POST['name'] . "\nEmail: " . $_POST['email'] . "\n\n" . $_POST['message'];

        $mail->send();
        http_response_code(200);
        echo "Message sent successfully!";
    } catch (Exception $e) {
        http_response_code(500);
        echo "Mailer Error: " . $mail->ErrorInfo;
    }
} else {
    http_response_code(403);
    echo "Forbidden request method.";
}
?>
