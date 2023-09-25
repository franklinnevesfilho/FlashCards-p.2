import './App.css'
import Flashcard from "./components/Flashcard.jsx";
import {useState} from "react";

function App() {
    const cocktails = [
        {
            name: 'Margarita',
            ingredients: ['Tequila', 'Triple Sec', 'Lime Juice'],
            difficulty: 'easy'
        },
        {
            name: 'Martini',
            ingredients: ['Gin', 'Dry Vermouth'],
            difficulty: 'hard'
        },
        {
            name: 'Old Fashioned',
            ingredients: ['Whiskey', 'Angostura Bitters', 'Sugar'],
            difficulty: 'medium'
        },
        {
            name: 'Mojito',
            ingredients: ['White rum', 'Lime juice', 'Mint', 'Sprite / Soda Water', 'Simple Sugar'],
            difficulty: 'easy'
        },
        {
            name: 'Moscow Mule',
            ingredients: ['Vodka', 'Lime Juice', 'Ginger Beer', 'Mint', 'Simple Sugar'],
            difficulty: 'easy'
        },
        {
            name: 'Manhattan',
            ingredients: ['Whiskey', 'Sweet Vermouth', 'Angostura Bitters'],
            difficulty: 'hard'
        },
        {
            name: 'Daiquiri',
            ingredients: ['White rum', 'Lime juice', 'Simple Syrup'],
            difficulty: 'medium'
        },
        {
            name: 'Whiskey Sour',
            ingredients: ['Whiskey', 'Lime juice', 'Egg White','Simple Syrup'],
            difficulty: 'hard'
        },
        {
            name: 'Negroni',
            ingredients: ['Gin', 'Campari', 'Sweet Vermouth'],
            difficulty: 'medium'
        },
        {
            name: 'Tom Collins',
            ingredients: ['Gin', 'Lemon Juice', 'Simple Syrup', 'Soda Water'],
            difficulty: 'easy'
        },
        {
            name: 'Mint Julep',
            ingredients: ['Bourbon', 'Mint', 'Simple Syrup'],
            difficulty: 'medium'
        },
        {
            name: 'White Russian',
            ingredients: ['Vodka', 'Coffee Liqueur', 'Cream'],
            difficulty: 'easy'
        },
        {
            name: 'Bloody Mary',
            ingredients: ['Vodka', 'Tomato Juice', 'Hot Sauce', 'Horseradish', 'Lime Juice'],
            difficulty: 'hard'
        },
        {
            name: 'Pina Colada',
            ingredients: ['White Rum', 'Pineapple Juice', 'Coconut Cream'],
            difficulty: 'easy'
        },
        {
            name: 'Cosmopolitan',
            ingredients: ['Vodka', 'Triple Sec', 'Lime Juice', 'Cranberry Juice'],
            difficulty: 'hard'
        },
        {
            name: 'Sazerac',
            ingredients: ['Whiskey', 'Absinthe', 'Angostura Bitters', 'Sugar'],
            difficulty: 'hard'
        },
        {
            name: 'Sidecar',
            ingredients: ['Cognac', 'Triple Sec', 'Lemon Juice'],
            difficulty: 'medium'
        },
        {
            name: 'French 75',
            ingredients: ['Gin', 'Champagne', 'Lemon Juice', 'Simple Syrup'],
            difficulty: 'medium'
        },
        {
            name: 'Gimlet',
            ingredients: ['Gin', 'Lime Juice', 'Simple Syrup'],
            difficulty: 'medium'
        },
        {
            name: 'Mimosa',
            ingredients:['Champagne', 'Orange Juice'],
            difficulty: 'easy'
        }
    ]
    const [current, setCurr] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [currentCocktail, setCocktail] = useState(cocktails[current]);

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
