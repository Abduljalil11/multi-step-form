import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SelectYourPlan({info, setInfo, toggleCircle, setToggleCircle}) {
    const navigate = useNavigate()

    useEffect(() => {
      if(info.name === "" || info.email === "" || info.phoneNumber === ""){
        navigate("/")
      }
    },[])

    const handleCircleClick = (e) => {
      setToggleCircle(prev => !prev)
    }

    const handlePlanClick = (e) => {
      const {children} = e.currentTarget
      setInfo((prev) => (
        {
          ...prev,
          plan: {
            type:children[1].children[0].innerText,
            duration:toggleCircle ? "Yearly" : "Monthly",
            price:children[1].children[1].innerText
          }
        }
      ))
    }
    
    useEffect(() => {
      setInfo(prev => prev)
    },[toggleCircle])

    return (
      <div className="wrapper--parent">
        <div className="wrapper">
            <div className="wrapper--div">
              <h1>Select your plan</h1>
              <p>You have the option of monthly or yearly billing.</p>
              <div className="plans">
                <div className={info.plan.type === "Arcade" ? "planActive" : "plan"} onClick={handlePlanClick}>
                  <img src="./assets/images/icon-arcade.svg" alt="" />
                  <div className="new--div">
                    <p className="plan--p">Arcade</p>
                    <p className="plan--price">{toggleCircle? "$90/yr" : "$9/mo"}</p>
                    {toggleCircle && <p className="free">2 months free</p>}
                  </div>
                </div>
                <div className={info.plan.type === "Advanced" ? "planActive" : "plan"} onClick={handlePlanClick}>
                  <img src="./assets/images/icon-advanced.svg" alt="" />
                  <div className="new--div">
                    <p className="plan--p">Advanced</p>
                    <p className="plan--price">{toggleCircle? "$120/yr" : "$12/mo"}</p>
                    {toggleCircle && <p className="free">2 months free</p>}
                  </div>
                </div>
                <div className={info.plan.type === "Pro" ? "planActive" : "plan"} onClick={handlePlanClick}>
                  <img src="./assets/images/icon-pro.svg" alt="" />
                  <div className="new--div">
                    <p className="plan--p">Pro</p>
                    <p className="plan--price">{toggleCircle? "$150/yr" : "$15/mo"}</p>
                    {toggleCircle && <p className="free">2 months free</p>}
                  </div>
                </div>
              </div>
              <div className="period">
                <div>
                  <p className="monthly" style={{color: toggleCircle? "hsl(231, 11%, 63%)" : "hsl(213, 96%, 18%)"}}>Monthly</p>
                  <div className="toggle--button" onClick={handleCircleClick}><div className={toggleCircle ? "tiny--circle--yearly" : "tiny--circle--monthly"}></div></div>
                  <p className="yearly" style={{color: toggleCircle? "hsl(213, 96%, 18%)" : "hsl(231, 11%, 63%)"}}>Yearly</p>
                </div>
              </div>
            </div>
            <div className="footer">
                <Link to="/" className="go--back">Go Back</Link>
                <Link to="/pick-add-ons" className="next--step">Next Step</Link>
            </div>
        </div>
      </div>
    )
  }
  
  export default SelectYourPlan