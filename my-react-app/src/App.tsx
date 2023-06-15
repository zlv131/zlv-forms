import styles from './App.module.scss';
import Main from "./pages/main/Main.tsx";
import {Route, Routes} from "react-router-dom";
import Error from "./pages/error/Error.tsx";
import FormPage from "./pages/form-page/FormPage.tsx";

function App() {

  return (
    <>
      <div className={styles.wrapper}>
          <Routes>
              <Route path="/" element={<Main/>}> </Route>
              <Route path="/step" element={<FormPage/>}> </Route>
              <Route path="*" element={<Error/>}> </Route>
          </Routes>
      </div>
    </>
  )
}

export default App
