import Head from 'next/head';
import VideoDubberCard from '../components/VideoDubberCard';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <Head>
        <title>VideoDubber UI</title>
        <meta name="description" content="VideoDubber - Fast Video Translator UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <VideoDubberCard />
      </main>
    </div>
  );
}
