import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ListItem from './components/ListItem';

function App() {
  const [content, setContent] = useState([]);

  const fetchContent = () => {
    axios
      .get('http://localhost:3001/days')
      .then(r => {
        setContent(r.data.reverse())
      })  
  }

  useEffect(fetchContent, []);

  return (
    <div>
      {
        content.map(el => 
          <ListItem key={el.id} content={el}></ListItem>
        ) 
      }
    </div>
  );
}

export default App;
