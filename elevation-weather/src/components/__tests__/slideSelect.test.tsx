import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import user from '@testing-library/user-event'
import SlideSelect from '../SlideSelect'

describe('header component', () => {
	it('should start with the correct component info', () => {
		render(<SlideSelect />)
		const menuSlideElement = screen.getByRole('button', { name: 'Switch to Elevation' })
		expect(menuSlideElement).toBeInTheDocument()
	})
	it('should be able to switch active component windows', async () => {
		user.setup()
		render(<SlideSelect />)
		const menuSlideElement = screen.getByRole('button', { name: 'Switch to Elevation' })
		user.click(menuSlideElement)
		// const updatedMenuSlideElement = screen.findByRole('button', {name: 'Switch to Location'})
		// expect(updatedMenuSlideElement).toBeInTheDocument
	})
	it('should change dynamic information when switching windows', () => {
		//rendering of sub components?
	})
})
