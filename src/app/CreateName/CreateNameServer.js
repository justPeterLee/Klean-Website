"use server"
import db from '../../../server/modules/pool';
import { revalidatePath } from 'next/cache';
export async function POSTname(name) {
    console.log(name)
    const res = await db.query('INSERT INTO "name" ("name") VALUES ($1)', [name]);
    revalidatePath(`/page`)
    // return rows
}