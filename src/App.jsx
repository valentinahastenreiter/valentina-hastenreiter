import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productsList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context.js";

const App = () => {

  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  return <div>
    <Toggle/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
   </div>
};

export default App;