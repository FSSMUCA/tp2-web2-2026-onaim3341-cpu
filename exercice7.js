let nomProduit = "Clavier mécanique"
let prix = 89.99
let quantite = 3
let codePromo = null
let reductionPourcentage = 10
let estMembre = true
let soldeCompte = 250
let sousTotal = prix * quantite;
let reduction = 0;
if (codePromo != null && estMembre==true) {
    reduction = sousTotal*reductionPourcentage/100;
}

let totalFinal = sousTotal - reduction;
let paiementAccepte = soldeCompte >= totalFinal;
let nouveauSolde = soldeCompte;

nouveauSolde = soldeCompte - totalFinal;
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal, "MAD");
console.log("Réduction :", reduction, "MAD");
console.log("Total     :", totalFinal, "MAD");
console.log("Statut    :", paiementAccepte ? "Paiement accepté" : "Solde insuffisant");
console.log("Solde     :", nouveauSolde, "MAD");
console.log("=========================");