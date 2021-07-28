

import fetch from "node-fetch"

const URL = "https://jsonplaceholder.typicode.com/users" // + apikey + db backend

async function getUsers() {
    let response = await fetch(URL);
    let data = await response.json()
    return data
}

export default getUsers