import * as SC from './Modal.styled'
import { createPortal } from 'react-dom'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')

export const Modal = ({ src, alt, modalChanger }) => {

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === "Escape") modalChanger()
        }
        window.addEventListener("keydown", handleKeyDown)
    
        return () => {
            window.removeEventListener("keydown", handleKeyDown)
        }
    }, [modalChanger])

    const closeModal = (e) => {
        if (e.target === e.currentTarget) modalChanger()
    }

    return createPortal(
        <SC.Overlay onClick={(e) => closeModal(e)}>
            <SC.Modal className="modal">
                <img src={src} alt={alt} />
            </SC.Modal>
        </SC.Overlay>,
        modalRoot
    )
}

Modal.propTypes = {
    modalChanger: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}