import * as SC from "./ImageGalleryItem.styled";
import { useState } from 'react';
import { Modal } from "components/Modal/Modal";
import PropTypes from 'prop-types'

export const ImageGalleryItem = ({ img: { webformatURL, largeImageURL, tags } }) => {
    const [showModal, setShowModal] = useState(false)

    const modalChanger = () => setShowModal(showModal => !showModal)
        


    return (
        <SC.ImageGalleryItem >
            <img src={webformatURL} alt={tags}
                onClick={modalChanger}
            />
            {showModal &&
                <Modal src={largeImageURL}
                    alt={tags}
                    modalChanger={modalChanger} />
            }
        </SC.ImageGalleryItem>
    )
    
}

ImageGalleryItem.propTypes = {
    img: PropTypes.shape({
        webformatURL: PropTypes.string.isRequired,
        largeImageURL: PropTypes.string.isRequired,
        tags: PropTypes.string.isRequired
    })
}