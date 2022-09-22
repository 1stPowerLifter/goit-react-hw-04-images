import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import * as SC from "./ImageGallery.styled";
import PropTypes from 'prop-types'


export const ImageGallery = ({ imgs }) => {
    return (
        <SC.ImageGallery>
            {imgs.map(img => <ImageGalleryItem img={img} key={img.id} />)}
        </SC.ImageGallery>
    )
}

ImageGalleryItem.propTypes = {
    img: PropTypes.object.isRequired
}