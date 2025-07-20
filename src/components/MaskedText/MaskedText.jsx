import { getAllCharacters } from './MaskedTextUtility';

function MaskedText({text,usedLetters}){
    const letter = getAllCharacters(text,usedLetters).split('');
    return (
        <> 
            <div>
               {letter.map((letter,index)=>{
                    return (
                        <span 
                          key={`letter-${index}`}
                          className="inline-block mx-1"
                        > 
                           {letter}
                        </span>
                    )
                    }
               )} 
            </div>
        </>
    )
}
export default MaskedText;




//output _ _ _ b _ e
// word - humble , usedLetters - ['b''e'];
// what should be the input text of the components
// text , usedLetters
