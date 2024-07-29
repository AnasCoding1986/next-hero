export async function PATCH (request, {params}) {
    console.log(params.id);

    const body = await request.json();
    const index = users.findIndex((u) => u.id === parseInt(params.id));

    users[index] = {
        text : body.text
    }
  
    return Response.json({
        message: "users updated",
        users
    })
}

export async function DELETE (request, {params}) {
    const newUsers = users.filter((u) => u.id !== parseInt(params.id));
    return Response.json({
        message: "users deleted",
        newUsers
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