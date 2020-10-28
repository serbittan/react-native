import axios from 'axios'

const getValueCryptocurrency = () => {
    const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD'

    return (async () => {
        const response = await axios.get(url)
        console.log(response)
        return response

    })()
}

export default getValueCryptocurrency