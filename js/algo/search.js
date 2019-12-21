/*******************************************************************************
*                     Recherche dans la liste le bon film                      *
*                          En fonction de l'utilisateur                       *
*******************************************************************************/

function recherche() {

  for (let i = 0; i < listeBlock.length; i++) {
    listeElements.children[i].style.display = "none"
  }

  let mon_filtre = document.getElementById('cherche').value

  for (let i = 0; i < mon_filtre.length; i++) {
    mon_filtre[i] = formatage(mon_filtre)
  }

  lecture(0, mon_filtre)


}

/*******************************************************************************
*              Lis la concordance entre la demande de l'utilisateur            *
*                     et la liste des films et recupere un %                   *
*                       -Si >= 65% affiche le film                             *
*******************************************************************************/
function lecture(j, mon_filtre) {

  let compteur = 0;
  let pourcentage = 0;

  for (let i = 0; i < listeBlock.length; i++) {

    let recherche = formatage(listeBlock[i][j])

    let n = 0;
    var c = 0;

    while (c < listeBlock[i][j].length) {

      if (recherche.charAt(c) == mon_filtre.charAt(c)) {
        n++;
      }
      c++;
    }

    if (((100 * n) / mon_filtre.length) >=  65) {
      creation(i);
    }

  }
}

/*******************************************************************************
*                              Nettoie un string                               *
*                                  -miniscule                                  *
*                                  -accents                                    *
*                                  -espaces                                    *
*                                                                              *
*******************************************************************************/
function formatage(filtra) {

  filtra = filtra.toLowerCase();
  filtra = filtra.sansAccents();
  filtra = filtra.replace(/ /g, "");

  return filtra;
}

String.prototype.sansAccents = function() {
  return this.replace(/[ùûü]/g, "u").replace(/[îï]/g, "i").replace(/[àâä]/g, "a").replace(/[ôö]/g, "o").replace(/[éèêë]/g, "e").replace(/ç/g, "c").replace(/[@]/g, "a");
}
