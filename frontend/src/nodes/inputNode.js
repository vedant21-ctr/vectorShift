import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.inputName || id.replace('customInput-', 'input_'));
  const [type, setType] = useState(data.inputType || 'Text');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  return (
    <BaseNode
      id={id}
      data={data}
      handles={[
        { type: 'source', position: Position.Right, id: `${id}-value` }
      ]}
    >
      <div className="node-header">Input</div>
      <div>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
          />
        </label>
        <label>
          Type:
          <select value={type} onChange={handleTypeChange}>
            <option value="Text">Text</option>
            <option value="File">File</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
