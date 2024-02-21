// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Profile from './components/profile'
import List from './components/list_keys'
import RecipeList from './qcomps/recipes'
import Gallery from './components/whyState'
import Form from './components/snapshot2'
import FeedbackForm from './qcomps/thankYouCrash'
import Counter from './qcomps/snapshot'
import RequestTracker from './qcomps/shoppingCart'
import Scoreboard from './qcomps/updObjectsForm'
export default function Home() {
  return (
    <div className={styles.main}>
        <Scoreboard />
    </div>
  )
}
