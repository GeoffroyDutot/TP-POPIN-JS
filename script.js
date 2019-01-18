const toggleDialog = (state) => {
  console.log(state ? 'ouverture' : 'fermeture')
  document.getElementById('overlay').setAttribute('aria-hidden', !state)}

function ValidateEmail(){
	if (/^\w+\.?\-?\w*@\w*\.\w{2,}$/.test(document.querySelector('#email').value)) {
		document.querySelector('#validate').disabled = false;}
  else {
		document.querySelector('#validate').disabled = true;}
  }

document.onkeydown = (e) => {
  e = e || window.event
  if (e.keyCode == '27') {
    console.log('touche esc')
    toggleDialog(false)
    }
}

document.getElementById('email').addEventListener('keyup', function(){
		ValidateEmail();
	})
document.getElementById('formulaire').addEventListener('submit', function(e){
    e.preventDefault()
    $.ajax({
    method: "POST",
    url: "email.php",
    data: {'email': document.getElementById('email').value} ,
    dataType: 'text',
    success: function(retour_php){

        if (retour_php == "OK"){
          document.getElementById('msg_validate').innerHTML= "Votre adresse mail à été enregistrée"}
        else {
          document.getElementById('msg_validate').innerHTML= "Une erreur s'est produite (PHP)"}
    },
    error:function(){
      alert("test")
        document.getElementById('msg_validate').innerHTML = "Une erreur s'est produite (Ajax)"}
    })
      toggleDialog(false)

})

document.getElementById('openDialogButton').onclick = function() {
  toggleDialog(true)
}
