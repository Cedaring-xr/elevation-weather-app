import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header'

describe('header component', () => {
	it('should render the component', () => {
		render(<Header />)
		const headingElement = screen.getByRole('heading', { level: 1 })
		expect(headingElement).toBeInTheDocument()
	})

	it('should display the correct main heading text', () => {
		render(<Header />)
		const headingElement = screen.getByRole('heading', { level: 1 })
		expect(headingElement).toHaveTextContent('Elevation Weather App')
	})

	it('should display the subtitle text', () => {
		render(<Header />)
		const subtitleElement = screen.getByRole('heading', { level: 4 })
		expect(subtitleElement).toBeInTheDocument()
		expect(subtitleElement).toHaveTextContent('real-time weather search')
	})

	it('should render the background image', () => {
		render(<Header />)
		const imageElement = screen.getByAltText('mist tree background')
		expect(imageElement).toBeInTheDocument()
	})

	it('should have correct image source URL', () => {
		render(<Header />)
		const imageElement = screen.getByAltText('mist tree background')
		expect(imageElement).toHaveAttribute(
			'src',
			'https://mray-dev-resources.s3.us-east-2.amazonaws.com/weather-app/headerBackground.gif'
		)
	})

	it('should render image with appropriate alt text for accessibility', () => {
		render(<Header />)
		const imageElement = screen.getByRole('img')
		expect(imageElement).toHaveAccessibleName('mist tree background')
	})

	it('should render all header elements together', () => {
		render(<Header />)
		const mainHeading = screen.getByRole('heading', { level: 1 })
		const subtitle = screen.getByRole('heading', { level: 4 })
		const image = screen.getByRole('img')

		expect(mainHeading).toBeInTheDocument()
		expect(subtitle).toBeInTheDocument()
		expect(image).toBeInTheDocument()
	})

	// it('should apply correct CSS classes to main container', () => {
	//     const { container } = render(<Header />)
	//     const mainDiv = container.firstChild
	//     expect(mainDiv).toHaveClass('w-screen', 'overflow-hidden', 'h-[220px]', 'bg-stone-900')
	// })

	it('should apply correct CSS classes to image', () => {
		render(<Header />)
		const imageElement = screen.getByAltText('mist tree background')
		expect(imageElement).toHaveClass('w-screen', 'min-h-[200px]', 'xl:max-w-[1800px]', 'max-h-[220px]', 'mx-auto')
	})

	it('should render heading text with white color styling', () => {
		render(<Header />)
		const mainHeading = screen.getByRole('heading', { level: 1 })
		const subtitle = screen.getByRole('heading', { level: 4 })

		expect(mainHeading).toHaveClass('text-neutral-50')
		expect(subtitle).toHaveClass('text-neutral-50')
	})

	it('should render with proper heading hierarchy', () => {
		render(<Header />)
		const allHeadings = screen.getAllByRole('heading')

		expect(allHeadings).toHaveLength(2)
		expect(allHeadings[0].tagName).toBe('H1')
		expect(allHeadings[1].tagName).toBe('H4')
	})
})
