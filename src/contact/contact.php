<?php
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
    $prenom = $_POST['prenom'];
    $nom = $_POST['nom'];
    $email = $_POST['email'];
    $tel = $_POST['tel'];
    $formation = $_POST['formation'];
    $SoldeCPF = $_POST['SoldeCPF'];
    $DRappel = $_POST['DRappel'];
    $HRappel = $_POST['HRappel'];
    $msg = $_POST['msg'];

    $sql = "INSERT INTO contacts (prenom, nom, email, tel, formation, SoldeCPF, DRappel, HRappel, msg) VALUES (:prenom, :nom, :email, :tel, :formation, :SoldeCPF, :DRappel, :HRappel, :msg)";
    $stmt = $pdo->prepare($sql);

    $stmt->execute([
        ':prenom' => $prenom,
        ':nom' => $nom,
        ':email' => $email,
        ':tel' => $tel,
        ':formation' => $formation,
        ':SoldeCPF' => $SoldeCPF,
        ':DRappel' => $DRappel,
        ':HRappel' => $HRappel,
        ':msg' => $msg
    ]);

    echo "Données enregistrées avec succès.";
} else {
    echo "Méthode HTTP non autorisée.";
}
?>