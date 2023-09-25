import './App.css'
import Flashcard from "./components/Flashcard.jsx";
import {useState} from "react";

function App() {
    const cocktails = [
        {
            name: 'Margarita',
            ingredients: 'tequila , lime juice , triple sec',
            difficulty: 'easy'
        },
        {
            name: 'Martini',
            ingredients: 'gin , dry vermouth',
            difficulty: 'hard'
        },
        {
            name: 'Old Fashioned',
            ingredients: 'whiskey , bitters , sugar',
            difficulty: 'medium'
        },
        {
            name: 'Mojito',
            ingredients: 'white rum , lime juice , mint , simple syrup , sprite/soda water',
            difficulty: 'easy'
        },
        {
            name: 'Moscow Mule',
            ingredients: 'vodka , lime juice , ginger beer',
            difficulty: 'easy'
        },
        {
            name: 'Manhattan',
            ingredients: 'whiskey , sweet vermouth , bitters',
            difficulty: 'hard'
        },
        {
            name: 'Daiquiri',
            ingredients: 'white rum , lime juice , simple syrup',
            difficulty: 'easy'
        },
        {
            name: 'Whiskey Sour',
            ingredients: 'whiskey , lemon juice , simple syrup',
            difficulty: 'easy'
        },
        {
            name: 'Negroni',
            ingredients: 'gin , campari , sweet vermouth',
            difficulty: 'hard'
        },
        {
            name: 'Tom Collins',
            ingredients: 'gin , lemon juice , simple syrup , soda water',
            difficulty: 'easy'
        },
        {
            name: 'Mint Julep',
            ingredients: 'bourbon , mint , simple syrup',
            difficulty: 'medium'
        },
        {
            name: 'White Russian',
            ingredients: 'vodka , coffee liqueur , cream',
            difficulty: 'easy'
        },
        {
            name: 'Bloody Mary',
            ingredients: 'vodka , tomato juice , lemon juice , worcestershire sauce , tabasco , salt , pepper',
            difficulty: 'hard'
        },
        {
            name: 'Pina Colada',
            ingredients: 'white rum , coconut cream , pineapple juice',
            difficulty: 'easy'
        },
        {
            name: 'Cosmopolitan',
            ingredients: 'vodka , triple sec , cranberry juice , lime juice',
            difficulty: 'hard'
        },
        {
            name: 'Sazerac',
            ingredients: 'whiskey , absinthe , bitters , sugar',
            difficulty: 'hard'
        },
        {
            name: 'Sidecar',
            ingredients: 'cognac , triple sec , lemon juice',
            difficulty: 'medium'
        },
        {
            name: 'French 75',
            ingredients: 'gin , lemon juice , simple syrup , champagne',
            difficulty: 'medium'
        },
        {
            name: 'Gimlet',
            ingredients: 'gin , lime juice , simple syrup',
            difficulty: 'easy'
        },
        {
            name: 'Mimosa',
            ingredients: 'champagne , orange juice',
            difficulty: 'easy'
        }
    ]
    const [current, setCurr] = useState(0);
    const [previous, setPrev] = useState(0);
    const [currentCocktail, setCocktail] = useState(cocktails[current]);

    const numCocktails = () => {
        return cocktails.length;
    }
    const randomizer = () => {
        let rand = Math.floor(Math.random() * numCocktails());
        while (rand === current) {
            rand = Math.floor(Math.random() * numCocktails());
        }
        setCurr(previous);
        setPrev(current);
        setCocktail(cocktails[rand]);
    }
    const goBack = () => {
        setCurr(previous);
        setPrev(current);
        setCocktail(cocktails[previous]);
    }

  return (
    <>
        <h1>Popular Cocktails</h1>
        <h3>number of cocktails: {numCocktails()}</h3>
        <Flashcard cocktail={currentCocktail} />
        <div className={'btn-group'}>
            <button className={'btn'} onClick={goBack}>Back</button>
            <button className={'btn'} onClick={randomizer}>Next</button>
        </div>
        <h5 className={'legend'}>Difficulty to recreate:
            <p>
                <span className={'easy'}>EASY</span>-
                <span className={'medium'}>MEDIUM</span>-
                <span className={'hard'}>HARD</span>
            </p>
        </h5>
    </>
  )
}

export default App
