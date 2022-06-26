export default function NavPrevBtn({ page, setPage, prevPage }) {
  return (
    <div>
      {prevPage ? (
        <button
          className="btn btn-outline-info"
          onClick={() => setPage(page - 1)}
        >
          Anterior
        </button>
      ) : (
        <button className="btn btn-outline-info" disabled>
          Anterior
        </button>
      )}
    </div>
  )
}
