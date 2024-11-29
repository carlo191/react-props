export default function Card({ id, title, image, content, tags, published }) {
  return (
    <div className="card" style={{ width: "20rem", height: "100%" }}>
      {/* Immagine dinamica con fallback */}
      <img
        src={image || "https://via.placeholder.com/150"}
        className="card-img-top"
        alt={title || "Immagine del post"}
      />
      <div className="card-body">
        <h5 className="card-title">{title || "Titolo del Post"}</h5>

        <p className="card-text">
          {content || "Testo di esempio per il contenuto del post."}
        </p>

        <a href={`/post/${id}`} className="btn btn-warning text-light">
          Leggi di più
        </a>

        {tags && tags.length > 0 && (
          <div className="mt-2">
            {tags.map((tag, index) => (
              <span key={index} className="badge bg-secondary me-1">
                {tag}
              </span>
            ))}
          </div>
        )}

        {published && (
          <small className="text-muted">Pubblicato il: {published}</small>
        )}
      </div>
    </div>
  );
}
