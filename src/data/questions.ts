export type Lang = "fr" | "en";
export type QuestionType = "choice" | "likert" | "open" | "country";

export type Question = {
  id: string;
  text: Record<Lang, string>;
  type: QuestionType;
  options?: Record<Lang, string[]>;
  required?: boolean;
};

export type QuestionnaireSection = {
  title: Record<Lang, string>;
  intro?: Record<Lang, string>;
  questions: Question[];
};

export const questionnaireSections: QuestionnaireSection[] = [
  {
    title: { fr: "Profil", en: "Profile" },
    questions: [
      {
        id: "age",
        text: { fr: "Quel est votre âge ?", en: "What is your age?" },
        type: "choice",
        options: {
          fr: ["18–29 ans", "30–44 ans", "45–59 ans", "60–74 ans", "75 ans +"],
          en: ["18–29", "30–44", "45–59", "60–74", "75+"],
        },
        required: true,
      },
      {
        id: "sexe",
        text: { fr: "Quel est votre sexe ?", en: "What is your gender?" },
        type: "choice",
        options: {
          fr: ["Femme", "Homme"],
          en: ["Female", "Male"],
        },
        required: true,
      },
      {
        id: "pays",
        text: {
          fr: "Quel est votre pays de résidence ?",
          en: "What is your country of residence?",
        },
        type: "country",
        required: true,
      },
      {
        id: "achat_soins",
        text: {
          fr: "Fréquence d’achat de soins visage",
          en: "Frequency of purchasing facial skincare products",
        },
        type: "choice",
        options: {
          fr: ["Jamais", "Occasionnellement", "Mensuellement", "Régulièrement"],
          en: ["Never", "Occasionally", "Monthly", "Regularly"],
        },
        required: true,
      },
    ],
  },

  {
    title: { fr: "Peau & émotions", en: "Skin & emotions" },
    questions: [
      {
        id: "emotion_peau",
        text: {
          fr: "Mon état émotionnel (stress, fatigue, bien-être, etc.) influence l’apparence de ma peau.",
          en: "My emotional state (stress, fatigue, well-being, etc.) influences the appearance of my skin.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "soin_bien_etre",
        text: {
          fr: "Prendre soin de ma peau contribue à mon bien-être général.",
          en: "Taking care of my skin contributes to my overall well-being.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "benefice_esthetique",
        text: {
          fr: "Je recherche plus qu’un bénéfice esthétique dans un soin.",
          en: "I look for more than an aesthetic benefit in a skincare product.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Expérience sensorielle", en: "Sensory experience" },
    questions: [
      {
        id: "aspects_sensoriels",
        text: {
          fr: "Les aspects sensoriels (odeur, texture, etc.) influencent mon expérience d’un produit de soin.",
          en: "Sensory aspects (scent, texture, etc.) influence my experience of a skincare product.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "rituel",
        text: {
          fr: "Le rituel d’application (gestes, routine et moment de bien-être) est aussi important que le produit lui-même.",
          en: "The application ritual (gestures, routine and moment of well-being) is as important as the product itself.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Adhésion au concept", en: "Concept adhesion" },
      intro: {
      fr: "Imaginez une marque dermocosmétique associant naturalité, expertise scientifique et expérience sensorielle. Son approche personnalisée prend en compte l’influence des émotions, de l’environnement et du mode de vie sur la peau afin de mieux comprendre ses besoins et d’offrir une expérience de soin engageante.",
      en: "Imagine a dermocosmetic brand combining naturality, scientific expertise and sensory experience. Its personalized approach takes into account the influence of emotions, the environment and lifestyle on the skin in order to better understand its needs and offer an engaging skincare experience.",
    },
    questions: [
      {
        id: "pertinence",
        text: {
          fr: "Ce concept me paraît pertinent.",
          en: "This concept seems relevant to me.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "differenciation",
        text: {
          fr: "Ce concept me paraît différenciant.",
          en: "This concept seems distinctive to me.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Neuro-perception", en: "Neuro-perception" },
    questions: [
      {
        id: "simplicite",
        text: {
          fr: "Le concept me paraît simple, intuitif et facile à comprendre.",
          en: "The concept seems simple, intuitive and easy to understand.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "psychological_safety",
        text: {
          fr: "Ce concept me paraît rassurant et réduit mes inquiétudes concernant les soins.",
          en: "This concept seems reassuring and reduces my concerns about skincare.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "self_congruence",
        text: {
          fr: "Je me reconnais dans cette vision du soin et elle correspond à mes valeurs personnelles.",
          en: "I identify with this vision of skincare and it matches my personal values.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "projection_emotionnelle",
        text: {
          fr: "Je peux imaginer cette expérience comme un moment de recentrage et d’apaisement.",
          en: "I can imagine this experience as a moment of calm and self-centering.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "sensorial_anticipation",
        text: {
          fr: "Je peux facilement imaginer l’expérience sensorielle proposée.",
          en: "I can easily imagine the proposed sensory experience.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Dimension visuelle", en: "Visual dimension" },
    questions: [
      {
        id: "dimension_visuelle",
        text: {
          fr: "Une identité professionnelle et visuellement attrayante augmenterait ma confiance dans un concept dermocosmétique.",
          en: "A professional and visually appealing identity would increase my confidence in a dermocosmetic concept.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Dimension scientifique", en: "Scientific dimension" },
    questions: [
      {
        id: "dimension_scientifique",
        text: {
          fr: "Les preuves scientifiques et les explications sur les ingrédients actifs augmentent ma confiance dans une innovation dermocosmétique.",
          en: "Scientific evidence and explanations about active ingredients increase my confidence in a dermocosmetic innovation.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Valeur perçue", en: "Perceived value" },
    questions: [
      {
        id: "valeur_fonctionnelle",
        text: {
          fr: "Ce concept répond de manière utile à un besoin réel.",
          en: "This concept usefully responds to a real need.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "valeur_emotionnelle",
        text: {
          fr: "Ce concept crée des émotions positives.",
          en: "This concept creates positive emotions.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "valeur_experientielle",
        text: {
          fr: "Je pense que j’apprécierais utiliser ce type de produit.",
          en: "I think I would enjoy using this type of product.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "valeur_sociale",
        text: {
          fr: "Ce concept correspond à l’image que j’aimerais projeter aux autres.",
          en: "This concept matches the image I would like to project to others.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Confiance", en: "Trust" },
    questions: [
      {
        id: "ability",
        text: {
          fr: "Le projet paraît compétent dans le domaine de la dermocosmétique.",
          en: "The project appears competent in the field of dermocosmetics.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "benevolence",
        text: {
          fr: "Le projet semble réellement préoccupé par le bien-être des utilisateurs.",
          en: "The project seems genuinely concerned about users’ well-being.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "integrity",
        text: {
          fr: "Les promesses me paraissent réalistes.",
          en: "The promises seem realistic to me.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Adhésion comportementale", en: "Behavioral adhesion" },
    questions: [
      {
        id: "suivre_projet",
        text: {
          fr: "Je souhaiterais suivre l’évolution de ce projet et en savoir davantage.",
          en: "I would like to follow the development of this project and learn more.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "intention_essai",
        text: {
          fr: "Je serais intéressé(e) pour essayer ce produit.",
          en: "I would be interested in trying this product.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "recommandation",
        text: {
          fr: "Je recommanderais ce projet à mon entourage.",
          en: "I would recommend this project to people around me.",
        },
        type: "likert",
        required: true,
      },
      {
        id: "interaction_digitale",
        text: {
          fr: "Je serais intéressé(e) à suivre et à interagir avec le contenu digital lié à ce concept.",
          en: "I would be interested in following and interacting with digital content related to this concept.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Potentiel marché", en: "Market potential" },
    questions: [
      {
        id: "payer_davantage",
        text: {
          fr: "Seriez-vous prêt(e) à payer davantage pour une expérience de soin plus complète ?",
          en: "Would you be willing to pay more for a more complete skincare experience?",
        },
        type: "choice",
        options: {
          fr: ["Oui", "Non", "Peut-être"],
          en: ["Yes", "No", "Maybe"],
        },
        required: true,
      },
      {
        id: "prix_acceptable",
        text: {
          fr: "Quel prix vous semblerait acceptable ?",
          en: "What price would seem acceptable to you?",
        },
        type: "choice",
        options: {
          fr: ["< 20€", "20–40€", "40–60€", "> 60€"],
          en: ["< €20", "€20–40", "€40–60", "> €60"],
        },
        required: true,
      },
      {
        id: "canal_achat",
        text: {
          fr: "Canal d’achat préféré",
          en: "Preferred purchase channel",
        },
        type: "choice",
        options: {
          fr: [
            "Pharmacie",
            "Parapharmacie",
            "Site internet",
            "Concept store",
            "Institut",
            "Marketplace",
          ],
          en: [
            "Pharmacy",
            "Parapharmacy",
            "Website",
            "Concept store",
            "Beauty institute",
            "Marketplace",
          ],
        },
        required: true,
      },
      {
        id: "origine_naturelle",
        text: {
          fr: "L’origine naturelle des ingrédients est importante pour moi.",
          en: "The natural origin of ingredients is important to me.",
        },
        type: "likert",
        required: true,
      },
    ],
  },

  {
    title: { fr: "Questions ouvertes", en: "Open questions" },
    questions: [
      {
        id: "manque_soins",
        text: {
          fr: "Qu’est-ce qui manque aujourd’hui aux produits de soin ?",
          en: "What do you think is currently missing from skincare products?",
        },
        type: "open",
        required: true,
      },
      {
        id: "experience_ideale",
        text: {
          fr: "Quels mots associez-vous à une expérience de soin idéale ?",
          en: "What words do you associate with an ideal skincare experience?",
        },
        type: "open",
        required: true,
      },
    ],
  },
];