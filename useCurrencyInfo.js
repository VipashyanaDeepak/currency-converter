//custom hooks
import{useEffect,useState}from 'react'

function useCurrencyInfo(currency){
    const [data,setData]=useState({})
    //i want to call an api when hook is loaded
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)//it is in form string not json
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
        console.log(data);
    },[currency])
    console.log(data);
    return data
}
export default useCurrencyInfo