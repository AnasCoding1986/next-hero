export async function GET () {
    return Response.json(users, {
            headers : {
                "set-cookies" : "theem=dark"
            }
        })
}


const users = [
    {
        id: 1,
        text: "u-1"
    },
    {
        id: 2,
        text: "u-2"
    },
    {
        id: 3,
        text: "u-3"
    },
    {
        id: 4,
        text: "u-4"
    }
]