import React, { useEffect, useState } from "react";
import './Load.css'


function Loaddata(){
    const [loading, setLoading]= useState(false);
    const [product, setProduct] = useState([]);
    const [count, setCount] = useState(0);
    

    async function fetchProduct(){
        setLoading(true);
        try {
            // setLoading(true)
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}&select=title,price,thumbnail`)
            const result = await response.json();

            console.log(result);

            if(result && result.products && result.products.length){
                setProduct((prev)=> [...prev, ...result.products])
            }
            setLoading(false);
 
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }


    useEffect(()=>{
        fetchProduct()
    }, [count])

    if(loading){
        <div className="load"> Loading! Please wait</div>
    }

    return (
        <div className="card">
            <div className="productContainer">
                {
                    product && product.length ? 
                    product.map((item)=>(
                        <div className="product" key={item.id}>
                            <img src={item.thumbnail} alt={item.title} />
                            <p>{item.title}</p>
                        </div>
                    ))
                    : null
                }
            </div>
            <div className="loadMore">
                <button onClick={()=>setCount(count+1)}>Load More Products</button>
            </div>
        </div>
    )
}



export default Loaddata;