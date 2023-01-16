import React from "react";
import memesData from "../memesData";

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url;
        console.log(url);
    }

    return (
        <main>

            <div className="form--meme">
                <input type="text"
                    id="top"
                    placeholder="shut up"
                    className="form--input">
                </input>
                <input type="text"
                    id="bottom"
                    placeholder="and take my money"
                    className="form--input">
                </input>
                <button type="submit"
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>

        </main>
    )
}