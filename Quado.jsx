
import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState('');
  const [anotacoes, setAnotacoes] = useState([]);
  const [selecaoCor, setselecaoCor] = useState('#ffffff');
  const [pegarBackground, setpegarBackground] = useState(false);

  function handleChance(e) {
    setCount(e.target.value);
  }

  function add() {
    if (count) {
      setAnotacoes([...anotacoes, count]);
      setCount('');
    }
  }

  const handleColorChange = (e) => {
    setselecaoCor(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setpegarBackground(e.target.checked);
  };

  const styles = {
    backgroundColor: pegarBackground ? selecaoCor : '',
    color: pegarBackground ? '' : selecaoCor,
  };

  return (
    <>
      <textarea name="anotação" id="" cols="30" rows="5" value={count} onChange={handleChance}></textarea>
      <h2>Configurar Cor:</h2>
      <div>
        <label>
          Escolha a cor:
          <input type="color" value={selecaoCor} onChange={handleColorChange} />
        </label>
      </div>
      <div>

        <label>
          Trocar cor de fundo:
          <input type="checkbox" checked={pegarBackground} onChange={handleCheckboxChange} />
        </label>
      </div>
      
      <h2 style={styles}>Lista de Anotações:</h2>
      <ul style={styles}>
        {anotacoes.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <button onClick={add}>Adicionar Anotações</button>
    </>
  );
}

export default App;

