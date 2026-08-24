import { useNavigate } from "react-router-dom"
import { ICONS } from "../../../constants"
import { WHATSAPP_CONTACT_1 } from "../../../constants/contact.constant"
import "./chat-button.style.css"

export function ChatButton() {
    const WHATSAPP_URL = `https://wa.me/${WHATSAPP_CONTACT_1.NUMBER}?text=${encodeURIComponent(WHATSAPP_CONTACT_1.DEFAULT_MESSAGE)}`
    

    return (
        <div className="chat-container">
            <a className="chat-icon-container" href={WHATSAPP_URL} target="_blanked">
                <img src={ICONS.CHAT.src} alt={ICONS.CHAT.alt} />
            </a>
        </div>
    )

}