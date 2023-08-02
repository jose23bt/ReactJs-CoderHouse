import React, { useContext } from 'react';
import { ThemeContext } from './components/ThemeContext';
import Cart from "./components/Cart";
import primerArticulo from "./assets/img/cocaCola.png";
import segundoArticulo from "./assets/img/papasLays.png";
import tercerArticulo from "./assets/img/redBull.png";
import cuartoArticulo from "./assets/img/chocolate.png";

function Main() {
  const { darkMode } = useContext(ThemeContext);

  return (
    <main className={`d-flex flex-row flex-wrap ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <div className="col-sm-6 col-md-4">
        <Cart
          imageUrl={primerArticulo}
          title="Coca-Cola 500ml"
          price={100}
          description="Esta es la descripción detallada del artículo."
          stock={10}
        />
      </div>
      <div className="col-sm-6 col-md-4">
        <Cart
          imageUrl={segundoArticulo}
          title="Papas Lay's 23g"
          price={200}
          description="Esta es la descripción detallada del artículo."
          stock={10}
        />
      </div>
      <div className="col-sm-6 col-md-4">
        <Cart
          imageUrl={tercerArticulo}
          title="RedBull 250ml"
          price={300}
          description="Esta es la descripción detallada del artículo."
          stock={10}
        />
      </div>
      <div className="col-sm-6 col-md-4">
        <Cart
          imageUrl={cuartoArticulo}
          title="Chocolate Hershey's"
          price={400}
          description="Esta es la descripción detallada del artículo."
          stock={10}
        />
      </div>
    </main>
  );
}

export default Main;