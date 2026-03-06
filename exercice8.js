let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"
console.log("===== RAPPORT UTILISATEUR =====");
let nomModifier= nom.trim();
if (nomModifier==null){
    console.log("Inconu");
}
else{
    console.log(`nom : ${nomModifier} (corrigé : espaces supprimés)`)

}
if(Number(age)==NaN || Number(age)<=0){
    console.log("age : valeur invalide");
}
else{
    console.log(`age: ${age} (valide)`);
}
emailAt=email.indexOf("@");
emailPoint=email.indexOf(".");
if(emailAt !== -1 && emailPoint > emailAt){
     console.log("email : (Valide )");
} else {
     console.log("email :" + email +" (invalide : pas de point après @) valide");
    
}
scoreModifier=parseInt(scoreJeu);
if(scoreModifier==NaN){
    return 0;
}
else{
    console.log("scoreJeu : " + scoreModifier + "(extrait depuis "+scoreJeu+")");
}
if(estAdmin === "true"){
    console.log("estAdmin  : true"  )
}
else{
    console.log(`estAdmin  : ${estAdmin}`);
}
console.log("derniereConnection : ", derniereConnexion ?? "jamais connecté");

nombreConnexionsModifier= Number(nombreConnexions);
if(nombreConnexionsModifier==0){
    console.log("nombreConnections :  Aucune Connection ");
}
else{
    console.log(nombreConnexionsModifier);
}
console.log("================================");

