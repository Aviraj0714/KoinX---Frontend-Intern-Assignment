import Header from "./components/header";
import Home from "./page/home";


function App() {
  return (
    <div className="app-container">
      {/* Navigation Bar */}
      <Header/>
      
      {/* Main Page Content */}
      <Home/>
    </div>
  );
}

export default App;
