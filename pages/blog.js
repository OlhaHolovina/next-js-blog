import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section >
        <h2>Posts List</h2>
        <ul className="list-group">
          <Link href="/blog/bronte-park">
            <li className="list-group-item">Bronte Park</li>
          </Link>
          <Link href="/blog/burlington-gallery">
            <li className="list-group-item">Burlington Gallery</li>
          </Link>
        </ul>
      </section>
    </Layout>
  );
}
