let nom = null
let age = 0
let ville = ""
let score = undefined
let actif = false
console.log("nom ->", nom ?? "valeur par defaut");
console.log("age ->", age ?? "valeur par defaut");
console.log("ville ->", ville ?? "valeur par defaut");
console.log("score ->", score ?? "valeur par defaut");
console.log("actif ->", actif ?? "valeur par defaut");

console.log("------------------------");
console.log("nom ->", nom || "valeur par defaut");
console.log("age ->", age || "valeur par defaut");
console.log("ville ->", ville || "valeur par defaut");
console.log("score ->", score || "valeur par defaut");
console.log("actif ->", actif || "valeur par defaut");
console.log("------------------------");

console.log("nom : ?? et || ->", (nom ?? "valeur par defaut") === (nom || "valeur par defaut") ? "même résultat" : "résultat différent");
console.log("age : ?? et || ->", (age ?? "valeur par defaut") === (age || "valeur par defaut") ? "même résultat" : "résultat différent");
console.log("ville : ?? et || ->", (ville ?? "valeur par defaut") === (ville || "valeur par defaut") ? "même résultat" : "résultat différent");
console.log("score : ?? et || ->", (score ?? "valeur par defaut") === (score || "valeur par defaut") ? "même résultat" : "résultat différent");
console.log("actif : ?? et || ->", (actif ?? "valeur par defaut") === (actif || "valeur par defaut") ? "même résultat" : "résultat différent");

