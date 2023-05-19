import React from "react";
import './roupas.css';
import data from "./data";
import { Link } from "react-router-dom";

export default function Roupas() {
    return (
        <div>
            <h1>ROUPAS</h1>
            <div className="produtos">
                {data.products.map(product => (
                    <div className="produto" key={product.slug}>
                        <Link to={`/produto/${product.slug}`}>
                            <img src={product.image} alt={product.name} />
                        </Link>
                        <div className="produto-info">
                            <Link to={`/produto/${product.slug}`}>
                                <p>{product.name}</p>
                            </Link>
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