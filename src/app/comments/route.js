export async function GET () {
    return Response.json({
        comments
    })
}

export async function POST (request) {

    const newComment = await request.json()
    comments.push({
        id: comments.length + 1,
        text: newComment.text
    })

    Response.json({
        message: 'new comment added',
        comments
    })
}


const comments = [
    {
        id: 1,
        text: "c-1"
    },
    {
        id: 2,
        text: "c-2"
    },
    {
        id: 3,
        text: "c-3"
    },
    {
        id: 4,
        text: "c-4"
    }
]