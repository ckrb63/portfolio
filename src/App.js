import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import Home from "./pages/Home";
import Introduce from "./pages/Introduce";
import Service from "./pages/services/Service";
import Stack from "./pages/Stack";
import "./App.css";
import configureStore, { history } from "./configureStore";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import classNames from "classnames";

function App() {
  const slideState = useSelector((state) => state.slideReducer.slideState);
  console.log(slideState);
  const store = configureStore();
  const location = useLocation();
  let forwardTransition = false;
  let backwardTransition = false;
  useEffect(() => {
    if (slideState === "slide") {
      forwardTransition = true;
    } else if (slideState === "back") {
      backwardTransition = true;
    }
  }, [slideState]);
  return (
    // <Provider store={store}>
    // <ConnectedRouter history={history}>
    <TransitionGroup className="transition-group">
      <CSSTransition
        // eslint-disable-next-line no-restricted-globals
        key={location.pathname}
        // in={true}
        // appear={true}
        timeout={700}
        classNames={slideState}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/introduce" element={<Introduce />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
    // </ConnectedRouter>
    // </Provider>
  );
}

export default App;
