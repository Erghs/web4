import React from 'react'
import PaginationComponent from './PaginationComponent';


export default function Pagination() {
const countArticles = 49;
  const limit = 10;  
  return (
    <div className="pagination">
        <PaginationComponent countArticles={countArticles} limit={limit} />
    </div>
  )
}
