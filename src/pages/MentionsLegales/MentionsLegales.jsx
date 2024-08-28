// src/pages/MentionsLegales/MentionsLegales.jsx
import React from 'react';
import styles from '../MentionsLegales/style.module.css';

const MentionsLegales = () => {
  return (
    <div className={`page-background ${styles.mentionsContainer}`}> {/* Même style de fond que LesDieux.jsx */}
      <h1>Mentions Légales</h1>
      <section>
        <h2>Propriétaire du site</h2>
        <p>
          Nom du site : Yggdrasil
          <br />
          Propriétaire : FON**** Lucile
          <br />
          Adresse : ** RUE ** ***** ***** 3****
          <br />
          Téléphone : 06 ** ** ** **
          <br />
          Email : fon****.******@gmail.com
        </p>
      </section>
      
      <section>
        <h2>Responsable de la publication</h2>
        <p>
          Nom : Fon****
          <br />
          Email : fon****.******@gmail.com
        </p>
      </section>

      <section>
        <h2>Hébergement</h2>
        <p>
          Hébergeur : OVH
          <br />
          Site web : https://www.ovhcloud.com/fr/
        </p>
      </section>

      <section>
        <h2>Propriété intellectuelle</h2>
        <p>
          Le contenu du site Yggdrasil (textes, images, etc.) est protégé par les lois en vigueur sur la propriété intellectuelle.
          Toute reproduction, distribution, modification, adaptation ou publication de tout ou partie du site, sans l'autorisation préalable écrite de l'auteur, est strictement interdite.
        </p>
      </section>

      <section>
        <h2>Collecte de données</h2>
        <p>
          Le site Yggdrasil ne collecte pas de données personnelles à des fins commerciales. Les informations éventuellement recueillies via les formulaires de contact sont utilisées uniquement pour répondre à vos demandes et ne sont pas partagées avec des tiers.
        </p>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Le site Yggdrasil utilise des cookies pour améliorer votre expérience utilisateur. Un cookie est un petit fichier texte déposé sur votre ordinateur lors de la visite d'un site. Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait limiter certaines fonctionnalités du site.
        </p>
      </section>

      <section>
        <h2>Contact</h2>
        <p>
          Pour toute question ou demande d'information concernant les mentions légales du site Yggdrasil, vous pouvez nous contacter à l'adresse suivante : Yggdrasil@gmail.com
        </p>
      </section>
    </div>
  );
};

export default MentionsLegales;


