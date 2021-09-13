import { Container } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Header from "./components/Header/Header";

function App() {
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  useEffect(() => {
    const dictionaryApi = async () => {
      try {
        const data = await axios.get(
          `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
        );
        console.log("data", data);
        setMeanings(data.data);
      } catch (err) {
        console.log("error");
      }
    };
    dictionaryApi();
  }, [category, word]);
  return (
    <div
      className="App"
      style={{ height: "100vh", backgroundColor: "#282c34", color: "white" }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <Header
          category={category}
          setCategory={setCategory}
          word={word}
          setWord={setWord}
        />
        {meanings.length ? (
          <Definitions word={word} meanings={meanings} category={category} />
        ) : null}
      </Container>
    </div>
  );
}

export default App;
