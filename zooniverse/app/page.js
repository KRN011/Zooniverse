import Navbar from "@/components/Navbar";
import Landing from "@/components/Landing";
import ZooBlog from "@/components/ZooBlog";
import ZooLifetag from "@/components/ZooLifetag";
import ZooEvents from "@/components/ZooEvents";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Landing/>
      <ZooBlog/>
      <ZooLifetag/>
      <ZooEvents/>
      <Footer/>
    </main>
  );
}
