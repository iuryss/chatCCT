import '../styles/NextButton.css';

interface NextButtonProps{
    onNext: () => void; 
}


function NextButton({onNext}: NextButtonProps){
    return (
        <>
            <button onClick={onNext}>Próximo <div className="img"></div></button>
        </>
    );
}

export default NextButton;