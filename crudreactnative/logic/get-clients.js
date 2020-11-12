import axios from 'axios'

const getClients = () => {
    return (async () => {
        const response = await axios.get('http://localhost:3000/clients')

        return response
    })()
}
 
export default getClients