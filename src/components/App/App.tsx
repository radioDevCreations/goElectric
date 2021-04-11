import { Provider } from "react-redux";
import store from "../../store/store";

import "./App.scss";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App = () => {

  return (
    <Provider store={store}>
      <div className="app">
        <Header chosenPage={1} />
        <Main />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;
