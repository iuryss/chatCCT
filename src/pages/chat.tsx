import '../styles/chat.css';
import LeftButton from '../components/LeftButton';
import QuestionButton from '../components/QuestionButton';

interface chatProps{
    onBack: () => void
}
function Chat({onBack}: chatProps){
    return(
        <>
            <div className="chatContainer">
                <div className="chatTop">
                    <div className="chatLeft">
                        <LeftButton onBack={onBack}/>
                    </div>

                    <div className="chatQuestion">
                        <input type="text" value='Sua dúvida está dentro de algum desses tópicos?' readOnly id='firstQuestion'/>
                        <div className="communsquestions">
                            <QuestionButton text='Frequência'/>
                            <QuestionButton text='PMG'/>
                            <QuestionButton text='Conclusão'/>
                        </div>
                    </div>
                </div>
                <div className="chatBottom">
                    <input type="text" placeholder='Digite a sua pergunta:' id="usersQuestions" />
                    <button className='sender'></button>
                </div>
            </div>
        </>
    );
}

export default Chat;