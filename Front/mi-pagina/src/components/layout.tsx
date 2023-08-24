import Head from "next/head";
import RevealNavbar from "@/components/revealNavbar";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function Layout({ children }: any) {
  return (
    <>
      <div className="video-container">
        <video className="bg-video" playsInline autoPlay muted loop>
          <source src="/assets/BGAnimation2.mp4" type="video/mp4" />
        </video>
      </div>
      <Head>
        <title>CristianRM</title>
        <meta
          name="description"
          content="Portafolio personal de desarrollo web de CristianRM"
        />
        <link rel="icon" href="/static/logo.png" />
      </Head>
      <RevealNavbar />
      <Navbar />
      <div className="content">{children}</div>
      <Footer />
    </>
  );
}
