import styles from "./Poems.module.css";
export default function Poems({ poem }) {
  return (
    <div className={styles.poemItem_poem}>
      <img src="/Images/sad.png" alt="" className={styles.poemItem_bg} />
      <h1>{poem.title}</h1>
      <div className={styles.poemItem_content}>
        {poem.content.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>

      <img src="/Images/sad.png" alt="" className={styles.poemItem_bg} />
      <div>
        <span>{/*  heart logo */}</span>
        <span>{/*  eyes logo */}</span>
        <span>{/*  comment logo */}</span>
      </div>
    </div>
  );
}
