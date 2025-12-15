
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Blog.css';

const Blog = () => {
  const { t } = useTranslation();
  const posts = [
    {
      title: t('blog.posts.0.title'),
      date: t('blog.posts.0.date'),
      content: t('blog.posts.0.content')
    },
    {
      title: t('blog.posts.1.title'),
      date: t('blog.posts.1.date'),
      content: t('blog.posts.1.content')
    },
    {
      title: t('blog.posts.2.title'),
      date: t('blog.posts.2.date'),
      content: t('blog.posts.2.content')
    }
  ];

  return (
    <div className="blog-container">
      <h1>{t('blog.title')}</h1>
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