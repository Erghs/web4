import React from 'react'

export default function Nav({navs}) {
  return (
    <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
  {navs.map((nav, index) => (
    <li key={index} className={`breadcrumb-item ${nav.active}`} aria-current="page"><a href="#">{nav.text}</a></li>))
  }
  
  </ol>
</nav>
  )
}
