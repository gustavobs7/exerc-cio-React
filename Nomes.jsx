import { useState } from 'react';

function Nomes() {
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [totalSobrenome, settotalSobrenome] = useState(0);

  const pegarValorInput = (event) => {
    const value = event.target.value;
    setFullName(value);

    const namesArray = value.split(' ');
    setFirstName(namesArray[0]);
    settotalSobrenome(namesArray.length - 1);
  };

  return (
    <div>
      <textarea
        placeholder="Digite seu nome completo"
        value={fullName}
        onChange={pegarValorInput}
      />
      <p>Primeiro nome: {firstName}</p>
      <p>Total de sobrenomes: {totalSobrenome}</p>
      <div>
      <button onClick={pegarValorInput}>Reiniciar</button>
      </div>
    </div>
  );
}

export default Nomes;
