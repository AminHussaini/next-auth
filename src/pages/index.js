import Head from "next/head";
import Header from "../components/Header";
// import styles from "../styles/Home.module.css";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  console.log({session})

  
  return (
    <div className={{}}>
      <Head>
        <title>Nextjs | Next-Auth</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={{}}>
        <h1 className={{}}>
          Authentication in Next.js app using Next-Auth
        </h1>
        <div className={{}}>
          {loading && <div className={{}}>Loading...</div>}
          {session ? (
            <>
              <p style={{ marginBottom: "10px" }}>
                Welcome, {session.user.name ?? session.user.email}
              </p>
              <br />
              <img src={session.user.image} alt="" className={{}} />
            </>
          ) : (
            <p className={{}}>Please Sign in</p>
          )}
        </div>
      </main>
    </div>
  );
}