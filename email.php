<?php
try {
    $bdd = new PDO('mysql:host=localhost;dbname=tp-popin','root', '');
    echo "OK";
} catch (PDOException $e) {
    print "Erreur !: " . $e->getMessage() . "<br/>";
    echo "NO";
    die();
}

    $email = htmlspecialchars($_POST['e_mail']);

    $insertmbr = $bdd->prepare("INSERT INTO email(email) VALUES(?)");
    $insertmbr->execute(array(
        $email
    ));


?>
