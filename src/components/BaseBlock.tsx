/** @jsxImportSource @emotion/react */
import {IBaseBlock} from "../models";
import {Children} from "react";
import {css} from '@emotion/react'

function GetStyle(styleName:string) {
    const Purple = css`
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      height: 670px;
      width: calc(100%);
      background-color: #ebc7ed;
    `
    const White = css`
      height: 670px;
      width: calc(100%);
      background-color: white;
    `
    const Gray = css`
      height: 670px;
      width: calc(100%);
      background-color: #efefef;
    `
    switch (styleName) {
        case "Purple":
            return Purple
        case "White":
            return White
        case "Gray":
            return Gray
        default:
            return White
    }
}

export function BaseBlock({styleName, children}:IBaseBlock) {
    const mappedChildren = Children.map(children, child =>
        <div >
            {child}
        </div>
    );
    return (
        <div css={GetStyle(styleName)}>
            {mappedChildren}
        </div>
    )
}