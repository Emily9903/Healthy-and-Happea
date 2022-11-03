import Head from 'next/head'
import Image from 'next/image'
import React from 'react';
import peaimg from '../public/assets/peaimg.jpeg';
import recipeimg from '../public/assets/recipeimg.jpeg';
import nutricoachimg from '../public/assets/nutricoachimg.jpeg'
import pilatescoachimg from '../public/assets/pilatesimg.webp'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Healthy and Happea</title>
      </Head>

      <main>
      <Image className={styles.homeimg} src={peaimg} alt='pea image'/>
      <h4>Healthy and Happea</h4>
      <p>Mission statement</p>
      <Link href="/recipes">
      <Image className={styles.homeimg} src={recipeimg} alt='recipe image'/>
      </Link>
      <br/>
      <Link href="/recipes">Recipes</Link>
      <br/>
      <br/>
      <Link href="/nutritionalcoaching">
      <Image className={styles.homeimg} src={nutricoachimg} alt='nutritional coaching image'/>
      </Link>
      <br/>
      <Link href="/nutritionalcoaching">Nutritional Coaching</Link>
      <br/>
      <br/>
      <Link href="/pilatescoaching">
      <Image className={styles.homeimg} src={pilatescoachimg} alt='pilates coaching image'/>
      </Link>
      <br/>
      <Link href="/pilatescoaching">Pilates Coaching</Link>
      <br/>
      <br/>
      </main>
    </div>
  )
}
