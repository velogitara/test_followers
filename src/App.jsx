import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import goitLogo from "./assets/images/goitLogo.svg";
import picture2in1 from "./assets/images/picture2in1.svg";
import boy from "./assets/images/boy.svg";
import "./App.css";

function App() {
    const [count, setCount] = useState(100500);
    // let number = Number(count).toString().split("");
    let number = Number(count).toLocaleString("en");

    return (
        <div className="App">
            {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img
                        src={reactLogo}
                        className="logo react"
                        alt="React logo"
                    />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    click me count is {count}
                </button>
                <p>
                    Edit <code>src/App.jsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p> */}

            <div className="card">
                <a
                    href="https://goit.global/ua/"
                    target="_blank"
                    className="logoLink"
                >
                    <img src={goitLogo} className="logo" alt="GoIt logo" />
                </a>

                <div className="userImageBox">
                    <div className="horizontalLine"></div>

                    <img src={boy} className="userImage" alt="user image" />
                </div>
                <div className="cardInfo">
                    <p className="cardInfoTweets">777 tweets</p>
                    <p className="cardInfoTweets cardInfoFollowers">
                        {number} followers
                    </p>
                    <button
                        className="followBtn"
                        alt="follow user button"
                        onClick={() => setCount((count) => count + 1)}
                    >
                        Follow
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
