import React from 'react';
import './LandingPage.css';
const LandingPage = () => {
    return (
        <div className='LandingPage'>

            {/* <div className='name'>
                <em>Group-3</em>
            </div> */}
            <div className='Landing'>

                <div className='heading'>
                    <h1>Contact Manager Project</h1>
                </div>
                <div className='btn'>

                    <button type='submit' ><a href="/login">Click to Start..</a></button>
                </div>
            </div>
        </div>
    )
}
export default LandingPage;