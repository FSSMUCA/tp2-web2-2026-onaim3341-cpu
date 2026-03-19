let nom = "   Fatima   "
let age = "23"
let email = "fatima@example"
let scoreJeu = "150pts"
let estAdmin = "false"
let derniereConnexion = null
let nombreConnexions = "0"
console.log("===== RAPPORT UTILISATEUR =====");
let nomModifier= nom.trim();
if (nomModifier=== ""){
    console.log("Inconu");
}
else{
    console.log(`nom : ${nomModifier} (corrigé : espaces supprimés)`)

}
let ageModifier = Number(age);
if (Number.isNaN(ageModifier) || ageModifier <= 0) {
    console.log("age : valeur invalide");
}
else{
    console.log(`age: ${ageModifier} (valide)`);
}
let indexAt = email.indexOf("@") 

if (indexAt === -1) {
  console.log("invalide : pas de @")
} else {
  let indexPoint = email.indexOf(".", indexAt)

  if (indexPoint === -1) {
    console.log("invalide : pas de point après @")
  } else {
    console.log("valide")
  }
}
let scoreModifier=parseInt(scoreJeu);
if (Number.isNaN(scoreModifier)){
    scoreModifier=0;
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

let nombreConnexionsModifier= Number(nombreConnexions);
if(nombreConnexionsModifier==0){
    console.log("nombreConnections :  Aucune Connection ");
}
else{
    console.log(nombreConnexionsModifier);
}
console.log("================================");

