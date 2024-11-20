import Carousel from "../components/Carousel";
import { Container } from "@mui/material";
import CardsHome from "../components/CardsHome";
import PaperShop from "../components/PaperShop";

function HomePage() {
  const images = [
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F217667ea-2ff6-469b-afa0-4444f72785e0.jpeg&w=1920&q=75",
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F5f1bc604-0575-4647-a2da-91f0046d9c02.jpeg&w=1920&q=75",
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Ff5a54b41-1330-413b-bba5-e962a41c6f94.jpeg&w=1920&q=75",
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Fd927bd02-85c1-4f15-8f8a-c4a268d932bb.jpeg&w=1920&q=75",
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F5f1bc604-0575-4647-a2da-91f0046d9c02.jpeg&w=1920&q=75",
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2Fb0e4675f-4472-4ba4-adeb-15fa335c6f28.jpeg&w=1920&q=75",
    "https://maximstore.com/_next/image?url=https%3A%2F%2Fback.maximstore.com%2Fstatic%2Fimages%2F3590d876-a57b-4a2e-bf8f-9cc84577eb6f.jpeg&w=1920&q=75",
  ];

  return (
    <div>
      <Carousel images={images} />
      <Container sx={{ marginTop: "64px" }}>
        <CardsHome />
        <PaperShop />
      </Container>
    </div>
  );
}

export default HomePage;
