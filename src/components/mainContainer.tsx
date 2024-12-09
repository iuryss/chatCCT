import Header from './header'
import '../styles/mainContainer.css'
import Introduction from '../pages/introduction'
import Identification  from '../pages/identification';
import { useState } from 'react';

function MainContainer(){

    const [currentComponent, setCurrentComponent] = useState('Introduction');

    return (
        <>
            <div className="container">
                <Header />
                <div className="main">
                    {currentComponent === 'Introduction' && (
                        <Introduction key="Introduction" onNext={() => setCurrentComponent('Identification')} />
                    )}
                    {currentComponent === 'Identification' && <Identification key="Identification" />}
                </div>
            </div>
        </>
    )
}

export default MainContainer