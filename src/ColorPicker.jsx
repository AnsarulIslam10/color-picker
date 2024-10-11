import React, {useState} from "react"
function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF");

    function handleColorChange(e){
        setColor(e.target.value);
    }

    function copyToClipboard(){
        navigator.clipboard.writeText(color).then(()=>{
            // alert("color code coppied to ")
        }).catch(err => {
            console.error(err)
        })
    }
    return(
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{backgroundColor: color, cursor: "pointer"}} onClick={copyToClipboard}>
                <p>{color}</p>
            </div>
            <label htmlFor="">Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    )
}
export default ColorPicker