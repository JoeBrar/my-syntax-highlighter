import React, { useState } from 'react';
import { Highlight, themes } from "prism-react-renderer"

const SyntaxHighlighter = ({language}) => {
  const [code, setCode] = useState('// Write your code here');
  const [textareaHeight, setTextareaHeight]=useState(200);

  const changeText=(ev)=>{
    setCode(ev.target.value);

    let previousScrollHeight = ev.target.scrollHeight;
    setTextareaHeight(Math.max(previousScrollHeight-20, 200));
  }

  return (
    <div style={{}}>
      <div className='highlighter-outer'>
        <textarea
          className='highlighter-textarea'
          value={code}
          onChange={changeText}
          style={{ height: `${textareaHeight}px` }}
        />
        <div
          className='highlighter-inner'
          aria-hidden="true"
        >
          <Highlight
            theme={themes.shadesOfPurple}
            code={code}
            language={language}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <pre style={{...style,margin:'0px',padding:'10px',minHeight: `${textareaHeight}px`}}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })} style={{whiteSpace:'break-spaces', wordWrap:'break-word'}}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        </div>
      </div>
    </div>
  );
};

export default SyntaxHighlighter;
