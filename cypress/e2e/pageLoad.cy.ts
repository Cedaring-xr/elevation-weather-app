describe('template spec', () => {
	it('landing page contains header text', () => {
		cy.visit('http://localhost:3000')
		cy.get('#main-title').should('contain.text', 'Elevation Weather App')
	})
})
