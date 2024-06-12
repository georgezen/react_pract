export const Pagination = ({ itemsPerPage, totalItems, currentPage, handleClick }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="pagination">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map(number => (
              <button
                key={number}
                id={number}
                onClick={handleClick}
                className={`page-button ${currentPage === number ? 'active-page' : ''}`}
              >
                {number}
              </button>
            ))}
          </div>
  );
}
 