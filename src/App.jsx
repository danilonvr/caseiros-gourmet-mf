import  {BrowserRouter as Router} from 'react-router-dom'
import AppRoutes from './routes'
import Header from "./components/common/Header";
import Footer from './components/common/Footer';
import './styles/global.scss'
function App() {


  return (
    <>
      <Router>
        <Header/>
        <AppRoutes/>
        <Footer/>
      </Router>
    </>
  )
}

export default App
