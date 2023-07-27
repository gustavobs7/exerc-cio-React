import  { useState } from 'react';

function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([]);

  const pegarNome = (event) => {
    setName(event.target.value);
  };

  const PegarPhone = (event) => {
    setPhone(event.target.value);
  };

  const addContact = () => {
    if (name && phone) {
      const newContact = {
        name,
        phone,
      };

      setContacts([...contacts, newContact]);
      setName('');
      setPhone('');
    }
  };

  return (
    <div>
      <h2>Agenda de Contatos</h2>
      <div>
        <label>
          Nome:
          <input type="text" value={name} onChange={pegarNome} />
        </label>
      </div>
      <div>
        <label>
          Telefone:
          <input type="text" value={phone} onChange={PegarPhone} />
        </label>
      </div>
      <button onClick={addContact}>Adicionar Contato</button>

      <h2>Lista de Contatos:</h2>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>
            <strong>Nome:</strong> {contact.name}, <strong>Telefone:</strong> {contact.phone}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
