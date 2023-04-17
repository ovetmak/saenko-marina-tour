import React from 'react'
import Title from './Title'
import aboutImg from '../images/about.jpeg'

const About = () => {
  return (
    <section className="section" id="about">
      <Title title="про" subTitle="мене" />

      <div className="section-center about-center">
        <div className="about-img">
          <img src={aboutImg} className="about-photo" alt="awesome beach" />
        </div>
        <article className="about-info">
          <h3>¡Hola!</h3>
          <p>
            Мене звуть Марина, я - фітнес тренер, вже більше 20 років. Нещодавно
            я переїхала до Іспанії (нехай пробачать мене Каталанці) і дуже
            полюбила це місце.
          </p>
          <p>
            Я люблю спорт та чудово проводити час в гарній компанії, тому
            вирішила поєднати ці дві речі та організувати для Вас фітнес тур
            сонячною Каталонією.
          </p>
          <p>
            Окрім щоденних різноманітних тренувань я підготувала для Вас безліч
            цікавих речей: екскурсії Барселоною та ще одним неймовірним містом,
            пробіжки та прогулянки біля моря, шопінг, смачну їжу на терасі з
            видом на море і зовсім трошечки відпочинку біля басейну.
          </p>
          <p>
            Якщо у Вас виникнуть будь-які питання стосовно туру, обовʼязково
            напишіть мені в інстаграм!
          </p>
          <a
            href="https://www.instagram.com/saenkomarina/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            @saenkomarina
          </a>
        </article>
      </div>
    </section>
  )
}

export default About
