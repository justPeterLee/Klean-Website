'use client';
import { useState } from "react"
// import db from '../../server/modules/pool';
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { POSTname } from "./CreateNameServer";

export default function CreateName() {
    const [name, setName] = useState('');
    const [isPending, startTransition] = useTransition()
    const router = useRouter();

    const createName = (e) => {
        e.preventDefault()
        startTransition(() => POSTname(name));
        // POSTname(name);
    }

    const createNameAPI = async (e) => {
        e.preventDefault();
        const res = await fetch('/api/createName', {
            method: 'POST',
            body: JSON.stringify(name),
            headers: {
                'Content-Type': 'application/json',
            },
        })

        const names = await res.json()
        console.log(names)
        router.refresh()
        setName('')

    }
    return (
        <form onSubmit={createNameAPI}>
            <h3>add name: </h3>
            <input
                type="text"
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <button type="submit"> submit </button>
        </form>
    )
}