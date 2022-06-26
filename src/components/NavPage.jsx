import NavNextBtn from './NavNextBtn'
import NavPrevBtn from './NavPrevBtn'

export default function NavPage({ page, setPage, prevPage, nextPage }) {
  return (
    <header className="d-flex justify-content-between align-items-center bg-outline-info p-2 text-info">
      <NavPrevBtn page={page} setPage={setPage} prevPage={prevPage} />
      <h1>{`página ${page}`}</h1>
      <NavNextBtn page={page} setPage={setPage} nextPage={nextPage} />
    </header>
  )
}
