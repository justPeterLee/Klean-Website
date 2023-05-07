import styles from './page.module.css'
import db from '../../server/modules/pool'

import CreateName from './CreateName';


async function getNames() {
  const res = await db.query('SELECT * FROM name');
  const names = res.rows;
  return names
}

export default async function Home() {
  const names = await getNames();
  return (
    <main className={styles.main}>
      <CreateName />

      <div style={{ display: "flex", flexDirection: "column" }}>
        {names &&
          names.map((name, index) => (
            <button
              key={name.id}
              style={{ backgroundColor: "transparent", border: "none", margin: '1rem' }}>
              {name.name}
            </button>))}
      </div>
    </main>
  )
}
