import { Handle } from 'reactflow';

export const BaseNode = ({ id, data, children, handles = [] }) => {
    return (
        <div className="base-node">
            {handles.map((handle, index) => (
                <Handle
                    key={`${id}-${handle.id}-${index}`}
                    type={handle.type}
                    position={handle.position}
                    id={`${id}-${handle.id}`}
                    style={{
                        ...handle.style,
                    }}
                />
            ))}

            <div className="base-node-content">
                {children}
            </div>
        </div>
    );
};
