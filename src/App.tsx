import logo from "./Assets/logo.png"
import immobilier from "./Assets/immobilier.png";
import './App.css';
import LoginAccount from "./Components/login";

function App() {
  return (
    <div className="App">
    
        <div className="create-account-container"> 
         <div className='logo'>
            <img src={logo} alt="logo" />
            <p>
               Luxe Living RealEstate
            </p>
            
         </div>
         <div className="form-final">
         <LoginAccount />
         </div>

      </div>
      <div className='image-container'>
        <img src={immobilier} alt="immobilier" />
        </div>
       
    
    
    </div>
  );
}

export default App;
