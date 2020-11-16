import axios from 'axios'


const setClientApi = data => {
  
    return (async () => {
        await axios.post('http://localhost:3000/clients', data)

        return
    })()
}
 
export default setClientApi