import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='/images/profile.jpeg' className="profile-img" width={300} height={300} alt="Joe's personal headshot" />
      <div className="hero-text">
        <h1>Hello, I'm Sajid Zaman</h1>
        <p>
          I'm a software engineer based in Dhaka, Bangladesh. I specialize in building (and occasionally designing)
          exceptional websites, applications, and working with AI and Cybersecurity.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/sajid_cobain94"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/sajid-619"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/sajid-zaman-920071101/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;