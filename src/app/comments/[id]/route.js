export async function PATCH (request, {params}) {
    // Await the parsing of the request body
    const body = await request.json();
    
    // Find the index of the comment to update
    const index = comments.findIndex((c) => c.id === parseInt(params.id));
    
    if (index !== -1) {
        // Update only the text of the found comment, keeping other properties intact
        comments[index] = {
            ...comments[index],
            text: body.text
        };
        
        return new Response(JSON.stringify({
            message: "comment updated",
            comments
        }), { status: 200 });
    } else {
        return new Response(JSON.stringify({
            message: "comment not found"
        }), { status: 404 });
    }
}

// Comments array
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
];
