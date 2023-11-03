import "./about.css";
const About = () => {
  return(
    <div className="about-container">
      <h1 className="about-title">Acerca de mí</h1>
      <div className="about-info">
        <div className="about-item">
          <span className="about-label">Nombre:</span>
          <span className="about-value">Jorge Erick Garcia Moron</span>
        </div>
        <div className="about-item">
          <span className="about-label">Edad:</span>
          <span className="about-value">33</span>
        </div>
        <div className="about-item">
          <span className="about-label">Ciudad:</span>
          <span className="about-value">Lima - Perú</span>
        </div>
        <div className="about-item">
          <span className="about-label">Profesión:</span>
          <span className="about-value">
            Ingeniero de Sistemas e Informática
          </span>
        </div>
      </div>
    </div>
  )
  
};

export default About;
