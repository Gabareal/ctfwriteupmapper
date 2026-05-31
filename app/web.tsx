'use client'

import { ReactFlow, Background, Controls } from '@xyflow/react';
import React, { useCallback, useState } from 'react';
import '@xyflow/react/dist/style.css';
import Handles from './components/customNode/customNode'
import StraightEdge from './components/straightEdge/straightEdge';
import Overlay from './components/overlay/overlay'

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
            description: "RSA IS SO FUN!!!"
        },
        type: "default",
        position: {x: 500, y: 1000},
    },
];

const topics = [
    {
        name: "RSA",
        category: "Cryptography",
        description: "I love RSA!"
    }
]

const initialEdges = [
    {
      id: 'cat1-t1',
      source: 'cat1',
      target: 't1',
      type: 'default',
    },
];

const edgeTypes = {
    'straightEdge': StraightEdge,
};

const nodeTypes = { 
    customHandles: Handles
}

// Showing web-like structure
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

function showContent(desc) {
    console.log(desc)
}

const onNodeClick = (event,node) => {
    console.log('click node', node)
}


export default function Web() {  
    // do loading

    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const [nodeData, setNodeData] = useState(false);
    return (
        <div style={{ height: '100vh', width: '100vw', background: "white", color: "black"}}>
            <Overlay 
                data={nodeData}
            />
            <ReactFlow 
                nodes={nodes} 
                edges={edges}
                nodeTypes={nodeTypes}
                edgeTypes={edgeTypes}
                onNodeClick={(event,node) => {
                    if (nodeData == node.data) {
                        setNodeData(false)
                    } else {
                        setNodeData(node.data)
                    }
                }}
                fitView
            />
        </div>
    );
}