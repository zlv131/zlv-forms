import styles from './App.module.scss';
import Main from "./pages/main/Main.tsx";

function App() {

  return (
    <>
      <div className={styles.wrapper}>
        <Main/>
      </div>
    </>
  )
}

export default App
