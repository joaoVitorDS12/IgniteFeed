// JSX = JavaScript + XML(HTML)
import { Header } from "./components/Header"
import  { Post }  from "./components/Post"
import { Sidebar } from "./components/Sidebar"

import styles from './App.module.css'

import './global.css'

export function App() {
  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
          <Sidebar />
          <main>
            <Post 
            author="João Vitor" 
            content="  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse dignissimos quae quos magnam odit quaerat impedit natus quibusdam sunt iusto ratione, dolore, omnis sint nesciunt at inventore a. Delectus, quos?" 
            />
            <Post 
              author="Diego Fernandes"
              content="Novo post"
            />
          </main>
        </div>
      </div>
    )
  }
