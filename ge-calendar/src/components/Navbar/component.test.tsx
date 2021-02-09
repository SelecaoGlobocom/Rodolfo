import { render, fireEvent } from '@testing-library/react';
import { NavBar } from './index'
import '@testing-library/jest-dom/extend-expect'

const setup = () => {
    const actualDateMock = new Date();
    const updateDataMock = jest.fn();
    return render(<NavBar actualDate={actualDateMock} updateData={updateDataMock} />)
}

describe('Teste do navbar', () => {
    it('Renderização do título', () => {
        const { getByText } = setup();
        expect(getByText('Hoje')).toBeInTheDocument()
    })
    it('Clique dos botões', () => {
        const { getByText, getAllByRole, } = setup();
        const button = getAllByRole('link');
        fireEvent.click(button[0])
        expect(getByText('Ontem')).toBeInTheDocument()
        fireEvent.click(button[1])
        fireEvent.click(button[1])
        expect(getByText('Amanhã')).toBeInTheDocument()
    })
})