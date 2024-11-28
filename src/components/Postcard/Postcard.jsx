import React from 'react';
import styles from './PostCard.module.css';
import placeHolderImage from '../../assets/images/placeholder.png';

export default function PostCard({ title, content, image, tags }) {
  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img src={image || placeHolderImage} alt={title} className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{content}</p>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index} className={styles.tag}>
              #{tag}
            </span>
          ))}
        </div>
        <button className={styles.button}>Leggi di più</button>
      </div>
    </div>
  );
}
