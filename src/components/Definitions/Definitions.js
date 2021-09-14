import React from "react";
import "./Definitions.css";

const Definitions = ({ word, category, meanings }) => {
  if (word) {
    return (
      <div className="meanings">
        {meanings[0] && word && category === "en" ? (
          <audio
            src={meanings[0].phonetics[0] && meanings[0].phonetics[0].audio}
            controls
            style={{ backgroundColor: "#fff", borderRadius: 10 }}
          >
            Your Browser does not support audio element
          </audio>
        ) : null}
        {meanings.map((m) => {
          return m.meanings.map((item) => {
            return item.definitions.map((def) => (
              <div
                className="singleMean"
                style={{ backgroundColor: "white", color: "black" }}
              >
                <b>{def.definition}</b>
                <br />
                {def.example && (
                  <span>
                    <b>Example:{def.example}</b>
                  </span>
                )}
                <br />
                {def.synonyms && (
                  <span>
                    <b>Synonyms:{def.synonyms.map((s) => `${s},`)}</b>
                  </span>
                )}
                <hr style={{ backgroundColor: "white", width: "100%" }}></hr>
              </div>
            ));
          });
        })}
      </div>
    );
  }
  return null;
};

export default Definitions;
