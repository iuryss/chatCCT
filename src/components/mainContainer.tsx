import Header from './header'
import '../styles/mainContainer.css'
import Introduction from './introduction'

function MainContainer(){
    return (
        <>
            <div className="container">
                <Header />
                <div className="main">
                    <Introduction />
                </div>
            </div>
        </>
    )
}

export default MainContainer