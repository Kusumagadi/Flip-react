// import logo from './logo.svg';
import './App.css';
import Searchbar from './components/Searchbar.js'
import Menu from './components/Menu.js'
import  Banner from './components/banner.js'
import Products from './components/Products.js'
import Forms from './components/Forms.js'


import './css/bootstrap.css'

function App() {
  return (
   <>
   <div className='container-fluid'>
        <div className='row sample'>
                <Searchbar/>
                <Menu/>
                <Banner/>
                <Products/>
                <Forms/>

        </div>
   </div>
   </>
  );
}

export default App;

