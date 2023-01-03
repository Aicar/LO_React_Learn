/** @jsxImportSource @emotion/react */
import {IButton} from "../models";
import {css} from "@emotion/react";
function getStyle(styleName:string) {
    const Gradient = css`
      background-image: linear-gradient(to right, #a437ab, #ea89f0);
      border-style: none;
      border-radius: 5px;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 0.9375rem;
      letter-spacing: 1px;
      box-shadow: 0px 2px 6px 0 rgba(0,0,0,0.25);
      margin: 30px auto 0;
      padding: 8px 36px 9px 35px;
      position: absolute;
      top: 505px;
      left: 305px;
      width: 480px;
      height: 70px;
      text-align: center;
      cursor: pointer;
    `
    switch (styleName) {
        case "Gradient":
            return Gradient
        default:
            return Gradient
    }
}
function getSpanStyle(styleName:string) {
    const Gradient = css`
      color: #ffffff;
      font-size: 20px;
      font-family: 'Arial',Arial,sans-serif;
      line-height: 1.55;
      font-weight: 600;
      border-radius: 30px;
      border-color: transparent;
      border-style: none;
      position: relative;
      top: 25%;
    `
    switch (styleName) {
        case "Gradient":
            return Gradient
        default:
            return Gradient
    }
}
const handleClick = () => {
    console.log('Button is clicked');
}

export function Button({styleName, buttonCaption, isUpperCase}:IButton) {
    return (
        <div onClick={handleClick} css={ getStyle(styleName)}>
            <a css={ getSpanStyle(styleName) }>{ isUpperCase ? buttonCaption.toUpperCase() : buttonCaption }</a>
        </div>
    )
}