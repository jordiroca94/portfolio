import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Header from './Header'
import dataEn from "../data/data-en.json";

describe('Header', () => {
  it('Render header h1', () => {
    render(<Header       
        languages={dataEn.header.languages}
        navLinks={dataEn.header.navlinks}
        logo={dataEn.header.logo} />)
 
    const heading = screen.getByRole('heading', { level: 1 })
    const logo = screen.getByText(/Jordi Roca/i)
 
    expect(heading).toBeInTheDocument()
    expect(logo).toBeInTheDocument()
  })
})