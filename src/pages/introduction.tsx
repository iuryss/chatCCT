import '../styles/introduction.css'
import NextButton from '../components/NextButton';
interface IntroductionProps {
    onNext: () => void; 
}

function Introduction({ onNext }: IntroductionProps){
        return (
            <>
                <div className="introductioContainer">
                    <div className="introduction">
                        <p>Tem alguma dúvida sobre o curso?<br/>Converse comigo!</p>
                    </div>
                    <div className="introductionBottom">
                        <NextButton onNext={onNext}/>
                    </div>
                    <div className="moemaIntroduction"></div>
                </div>
            </>
        );
    }

export default Introduction;