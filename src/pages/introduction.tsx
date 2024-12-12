import '../styles/introduction.css'
import NextButton from '../components/NextButton';
// interface IntroductionProps {
//     onNext: () => void; 
// }



// function Introduction({ onNext }: IntroductionProps){
//     return (
//         <>
//             <div className="container">
//                 <div className="introduction">
//                     <p>Tem alguma dúvida sobre o curso?</p>
//                     <p>Converse comigo!</p>
//                 </div>
//                 <button onClick={onNext}>Próximo <div className="img"></div></button>
//             </div>
//         </>
//     );
// }

function Introduction(){
        return (
            <>
                <div className="container">
                    <div className="introduction">
                        <p>Tem alguma dúvida sobre o curso?</p>
                        <p>Converse comigo!</p>
                    </div>
                    <div className="bottom">
                        <NextButton />
                    </div>
                    
                </div>
            </>
        );
    }

export default Introduction;