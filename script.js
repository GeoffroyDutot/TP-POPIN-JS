const toggleDialog = (state) => {
  console.log(state ? 'ouverture' : 'fermeture')
  document.getElementById('overlay').setAttribute('aria-hidden', !state)
}

function ValidateEmail(){
	if (/^\w+\.?\-?\w*@\w*\.\w{2,}$/.test(document.querySelector('#email').value)) {
		document.querySelector('#validate').disabled = false;
	} else {
		document.querySelector('#validate').disabled = true;
	}
}

document.onkeydown = (e) => {
  e = e || window.event
  if (e.keyCode == '27') {
    console.log('touche esc')
    toggleDialog(false)
  }
}

document.querySelector('#email').addEventListener('keyup', function(){
		ValidateEmail();
	})
document.querySelector('form').addEventListener('submit', function(e){
    e.preventDefault()
    document.getElementById('msg_validate').innerHTML= "Email enregistré !"
})
