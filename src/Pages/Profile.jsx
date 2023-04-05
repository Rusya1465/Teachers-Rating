import React from 'react'
import '../styles/Profile.css'
import { useState } from 'react'

function Profile() {

    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return (
        <div className="profile--wrapper">
            <h2>Hello, &#123;username&#125;</h2>
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
                            <p>&#123;user email&#125;</p>

                        </div>
                        <div className="profile--tab-content--heading">

                            <h3>Password:</h3>
                            <p>&#123;user password&#125;</p>
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