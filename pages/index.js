import Head from 'next/head';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import RightSide from './components/RightSide';
import { Stack } from '@mui/material';

export default function Home() {
  return (
    <>
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Stack direction="row" spacing={2} justifyContent={'space-between'}>
        <Sidebar />
        <Feed />
        <RightSide />
      </Stack>
    </>
  );
}
