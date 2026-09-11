import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Philosophy from "../components/Philosophy";
import SignatureDishes from "../components/SignatureDishes";
import Story from "../components/Story";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Reservation from "../components/Reservation";
import Footer from "../components/Footer";

function HomePage() {
  return (
    <main className="bg-[#11110f] text-[#f4efe5]">
      <Navbar />
      <Hero />
      <Philosophy />
      <SignatureDishes />
      <Story />
      <Gallery />
      <Testimonials />
      <Reservation />
      <Footer />
    </main>
  );
}

export default HomePage;
