import { useEffect, useState } from "react";

function Home() {

    const [products, setproducts] = useState([])


    useEffect(() => {

        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then((data) => {
                setproducts(data);
                console.log(data)

            })

    }, [])

    return (


        <div className="box">

            {
                products.map((products, index) => {
                    return (
                        <div key={index} className="product-item">
                            <img height="200" width="200" src={products.image} alt="" />
                            <h1>{products.title}</h1>
                            <h3>{products.rating.count}</h3>
                           
                        </div>
                    )
                })
            }

        </div>
    );
}

export default Home;