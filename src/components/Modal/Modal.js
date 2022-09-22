import * as SC from './Modal.styled'
import { createPortal } from 'react-dom'
import { Component } from 'react'
import PropTypes from 'prop-types'

const modalRoot = document.querySelector('#modal-root')
console.log(modalRoot)

export class Modal extends Component {

    componentDidMount() {
        window.addEventListener("keydown", this.handleKeyDown)
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeyDown)
    }

    
    render() {
        const { src, alt } = this.props
        return createPortal(
            <SC.Overlay onClick={(e) => this.closeModal(e)}>
                <SC.Modal className="modal">
                    <img src={src} alt={alt} />
                </SC.Modal>
            </SC.Overlay>,
            modalRoot
        )
    }


    handleKeyDown = e => {
        if (e.code === "Escape") return this.props.modalChanger()
    }

    closeModal = (e) => {
        if (e.target === e.currentTarget) this.props.modalChanger()
    }

}

Modal.propTypes = {
    modalChanger: PropTypes.func.isRequired,
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
}