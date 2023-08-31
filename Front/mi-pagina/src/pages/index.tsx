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
        <h1 className="text-center text-5xl sm:text-7xl py-5">About Me</h1>
        <hr />
        <div className="p-5 sm:text-lg text-base">
          <p>
            Hi! I'm Cristian Rodríguez Martín. Although my professional journey
            started in the audiovisual world, the fact that several people in my
            personal circle are involved in the field of development piqued my
            interest in this world.
          </p>
          <br />
          <p>
            So much so that in 2021, I enrolled at IES Azarquiel Institute for a
            higher degree in web application development. Throughout this
            education, I was introduced to various technologies. Nevertheless,
            my passion for development motivates me to work on personal projects
            like this website. The goal of these projects is to learn about
            other technologies, and I'll always try to showcase these projects
            on this website.
          </p>
          <br />
          <p>
            As for my values: I strive to apply modern and creative solutions to
            complex challenges. My passion for creation and innovation drives me
            to approach each project with enthusiasm and dedication. I firmly
            believe in the importance of collaboration and continuous learning.
            I enjoy working in teams, sharing knowledge and experiences to
            achieve results. And, of course, always with some background music.
          </p>
        </div>
        <hr />
        <h1 className="text-center text-5xl py-5">Work Experience</h1>
        <hr />
        <div className="text-base">
          <ul className="flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between py-5">
            <li className="mx-2">
              <h2>Video and Animation Editor</h2>
              <p>QLASH | Spain | 01/06/2021 - Present</p>
            </li>
            <li className="mx-2">
              <h2>QA Tester LMT (Lithuania)</h2>
              <p>HPE CDS | Talavera de la Reina | 27/03/2023 - 19/06/2023</p>
            </li>
            <li className="mx-2">
              <h2>Video and Animation Editor</h2>
              <p>Pellikola | Malta | 01/04/2019 - 20/06/2019</p>
            </li>
            <li className="mx-2">
              <h2>News Production Assistant</h2>
              <p>CMM | Toledo | 01/04/2017 - 20/06/2017</p>
            </li>
          </ul>
        </div>
        <hr />
        <h1 className="text-center text-5xl py-5">Academic Education</h1>
        <hr />
        <div className="test-base">
          <ul className="flex md:flex-row flex-col md:gap-0 gap-3 items-center justify-between py-5">
            <li className="mx-2">
              <h2>Honors in Web Application Development</h2>
              <p>IES Azarquiel | Toledo | 2021 - 2023</p>
            </li>
            <li className="mx-2">
              <h2>Film and Show Realization</h2>
              <p>IES Alfonso X el Sabio | Toledo | 2017 - 2019</p>
            </li>
            <li className="mx-2">
              <h2>Film and Show Production</h2>
              <p>IES Alfonso X el Sabio | Toledo | 2015 - 2017</p>
            </li>
          </ul>
        </div>
        <hr />
        <h1 className="text-center text-5xl py-5">Skills</h1>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 pb-6">
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
          <SkillContainer># Adobe Illustrator</SkillContainer>
          <SkillContainer># Adobe Photoshop</SkillContainer>
          <SkillContainer># Adobe Audition</SkillContainer>
        </div>
        <hr />
        <h1 className="text-center text-5xl py-5">Languages</h1>
        <div className="flex flex-row items-center justify-around font-bold pb-5">
          <h2>English: Proficient</h2>
          <h2>Spanish: Native</h2>
        </div>
        <hr className="mb-10" />
      </BioContainer>
    </main>
  );
}
