import content from "../db.json"
import ListItem from './components/ListItem';

function App() {
  return (
    <div>
      {
        content.days.map((el, id) => <ListItem key={id} content={el}></ListItem>) 
      }
    </div>
  );
}

export default App
