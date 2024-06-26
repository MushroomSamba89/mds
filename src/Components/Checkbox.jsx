import React, {useState} from "react";

function Checkbox (){
    const [isChecked, setIsChecked] = useState(false);
    const handleChange = (event)=> {
        setIsChecked(event.target.checked);
    };

    return(
        <div>
            <input type="checkbox" checked={isChecked} onChange={handleChange} />
            <label>Spunta casella</label>
        </div>
    )
}

export default Checkbox