import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TextInputFormContainer from "../../components/TextInputForm/TextInputFormContainer"

 function StartGame() {
       const navigate = useNavigate();
       function handleFormSubmit(){
          navigate('/play')
       }
    return (
      <div> 

            <h1>Start Game</h1>
            <TextInputFormContainer 
                    onSubmit={handleFormSubmit }
            />


            <Link to='/play'>Play Game</Link>

      </div>
    );
}
export default StartGame;