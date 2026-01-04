import { Position } from 'reactflow';
import { BaseNode } from './BaseNode';
import { useState } from 'react';

export const APINode = ({ id, data }) => {
    const [url, setUrl] = useState(data.url || 'https://api.example.com');
    const [method, setMethod] = useState(data.method || 'GET');

    return (
        <BaseNode
            id={id}
            data={data}
            handles={[
                { type: 'target', position: Position.Left, id: `${id}-params` },
                { type: 'source', position: Position.Right, id: `${id}-response` }
            ]}
        >
            <div className="node-header">API Request</div>
            <div>
                <label>
                    URL:
                    <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
                </label>
                <label>
                    Method:
                    <select value={method} onChange={(e) => setMethod(e.target.value)}>
                        <option value="GET">GET</option>
                        <option value="POST">POST</option>
                    </select>
                </label>
            </div>
        </BaseNode>
    );
}
