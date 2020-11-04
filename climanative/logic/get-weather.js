
const getWeather = ({ city, country }) => {

    const apiKey = '2b409cf564dd98d7b4b68dfeb5915671'
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&lang=en&appid=${apiKey}`

    return (async () => {

        const response = await fetch(url)

        const { status } = response
        
        if (status === 200) {
            return await response.json()
        }
        
        if (status >= 400 && status < 500 ) {
            const { error } = await response.json()

            // if (status === 401) {
            //     throw new NotAllowedError(error)
            // }
        
        throw new Error(error)

    }
    throw new Error('server error')

    })()
}
 
export default getWeather