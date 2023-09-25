import {useEffect, useState} from 'react';
function Flashcard({cocktail}) {
    const [flip, setFlip] = useState(false);

    useEffect(() => {
        setFlip(false);
    }, [cocktail]);

    const flipCard = () => {
        setFlip(!flip);
    }
    return (
        <div className={`flashcard ${flip ? 'flipped' : ''}`} onClick={flipCard}>
            <div className={"card-inner"}>
                <div className={`card-front ${cocktail.difficulty}`}>
                    <h2>{cocktail.name}</h2>
                </div>
                <div className={"card-back"}>
                    <ul>
                        {cocktail.ingredients.map((ingredient, i) => {
                            return <li className={'list-item'} key={i}>{ingredient}</li>
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default Flashcard;