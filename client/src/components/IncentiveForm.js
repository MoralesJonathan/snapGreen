import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import './AddEvent.css'

function IncentiveForm(){
    const isBusiness = localStorage.getItem("user");
    const [incetiveName, handleIncentiveNameChange] = useState("");
    const [imageUrl, handleImageUrlChange] = useState("");

    function handleSubmit(e){
        e.preventDefault();
    }
    return(
        <React.Fragment>
        {!isBusiness ? <Redirect to="/app" /> : null}
        <div className="container-contact100">
            <div className="wrap-contact100">
                <form className="contact100-form validate-form" onSubmit={handleSubmit}>
                    <span className="contact100-form-title">Create Community Incentive</span>

                    <div className="wrap-input100">
                        <input className="input100" type="text" name="Incentive Name" value={incetiveName} onChange={handleIncentiveNameChange} placeholder="Incentive Name" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="wrap-input100">
                        <input className="input100" name="imageUrl" value={imageUrl} onChange={handleImageUrlChange} placeholder="Image URL" />
                        <span className="focus-input100"></span>
                    </div>

                    <div className="container-contact100-form-btn">
                        <button className="contact100-form-btn" type="submit">Add Incentive</button>
                    </div>
                </form>
            </div>
        </div>
    </React.Fragment>
    )
}

export default IncentiveForm;