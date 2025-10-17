import App from "../App";
import Home from "../pages/home/home";

const routes = [
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
];

export default routes;
