import RevealContainer from "@/components/revealContainer";

export default function Example() {
  return (
    <main className="flex flex-col gap-6">
      <div className="title-container py-32">
        <h1 className="select-none lg:text-9xl md:text-6xl text-4xl text-center text-white title">
          Information
        </h1>
      </div>

      <RevealContainer>
        <h2 className="text-xl mb-2 text-center">What is this?</h2>
        <hr />
        <p className="py-2">
          Hello and welcome to my online portfolio! This webpage is a window into my world of development and creativity. Here, I've created a portfolio using Next.js (React) technology, as you can see in the headers. The page is still under construction, so content, animations, and functionalities are missing. Even the Vercel domain on this webpage, as the idea is to deploy it on my own server using Docker and a custom domain.
        </p>
        <hr />
      </RevealContainer>
      <RevealContainer>
        <h2 className="text-xl mb-2 text-center">Future</h2>
        <hr />
        <p className="py-2">
          Furthermore, I'm considering the possibility of adding a video game that I'm gradually developing in Unity. I'll also use this webpage to experiment with different technologies. The goal is to showcase the experience I have with them, as the code for this webpage is available in my GitHub repository, which you can find in the footer of the website.
        </p>
        <hr />
      </RevealContainer>
      <RevealContainer>
        <h2 className="text-xl mb-2 text-center">Thank You!</h2>
        <hr />
        <p className="py-2">
          So stay tuned! As my portfolio evolves, you'll get a firsthand look at how my experience in these technologies translates into impressive projects and a standout portfolio. Thank you for visiting, and I hope you enjoy exploring my work as much as I enjoy creating it!
        </p>
        <hr />
      </RevealContainer>
    </main>
  );
}

