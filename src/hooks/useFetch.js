import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";


export const useFetch = (category) => {

    const [state, setState] = useState({ imgs:[] ,loading: true });

    useEffect(() => {
        getGifs(category)
            .then(imgs=> setState({
                imgs:imgs,
                loading: false
            }
            ))
        }, [category]);

 return state; // {imgs:[], loading: true }

}
