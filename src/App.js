import './App.css';
import Layout from "./components/Layout/Layout.jsx";
import { Cursor } from 'react-creative-cursor';
import 'react-creative-cursor/dist/styles.css';



function App() {

  return (
    <div className="App">
      <Cursor isGelly={true} cursorSize={20} cursorBackgrounColor="#f3c623" exclusionBackgroundColor="#10316b" />
      
     <Layout/>
    </div>
  );
}

export default App;
