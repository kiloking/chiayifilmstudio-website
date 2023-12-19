
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
      <Routes> 
        <Route path="/" element={<Plan01Section/> } />
        <Route path="/plan2" element={<Plan02Section/> } />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
}

export default App;
