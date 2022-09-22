import { Box } from "components/Box"
import * as SC from "./Button.styled"
import PropTypes from 'prop-types'


export const Button = ({ title, onClick }) => {
    return (
        <Box display="flex" justifyContent='center'>
            <SC.Button type="button" onClick={onClick}> {title} </SC.Button>
        </Box>
    )
}

Button.propTypes = {
    title: PropTypes.string,
    onClick:PropTypes.func.isRequired
}