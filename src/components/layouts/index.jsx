import Head from "next/head";
import Main from "./main";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Absensi Mobile</title>
      </Head>
      <Main>{children}</Main>
    </>
  );
}
