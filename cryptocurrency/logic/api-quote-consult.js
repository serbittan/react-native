import axios from 'axios'

const apiQuoteConsult = (coin, cryptocurrency) => {
    const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptocurrency}&tsyms=${coin}`
    
    return ( async () => {
        const response = axios.get(url)

        return response

    })()
}

export default apiQuoteConsult