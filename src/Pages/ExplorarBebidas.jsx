import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { getRandomCockTails } from '../services/requestApi';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

function ExplorarBebidas() {
  const history = useHistory();
  return (
    <div>
      <Header title="Explorar Bebidas" />
      <Link to="/explorar/bebidas/ingredientes">
        <button data-testid="explore-by-ingredient" type="button">
          Por Ingredientes
        </button>
      </Link>
      <button
        data-testid="explore-surprise"
        type="button"
        onClick={ async () => {
          const id = await getRandomCockTails();
          history.push(`/bebidas/${id}`);
        } }
      >
        Me Surpreenda!
      </button>
      <Footer />
    </div>
  );
}

export default ExplorarBebidas;
