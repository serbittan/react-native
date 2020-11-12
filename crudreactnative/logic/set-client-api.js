import axios from 'axios'


const setClientApi = data => {
    const { name, phone, email, company } = data
    // validar campos.
    if (!name.trim()) throw new Error('all fields are required')
    if (!phone.trim()) throw new Error('all fields are required')
    if (!email.trim()) throw new Error('all fields are required')  
    if (!company.trim()) throw new Error('all fields are required')
        
    return (async () => {
        await axios.post('http://localhost:3000/clients', data)

        return
    })()
}
 
export default setClientApi