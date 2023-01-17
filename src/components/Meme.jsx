import React from "react";
import memesData from "../memesData";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        topText: "Top text",
        bottomText: "Bottom text",
        randomImage: "http://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(memesData);


    function getMemeImage() {
        const memesArray = allMemeImages.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    };

    return (
        <main>
            <div className="form--meme">
                <input type="text"
                    id="top"
                    placeholder={meme.topText}
                    className="form--input">
                </input>
                <input type="text"
                    id="bottom"
                    placeholder={meme.bottomText}
                    className="form--input">
                </input>
                <button type="submit"
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={meme.randomImage} className="meme--image" />

        </main>
    )
}