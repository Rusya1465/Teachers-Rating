import React from 'react'
import '../styles/Profile.css'
import { useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import { auth } from "../firebase"
import {signOut } from "firebase/auth";


function Profile(props) {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    function userSignOut() {
        signOut(auth).then(() => {
            props.setIsUserSignedIn(prevState => !prevState)
            console.log("Signed out")
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className="profile--wrapper">
            <div className="profile--title-wrapper">
                <h2>Hello, &#123;username&#125;</h2>
                <button className="profile--sign-out" onClick={userSignOut}><BiLogOut style={{marginRight: '5px'}}/><span className='profile--sign-out-span'>Sign Out</span></button>
            </div>
            <div className="profile--tabs-wrapper">
                <div className="profile--tabs">
                    <div onClick={() => toggleTab(1)} className={toggleState === 1 ? "profile--tab active-tab" : "profile--tab"}>Profile</div>
                    <div onClick={() => toggleTab(2)} className={toggleState === 2 ? "profile--tab active-tab" : "profile--tab"}>Account Settings</div>
                    <div onClick={() => toggleTab(3)} className={toggleState === 3 ? "profile--tab active-tab" : "profile--tab"}>My ratings</div>
                </div>
                <div className="profile--tabs-content">
                    <div className={toggleState === 1 ? "profile--tab-content active-content" : "profile--tab-content"}>
                        <div className="profile--tab-content--heading">
                            <h3>First Name:</h3>
                            <p>&#123;user firstname&#125;</p>

                        </div>
                        <div className="profile--tab-content--heading">
                            <h3>Last Name:</h3>
                            <p>&#123;user lastname&#125;</p>

                        </div>
                        <div className="profile--tab-content--heading">
                            <h3>School:</h3>
                            <p>&#123;user school&#125;</p>

                        </div>
                        <div className="profile--tab-content--heading">
                            <h3>Graduation Year:</h3>
                            <p>&#123;user graduation year&#125;</p>

                        </div>
                    </div>
                    <div className={toggleState === 2 ? "profile--tab-content active-content" : "profile--tab-content"}>
                        <div className="profile--tab-content--heading">
                            <h3>Email:</h3>
                            <p>{props.userEmail}</p>

                        </div>
                        <div className="profile--tab-content--heading">

                            <h3>Password:</h3>
                            <p>{props.userPassword}</p>
                        </div>
                    </div>
                    <div className={toggleState === 3 ? "profile--tab-content active-content" : "profile--tab-content"}>
                        <h3>You haven’t rated any professors yet.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile