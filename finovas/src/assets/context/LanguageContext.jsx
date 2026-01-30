import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = [
  { code: 'fr', flag: 'https://flagcdn.com/w40/fr.png', name: 'Français' },
  { code: 'en', flag: 'https://flagcdn.com/w40/gb.png', name: 'English' },
  { code: 'es', flag: 'https://flagcdn.com/w40/es.png', name: 'Español' },
  { code: 'de', flag: 'https://flagcdn.com/w40/de.png', name: 'Deutsch' },
];

const translations = {
  fr: {
    header: {
      accueil: "Accueil",
      solutions: "Solutions",
      pricing: "Tarifs",
      book_demo: "Réserver une démo",
      login: "Connexion",
      signup: "S'inscrire",
      contact: "Contact",
      telecoms: "Télécoms",
      fintech: "Paiement & Fintech",
      platforms: "Plateformes",
      dcb: "Direct Carrier Billing",
      dcb_desc: "Monétisation via facture mobile",
      sms: "SMS & USSD",
      sms_desc: "Communication directe",
      distribution: "Distribution opérateurs",
      distribution_desc: "Réseau de vente étendu",
      momo: "Mobile Money",
      momo_desc: "Inclusion financière",
      gateway: "Passerelles de paiement",
      gateway_desc: "Agrégation multi-canal",
      transactions: "Gestion des transactions",
      transactions_desc: "Monitoring temps réel",
      api: "APIs & intégrations",
      api_desc: "Déploiement rapide",
      reporting: "Monitoring & reporting",
      reporting_desc: "Analytics avancés",
      security: "Scalabilité & sécurité",
      security_desc: "Infrastructure robuste",
      highlight_hub: "Innovation Hub",
      highlight_title_1: "L'avenir du",
      highlight_title_2: "Digital Banking",
      highlight_desc: "Explorez nos dernières solutions pour l'inclusion financière.",
      highlight_cta: "Voir les innovations"
    },
    hero: {
      label: "Finovas · Digital & VAS Solutions",
      title_line1: "Stimuler la croissance mobile",
      title_line2: "grâce à l’innovation digitale",
      description: "Finovas accompagne les entreprises et opérateurs dans la conception, le déploiement et la monétisation de services digitaux et VAS à fort impact sur les marchés mobiles.",
      cta_demo: "Demander une démo",
      cta_solutions: "Découvrir nos solutions",
      tags: ["VAS & contenus digitaux", "Monétisation mobile", "Mobile Money & DCB", "Solutions scalables"],
      scroll: "Scrollez"
    },
    about: {
      title: "L’écosystème .",
      subtitle: "Finovas structure des solutions digitales et VAS reliant opérateurs, partenaires et utilisateurs au sein d’un écosystème mobile performant et durable.",
      card1: {
        tag_monetization: "Monétisation mobile",
        tag_vas: "Services à valeur ajoutée (VAS)",
        title_p1: "QUI SOMMES",
        title_p2: "NOUS",
        description: "Finovas structure des solutions digitales et VAS reliant opérateurs, partenaires et utilisateurs au sein d’un écosystème mobile performant et durable."
      },
      card2: {
        tags: ["Expertise mobile", "Exécution maîtrisée", "Partenaire stratégique", "Scalabilité & fiabilité"],
        title: "Sécurité & Gouvernance",
        subtitle: "Conformité, stabilité et continuité opérationnelle"
      },
      card3: {
        title: "Pilotage & Performance",
        subtitle: "Indicateurs clés",
        subtext: "Vue consolidée",
        tags: ["Croissance continue", "Disponibilité élevée"]
      },
      card4: {
        subtitle: "Du contenu - Du jeu - Du fun"
      },
      card5: {
        quote: "“Des outils techniques conçus pour une intégration rapide, sécurisée et évolutive.”",
        btn_doc: "Documentation",
        btn_api: "API",
        btn_sandbox: "Sandbox"
      },
      card6: {
        text: "Interopérabilité opérateurs, fintechs et partenaires"
      }
    },
    solutions: {
      title_prefix: "Nos Solutions",
      title_suffix: "Stratégiques",
      intro: "Une technologie de pointe au service de votre croissance. Choisissez l'excellence opérationnelle.",
      cta: "Découvrir la solution",
      items: [
        {
          title: "Monétisation Mobile",
          description: "Maximisez vos revenus grâce à l'intégration fluide du Direct Carrier Billing et du Mobile Money. Une conversion optimisée pour tous les opérateurs.",
          features: ["Direct Carrier Billing", "Mobile Money", "Micro-paiement"]
        },
        {
          title: "Services VAS",
          description: "Engagez vos utilisateurs avec des contenus premium et des services digitaux à forte valeur ajoutée. Rétention et engagement garantis.",
          features: ["Contenus Premium", "Streaming", "Gaming"]
        },
        {
          title: "Plateformes & APIs",
          description: "Déployez rapidement grâce à nos APIs robustes, sécurisées et conçues pour la scalabilité. Une intégration technique sans friction.",
          features: ["API RESTful", "Haute Disponibilité", "Documentation Claire"]
        },
        {
          title: "Expérience Mobile-First",
          description: "Des interfaces optimisées pour tous les terminaux et adaptées aux contraintes réseau locales. Une UX fluide en toutes circonstances.",
          features: ["Responsive Design", "Optimisation Data", "Offline Mode"]
        },
        {
          title: "Sécurité & Compliance",
          description: "Protégez vos transactions et respectez les normes réglementaires les plus strictes. RGPD, DSP2 et normes locales.",
          features: ["Chiffrement Bout-en-bout", "Anti-fraude", "Conformité RGPD"]
        },
        {
          title: "Analytics & KPI",
          description: "Pilotez votre activité en temps réel avec des tableaux de bord précis et actionnables. Prenez les bonnes décisions basées sur la data.",
          features: ["Dashboard Temps Réel", "Rapports Automatisés", "Analyse Prédictive"]
        }
      ]
    },
    why: {
      title_brand: "Finovas",
      title_main: "Pourquoi ?",
      quote: "L'alliance de la brutalité technique et de l'élégance stratégique.",
      footer_brand: "Finovas Group",
      footer_tagline: "Digitale Platforms • Mobile Monetization • VAS",
      items: [
        {
          id: "01",
          title: "EXPERTISE GLOBALE",
          subtitle: "Coverage & Compliance",
          description: "Une maîtrise absolue des écosystèmes. Nous naviguons entre les contraintes locales et les standards internationaux.",
          image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
        },
        {
          id: "02",
          title: "ARCHITECTURE SCALABLE",
          subtitle: "High Availability",
          description: "Des fondations en béton. Infrastructures bâties pour la charge extrême et la sécurité maximale.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        }
      ]
    },
    roles: {
      header_tag: "Écosystème Connecté",
      title_line1: "Un réseau de confiance",
      title_line2: "pour une croissance partagée",
      description: "Nous unifions les acteurs clés du numérique pour créer des synergies puissantes et durables.",
      bottom_partners: "+50 Partenaires actifs",
      bottom_cta: "Rejoignez l'alliance Finovas",
      items: [
        { title: "Opérateurs Télécoms", desc: "Infrastructure réseau & connectivité" },
        { title: "Mobile Money", desc: "Inclusion financière & transactions" },
        { title: "Fintechs", desc: "Innovation bancaire & digitale" },
        { title: "Fournisseurs de Contenu", desc: "Services SVA & divertissement" },
        { title: "Passerelles de Paiement", desc: "Agrégation & sécurisation des flux" },
        { title: "Partenaires Tech", desc: "Solutions cloud & intégration" }
      ]
    },
    figures: {
      header_tag: "Chiffres clés",
      title_line1: "Des indicateurs",
      title_line2: "à l’échelle des plateformes digitales",
      description: "Ces chiffres illustrent la robustesse et la capacité opérationnelle de Finovas.",
      items: [
        { label: "Pays couverts", desc: "Déploiements actifs" },
        { label: "Partenaires & opérateurs", desc: "Télécoms & fintechs" },
        { label: "Disponibilité", desc: "Infrastructure stable" },
        { label: "Transactions", desc: "Paiements digitaux" },
        { label: "Temps d’intégration", desc: "Mise en production" },
        { label: "Supervision", desc: "Monitoring continu" }
      ]
    },
    cta: {
      tag: "Contact & partenariats",
      title_line1: "Construisons ensemble",
      title_line2: "les services digitaux de demain",
      description: "Vous êtes opérateur, fintech ou acteur du digital ? Finovas accompagne ses partenaires dans la conception, le déploiement et la monétisation de plateformes digitales à grande échelle.",
      btn_demo: "Demander une démo",
      btn_partner: "Devenir partenaire",
      footer: "Opérateurs • Fintechs • Institutions • Partenaires technologiques"

    },
    contact: {
      title: "Nous contacter",
      name: "Nom",
      email: "Email",
      company: "Soci??t?? (optionnel)",
      message: "Message",
      submit: "Envoyer",
      success: "Message envoy?? avec succ??s !",
      errors: {
        nameRequired: "Le nom est requis",
        emailInvalid: "Email invalide",
        messageMin: "Le message doit contenir au moins 10 caract??res"
      }
    },
    contactPage: {
      hero: {
        badge: "Contact Finovas",
        title: "Une equipe senior pour piloter votre croissance digitale",
        description:
          "Nous cadrons vos objectifs, securisons la livraison et activons les meilleurs leviers de monetisation mobile et d experience client.",
        chips: ["Securite et conformite", "Cadrage business", "Execution rapide"],
        cta_primary: "Lancer une discussion",
        cta_secondary: "contact@finovas.com"
      },
      direct: {
        title: "Contact direct",
        email: "contact@finovas.com",
        phone: "+33 1 23 45 67 89",
        address_line1: "123 Innovation Street",
        address_line2: "75001 Paris",
        tags: ["Support B2B", "SLA & monitoring", "Multilingue"]
      },
      trust: [
        { title: "Reponse sous 24h", desc: "Premier retour et plan de cadrage." },
        { title: "Equipe senior", desc: "Experts par domaine et pilotage dedie." },
        { title: "Couverture internationale", desc: "Multi fuseaux, multi langues." }
      ],
      status: {
        success_title: "Message envoye avec succes",
        success_body: "Notre equipe reviendra vers vous sous 24h ouvrables.",
        error_title: "Impossible d envoyer",
        error_body: "Erreur d envoi. Merci de reessayer dans quelques minutes.",
        error_config: "Configuration EmailJS manquante."
      },
      left: {
        title: "Ce que nous faisons des la semaine 1",
        description:
          "Nous structurons le scope, alignons les priorites et vous proposons une feuille de route actionnable.",
        steps: [
          {
            title: "Brief qualifie",
            desc: "Collecte des objectifs, contraintes et contexte."
          },
          {
            title: "Atelier de cadrage",
            desc: "Priorisation, planning, scope et KPIs."
          },
          {
            title: "Lancement rapide",
            desc: "Proposition detaillee et demarrage."
          }
        ],
        notice:
          "Confidentialite, gouvernance et securite integrees des le depart.",
        step_label: "Etape"
      },
      form: {
        title: "Demander un accompagnement",
        description:
          "Partagez votre contexte et nous vous proposerons un plan d action clair et adapte.",
        labels: {
          name: "Nom complet",
          email: "Email professionnel",
          company: "Societe",
          phone: "Telephone",
          topic: "Sujet",
          message: "Votre message"
        },
        placeholders: {
          name: "Jean Dupont",
          email: "jean@entreprise.com",
          company: "Nom de la societe",
          phone: "+33 6 12 34 56 78",
          message: "Decrivez votre contexte, vos objectifs et votre planning..."
        },
        topic_fallback: "Message",
        topics: [
          { value: "", label: "Selectionner un sujet" },
          { value: "demo", label: "Demande de demo" },
          { value: "partnership", label: "Partenariat" },
          { value: "support", label: "Support / Incident" },
          { value: "billing", label: "Facturation" },
          { value: "other", label: "Autre" }
        ],
        consent:
          "J accepte que mes donnees soient utilisees pour repondre a ma demande de contact.",
        submit: "Envoyer le message",
        sending: "Envoi en cours...",
        errors: {
          name: "Le nom est requis",
          email: "Email invalide",
          topic: "Veuillez selectionner un sujet",
          message: "Le message doit contenir au moins 20 caracteres",
          consent: "Veuillez accepter la politique de confidentialite"
        }
      },
      reassurance: {
        title: "Reassurance et transparence",
        description:
          "Vous savez exactement a quoi vous attendre, avec un suivi clair et des engagements solides.",
        items: [
          {
            title: "Equipe dediee",
            desc: "Un interlocuteur unique et des experts par domaine."
          },
          {
            title: "Qualite et securite",
            desc: "Process securises, conformite et suivi continu."
          },
          {
            title: "Delais clairs",
            desc: "Planifie, mesure et ajuste avec transparence."
          }
        ],
        faqs: [
          {
            q: "Quel est le delai de reponse ?",
            a: "Nous repondons sous 24h ouvrables et proposons un premier cadrage sous 3 a 5 jours."
          },
          {
            q: "Proposez-vous un POC ou une demo ?",
            a: "Oui. Nous pouvons organiser une demo et un POC encadre selon votre contexte."
          },
          {
            q: "Travaillez-vous a l international ?",
            a: "Oui. Nos equipes couvrent plusieurs fuseaux horaires et langues."
          },
          {
            q: "Comment sont traitees les donnees ?",
            a: "Les echanges sont securises et conformes aux exigences de confidentialite."
          }
        ]
      }
    },
    legalPages: {
      links: {
        privacy: "Politique de confidentialit\u00e9",
        terms: "Termes et conditions",
        mentions: "Mentions l\u00e9gales",
        cookies: "Politique de cookies"
      },
      privacy: {
        banner: {
          eyebrow: "Politique de confidentialit\u00e9",
          title: "Prot\u00e9gez vos donn\u00e9es avec transparence",
          subtitle: "Cette page explique comment Finovas collecte et traite vos donn\u00e9es."
        },
        updated: "Derni\u00e8re mise \u00e0 jour : 30 janvier 2026",
        sections: {
          controller: {
            title: "1. Responsable du traitement",
            body:
              "Finovas (raison sociale \u00e0 compl\u00e9ter) est responsable du traitement des donn\u00e9es collect\u00e9es via ce site. Pour toute question, contactez notre \u00e9quipe \u00e0 contact@finovas.com."
          },
          data: {
            title: "2. Donn\u00e9es collect\u00e9es",
            items: [
              "Identit\u00e9 et coordonn\u00e9es (nom, email, t\u00e9l\u00e9phone, soci\u00e9t\u00e9).",
              "Contenu des messages et demandes envoy\u00e9es via le formulaire.",
              "Donn\u00e9es techniques (adresse IP, navigateur, logs).",
              "Donn\u00e9es de navigation et cookies selon vos pr\u00e9f\u00e9rences."
            ]
          },
          purposes: {
            title: "3. Finalit\u00e9s et bases l\u00e9gales",
            items: [
              "R\u00e9pondre aux demandes et fournir un suivi commercial.",
              "Am\u00e9liorer nos services et la s\u00e9curit\u00e9 du site.",
              "Respecter nos obligations l\u00e9gales et contractuelles."
            ],
            body:
              "Les traitements reposent sur votre consentement, nos int\u00e9r\u00eats l\u00e9gitimes ou l'ex\u00e9cution d'un contrat."
          },
          recipients: {
            title: "4. Destinataires et sous-traitants",
            body:
              "Les donn\u00e9es sont trait\u00e9es par les \u00e9quipes autoris\u00e9es de Finovas et ses prestataires (h\u00e9bergement, emailing, analytics) selon des engagements de confidentialit\u00e9."
          },
          retention: {
            title: "5. Dur\u00e9e de conservation",
            body:
              "Les donn\u00e9es sont conserv\u00e9es pendant une dur\u00e9e proportionn\u00e9e aux finalit\u00e9s : demandes de contact (jusqu'\u00e0 3 ans), logs techniques (jusqu'\u00e0 12 mois) et obligations l\u00e9gales selon la r\u00e9glementation applicable."
          },
          rights: {
            title: "6. Vos droits",
            body:
              "Vous disposez d'un droit d'acc\u00e8s, de rectification, d'opposition, de limitation, d'effacement et de portabilit\u00e9. Pour exercer vos droits, \u00e9crivez \u00e0 contact@finovas.com."
          },
          cookies: {
            title: "7. Cookies",
            body: "Pour en savoir plus sur les cookies, consultez notre politique de cookies."
          },
          updates: {
            title: "8. Modifications",
            body:
              "Cette politique peut \u00eatre mise \u00e0 jour. La date de mise \u00e0 jour est indiqu\u00e9e en haut de page."
          }
        }
      },
      terms: {
        banner: {
          eyebrow: "Termes et conditions",
          title: "Cadre l\u00e9gal et conditions d'utilisation",
          subtitle: "Consultez les r\u00e8gles qui encadrent l'acc\u00e8s \u00e0 nos services."
        },
        updated: "Derni\u00e8re mise \u00e0 jour : 30 janvier 2026",
        sections: {
          object: {
            title: "1. Objet",
            body:
              "Les pr\u00e9sentes conditions encadrent l'acc\u00e8s et l'utilisation du site Finovas. En naviguant sur le site, vous acceptez ces conditions."
          },
          access: {
            title: "2. Acc\u00e8s au site",
            body:
              "Le site est accessible 24/7 sauf interruption planifi\u00e9e ou \u00e9v\u00e9nement technique ind\u00e9pendant de notre volont\u00e9."
          },
          ip: {
            title: "3. Propri\u00e9t\u00e9 intellectuelle",
            body:
              "Les contenus, marques, logos et \u00e9l\u00e9ments graphiques sont la propri\u00e9t\u00e9 de Finovas ou de ses partenaires et ne peuvent \u00eatre reproduits sans autorisation \u00e9crite."
          },
          liability: {
            title: "4. Responsabilit\u00e9s",
            body:
              "Finovas met en \u0153uvre les moyens raisonnables pour garantir l'exactitude des informations. Toutefois, aucune garantie n'est fournie quant \u00e0 l'absence d'erreurs ou d'interruptions."
          },
          links: {
            title: "5. Liens externes",
            body:
              "Le site peut contenir des liens vers des sites tiers. Finovas n'est pas responsable de leur contenu ni de leur politique."
          },
          data: {
            title: "6. Donn\u00e9es personnelles",
            body: "Le traitement des donn\u00e9es est d\u00e9taill\u00e9 dans notre politique de confidentialit\u00e9."
          },
          law: {
            title: "7. Droit applicable",
            body:
              "Ces conditions sont soumises au droit applicable du pays du si\u00e8ge social de Finovas. En cas de litige, les tribunaux comp\u00e9tents seront ceux du ressort du si\u00e8ge social."
          },
          contact: {
            title: "8. Contact",
            body: "Pour toute question relative aux pr\u00e9sentes conditions, contactez-nous \u00e0 contact@finovas.com."
          }
        }
      },
      mentions: {
        banner: {
          eyebrow: "Mentions l\u00e9gales",
          title: "Informations l\u00e9gales et \u00e9diteur du site",
          subtitle: "Transparence sur l'\u00e9diteur, l'h\u00e9bergement et la propri\u00e9t\u00e9."
        },
        updated: "Derni\u00e8re mise \u00e0 jour : 30 janvier 2026",
        sections: {
          editor: {
            title: "\u00c9diteur",
            items: [
              "Raison sociale : [\u00c0 compl\u00e9ter]",
              "Forme juridique : [\u00c0 compl\u00e9ter]",
              "Capital social : [\u00c0 compl\u00e9ter]",
              "RCS / Registre : [\u00c0 compl\u00e9ter]",
              "Num\u00e9ro TVA : [\u00c0 compl\u00e9ter]",
              "Adresse : [\u00c0 compl\u00e9ter]",
              "Email : contact@finovas.com"
            ]
          },
          director: {
            title: "Directeur de publication",
            body: "[Nom et fonction \u00e0 compl\u00e9ter]"
          },
          host: {
            title: "H\u00e9bergeur",
            items: [
              "Nom : [\u00c0 compl\u00e9ter]",
              "Adresse : [\u00c0 compl\u00e9ter]",
              "T\u00e9l\u00e9phone : [\u00c0 compl\u00e9ter]"
            ]
          },
          ip: {
            title: "Propri\u00e9t\u00e9 intellectuelle",
            body:
              "Les contenus, marques, logos et \u00e9l\u00e9ments graphiques sont prot\u00e9g\u00e9s par le droit de la propri\u00e9t\u00e9 intellectuelle. Toute reproduction sans autorisation est interdite."
          },
          data: {
            title: "Donn\u00e9es personnelles",
            body: "Le traitement des donn\u00e9es personnelles est d\u00e9taill\u00e9 dans la politique de confidentialit\u00e9."
          },
          cookies: {
            title: "Cookies",
            body: "La politique de cookies est disponible sur la page d\u00e9di\u00e9e."
          }
        }
      },
      cookies: {
        banner: {
          eyebrow: "Politique de cookies",
          title: "Ma\u00eetriser les cookies et pr\u00e9f\u00e9rences",
          subtitle: "Informations sur les cookies utilis\u00e9s et vos choix."
        },
        updated: "Derni\u00e8re mise \u00e0 jour : 30 janvier 2026",
        sections: {
          definition: {
            title: "1. Qu'est-ce qu'un cookie",
            body:
              "Un cookie est un petit fichier d\u00e9pos\u00e9 sur votre terminal lors de la consultation d'un site. Il permet notamment de m\u00e9moriser vos pr\u00e9f\u00e9rences et d'analyser la navigation."
          },
          types: {
            title: "2. Types de cookies utilis\u00e9s",
            items: [
              "Essentiels : n\u00e9cessaires au fonctionnement du site.",
              "Mesure d'audience : statistiques anonymes de navigation.",
              "Fonctionnels : m\u00e9morisation de vos choix.",
              "Marketing : contenus personnalis\u00e9s si activ\u00e9s."
            ]
          },
          consent: {
            title: "3. Gestion du consentement",
            body:
              "Vous pouvez accepter ou refuser les cookies non essentiels via le bandeau de consentement (si actif) ou \u00e0 tout moment via les param\u00e8tres de votre navigateur."
          },
          retention: {
            title: "4. Dur\u00e9e de conservation",
            body:
              "Les cookies sont conserv\u00e9s pour une dur\u00e9e maximale de 13 mois, puis supprim\u00e9s ou renouvel\u00e9s selon votre consentement."
          },
          contact: {
            title: "5. Contact",
            body: "Pour toute question, contactez-nous \u00e0 contact@finovas.com."
          }
        }
      }
    },
    auth: {
      fields: {
        email_pro: "Email professionnel",
        email: "Email",
        password: "Mot de passe",
        first_name: "Prenom",
        last_name: "Nom",
        full_name: "Nom complet"
      },
      signIn: {
        title: "Bon retour !",
        subtitle: "Connectez-vous pour acceder a votre espace.",
        remember: "Se souvenir",
        forgot: "Oublie ?",
        submit: "Se connecter",
        divider: "Ou",
        overlay_title: "Nouvelle ici ?",
        overlay_desc:
          "Rejoignez une communaute de talents et d entreprises qui faconnent l avenir du travail.",
        overlay_button: "Creer un compte"
      },
      signUp: {
        title: "Creer un compte",
        subtitle: "Rejoignez la communaute Reed des aujourd hui.",
        submit: "S inscrire",
        consent_prefix: "J accepte les",
        consent_terms: "Conditions Generales",
        consent_and: "et la",
        consent_policy: "Politique de Confidentialite",
        overlay_title: "Deja membre ?",
        overlay_desc:
          "Pour rester connecte avec nous, veuillez vous connecter avec vos informations personnelles.",
        overlay_button: "Se connecter"
      },
      mobile: {
        sign_in_subtitle: "Connectez-vous a votre compte.",
        sign_up_subtitle: "Commencez votre aventure.",
        no_account: "Pas encore de compte ?",
        have_account: "Deja membre ?"
      },
      social: {
        google: "Google",
        linkedin: "LinkedIn"
      }
    },
    footer: {
      brand_title: "Finovas",
      brand_desc: "Finovas conçoit et opère des plateformes digitales à forte valeur ajoutée, spécialisées dans la monétisation mobile, les services VAS et l’intégration d’écosystèmes numériques à grande échelle.",
      columns: [
        { title: "Solutions", items: ["Monétisation mobile", "Direct Carrier Billing", "Services VAS", "APIs & plateformes", "Paiements digitaux"] },
        { title: "Entreprise", items: ["À propos", "Écosystème", "Pourquoi Finovas", "Partenaires", "Carrières"] },
        { title: "Ressources", items: ["Documentation", "Cas d’usage", "Sécurité & conformité", "Support technique"] },
        { title: "Contact", items: ["contact@finovas.com", "Business & partenariats", "Relations institutionnelles", "Support entreprise"] }
      ],
      legal_links: [
        { label: "Politique de confidentialite", to: "/politique-confidentialite" },
        { label: "Termes et conditions", to: "/termes-conditions" },
        { label: "Mentions legales", to: "/mentions-legales" },
        { label: "Politique de cookies", to: "/politique-cookies" }
      ],
      legal: { left: "© Finovas", middle: "Du contenu • Du jeu • Du fun", right: "Tous droits réservés" }
    }
  },
  en: {
    header: {
      accueil: "Home",
      solutions: "Solutions",
      pricing: "Pricing",
      book_demo: "Book a demo",
      login: "Login",
      signup: "Sign Up",
      contact: "Contact",
      telecoms: "Telecoms",
      fintech: "Payment & Fintech",
      platforms: "Platforms",
      dcb: "Direct Carrier Billing",
      dcb_desc: "Monetization via mobile bill",
      sms: "SMS & USSD",
      sms_desc: "Direct communication",
      distribution: "Operator Distribution",
      distribution_desc: "Extended sales network",
      momo: "Mobile Money",
      momo_desc: "Financial inclusion",
      gateway: "Payment Gateways",
      gateway_desc: "Multi-channel aggregation",
      transactions: "Transaction Management",
      transactions_desc: "Real-time monitoring",
      api: "APIs & Integrations",
      api_desc: "Rapid deployment",
      reporting: "Monitoring & Reporting",
      reporting_desc: "Advanced analytics",
      security: "Scalability & Security",
      security_desc: "Robust infrastructure",
      highlight_hub: "Innovation Hub",
      highlight_title_1: "The future of",
      highlight_title_2: "Digital Banking",
      highlight_desc: "Explore our latest solutions for financial inclusion.",
      highlight_cta: "See innovations"
    },
    hero: {
      label: "Finovas · Digital & VAS Solutions",
      title_line1: "Driving mobile growth",
      title_line2: "through digital innovation",
      description: "Finovas assists companies and operators in the design, deployment, and monetization of high-impact digital and VAS services on mobile markets.",
      cta_demo: "Request a demo",
      cta_solutions: "Discover our solutions",
      tags: ["VAS & Digital Content", "Mobile Monetization", "Mobile Money & DCB", "Scalable Solutions"],
      scroll: "Scroll"
    },
    about: {
      title: "The Ecosystem .",
      subtitle: "Finovas structures digital and VAS solutions connecting operators, partners, and users within a high-performance and sustainable mobile ecosystem.",
      card1: {
        tag_monetization: "Mobile monetization",
        tag_vas: "Value Added Services (VAS)",
        title_p1: "WHO WE",
        title_p2: "ARE",
        description: "Finovas structures digital and VAS solutions connecting operators, partners, and users within a high-performance and sustainable mobile ecosystem."
      },
      card2: {
        tags: ["Mobile expertise", "Mastered execution", "Strategic partner", "Scalability & reliability"],
        title: "Security & Governance",
        subtitle: "Compliance, stability, and operational continuity"
      },
      card3: {
        title: "Steering & Performance",
        subtitle: "Key indicators",
        subtext: "Consolidated view",
        tags: ["Continuous growth", "High availability"]
      },
      card4: {
        subtitle: "Content - Gaming - Fun"
      },
      card5: {
        quote: "“Technical tools designed for rapid, secure, and scalable integration.”",
        btn_doc: "Documentation",
        btn_api: "API",
        btn_sandbox: "Sandbox"
      },
      card6: {
        text: "Interoperability operators, fintechs, and partners"
      }
    },
    solutions: {
      title_prefix: "Our Solutions",
      title_suffix: "Strategic",
      intro: "Cutting-edge technology serving your growth. Choose operational excellence.",
      cta: "Explore the solution",
      items: [
        {
          title: "Mobile Monetization",
          description: "Maximize your revenue through seamless integration of Direct Carrier Billing and Mobile Money. Optimized conversion for all operators.",
          features: ["Direct Carrier Billing", "Mobile Money", "Micro-payment"]
        },
        {
          title: "VAS Services",
          description: "Engage your users with premium content and high value-added digital services. Retention and engagement guaranteed.",
          features: ["Premium Content", "Streaming", "Gaming"]
        },
        {
          title: "Platforms & APIs",
          description: "Deploy quickly with our robust, secure APIs designed for scalability. Frictionless technical integration.",
          features: ["RESTful API", "High Availability", "Clear Documentation"]
        },
        {
          title: "Mobile-First Experience",
          description: "Interfaces optimized for all devices and adapted to local network constraints. Fluid UX in all circumstances.",
          features: ["Responsive Design", "Data Optimization", "Offline Mode"]
        },
        {
          title: "Security & Compliance",
          description: "Protect your transactions and comply with the strictest regulatory standards. GDPR, PSD2, and local standards.",
          features: ["End-to-end Encryption", "Anti-fraud", "GDPR Compliance"]
        },
        {
          title: "Analytics & KPI",
          description: "Drive your business in real-time with precise and actionable dashboards. Make the right decisions based on data.",
          features: ["Real-time Dashboard", "Automated Reports", "Predictive Analysis"]
        }
      ]
    },
    why: {
      title_brand: "Finovas",
      title_main: "Why?",
      quote: "The alliance of technical rigor and strategic elegance.",
      footer_brand: "Finovas Group",
      footer_tagline: "Digital Platforms • Mobile Monetization • VAS",
      items: [
        {
          id: "01",
          title: "GLOBAL EXPERTISE",
          subtitle: "Coverage & Compliance",
          description: "Mastery of ecosystems. We navigate between local constraints and international standards.",
          image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
        },
        {
          id: "02",
          title: "SCALABLE ARCHITECTURE",
          subtitle: "High Availability",
          description: "Rock-solid foundations. Infrastructures built for extreme load and maximum security.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        }
      ]
    },
    roles: {
      header_tag: "Connected Ecosystem",
      title_line1: "A network of trust",
      title_line2: "for shared growth",
      description: "We unify key digital players to create powerful, sustainable synergies.",
      bottom_partners: "+50 Active partners",
      bottom_cta: "Join the Finovas alliance",
      items: [
        { title: "Telecom Operators", desc: "Network infrastructure & connectivity" },
        { title: "Mobile Money", desc: "Financial inclusion & transactions" },
        { title: "Fintechs", desc: "Banking & digital innovation" },
        { title: "Content Providers", desc: "VAS services & entertainment" },
        { title: "Payment Gateways", desc: "Aggregation & secure flows" },
        { title: "Tech Partners", desc: "Cloud solutions & integration" }
      ]
    },
    figures: {
      header_tag: "Key Figures",
      title_line1: "Indicators",
      title_line2: "at the scale of digital platforms",
      description: "These figures illustrate Finovas' robustness and operational capacity.",
      items: [
        { label: "Countries covered", desc: "Active deployments" },
        { label: "Partners & operators", desc: "Telecoms & fintechs" },
        { label: "Availability", desc: "Stable infrastructure" },
        { label: "Transactions", desc: "Digital payments" },
        { label: "Integration time", desc: "Production rollout" },
        { label: "Supervision", desc: "Continuous monitoring" }
      ]
    },
    cta: {
      tag: "Contact & partnerships",
      title_line1: "Let's build together",
      title_line2: "the digital services of tomorrow",
      description: "Are you a telecom, fintech, or digital actor? Finovas supports partners in designing, deploying, and monetizing large-scale digital platforms.",
      btn_demo: "Request a demo",
      btn_partner: "Become a partner",
      footer: "Operators • Fintechs • Institutions • Technology partners"
    },
    contact: {
      title: "Contact us",
      name: "Name",
      email: "Email",
      company: "Company (optional)",
      message: "Message",
      submit: "Send",
      success: "Message sent successfully!",
      errors: {
        nameRequired: "Name is required",
        emailInvalid: "Invalid email",
        messageMin: "Message must be at least 10 characters"
      }
    },
    contactPage: {
      hero: {
        badge: "Finovas Contact",
        title: "A senior team to drive your digital growth",
        description:
          "We frame your objectives, secure delivery and activate the best levers of mobile monetization and customer experience.",
        chips: ["Security & compliance", "Business scoping", "Fast execution"],
        cta_primary: "Start a discussion",
        cta_secondary: "contact@finovas.com"
      },
      direct: {
        title: "Direct contact",
        email: "contact@finovas.com",
        phone: "+33 1 23 45 67 89",
        address_line1: "123 Innovation Street",
        address_line2: "75001 Paris"
      },
      trust: [
        { title: "Response within 24h", desc: "First feedback and scoping plan." },
        { title: "Senior team", desc: "Domain experts and dedicated leadership." },
        { title: "International coverage", desc: "Multi timezones, multi languages." }
      ],
      status: {
        success_title: "Message sent successfully",
        success_body: "Our team will get back to you within 24 business hours.",
        error_title: "Unable to send",
        error_body: "Sending error. Please try again in a few minutes.",
        error_config: "Missing EmailJS configuration."
      },
      left: {
        title: "What we do in week 1",
        description:
          "We structure scope, align priorities and propose an actionable roadmap.",
        steps: [
          { title: "Qualified brief", desc: "Collect objectives, constraints and context." },
          { title: "Scoping workshop", desc: "Priorities, planning, scope and KPIs." },
          { title: "Fast kickoff", desc: "Detailed proposal and start." }
        ],
        notice: "Confidentiality, governance and security integrated from the start.",
        step_label: "Step"
      },
      form: {
        title: "Request support",
        description:
          "Share your context and we will propose a clear and tailored plan of action.",
        labels: {
          name: "Full name",
          email: "Business email",
          company: "Company",
          phone: "Phone",
          topic: "Subject",
          message: "Your message"
        },
        placeholders: {
          name: "John Smith",
          email: "john@company.com",
          company: "Company name",
          phone: "+33 6 12 34 56 78",
          message: "Describe your context, goals and timeline..."
        },
        topic_fallback: "Message",
        topics: [
          { value: "", label: "Select a subject" },
          { value: "demo", label: "Demo request" },
          { value: "partnership", label: "Partnership" },
          { value: "support", label: "Support / Incident" },
          { value: "billing", label: "Billing" },
          { value: "other", label: "Other" }
        ],
        consent:
          "I agree that my data will be used to respond to my contact request.",
        submit: "Send message",
        sending: "Sending...",
        errors: {
          name: "Name is required",
          email: "Invalid email",
          topic: "Please select a subject",
          message: "Message must be at least 20 characters",
          consent: "Please accept the privacy policy"
        }
      },
      reassurance: {
        title: "Reassurance and transparency",
        description:
          "You know exactly what to expect, with clear follow-up and strong commitments.",
        items: [
          {
            title: "Dedicated team",
            desc: "A single point of contact and domain experts."
          },
          {
            title: "Quality and security",
            desc: "Secure processes, compliance and continuous monitoring."
          },
          {
            title: "Clear timelines",
            desc: "Planned, measured and adjusted with transparency."
          }
        ],
        faqs: [
          {
            q: "What is the response time?",
            a: "We reply within 24 business hours and offer a first scoping within 3 to 5 days."
          },
          {
            q: "Do you provide a POC or demo?",
            a: "Yes. We can arrange a demo and a guided POC depending on your context."
          },
          {
            q: "Do you operate internationally?",
            a: "Yes. Our teams cover multiple timezones and languages."
          },
          {
            q: "How is data handled?",
            a: "Exchanges are secure and compliant with confidentiality requirements."
          }
    ]
      }
    },
    legalPages: {
  links: {
    privacy: "Privacy Policy",
    terms: "Terms and Conditions",
    mentions: "Legal Notice",
    cookies: "Cookie Policy"
  },

  privacy: {
    banner: {
      eyebrow: "Privacy Policy",
      title: "Protecting your data with transparency",
      subtitle: "This page explains how Finovas collects and processes your data."
    },
    updated: "Last updated: January 30, 2026",
    sections: {
      controller: {
        title: "1. Data Controller",
        body:
          "Finovas (legal entity to be completed) is responsible for processing the data collected through this website. For any questions, please contact our team at contact@finovas.com."
      },
      data: {
        title: "2. Data Collected",
        items: [
          "Identity and contact details (name, email, phone number, company).",
          "Content of messages and requests submitted via the contact form.",
          "Technical data (IP address, browser type, logs).",
          "Browsing data and cookies according to your preferences."
        ]
      },
      purposes: {
        title: "3. Purposes and Legal Basis",
        items: [
          "Responding to inquiries and providing commercial follow-up.",
          "Improving our services and website security.",
          "Complying with legal and contractual obligations."
        ],
        body:
          "Processing is based on your consent, our legitimate interests, or the performance of a contract."
      },
      recipients: {
        title: "4. Recipients and Processors",
        body:
          "Data is processed by authorized Finovas teams and its service providers (hosting, emailing, analytics) under strict confidentiality commitments."
      },
      retention: {
        title: "5. Data Retention Period",
        body:
          "Data is retained for a period proportionate to its purpose: contact requests (up to 3 years), technical logs (up to 12 months), and legal obligations in accordance with applicable regulations."
      },
      rights: {
        title: "6. Your Rights",
        body:
          "You have the right to access, rectify, object to, restrict, erase, and request portability of your data. To exercise your rights, please contact contact@finovas.com."
      },
      cookies: {
        title: "7. Cookies",
        body: "For more information about cookies, please consult our Cookie Policy."
      },
      updates: {
        title: "8. Updates",
        body:
          "This policy may be updated from time to time. The update date is indicated at the top of the page."
      }
    }
  },

  terms: {
    banner: {
      eyebrow: "Terms and Conditions",
      title: "Legal framework and terms of use",
      subtitle: "Please review the rules governing access to our services."
    },
    updated: "Last updated: January 30, 2026",
    sections: {
      object: {
        title: "1. Purpose",
        body:
          "These terms govern access to and use of the Finovas website. By browsing the site, you accept these terms."
      },
      access: {
        title: "2. Website Access",
        body:
          "The website is accessible 24/7, except in cases of scheduled maintenance or technical events beyond our control."
      },
      ip: {
        title: "3. Intellectual Property",
        body:
          "Content, trademarks, logos, and graphical elements are the property of Finovas or its partners and may not be reproduced without prior written authorization."
      },
      liability: {
        title: "4. Liability",
        body:
          "Finovas makes reasonable efforts to ensure the accuracy of the information provided. However, no guarantee is given regarding the absence of errors or interruptions."
      },
      links: {
        title: "5. External Links",
        body:
          "The website may contain links to third-party websites. Finovas is not responsible for their content or policies."
      },
      data: {
        title: "6. Personal Data",
        body:
          "Personal data processing is detailed in our Privacy Policy."
      },
      law: {
        title: "7. Governing Law",
        body:
          "These terms are governed by the law applicable in the country of Finovas’ registered office. In the event of a dispute, the competent courts shall be those of the registered office jurisdiction."
      },
      contact: {
        title: "8. Contact",
        body:
          "For any questions regarding these terms, please contact us at contact@finovas.com."
      }
    }
  },

  mentions: {
    banner: {
      eyebrow: "Legal Notice",
      title: "Legal information and website publisher",
      subtitle: "Transparency regarding the publisher, hosting, and ownership."
    },
    updated: "Last updated: January 30, 2026",
    sections: {
      editor: {
        title: "Publisher",
        items: [
          "Company name: [To be completed]",
          "Legal form: [To be completed]",
          "Share capital: [To be completed]",
          "Company register: [To be completed]",
          "VAT number: [To be completed]",
          "Address: [To be completed]",
          "Email: contact@finovas.com"
        ]
      },
      director: {
        title: "Publication Director",
        body: "[Name and position to be completed]"
      },
      host: {
        title: "Hosting Provider",
        items: [
          "Name: [To be completed]",
          "Address: [To be completed]",
          "Phone: [To be completed]"
        ]
      },
      ip: {
        title: "Intellectual Property",
        body:
          "Content, trademarks, logos, and graphical elements are protected by intellectual property law. Any reproduction without authorization is prohibited."
      },
      data: {
        title: "Personal Data",
        body:
          "Personal data processing is detailed in the Privacy Policy."
      },
      cookies: {
        title: "Cookies",
        body:
          "The Cookie Policy is available on the dedicated page."
      }
    }
  },

  cookies: {
    banner: {
      eyebrow: "Cookie Policy",
      title: "Manage cookies and preferences",
      subtitle: "Information about the cookies used and your choices."
    },
    updated: "Last updated: January 30, 2026",
    sections: {
      definition: {
        title: "1. What is a cookie",
        body:
          "A cookie is a small file placed on your device when visiting a website. It helps remember preferences and analyze browsing behavior."
      },
      types: {
        title: "2. Types of cookies used",
        items: [
          "Essential: required for the proper functioning of the website.",
          "Audience measurement: anonymous browsing statistics.",
          "Functional: remembering your choices.",
          "Marketing: personalized content when enabled."
        ]
      },
      consent: {
        title: "3. Consent management",
        body:
          "You may accept or refuse non-essential cookies via the consent banner (when active) or at any time through your browser settings."
      },
      retention: {
        title: "4. Retention period",
        body:
          "Cookies are stored for a maximum period of 13 months, then deleted or renewed based on your consent."
      },
      contact: {
        title: "5. Contact",
        body:
          "For any questions, please contact us at contact@finovas.com."
      }
    }
  }
}
,
    footer: {
      brand_title: "Finovas",
      brand_desc: "Finovas designs and operates high-value digital platforms, specializing in mobile monetization, VAS services, and large-scale ecosystem integration.",
      columns: [
        { title: "Solutions", items: ["Mobile Monetization", "Direct Carrier Billing", "VAS Services", "APIs & Platforms", "Digital Payments"] },
        { title: "Company", items: ["About", "Ecosystem", "Why Finovas", "Partners", "Careers"] },
        { title: "Resources", items: ["Documentation", "Use Cases", "Security & Compliance", "Technical Support"] },
        { title: "Contact", items: ["contact@finovas.com", "Business & Partnerships", "Institutional Relations", "Enterprise Support"] }
      ],
      legal_links: [
        { label: "Privacy Policy", to: "/politique-confidentialite" },
        { label: "Terms & Conditions", to: "/termes-conditions" },
        { label: "Legal Notice", to: "/mentions-legales" },
        { label: "Cookies Policy", to: "/politique-cookies" }
      ],
      legal: { left: "© Finovas", middle: "Content • Gaming • Fun", right: "All rights reserved" }
    }
  },
  es: {
    header: {
      accueil: "Inicio",
      solutions: "Soluciones",
      pricing: "Precios",
      book_demo: "Reservar demo",
      login: "Acceso",
      signup: "Registrarse",
      contact: "Contacto",
      telecoms: "Telecomunicaciones",
      fintech: "Pagos y Fintech",
      platforms: "Plataformas",
      dcb: "Facturación Directa",
      dcb_desc: "Monetización vía factura móvil",
      sms: "SMS y USSD",
      sms_desc: "Comunicación directa",
      distribution: "Distribución de Operadores",
      distribution_desc: "Red de ventas extendida",
      momo: "Dinero Móvil",
      momo_desc: "Inclusión financiera",
      gateway: "Pasarelas de Pago",
      gateway_desc: "Agregación multicanal",
      transactions: "Gestión de Transacciones",
      transactions_desc: "Monitoreo en tiempo real",
      api: "APIs e Integraciones",
      api_desc: "Despliegue rápido",
      reporting: "Monitoreo y Reportes",
      reporting_desc: "Analítica avanzada",
      security: "Escalabilidad y Seguridad",
      security_desc: "Infraestructura robusta",
      highlight_hub: "Centro de Innovación",
      highlight_title_1: "El futuro de",
      highlight_title_2: "Banca Digital",
      highlight_desc: "Explore nuestras últimas soluciones para la inclusión financiera.",
      highlight_cta: "Ver innovaciones"
    },
    hero: {
      label: "Finovas · Soluciones Digitales y VAS",
      title_line1: "Impulsando el crecimiento móvil",
      title_line2: "a través de la innovación digital",
      description: "Finovas acompaña a empresas y operadores en el diseño, despliegue y monetización de servicios digitales y VAS de alto impacto en los mercados móviles.",
      cta_demo: "Solicitar una demostración",
      cta_solutions: "Descubrir nuestras soluciones",
      tags: ["VAS y Contenido Digital", "Monetización Móvil", "Dinero Móvil y DCB", "Soluciones Escalables"],
      scroll: "Desplazarse"
    },
    about: {
      title: "El Ecosistema .",
      subtitle: "Finovas estructura soluciones digitales y VAS conectando operadores, socios y usuarios dentro de un ecosistema móvil de alto rendimiento y sostenible.",
      card1: {
        tag_monetization: "Monetización móvil",
        tag_vas: "Servicios de Valor Agregado (VAS)",
        title_p1: "QUIÉNES",
        title_p2: "SOMOS",
        description: "Finovas estructura soluciones digitales y VAS conectando operadores, socios y usuarios dentro de un ecosistema móvil de alto rendimiento y sostenible."
      },
      card2: {
        tags: ["Experiencia móvil", "Ejecución dominada", "Socio estratégico", "Escalabilidad y fiabilidad"],
        title: "Seguridad y Gobernanza",
        subtitle: "Cumplimiento, estabilidad y continuidad operativa"
      },
      card3: {
        title: "Control y Rendimiento",
        subtitle: "Indicadores clave",
        subtext: "Vista consolidada",
        tags: ["Crecimiento continuo", "Alta disponibilidad"]
      },
      card4: {
        subtitle: "Contenido - Juego - Diversión"
      },
      card5: {
        quote: "“Herramientas técnicas diseñadas para una integración rápida, segura y escalable.”",
        btn_doc: "Documentación",
        btn_api: "API",
        btn_sandbox: "Sandbox"
      },
      card6: {
        text: "Interoperabilidad operadores, fintechs y socios"
      }
    },
    solutions: {
      title_prefix: "Nuestras Soluciones",
      title_suffix: "Estratégicas",
      intro: "Tecnología de punta al servicio de su crecimiento. Elija la excelencia operativa.",
      cta: "Descubrir la solución",
      items: [
        {
          title: "Monetización Móvil",
          description: "Maximice sus ingresos mediante la integración fluida de Facturación Directa y Dinero Móvil. Conversión optimizada para todos los operadores.",
          features: ["Facturación Directa", "Dinero Móvil", "Micropagos"]
        },
        {
          title: "Servicios VAS",
          description: "Involucre a sus usuarios con contenido premium y servicios digitales de alto valor agregado. Retención y compromiso garantizados.",
          features: ["Contenido Premium", "Streaming", "Juegos"]
        },
        {
          title: "Plataformas y APIs",
          description: "Despliegue rápidamente con nuestras APIs robustas, seguras y diseñadas para la escalabilidad. Integración técnica sin fricción.",
          features: ["API RESTful", "Alta Disponibilidad", "Documentación Clara"]
        },
        {
          title: "Experiencia Mobile-First",
          description: "Interfaces optimizadas para todos los dispositivos y adaptadas a las limitaciones de la red local. UX fluida en todas las circunstancias.",
          features: ["Diseño Responsivo", "Optimización de Datos", "Modo Offline"]
        },
        {
          title: "Seguridad y Cumplimiento",
          description: "Proteja sus transacciones y cumpla con los estándares regulatorios más estrictos. RGPD, PSD2 y normas locales.",
          features: ["Cifrado de extremo a extremo", "Antifraude", "Cumplimiento RGPD"]
        },
        {
          title: "Analítica y KPI",
          description: "Dirija su negocio en tiempo real con paneles precisos y accionables. Tome las decisiones correctas basadas en datos.",
          features: ["Panel en Tiempo Real", "Informes Automatizados", "Análisis Predictivo"]
        }
      ]
    },
    why: {
      title_brand: "Finovas",
      title_main: "¿Por qué?",
      quote: "La alianza de la fuerza técnica y la elegancia estratégica.",
      footer_brand: "Finovas Group",
      footer_tagline: "Plataformas Digitales • Monetización Móvil • VAS",
      items: [
        {
          id: "01",
          title: "EXPERTISE GLOBAL",
          subtitle: "Cobertura & Cumplimiento",
          description: "Dominio de ecosistemas. Navegamos entre las limitaciones locales y los estándares internacionales.",
          image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
        },
        {
          id: "02",
          title: "ARQUITECTURA ESCALABLE",
          subtitle: "Alta Disponibilidad",
          description: "Fundaciones sólidas. Infraestructuras construidas para carga extrema y máxima seguridad.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        }
      ]
    },
    roles: {
      header_tag: "Ecosistema Conectado",
      title_line1: "Una red de confianza",
      title_line2: "para un crecimiento compartido",
      description: "Unificamos a los actores clave del mundo digital para crear sinergias poderosas y duraderas.",
      bottom_partners: "+50 Socios activos",
      bottom_cta: "Únase a la alianza Finovas",
      items: [
        { title: "Operadores de Telecomunicaciones", desc: "Infraestructura de red y conectividad" },
        { title: "Dinero Móvil", desc: "Inclusión financiera y transacciones" },
        { title: "Fintechs", desc: "Innovación bancaria y digital" },
        { title: "Proveedores de Contenido", desc: "Servicios VAS y entretenimiento" },
        { title: "Pasarelas de Pago", desc: "Agregación y seguridad de flujos" },
        { title: "Socios Tecnológicos", desc: "Soluciones cloud e integración" }
      ]
    },
    figures: {
      header_tag: "Cifras Clave",
      title_line1: "Indicadores",
      title_line2: "a la escala de plataformas digitales",
      description: "Estas cifras ilustran la robustez y capacidad operativa de Finovas.",
      items: [
        { label: "Países cubiertos", desc: "Despliegues activos" },
        { label: "Socios y operadores", desc: "Telecomunicaciones y fintechs" },
        { label: "Disponibilidad", desc: "Infraestructura estable" },
        { label: "Transacciones", desc: "Pagos digitales" },
        { label: "Tiempo de integración", desc: "Puesta en producción" },
        { label: "Supervisión", desc: "Monitoreo continuo" }
      ]
    },
    cta: {
      tag: "Contacto y asociaciones",
      title_line1: "Construyamos juntos",
      title_line2: "los servicios digitales del mañana",
      description: "¿Es operador, fintech o actor digital? Finovas acompaña a sus socios en el diseño, despliegue y monetización de plataformas digitales a gran escala.",
      btn_demo: "Solicitar una demostración",
      btn_partner: "Convertirse en socio",
      footer: "Operadores • Fintechs • Instituciones • Socios tecnológicos"
    },
    contact: {
      title: "Contáctenos",
      name: "Nombre",
      email: "Email",
      company: "Empresa (opcional)",
      message: "Mensaje",
      submit: "Enviar",
      success: "¡Mensaje enviado con éxito!",
      errors: {
        nameRequired: "El nombre es obligatorio",
        emailInvalid: "Email inválido",
        messageMin: "El mensaje debe tener al menos 10 caracteres"
      }
    },
    contactPage: {
      hero: {
        badge: "Contacto Finovas",
        title: "Un equipo sénior para impulsar su crecimiento digital",
        description:
          "Estructuramos sus objetivos, aseguramos la entrega y activamos los mejores palancas de monetización móvil y experiencia del cliente.",
        chips: ["Seguridad y cumplimiento", "Cadrado de negocio", "Ejecución rápida"],
        cta_primary: "Iniciar una conversación",
        cta_secondary: "contact@finovas.com"
      },
      direct: {
        title: "Contacto directo",
        email: "contact@finovas.com",
        phone: "+33 1 23 45 67 89",
        address_line1: "123 Innovation Street",
        address_line2: "75001 Paris"
      },
      trust: [
        { title: "Respuesta en 24h", desc: "Primer retorno y plan de cadrado." },
        { title: "Equipo sénior", desc: "Expertos por dominio y liderazgo dedicado." },
        { title: "Cobertura internacional", desc: "Múltiples husos, múltiples idiomas." }
      ],
      status: {
        success_title: "Mensaje enviado con éxito",
        success_body: "Nuestro equipo le responderá dentro de 24h laborables.",
        error_title: "No se pudo enviar",
        error_body: "Error de envío. Intente nuevamente en unos minutos.",
        error_config: "Falta configuración de EmailJS."
      },
      left: {
        title: "Lo que hacemos en la primera semana",
        description:
          "Estructuramos el alcance, alineamos prioridades y proponemos una hoja de ruta accionable.",
        steps: [
          { title: "Brief calificado", desc: "Recopilación de objetivos, restricciones y contexto." },
          { title: "Taller de cadrado", desc: "Prioridades, planificación, alcance y KPIs." },
          { title: "Inicio rápido", desc: "Propuesta detallada e inicio." }
        ],
        notice: "Confidencialidad, gobernanza y seguridad integradas desde el inicio.",
        step_label: "Etapa"
      },
      form: {
        title: "Solicitar acompañamiento",
        description:
          "Comparta su contexto y le propondremos un plan de acción claro y adaptado.",
        labels: {
          name: "Nombre completo",
          email: "Email profesional",
          company: "Empresa",
          phone: "Teléfono",
          topic: "Asunto",
          message: "Su mensaje"
        },
        placeholders: {
          name: "Juan Pérez",
          email: "juan@empresa.com",
          company: "Nombre de la empresa",
          phone: "+33 6 12 34 56 78",
          message: "Describa su contexto, objetivos y planificación..."
        },
        topic_fallback: "Mensaje",
        topics: [
          { value: "", label: "Seleccionar un asunto" },
          { value: "demo", label: "Solicitud de demo" },
          { value: "partnership", label: "Partenariado" },
          { value: "support", label: "Soporte / Incidente" },
          { value: "billing", label: "Facturación" },
          { value: "other", label: "Otro" }
        ],
        consent:
          "Acepto que mis datos sean utilizados para responder a mi solicitud de contacto.",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        errors: {
          name: "El nombre es obligatorio",
          email: "Email inválido",
          topic: "Seleccione un asunto",
          message: "El mensaje debe tener al menos 20 caracteres",
          consent: "Acepte la política de privacidad"
        }
      },
      reassurance: {
        title: "Reaseguro y transparencia",
        description:
          "Sabe exactamente qué esperar, con un seguimiento claro y compromisos sólidos.",
        items: [
          { title: "Equipo dedicado", desc: "Un interlocutor único y expertos por dominio." },
          { title: "Calidad y seguridad", desc: "Procesos seguros, cumplimiento y seguimiento continuo." },
          { title: "Plazos claros", desc: "Planificación, medición y ajuste con transparencia." }
        ],
        faqs: [
          { q: "¿Cuál es el plazo de respuesta?", a: "Respondemos en 24h laborables y proponemos un cadrado en 3–5 días." },
          { q: "¿Ofrecen POC o demo?", a: "Sí. Podemos organizar una demo y un POC guiado según su contexto." },
          { q: "¿Trabajan internacionalmente?", a: "Sí. Cubrimos múltiples husos horarios e idiomas." },
          { q: "¿Cómo se tratan los datos?", a: "Los intercambios son seguros y conformes a las exigencias de confidencialidad." }
        ]
      }
    },
    legalPages: {
      links: { privacy: "Política de privacidad", terms: "Términos y condiciones", mentions: "Aviso legal", cookies: "Política de cookies" },
      privacy: {
        banner: { eyebrow: "Política de privacidad", title: "Proteja sus datos con transparencia", subtitle: "Cómo Finovas recoge y procesa sus datos." },
        updated: "Última actualización: 30 de enero de 2026",
        sections: {
          controller: { title: "1. Responsable", body: "Finovas (razón social a completar) es responsable del tratamiento. contact@finovas.com." },
          data: { title: "2. Datos recogidos", items: ["Identidad y contacto", "Contenido de mensajes", "Datos técnicos", "Navegación y cookies"] },
          purposes: { title: "3. Finalidades y bases", items: ["Responder solicitudes", "Mejorar servicios y seguridad", "Obligaciones legales"], body: "Consentimiento, interés legítimo o contrato." },
          recipients: { title: "4. Destinatarios", body: "Equipos autorizados y proveedores bajo confidencialidad." },
          retention: { title: "5. Conservación", body: "Hasta 3 años (contacto), 12 meses (logs); según regulación." },
          rights: { title: "6. Sus derechos", body: "Acceso, rectificación, oposición, limitación, supresión y portabilidad." },
          cookies: { title: "7. Cookies", body: "Consulte la política de cookies." },
          updates: { title: "8. Modificaciones", body: "La fecha figura arriba." }
        }
      },
      terms: {
        banner: { eyebrow: "Términos y condiciones", title: "Marco legal y condiciones de uso", subtitle: "Reglas de acceso a nuestros servicios." },
        updated: "Última actualización: 30 de enero de 2026",
        sections: {
          object: { title: "1. Objeto", body: "Regula el acceso y uso del sitio." },
          access: { title: "2. Acceso", body: "Disponible 24/7 salvo mantenimiento o eventos técnicos." },
          ip: { title: "3. Propiedad intelectual", body: "No reproducir sin autorización." },
          liability: { title: "4. Responsabilidades", body: "Sin garantía de ausencia de errores o interrupciones." },
          links: { title: "5. Enlaces externos", body: "No responsabilidad sobre sitios terceros." },
          data: { title: "6. Datos personales", body: "Véase política de privacidad." },
          law: { title: "7. Ley aplicable", body: "Jurisdicción del domicilio social de Finovas." },
          contact: { title: "8. Contacto", body: "contact@finovas.com" }
        }
      },
      mentions: {
        banner: { eyebrow: "Aviso legal", title: "Información legal y editor del sitio", subtitle: "Editor, alojamiento y propiedad." },
        updated: "Última actualización: 30 de enero de 2026",
        sections: {
          editor: { title: "Editor", items: ["Razón social [A completar]", "Forma jurídica [A completar]", "Capital [A completar]", "Registro [A completar]", "NIF/VAT [A completar]", "Dirección [A completar]", "Email contact@finovas.com"] },
          director: { title: "Director de publicación", body: "[Nombre y función a completar]" },
          host: { title: "Alojamiento", items: ["Nombre [A completar]", "Dirección [A completar]", "Teléfono [A completar]"] },
          ip: { title: "Propiedad intelectual", body: "Contenidos protegidos; reproducción prohibida." },
          data: { title: "Datos personales", body: "Véase política de privacidad." },
          cookies: { title: "Cookies", body: "Véase política de cookies." }
        }
      },
      cookies: {
        banner: { eyebrow: "Política de cookies", title: "Gestionar cookies y preferencias", subtitle: "Información y opciones." },
        updated: "Última actualización: 30 de enero de 2026",
        sections: {
          definition: { title: "1. ¿Qué es una cookie", body: "Archivo pequeño en su dispositivo; recuerda preferencias y analiza navegación." },
          types: { title: "2. Tipos", items: ["Esenciales", "Medición", "Funcionales", "Marketing"] },
          consent: { title: "3. Consentimiento", body: "Gestión en banner o navegador." },
          retention: { title: "4. Conservación", body: "Hasta 13 meses; luego eliminación/renovación." },
          contact: { title: "5. Contacto", body: "contact@finovas.com" }
        }
      }
    },
    footer: {
      brand_title: "Finovas",
      brand_desc: "Finovas diseña y opera plataformas digitales de alto valor, especializadas en monetización móvil, servicios VAS e integración de ecosistemas a gran escala.",
      columns: [
        { title: "Soluciones", items: ["Monetización Móvil", "Facturación Directa", "Servicios VAS", "APIs y Plataformas", "Pagos Digitales"] },
        { title: "Empresa", items: ["Acerca de", "Ecosistema", "Por qué Finovas", "Socios", "Carreras"] },
        { title: "Recursos", items: ["Documentación", "Casos de uso", "Seguridad y Cumplimiento", "Soporte Técnico"] },
        { title: "Contacto", items: ["contact@finovas.com", "Negocios y Asociaciones", "Relaciones Institucionales", "Soporte Empresarial"] }
      ],
      legal_links: [
        { label: "Política de privacidad", to: "/politique-confidentialite" },
        { label: "Términos y condiciones", to: "/termes-conditions" },
        { label: "Aviso legal", to: "/mentions-legales" },
        { label: "Política de cookies", to: "/politique-cookies" }
      ],
      legal: { left: "© Finovas", middle: "Contenido • Juego • Diversión", right: "Todos los derechos reservados" }
    }
  },
  de: {
    header: {
      accueil: "Startseite",
      solutions: "Lösungen",
      pricing: "Preise",
      book_demo: "Demo buchen",
      login: "Anmelden",
      signup: "Registrieren",
      contact: "Kontakt",
      telecoms: "Telekommunikation",
      fintech: "Zahlung & Fintech",
      platforms: "Plattformen",
      dcb: "Direkte Abrechnung",
      dcb_desc: "Monetarisierung über Handyrechnung",
      sms: "SMS & USSD",
      sms_desc: "Direkte Kommunikation",
      distribution: "Betreibervertrieb",
      distribution_desc: "Erweitertes Vertriebsnetz",
      momo: "Mobiles Geld",
      momo_desc: "Finanzielle Inklusion",
      gateway: "Zahlungs-Gateways",
      gateway_desc: "Multi-Channel-Aggregation",
      transactions: "Transaktionsmanagement",
      transactions_desc: "Echtzeit-Überwachung",
      api: "APIs & Integrationen",
      api_desc: "Schnelle Bereitstellung",
      reporting: "Überwachung & Berichterstattung",
      reporting_desc: "Erweiterte Analysen",
      security: "Skalierbarkeit & Sicherheit",
      security_desc: "Robuste Infrastruktur",
      highlight_hub: "Innovationszentrum",
      highlight_title_1: "Die Zukunft des",
      highlight_title_2: "Digital Banking",
      highlight_desc: "Entdecken Sie unsere neuesten Lösungen für finanzielle Inklusion.",
      highlight_cta: "Innovationen sehen"
    },
    hero: {
      label: "Finovas · Digitale & VAS Lösungen",
      title_line1: "Förderung des mobilen Wachstums",
      title_line2: "durch digitale Innovation",
      description: "Finovas unterstützt Unternehmen und Betreiber bei der Konzeption, Bereitstellung und Monetarisierung von wirkungsstarken digitalen und VAS-Diensten auf mobilen Märkten.",
      cta_demo: "Demo anfordern",
      cta_solutions: "Unsere Lösungen entdecken",
      tags: ["VAS & Digitale Inhalte", "Mobile Monetarisierung", "Mobile Money & DCB", "Skalierbare Lösungen"],
      scroll: "Scrollen"
    },
    about: {
      title: "Das Ökosystem .",
      subtitle: "Finovas strukturiert digitale und VAS-Lösungen, die Betreiber, Partner und Nutzer in einem leistungsstarken und nachhaltigen mobilen Ökosystem verbinden.",
      card1: {
        tag_monetization: "Mobile Monetarisierung",
        tag_vas: "Mehrwertdienste (VAS)",
        title_p1: "WER WIR",
        title_p2: "SIND",
        description: "Finovas strukturiert digitale und VAS-Lösungen, die Betreiber, Partner und Nutzer in einem leistungsstarken und nachhaltigen mobilen Ökosystem verbinden."
      },
      card2: {
        tags: ["Mobile Expertise", "Meisterhafte Ausführung", "Strategischer Partner", "Skalierbarkeit & Zuverlässigkeit"],
        title: "Sicherheit & Governance",
        subtitle: "Compliance, Stabilität und betriebliche Kontinuität"
      },
      card3: {
        title: "Steuerung & Leistung",
        subtitle: "Schlüsselindikatoren",
        subtext: "Konsolidierte Ansicht",
        tags: ["Kontinuierliches Wachstum", "Hohe Verfügbarkeit"]
      },
      card4: {
        subtitle: "Inhalt - Spiel - Spaß"
      },
      card5: {
        quote: "“Technische Tools entwickelt für eine schnelle, sichere und skalierbare Integration.”",
        btn_doc: "Dokumentation",
        btn_api: "API",
        btn_sandbox: "Sandbox"
      },
      card6: {
        text: "Interoperabilität Betreiber, Fintechs und Partner"
      }
    },
    solutions: {
      title_prefix: "Unsere Lösungen",
      title_suffix: "Strategische",
      intro: "Spitzentechnologie im Dienst Ihres Wachstums. Wählen Sie operative Exzellenz.",
      cta: "Lösung entdecken",
      items: [
        {
          title: "Mobile Monetarisierung",
          description: "Maximieren Sie Ihren Umsatz durch nahtlose Integration von Direct Carrier Billing und Mobile Money. Optimierte Konversion für alle Betreiber.",
          features: ["Direct Carrier Billing", "Mobile Money", "Mikrozahlung"]
        },
        {
          title: "VAS-Dienste",
          description: "Binden Sie Ihre Nutzer mit Premium-Inhalten und digitalen Diensten mit hohem Mehrwert. Kundenbindung und Engagement garantiert.",
          features: ["Premium-Inhalte", "Streaming", "Gaming"]
        },
        {
          title: "Plattformen & APIs",
          description: "Schnelle Bereitstellung dank unserer robusten, sicheren und skalierbaren APIs. Reibungslose technische Integration.",
          features: ["RESTful API", "Hohe Verfügbarkeit", "Klare Dokumentation"]
        },
        {
          title: "Mobile-First-Erlebnis",
          description: "Für alle Endgeräte optimierte Schnittstellen, angepasst an lokale Netzwerkbedingungen. Flüssige UX unter allen Umständen.",
          features: ["Responsive Design", "Datenoptimierung", "Offline-Modus"]
        },
        {
          title: "Sicherheit & Compliance",
          description: "Schützen Sie Ihre Transaktionen und halten Sie die strengsten regulatorischen Standards ein. DSGVO, PSD2 und lokale Normen.",
          features: ["End-zu-End-Verschlüsselung", "Betrugsschutz", "DSGVO-Konformität"]
        },
        {
          title: "Analytics & KPI",
          description: "Steuern Sie Ihr Geschäft in Echtzeit mit präzisen und umsetzbaren Dashboards. Treffen Sie die richtigen Entscheidungen basierend auf Daten.",
          features: ["Echtzeit-Dashboard", "Automatisierte Berichte", "Prädiktive Analyse"]
        }
      ]
    },
    why: {
      title_brand: "Finovas",
      title_main: "Warum?",
      quote: "Die Verbindung von technischer Strenge und strategischer Eleganz.",
      footer_brand: "Finovas Group",
      footer_tagline: "Digitale Plattformen • Mobile Monetarisierung • VAS",
      items: [
        {
          id: "01",
          title: "GLOBALE EXPERTISE",
          subtitle: "Coverage & Compliance",
          description: "Souveräne Beherrschung von Ökosystemen. Wir navigieren zwischen lokalen Beschränkungen und internationalen Standards.",
          image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=2000"
        },
        {
          id: "02",
          title: "SKALIERBARE ARCHITEKTUR",
          subtitle: "High Availability",
          description: "Fundamente aus Beton. Infrastrukturen für extreme Last und maximale Sicherheit.",
          image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2000"
        }
      ]
    },
    roles: {
      header_tag: "Vernetztes Ökosystem",
      title_line1: "Ein Netzwerk des Vertrauens",
      title_line2: "für gemeinsames Wachstum",
      description: "Wir vereinen zentrale digitale Akteure, um starke und nachhaltige Synergien zu schaffen.",
      bottom_partners: "+50 Aktive Partner",
      bottom_cta: "Treten Sie der Finovas-Allianz bei",
      items: [
        { title: "Telekom-Betreiber", desc: "Netzinfrastruktur & Konnektivität" },
        { title: "Mobile Money", desc: "Finanzielle Inklusion & Transaktionen" },
        { title: "Fintechs", desc: "Bank- & digitale Innovation" },
        { title: "Content-Anbieter", desc: "VAS-Dienste & Unterhaltung" },
        { title: "Zahlungs-Gateways", desc: "Aggregation & sichere Flüsse" },
        { title: "Technologiepartner", desc: "Cloud-Lösungen & Integration" }
      ]
    },
    figures: {
      header_tag: "Kennzahlen",
      title_line1: "Indikatoren",
      title_line2: "im Maßstab digitaler Plattformen",
      description: "Diese Kennzahlen zeigen die Robustheit und operative Leistungsfähigkeit von Finovas.",
      items: [
        { label: "Abgedeckte Länder", desc: "Aktive Deployments" },
        { label: "Partner & Betreiber", desc: "Telekoms & Fintechs" },
        { label: "Verfügbarkeit", desc: "Stabile Infrastruktur" },
        { label: "Transaktionen", desc: "Digitale Zahlungen" },
        { label: "Integrationszeit", desc: "Inbetriebnahme" },
        { label: "Überwachung", desc: "Kontinuierliches Monitoring" }
      ]
    },
    cta: {
      tag: "Kontakt & Partnerschaften",
      title_line1: "Lassen Sie uns gemeinsam bauen",
      title_line2: "die digitalen Dienste von morgen",
      description: "Sind Sie Betreiber, Fintech oder digitaler Akteur? Finovas unterstützt Partner bei der Konzeption, Bereitstellung und Monetarisierung großskaliger digitaler Plattformen.",
      btn_demo: "Demo anfordern",
      btn_partner: "Partner werden",
      footer: "Betreiber • Fintechs • Institutionen • Technologiepartner"
    },
    contact: {
      title: "Kontakt",
      name: "Name",
      email: "E-Mail",
      company: "Unternehmen (optional)",
      message: "Nachricht",
      submit: "Senden",
      success: "Nachricht erfolgreich gesendet!",
      errors: {
        nameRequired: "Name ist erforderlich",
        emailInvalid: "Ungültige E-Mail",
        messageMin: "Nachricht muss mindestens 10 Zeichen enthalten"
      }
    },
    contactPage: {
      hero: {
        badge: "Finovas Kontakt",
        title: "Ein Senior‑Team für Ihr digitales Wachstum",
        description:
          "Wir strukturieren Ihre Ziele, sichern die Lieferung und aktivieren die besten Hebel für mobile Monetarisierung und Kundenerlebnis.",
        chips: ["Sicherheit & Compliance", "Business‑Cadrage", "Schnelle Ausführung"],
        cta_primary: "Diskussion starten",
        cta_secondary: "contact@finovas.com"
      },
      direct: {
        title: "Direkter Kontakt",
        email: "contact@finovas.com",
        phone: "+33 1 23 45 67 89",
        address_line1: "123 Innovation Street",
        address_line2: "75001 Paris"
      },
      trust: [
        { title: "Antwort innerhalb 24h", desc: "Erstes Feedback und Cadrage‑Plan." },
        { title: "Senior‑Team", desc: "Fachexperten und dedizierte Leitung." },
        { title: "Internationale Abdeckung", desc: "Mehrere Zeitzonen, mehrere Sprachen." }
      ],
      status: {
        success_title: "Nachricht erfolgreich gesendet",
        success_body: "Wir melden uns innerhalb von 24 Geschäfts‑Stunden.",
        error_title: "Senden fehlgeschlagen",
        error_body: "Fehler beim Senden. Bitte später erneut versuchen.",
        error_config: "Fehlende EmailJS‑Konfiguration."
      },
      left: {
        title: "Was wir in Woche 1 tun",
        description:
          "Wir strukturieren den Scope, richten Prioritäten aus und schlagen eine umsetzbare Roadmap vor.",
        steps: [
          { title: "Qualifiziertes Briefing", desc: "Ziele, Randbedingungen und Kontext sammeln." },
          { title: "Cadrage‑Workshop", desc: "Prioritäten, Planung, Scope und KPIs." },
          { title: "Schneller Start", desc: "Detailliertes Angebot und Start." }
        ],
        notice: "Vertraulichkeit, Governance und Sicherheit von Anfang an integriert.",
        step_label: "Schritt"
      },
      form: {
        title: "Begleitung anfragen",
        description:
          "Teilen Sie Ihren Kontext und wir schlagen einen klaren, angepassten Aktionsplan vor.",
        labels: {
          name: "Vollständiger Name",
          email: "Geschäfts‑E‑Mail",
          company: "Unternehmen",
          phone: "Telefon",
          topic: "Betreff",
          message: "Ihre Nachricht"
        },
        placeholders: {
          name: "Max Mustermann",
          email: "max@unternehmen.com",
          company: "Unternehmensname",
          phone: "+33 6 12 34 56 78",
          message: "Beschreiben Sie Kontext, Ziele und Zeitplan..."
        },
        topic_fallback: "Nachricht",
        topics: [
          { value: "", label: "Betreff auswählen" },
          { value: "demo", label: "Demo‑Anfrage" },
          { value: "partnership", label: "Partnerschaft" },
          { value: "support", label: "Support / Incident" },
          { value: "billing", label: "Abrechnung" },
          { value: "other", label: "Sonstiges" }
        ],
        consent:
          "Ich stimme zu, dass meine Daten zur Beantwortung meiner Kontaktanfrage verwendet werden.",
        submit: "Nachricht senden",
        sending: "Senden...",
        errors: {
          name: "Name ist erforderlich",
          email: "Ungültige E‑Mail",
          topic: "Bitte Betreff auswählen",
          message: "Nachricht muss mindestens 20 Zeichen enthalten",
          consent: "Bitte stimmen Sie der Datenschutzrichtlinie zu"
        }
      },
      reassurance: {
        title: "Absicherung und Transparenz",
        description:
          "Sie wissen genau, was Sie erwartet – mit klarem Follow‑up und verbindlichen Zusagen.",
        items: [
          { title: "Dediziertes Team", desc: "Ein Ansprechpartner und Fachexperten." },
          { title: "Qualität und Sicherheit", desc: "Sichere Prozesse, Compliance und kontinuierliches Monitoring." },
          { title: "Klare Zeitpläne", desc: "Geplant, gemessen und transparent angepasst." }
        ],
        faqs: [
          { q: "Wie schnell erfolgt die Antwort?", a: "Antwort innerhalb von 24 Geschäfts‑Stunden; erstes Cadrage in 3–5 Tagen." },
          { q: "Bieten Sie POC oder Demo an?", a: "Ja. Wir organisieren Demo und geführten POC je nach Kontext." },
          { q: "Arbeiten Sie international?", a: "Ja. Teams decken mehrere Zeitzonen und Sprachen ab." },
          { q: "Wie werden Daten behandelt?", a: "Austausch ist sicher und konform mit Vertraulichkeitsanforderungen." }
        ]
      }
    },
    legalPages: {
      links: { privacy: "Datenschutz", terms: "AGB", mentions: "Impressum", cookies: "Cookie‑Richtlinie" },
      privacy: {
        banner: { eyebrow: "Datenschutz", title: "Transparenter Schutz Ihrer Daten", subtitle: "Wie Finovas Ihre Daten erhebt und verarbeitet." },
        updated: "Letzte Aktualisierung: 30. Januar 2026",
        sections: {
          controller: { title: "1. Verantwortlicher", body: "Finovas ist Verantwortlicher. contact@finovas.com." },
          data: { title: "2. Erhobene Daten", items: ["Identität und Kontakt", "Nachrichteninhalte", "Technische Daten", "Nutzungsdaten und Cookies"] },
          purposes: { title: "3. Zwecke und Rechtsgrundlagen", items: ["Anfragen beantworten", "Dienste und Sicherheit verbessern", "Gesetzliche Pflichten"], body: "Einwilligung, berechtigtes Interesse oder Vertrag." },
          recipients: { title: "4. Empfänger", body: "Autorisierte Teams und Dienstleister mit Vertraulichkeitszusagen." },
          retention: { title: "5. Aufbewahrung", body: "Bis zu 3 Jahre (Kontakt), 12 Monate (Logs); gemäß Regelung." },
          rights: { title: "6. Ihre Rechte", body: "Auskunft, Berichtigung, Widerspruch, Einschränkung, Löschung, Übertragbarkeit." },
          cookies: { title: "7. Cookies", body: "Siehe Cookie‑Richtlinie." },
          updates: { title: "8. Änderungen", body: "Datum steht oben." }
        }
      },
      terms: {
        banner: { eyebrow: "AGB", title: "Rechtlicher Rahmen und Nutzungsbedingungen", subtitle: "Regeln für den Zugang zu unseren Diensten." },
        updated: "Letzte Aktualisierung: 30. Januar 2026",
        sections: {
          object: { title: "1. Zweck", body: "Regelt Zugang und Nutzung der Website." },
          access: { title: "2. Zugriff", body: "24/7 verfügbar außer Wartung/technische Ereignisse." },
          ip: { title: "3. Geistiges Eigentum", body: "Keine Reproduktion ohne Genehmigung." },
          liability: { title: "4. Haftung", body: "Keine Garantie für Fehlerfreiheit oder Unterbrechungen." },
          links: { title: "5. Externe Links", body: "Keine Verantwortung für Drittseiten." },
          data: { title: "6. Personenbezogene Daten", body: "Siehe Datenschutzrichtlinie." },
          law: { title: "7. Anwendbares Recht", body: "Gerichte des Sitzes von Finovas zuständig." },
          contact: { title: "8. Kontakt", body: "contact@finovas.com" }
        }
      },
      mentions: {
        banner: { eyebrow: "Impressum", title: "Rechtliche Informationen und Seitenbetreiber", subtitle: "Betreiber, Hosting und Eigentum." },
        updated: "Letzte Aktualisierung: 30. Januar 2026",
        sections: {
          editor: { title: "Betreiber", items: ["Firma [Zu ergänzen]", "Rechtsform [Zu ergänzen]", "Stammkapital [Zu ergänzen]", "Register [Zu ergänzen]", "USt‑ID [Zu ergänzen]", "Adresse [Zu ergänzen]", "E‑Mail contact@finovas.com"] },
          director: { title: "Verantwortlich für den Inhalt", body: "[Name und Funktion zu ergänzen]" },
          host: { title: "Hosting", items: ["Name [Zu ergänzen]", "Adresse [Zu ergänzen]", "Telefon [Zu ergänzen]"] },
          ip: { title: "Geistiges Eigentum", body: "Geschützte Inhalte; Vervielfältigung verboten." },
          data: { title: "Personenbezogene Daten", body: "Siehe Datenschutzrichtlinie." },
          cookies: { title: "Cookies", body: "Siehe Cookie‑Richtlinie." }
        }
      },
      cookies: {
        banner: { eyebrow: "Cookie‑Richtlinie", title: "Cookies und Präferenzen verwalten", subtitle: "Informationen und Auswahl." },
        updated: "Letzte Aktualisierung: 30. Januar 2026",
        sections: {
          definition: { title: "1. Was ist ein Cookie", body: "Kleine Datei; speichert Präferenzen und analysiert Nutzung." },
          types: { title: "2. Typen", items: ["Essentiell", "Reichweitenmessung", "Funktional", "Marketing"] },
          consent: { title: "3. Einwilligung", body: "Verwaltung über Banner oder Browser." },
          retention: { title: "4. Aufbewahrung", body: "Bis zu 13 Monate; danach Löschung/Erneuerung." },
          contact: { title: "5. Kontakt", body: "contact@finovas.com" }
        }
      }
    },
    footer: {
      brand_title: "Finovas",
      brand_desc: "Finovas entwirft und betreibt hochwertige digitale Plattformen, spezialisiert auf mobile Monetarisierung, VAS-Dienste und großskalige Ökosystem-Integration.",
      columns: [
        { title: "Lösungen", items: ["Mobile Monetarisierung", "Direkte Abrechnung", "VAS-Dienste", "APIs & Plattformen", "Digitale Zahlungen"] },
        { title: "Unternehmen", items: ["Über uns", "Ökosystem", "Warum Finovas", "Partner", "Karriere"] },
        { title: "Ressourcen", items: ["Dokumentation", "Anwendungsfälle", "Sicherheit & Compliance", "Technischer Support"] },
        { title: "Kontakt", items: ["contact@finovas.com", "Geschäft & Partnerschaften", "Institutionelle Beziehungen", "Unternehmenssupport"] }
      ],
      legal: { left: "© Finovas", middle: "Inhalt • Spiel • Spaß", right: "Alle Rechte vorbehalten" }
    }
  }
};

export function LanguageProvider({ children }) {
  // Try to get language from localStorage, default to 'fr'
  const [currentLang, setCurrentLang] = useState(() => {
    const saved = localStorage.getItem('finovas-lang');
    if (saved) {
      const found = languages.find(l => l.code === saved);
      if (found) return found;
    }
    return languages[0];
  });

  const setLanguage = (lang) => {
    const langObj = typeof lang === 'string' 
      ? languages.find(l => l.code === lang) || languages[0] 
      : lang;
      
    setCurrentLang(langObj);
    localStorage.setItem('finovas-lang', langObj.code);
    document.documentElement.lang = langObj.code;
  };

  const t = (path) => {
    const keys = path.split('.');
    let value = translations[currentLang.code];
    for (const key of keys) {
      if (value && value[key]) {
        value = value[key];
      } else {
        // Fallback to French if translation missing
        let fallback = translations['fr'];
        for (const k of keys) {
          if (fallback && fallback[k]) {
            fallback = fallback[k];
          } else {
            return path;
          }
        }
        return fallback;
      }
    }
    return value;
  };

  useEffect(() => {
    document.documentElement.lang = currentLang.code;
  }, [currentLang]);

  return (
    <LanguageContext.Provider value={{ currentLang, setLanguage, languages, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
