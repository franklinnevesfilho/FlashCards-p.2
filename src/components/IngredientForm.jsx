import React, {useEffect, useState} from 'react';

const IngredientForm = ({ingredients}) => {
    const [inputs, setInputs] = useState([]);
    const[correct, setCorrect] = useState([]);

    useEffect(() => {
           setInputs(ingredients.reduce((acc, ingredient) => {
               acc[ingredient] = '';
               return acc;
           }, {}));
        setCorrect([]);

    }, [ingredients]);

    const handleChange = (e) => {
        setInputs((prevState) => ({...prevState, [e.target.name]: e.target.value,}));
        let index = ingredients.indexOf(e.target.name);
        if ( e.target.value.toLowerCase() !== ingredients[index].toLowerCase()) {
            correct[index] = false;
            setCorrect(correct);
        }
    }
    const validateAnswers = (e) => {
        e.preventDefault();
        let correct = [];
        for (let i = 0; i < ingredients.length; i++) {
            if (ingredients[i].toLowerCase() === inputs[ingredients[i]].toLowerCase()) {
                correct.push(true);
            } else {
                correct.push(false);
            }
        }
        setCorrect(correct);
    }

    return (
        <div >
            <form>
                <h4>Enter the ingredients in order</h4>
                <div className={'input-block'}>{
                    ingredients && ingredients.map((ingredient, i) => {
                        return (
                            <div key={i}>
                                <label htmlFor={ingredient}>{i+1}.</label>
                                <input id={ingredient} value={inputs[ingredient]} name={ingredient} className={`input ${correct[i] ? 'correct' : 'wrong'}`} type="text" onChange={handleChange}/>
                            </div>
                        )
                    })}
                </div>
                <button className={'btn'} onClick={validateAnswers}>Submit</button>
            </form>
        </div>
    );
}

export default IngredientForm;