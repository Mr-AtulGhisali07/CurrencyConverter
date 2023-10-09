import { useEffect,useState } from "react";


 
function useCurrencyInfo(currency){
const [data,setDAta]=useState({})


    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((response)=>response.json())
        .then((result)=>setDAta(result[currency]))
    },[currency])
    return data
}

export default useCurrencyInfo