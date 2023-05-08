import db from '../../../../server/modules/pool';
import { NextResponse } from 'next/server';

export async function PUT(req) {
    const name = await req.json()
    const res = await db.query('UPDATE "name" SET "liked" = $1 WHERE "id" = $2;', [name.setLiked, name.id]);

    return new NextResponse(JSON.stringify(res), {
        headers: { "content-type": "application/json" },
    });
}