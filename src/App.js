import SearchKeyword from "./SearchKeyword";
import "./App.css";

function App() {
  return (
    <div className="App">
      <main className="main-part">
        <SearchKeyword defaultKeyword={"sunset"} />
      </main>
      <footer className="footer-part">Code by Bahar</footer>
    </div>
  );
}

export default App;
