import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function PickAddOns({info, setInfo, toggleCircle}) {
    const navigate = useNavigate()

    useEffect(() => {
      if(info.name === "" || info.email === "" || info.phoneNumber === ""){
        navigate("/")
      }
    },[])

    const handleChange = (e) => {
        const {name, checked, parentElement} = e.currentTarget

        setInfo((prev) => (
            {
                ...prev,
                addOns: {
                    ...prev.addOns,
                    [name] : checked
                },
                addOnsInfo: {
                    ...prev.addOnsInfo,
                    [name] : checked ? {
                        addOn: parentElement.children[1].children[0].innerText,
                        price: parentElement.parentElement.children[1].innerText
                    }  : null
                }
            }
        ))
    }

    return (
        <div className="wrapper--parent">
            <div className="wrapper">
                <div className="wrapper--div">
                    <h1>Pick add-ons</h1>
                    <p>Add-ons help enhance your gaming experience.</p>
                    <form action="">
                        <label htmlFor="onlineService">
                            <div className="checkbox">
                                <div>
                                    <input onChange={handleChange} className="checkbox--input" type="checkbox" name="onlineService" id="onlineService" checked={info.addOns.onlineService}/>
                                    <div>
                                        <p className="checkbox--p1">Online service</p>
                                        <p className="checkbox--p2">Access to multiplayer games</p>
                                    </div>
                                </div>
                                <p>{toggleCircle? "+$10/yr" : "+$1/mo"}</p>
                            </div>
                        </label>
                        <label htmlFor="largerStorage">
                            <div className="checkbox">
                                <div>
                                    <input onChange={handleChange} className="checkbox--input" type="checkbox" name="largerStorage" id="largerStorage" checked={info.addOns.largerStorage}/>
                                    <div>
                                        <p className="checkbox--p1">Larger storage</p>
                                        <p className="checkbox--p2">Extra 1TB of cloud save</p>
                                    </div>
                                </div>
                                <p>{toggleCircle? "+$20/yr" : "+$2/mo"}</p>
                            </div>
                        </label>
                        <label htmlFor="customizableProfile">
                            <div className="checkbox">
                                <div>
                                    <input onChange={handleChange} className="checkbox--input" type="checkbox" name="customizableProfile" id="customizableProfile" checked={info.addOns.customizableProfile}/>
                                    <div>
                                        <p className="checkbox--p1">Customizable profile</p>
                                        <p className="checkbox--p2">Custom theme on your profile</p>
                                    </div>
                                </div>
                                <p>{toggleCircle? "+$20/yr" : "+$2/mo"}</p>
                            </div>
                        </label>
                    </form>
                </div>
                <div className="footer">
                    <Link to="/select-your-plan" className="go--back">Go Back</Link>
                    <Link to="/finishing-up" className="next--step">Next Step</Link>
                </div>
            </div>
        </div>
    )
  }
  
  export default PickAddOns