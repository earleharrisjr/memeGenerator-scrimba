import React from "react";


export default function Meme() {

    return (
        <main>

            <form className="form--meme">
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
                <input type="submit"
                    value="Get a new meme image 🖼"
                    className="form--button">
                </input>
            </form>

        </main>
    )
}