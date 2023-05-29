const data = {                                  //objeto
  products: [                                 //array
    {                                         //objeto - propriedades:
      name: 'Yahweh Camisa Fitness',
      slug: 'yahweh-camisa-fitness',        //para URL
      category: 'Camisas',
      image: '/images/p1.jpg',             //640 x 960 px
      price: 120,
      countInStock: 10,                    //Stock de conteúdo
      brand: 'Yahweh',                    //marca
      rating: 4.5,                        //qualificação
      numReviews: 10,                     //num de comentários
      description: 'Produto de Alta Qualidade',
    },
    {
      name: '705 Camisa Fitness',
      slug: '705-camisa-fitness',
      category: 'Camisas',
      image: '/images/p2.jpg',
      price: 250,
      countInStock: 0,
      brand: '705',
      rating: 4.0,
      numReviews: 10,
      description: 'Produto de Alta Qualidade',
    },
    {
      name: 'Rosa Calça Fitness',
      slug: 'rosa-calça-fitness',
      category: 'Calças',
      image: '/images/p3.jpg',
      price: 25,
      countInStock: 15,
      brand: 'Rosa',
      rating: 4.5,
      numReviews: 14,
      description: 'Produto de Alta Qualidade',
    },
    {
      name: 'Cinza Calça Fit',
      slug: 'cinza-calça-fit',
      category: 'Calças',
      image: '/images/p4.jpg',
      price: 65,
      countInStock: 5,
      brand: 'Cinza',
      rating: 4.5,
      numReviews: 10,
      description: 'Produto de Alta Qualidade',
    },
  ],
};
export default data;