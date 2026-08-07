import { useState } from "react";
import { IMG } from "../../../constants"
import "./header.style.css"
import { useNavigate } from "react-router-dom";

const PAGES = [
    { id: 1, title: "HOME", url: '/' },
    { id: 2, title: "SERVIÇOS", url: '/servicos' },
    { id: 3, title: "CLIENTES", url: "/clientes" },
    { id: 4, title: "CONTATOS", url: '/contato' },
]

export function Header({ page }) {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navigate = useNavigate()

    function handleMenu() {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className="vidalprev-header">
            <a href="#" className="logo-container">
                <div className="logo-img">
                    <img src={IMG.ICON.src} alt={IMG.ICON.alt} />
                </div>
                <div className="logo-text">
                    <h1><span style={{ color: "#D32F2F" }}>VIDAL</span>PREV</h1>
                    <h2>Prevenção contra incêndios</h2>
                </div>
            </a>

            <button className="menu-toggle" onClick={handleMenu} aria-label="Abrir menu">
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            <nav className={`vidalprev-nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
                <ul>
                    {
                        PAGES.map(_page => {
                            const isActive = _page.id === page
                            return <li className={isActive && "active"} onClick={()=>navigate(_page.url)}>
                                <h2>{_page.title}</h2>
                            </li>
                        })
                    }
                </ul>
            </nav>
        </header>
    )

}