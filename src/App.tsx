import './styles/App.css'
import Header from './components/header'
import Introduction from './pages/introduction'
import Identification from './pages/identification'
import Information from './pages/information'
import Chat from './pages/chat'
import { useState } from 'react';


function App() {
 
  const [currentComponent, setCurrentComponent] = useState('Introduction');

  return (
      <>
          <div className="container">
              <Header />
              <div className="main">
                {currentComponent === 'Introduction' && (
                        <Introduction key="Introduction" onNext={() => setCurrentComponent('Identification')} />
                    )}
                {currentComponent === 'Identification' && (<Identification key="Identification" onBack={() => setCurrentComponent('Introduction')} onNext={() => setCurrentComponent('Information')} jumpNext={() => setCurrentComponent('Chat')}/>)}
                {currentComponent === 'Information' && <Information key="Information" onBack={() => setCurrentComponent('Introduction')} onNext={() => setCurrentComponent('Chat')}/>}
                {currentComponent === 'Chat' && <Chat onBack={() => setCurrentComponent('Introduction')}/> }
              </div>
          </div>
      </>
  )
}

export default App
