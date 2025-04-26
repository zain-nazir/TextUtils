import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import About from './Components/About'
import TextForm from './Components/TextForm'
import Alert from './Components/Alert';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState('dark');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
  }
 /* const toggleMode = ()=> {
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor = "gray"
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = "light"
    }
  }*/
    const toggleMode = () => {
      const newMode = mode === "light" ? "dark" : "light";
      setMode(newMode);
    
      document.body.style.backgroundColor = newMode === "dark" ? "#042743" : "white";
      if (newMode === "dark") {
        showAlert("Dark mode has been enabled!","success");
        document.title = "TextUtils-Dark Mode"
      } else {
        showAlert("Light mode has been enabled!","success");
        document.title = "TextUtils-Light Mode"
      }
    
      // Automatically remove alert after 2 seconds
      setTimeout(() => setAlert(null), 2000);
    };

  return (
   <> 
   <BrowserRouter>
   <NavBar title = "TextUtils" aboutText = "About" mode = {mode} toggleMode = {toggleMode}/>
    <Alert alert = {alert}/>
      <Routes>
        <Route path="/" element={<TextForm heading = "Enter Your Text Here" showAlert={showAlert} mode = {mode}/>} />
        <Route path="/About" element={<About />} />
      </Routes>
    </BrowserRouter>
   </> 
  )
}

export default App
