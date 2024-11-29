import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Card from "./card";
import Footer from "./components/footer";

function App() {
  return (
    <>
      {" "}
      <body id="body">
        {/* Header */}
        <Header />

        {/* Titolo del blog */}
        <h1 className="text-center p-3">Il mio blog</h1>
        <main>
          {/* Card centrata */}
          <div className="d-flex justify-content-center mt-2">
            <Card />
          </div>
        </main>
        {/* Footer */}
        <footer id="footer">
          <Footer />
        </footer>
      </body>
    </>
  );
}

export default App;
