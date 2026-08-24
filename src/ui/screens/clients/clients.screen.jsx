import { CLIENTS_IMG, IMG, PROJECTS_IMG } from "../../../constants";
import { ButtonPrimary, ChatButton, ContainerScreen, Footer, Header } from "../../components";
import "./clients.style.css";

const CLIENTS = [
    {id: 1, img: CLIENTS_IMG.SANTANDER},
    {id: 2, img: CLIENTS_IMG.KLEIN_VILLE},
    {id: 3, img: CLIENTS_IMG.PERNAMBUCANAS},
    {id: 4, img: CLIENTS_IMG.HABIBS},
    {id: 5, img: CLIENTS_IMG.MABY},
    {id: 6, img: CLIENTS_IMG.PULSE}
]

const PROJECTS = [
    {id: 1, img: PROJECTS_IMG.PROJECT_1},
    {id: 2, img: PROJECTS_IMG.PROJECT_1},
    {id: 3, img: PROJECTS_IMG.PROJECT_1},
    {id: 4, img: PROJECTS_IMG.PROJECT_1},
    {id: 5, img: PROJECTS_IMG.PROJECT_1},
    {id: 6, img: PROJECTS_IMG.PROJECT_1},
]

export function ClientsScreen() {
    return (
        <ContainerScreen>
            <div className="clients-screen">
                <Header page={3} />
                <main className="container-main">
                    <h1>CLIENTES QUE CONFIAM NA <span style={{ color: "#D32F2F" }}>VIDAL</span>PREV</h1>
                    <ul className="clients-list">
                        {
                            CLIENTS.map(client=> {
                                return (
                                    <div
                                    key={client.id}
                                    className="client-card"
                                    style={client.id % 2 === 0 ? {backgroundColor: '#d3d3d3'} : null}
                                    >
                                        <img src={client.img.src} alt={client.img.alt} />
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <h2>E muitos outros clientes atendidos em todo o <span style={{ color: "#D32F2F" }}>Rio Grande do Sul</span></h2>


                    <h1>PORTFÓLIO DE PROJETOS</h1>
                    <ul className="projects-list">
                        {
                            PROJECTS.map(project=> {
                                return (
                                    <div
                                    key={project.id}
                                    className="project-card"
                                    >
                                        <img src={project.img.src} alt={project.img.alt} />
                                    </div>
                                )
                            })
                        }
                    </ul>
                    <Footer />
                </main>
                <ChatButton />
            </div>
        </ContainerScreen>
    );
}