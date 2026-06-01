import './overlay.css'
import { useState } from "react";
import { marked } from 'marked';
import ReactMarkdown from "react-markdown";
// Import element definition
import ZeroMd from 'zero-md'

// Register custom element
customElements.define('zero-md', ZeroMd)

// Render anywhere


export default function Overlay({ data }) {
    var parsedtext = 'none'
    if (data) {
        const src = `app/files/${data.label}.md`
        var text = fetch(src)
        if (!text.ok) {
          throw new Error(`text status: ${text.status}`);
        }
        const rawtext = text.text()
        var parsedtext = marked.parse(rawtext)
    } 
    return (
        <div id="overlay" style={{display: data ? 'block' : 'none'}}>
            <zero-md src={src}></zero-md>
        </div>
    );
}