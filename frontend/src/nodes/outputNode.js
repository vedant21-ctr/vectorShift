import { useState } from 'react';
import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.outputName || id.replace('customOutput-', 'output_'));
  const [type, setType] = useState(data.outputType || 'Text');

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
        { type: 'target', position: Position.Left, id: `${id}-value` }
      ]}
    >
      <div className="node-header">Output</div>
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
            <option value="File">Image</option>
          </select>
        </label>
      </div>
    </BaseNode>
  );
}
