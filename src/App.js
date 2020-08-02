import React, { useState } from 'react';
import randomWords from "random-words";
import GenreList from "./components/database";


function App() {

    const [jam, setJam] = useState({ time: "", genre: [], words: [] });

    function newJam() {
        var timeOption = document.querySelector("#timeOptions").value;
        if (timeOption !== "0") {
            var timeArray = ["3 DAYS", "5 DAYS", "1 WEEK", "2 WEEKS", "1 MONTH"];
            var timeCard = <div className="col style={{maxWidth = 18rem;}}">
                <div className="card text-white bg-secondary mb-3">
                    <div className="card-header">Allotted Time</div>
                    <div className="card-body">
                        {timeArray[Math.floor(Math.random() * (Number(timeOption) + 1))]}
                    </div>
                </div>
            </div>
        } else var timeCard = null;

        var genreOption = document.querySelector("#genreOptions").value;
        if (genreOption !== "0") {
            var shownGenre = [];
            for (var i = 0; i < genreOption; i++) {
                shownGenre.push(<li key={"genre" + i}>{GenreList[Math.floor(Math.random() * GenreList.length)]}</li>);
            }
            var genreCard = <div className="col style={{maxWidth = 18rem;}}">
                <div className="card text-white bg-success mb-3">
                    <div className="card-header">Genre</div>
                    <div className="card-body">
                        {shownGenre}
                    </div>
                </div>
            </div>
        } else var genreCard = null;

        var wordOption = document.querySelector("#wordOptions").value;
        if (wordOption !== "0") {
            var shownWords = [];
            for (var i = 0; i < wordOption; i++) {
                shownWords.push(<li key={"word" + i}>{randomWords()}</li>);
            }
            var wordCard = <div className="col style={{maxWidth = 18rem;}}">
                <div className="card text-white bg-info mb-3">
                    <div className="card-header">Word Jam</div>
                    <div className="card-body">
                        {shownWords}
                    </div>
                </div>
            </div>
        } else var wordCard = null;

        setJam({
            time: timeCard,
            genre: genreCard,
            words: wordCard
        });
    }

    return (<div>
        <section id="intro">
            <div>
                <h1>WELCOME TO THE SPACE JAM!!! <i className="fas fa-rocket"></i></h1>
            </div>
        </section>
        <section id="elements">
            <div>
                <h1>CUSTOMIZE YOUR INTERGALACTIC TRIP!</h1>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">MAX ALLOTTED TIME: </label>
                    </div>
                    <select className="custom-select" id="timeOptions">
                        <option value="0">Off</option>
                        <option value="1">5 DAYS</option>
                        <option value="2">1 WEEK</option>
                        <option value="3">2 WEEKS</option>
                        <option value="4">1 MONTH!</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">GENRE SUGGESTION: </label>
                    </div>
                    <select className="custom-select" id="genreOptions">
                        <option value="0">Off</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <label className="input-group-text">RANDOM WORDS: </label>
                    </div>
                    <select className="custom-select" id="wordOptions">
                        <option value="0">Off</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                        <option value="6">Six</option>
                        <option value="7">Seven</option>
                        <option value="8">Eight</option>
                        <option value="9">Nine</option>
                        <option value="10">Ten? Really? You need ten words?</option>
                    </select>
                </div>

            </div>
        </section>
        <section id="randomizer">
            <div>
                <h1>CLICK ON RANDOMIZE TO GET STARTED!</h1>
                <button type="button" className="btn btn-lg btn-outline-light" onClick={newJam}><h2>RANDOMIZE</h2></button>
                <div className="row">
                    {jam.time}
                    {jam.genre}
                    {jam.words}
                </div>
            </div>
        </section>
    </div>);
}

function Randomize() {
    console.log(randomWords({ exactly: 2, wordsPerString: 2 }));
}

export default App;
