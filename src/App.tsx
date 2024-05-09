import "./App.css";
import TemplateBuilder from "./pages/TemplateBuilder";
import TemplateSelector from "./pages/TemplateSelector";

function App() {
  return (
    <div className="App">
      <TemplateSelector />
      <TemplateBuilder />
    </div>
  );
}

export default App;
