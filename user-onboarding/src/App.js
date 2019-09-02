import React, {useState} from 'react';
import './App.css';

import Form from './components/Form.js';

function App() {
  const [users, setUsers] = useState([]);

  const addUser = (props) => {
    setUsers([...users, props]);
  }
  
  return (
    <div className="App">
      <Form addUser={addUser} />
    </div>
  );
}

export default App;
