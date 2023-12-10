import React from 'react';

const PaginationComponent = ({ countArticles, limit }) => {
  const totalPages = Math.ceil(countArticles / limit);
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
      <div>
    <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      {pages.map((page) => (
         <li class="page-item" key={page}><a class="page-link" href="#">{page}</a></li>
      ))}
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
      </ul>
</nav>
</div>
  );
}

export default PaginationComponent;