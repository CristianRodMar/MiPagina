import RevealContainer from "@/components/revealContainer";

export default function Example() {
  return (
    <main className="flex flex-col gap-6">
      <div className="title-container py-32">
        <h1 className="select-none lg:text-9xl md:text-6xl text-4xl text-center text-white title">
          Información
        </h1>
      </div>

      <RevealContainer>
        <h2 className="text-xl mb-2 text-center">¿Qué es esto?</h2>
        <hr />
        <p className="py-2">
          ¡Hola y bienvenido a mi portfolio en línea! Esta página web es una
          ventana a mi mundo de desarrollo y creatividad. Aquí, he creado un
          portfolio utilizando tecnología Next.js (React) como se puede apreciar
          en los header la página aún se encuentra en construcción por lo que
          falta contenido, animaciones y funcionalidades.
        </p>
        <hr />
      </RevealContainer>
      <RevealContainer>
        <h2 className="text-xl mb-2 text-center">Futuro</h2>
        <hr />
        <p className="py-2">
          Además, estoy considerando la posibilidad de añadir un videojuego que
          estoy desarrollando poco a poco en Unity. También utilizaré esta
          página web para trastear con diferentes tecnologías. El objetivo es
          demostrar la experiencia que tengo con ellas puesto que el código de
          esta página web está disponible en mi repositorio de github que puedes
          encontrar en el footer de la web.
        </p>
        <hr />
      </RevealContainer>
      <RevealContainer>
        <h2 className="text-xl mb-2 text-center">¡Gracias!</h2>
        <hr />
        <p className="py-2">
          ¡Así que mantente atento! A medida que evoluciona mi portafolio,
          podrás ver de primera mano cómo mi experiencia en estas tecnologías se
          traduce en proyectos impresionantes y en un portafolio que realmente
          destaca. ¡Gracias por visitar y espero que disfrutes explorando mi
          trabajo tanto como yo disfruto creándolo!"
        </p>
        <hr />
      </RevealContainer>
    </main>
  );
}
