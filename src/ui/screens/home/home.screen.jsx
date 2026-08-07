import { IMG } from "../../../constants";
import { ButtonPrimary, ChatButton, ContainerScreen, Footer, Header } from "../../components";
import "./home.style.css";

export function HomeScreen() {
    return (
        <ContainerScreen>
            <div className="home-screen">
                <Header page={1} />
                <main className="container-main">
                    <div className="main-sections">
                        <section className="left-section">
                            {window.innerWidth > 768 ? <div className="title-container">
                                <img src={IMG.ICON.src} alt={IMG.ICON.alt} />
                                <section className="title-text">
                                    <p>INSTALAÇÃO | MANUTENÇÃO | PROJETOS</p>
                                    <h1><span style={{ color: "#D32F2F" }}>VIDAL</span>PREV</h1>
                                    <h2>Prevenção contra incêndios</h2>
                                </section>
                            </div>
                                : null}
                            <div className="text-container">
                                <h1>PROTEÇÃO MODERNA E PREVENÇÃO CONTRA INCÊNDIOS</h1>
                                <h2>Segurança contra incêndios com laudos técnicos e equipe certificada.</h2>
                            </div>
                            <ButtonPrimary fontSize={20}>SOLICITAR ORÇAMENTO</ButtonPrimary>
                        </section>
                        <section className="right-section">
                            <div className="home-img-container">
                                <img src={IMG.HOME_IMG.src} alt={IMG.HOME_IMG.alt} />
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