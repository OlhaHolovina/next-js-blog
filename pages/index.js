import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className="text-center">
        <Image
          priority
          src="/images/burlington-landscaped-01.jpg"
          height={300}
          width={1500}
          className="img-fluid"
          alt='View of the Ontario lake in Burlington'
        />
      </div>
        <main className="container">
          <h1>About Burlington, ON</h1>
          <h3>Location</h3>
          <p>The City of Burlington is nestled between two amazing geographical features – the Niagara Escarpment and
            the shores of Lake Ontario – Burlington’s total land area is 187 sq. km</p>
          <p>The city center is located primarily in the southern part of the city of Burlington, while its
            agricultural, rural residences, several golf courses and conservation areas are in the northern limits. This
            makes the city an ideal place to cycle up the foothills of the escarpment or along the waterfront, hike the
            Bruce Trail, or practice water sports during the summer months.</p>
          <h3>Climate</h3>
          <p>Generally, temperatures are warmer and humid during the summer and cooler damp in the winter. Located on
            the western coast of Lake Ontario, the city enjoys wonderful spring and summer weather. Burlington also
            benefits from the sheltering effects of the Niagara Escarpment creating the most spectacular canopies of
            fall colours in October. Spring blossoms are something to behold, and they are generally popping out from
            mid-April to early June.</p>
          <h3>Community & Lifestyle</h3>
          <p>Burlington boasts some of the best hiking area in the world as it is home to the <strong>Bruce
            Trail</strong> and the <strong>Niagara Escarpment</strong>, a UNESCO-designated World Biosphere Reserve. The
            Waterfront Trail – part of the Niagara-on-the-Lake to Québec border trail – along with Spencer Smith Park
            gives you a front-row seat to panoramic views of Lake Ontario. </p>
          <p>Burlington is dedicated to the United Nations philosophy of peaceful co-operation among the peoples of the
            world. It encourages community understanding of different cultures and global issues. Many ongoing
            community-based projects and events strengthen these ties.</p>

        </main>

        <section className="d-flex gallery">
          <Image
            priority
            src="/images/about-01.jpg"
            height={320}
            width={320}
            className="rounded float-start"
            alt='View of Burlington embankment at Spencer park'
          />
          <Image
            priority
            src="/images/about-02.jpg"
            height={320}
            width={320}
            className="rounded float-start"
            alt='Beautiful home among trees with colorful autumn tree crowns'
          />
          <Image
            priority
            src="/images/about-03.jpg"
            height={320}
            width={320}
            className="rounded float-start"
            alt='Waterfall view'
          />
          <Image
            priority
            src="/images/about-04.jpg"
            height={320}
            width={320}
            className="rounded float-start"
            alt='Pond with waterlilies and lotuses'
          />
        </section>
    </Layout>
  );
}
