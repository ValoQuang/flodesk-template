import "./App.css";
import TemplateBuilder from "./components/TemplateBuilder/TemplateBuilder";
import TemplateSelector from "./components/TemplateSelector/TemplateSelector";

function App() {
  return (
    <div className="App">
      <TemplateSelector />
      <TemplateBuilder />
    </div>
  );
}

export default App;
