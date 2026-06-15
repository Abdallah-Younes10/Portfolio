import TextType from "./TextType";

export const HeroText = () => {
  return (
    <div className="ml-8 flex flex-col gap-4">
      <h1
        style={{ fontFamily: "Fredericka the Great" }}
        className="font-extrabold leading-tight"
      >
        <span className="block text-3xl lg:text-4xl">
          Hi, I'm
        </span>

        <span className="block text-3xl lg:text-7xl mt-2 ml-5">
          Abdallah Younes
        </span>
      </h1>

      <div className="flex flex-wrap items-center gap-2 text-xl lg:text-2xl">
        <span className="text-gray-300">
          Frontend Developer |
        </span>

        <span className="text-cyan-300 w-[350px]   ">
          <TextType
            text={[
              "React Developer",
              "JavaScript Developer",
              "Competitive Programmer",
              
            ]}
            typingSpeed={75}
            deletingSpeed={50}
            pauseDuration={1500}
            showCursor
            cursorCharacter="_"
          />
        </span>
      </div>

      <p className="max-w-2xl text-lg lg:text-xl text-gray-300 leading-relaxed">
        Passionate Full Stack Developer with experience in React,
        JavaScript, .NET, Spring Boot, and Angular. I enjoy building
        scalable web applications, solving complex problems, and creating
        clean, user-friendly experiences.
      </p>

      
    </div>
  );
};