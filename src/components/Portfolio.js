import React from 'react'
import netflix from '../images/netflix.jpeg'
import crud from '../images/crud.jpeg'
import money from '../images/money.jpeg'
import booklist from '../images/booklist.jpeg'
import { PopupboxManager, PopupboxContainer } from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css"

const Portfolio = () => {

  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum, non velit adipisci modi quo veritatis dolores dolor eius facilis quibusdam reiciendis a odio tempore laboriosam nobis earum repudiandae maiores!</p>
        <b>Demo: </b> <a className="hyper-link" onClick={() => window.open("https://asakoohki.github.io/NetflixCloneWebsite/", "_blank")}>https://asakoohki.github.io/NetflixCloneWebsite/</a>
        <br/>
        <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/AsakoOhki/NetflixCloneWebsite", "_blank")}>https://github.com/AsakoOhki/NetflixCloneWebsite</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxCrud = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={crud} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum, non velit adipisci modi quo veritatis dolores dolor eius facilis quibusdam reiciendis a odio tempore laboriosam nobis earum repudiandae maiores!</p>
        <b>Demo: </b> <a className="hyper-link" onClick={() => window.open("https://asakoohki.github.io/NodeFinalProject/", "_blank")}>https://asakoohki.github.io/NodeFinalProject/login</a>
        <br/>
        <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/AsakoOhki/NodeFinalProject", "_blank")}>https://github.com/AsakoOhki/NodeFinalProject</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCrud = {
    titleBar: {
      enable: true,
      text: "CRUD project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxMoney = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={money} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum, non velit adipisci modi quo veritatis dolores dolor eius facilis quibusdam reiciendis a odio tempore laboriosam nobis earum repudiandae maiores!</p>
        <b>Demo: </b> <a className="hyper-link" onClick={() => window.open("https://asakoohki.github.io/React-currency-exchange/", "_blank")}>https://asakoohki.github.io/React-currency-exchange/</a>
        <br/>
        <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/AsakoOhki/React-currency-exchange", "_blank")}>https://github.com/AsakoOhki/React-currency-exchange</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigMoney = {
    titleBar: {
      enable: true,
      text: "Currency Change project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  const openPopupboxBooklist = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={booklist} alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid harum, non velit adipisci modi quo veritatis dolores dolor eius facilis quibusdam reiciendis a odio tempore laboriosam nobis earum repudiandae maiores!</p>
        <b>Demo: </b><a className="hyper-link" onClick={() => window.open("https://asakoohki.github.io/BookList/"), "_blank"}>https://asakoohki.github.io/BookList/</a>
        <br/>
        <b>GitHub: </b> <a className="hyper-link" onClick={() => window.open("https://github.com/AsakoOhki/BookList", "_blank")}>https://github.com/AsakoOhki/BookList</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigBooklist = {
    titleBar: {
      enable: true,
      text: "Booklist project"
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}> 
            <img src={netflix} alt="" className="portfolio-image"/>
            <div className="overflow"></div>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxCrud}>
            <img src={crud} alt="" className="portfolio-image"/>
            <div className="overflow"></div>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxMoney}>
            <img src={money} alt="" className="portfolio-image"/>
            <div className="overflow"></div>
          </div>

          <div className="portfolio-image-box" onClick={openPopupboxBooklist}>
            <img src={booklist} alt="" className="portfolio-image"/>
            <div className="overflow"></div>
          </div>
          </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCrud} />
      <PopupboxContainer {...popupboxConfigMoney} />
      <PopupboxContainer {...openPopupboxBooklist} />
    </div>
  )
}

export default Portfolio
