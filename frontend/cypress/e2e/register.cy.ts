describe('Register Page', () => {
  beforeEach(() => {
    cy.visit('/register')
  })

  it('should display register form', () => {
    cy.get('form').should('exist')
    cy.get('input[name="username"]').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('input[name="firstName"]').should('exist')
    cy.get('input[name="lastName"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click()
    cy.get('form').should('contain', 'El nombre de usuario es requerido')
    cy.get('form').should('contain', 'El email es requerido')
    cy.get('form').should('contain', 'La contraseña es requerida')
  })

  it('should successfully register a new user', () => {
    const timestamp = Date.now()
    const testUser = {
      username: `TestUser${timestamp}`,
      email: `test${timestamp}@example.com`,
      password: 'password123',
      firstName: 'Test',
      lastName: 'User'
    }

    cy.get('input[name="username"]').type(testUser.username)
    cy.get('input[name="email"]').type(testUser.email)
    cy.get('input[name="password"]').type(testUser.password)
    cy.get('input[name="firstName"]').type(testUser.firstName)
    cy.get('input[name="lastName"]').type(testUser.lastName)
    cy.get('button[type="submit"]').click()

    // Verificar que se redirige al login después del registro exitoso
    cy.url().should('include', '/login')
  })
}) 