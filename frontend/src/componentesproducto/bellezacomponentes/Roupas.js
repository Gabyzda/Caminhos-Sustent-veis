import React, { /*useState,*/ useEffect, useReducer } from "react";
import './roupas.css';
//import data from "./data";
import { Link } from "react-router-dom";
import axios from "axios";
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_REQUEST':
            return { ...state, loading: true };
        case 'FETCH_SUCCESS':
            return { ...state, products: action.payload, loading: false };
        case 'FETCH_FAIL':
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default function Roupas() {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
    });
    //const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
                const result = await axios.get('/api/products');
                dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
                dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
            // setProducts(result.data);
        };
        fetchData();
    }, []);
    return (
        <div>
            <h1>ROUPAS</h1>
            <div className="produtos">
                {loading ? (
                    <div>Carregando...</div>
                ) : error ? (
                    <div>{error}</div>
                ) : (
                    products.map(product => (
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
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}