import { BaseNode } from './BaseNode';
import { useState } from 'react';

export const NoteNode = ({ id, data }) => {
    const [note, setNote] = useState(data.note || 'Add a note...');

    return (
        <BaseNode
            id={id}
            data={data}
        >
            <div className="node-header" style={{ color: '#fbbf24' }}>Note</div>
            <div>
                <textarea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    style={{ minHeight: '60px', backgroundColor: '#fffbeb', color: '#000' }}
                />
            </div>
        </BaseNode>
    );
}
