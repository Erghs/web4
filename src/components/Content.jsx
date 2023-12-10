import React from 'react'
import Alert from './content/Alert'
import Button from './content/Button'
import Card from './content/Card'
import Nav from './content/Nav';
import { useState } from 'react';
import Input from './content/Input';
import Title from './content/Title';
export default function Content() {
    const data = [
        {
            text: 'Home',
            active: 'active',
        },
        {
            text: 'Lib',
            active: 'active',
        },
        {
            text: 'Liva',
            active: 'active',
        },
        {
            text: 'Home',
            active: '',
        },
        {
            text: 'Hi',
            active: '',
        },
    ];
    const [navs]=useState(data)
    
  return (
    <div className="content">
        <Alert text="Это основное уведомление" style="alert-secondary"/>
        <Alert text="Это основное уведомление 2" style="alert-success"/>
        <Alert text="Это основное уведомление 3" style="alert-dark"/>
        <Button type="btn-outline-success" text ="Кнопка"/>
        <Button type="btn-primary btn-lg" text ="Кнопка 2"/>
        <Button type="btn-primary" text ="Кнопка 3"/>
        <Card title="Заголовок" 
        src='https://kartinkof.club/uploads/posts/2022-09/1662431382_14-kartinkof-club-p-novie-i-krasivie-kartinki-puma-20.jpg'
         p="Забавные картинки, заставки для рабочего стола, схемы и иллюстрированные инструкции - ответы на ваши вопросы в виде изображений" 
         href="https://yandex.ru/"/>
         <Nav navs={navs}/>
         <Input type="text" placeholder="Enter your name" value="" />
         <Title text="Hello, World!" size="large" color="blue" />



    </div>
  )
}
