// ✏️ Modifie ici les infos du client : tout le site se met à jour automatiquement.
export const client = {
  nom: "Pascal Catala",
  metier: "Technicien réseaux & Technicien télécoms",
  accroche: "Installation, mise en service et dépannage de vos réseaux et équipements télécoms.",
  presentation:
    "Basé à Fort-de-France, j'installe, configure et dépanne les réseaux informatiques et les équipements télécoms de votre maison ou de votre local professionnel.",
  contact: {
    telephone: "+596 696 25 16 22",
    whatsapp: "596696251622", // chiffres uniquement, avec l'indicatif pays
    messageWhatsapp: "Bonjour Pascal, j'aurais besoin d'une intervention réseau / télécoms.",
    email: "pascalcatala@gmail.com",
    adresse: "28 Av. des Arawaks, 97200 Fort-de-France, Martinique",
  },
};

export const services = [
  { titre: "Réseaux informatiques", texte: "Un réseau local fiable, installé et configuré pour vos besoins.", icon: "network", items: ["Réseau local", "Routeurs & switchs", "Configuration"] },
  { titre: "Wi-Fi", texte: "Un signal stable dans toutes les pièces, bien sécurisé.", icon: "wifi", items: ["Bornes Wi-Fi", "Couverture", "Sécurisation"] },
  { titre: "Télécoms & téléphonie", texte: "Lignes, téléphonie et équipements télécoms.", icon: "tower", items: ["Lignes", "Téléphonie", "Équipements"] },
  { titre: "Câblage & baies", texte: "Un câblage propre, organisé et facile à maintenir.", icon: "server", items: ["Câblage RJ45", "Baies de brassage", "Étiquetage"] },
  { titre: "Dépannage", texte: "Diagnostic et réparation en cas de panne ou de lenteur.", icon: "wrench", items: ["Diagnostic", "Pannes réseau", "Lenteurs"] },
  { titre: "Mise en service", texte: "Installation complète, tests et prise en main.", icon: "check", items: ["Installation", "Tests", "Prise en main"] },
];
