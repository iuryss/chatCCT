import '../styles/chat.css';
import LeftButton from '../components/LeftButton';
import QuestionButton from '../components/QuestionButton';
function Chat(){
    return(
        <>
            <div className="container">
                <div className="top">
                    <div className="left">
                        <LeftButton />
                    </div>

                    <div className="question">
                        <input type="text" value='Sua dúvida está dentro de algum desses tópicos?' readOnly id='firstQuestion'/>
                        <div className="communsquestions">
                            <QuestionButton text='Frequência'/>
                            <QuestionButton text='PMG'/>
                            <QuestionButton text='Conclusão'/>
                        </div>
                    </div>
                </div>
                <div className="bottom">
                    <input type="text" placeholder='Digite a sua pergunta:' id="usersQuestions" />
                    <button className='sender'></button>
                </div>
            </div>
        </>
    );
}

export default Chat;