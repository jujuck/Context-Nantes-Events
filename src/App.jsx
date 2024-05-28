import Nav from "./components/partials/Header.jsx";
import Footer from "./components/partials/Footer.jsx";

import "./App.css";

function App({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  );
}

export default App;
