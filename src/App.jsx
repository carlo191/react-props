import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Card from "./components/card";
import Footer from "./components/footer";
import { posts } from "./data/posts";

function App() {
  return (
    <>
      <body id="body">
        {/* Header */}
        <Header />

        {/* Titolo del blog */}
        <h1 className="text-center p-3">Il mio blog</h1>
        <main>
          {/* Card centrata */}
          <div className="d-flex justify-content-center mt-2">
            <div className="container">
              <div className="row">
                {/* Filtro per mostrare solo i post pubblicati */}
                {posts
                  .filter((post) => post.published === true) // Mostra solo i post con `published: true`
                  .map((post) => (
                    <div className="col-md-4 mb-4" key={post.id}>
                      <Card
                        id={post.id}
                        title={post.title}
                        image={post.image}
                        content={post.content}
                        tags={post.tags}
                        published={post.published}
                      />
                    </div>
                  ))}
              </div>
            </div>
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
