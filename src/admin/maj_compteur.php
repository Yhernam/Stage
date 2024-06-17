<?php
$host = 'localhost';
$dbname = 'nkformation';
$dbusername = 'root';
$dbpassword = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    echo "Connexion réussie.<br>";
} catch (PDOException $e) {
    die("Erreur de connexion : " . $e->getMessage());
}

$sql = "UPDATE visitors SET count = count + 1 WHERE id = 1";
$stmt = $pdo->prepare($sql);

if ($stmt->execute()) {
    echo "Compteur mis à jour.<br>";
} else {
    echo "Erreur de mise à jour du compteur.<br>";
}
?>