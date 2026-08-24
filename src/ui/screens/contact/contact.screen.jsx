import { useState } from "react";
import { IMG, ICONS } from "../../../constants";
import { EMAIL_CONTACT, INSTAGRAM_CONTACT, WHATSAPP_CONTACT_1, WHATSAPP_CONTACT_2 } from "../../../constants/contact.constant";
import { ButtonPrimary, ChatButton, ContainerScreen, Footer, Header } from "../../components";
import "./contact.style.css";

const faqItems = [
    {
        question: "Posso solicitar extintores?",
        answer: "Sim! Oferecemos venda, locação, recarga e manutenção preventiva de extintores para empresas, condomínios e indústrias."
    },
    {
        question: "Como funciona a emissão ou renovação do PPCI?",
        answer: "Realizamos uma vistoria presencial no seu imóvel, desenvolvemos o projeto técnico e cuidamos da aprovação junto ao Corpo de Bombeiros."
    },
    {
        question: "Qual a frequência necessária para vistoria técnica?",
        answer: "A recomendação legal é que as vistorias e recargas sejam realizadas anualmente, garantindo o correto funcionamento dos equipamentos."
    },
    {
        question: "Vocês atendem projetos para condomínios?",
        answer: "Atendemos desde condomínios residenciais até grandes complexos industriais e comerciais."
    },
    {
        question: "Como solicitar um orçamento personalizado?",
        answer: "Você pode nos enviar uma mensagem diretamente no WhatsApp, via DM no Instagram ou pelo nosso e-mail."
    },
    {
        question: "Quais certificações os equipamentos possuem?",
        answer: "Todos os nossos equipamentos e laudos seguem rigorosamente as normas ABNT e as exigências do Corpo de Bombeiros Militar."
    }
];

export function ContactScreen() {
    const WHATSAPP_URL_1 = `https://wa.me/${WHATSAPP_CONTACT_1.NUMBER}?text=${encodeURIComponent(WHATSAPP_CONTACT_1.DEFAULT_MESSAGE)}`
    const WHATSAPP_URL_2 = `https://wa.me/${WHATSAPP_CONTACT_2.NUMBER}?text=${encodeURIComponent(WHATSAPP_CONTACT_2.DEFAULT_MESSAGE)}`
    const [openIndex, setOpenIndex] = useState(null);

    function handleToggleAccordion(index) {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <ContainerScreen>
            <div className="contact-screen">
                <Header page={4} />
                <main className="container-main">
                    <div className="main-sections">
                        <section className="left-section">
                                <h1>PERGUNTAS FREQUENTES</h1>
                                <div className="faq-list">
                                    {faqItems.map((item, index) => (
                                        <div
                                            key={index}
                                            className={`faq-item ${openIndex === index ? 'active' : ''}`}
                                            onClick={() => handleToggleAccordion(index)}
                                        >
                                            <div className="faq-question">
                                                <span className={`triangle-icon ${openIndex === index ? 'open' : ''}`}>►</span>
                                                <span className="question-text">{item.question}</span>
                                            </div>
                                            {openIndex === index && (
                                                <div className="faq-answer">
                                                    <p>{item.answer}</p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                            </div>
                        </section>
                        <section className="right-section">
                            <h1>ENTRE EM CONTATO</h1>
                            <a className="contact-card clickable" target="_blanked" href={WHATSAPP_URL_1}>
                                <img src={ICONS.WHATSAPP.src} alt={ICONS.WHATSAPP.alt} />
                                <h2>{"(51) 98948-9245"}</h2>
                            </a>
                            <a className="contact-card clickable" target="_blanked" href={WHATSAPP_URL_2}>
                                <img src={ICONS.WHATSAPP.src} alt={ICONS.WHATSAPP.alt} />
                                <h2>{"(51) 98948-9245"}</h2>
                            </a>
                            <a className="contact-card clickable" target="_blanked" href={INSTAGRAM_CONTACT.URL}>
                                <img src={ICONS.INSTAGRAM.src} alt={ICONS.INSTAGRAM.alt} />
                                <h2>{INSTAGRAM_CONTACT.NICKNAME}</h2>
                            </a>
                            <div className="contact-card">
                                <img src={ICONS.MAIL.src} alt={ICONS.MAIL.alt} />
                                <h2>{EMAIL_CONTACT.MAIL}</h2>
                            </div>
                        </section>
                    </div>
                    <Footer />
                </main>
                <ChatButton />
            </div>
        </ContainerScreen>
    );
}