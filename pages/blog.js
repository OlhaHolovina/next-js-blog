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
        <div role="navigation">
          <ul>
            <li>
              <Link href="/blog/first-post">
                <a>First Post</a>
              </Link>
            </li>

            <li>
              <Link href="/blog/second-post">
                <a>Second Post</a>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </Layout>
  );
}
