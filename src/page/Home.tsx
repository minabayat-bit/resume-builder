import Builder from "../components/Builder";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Testimonials from "../components/Testimonials";

export const Home = () => {
  return (
    <div>
      <section>
        <Header />
      </section>
      <section>
        <Features />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
      <Builder />
    </div>
    
  );
};

export default Home;
