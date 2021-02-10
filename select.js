function showCity() { 
    
    let nomVilleSelectionnee = document.getElementById("ville").value;
    let ville = document.getElementsByClassName("ville");

    for (i=0; i<4; i++){
      if(ville[i].id == nomVilleSelectionnee){
        ville[i].style.display = "inline";
      } else {
        ville[i].style.display = "none";
      }
    }
}