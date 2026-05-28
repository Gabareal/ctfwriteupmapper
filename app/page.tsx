import Image from "next/image";
import Web from "./web";
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import Handles from './handles'

const categories = [
  {name: "Forensics"},
  {name: "Cryptography"},
  {name: "Pwn / Binary exploitation"},
  {name: "Web exploitation"},
  {name: "Reverse Engineering"},
  {name: "General Skills"},
]

const topics = [
  {name: "Address Space Layout Randomisation (ASLR)", 
  category: "Pwn / Binary Exploitation", 
  children: []
},
  {name: "XSS", category: "Web exploitation", children: ["Intro to Linux"]},
  {name: "Intro to python", category: "General Skills", children: []},
  {name: "Intro to Linux", category: "General Skills", children: []},
  {name: "Intro to Ghidra", category: "Reverse Engineering", children: []},
  {name: "RSA", category: "Cryptography", children: []},
  {name: "Caesar Cipher", category: "Cryptography", children: []},
]
export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: "white"}}>
      <Web />
    </div>
  );
}
