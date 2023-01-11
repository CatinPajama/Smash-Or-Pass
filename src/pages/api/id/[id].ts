import { APIRoute } from "astro";


import prisma from "../../../utils/prisma"

export async function put({ params, request }) {


    const id = parseInt(params.id);

    const user = await prisma.user.findFirst({ where: { id: id } });

    if (user === null) {
        await prisma.user.create({ data: { id: id, votes: 1 } });
    }

    else await prisma.user.update({ where: { id: id }, data: { votes: user.votes + 1 } })


    return new Response("", { status: 200 })
}