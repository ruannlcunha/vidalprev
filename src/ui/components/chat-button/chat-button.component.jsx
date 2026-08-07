import { useNavigate } from "react-router-dom"
import { IMG } from "../../../constants"
import { WHATSAPP_CONTACT } from "../../../constants/contact.constant"
import "./chat-button.style.css"

export function ChatButton() {
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_CONTACT.NUMBER}?text=${encodeURIComponent(WHATSAPP_CONTACT.DEFAULT_MESSAGE)}`
    

    return (
        <div className="chat-container">
            <a className="chat-icon-container" href={WHATSAPP_URL} target="_blanked">
                <img src={IMG.CHAT.src} alt={IMG.CHAT.alt} />
            </a>
        </div>
    )

}