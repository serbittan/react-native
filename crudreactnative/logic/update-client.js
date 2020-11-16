import axios from 'axios'

const updateClient = (data) => {
    const { id } = data
    console.log(data)
    return (async () => {
        await axios.put(`http://localhost:3000/clients/${id}`, data )

        return

    })()
}
 
export default updateClient