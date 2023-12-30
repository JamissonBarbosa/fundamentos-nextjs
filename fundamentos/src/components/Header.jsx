
import style from "./Header.module.css"
import logotipo from "../assests/logotipo.png"

export function Header(){
    return (
        <header className={style.header}>
            <img src={logotipo}></img>
            <strong >Ignite Feed</strong>
        </header>
    )
}