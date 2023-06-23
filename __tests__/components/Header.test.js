import { render, screen } from "@testing-library/react"
import Header from "../../components/Header"
import "@testing-library/jest-dom"
 
describe('Header', () => {
  it('renders links', () => {
    render(<Header />)
    const links = screen.getAllByRole('link')
    expect(links.length).toBeGreaterThanOrEqual(7)
  })
  
  it('renders Home link', () => {
    render(<Header />)
    const homeLink = screen.getByRole('link', {name: 'Home'})
    expect(homeLink).toHaveAttribute('href', '/')
  })

  it('renders Order Eggs link', () => {
    render(<Header />)
    const orderEggsLink = screen.getByRole('link', {name: 'Order Eggs'})
    expect(orderEggsLink).toHaveAttribute('href', '/order-eggs')
  })
})