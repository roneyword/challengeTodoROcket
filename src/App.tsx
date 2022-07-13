import { Fragment } from "react";
import { Header } from "./components/Header";
import { TodoList } from "./pages/TodoList";
import { GlobalStyle } from "./styles/configs/global";

function App() {
  return (
    <Fragment>
      <GlobalStyle />
      <Header />
      <TodoList />
    </Fragment>
  );
}

export default App;
