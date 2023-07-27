// import React from 'react';


// eslint-disable-next-line react/prop-types
const FeiraItems = ({tipo} ) => {
  const feira = {
    frutas: ['Maçã', 'Banana', 'Laranja'],
    verduras: ['Alface', 'Rúcula', 'Espinafre'],
    legumes: ['Cenoura', 'Batata', 'Abóbora']
  };

  const tipoItems = feira[tipo];

  return (
    <div>
      <ul>
        {tipoItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FeiraItems;


