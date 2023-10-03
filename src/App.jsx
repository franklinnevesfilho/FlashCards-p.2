import './App.css'
import Flashcard from "./components/Flashcard.jsx";
import cocktails from './assets/cocktails.json';
import {useState} from "react";
import IngredientForm from "./components/IngredientForm.jsx";

function App() {
    const [current, setCurr] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [currentCocktail, setCocktail] = useState(cocktails[0]);

    const numCocktails = () => {
        return cocktails.length;
    }
    const randomizer = () => {
        let rand = Math.floor(Math.random() * numCocktails());
        while (rand === current) {
            rand = Math.floor(Math.random() * numCocktails());
        }
        setPrevious(current);
        setCurr(rand);
        setCocktail(cocktails[rand]);
    }
    const goBack = () => {
        setCocktail(cocktails[previous]);
        setPrevious(current);
        setCurr(previous);
    }

  return (
    <>
        <h5 className={'legend'}>Difficulty to recreate:
            <p>
                <span className={'easy'}>EASY</span>-
                <span className={'medium'}>MEDIUM</span>-
                <span className={'hard'}>HARD</span>
            </p>
        </h5>
        <h1>Popular Cocktails</h1>
        <h3>number of cocktails: {numCocktails()}</h3>
        <Flashcard cocktail={currentCocktail} />
        <div className={'btn-group'}>
            <button className={'btn'} onClick={goBack}>Back</button>
            <button className={'btn'} onClick={randomizer}>Next</button>
        </div>
        <IngredientForm ingredients={currentCocktail.ingredients}/>
    </>
  )
}

export default App
