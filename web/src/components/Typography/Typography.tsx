import React from 'react'

import './Typography.scss'

export type TypographyProps = {
  style:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'h7'
    | 'h8'
    | 'subtitle1'
    | 'subtitle2'
    | 'subtitle3'
    | 'description'
    | 'body1'
    | 'body2'
    | 'caption1'
    | 'caption2'
    | 'caption3'
    | 'caption4'
    | 'breadcrumbs'
    | 'breadcrumbs-bold'
    | 'button-text'
    | 'label'
    | 'heading-modal'
    | 'body-modal'
  text?: string
  theme?: 'light' | 'dark'
}

const Typography: React.FC<TypographyProps> = ({
  style,
  text,
  theme,
  children,
}) => {
  return (
    <div className={`typography ${style} ${theme}`}>
      {text}
      {children}
    </div>
  )
}

export default Typography
