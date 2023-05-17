import React from "react";
import './roupas.css';
import data from "./data";

function Brincos() {
    return (
        <div>
            <h1>ROUPAS</h1>
            <div className="produtos">
                {data.products.map(product => (
                    <div className="produto" key={product.slug}>
                        <img src={product.image} alt={product.name} />
                        <div className="produto-info">
                            <p>{product.name}</p>
                            <p>{product.price}</p>
                            <button>Comprar</button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}

export default Brincos;