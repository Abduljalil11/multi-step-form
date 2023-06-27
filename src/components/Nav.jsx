import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav({setError}) {

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
    <nav>
        <div>
            <NavLink onClick={handleClick} to="/" className={({isActive}) => isActive? "nav-linkActive" : "nav-link"} >
                <span>1</span>
            </NavLink>
            <div className='circle--info'>
                <p>STEP 1</p>
                <h5>YOUR INFO</h5>
            </div>
        </div>
        <div>
            <NavLink onClick={handleClick} to="/select-your-plan" className={({isActive}) => isActive? "nav-linkActive" : "nav-link"} >
                <span>2</span>
            </NavLink>
            <div className='circle--info'>
                <p>STEP 2</p>
                <h5>SELECT PLAN</h5>
            </div>
        </div>
        <div>
            <NavLink onClick={handleClick} to="/pick-add-ons" className={({isActive}) => isActive? "nav-linkActive" : "nav-link"} >
                <span>3</span>
            </NavLink>
            <div className='circle--info'>
                <p>STEP 3</p>
                <h5>ADD-ONS</h5>
            </div>
        </div>
        <div>
            <NavLink onClick={handleClick} to="/finishing-up" className={({isActive}) => isActive? "nav-linkActive" : "nav-link"} >
                <span>4</span>
            </NavLink>
            <div className='circle--info'>
                <p>STEP 4</p>
                <h5>SUMMARY</h5>
            </div>
        </div>
    </nav>
  )
}

export default Nav