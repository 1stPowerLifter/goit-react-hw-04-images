import { Dna } from 'react-loader-spinner';
import { Overlay } from 'components/Modal/Modal.styled';

export const Loader = () => {
    return (
        <Overlay>
            <Dna
                visible={true}
                height="400"
                width="400"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper"
            />
        </Overlay>
    )
}
