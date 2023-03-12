import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import routes from './routes'
import { useRoutes } from "react-router-dom";

function App() {
  let router = useRoutes(routes)
  return (
    <div>
      <Navigation />
      <Header />
      {router}
    </div>
  );
}

export default App;
