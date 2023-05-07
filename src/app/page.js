import Image from 'next/image'
import styles from './page.module.css'
import db from '../../server/modules/pool'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = 0,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'


async function getNames() {
  const res = await db.query('SELECT * FROM name');
  const names = res.rows;
  return names
}

export default async function Home() {
  const names = await getNames();
  return (
    <main className={styles.main}>
      {names && names.map((name, index) => (<p key={name.id}>{name.name}</p>))}
    </main>
  )
}
