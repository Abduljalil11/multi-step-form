import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { useState, useEffect } from 'react';
import Nav from "./components/Nav";
import PersonalInfo from "./pages/PersonalInfo";
import SelectYourPlan from "./pages/SelectYourPlan";
import PickAddOns from "./pages/PickAddOns";
import FinishingUp from "./pages/FinishingUp";
import ThankYou from './pages/ThankYou';

function App() {
  const [toggleCircle, setToggleCircle] = useState(false)
  const [error, setError] = useState({
    nameError:"",
    emailError: "",
    phoneNumberError: "",
  }) 
  const [info, setInfo] = useState({
    name:"",
    email:"",
    phoneNumber:"",
    plan: {
      type:"Arcade",
      duration:"Monthly",
      price:"$9/mo"
    },
    addOns: {
      onlineService: false,
      largerStorage: false,
      customizableProfile: false
    },
    addOnsInfo: {
      onlineService: null,
      largerStorage: null,
      customizableProfile: null
    }
  })

  useEffect(() => {
    setInfo(prev => (
      {
        ...prev,
        plan: {
          type:"Arcade",
          duration:toggleCircle? "Yearly" : "Monthly",
          price:toggleCircle? "$90/yr" : "$9/mo"
        },
        addOns: {
          onlineService: false,
          largerStorage: false,
          customizableProfile: false
        },
        addOnsInfo: {
          onlineService: null,
          largerStorage: null,
          customizableProfile: null
        }
      }
    ))
    
  },[toggleCircle])

  return (
    <Router>
      <div className="background">
        <main>
          <Nav setError={setError}/>
          <Routes>
            <Route path='/' element={<PersonalInfo info={info} setInfo={setInfo} error={error} setError={setError}/>} />
            <Route path='/select-your-plan' element={<SelectYourPlan info={info} setInfo={setInfo} toggleCircle={toggleCircle} setToggleCircle={setToggleCircle} />} />
            <Route path='/pick-add-ons' element={<PickAddOns info={info} setInfo={setInfo} toggleCircle={toggleCircle} />} />
            <Route path='/finishing-up' element={<FinishingUp info={info} toggleCircle={toggleCircle} />} />
            <Route path='/thank-you' element={<ThankYou />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
