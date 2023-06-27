import { useNavigate, Link } from "react-router-dom";
import { useEffect } from "react";

function PersonalInfo({info, setInfo, error, setError}) {
    const navigate = useNavigate()

    useEffect(() => {
      if(info.name === "" || info.email === "" || info.phoneNumber === ""){
        navigate("/")
      }
    },[])
    
    const handleChange = (e) => {
        const {value, name} = e.target
        setInfo((prev) => (
            {
                ...prev,
                [name]: value
            }
        ))

        setError(prev => (
            {
                ...prev,
                [`${name}Error`]: value === ""? "This field is required" : ""
            }
        ))
    }

    //const errorArr = Object.values(error)

    const handleClick = (e) => {    
        Array.from(document.querySelectorAll(".text--input")).map(i => {
            if(i.value === ""){
                e.preventDefault()
                setError(prev => (
                    {
                       ...prev,
                       [`${i.name}Error`]: "This field is required"
                    }
                ))
            }
        })   
    
    }

  return (
    <div className="wrapper--parent">
        <div className="wrapper">
            <div className="wrapper--div">
                <h1>Personal info</h1>
                <p>Please provide your name, email address, and phone number.</p>
                <form action="">
                    <div>
                        <div className="input--top">
                            <label className="text--label" htmlFor="name">Name</label>
                            <p className="error">{error.nameError}</p>
                        </div>
                        <input onChange={handleChange} className="text--input" type="text" id="name" name="name" placeholder="e.g. Stephen King" value={info.name}/>
                    </div>
                    <div>
                        <div className="input--top">
                            <label className="text--label" htmlFor="email">Email Address</label>
                            <p className="error">{error.emailError}</p>
                        </div>
                        <input onChange={handleChange} className="text--input" type="email" id="email" name="email" placeholder="e.g. stephenking@lorem.com" value={info.email}/>
                    </div>
                    <div>
                        <div className="input--top">
                            <label className="text--label" htmlFor="phoneNumber">Phone Number</label>
                            <p className="error">{error.phoneNumberError}</p>
                        </div>
                        <input onChange={handleChange} className="text--input" type="text" id="phoneNumber" name="phoneNumber" placeholder="e.g. +1 234 567 890" value={info.phoneNumber}/>
                    </div>
                </form>
            </div>
            <div className="footer--1">
                <Link to="/select-your-plan" onClick={handleClick} className="next--step">Next Step</Link>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo