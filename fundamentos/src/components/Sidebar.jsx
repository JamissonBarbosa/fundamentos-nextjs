import styles from "./Sidebar.module.css"
import {PencilLine} from "phosphor-react"
import developer from "../assests/developer.jpg"


export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src={developer} 
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://github.com/JamissonBarbosa.png" />
        <strong>Jamisson</strong>
        <span>Web developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Editar seu Perfil
        </a>
      </footer>
    </aside>
  )
}