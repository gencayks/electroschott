<?php
// Strato/static hosting contact form handler
// Upload this file into the same directory as index.html on the hosting root.

$to = 'dispo@an-electrorecycling.de';
$from = 'noreply@an-electrorecycling.de';
$redirectSuccess = 'kontakt.html?sent=1';
$redirectError = 'kontakt.html?error=1';

function clean_text($value) {
    $value = trim((string) $value);
    $value = str_replace(["\r", "\n"], ' ', $value);
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function redirect_to($url) {
    header('Location: ' . $url);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    redirect_to($redirectError);
}

// Honeypot spam field. Real visitors never fill this.
if (!empty($_POST['website'] ?? '')) {
    redirect_to($redirectSuccess);
}

$name = clean_text($_POST['name'] ?? '');
$company = clean_text($_POST['company'] ?? '');
$email = trim((string) ($_POST['email'] ?? ''));
$phone = clean_text($_POST['phone'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $message === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    redirect_to($redirectError);
}

$safeEmail = filter_var($email, FILTER_SANITIZE_EMAIL);
$subject = 'Neue Anfrage über an-electrorecycling.de';

$body = "Neue Kontaktanfrage über die Website:\n\n";
$body .= "Name: " . $name . "\n";
$body .= "Firma: " . ($company !== '' ? $company : '-') . "\n";
$body .= "E-Mail: " . $safeEmail . "\n";
$body .= "Telefon: " . ($phone !== '' ? $phone : '-') . "\n\n";
$body .= "Nachricht:\n" . $message . "\n";

$headers = [];
$headers[] = 'From: A&N Electrorecycling Website <' . $from . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $safeEmail . '>';
$headers[] = 'MIME-Version: 1.0';
$headers[] = 'Content-Type: text/plain; charset=UTF-8';
$headers[] = 'X-Mailer: PHP/' . phpversion();

$sent = mail($to, '=?UTF-8?B?' . base64_encode($subject) . '?=', $body, implode("\r\n", $headers));

redirect_to($sent ? $redirectSuccess : $redirectError);
