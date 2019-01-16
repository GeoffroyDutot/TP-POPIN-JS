const toggleDialog = (state) => {
  console.log(state ? 'ouverture' : 'fermeture')
  document.getElementById('overlay').setAttribute('aria-hidden', !state)
}

document.onkeydown = (e) => {
  e = e || window.event
  if (e.keyCode == '27') {
    console.log('touche esc')
    toggleDialog(false)
  }
}
