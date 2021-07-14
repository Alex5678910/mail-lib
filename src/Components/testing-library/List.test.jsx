import {render, screen} from '@testing-library/react';
import Component01 from './component-01';
import React from "react";

const data = ['html', 'css', 'js']

describe('Component01 component', () => {
    it('Component01 render', () => {
        render(<Component01 items={data}/>);
        expect(screen.getByRole('list')).toBeInTheDocument()
        expect(screen.getByText('html')).toBeInTheDocument()
    })
    it('Component01 render without data', () => {
        render(<Component01/>)
        expect(screen.queryByRole('Component01')).toBeNull()
    })
    it('List snapshot', () => {
        const list = render(<Component01 items={data}/>)
        expect(list).toMatchSnapshot()
    })
    it('List empty snapshot', () => {
        const list = render(<Component01/>)
        expect(list).toMatchSnapshot()
    })
    // test('render text test', () => {
    //     render(<Component01/>);
    //     const textElement = screen.getByText(/test/);
    //     expect(textElement).toBeInTheDocument();
    // });
})