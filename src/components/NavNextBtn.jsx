export default function NavNextBtn({ page, setPage, nextPage }) {
  return (
    <div>
      {nextPage ? (
        <button
          className="btn btn-outline-info"
          onClick={() => setPage(page + 1)}
        >
          Siguiente
        </button>
      ) : (
        <button className="btn btn-outline-info" disabled>
          Siguiente
        </button>
      )}
    </div>
  )
}
