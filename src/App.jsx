import { Route, Routes } from "react-router-dom";
import Header from "./components/layout/header/Header";
import Main from "./components/pages/main/Main";
import Footer from "./components/layout/footer/Footer";

const App = () => {
  const router = [
    {
      id: 1,
      paht: "/",
      element: <Main />,
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
