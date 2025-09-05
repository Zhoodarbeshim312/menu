import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Main from "./components/pages/main/Main";
import Footer from "./components/layout/footer/Footer";
import Menu from "./components/pages/menu/Menu";

const App = () => {
  const router = [
    {
      id: 1,
      paht: "/",
      element: <Main />,
    },
    {
      id: 2,
      paht: "/menu",
      element: <Menu />,
    },
  ];
  return (
    <div className="app">
      <Header />
      <Routes>
        {router.map((el) => (
          <Route path={el.paht} element={el.element} key={el.id} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
