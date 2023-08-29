import Image from 'next/image'
// import styles from './page.module.css'
import styles from './page.module.css'

import { signIn } from "next-auth/react";
export default function Home() {
  return (
    <div>
      <button onClick={() => signIn("google")}>Sign in with Google</button>
      <button onClick={() => signIn("facebook")}>Sign in with Facebook</button>
    </div>
  )
}
