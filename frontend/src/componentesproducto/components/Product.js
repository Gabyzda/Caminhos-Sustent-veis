import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Rating from './Rating';

export default function Product(props) {
    const { product } = props;
    return (
        <Card>
            <Link to={`/produto/${product.slug}`}>
                <img src={product.image} className="card-img-top" alt={product.name} />
            </Link>
            <Card.Body>
                <Link to={`/produto/${product.slug}`}>
                    <Card.Title>{product.name}</Card.Title>
                </Link>
                <Rating rating={product.rating} numReviews={product.numReviews} />
                <Card.Text>R${product.price}</Card.Text>
                <Button>Contatar</Button>
            </Card.Body>
        </Card>
    );
}