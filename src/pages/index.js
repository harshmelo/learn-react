// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import Gallery from './qcomps/gallery_props.js'
import Kat_Profile from './qcomps/profile_mistake'
import MyComp from './qcomps/firstcomp.js'
import Bio from './qcomps/bios'
import TodoList from './qcomps/todos'

export default function Home() {
  return (
    <div className={styles.main}>
        <Gallery/>
    </div>
  )
}
