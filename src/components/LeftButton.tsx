import '../styles/LeftButton.css';

interface LeftButtonProps{
    onBack: () => void
}

function LeftButton({onBack}: LeftButtonProps){
    return(
        <>
            <button onClick={onBack} className='sair'>Sair <div className="img"></div></button>
        </>
    );
    
}

export default LeftButton;