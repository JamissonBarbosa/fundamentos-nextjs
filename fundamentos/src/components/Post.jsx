import { Comment } from "./Comment";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="http://github.com/JamissonBarbosa.png"
          />
          <div className={styles.authorInfo}>
            <strong>Jamisson Barbosa</strong>
            <span>Web Develper</span>
          </div>
        </div>
        <div>
          <time title="14 de Novembro 13:27" dateTime="2025-11-14 13:27:00">
            Publicado á 1h
          </time>
        </div>
      </header>
      <div className={styles.content}>
        <p> Fala galera</p>
        <p>Acabei de subir mais um projeto no meu portifólio</p>
        <p>
          <a href="#">Jamisson.Desenvolvedor</a>
        </p>
        <p>
          <a href="#">#novoProjeto #NLW</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu FeedBack</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Comentar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
      <Comment />
      <Comment />
      </div>
    </article>
  );
}
