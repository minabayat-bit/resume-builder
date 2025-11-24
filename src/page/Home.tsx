
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Testimonials from "../components/Testimonials";
import Dashbord from "./Dashboard";

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
      <section>
        <Dashbord />
      </section>
    </div>
  );
};

export default Home;
