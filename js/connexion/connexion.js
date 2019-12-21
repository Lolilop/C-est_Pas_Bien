/*******************************************************************************
*                      Connexion à la page principale via                      *
*                            un serveur , username Pass                        *
*                                      factice                                 *
*******************************************************************************/

function co() {

  let Serveur = document.getElementById('serveur').value
  let Username = document.getElementById('username').value
  let Pass = document.getElementById('pass').value

  if (Serveur == Serveur && Username == Username && Pass == Pass) {
    window.location = 'index.html'
  }


}
