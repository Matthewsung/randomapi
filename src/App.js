import './App.css';
import Snap from './component/Snap'
import Section1 from './component/Section1'
import Section2 from './component/Section2'
function App() {
  return (
    <div className="wrap">
      <div className="Screen">
        <Snap />
        <Section1 />
        <Section2 />
      </div>
    </div>
  );
}

export default App;
