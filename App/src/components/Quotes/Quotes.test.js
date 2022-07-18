import { render, screen, fireEvent} from '@testing-library/react';
import {Quotes} from './Quotes'
import '@testing-library/jest-dom'

const quote = "Frase teste";
const speaker = "Random speaker";

test('renders received quote, speaker and a button', () => {
    render(<Quotes quote={quote} speaker={speaker}/>);

    const speakerEl = screen.getByText(`- ${speaker}`);
    const quoteEl = screen.getByText(`${quote}`);
    const buttonEl = screen.getByRole('button');

    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
});

test('calls a callback when the button is pressed',()=>{
    const callback = jest.fn();
    render(<Quotes quote={quote} speaker={speaker} onUpdate={callback}/>);

    const buttonEl = screen.getByRole('button');

    fireEvent.click(buttonEl);

    expect(callback).toHaveBeenCalledTimes(1);
})