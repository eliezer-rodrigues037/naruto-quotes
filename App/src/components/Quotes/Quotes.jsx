import styled from 'styled-components'
import {string} from 'prop-types';
import { Button } from '../Button';

export const Quotes = ({quote,speaker,onUpdate}) => {
    return (
        <Wraper>
            <Quote> {quote}</Quote>
            <Speaker>- {speaker}</Speaker>
            <Button lable={"Quote No Jutso"} onClick={onUpdate}/>
        </Wraper>
    );
}

Quotes.propTypes = {
    quote: string,
    speaker: string    
}

const Wraper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Quote = styled.p`
    font-size: 2em;
    margin: 0;
`

const Speaker = styled.p`
    text-align: right;
    margin-bottom: 50px;
    align-self: end;
`
