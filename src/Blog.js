import React from 'react';
import './Blog.css';

const Blog = () => {
  const posts = [
    {
      title: 'El arte de lo cotidiano',
      date: '12 de diciembre de 2025',
      content: 'Hoy pinté una taza rota. Me recordó que incluso las cosas más simples tienen historias que contar.'
    },
    {
      title: 'Luz y sombra',
      date: '10 de diciembre de 2025',
      content: 'La luz de la tarde entra por la ventana y transforma todo. Es un recordatorio de que la belleza está en los detalles.'
    },
    {
      title: 'El silencio del estudio',
      date: '8 de diciembre de 2025',
      content: 'El silencio en mi estudio no es vacío, está lleno de posibilidades. Cada pincelada es un diálogo con el lienzo.'
    }
  ];

  return (
    <div className="blog-container">
      <h1>Blog / Cuaderno</h1>
      {posts.map((post, index) => (
        <div key={index} className="blog-post">
          <h2>{post.title}</h2>
          <p className="blog-date">{post.date}</p>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;