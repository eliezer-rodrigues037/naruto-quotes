import { render, screen} from '@testing-library/react';
import { Button } from './Button';
import '@testing-library/jest-dom'

test('Tenders button with a lable',()=>{
    render(<Button lable={"teste"} />);

    const buttonEl = screen.getByText('teste');
    expect(buttonEl).toBeInTheDocument();

})

