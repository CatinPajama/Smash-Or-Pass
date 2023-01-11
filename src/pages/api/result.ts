import prisma from "../../utils/prisma"

export async function get() {
    const result = await prisma.user.findMany({
        orderBy: [
            {
                votes: 'desc'
            }
        ],
    })

    return new Response(JSON.stringify(result), { status: 200 });

}