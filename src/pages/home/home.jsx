import { Outlet } from "react-router";
import Header from "../../components/Header/header";

function Home() {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
}

export default Home;
