'use client'
import styles from './DisplayName.module.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
export default function DisplayName({ name }) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();

    const deleteName = async () => {
        const res = await fetch(`/api/deleteName?nameId=${name.id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })

        startTransition(() => {
            router.refresh();
        });
    }

    const likeName = async () => {
        const res = await fetch(`/api/likeName`, {
            method: 'PUT',
            body: JSON.stringify({ setLiked: !name.liked, id: name.id }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        startTransition(() => {
            router.refresh();
        });
    }
    return (
        <div className={styles.button}>
            <button
                key={name.id}
                className={styles.name}
                style={{ backgroundColor: "transparent", border: "none", margin: '1rem' }}
                onClick={deleteName}>
                <p>{name.name}</p>
            </button>

            <button className={styles.icon} onClick={likeName}>
                {!name.liked ? <AiOutlineHeart size={15} /> : <AiFillHeart size={15} />}
            </button>
        </div>
    )
}