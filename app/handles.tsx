import { Handle, Position } from '@xyflow/react';

export default function Handles({ data }) {
    return (
        <div>
            <div>
                {data.label}
            </div>
            <Handle type="source" position={Position.Top} id="HandleTop"/>
            <Handle type="source" position={Position.Bottom} id="HandleBottom"/>
            <Handle type="source" position={Position.Left} id="HandleLeft"/>
            <Handle type="source" position={Position.Right} id="HandleRight"/>
        </div>
    );
}