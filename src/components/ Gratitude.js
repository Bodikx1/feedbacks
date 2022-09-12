import access from "../CssModules/SmsAccess.module.css";

export default function Gratitude() {
    return (
        <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <div className={access.body}>
                <h2 style={{marginBottom:'40px'}}>Спасибо!</h2>
                <iframe width="100%" height="200" src="https://www.youtube.com/embed/22qkRslZB_s"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
            </div>
        </div>
    )
}