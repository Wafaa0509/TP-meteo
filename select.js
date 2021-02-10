function showCity() { 
    /*console.log(villeCourante);*/
    /*var ville = document.getElementByld("ville").value; }*/
    let nomVilleSelectionnee = document.getElementById("ville-select").value;
    let villes = document.getElementsByClassName("ville");

    for (i=0; i<4; i++){
      if(villes[i].id == nomVilleSelectionnee {
        villes[i].style.display = "inline";
      } else {
        villes[i].style.display = "none";
      }
    }
}