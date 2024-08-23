// DescriptifDieux.jsx
import React from 'react';
import S from '../DescriptifDieux/style.module.css'; // Vous pouvez créer un fichier CSS module pour styliser ce composant

const DescriptifDieux = () => {
  return (
    <div className={S.descriptifContainer}>
        <h1 className={S.title}>Les Dieux</h1>
      <p>
        Les dieux nordiques se divisent en deux grandes familles : les Ases et les Vanes.
        Les Ases, régnant principalement à Asgard, sont associés à la guerre, au pouvoir, et à l'ordre cosmique. Les Vanes, quant à eux,
        sont liés à la fertilité, la nature, et la magie. Bien que les deux familles aient leurs différences, elles ont su former des alliances 
        et unir leurs forces pour maintenir l'équilibre du monde. Ensemble, ils veillent sur les neuf mondes de Yggdrasil, et participent activement
        à la vie des hommes. Découvrons ici les Ases, puissants dieux guerriers, et les Vanes, bienveillants et sages, régnant sur la nature et la fertilité.
      </p>
    </div>
  );
};

export default DescriptifDieux;
