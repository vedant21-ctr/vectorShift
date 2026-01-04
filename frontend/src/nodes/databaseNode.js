import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useState } from 'react';

export const DatabaseNode = ({ id, data }) => {
    const [queryType, setQueryType] = useState(data.queryType || 'Select');

    return (
        <BaseNode
            id={id}
            data={data}
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-query-params` },
                { type: 'source', position: Position.Right, id: `${id}-result` }
            ]}
        >
            <div className="node-header">Database</div>
            <div>
                <label>
                    Operation:
                    <select value={queryType} onChange={(e) => setQueryType(e.target.value)}>
                        <option value="Select">SELECT</option>
                        <option value="Insert">INSERT</option>
                        <option value="Update">UPDATE</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
