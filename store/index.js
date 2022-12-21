import { v4 as uuidv4 } from "uuid";

export const state = () => ({
  projectsHeading: "Projets de mon  portfolio",
  projectsDescription: "Ces projets ont été réalisés avec succès ",
  projects: [
    /* {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdb",
      title: "Fable",
      category: "Application web",
      img: "images/web-project-2.jpg",
      publishDate: "Nov 04, 2021",
      tag: "UI / Frontend",
      clientTitle: "Détails client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Outils & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Compte sociaux",
      projectImages: [
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-1.jpg",
        },
        {
          id: uuidv4(),
          title: "Uber Project Management UI",
          img: "../images/web-project-2.jpg",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Company Ltd",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Frontend Development",
        },
        {
          id: uuidv4(),
          title: "site web",
          details: "https://company.com",
        },
        {
          id: uuidv4(),
          title: "Phone",
          details: "555 8888 888",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Nuxt.js",
        "TailwindCSS",
        "AdobeXD",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
        },
        {
          id: uuidv4(),
          details:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea.",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://instagram.com/realstoman",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://facebook.com/",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://linkedin.com/",
        },
        {
          id: uuidv4(),
          name: "Youtube",
          icon: "youtube",
          url: "https://www.youtube.com/c/StomanStudio",
        },
      ],
    },*/
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdc",
      title: "Onlyone",
      category: "Application web",
      img: "images/web-project-1.png",
      publishDate: "Septembre , 2022",
      tag: "UI / Frontend",
      clientTitle: "Détails client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Outils & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Compte sociaux",
      projectImages: [
        {
          id: uuidv4(),
          title: "page d'acceuil onlyonecard ",
          img: "../subImages/web1/img1.png",
        },
        {
          id: uuidv4(),
          title: "Page 2",
          img: "../subImages/web1/img2.png",
        },
        {
          id: uuidv4(),
          title: "page 3",
          img: "../subImages/web1/img3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "Onlyonecard",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Intégration web",
        },
        {
          id: uuidv4(),
          title: "Url",
          details: "https://onlyonecard.eu",
        },
      ],
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Material UI",
        "Atomic Design",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Onlyonecard est une application web en ligne qui permet au personne de mieux gérer leurs argenst à travers un système bancaires .",
        },
        {
          id: uuidv4(),
          details:
            "Cette entreprise existe depuis pas mal d'années et n'étant convaincu de l'interface utilisateurs ils ont souhaité aménager un tout petit peu le design.",
        },
        {
          id: uuidv4(),
          details:
            "J'ai donc été approché en dans l'optique de réalisé ce projet spécialiement en REACT , sauf que j'appréhendais à ce moment les notions de bases de REACT.",
        },
        {
          id: uuidv4(),
          details:
            "J'ai donc contacté un ami afin de mieux collaborer sur ce projet . Il s'agit d'un développeur front REACT ",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Twitter",
          icon: "twitter",
          url: "https://twitter.com/OnlyOnecard",
        },
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/onlyone.card/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://web.facebook.com/OnlyOne.Card.FR?_rdc=1&_rdr",
        },
        {
          id: uuidv4(),
          name: "LinkedIn",
          icon: "linkedin",
          url: "https://www.linkedin.com/company/onlyonecard/",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdy",
      title: "Bethel officina",
      category: "Application web",
      img: "images/web-project-3.png",
      publishDate: "Décembre , 2022",
      tag: "Jamstack / Directus",
      clientTitle: "Détails client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Construire un e-commerce avec un budget moyen . Ce site e-commerce à pour objectif d'augmenter les ventes mensuelles .",
      techTitle: "Outils & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Compte sociaux",
      projectImages: [
        {
          id: uuidv4(),
          title: "page d'acceuil de bethel officna",
          img: "../subImages/web3/img1.png",
        },
        {
          id: uuidv4(),
          title: "Page catégorie de bethele officina",
          img: "../subImages/web3/img2.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "Bethel officina",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Développement full",
        },
        {
          id: uuidv4(),
          title: "site web",
          details: "https://bethelofficina.ma",
        },
      ],
      technologies: ["Nuxt", "TypeScript", "Directus", "VueX", "TailwindCSS"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Bethel officina est une boutique E-commerce exerçant au Maroc en Côte d'ivoire . Elle est spécialisé dans la distribution de chaussure de marque et confection sur mésures . Elle propose également des services dnans la fabrication de chaussures sur mésure .",
        },
        {
          id: uuidv4(),
          details:
            "Elle souhaitait agrandir son activité dans afin d'observer la hausse de son Chiffre d'affaire . Elle à donc juger important de lancer cette boutique dan les périodes de fin d'année 2022 .",
        },
        {
          id: uuidv4(),
          details:
            "Elle ma approché sous la recommandation d'un ami sauf qu'elle ne disposait pas de budget adéquate et voulait proposer ce servicves avant le début des fêtes . En effet , nous étions à  trois (3) semaines du début des fêtes et j'avais également d'autres projets .",
        },
        {
          id: uuidv4(),
          details:
            "C'est dans ce contexte que j'ai opté pour une JAMSTACK afin dr proposer quelque chose assez rapidement et viable .",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/bethelofficina/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://web.facebook.com/bethelofficina?_rdc=1&_rdr",
        },
      ],
    },

    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8ccc99",
      title: "Elvirah shop",
      category: "UI/UX Design",
      img: "images/ui-project-1.png",
      publishDate: "Octobre , 2022",
      tag: "Web / Frontend",
      clientTitle: "Détails client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",
      techTitle: "Outils & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Compte sociaux",
      projectImages: [
        {
          id: uuidv4(),
          title: "Design de elvirah shop",
          img: "../SubImages/ui1/img1.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "Elvirah shop",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI/UX Design",
        },
      ],
      technologies: ["CANVAS", "DESIGN"],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Elvirah shop est un boutique qui offre des services dans le cosmétiques . Afin de mieux mettre en avant les produits , j'ai été en mésure de realiser quelques affiches pour la publicité .",
        },
      ],
      socialSharings: [],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdyg",
      title: "Sizix team",
      category: "Application web",
      img: "images/web-project-4.png",
      publishDate: "Décembre , 2022",
      tag: "Développement web / mobile ",
      clientTitle: "Détails client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Sizix team est un projet open source qui consiste à développer des outils web pour faciliter le quotidien et le dev . J'alimente ce projet depuis un moment .",
      techTitle: "Outils & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Compte sociaux",
      projectImages: [
        {
          id: uuidv4(),
          title: "Page d'acceuil ",
          img: "../subImages/web4/img1.png",
        },
        {
          id: uuidv4(),
          title: "page  info",
          img: "../subImages/web4/img2.png",
        },
        {
          id: uuidv4(),
          title: "Autre page ",
          img: "../subImages/web4/img3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Name",
          details: "Sizix team ",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "Développement d'outils web ",
        },
        {
          id: uuidv4(),
          title: "site web ",
          details: "https://sizix.netlify.app",
        },
      ],
      technologies: [
        "web front",
        "back end ",
      ],
      projectDetails: [
        {
          id: uuidv4(),
          details:
            "Sizix Team est une équipê de jeunes développeurs passioné qui tentent de mettre leurs savoir au service du monde en offrant des outils et technologies IT. Son objectif principal est de produire des outils et infrastructures pour permettre aux personnes de mieux gérer leurs quotidiens et aux développeurs de s'alimenter . Ses solutions peuvent être de plusieurs formes à savoir des applications web , applications mobile ... ",
        },
        {
          id: uuidv4(),
          details:
            "L'idée est de créer un environnement ou tout le monde pourra se concentrer sur ses objetifs pricipaux sans avoir à se soucier des problèmes de la société .",
        },
        {
          id: uuidv4(),
          details:
            "Sizix d'abord pour représenter le nom de nos six (6) x . Chaque x réprensente une qualité au sein de notre équipe en occurrence l'innovation , la complicité , le travail , la technologie , la confiance et la solution . Toutes ces différentes quatiltés au seins d'une équipe visant un but commun et dont le projet appartient au utilisateurs forment une corporation .",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "GitHub",
          icon: "github",
          url: "https://github.com/Sizix-corporation",
        },
      ],
    },
    {
      id: "260d1271-f1f2-4bc9-a5eb-05a89c8cccdm",
      title: "Cavaliero",
      category: "Application web",
      img: "images/web-project-2.png",
      publishDate: "Juillet , 2022",
      tag: "Application web",
      clientTitle: "Détails client",
      objectivesTitle: "Objectif",
      objectivesDetails:
        "Cavaliero est un restaurent sitiué dans la ville de Bonoua , Côte d'ivoire . Ce restaurant propose des variété de plats en occurence la gastronomie Ivoirienne.",
      techTitle: "Outils & Technologies",
      detailsTitle: "Challenge",
      socialTitle: "Compte sociaux",
      projectImages: [
        {
          id: uuidv4(),
          title: "Page d'acceuil",
          img: "../subImages/web2/img1.png",
        },
        {
          id: uuidv4(),
          title: "Page d'acceuil",
          img: "../subImages/web2/img2.png",
        },
        {
          id: uuidv4(),
          title: "Page d'acceuil",
          img: "./subImages/web2/img3.png",
        },
      ],
      companyInfos: [
        {
          id: uuidv4(),
          title: "Nom",
          details: "Cavaliero",
        },
        {
          id: uuidv4(),
          title: "Services",
          details: "UI Design & Développement front-end",
        },
        {
          id: uuidv4(),
          title: "site web",
          details: "https://cavaliero.netlify.app",
        },
        {
          id: uuidv4(),
          title: "Téléphone",
          details: "+225 07 88 06 94 30",
        },
      ],
      technologies: ["HTML", "CSS"],
      projectDetails: [
        {
          id: uuidv4(),
          details: "Ce projet web est en cours de refonte .",
        },
      ],
      socialSharings: [
        {
          id: uuidv4(),
          name: "Instagram",
          icon: "instagram",
          url: "https://www.instagram.com/cavaliero_officiel/",
        },
        {
          id: uuidv4(),
          name: "Facebook",
          icon: "facebook",
          url: "https://web.facebook.com/profile.php?id=100084189640328",
        },
      ],
    },
  ],
  clientsHeading: "Mes technos les plus utilisées ",
  clients: [
    {
      id: uuidv4(),
      title: "Laravel",
      img: "../brands/laravel.png",
    },
    {
      id: uuidv4(),
      title: "Nuxt",
      img: "../brands/nuxt.png",
    },
    {
      id: uuidv4(),
      title: "Tailwind",
      img: "../brands/tailwind.png",
    },
    {
      id: uuidv4(),
      title: "Typescript",
      img: "../brands/typescript.png",
    },
    {
      id: uuidv4(),
      title: "Pinia",
      img: "../brands/Pinia.png",
    },
    {
      id: uuidv4(),
      title: "vue",
      img: "../brands/vue.png",
    },
    {
      id: uuidv4(),
      title: "express",
      img: "../brands/express.png",
    },
    {
      id: uuidv4(),
      title: "vuex",
      img: "../brands/vuex.png",
    },
    {
      id: uuidv4(),
      title: "flutter",
      img: "../brands/flutter.png",
    },
  ],
  aboutMe: [
    {
      id: uuidv4(),
      bio: "Bienvenue , Je suis yatachi . Ravi de vous rencontrer Dépuis le début de mon apprentissage , j'avais pour objectif final de mettre les compétences aux services de la communauté . Il faut savoir que le metier est un profil assez crucial dans notre société actuel d'autant plus qu'il y a énormement à gagner en se positionnant sur le web . Passionné , ambitieux , rêveur tous ces attributs m'ont mené tout droit à intégrer ce corps . J'aime prendre des projets en main , réaliser des applications concrètes , c'est avec conviction et assurance que je vous invite à explorer l'élégance. On n'y va !!!!",
    },
    {
      id: uuidv4(),
      bio: "Découvrons de nouvelle chose avec une nouvelle philosophie de code et dde l'apprentissage continu.",
    },
  ],
  copyrightDate: new Date().getFullYear(),
  socialProfiles: [
    {
      id: uuidv4(),
      name: "GitHub",
      icon: "github",
      url: "https://github.com/p2510/",
    },
    {
      id: uuidv4(),
      name: "Instagram",
      icon: "instagram",
      url: "https://www.instagram.com/this_is_yatachi/",
    },
  ],
  categories: [
    {
      id: uuidv4(),
      value: "web",
      name: "Application web",
    },
    {
      id: uuidv4(),
      value: "mobile",
      name: "Application mobile",
    },
    {
      id: uuidv4(),
      value: "ui-ux",
      name: "UI/UX Design",
    },
    {
      id: uuidv4(),
      value: "branding",
      name: "Branding & Animations",
    },
  ],
});

export const getters = {
  getProjectById: (state) => (id) => {
    return state.projects.find((project) => project.id == id);
  },
};

export const mutations = {
  // @todo
};

export const actions = {
  // @todo
};
