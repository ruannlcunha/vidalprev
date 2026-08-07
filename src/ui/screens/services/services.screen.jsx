import { IMG, SERVICES_IMG } from "../../../constants";
import { ButtonPrimary, ChatButton, ContainerScreen, Footer, Header } from "../../components";
import "./services.style.css";

export function ServicesScreen() {
    return (
        <ContainerScreen>
            <div className="services-screen">
                <Header page={2} />
                <main className="container-main">
                    <section className="services-section">
                        <h1>NOSSOS SERVIÇOS</h1>
                        <ul className="services-list">
                            <div className="service-card">
                                <img src={IMG.EXTINGUISHER.src} alt={IMG.EXTINGUISHER.alt} className="service-icon"/>
                                <img src={SERVICES_IMG.SERVICE_1.src} alt={SERVICES_IMG.SERVICE_1.alt} />
                                <h2>VENDA DE EXTINTORES</h2>
                                <ButtonPrimary>SAIBA MAIS</ButtonPrimary>
                            </div>
                            <div className="service-card">
                                <img src={IMG.WRENCH.src} alt={IMG.WRENCH.alt} className="service-icon"/>
                                <img src={SERVICES_IMG.SERVICE_1.src} alt={SERVICES_IMG.SERVICE_1.alt} />
                                <h2>MANUTENÇÃO E RECARGA</h2>
                                <ButtonPrimary>SAIBA MAIS</ButtonPrimary>
                            </div>
                            <div className="service-card">
                                <img src={IMG.PAPERS.src} alt={IMG.PAPERS.alt} className="service-icon"/>
                                <img src={SERVICES_IMG.SERVICE_1.src} alt={SERVICES_IMG.SERVICE_1.alt} />
                                <h2>PROJETOS E LAUDOS TÉCNICOS</h2>
                                <ButtonPrimary>SAIBA MAIS</ButtonPrimary>
                            </div>
                        </ul>
                    </section>
                    <Footer />
                </main>
                <ChatButton />
            </div>
        </ContainerScreen>
    );
}