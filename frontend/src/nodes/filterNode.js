import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useState } from 'react';

export const FilterNode = ({ id, data }) => {
    const [filterCondition, setFilterCondition] = useState(data.condition || 'contains');

    return (
        <BaseNode
            id={id}
            data={data}
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-input` },
                { type: 'source', position: Position.Right, id: `${id}-passed` },
                { type: 'source', position: Position.Bottom, id: `${id}-failed` }
            ]}
        >
            <div className="node-header">Filter</div>
            <div>
                <label>
                    Condition:
                    <select value={filterCondition} onChange={(e) => setFilterCondition(e.target.value)}>
                        <option value="contains">Contains</option>
                        <option value="equals">Equals</option>
                        <option value="starts-with">Starts With</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
