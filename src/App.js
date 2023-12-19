
import { BrowserRouter , Routes, Route ,useLocation,Hashrouter} from 'react-router-dom';
import Header from "./Header";
import Footer from './Footer';
import Plan01Section from "./plan01/Section01";
import Plan02Section from "./plan02/Section01"
import ScrollToTopButton from './Components/ScrollToTopButton';
function App() {

  return (
    <BrowserRouter>

      <Header />
      <Plan01Section />
      <Plan02Section />
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
