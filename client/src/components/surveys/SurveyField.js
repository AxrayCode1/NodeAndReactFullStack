// SurveyField contains label and input
import React from 'react';

export default ({ input, label }) => {    
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
        </div>
    );
};