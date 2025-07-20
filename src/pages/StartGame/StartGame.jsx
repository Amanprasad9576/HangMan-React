import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer"

 function StartGame() {
    const navigate = useNavigate();
    function handleFormSubmit(value){
        navigate('/play', { state: {wordSelected: value}});
    }
    return (
      <div> 
            <h1>Start Game</h1>
            <TextInputFormContainer 
                onSubmit={handleFormSubmit }
            />

      </div>
    );
}
export default StartGame;