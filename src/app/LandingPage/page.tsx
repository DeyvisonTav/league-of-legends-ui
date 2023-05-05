import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

import { VideoPlayerPlayNow } from "./components/video";

export default function LandingPage() {
  return (
    <div>
      <Header />
      <VideoPlayerPlayNow />
      <Footer />
    </div>
  );
}
