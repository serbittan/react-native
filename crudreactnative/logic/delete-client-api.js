import axios from 'axios'


const deleteClientApi = (id) => {
    console.log(id)
    return (async () => {
        await axios.delete(`http://localhost:3000/clients/${id}`)

        return
    })()
}
 
export default deleteClientApi