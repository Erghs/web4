  import React from 'react'
  import TagsComponent from './TagsComponent';
  
  export default function TagsPage() {
    const tags = [
        { title: 'Тег №1', href: 'http://link1.ru'},
        { title: 'Тег №2', href: 'http://link2.ru'},
        { title: 'Тег №3', href: 'http://link3.ru'},
      ];
    return (
        <TagsComponent tags={tags} />
    )
  }
  