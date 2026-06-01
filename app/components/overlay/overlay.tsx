import './overlay.css'
import ReactMarkdown from "react-markdown"

export default function Overlay({ data }) {
    return (
        <div id="overlay" style={{display: data ? 'block' : 'none'}}>
            <h1>{data.label}</h1>
            <p>{data.description}</p>
        </div>
    );
}