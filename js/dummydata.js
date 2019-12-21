

let listeBlock = [["Titre du film 1", "Description du premier film", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbi2HaUMQnJbBO03qKMAa74I3bFqt9eE4yRSMcTCI1rIBeIFO1", "action"],
                 ["Titre du film 2", "Description du second film", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xRai8PUXRVLrqzv23sTqyUGoqENOaRmKsPKscFFhJElC_phKOw", "action"],
                 ["Titre du film 3", "Description du troisième film", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xRai8PUXRVLrqzv23sTqyUGoqENOaRmKsPKscFFhJElC_phKOw", "sf"]];


let listeElements = document.querySelector(".products")
    titreFilm = document.querySelector("h1")
    descFilm = document.querySelector("p")

    element = listeElements.children
    for(let item = 0; item < listeBlock.length; item++) {

        let newElement = document.createElement("li"),
            newImage = document.createElement("img")
   newImage.src = listeBlock[item][2];
      newElement.appendChild(newImage);
  newElement.setAttribute("class","product " + listeBlock[item][3]);
      newImage.setAttribute("class", item)
            listeElements.appendChild(newElement)
            newImage.addEventListener("click", afficher)
        }

    // Afficher les informations d'un film
    function afficher(){
        titreFilm.innerHTML = listeBlock[this.className][0]
        descFilm.innerHTML = listeBlock[this.className][1]
    }

let filtre = document.querySelector("#filtre");


let btns = filtre.querySelectorAll("li");
console.log(filtre);

for(let i = 0; i< btns.length; i++) {
  btns[i].addEventListener("click", function(){filtra(btns[i].role)}, false)
}

function filtra(nomDuFiltre){
  console.log("test : " + nomDuFiltre)
    for (var i = 0; i < listeElements.children.length; ++i) {
  if(listeElements.children[i].className != nomDuFiltre) {
    listeElements.children[i].style.display = "none"
  } else {
     listeElements.children[i].style.display = "block"
  }
  }

}
/*
var dummyData = {
    "Action": "" +
        "<li class=\"product\"> <a href='venom.html'><img src='./img/Film/Action/venom.jpg'></a></li>" +
		    "<li class=\"product\"><div class=\"\"><a href='21_Jump_Street.html'><img src='./img/Film/Action/venom.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='ven.html'><img src='./img/Film/Action/Equalizer.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Edge_of_Tomorrow.html'><img src='./img/Film/Action/Edge_of_Tomorrow.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='American_History_X.html'><img src='./img/Film/Action/American_History_X.jpg'></div><" +
        "li class=\"product\"><div class=\"\"><a href='Fight_Club.html'><img src='./img/Film/Action/Fight_Club.jpg'></a></div>",


    "Animation":"" +
        "<li class=\"product\"> <a href='Asterix_Le_Domaine_des_Dieux.html'><img src='./img/Film/Animation/Asterix_Le_Domaine_des_Dieux.jpg'></a>  " +
        "</li><li class=\"product\"><div class=\"\"> <a href='Asterix_Obelix_Mission_Cleopatre.html'><img src='./img/Film/Animation/Asterix_Obelix_Mission_Cleopatre.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='Blanche_Neige_et_les_Sept_Nains.html'><img src='./img/Film/Animation/Blanche_Neige_et_les_Sept_Nains.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Dragons.html'><img src='./img/Film/Animation/Dragons.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='L_Etrange_Noel_de_Monsieur_Jack.html'><img src='./img/Film/Animation/L_Etrange_Noel_de_Monsieur_Jack.jpg'></div>" +
        "<li class=\"product\"><div class=\"\"><a href='La_Belle_et_la_Bete.html'><img src='./img/Film/Animation/La_Belle_et_la_Bete.jpg'></a></div></li>" +
		    "<li class=\"product\"><div class=\"\"><a href='m&m.html'><img src='./img/Film/Animation/m&m.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='Toy_Story.html'><img src='./img/Film/Animation/Toy_Story.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Vice_Versa.html'><img src='./img/Film/Animation/Vice_Versa.jpg'></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Wall_E.html'><img src='./img/Film/Animation/Wall_E.jpg'></a></div>"+
        "<li class=\"product\"><div class=\"\"><a href='Zootopie.html'><img src='./img/Film/Animation/Zootopie.jpg'></a></div>",

    "Aventure":"" +
        "<li class=\"product\"> <a href='Bienvenue_a_Zombieland.html'><img src='./img/Film/Aventure/Bienvenue_a_Zombieland.jpg'></a>  ",

    "Epouvante":"" +
        "<li class=\"product\"> <a href='28_Jours_Plus_Tard.html'><img src='./img/Film/Epouvante/28_Jours_Plus_Tard.jpg'></a>  " +
        "</li><li class=\"product\"><div class=\"\"> <a href='Alien_Le_Huitieme_Passager.html'><img src='./img/Film/Epouvante/Alien_Le_Huitieme_Passager.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='American_Nightmare.html'><img src='./img/Film/Epouvante/American_Nightmare.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Ca.html'><img src='./img/Film/Epouvante/Ca.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Conjuring_Les_Dossiers_Warren.html'><img src='./img/Film/Epouvante/Conjuring_Les_Dossiers_Warren.jpg'></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Dernier_train_pour_Busan.html'><img src='./img/Film/Epouvante/Dernier_train_pour_Busan.jpg'></a></div></li>" +
		"<li class=\"product\"><div class=\"\"><a href='Grave.html'><img src='./img/Film/Epouvante/Grave.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='saw.html'><img src='./img/Film/Epouvante/saw.jpg'></a></div>",



    "Historique":"" +
        "<li class=\"product\"> <a href='Il_Faut_Sauver_le_Soldat_Ryan.html'><img src='./img/Film/Historique/Il_Faut_Sauver_le_Soldat_Ryan.jpg'></a></li>" +
		"<li class=\"product\"><div class=\"\"><a href='la_vague.html'><img src='./img/Film/Historique/la_vague.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='tte.html'><img src='./img/Film/Historique/tte.jpg'></a></div>",

    "Science-Fiction":"" +
        "<li class=\"product\"> <a href='Contact.html'><img src='./img/Film/Science-Fiction/Contact.jpg'></a></li>" +
		"<li class=\"product\"><div class=\"\"> <a href='Deadpool.html'><img src='./img/Film/Science-Fiction/Deadpool.jpg'></a></div> " +
        "<li class=\"product\"><div class=\"\"><a href='District_9.html'><img src='./img/Film/Science-Fiction/District_9.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Donnie_Darko.html'><img src='./img/Film/Science-Fiction/Donnie_Darko.jpg'></a></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Gravity.html'><img src='./img/Film/Science-Fiction/Gravity.jpg'></div>" +
        "<li class=\"product\"><div class=\"\"><a href='Interstellar.html'><img src='./img/Film/Science-Fiction/Interstellar.jpg'></a></div></li>" +
		"<li class=\"product\"><div class=\"\"> <a href='tron.html'><img src='./img/Film/Science-Fiction/tron.jpg'></a></div> " ,



}

*/
