import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useState } from 'react';

export const TransformNode = ({ id, data }) => {
    const [transformType, setTransformType] = useState(data.transformType || 'Map');

    return (
        <BaseNode
            id={id}
            data={data}
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-input` },
                { type: 'source', position: Position.Right, id: `${id}-output` }
            ]}
        >
            <div className="node-header">Transform</div>
            <div>
                <label>
                    Operation:
                    <select value={transformType} onChange={(e) => setTransformType(e.target.value)}>
                        <option value="Map">Map</option>
                        <option value="Reduce">Reduce</option>
                        <option value="Filter">Filter</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
