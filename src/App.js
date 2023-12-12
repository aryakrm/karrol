import './App.css';
import Layout from "./components/Layout/Layout.jsx";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';



function App() {

  return (
    <div className="App">
      <Cursor isGelly={true} />
     <Layout/>
    </div>
  );
}

export default App;
