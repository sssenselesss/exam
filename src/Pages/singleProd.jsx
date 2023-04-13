import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import PriceWithDiscount from "../utils/FormatWithDiscount";


const SingleProd = (props) => {

    const params = useParams();

console.log(params);

    const [prod, setProd] = useState({});
    const singleFetch = async () => {
        const single = await fetch(`https://exam.avavion.ru/api/services/${params.id}`)
        const data = await single.json();

        setProd(data.data)
    }

    useEffect(() => {
        singleFetch();
    }, [])

    console.log(prod);


    return (
        <div className="single">
            <div className="singleImage">
                <img src={prod.image_url} alt="" />
            </div>
            <div className="single-name">{prod.name}</div>
            <div className="single-content">{prod.content}</div>
            <div className="price-sale">Цена с учетом скидк: {PriceWithDiscount(prod.price,prod.dicsount_percent)}</div>
        </div>
    )
}

export default SingleProd