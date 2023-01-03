/** @jsxImportSource @emotion/react */
import React from 'react';
import {BaseBlock} from "./components/BaseBlock";
import {Button} from "./components/Button";
import {css} from "@emotion/react";
import {MyImage} from "./components/MyImage";
function GetCorpStyle(headerStyle:number,topValue:number,leftValue?:number) {
    const corpH1 = css`
      position: absolute;
      top: 20px;
      left: 285px;
      width: 738px;
      color: #000000;
      font-size: 29px;
      font-family: 'Arial', Arial, sans-serif;
      line-height: 1.55;
      font-weight: 700;
    `
    const corpH2 = css`
      position: absolute;
      top: 80px;
      left: 285px;
      width: 738px;
      color: #000000;
      font-size: 39px;
      font-family: 'Arial', Arial, sans-serif;
      line-height: 60px;
      font-weight: 400;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
    `
    const corpH3 = css`
      position: absolute;
      top: ${topValue + "px"};
      left: ${leftValue ? leftValue + "px" : "285px"};
      width: 738px;
      color: #000000;
      font-size: 20px;
      font-family: 'Arial', Arial, sans-serif;
      line-height: 60px;
      font-weight: 400;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
    `
    const corpH4 = css`
      position: absolute;
      top: ${topValue + "px"};
      left: ${leftValue ? leftValue + "px" : "285px"};
      width: 591px;
      z-index: 10;
      color: #000000;
      font-size: 20px;
      font-family: 'IBM Plex Sans',Arial,sans-serif;
      line-height: 31px;
      font-weight: 400;
      background-position: center center;
      border-color: transparent;
      border-style: solid;
    `
    switch (headerStyle) {
        case 1:
            return corpH1
        case 2:
            return corpH2
        case 3:
            return corpH3
        case 4:
            return corpH4
        default:
            return corpH3
    }
}
function GetGifStyle(topValue:number){
    return css`
      position: absolute;
      top: ${topValue + "px"};
      left: 310px;
      height: 30px;
      width: 30px;
      display:block;
    `
}
function App() {
  return (
    <div className="App">
        <BaseBlock styleName="Purple">
            <div css={GetCorpStyle(1, 150)}><span>ЯЗЫКОВОЙ ЦЕНТР "ЛАНГУАГЕ ОНЛАЙН"</span></div>
            <div css={GetCorpStyle(2, 150)}><span>Hey, welcome aboard!</span></div>
            <div css={GetGifStyle(165)}><MyImage image={{imageSrc: require("./images/push-pin-purple.gif"),imageAlt:"pin-gif"}}/></div>
            <div css={GetCorpStyle(3, 150, 350)}><span>Языковой барьер мешает свободно общаться в путешествиях?</span></div>
            <div css={GetGifStyle(215)}><MyImage image={{imageSrc: require("./images/push-pin-purple.gif"),imageAlt:"pin-gif"}}/></div>
            <div css={GetCorpStyle(3, 200, 350)}><span>Хочешь попасть в IT и успешно пройти собеседование?</span></div>
            <div css={GetGifStyle(265)}><MyImage image={{imageSrc: require("./images/push-pin-purple.gif"),imageAlt:"pin-gif"}}/></div>
            <div css={GetCorpStyle(3, 250, 350)}><span>Готовишься к экзаменам или переезду?</span></div>
            <div css={GetCorpStyle(4, 350)}><span>Ты в нужном месте! Скорее записывайся на пробное занятие, мы поможем достигнуть желаемого!</span></div>
            <Button styleName="Gradient" buttonCaption="бесплатное пробное занятие" isUpperCase={true} />
            <div css={
                css`
                left: 950px;
                top: 57px;
                position: absolute;
                box-sizing: border-box;
                display: table;
            `}>
                <MyImage image={
                    {
                        imageSrc: require("./images/Main_P.png"),
                        imageAlt:"Main"
                    }
                }/>
            </div>
        </BaseBlock>
        <BaseBlock styleName="White" />
        <BaseBlock styleName="Gray" />
    </div>
  );
}

export default App;
