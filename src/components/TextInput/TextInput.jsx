// Logical layer
function TextInput({label, type="text", onChange,value}){
    return (
        <>
           <label className="block">
               {label && <span className="text-gray-700 ">{label}</span>}
             <input 
                className="px-4 py-2 border border-gray-800 rounded-md w-full"
                onChange={onChange}
                placeholder={label}
                value={value}
                type={type} 
             />
           </label>
        </>
    );
}
export default TextInput;

// What should be the expected input of the component function ?
// text
// label
// onChange
// value
