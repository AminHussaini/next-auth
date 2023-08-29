import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps,session }) {
  return (
    // <SessionProvider session={pageProps.session}>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export async function getServerSideProps(context) {
  // Use the fetchCookieMiddleware to fetch the cookie value
  const { myCookieValue } = await fetchCookieMiddleware(context);
  console.log(myCookieValue)
  return {
    props: {
      myCookieValue,
    },
  };
}
export default MyApp