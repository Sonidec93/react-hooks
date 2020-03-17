import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo((props) => {
  const [inputState, setInputState] = useState({ title: '', amount: 0 });

  const submitHandler = event => {
    event.preventDefault();
    // ...
  };

  const changeValue = (label, event) => {
    if (label === 'title') {
      setInputState({ ...inputState, title: event.target.value })
    }
    else {
      setInputState({ ...inputState, amount: +event.target.value });
    }
  }

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input
              type="text"
              id="title"
              value={inputState.title}
              onChange={(event) => changeValue('title', event)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              id="amount"
              value={inputState.amount}
              onChange={(event) => changeValue('amount', event)}
            />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
