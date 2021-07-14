import Post from "./post";
import { render } from '@testing-library/react'
import React from "react";

it('should render Post component', () => {
    const component = render(<Post/>);
    const wrapper = component.findAllByDisplayValue('.post-04')
    expect(wrapper.length).toBe(1)
})

















// import Post from "./post";
// import { render, screen } from '@testing-library/react';
// import React from "react";
//
// describe('Post component', () => {
//     it('should render Post component', () => {
//         render(<Post/>);
//         expect(screen.getByRole('list')).toBeInTheDocument()
//     })
// })