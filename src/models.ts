import React from "react";

export interface IButton {
    styleName: string
    isUpperCase?: boolean
    buttonCaption: string
}
export interface IImage {
    imageSrc: string
    imageAlt: string
}

export interface IBaseBlock {
    styleName: string
    children?: React.ReactNode
}

export interface ISize {
    height: string
    width: string
}