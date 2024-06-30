import './App.css';
import SyntaxHighlighter from './SyntaxHighlighter';
import LanguageSelecter from './LanguageSelecter';
import React, {useState, useContext} from 'react';

function App() {
  const [language, setLanguage]=useState('jsx');

  return (
    <div className="App">
      <div style={{marginBottom:'50px'}}>
        <div className='main-header'>
          Simple Syntax Highlighter <br/>
          <span style={{color:'white',fontSize:'14px'}}>
            Created by : Joedeep Singh
          </span>
        </div>
      
        <LanguageSelecter language={language} setLanguage={setLanguage} />
        <SyntaxHighlighter language={language} />

      </div>
    </div>
  );
}

export default App;
