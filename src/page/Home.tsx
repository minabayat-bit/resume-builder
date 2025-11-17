import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Login from "../components/Login";
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
      <section>
        <Login />
      </section>
    </div>
  );
};

export default Home;
