import { createHashRouter } from "react-router-dom";
import { 
  ClientsScreen,
  ContactScreen,
  HomeScreen,
  RootScreen,
  ServicesScreen,
} from "../ui/screens";

export const router = createHashRouter([
  {
    path: "*",
    element: <RootScreen />,
  },
  { 
    path: `/`,
    element: <RootScreen />,
    children: [
      {
        path: `/`,
        element: <HomeScreen />,
      },
      {
        path: `/clientes`,
        element: <ClientsScreen />,
      },
      {
        path: `/servicos`,
        element: <ServicesScreen />,
      },
      {
        path: `/contato`,
        element: <ContactScreen />,
      },
    ],
  },
]);
