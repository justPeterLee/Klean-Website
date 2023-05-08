import db from '../../../../server/modules/pool';
import { NextResponse } from 'next/server';

export async function DELETE(req) {
    // const id = await req.json()
    const id = req.nextUrl.searchParams.get('nameId')
    // console.log(id)
    const res = await db.query('DELETE FROM "name" WHERE "id" = $1', [id]);

    return new NextResponse(JSON.stringify(res), {
        headers: { "content-type": "application/json" },
    });
}