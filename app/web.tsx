'use client'

import { ReactFlow, Background, Controls } from '@xyflow/react';
import { useCallback, useState } from 'react';
import '@xyflow/react/dist/style.css';
import Handles from './handles'
import StraightEdge from './straightEdge';

const categories = [
    {name: "Forensics"},
    {name: "Cryptography"},
    {name: "Pwn / Binary exploitation"},
    {name: "Web exploitation"},
    {name: "Reverse Engineering"},
    {name: "General Skills"},
]

const initialNodes = [
    {
        id: "root",
        data: {
            label: "Cybersecurity", 
        },
        type: "customHandles",
        position: {x: 500, y: 500},
    },
    {
        id: "t1",
        data: {
            label: "RSA", 
        },
        type: "default",
        position: {x: 500, y: 1000},
    },
];

const initialEdges = [
    {
      id: 'cat2-t1',
      source: 'cat2',
      target: 't1',
      sourceHandle: 'null',
    },
];

const edgeTypes = {
    'straightEdge': StraightEdge,
};

const nodeTypes = { customHandles: Handles}
const distance = 300
var root_x = initialNodes[0].position.x
var root_y = initialNodes[0].position.y
let category_amount = categories.length;

for (let i = 0; i < categories.length; i++) {
    let angle = 2 * Math.PI / category_amount * i
    let set_sourceHandle = 'HandleTop'
    let set_targetPosition = 'bottom'
    if (angle < Math.PI * 0.25 || angle > Math.PI * 1.75) {
        set_sourceHandle = 'HandleRight'
        set_targetPosition = 'left'
    } else if (angle > Math.PI * 0.25 && angle < Math.PI * 0.75) {
        set_sourceHandle = 'HandleBottom'
        set_targetPosition = 'top'
    } else if (angle > Math.PI * 0.75 && angle < Math.PI * 1.25) {
        set_sourceHandle = 'HandleLeft'
        set_targetPosition = 'right'
    };
    initialNodes.push(
        {
            id: 'cat' + i,
            type: 'default',
            targetPosition: set_targetPosition,
            data: {
                label: categories[i].name
            },
            position: {
                x: Math.round(distance * Math.cos(angle) + root_x),
                y: Math.round(distance * Math.sin(angle) + root_y)
            }
        }
    );
    // determine where arrow goes
    initialEdges.push(
        {
            id: 'root-cat' + i,
            source: 'root',
            sourceHandle: set_sourceHandle,
            target: 'cat' + i,
            type: 'straightEdge'
        }
    );
};

export default function Web() {  
    // do loading

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    return (
        <div style={{ height: '100vh', width: '100vw', background: "white", color: "black"}}>
            <ReactFlow 
                nodes={nodes} 
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                fitView
            />
        </div>
    );
}