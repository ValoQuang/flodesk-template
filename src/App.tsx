import "./App.css";
import { TemplateProvider } from "./AppContextProvider";
import TemplateSelector from "./pages/TemplateSelector";

function App() {
  return (
    <TemplateProvider>
      <div className="App">
        <TemplateSelector />
      </div>
    </TemplateProvider>
  );
}

export default App;
