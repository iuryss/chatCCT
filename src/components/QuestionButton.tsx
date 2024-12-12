import '../styles/questionButton.css';

interface QuestionButtonProps {
    text: string;
}

function QuestionButton({ text }: QuestionButtonProps){
    return (
        <>
            <button className='questionButton'>{text}</button>
        </>
    );
}

export default QuestionButton;