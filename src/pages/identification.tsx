import '../styles/identification.css'
import LeftButton from '../components/LeftButton';

interface IdentificationProps{
    onBack: () => void,
    onNext: () => void,
    jumpNext: () => void
}
function Identification({onBack, onNext, jumpNext}: IdentificationProps){
    return (
        <>
            <div className="idetificationContainer">
                <div className="idetificationTop">
                    <LeftButton onBack={onBack}/>
                </div>
                <div className="idetificationMidlle">
                    <p>Deseja se identificar?</p>
                </div>
                <div className="idetificationBottom">
                    <button className='idetificationButton' onClick={onNext}>Sim</button>
                    <button className='idetificationButton' onClick={jumpNext}>Não</button> 
                </div>
            </div>
        </>
    );
}

export default Identification;