import LeftButton from "../components/LeftButton";
import NextButton from "../components/NextButton";
import '../styles/information.css';

function Information(){
    return (
        <>
            <div className="container">
                <div className="left">
                    <LeftButton />
                </div>
                <div className="text">
                    <p>Insira sua matricula</p>
                </div>
                <div className="info">
                    <input type="text" id="entrada"/>
                </div>
                <div className="next">
                    <NextButton />
                </div>
            </div>
        </>
    );
}

export default Information;