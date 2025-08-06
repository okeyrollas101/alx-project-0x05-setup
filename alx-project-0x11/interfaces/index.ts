import * as React from "react"

export interface ReactComponentProps {
    children: React.ReactNode
}

export interface GeneratedImageProps {
    imageUrl: string,
    prompt: string,
    width?: number,
    height?: number,
    action: (imagePath: string) => void,
}

export type RequestProps = {
    prompt: string,
}

export type ImageProps = Pick<GeneratedImageProps, "imageUrl" | "prompt">;