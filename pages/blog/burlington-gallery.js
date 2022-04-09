import Head from "next/head";
import Layout from "../../components/Layout";
import Image from "next/image";

export default function BurlingtonGallery() {
  return (
    <>
      <Layout>
        <Head>
          <title>Art Gallery of Burlington</title>
        </Head>

        <Image
          priority
          src="/images/art.jpg"
          height={300}
          width={1500}
          className="img-fluid"
          alt='Pond with sculpture in Royal Botanical Gardens'
        />

        <div className="container">
          <h3>Art Gallery of Burlington</h3>
          <div className="row">
            <div className="col-12">
              <p><strong>The Art Gallery of Burlington</strong> is Burlington’s public art gallery and community centre.
                It is a place of intersection where creators, cultures and communities meet and share in the wealth of
                human creativity. The gallery is home to an acclaimed collection of contemporary Canadian Ceramics, with
                over 2,000 pieces in the collection. The Art Etc. Gift Shop is part of the Art Gallery of Burlington and
                specializes in Canadian hand crafted items, all of which are carefully selected by the shop’s selection
                committee.</p>
            </div>
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5805.0237933996905!2d-79.79958592268854!3d43.32447626653566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882c9e3be036103f%3A0xc64b49ae49422839!2sArt%20Gallery%20of%20Burlington!5e0!3m2!1sen!2sca!4v1647359812904!5m2!1sen!2sca"
                width="100%" height="200" allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
