import React from 'react'
import { CSSTransition } from 'react-transition-group'

import './UpdateBar.scss'

import Icon from '../Icon/Icon'
import ButtonClose from '../ButtonClose/ButtonClose'

export type UpdateBarProps = {
  active: boolean
  onClose?: () => void
  setShowUpdatePromptModal: () => void
  text: string
  buttonPrimaryText: string
  buttonSecondaryText?: string
  migratedSharedProjectText?: string
}

export default function UpdateBar({
  active,
  onClose,
  setShowUpdatePromptModal,
  text,
  buttonPrimaryText,
  buttonSecondaryText,
  migratedSharedProjectText,
}) {
  return (
    <CSSTransition
      in={active}
      timeout={400}
      unmountOnExit
      classNames="update-bar"
    >
      <div className="update-bar-wrapper">
        <div className="update-bar-text-wrapper">
          <span>{text}</span>
          <span>{migratedSharedProjectText}</span>
        </div>

        <div className="update-bar-action-buttons">
          {/* secondary action button / changelog */}
          <a
            className="update-bar-action-button-secondary"
            onClick={() => setShowUpdatePromptModal(true)}
          >
            {buttonSecondaryText}
          </a>

          {/* primary action button / update now */}
          <a
            className="update-bar-action-button-primary"
            onClick={() => setShowUpdatePromptModal(true)}
          >
            {buttonPrimaryText}
          </a>
        </div>
        {!migratedSharedProjectText && (
          <div className="update-bar-close">
            <ButtonClose onClick={() => onClose()} size="small" />
          </div>
        )}
      </div>
    </CSSTransition>
  )
}