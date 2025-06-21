// Search data structure for all website content
export interface SearchItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  url: string;
  type: 'actualite' | 'collection' | 'exposition' | 'page' | 'activity';
  date?: string;
  keywords: string[];
}

export const searchData: SearchItem[] = [
  // Actualités
  {
    id: 'ambassador-us-visit',
    title: 'Ambassador of the United States visit',
    excerpt: 'We had the absolute honor to welcome his Excellency the Ambassador of the United States and his wife to the "Abderrahman Slaoui Museum"!',
    content: 'We had the absolute honor to welcome his Excellency the Ambassador of the United States and his wife to the "Abderrahman Slaoui Museum"! During the visit, we had the opportunity to showcase the fascinating exhibits that highlight the life and legacy of Abderrahman Slaoui, a remarkable Moroccan art collector and philanthropist, we also discussed the importance and unique learning experience that museums provide to children.',
    image: '/images/actualites/ambassador-us-visit/WhatsApp_Image_2023-07-25_at_15.50.21_1.jpeg',
    url: '/visites-ateliers-activites/actualites/ambassador-us-visit',
    type: 'actualite',
    date: '2023',
    keywords: ['ambassadeur', 'états-unis', 'visite', 'musée', 'diplomatique', 'enfants', 'éducation']
  },
  {
    id: 'memoire-des-cactus',
    title: 'Mémoire des cactus et mystères des cochenilles',
    excerpt: 'Du 30 juin au 30 septembre, exposition saisissante sur l\'effet dévastateur de la cochenille sur le figuier de barbarie.',
    content: 'Du 30 juin au 30 septembre, l\'Atelier de l\'Observatoire et le Musée de la Fondation Abderrahman Slaoui présentent une exposition saisissante intitulée "Mémoire des Cactus et Mystère des Cochenilles". Sous l\'angle artistique, les visiteurs pourront découvrir l\'effet dévastateur de la cochenille sur le figuier de barbarie. Artistes : Chloé Despax, Chahine Fellahi, Kaïs Aïouch, Greta Hanako. Commissaires : Mohamed Fariji, Eugénie Forno.',
    image: '/images/actualites/cactus/58756870-43296925.jpg',
    url: '/visites-ateliers-activites/actualites/memoire-des-cactus',
    type: 'actualite',
    date: '30 juin au 30 septembre',
    keywords: ['cactus', 'cochenille', 'figuier', 'barbarie', 'exposition', 'art', 'environnement', 'Chloé Despax', 'Chahine Fellahi']
  },
  {
    id: 'ajammar-second-accrochage',
    title: 'AJAMMAR, second accrochage',
    excerpt: 'Projet de résidences, de recherche et de création autour de l\'île de Sidi Abderrahman à Casablanca.',
    content: 'Ymane Fakhir, Mohssin Harraki, Caroline Trucco et Khalil El Gherib AJAMMAR est un projet de résidences, de recherche et de création autour de l\'île de Sidi Abderrahman à Casablanca. Située au Sud Ouest de Casablanca, sur un rocher qui défie l\'océan, l\'île de Sidi Abderrahman est réputée pour être le temple des voyants, guérisseurs et sorciers. Commissaires : Kenza Amrouk & Sonia Recasens.',
    image: '/images/actualites/ajammar/Clair_Obscur2_-_2_8Q863mE.jpg',
    url: '/visites-ateliers-activites/actualites/ajammar-second-accrochage',
    type: 'actualite',
    date: '17 janvier au 28 février 2018',
    keywords: ['AJAMMAR', 'résidence', 'Sidi Abderrahman', 'Casablanca', 'Ymane Fakhir', 'Mohssin Harraki', 'Caroline Trucco', 'Khalil El Gherib']
  },
  {
    id: 'conversation-ymane-fakhir',
    title: 'Conversation(s) avec Ymane Fakhir',
    excerpt: 'Rencontre avec l\'artiste Ymane Fakhir à l\'occasion de l\'exposition AJAMMAR.',
    content: 'A l\'occasion de l\'exposition AJAMMAR, le Musée organise une rencontre avec Ymane Fakhir. L\'artiste nous parlera de la démarche artistique à travers laquelle elle explore les mutations de la société contemporaine marocaine. Elle abordera également le cheminement qui l\'a menée à entreprendre un travail de recherche sur l\'ile de Sidi Abderrahman. Animation par Kenza Amrouk.',
    image: '/images/actualites/ymane-fakhir/4-_Ymane_Fakhir_Portrait_6_Fanida_2014_c_Courtesy_Ymane_Fakhir.jpg.5_h6VTsLG.jpg',
    url: '/visites-ateliers-activites/actualites/conversation-ymane-fakhir',
    type: 'actualite',
    date: '15 février 2018',
    keywords: ['Ymane Fakhir', 'conversation', 'artiste', 'société marocaine', 'contemporain', 'Kenza Amrouk']
  },
  {
    id: 'visite-casa-drawing-2',
    title: 'Visite commentée Casa Drawing #2',
    excerpt: 'Visite exceptionnelle de l\'exposition Casa Drawing #2 en présence des artistes participants.',
    content: 'Le 14 Octobre 2017 à 10h - Une visite exceptionnelle de l\'exposition Casa Drawing #2 en présence des artistes participants. Une occasion unique de découvrir les œuvres et d\'échanger directement avec leurs créateurs sur leurs démarches artistiques et leurs techniques.',
    image: '/images/actualites/casa-drawing2/Casa_Drawing_2_visuel_3.jpg',
    url: '/visites-ateliers-activites/actualites/visite-casa-drawing-2',
    type: 'actualite',
    date: '14 Octobre 2017',
    keywords: ['Casa Drawing', 'visite commentée', 'artistes', 'dessin', 'contemporain']
  },
  {
    id: 'vernissage-nilwood-melody',
    title: 'Vernissage NILWOOD MELODY',
    excerpt: 'Exploration de la mémoire de l\'âge d\'or du cinéma égyptien à travers six artistes contemporains.',
    content: 'Le Musée de la Fondation Abderrahman Slaoui vous invite à explorer la mémoire d\'un temps fort du 7ème art que fut l\'« âge d\'or » du cinéma égyptien, à travers les travaux de six artistes contemporains : Mariam Abouzid Souali (Maroc), Zoulikha Bouabdellah (Algérie-France), Nabil Boutros (Egypte), Mouna Jemal Siala (Tunisie), Khalil Nemmaoui (Maroc), Ghita Skali (Maroc). Commissariat par Yasmina Bouzid. Vernissage le 15 février à 19h jusqu\'au 22 avril 2017.',
    image: '/images/actualites/nilwood/visuel_site_internet_2.jpg',
    url: '/visites-ateliers-activites/actualites/vernissage-nilwood-melody',
    type: 'actualite',
    date: '15 février 2017',
    keywords: ['NILWOOD MELODY', 'cinéma égyptien', 'âge d\'or', 'Mariam Abouzid Souali', 'Zoulikha Bouabdellah', 'Nabil Boutros', 'Yasmina Bouzid']
  },
  {
    id: 'journees-patrimoine',
    title: 'Journées du Patrimoine de Casablanca',
    excerpt: 'Journées portes ouvertes avec visites commentées à la (re)découverte des collections.',
    content: 'Journées portes ouvertes Le samedi 2 et le dimanche 3 avril Au Musée de la Fondation Abderrahman Slaoui dans le cadre des Journées du Patrimoine de Casablanca. Au programme : VISITES COMMENTEES à la (re)découverte des collections. Entre symbolique, comparaison, remise en contexte et petits détails, vous appréhenderez les collections d\'Abderrahman Slaoui différemment.',
    image: '/images/actualites/redecouverte/A-la-redecouverte-des-collections.png',
    url: '/visites-ateliers-activites/actualites/journees-patrimoine',
    type: 'actualite',
    date: '2 et 3 avril',
    keywords: ['patrimoine', 'Casablanca', 'portes ouvertes', 'collections', 'visite commentée', 'découverte']
  },
  {
    id: 'un-orient-consommation',
    title: 'Un orient de consommation',
    excerpt: 'Exposition d\'affiches orientalistes sur le thème de la réclame.',
    content: 'Nouvelle exposition temporaire Un Orient de Consommation À partir de mardi 10 juillet 2012, le musée de la Fondation Abderrahman Slaoui accueille une nouvelle exposition d\'affiches orientalistes sur le thème de la réclame intitulée : « Un Orient de consommation ». Cette exposition a été conçue d\'après la collection privée de la Fondation Abderrahman Slaoui.',
    image: '/images/actualites/orient consommation/3.2_Bijoux_1.jpg',
    url: '/visites-ateliers-activites/actualites/un-orient-consommation',
    type: 'actualite',
    date: '10 juillet 2012',
    keywords: ['orient', 'consommation', 'affiches', 'orientalistes', 'réclame', 'publicité']
  },
  {
    id: 'visite-atelier-conference-casa-drawing',
    title: 'Visite, atelier et conférence autour de Casa Drawing',
    excerpt: 'En partenariat avec Art Initiative, 3 activités proposées autour de l\'exposition de dessin contemporain.',
    content: 'Le Musée de la Fondation Abderrahman Slaoui présente, en partenariat avec Art Initiative, l\'exposition de dessin contemporain CASA DRAWING jusqu\'au 10 décembre inclus. Pour aller plus loin, le Musée propose 3 activités : visite commentée par les artistes, atelier de dessin avec Julie Bernet-Rollande et conférence sur la place du dessin dans l\'Histoire de l\'Art par Bechar El Mahfoudi.',
    image: '/images/actualites/autour-casa-drawing/visuel_general_6_site_internettanya.jpg',
    url: '/visites-ateliers-activites/actualites/visite-atelier-conference-casa-drawing',
    type: 'actualite',
    date: 'Décembre 2016',
    keywords: ['Casa Drawing', 'Art Initiative', 'dessin contemporain', 'atelier', 'conférence', 'Julie Bernet-Rollande', 'Bechar El Mahfoudi']
  },
  {
    id: 'vernissage-casa-drawing',
    title: 'VERNISSAGE CASA DRAWING',
    excerpt: 'Première édition de Casa Drawing - 6 artistes marocains et étrangers résidents au Maroc.',
    content: 'Pour cette première édition de CASA DRAWING, 6 artistes marocains et étrangers résidents au Maroc ouvrent la porte de leurs univers graphiques et artistiques. AMINA BENBOUCHTA, JULIE BERNET-ROLLANDE, BADR EL HAMMAMI, SAID AFIFI, SIMOHAMMED FETTAKA, YASSINE BALBZIOUI. Commissariat: Bechar EL MAHFOUDI et Yassine BALBZIOUI. Vernissage le mercredi 12 octobre à 19h.',
    image: '/images/actualites/autour-casa-drawing/invit_site_internet_1.jpg',
    url: '/visites-ateliers-activites/actualites/vernissage-casa-drawing',
    type: 'actualite',
    date: 'Octobre 2016',
    keywords: ['Casa Drawing', 'vernissage', 'artistes', 'graphique', 'AMINA BENBOUCHTA', 'JULIE BERNET-ROLLANDE', 'BADR EL HAMMAMI', 'SAID AFIFI']
  },

  // Collections Permanentes
  {
    id: 'affiches-orientalistes',
    title: 'Affiches orientalistes',
    excerpt: 'Collection d\'affiches publicitaires et touristiques orientalistes.',
    content: 'Cette collection rassemble des affiches publicitaires et touristiques orientalistes qui témoignent de la vision occidentale de l\'Orient aux XIXe et XXe siècles. Ces documents graphiques révèlent les stéréotypes et fantasmes associés à cette région du monde.',
    image: '/images/collections-permanentes/affiches-orientalistes/cover.jpg',
    url: '/collections-expositions/collections-permanentes/affiches-orientalistes',
    type: 'collection',
    keywords: ['affiches', 'orientalistes', 'publicité', 'tourisme', 'orient', 'XIXe', 'XXe siècle']
  },
  {
    id: 'famille-majorelle',
    title: 'Famille Majorelle',
    excerpt: 'Collection dédiée à la famille Majorelle et leur contribution artistique.',
    content: 'La famille Majorelle a marqué l\'art décoratif français et marocain. Cette collection retrace leur parcours artistique et leur influence sur l\'art au Maroc.',
    image: '/images/collections-permanentes/famille-majorelle/Famille_Majorelle.jpg',
    url: '/collections-expositions/collections-permanentes/famille-majorelle',
    type: 'collection',
    keywords: ['Majorelle', 'famille', 'art décoratif', 'français', 'marocain', 'influence']
  },
  {
    id: 'flacons-khol-tabatieres',
    title: 'Flacons de khôl et tabatières',
    excerpt: 'Collection d\'objets d\'art traditionnels marocains.',
    content: 'Cette collection présente des flacons de khôl et des tabatières traditionnelles marocaines, témoins de l\'artisanat d\'art et des traditions esthétiques du Maroc.',
    image: '/images/collections-permanentes/flacons-de-khol-et-tabatieres/khol_et_tabatiere.png',
    url: '/collections-expositions/collections-permanentes/flacons-de-khol-et-tabatieres',
    type: 'collection',
    keywords: ['khôl', 'tabatières', 'artisanat', 'traditionnel', 'marocain', 'esthétique']
  },
  {
    id: 'ceramique-fes',
    title: 'La céramique de Fès',
    excerpt: 'Collection de céramiques traditionnelles de Fès.',
    content: 'La céramique de Fès représente l\'un des arts les plus raffinés du Maroc. Cette collection présente des pièces exceptionnelles qui illustrent la maîtrise technique et artistique des artisans fassis.',
    image: '/images/collections-permanentes/la-ceramique-de-fes/cover.jpg',
    url: '/collections-expositions/collections-permanentes/la-ceramique-de-fes',
    type: 'collection',
    keywords: ['céramique', 'Fès', 'artisanat', 'traditionnel', 'fassis', 'technique', 'artistique']
  },
  {
    id: 'bijoux-marocains',
    title: 'Les bijoux marocains',
    excerpt: 'Collection de bijoux traditionnels du Maroc.',
    content: 'Cette collection rassemble des bijoux traditionnels marocains provenant de différentes régions, témoignant de la richesse et de la diversité de l\'orfèvrerie marocaine.',
    image: '/images/collections-permanentes/les-bijoux-marocains/cover.jpg',
    url: '/collections-expositions/collections-permanentes/les-bijoux-marocains',
    type: 'collection',
    keywords: ['bijoux', 'marocains', 'traditionnel', 'orfèvrerie', 'régions', 'richesse', 'diversité']
  },
  {
    id: 'cabinets-curiosite',
    title: 'Les cabinets de curiosité',
    excerpt: 'Collection d\'objets rares et curieux.',
    content: 'Les cabinets de curiosité rassemblent des objets rares, insolites et précieux qui témoignent de la passion de collectionneur d\'Abderrahman Slaoui.',
    image: '/images/collections-permanentes/les-cabinets-de-curiosite/Cabinet_de_curiostes_1.jpg',
    url: '/collections-expositions/collections-permanentes/les-cabinets-de-curiosite',
    type: 'collection',
    keywords: ['cabinets', 'curiosité', 'objets rares', 'insolites', 'précieux', 'collectionneur', 'Abderrahman Slaoui']
  },

  // Pages principales
  {
    id: 'fondation',
    title: 'Fondation Abderrahman Slaoui',
    excerpt: 'Découvrez la Fondation Abderrahman Slaoui et sa mission culturelle.',
    content: 'La Fondation Abderrahman Slaoui est dédiée à la préservation et à la valorisation du patrimoine artistique et culturel marocain. Elle perpétue la vision de son fondateur, Abderrahman Slaoui, collectionneur passionné et mécène.',
    image: '/images/fondation/entree_musee.jpg',
    url: '/fondation',
    type: 'page',
    keywords: ['fondation', 'Abderrahman Slaoui', 'patrimoine', 'culturel', 'marocain', 'mécène', 'collectionneur']
  },
  {
    id: 'tempus-fugit',
    title: 'Tempus Fugit',
    excerpt: 'Exposition photographique sur le temps et la mémoire.',
    content: 'L\'exposition "Tempus Fugit" rassemble les travaux de huit photographes marocains réalisés pendant les périodes de confinement et de déconfinement, témoignant ainsi d\'un espace-temps particulier.',
    image: '/images/tempus-fugit/Tempus-Fugit_1.jpg',
    url: '/tempus-fugit',
    type: 'exposition',
    keywords: ['Tempus Fugit', 'photographie', 'photographes marocains', 'confinement', 'déconfinement', 'temps', 'mémoire']
  },
  {
    id: 'horaires-tarifs-acces',
    title: 'Horaires, Tarifs et Accès',
    excerpt: 'Informations pratiques pour votre visite au musée.',
    content: 'Retrouvez toutes les informations pratiques pour préparer votre visite : horaires d\'ouverture, tarifs d\'entrée, plan d\'accès et moyens de transport pour rejoindre le Musée de la Fondation Abderrahman Slaoui.',
    url: '/infos-pratiques/horaires-tarifs-acces',
    type: 'page',
    keywords: ['horaires', 'tarifs', 'accès', 'visite', 'musée', 'transport', 'informations pratiques']
  },
  {
    id: 'cafe-musee',
    title: 'Le Café du Musée',
    excerpt: 'Espace de détente et de restauration au cœur du musée.',
    content: 'Le Café du Musée offre un espace de détente privilégié avec sa terrasse panoramique. Savourez une pause gourmande dans un cadre exceptionnel.',
    image: '/images/infos-pratiques/cafe-musee/cafe-terasse1.jpg',
    url: '/infos-pratiques/cafe-musee',
    type: 'page',
    keywords: ['café', 'musée', 'terrasse', 'restauration', 'détente', 'panoramique', 'gourmande']
  },
  {
    id: 'comptoir-vente',
    title: 'Le Comptoir de Vente',
    excerpt: 'Boutique du musée avec souvenirs et créations artisanales.',
    content: 'Le Comptoir de Vente propose une sélection d\'objets d\'art, de livres, de souvenirs et de créations artisanales inspirés des collections du musée.',
    image: '/images/infos-pratiques/comptoir-vente/le-comptoir-des-ventes-.jpg',
    url: '/infos-pratiques/comptoir-vente',
    type: 'page',
    keywords: ['comptoir', 'vente', 'boutique', 'souvenirs', 'artisanal', 'livres', 'objets d\'art']
  },
  {
    id: 'visites-scolaires',
    title: 'Visites Scolaires Guidées',
    excerpt: 'Programmes éducatifs adaptés aux groupes scolaires.',
    content: 'Le musée propose des visites guidées spécialement conçues pour les groupes scolaires, avec des programmes pédagogiques adaptés à chaque niveau.',
    image: '/images/jeune-public/visites-scolaires/visites-scolaires-guidees2.png',
    url: '/jeune-public/visites-scolaires',
    type: 'page',
    keywords: ['visites scolaires', 'groupes', 'éducatif', 'pédagogique', 'jeune public', 'guidées']
  },
  {
    id: 'ateliers-pedagogiques',
    title: 'Ateliers Pédagogiques',
    excerpt: 'Ateliers créatifs et éducatifs pour enfants.',
    content: 'Les ateliers pédagogiques du musée offrent aux enfants une approche ludique et créative de l\'art et du patrimoine marocain.',
    image: '/images/jeune-public/ateliers-pedagogiques/ateliers-pedagogiques.jpg',
    url: '/jeune-public/ateliers-pedagogiques',
    type: 'page',
    keywords: ['ateliers', 'pédagogiques', 'enfants', 'créatif', 'ludique', 'art', 'patrimoine']
  }
];

// Search function
export const searchContent = (query: string): SearchItem[] => {
  if (!query.trim()) return [];
  
  const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 2);
  
  return searchData.filter(item => {
    const searchableText = `${item.title} ${item.excerpt} ${item.content} ${item.keywords.join(' ')}`.toLowerCase();
    
    // For multiple words, check if ALL words are present (not necessarily together)
    return searchTerms.every(term => searchableText.includes(term));
  }).sort((a, b) => {
    // Prioritize exact title matches
    const aTitle = a.title.toLowerCase();
    const bTitle = b.title.toLowerCase();
    const queryLower = query.toLowerCase();
    
    if (aTitle.includes(queryLower) && !bTitle.includes(queryLower)) return -1;
    if (!aTitle.includes(queryLower) && bTitle.includes(queryLower)) return 1;
    
    return 0;
  });
}; 