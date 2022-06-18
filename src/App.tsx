import { data } from "./data";

function App() {
  const baseAudioURL = "src/assets/audios";
  return (
    <div className="App">
      {data.map((d) => (
        <div key={d.page}>
          <div className="font-size-h2">{d.name}</div>
          {d.buttons.map((name) => (
            <button
              className="button-primary small-rounded p-horizontal-2 p-vertical-1 m-all-1 font-size-thin font-weight-bold"
              key={name}
              onClick={() => {
                const audio = new Audio(
                  `${baseAudioURL}/${d.page}/${name}.m4a`
                );
                audio.play();
              }}
            >
              {name}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
}

export default App;
