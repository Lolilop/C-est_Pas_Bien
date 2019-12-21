let pathname = window.location.search.split('=');

let suite = pathname[1].split(":");
let name = "";

for (var i = 0; i < suite[0].length; i++) {
  if (suite[0][i] == "_") {
    name += " "
  } else {
    name += suite[0][i]
  }
}

document.getElementById('ici_2').innerHTML = "telecharger " + name;
document.getElementById('ici').innerHTML = name;
