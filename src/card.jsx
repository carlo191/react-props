export default function Card({ id, title, image, content, tags, published }) {
  // Mappa di colori per i tag
  const tagColors = {
    html: "success", // verde
    css: "danger", // rosso
    js: "warning", // giallo
    php: "info", // azzurro
  };

  return (
    <div className="card">
      {/* Immagine dinamica  */}
      <img
        src={image || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={title || "Immagine del post"}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>

        <p className="card-text">{content}</p>

        <a href={"#"} className="btn btn-warning text-light">
          Leggi di più
        </a>

        {/* Se i tag sono presenti, mostrali con il colore giusto */}
        {tags && tags.length > 0 && (
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className={`badge bg-${tagColors[tag] || "secondary"} me-1`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
