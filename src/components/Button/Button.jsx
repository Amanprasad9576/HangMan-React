import getButtonStyling from './getStyleType';

function Button({ text,buttonType ='button', styleType, onClickHandler }) {
  return (
     <button
       type={buttonType}
       onClick={onClickHandler} 
       className={`bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ${getButtonStyling(styleType)}`}
     >
         {text}
     </button>
   );
}

export default Button;



// what should be the input for the Button function 
// 1. styleType: string 
// 2. text : string 
// 3. buttonType
// 4. onClickHandler 