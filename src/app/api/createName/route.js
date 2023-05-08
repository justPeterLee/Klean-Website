import db from '../../../../server/modules/pool';
import { NextResponse } from 'next/server';

export async function POST(req) {
    const name = await req.json()
    const res = await db.query('INSERT INTO "name" ("name") VALUES ($1)', [name]);

    return new NextResponse(JSON.stringify(res), {
        headers: { "content-type": "application/json" },
    });
}