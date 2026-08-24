import { IMG, ICONS, SERVICES_IMG } from "../../../constants";
import { ButtonPrimary, ChatButton, ContainerScreen, Footer, Header } from "../../components";
import "./services.style.css";

const SERVICES = [
    {
        id: 1,
        title: "PPCI",
        description: "Projeto de Prevenção e Combate a Incêndio.",
        img: SERVICES_IMG.SERVICE_1,
        icon: ICONS.CHECKLIST,
    },
    {
        id: 2,
        title: "LAUDOS TÉCNICOS",
        description: "Emissão de laudos e ARTs com responsabilidade técnica.",
        img: SERVICES_IMG.SERVICE_1,
        icon: ICONS.PAPERS,
    },
    {
        id: 3,
        title: "EXTINTORES",
        description: "Novos e recargas com certificados e garantia.",
        img: SERVICES_IMG.SERVICE_1,
        icon: ICONS.EXTINGUISHER,
    },
    {
        id: 4,
        title: "TREINAMENTOS RT15",
        description: "Treinamentos práticos e teóricos conforme Norma RT15.",
        img: SERVICES_IMG.SERVICE_1,
        icon: ICONS.TRAINING,
    },
    {
        id: 5,
        title: "ALARMES DE INCÊNDIO",
        description: "Instalação, manutenção e adequação de sistemas.",
        img: SERVICES_IMG.SERVICE_1,
        icon: ICONS.ALARM,
    },
    {
        id: 6,
        title: "HIDRANTES E SPK",
        description: "Instalação e manutenção de hidrantes e sistemas de chuveiros automáticos (SPK).",
        img: SERVICES_IMG.SERVICE_1,
        icon: ICONS.HYDRANT,
    },
]

function ServiceCard({ service }) {
    return (
        <div className="service-card">
            <img src={service.icon.src} alt={service.icon.alt} className="service-icon" />
            <img src={service.img.src} alt={service.img.alt} />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
        </div>
    )
}

export function ServicesScreen() {
    return (
        <ContainerScreen>
            <div className="services-screen">
                <Header page={2} />
                <main className="container-main">
                    <section className="services-section">
                        <h1>NOSSOS SERVIÇOS</h1>
                        <ul className="services-list">
                            {
                                SERVICES.map(service => {
                                    return <ServiceCard service={service}/>
                                })
                            }
                        </ul>
                    </section>
                    <Footer />
                </main>
                <ChatButton />
            </div>
        </ContainerScreen>
    );
}