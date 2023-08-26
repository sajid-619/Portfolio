import Image from "next/image";

const About = () => {
  return (
    <div className="about-container">
      <h2>About Me</h2>
      <div className="flex-about">
        <div className="about-text">
          <p>
            As a developer, I have always been passionate about creating effective solutions to
            complex problems. I have a strong foundation in software development, with a focus on web
            technologies such as HTML, CSS, JavaScript, React, Angular, NodeJS, Django and PHP/Laravel. I enjoy working on both the front-end and
            back-end of applications, and I am always looking for ways to optimize performance, improve user
            experience, and ensure the highest level of code quality.
          </p>
          <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to
            complex enterprise-level applications. I am experienced in working with a variety of development
            tools and frameworks, including React, Angular, Django, Node.js, and Laravel. I am always eager
            to learn and explore new technologies, and I am constantly seeking out opportunities to improve
            my skills and knowledge.</p>
           <p>I am also passionate about the ever-evolving intersection of Artificial Intelligence and Cybersecurity. 
            With a solid foundation in both domains, I have dedicated my career to creating 
            innovative solutions that address the intricate challenges posed by 
            modern cyber threats. My journey in AI has led me to develop cutting-edge algorithms 
            that harness the power of machine learning to detect and mitigate anomalies in network traffic, 
            proactively identifying potential security breaches before they escalate. Through in-depth research and hands-on experience, 
            I've honed my skills in developing intelligent intrusion detection systems that adapt and learn from emerging attack vectors.</p>
            <p>In the realm of Cybersecurity, I have engaged in diverse projects, from penetration testing of complex systems to 
            formulating robust encryption strategies. I thrive on staying ahead of the curve by 
            exploring new techniques to fortify digital infrastructures against cyberattacks. My dedication to security 
            extends beyond technology; I'm also an advocate for educating individuals and organizations about best practices in maintaining a secure 
            digital presence. I believe that a strong synergy between AI and Cybersecurity is pivotal in shaping a safer digital landscape, 
            and I am excited to share my journey and contributions with you through this portfolio. Feel free to explore and connect with me to 
            collaborate on innovative AI-driven cybersecurity solutions.</p>
        </div>
        <div className="about-img">
          <Image src='/images/about.jpeg' className="profile-img" width={300} height={500}/>
        </div>
      </div>
    </div>
  )
}

export default About;