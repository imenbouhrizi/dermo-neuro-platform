export type QuestionType = "choice" | "likert" | "open";

export type Question = {
  id: string;
  text: string;
  type: QuestionType;
  options?: string[];
};

export type QuestionnaireSection = {
  title: string;
  questions: Question[];
};

export const questionnaireSections: QuestionnaireSection[] = [
  {
    title: "Profil",
    questions: [
      { id: "age", text: "Quel est votre âge ?", type: "choice", options: ["18–29 ans", "30–44 ans", "45–59 ans", "60–74 ans", "75 ans +"] },
      { id: "sexe", text: "Quel est votre sexe ?", type: "choice", options: ["Femme", "Homme"] },
      { id: "pays", text: "Pays de résidence", type: "choice", options: ["Europe", "Vietnam", "Thaïlande", "Inde", "Tunisie", "Autre"] },
      { id: "achat_soins", text: "Fréquence d’achat de soins visage", type: "choice", options: ["Jamais", "Occasionnellement", "Mensuellement", "Régulièrement"] },
    ],
  },
  {
    title: "Peau & émotions",
    questions: [
      { id: "stress_peau", text: "Le stress influence l’état de ma peau.", type: "likert" },
      { id: "emotion_peau", text: "Mon état émotionnel influence l’apparence de ma peau.", type: "likert" },
      { id: "soin_bien_etre", text: "Prendre soin de ma peau contribue à mon bien-être général.", type: "likert" },
      { id: "benefice_esthetique", text: "Je recherche plus qu’un bénéfice esthétique dans un soin.", type: "likert" },
    ],
  },
  {
    title: "Expérience sensorielle",
    questions: [
      { id: "odeur", text: "L’odeur influence mon expérience d’utilisation d’un produit de soin.", type: "likert" },
      { id: "texture", text: "La texture influence fortement mon appréciation d’un produit de soin.", type: "likert" },
      { id: "rituel", text: "Le rituel d’application est aussi important que le produit lui-même.", type: "likert" },
    ],
  },
  {
    title: "Adhésion au concept",
    questions: [
      { id: "pertinence", text: "Cette approche me paraît pertinente.", type: "likert" },
      { id: "differenciation", text: "Cette approche me paraît différenciante.", type: "likert" },
    ],
  },
  {
    title: "Neuro-perception",
    questions: [
      { id: "simplicite", text: "Le concept me paraît simple, intuitif et facile à comprendre.", type: "likert" },
      { id: "psychological_safety", text: "Cette approche me paraît rassurante et réduit mes inquiétudes concernant les soins.", type: "likert" },
      { id: "self_congruence", text: "Je me reconnais dans cette vision du soin et elle correspond à mes valeurs personnelles.", type: "likert" },
      { id: "projection_emotionnelle", text: "Je peux imaginer cette expérience comme un moment de recentrage et d’apaisement.", type: "likert" },
      { id: "sensorial_anticipation", text: "Je peux facilement imaginer l’expérience sensorielle proposée.", type: "likert" },
    ],
  },
  {
    title: "Visual Dimension",
    questions: [
      { id: "dimension_visuelle", text: "Une identité professionnelle et visuellement attrayante augmenterait ma confiance dans un concept dermocosmétique.", type: "likert" },
    ],
  },
  {
    title: "Scientific Dimension",
    questions: [
      { id: "dimension_scientifique", text: "Les preuves scientifiques et les explications sur les ingrédients actifs augmentent ma confiance dans une innovation dermocosmétique.", type: "likert" },
    ],
  },
  {
    title: "Valeur perçue",
    questions: [
      { id: "valeur_fonctionnelle", text: "Cette approche répond de manière utile à un besoin réel.", type: "likert" },
      { id: "valeur_emotionnelle", text: "Cette approche crée des émotions positives.", type: "likert" },
      { id: "valeur_experientielle", text: "Je pense que j’apprécierais utiliser ce type de produit.", type: "likert" },
      { id: "valeur_sociale", text: "Cette approche correspond à l’image que j’aimerais projeter aux autres.", type: "likert" },
    ],
  },
  {
    title: "Trust",
    questions: [
      { id: "ability", text: "Le projet paraît compétent dans son domaine.", type: "likert" },
      { id: "benevolence", text: "Le projet semble réellement préoccupé par le bien-être des utilisateurs.", type: "likert" },
      { id: "integrity", text: "Les promesses me paraissent réalistes.", type: "likert" },
      { id: "confiance_globale", text: "La communication me paraît honnête.", type: "likert" },
    ],
  },
  {
    title: "Adhésion comportementale",
    questions: [
      { id: "suivre_projet", text: "Je souhaiterais suivre l’évolution de ce projet et en savoir davantage.", type: "likert" },
      { id: "intention_essai", text: "Je serais intéressé(e) pour essayer ce produit.", type: "likert" },
      { id: "recommandation", text: "Je recommanderais ce projet à mon entourage.", type: "likert" },
      { id: "interaction_digitale", text: "Je serais intéressé(e) à suivre et à interagir avec le contenu digital lié à ce concept.", type: "likert" },
    ],
  },
  {
    title: "Business",
    questions: [
      { id: "payer_davantage", text: "Seriez-vous prêt(e) à payer davantage pour une expérience de soin plus complète ?", type: "choice", options: ["Oui", "Non", "Peut-être"] },
      { id: "prix_acceptable", text: "Quel prix vous semblerait acceptable ?", type: "choice", options: ["< 20€", "20–40€", "40–60€", "> 60€"] },
      { id: "canal_achat", text: "Canal d’achat préféré", type: "choice", options: ["Pharmacie", "Parapharmacie", "Site internet", "Concept store", "Institut", "Marketplace"] },
      { id: "origine_naturelle", text: "L’origine naturelle des ingrédients est importante pour moi.", type: "likert" },
    ],
  },
  {
    title: "Questions ouvertes",
    questions: [
      { id: "manque_soins", text: "Qu’est-ce qui manque aujourd’hui aux produits de soin ?", type: "open" },
      { id: "experience_ideale", text: "Quels mots associez-vous à une expérience de soin idéale ?", type: "open" },
    ],
  },
];