import Head from "next/head";
import Layout from "../../components/Layout";

export default function BrontePark() {
  return (
    <>
      <Layout>
        <Head>
          <title>Bronte Creek Provincial Park</title>
        </Head>
        {/*<img src="../img/park.jpg" className="img-fluid img-cover" alt="Pond with sculpture in Royal Botanical Gardens">*/}

        <section className='text-center container'>
          <h3>Bronte Creek Provincial Park</h3>
          <div className="row">
            <div className="col-12">
              <p><strong>Bronte Creek Provincial Park</strong> is the perfect destination for your family. Visit the
                much loved Children’s Farm and Playbarn, experience history at our Spruce Lane Farm, swim in our
                outdoor pool or relax at one of our campsites. Visit farm animals, or picnic with friends! During the
                winter the annual Christmas festival. Campground access via Bronte Road only. Day use area access off
                Burloak Dr.</p>
            </div>
            <div className="col-12">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2898.596847770737!2d-79.77350368451027!3d43.40635517913047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b6732ff9f7971%3A0x301019998a11f40!2sBronte%20Creek%20Provincial%20Park!5e0!3m2!1sen!2sca!4v1647361184028!5m2!1sen!2sca"
                width="100%" height="200" allowFullScreen="" loading="lazy"></iframe>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
