import getUsers from "./_users";

export async function get(req, res) {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    });
    let userList = await getUsers()

    let data = userList.map(({ name, email,username }) => {
        return {
            name,
            email,
            username
        }
    })
    res.end(JSON.stringify(data));
}