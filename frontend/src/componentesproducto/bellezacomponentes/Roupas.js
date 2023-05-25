import React, { useState, useEffect } from "react";
import './roupas.css';
//import data from "./data";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Roupas() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get('/api/products')
            setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>ROUPAS</h1>
            <div className="produtos">
                {products.map(product => (
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