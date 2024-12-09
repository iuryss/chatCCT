import '../styles/identification.css'

function Identification(){
    return (
        <>
            <div className="container">
                <div className="top">
                    <button>Sair <div className="img"></div></button>
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