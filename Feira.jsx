import { useState } from 'react';
import FeiraItems from './FeiraItems';

const FeiraDisplay = () => {
  const [selecionarTipo, setselecionarTipo] = useState('');

  const Escolha = (e) => {
    setselecionarTipo(e.target.value);
  };

  return (
    <div>
      <h1>Escolha uma categoria:</h1>
      <div>
        <label>
          <input
            type="radio"
            value="frutas"
            checked={selecionarTipo === 'frutas'}
            onChange={Escolha}
          />
          Frutas
        </label>
        <label>
          <input
            type="radio"
            value="verduras"
            checked={selecionarTipo === 'verduras'}
            onChange={Escolha}
          />
          Verduras
        </label>
        <label>
          <input
            type="radio"
            value="legumes"
            checked={selecionarTipo === 'legumes'}
            onChange={Escolha}
          />
          Legumes
        </label>
      </div>
      {selecionarTipo === 'frutas' ? <div> <h4>Frutas:</h4><FeiraItems tipo="frutas"/></div> : 
      selecionarTipo === 'verduras' ? <div> <h4>Verduras:</h4><FeiraItems tipo="verduras"/></div> :
      selecionarTipo === 'legumes' ? <div> <h4>Legumes:</h4><FeiraItems tipo="legumes"/></div> : <h4>Selecione uma categoria!</h4>
      }
    </div>
  );
};

export default FeiraDisplay;

