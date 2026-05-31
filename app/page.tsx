import Image from "next/image";
import Web from "./web";
import { ReactFlow, Background, Controls } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

export default function Home() {
  return (
    <div style={{ height: '100vh', width: '100vw', background: "white"}}>
      <Web />
    </div>
  );
}
