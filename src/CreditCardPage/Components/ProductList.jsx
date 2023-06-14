import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getCreditCards } from "../../Redux/CardPageReducer/action";
import { useSearchParams } from "react-router-dom";
import { ProductCard } from "./ProductCard";

export const ProductList = () => {

    const [searchParams] = useSearchParams();
    const dispatch = useDispatch();
    const cards = useSelector((store) => store.creditCardReducer.cards)

    let obj = {
        params: {
            _sort: searchParams.get("order") && "price",
            _order: searchParams.get("order"),
        }
    }

    useEffect(() => {
        dispatch(getCreditCards(obj))
    }, [searchParams]);

    return <div style={{ justifyContent: "center" }}>
        {cards?.map((el, i) => {
            return <ProductCard key={el.id} data={el} />
        })}
    </div>
}