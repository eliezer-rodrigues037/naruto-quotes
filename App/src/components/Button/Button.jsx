import {string, func} from 'prop-types'
import styled from 'styled-components'

export const Button = ({lable,onClick}) => {
    return (
        <StyledButton type='button' onClick={onClick} >{lable}</StyledButton>
    )
}

Button.propTypes = {
    lable: string,
    onClick: func
}

const StyledButton = styled.button`
    background: #dc882d;
    color: white;
    border: none;
    border-radius: 0;
    padding: 10px 20px;
    font-family: 'New Tegomin', serif;
    cursor: pointer;
    box-shadow: #333 3px 3px;

    &:hover {
        background-color: #f27137;
    }
`