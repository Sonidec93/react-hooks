import React, { useState } from 'react';

import IngredientForm from './IngredientForm';
import Search from './Search';
import IngredientList from './IngredientList';

function Ingredients() {

  const [ingredients, setIngredients] = useState([]);

  const addIngredientsHandler = Ingredient => setIngredients([...ingredients, { id: Math.random(), ...Ingredient }]);

  return (
    <div className="App">
      <IngredientForm addIngredient={addIngredientsHandler}  />

      <section>
        <Search />
        <IngredientList ingredients={ingredients} onRemoveItem={() => { }}   />
      </section>
    </div>
  );
}

export default Ingredients;
