import React from "react";
import './roupas.css';
import data from "./data";

export default function Roupas() {
    return (
        <div>
            <h1>ROUPAS</h1>
            <div className="produtos">
                {data.products.map(product => (
                    <div className="produto" key={product.slug}>
                        <a href={`/produto/${product.slug}`}>
                            <img src={product.image} alt={product.name} />
                        </a>
                        <div className="produto-info">
                            <a href={`/produto/${product.slug}`}>
                                <p>{product.name}</p>
                            </a>
                            <p>
                                <strong>R${product.price}</strong>
                            </p>
                            <button>Comprar</button>
                        </div>
                    </div>))
                }
            </div>
        </div>
    )
}