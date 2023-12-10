import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom';


export default function Nav() {
    const data = [
        {
            title: 'Главное',
            link: '/',
        },
        {
            title: 'Контент',
            link: '/content',
        },
        {
            title: 'Рейтинг',
            link: '/rating',
        },
        {
            title: 'Тэги',
            link: '/tags',
        },
        {
            title: 'Пагинация',
            link: '/pagination',
        },
    ];
    const [navs]=useState(data)
  return (
            <ul className='navs flex justify-center items-center gap-8'>
                {navs.map((nav, index) => (
                    <li key={index} className='li'>
                        <Link
                            to={nav.link}
                            className='navs'>
                            {nav.title}
                        </Link>
                    </li>
                ))}
            </ul>
  )
}
