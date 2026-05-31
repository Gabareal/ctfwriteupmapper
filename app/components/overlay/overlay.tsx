import './overlay.css'

export default function Overlay({ data }) {
    return (
        <div id="overlay" style={{display: data ? 'block' : 'none'}}>
            <h1>{data.label}</h1>
            <p>{data.description}</p>
        </div>
    );
}