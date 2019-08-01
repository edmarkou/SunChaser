import React from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);


    // cia tavo aplikacijos state (busena, kurioje gali saugoti kintamuosius visokius), 
    // kai ta kintamaji pakeiti, puslapis automatiskai reaguoja ir atsinaujina su ta informacija
    this.state = {
      count: 0
    }
  }

  // cia tavo funkcija kazkokia, kurioje this.setState() updatina busena aplikacijos 
  // duodama nauja objekta p.s. tas 'this' nusako konteksta kieno state nustatineti, labai svarbu tas this
  pakeistTeksta() {
    this.setState({count: this.state.count + 1})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {/* cia tekstas tavo busenos rodomas, tie '{ }' yra tam kad html atpazintu jog cia kazkoks kintamasis o ne tekstas tiesiog*/}
        <p>Times clicked: {this.state.count}</p> 
        {/* yra daxuja visokiu event handleriu pasigooglint galesi, siuo atveju rodau onClick, 
        tai tiesiog kai paspaudi mygtuka, jis iskviecia funkcija kuri yra viduje, 
        vel this yra labai svarbu, nes turi nurodyti konteksta kur ta funkcija, kitaip neras tau jos, nesupras ko nori */}
        <button onClick={() => this.pakeistTeksta()}>Update text</button>
      </div>
    );
  }
}

