<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=tp-popin','root', '');
    $email = htmlspecialchars($_POST['email']);
    $insertmbr = $bdd->prepare("INSERT INTO email(email) VALUES(?)");
    $insertmbr->execute(array(
    $email
    ));
        echo "OK";
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    echo "NO";
    die();
}



?>
