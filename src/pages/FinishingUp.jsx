import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function FinishingUp({info, toggleCircle}) {
    const navigate = useNavigate()

    useEffect(() => {
      if(info.name === "" || info.email === "" || info.phoneNumber === ""){
        navigate("/")
      }
    },[])

    const addOns = Object.values(info.addOnsInfo)
    
    let total = 0

    total += info.plan.price.replace(/[^\d]/g, "") * 1

    addOns.map(e => {
      if(e === null){
        return
      }
      total += e.price.replace(/[^\d]/g, "") * 1
    })

    return (
      <div className="wrapper--parent">
        <div className="wrapper">
            <div className="wrapper--div">
              <h1>Finishing up</h1>
              <p>Double-check everything looks OK before confirming.</p>
              <div className="finishingUp--div">
                <div className="finishingUp--plan">
                    <div>
                        <p className="finishingUp--plan--p">{info.plan.type} ({info.plan.duration})</p>
                        <Link to="/select-your-plan" className="change">change</Link>
                    </div>
                    <p className="finishingUp--plan--price">{info.plan.price}</p>
                </div>
                <div className="finishingUp--add-ons">
                    {addOns.map((e)  => {
                      if (e === null){
                        return
                      }
                      return (
                        <div key={addOns.indexOf(e)} className="add-ons">
                            <p className="add-ons--p">{e.addOn}</p>
                            <p className="add-ons--price">{e.price}</p>
                        </div>
                      )
                    })}
                </div>
              </div>
              <div className="total">
                <p className="total--p">Total (per month)</p>
                <p className="total--price">{`${toggleCircle? "":"+"}$${total}/${toggleCircle? "yr":"mo"}`}</p>
              </div>
            </div>
            <div className="footer">
                <Link to="/pick-add-ons" className="go--back">Go Back</Link>
                <a href="/thank-you" className="confirm">Confirm</a>
            </div>
        </div>
      </div>
    )
  }
  
  export default FinishingUp