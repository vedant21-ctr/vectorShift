import { useState, useRef, useEffect } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const TextNode = ({ id, data }) => {
  const [text, setText] = useState(data?.text || '{{input}}');
  const [handles, setHandles] = useState([]);
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [text]);

  useEffect(() => {
    const regex = /\{\{(.*?)\}\}/g;
    const matches = [];
    let match;
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }

    const uniqueVars = [...new Set(matches)];

    const newHandles = [
      { type: 'source', position: Position.Right, id: `${id}-output` }
    ];

    uniqueVars.forEach((variable, index) => {
      const top = 100 / (uniqueVars.length + 1) * (index + 1);
      newHandles.push({
        type: 'target',
        position: Position.Left,
        id: `${id}-${variable}`,
        style: { top: `${top}%` }
      });
    });

    setHandles(newHandles);

  }, [text, id]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      handles={handles}
    >
      <div className="node-header">Text</div>
      <div>
        <label>
          Text:
          <textarea
            ref={textareaRef}
            value={text}
            onChange={handleChange}
            style={{
              width: '100%',
              resize: 'none',
              overflow: 'hidden',
              minHeight: '30px',
              boxSizing: 'border-box'
            }}
          />
        </label>
      </div>
    </BaseNode>
  );
}
