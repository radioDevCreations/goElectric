import { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../../store/store";

import "./App.scss";

import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

const App: FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="app">
          <Header chosenPage={1} />
          <Main />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
