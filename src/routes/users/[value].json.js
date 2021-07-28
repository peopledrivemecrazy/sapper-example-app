import getUsers from "./_users";


export async function get(req, res) {

    let lookup = req.params.value

    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let userList = await getUsers()

    let data = userList.find(e => e.username === lookup)
    
    res.end(JSON.stringify(data));
}