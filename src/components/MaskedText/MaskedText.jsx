import { getAllCharacters } from "./MaskedTextUtility";

    function MaskedText({ text, usedLetters }) {
        const letters = getAllCharacters(text, usedLetters).split('');
        return (
            <>
                {letters.map((letter, index) => {
                    return (
                        <span key={`letter-${index}`} className="inline-block mx-1 ">{letter}</span>
                    )
                })}
            </>
        )
    }
    

export default MaskedText;




//output _ _ _ b _ e
// word - humble , usedLetters - ['b''e'];
// what should be the input text of the components
// text , usedLetters
