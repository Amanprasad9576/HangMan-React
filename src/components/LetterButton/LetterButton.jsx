//const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//letters.split('');

const ALPHABETS = new Array(26).fill(' ').map((e,index)=>String.fromCharCode(65+index));
function LetterButton(){
    const buttons = ALPHABETS.map(letter => {
        return (
            <>
                
            </>
        );
    })

}
export default LetterButton;


// Purpose of this page is only just show 26  letter button 
// 