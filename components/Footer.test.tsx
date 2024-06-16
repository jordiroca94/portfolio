import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import dataEn from "../data/data-en.json";
import Footer from './Footer';

describe('Footer', () => {
  it('Render footer', () => {
    render(<Footer       
      linkedinCta={dataEn.footer.linkedinCta}
      githubCta={dataEn.footer.githubCta}
      copyright={dataEn.footer.copyright}
      createdBy={dataEn.footer.createdBy} 
      />)
  })
})