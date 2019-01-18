<!doctype html>
<html>
	<head>
		<meta charset="utf-8">
  	<link rel="stylesheet" type="text/css" href="style.css" />
  	<title>POP-IN</title>
	</head>
	<body>
		<button
      id="openDialogButton"
      type="button"
 			>
      Ouvrir
    </button>

    <div id="overlay" aria-hidden="true">
  		<div id="dialog">
  			<button id="closeDialogButton" type="button" aria-label="Fermer" title="Fermer la fenêtre">X</button>
  			<h2 id="dialog-title"></h2>
  			<h1 id="dialog-desc">Entrez votre adresse mail.</h1>
  			<form action="" method="post">
  			 <p>
    			 <label for="email">Email</label><br />
    			 <input type="text" name='e_mail' id="email" />
  			 </p>
  			 <p>
  	      <input disabled type="submit" value="envoyer" id="validate" name="envoyer">
  			 </p>
  			</form>
      </div>
    </div>
		<div id="msg_validate"></div>
		<script src="https://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>
    <script src="script.js" type="application/javascript"></script>
	</body>
</html>
