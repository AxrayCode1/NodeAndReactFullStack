// SurveyField contains label and input
import React from 'react';

export default ({ input, label, meta: { error, touched } }) => {    
    return(
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '.5rem' }}/>
            <div className="red-text" style={{marginBottom: '2rem'}}> 
                {touched && error}               
            </div>            
        </div>
    );
};