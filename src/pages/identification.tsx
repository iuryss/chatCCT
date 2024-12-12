import '../styles/identification.css'
import LeftButton from '../components/LeftButton';

function Identification(){
    return (
        <>
            <div className="container">
                <div className="top">
                    <LeftButton />
                </div>
                <div className="midlle">
                    <p>Deseja se identificar?</p>
                </div>
                <div className="bottom">
                    <button>Sim</button>
                    <button>Não</button>
                </div>
            </div>
        </>
    );
}

export default Identification;