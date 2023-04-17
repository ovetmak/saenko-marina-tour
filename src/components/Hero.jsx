import React from 'react'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-banner">
        <h1>Фітнес тур в Барселоні</h1>
        <h3>9.05.2023 - 18.05.2023</h3>
        <p>
          Рада запросити Вас у неймовірну фітнес подорож сонячною Каталонією. На
          нас чекають різноманітні тренування, екскурсії, походи, а також смачна
          та корисна їжа.
        </p>
        <a href="#tours" className="btn hero-btn">
          програма туру
        </a>
      </div>
    </section>
  )
}

export default Hero
