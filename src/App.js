import './App.css';
import onlineLogo from './assets/images/online.png'
import linkedIn from './assets/images/Logo Linkedin.svg'

function App() {
  return (
    <div className="App">
      <header className="blueGradientTop">
        <div>
          <p>Jayanth Saikiran</p>
          <div className="onlineStatus">
            <img src={onlineLogo} className="onlineStatusImage" />
            <p className="onlineStatusValue">Now Available</p>
          </div>
        </div>
        <img src={linkedIn} />
      </header>
      <body>
        
      </body>
    </div>
  );
}

export default App;
