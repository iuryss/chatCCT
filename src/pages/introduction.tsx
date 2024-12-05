import '../styles/introduction.css'

interface IntroductionProps {
    onNext: () => void; 
}



function Introduction({ onNext }: IntroductionProps){
    return (
        <>
            <div className="container">
                <div className="introduction">
                    <p>Tem alguma dúvida sobre o curso?</p>
                    <p>Converse comigo!</p>
                </div>
                <button onClick={onNext}>Próximo <div className="img"></div></button>
            </div>
        </>
    );
}

export default Introduction;