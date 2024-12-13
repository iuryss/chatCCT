import LeftButton from "../components/LeftButton";
import NextButton from "../components/NextButton";
import '../styles/information.css';

interface InformationProps{
    onBack: () => void,
    onNext: () => void
}

function Information({onBack, onNext}: InformationProps){
    return (
        <>
            <div className="informationContainer">
                <div className="informationLeft">
                    <LeftButton onBack={onBack}/>
                </div>
                <div className="informationText">
                    <p>Insira sua matricula:</p>
                </div>
                <div className="informationInfo">
                    <input type="text" id="entrada"/>
                </div>
                <div className="informationNext">
                    <NextButton onNext={onNext}/>
                </div>
            </div>
        </>
    );
}

export default Information;