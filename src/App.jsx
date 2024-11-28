import React from 'react';
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import PostCard from './components/PostCard/PostCard';
import { posts } from './data/posts';

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <div className='container'>
      {posts.filter((post) => post.published).map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.content}
            image={post.image}
            tags={post.tags}
          />
        ))}
      </div>
    </div>
  );
}
