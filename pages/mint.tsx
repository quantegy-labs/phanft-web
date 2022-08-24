import { Container, Paper } from '@mui/material';
import type { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../components/layouts/AppLayout";
import MintingContainer from '../components/minting/MintingContainer';

const AdminPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhanFT | Your Web 3.0 Pass to 4.0 Phandom</title>
      </Head>
      <AppLayout>
        <Container maxWidth="xl" sx={{my: 8 }}>
          <Paper sx={{ p: 4 }}>
            <MintingContainer />
          </Paper>
        </Container>
      </AppLayout>
    </>
  );
};

export default AdminPage;
