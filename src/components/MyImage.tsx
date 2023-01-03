/** @jsxImportSource @emotion/react */
import {IImage} from "../models";
import {css} from "@emotion/react";
interface ImageProps {
    image: IImage
}
export function MyImage(props:ImageProps) {
    return (
        <img src={ props.image.imageSrc }
             alt={ props.image.imageAlt ? props.image.imageAlt : "Image" }
             css={css`height: 100%; width: 100%`}
        />
    )
}