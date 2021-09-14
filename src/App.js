import {
  Container,
  withStyles,
  Switch,
  createTheme,
  Paper,
} from "@material-ui/core";
import { grey } from "@material-ui/core/colors";
import { ThemeProvider } from "@material-ui/core/styles";
import axios from "axios";
import { useEffect, useState } from "react";
import "./App.css";
import Definitions from "./components/Definitions/Definitions";
import Header from "./components/Header/Header";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const darkTheme = createTheme({
    palette: { type: darkMode ? "dark" : "light", primary: { main: "#fff" } },
  });
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [word, setWord] = useState("");
  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      "&$checked": {
        color: grey[500],
      },
      "&$checked + $track": {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

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
    <ThemeProvider theme={darkTheme}>
      <Paper>
        <div
          className="App"
          style={{ height: "100vh", transition: "all 0.5s linear" }}
        >
          <Container
            maxWidth="md"
            style={{
              display: "flex",
              flexDirection: "column",
              height: "100vh",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                right: 15,
                paddingTop: 10,
              }}
            >
              <span>{darkMode ? "Dark" : "Light"} Mode</span>
              <DarkMode
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              />
            </div>
            <Header
              category={category}
              setCategory={setCategory}
              word={word}
              setWord={setWord}
            />
            {meanings.length ? (
              <Definitions
                word={word}
                meanings={meanings}
                category={category}
              />
            ) : null}
          </Container>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
