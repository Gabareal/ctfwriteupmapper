import { Handle, Position } from '@xyflow/react';
import showContent from './web'
import './node.css'

export default function Handles({ data }) {
    return (
        <div onClick={showContent}>
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