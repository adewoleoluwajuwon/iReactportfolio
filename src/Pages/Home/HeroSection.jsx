export default function HeroSection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById("Contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Isaiah</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
            I'm passionate about creating user-friendly and visually appealing
        web experiences.
            <br /> With expertise in HTML, CSS, JavaScript and React, I
        strive to bring designs to life and optimize for performance and
        accessibility.
          </p>
        </div>
        <button className="btn btn-primary" onClick={scrollToContact}>
          Get In Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/nice.jpg" alt="Hero Section" />
      </div>
    </section>
  );
}
