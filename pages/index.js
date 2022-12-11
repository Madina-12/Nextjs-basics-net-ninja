import Head from 'next/head'

export default function Home({ninjas}) {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <h1 style={{textAlign:"center"}}>Home Page</h1>
    </>
  );
}
