import React, {useState} from 'react'

const LanguageSelecter = ({language, setLanguage}) => {

  const languages = [
    "jsx",
    "tsx",
    "swift",
    "kotlin",
    "objectivec",
    "js-extras",
    "reason",
    "rust",
    "graphql",
    "yaml",
    "go",
    "cpp",
    "markdown"
  ];

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };
  
  return (
    <>
      <div style={{width:'70%', margin:'auto', marginBottom:'20px'}}>
        <label htmlFor="language-selector" style={{color:'darkblue'}}>Select a language: </label>
        <select
          id="language-selector"
          value={language}
          onChange={handleChange}
          className='language-selector'
        >
          {languages.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  )
}

export default LanguageSelecter