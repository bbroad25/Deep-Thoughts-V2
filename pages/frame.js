import Head from 'next/head';

export async function getServerSideProps({ req }) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const origin = `${protocol}://${req.headers.host}`;
  return { props: { origin } };
}

export default function Frame({ origin }) {
  return (
    <>
      <Head>
        <title>Deep Thoughts Frame</title>
        <meta property="og:title" content="Deep Thoughts" />
        <meta property="og:image" content={`${origin}/cover.jpg`} />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="New Deep Thought" />
        <meta property="fc:frame:post_url" content={`${origin}/api/deepthoughts`} />
      </Head>
      <main style={{
        padding: '2rem',
        fontFamily: 'sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center'
      }}>
        <h1>🌌 Deep Thoughts Frame</h1>
        <p>This is the Farcaster frame entry point.</p>
        <p>Post <code>{origin}/frame</code> on Farcaster to use the frame!</p>
      </main>
    </>
  );
}
