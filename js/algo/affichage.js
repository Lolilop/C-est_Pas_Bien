/*******************************************************************************
*                      Associe les images (click,class,img,li)                 *
*                            Grace au tableau des films                        *
*******************************************************************************/

let listeElements = document.querySelector(".products")

element = listeElements.children

for (let item = 0; item < listeBlock.length; item++) {

  let newElement = document.createElement("li"),
      newImage = document.createElement("img")
      newImage.src = listeBlock[item][2];
      newElement.appendChild(newImage);
      newElement.setAttribute("class", "product" + listeBlock[item][3]);
      newImage.setAttribute("class", item)
      listeElements.appendChild(newElement)
      newImage.addEventListener("click", afficher)
    }

/*******************************************************************************
*               Permet de mettre les information dans la barre                 *
*                               Suivante                                       *
*******************************************************************************/
function afficher() {

  let location = "info.html" + "?=" + listeBlock[this.className][0] + ":" + listeBlock[this.className][2];
  window.location = location;
}


/*******************************************************************************
*                         Cache les films charger                              *
*                                                                              *
*******************************************************************************/
for (var i = 0; i < listeElements.children.length; ++i) {
  listeElements.children[i].style.display = "none"
}


/*******************************************************************************
*               Affiche les films choisi en fonction de la                     *
*                              Recherche                                       *
*******************************************************************************/
function creation(x) {
  listeElements.children[x].style.display = "inline"
  listeElements.children[x].style.marginLeft = "10px"
}

/*******************************************************************************
*                     Filtre est affiche les bonnes images                     *
*                                                                              *
*******************************************************************************/
function filtra(nomDuFiltre) {


  for (let i = 0; i < listeElements.children.length; ++i) {
    if (listeBlock[i][3] == nomDuFiltre)
    {
      listeElements.children[i].style.display = "inline"
      listeElements.children[i].style.marginLeft = "10px"
    } else {
      listeElements.children[i].style.display = "none"
    }
  }
}
