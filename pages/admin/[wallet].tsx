import type { NextPage } from "next";
import Head from "next/head";
import AppLayout from "../../components/layouts/AppLayout";

const AdminPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>PhanFT | Your Web 3.0 Pass to 4.0 Phandom</title>
      </Head>
      <AppLayout>

      </AppLayout>
    </>
  );
};

AdminPage.getInitialProps = (ctx) => {
	const { query: { wallet } } = ctx
	console.log({wallet})
	return {
		data: {
			hello: 'world'
		}
	}
}

export default AdminPage;
