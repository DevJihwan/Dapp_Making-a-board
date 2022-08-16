import logo from './logo.svg';
import './App.css';
import getWeb3 from "./getWeb3.js";

function App() {

  function getMetaMaskAddress() {
    let _web3;
    let _metaAccount;

    getWeb3.then(results => {
      console.log("#########Step01.getMetaMaskAddress : results########"+results);
      //받은 결과를 let web3에 저장
      // let _web3 = results;
      _web3 = results;
      _metaAccount = _web3.eth.requestAccounts();
      console.log("#########Step02.getMetaMaskAddress : _metaAccount########"+_metaAccount);
  }).catch(() => {
    console.log("Error finding web3.");
  });
  console.log("#########Step03.getMetaMaskAddress : _metaAccount########"+_metaAccount);
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        <button 
          className="App-link"
          onclick = {getMetaMaskAddress()}
        >
          Get MetaMask Address
        </button>
      </header>
    </div>
  );
}

export default App;
