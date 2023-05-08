import { S3Client } from "@aws-sdk/client-s3";
import dotenv from 'dotenv';
dotenv.config();
import styles from './styling/page.module.css'
import db from '../../server/modules/pool'

import CreateName from './CreateName/CreateName';
import DisplayName from './DispayName/DisplayName';

async function getNames() {
  const res = await db.query('SELECT * FROM name ORDER BY "id" ASC');
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
            <DisplayName name={name} />))}
      </div>
    </main>
  )
}
