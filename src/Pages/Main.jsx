import { useEffect, useState } from "react";
import PRODUCTS from "../data/PRODUCTS";
import Product from "../components/product";

const Main = () =>{

    const [prod,setProd] = useState([]);
    const [query,setQuery] = useState('');
    console.log(prod);

    const fetchProd = async () =>{
        const r = await fetch('https://exam.avavion.ru/api/services');

        const data = await r.json();

        setProd(data.data);
    }
    useEffect(()=>{
        fetchProd()
    },[])

    const onChangeQuery =(e) =>{
        setQuery(e.target.value.toLowerCase());
        console.log(query);
    }

    const searchProd = prod.filter((item)=>item.name.toLowerCase().includes(query))
    return (
       <div className="main">

        <div className="search" >
            <i class="fa fa-search" aria-hidden="true"></i>
            <input type="text" className="inpsea" onChange={(e)=>onChangeQuery(e)} />
        </div>

        <div className="products">
            {
                searchProd.length ? (
                    searchProd.map((item)=>{
                        return <Product key={item.id} prod={item} />
                    })
                ) : (
                    <h2>  По вашему запросу ничего нет</h2>
                  
                )
            }
        </div>


       </div>
    )
}

export default Main;