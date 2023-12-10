import React from 'react'

export default function Card(props) {
    
  return (
    <div class="card">
  <img src={props.src} class="card-img-top" alt="альт"/>
  <div class="card-body">
    <h5 class="card-title">{props.title}</h5>
    <p class="card-text">{props.p}</p>
    <a href={props.href} class="btn btn-primary">Переход куда-нибудь</a>
  </div>
</div>
  )
}
