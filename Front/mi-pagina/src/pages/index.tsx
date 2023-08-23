import "@/styles/index.css";
import BioContainer from "@/components/bioContainer";
import SkillContainer from "@/components/skillContainer";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="title-container py-32">
        <h1 className="select-none lg:text-9xl md:text-6xl text-4xl text-center text-white title">
          Cristian Rodríguez Martín
        </h1>
      </div>
      <BioContainer imagePath="/static/Foto.png">
        <h1 className='text-center text-5xl sm:text-7xl py-5'>Sobre mi</h1>
        <hr />
        <div className="p-5 sm:text-lg text-base">
          <p>
            ¡Hola! Soy Cristian Rodríguez Martín. Aunque mi camino profesional
            comenzó en el mundo audiovisual, el hecho de que en mi entorno
            personal varias personas se dediquen al mundo del desarrollo
            hizo que me interesase por este mundo.
          </p>
          <br/>
          <p>
            Tal fue así que en el añó 2021 me matriculé en el instituto IES Azarquiel
            en el grado superior de desarrollo de aplicaciones web. Durante esta
            formación me enseñaron diversas tecnologías. Aun así mi pasión por el
            desarrollo me motiva a desarrollar proyectos personales tales como esta
            página web. El objetivo de estos proyectos es formarme en otras 
            tecnologías, intentaré siempre que sea posible colocar esos proyectos
            en esta web.
          </p>
          <br/>
          <p>
            Como valores: Intento aplicar soluciones modernas y creativas a desafíos
            complejos. Mi pasión por la creación y la innovación me motiva a enfrentar
            cada proyecto con entusiasmo y dedicación. Creo firmemente en la importancia
            de la colaboración y el aprendizaje continuo. Me encanta trabajar en equipo,
            compartiendo conocimientos y experiencias para lograr resultados. Siempre 
            claro con música de fondo.
          </p>
        </div>
        <hr />
        <h1 className='text-center text-5xl py-5'>Experiencia Laboral</h1>
        <hr />
        <div className="text-base">
          <ul className='flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between py-5'>
            <li className="mx-2">
              <h2>Editor de video y animación</h2>
              <p>QLASH | España | 01/06/2021 - Actual</p>
            </li>
            <li className="mx-2">
              <h2>QA Tester LMT (Lituania)</h2>
              <p>HPE CDS | Talavera de la Reina | 27/03/2023 - 19/06/2023</p>
            </li>
            <li className="mx-2">
              <h2>Editor de video y animación</h2>
              <p>Pellikola | Malta | 01/04/2019 - 20/06/2019</p>
            </li>
            <li className="mx-2">
              <h2>Ayudante de producción de informativos</h2>
              <p>CMM | Toledo | 01/04/2017 - 20/06/2017</p>
            </li>
          </ul>
        </div>
        <hr />
        <h1 className='text-center text-5xl py-5'>Formación Académica</h1>
        <hr />
        <div className='test-base'>
          <ul className='flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between py-5'>
            <li className="mx-2">
              <h2>Matrícula de honor en desarrollo de aplicaciones web</h2>
              <p>IES Azarquiel | Toledo | 2021 - 2023</p>
            </li>
            <li className="mx-2">
              <h2>Realización de cine y espectáculos</h2>
              <p>IES Alfonso X el sabio | Toledo | 2017 - 2019</p>
            </li>
            <li className="mx-2">
              <h2>Producción de cine y espectáculos</h2>
              <p>IES Alfonso X el sabio | Toledo | 2015 - 2017</p>
            </li>
          </ul>
        </div>
        <hr/>
        <h1 className='text-center text-5xl py-5'>Habilidades</h1>
        <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pb-6'>
          <SkillContainer># Java</SkillContainer>
          <SkillContainer># JavaScript</SkillContainer>
          <SkillContainer># TypeScript</SkillContainer>
          <SkillContainer># React</SkillContainer>
          <SkillContainer># Next.js</SkillContainer>
          <SkillContainer># Svelte</SkillContainer>
          <SkillContainer># HTML5/CSS3</SkillContainer>
          <SkillContainer># JSF</SkillContainer>
          <SkillContainer># JSP</SkillContainer>
          <SkillContainer># SASS</SkillContainer>
          <SkillContainer># SCSS</SkillContainer>
          <SkillContainer># WordPress</SkillContainer>
          <SkillContainer># C#</SkillContainer>
          <SkillContainer># SQL</SkillContainer>
          <SkillContainer># PL/SQL</SkillContainer>
          <SkillContainer># SpringBoot</SkillContainer>
          <SkillContainer># JPA</SkillContainer>
          <SkillContainer># JDBC</SkillContainer>
          <SkillContainer># MVC</SkillContainer>
          <SkillContainer># EJB</SkillContainer>
          <SkillContainer># Maven</SkillContainer>
          <SkillContainer># JUnit</SkillContainer>
          <SkillContainer># Cucumber</SkillContainer>
          <SkillContainer># Jenkins</SkillContainer>
          <SkillContainer># Vagrant</SkillContainer>
          <SkillContainer># Ansible</SkillContainer>
          <SkillContainer># Docker</SkillContainer>
          <SkillContainer># Mockito</SkillContainer>
          <SkillContainer># Selenium</SkillContainer>
          <SkillContainer># Linux</SkillContainer>
          <SkillContainer># Git</SkillContainer>
          <SkillContainer># Shell scripting</SkillContainer>
          <SkillContainer># Postman</SkillContainer>
          <SkillContainer># Agile</SkillContainer>
          <SkillContainer># Microsoft Office</SkillContainer>
          <SkillContainer># Blender</SkillContainer>
          <SkillContainer># Adobe Premiere</SkillContainer>
          <SkillContainer># Adobe After Effects</SkillContainer>
          <SkillContainer># Adobe Ilustrator</SkillContainer>
          <SkillContainer># Adobe Photoshop</SkillContainer>
          <SkillContainer># Adobe Audition</SkillContainer>
        </div>
        <hr/>
        <h1 className='text-center text-5xl py-5'>Idiomas</h1>
        <div className='flex flex-row items-center justify-around font-bold pb-5'>
          <h2>Ingles: Alto</h2>
          <h2>Castellano: Nativo</h2>
        </div>
        <hr/>
      </BioContainer>
    </main>
  );
}
