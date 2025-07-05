import React from 'react';
import { useState } from 'react';



const FormReader = ({schema}) => {
    const [formData, setFormData] = useState({});
    const handleChange = (field, value) => { 
        setFormData(
            (prev)=> ({...prev, [field]:value})
        );
    };
    const renderfield = (field,type) => {
        return (
            <div key={field} style={{marginBottom :"10px"}}>
                <label>{field}:</label>
                <br/>
                <input
                    type={type}
                    onChange={(e)=>
                    handleChange(field, type === "checkbox" ? e.target.checked : e.target.value)
                    }
                />
            </div>
        );
    };
    return(
        <div>
            <h1>Enter your Data</h1>
            <form>
                {Object.entries(schema).map(([field, type]) => renderfield(field,type))}
            </form>
            <h2>Live Output</h2>
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
    );
};

export default FormReader;