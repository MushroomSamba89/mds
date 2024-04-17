import Element from './Element';


function InputText ({label, size=12}){
    function handleChange(event) {
        console.log(event.target.value)
    }
    return <Element columns={size}>
        <label>
            {label}
        </label>
        <input type="text" onChange={e => handleChange(e)} />
    </Element>
}
export default InputText