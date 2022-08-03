import  {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './routes'
import Header from "./components/common/Header";
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import './styles/global.scss'
function App() {


  return (
    <>
      <Router>
        <Header/>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
