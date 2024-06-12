<?php
session_start();

$host = 'localhost';
$dbname = 'nkformation';
$dbusername = 'root';
$dbpassword = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form_username = $_POST['username'];
    $form_password = $_POST['password'];

    $sql = "SELECT * FROM admins WHERE username = :username";
    $stmt = $pdo->prepare($sql);
    $stmt->execute(['username' => $form_username]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);
}

if ($user && password_verify($form_password, $user['password'])) {
    $_SESSION['admin_logged_in'] = true;
    $_SESSION['admin_username'] = $user['username'];
    header("Location: admin/admin.html");
    exit;
} else {
    echo "Nom d'utilisateur ou mot de passe incorrect.";
}
?>