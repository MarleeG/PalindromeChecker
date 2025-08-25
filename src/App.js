import { Container } from "react-bootstrap";
import Base from "./components/Base";
import ApplicationNote from "./components/ApplicationNote";

import "./App.css";
const App = () => {
  return (
    <Container fluid>
      <ApplicationNote />

      <Base />
    </Container>
  );
};

export default App;
