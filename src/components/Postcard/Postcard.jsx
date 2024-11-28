import styles from './PostCard.module.css';
import placeHolderImage from '../../assets/images/placeholder.png'

export default function PostCard({image}) {

  return (
    <div className={styles.card}>
      <div className={styles.imageContainer}>
        <img {image || placeHolderImage} alt="" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2 className={styles.title}>Titolo del Post</h2>
        <p className={styles.text}>
        La Thousand-Year Blood War (TYBW) è l'arco narrativo finale del manga Bleach, scritto e disegnato da Tite Kubo.
         Rappresenta lo scontro definitivo tra gli Shinigami e i Quincy, guidati dal loro re, Yhwach, 
         che torna in vita dopo un millennio per distruggere la Soul Society e creare un nuovo mondo.
        </p>
        <button className={styles.button}>Leggi di più</button>
      </div>
    </div>
  );
  
}
