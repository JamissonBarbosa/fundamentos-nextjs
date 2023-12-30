import { Post } from "./components/Post"
import { Header } from "./components/Header"
import { Sidebar } from "./components/Sidebar"
import "./global.css"
import style from "./App.module.css"

function App() {
    return (
        <>
            <Header />
            <div className={style.wrapper}>
                <Sidebar />
                <main>

                    <Post
                        author="Joao"
                        content="Primeiro poste publicado"
                    />
                    <Post
                        author="Pedro"
                        content="Segundo poste publicado"
                    />

                </main>
            </div>
        </>
    )
}

export default App