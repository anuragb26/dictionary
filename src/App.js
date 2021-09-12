import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [meanings, setMeanings] = useState([]);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        "https://api.dictionaryapi.dev/api/v2/entries/en/plane"
      );
      console.log("data", data);
      setMeanings(data.data);
    } catch (err) {
      console.log("error");
    }
  };
  useEffect(async () => {
    await dictionaryApi();
  }, []);
  console.log(meanings);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        Dictionary
      </Container>
    </div>
  );
}

export default App;
