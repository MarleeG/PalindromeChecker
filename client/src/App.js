import { Container } from "react-bootstrap";
import Header from "./components/Header";

import "./App.css";
const App = () => {
  return (
    <Container fluid>
        <div className="my-5 App">
          <Header />
        </div>
      </Container>
  );
};

export default App;
