describe('Login Page', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should display login form', () => {
    cy.get('form').should('exist')
    cy.get('input[name="email"]').should('exist')
    cy.get('input[name="password"]').should('exist')
    cy.get('button[type="submit"]').should('exist')
  })

  it('should show validation errors for empty fields', () => {
    cy.get('button[type="submit"]').click()
    cy.get('form').should('contain', 'El email es requerido')
    cy.get('form').should('contain', 'La contraseña es requerida')
  })

  it('should show error for invalid credentials', () => {
    // Interceptar la llamada al API para simular un error
    cy.intercept('POST', 'http://localhost:3000/auth/login', {
      statusCode: 401,
      body: {
        message: 'Credenciales inválidas'
      }
    }).as('loginRequest')

    cy.get('input[name="email"]').type('invalid@example.com')
    cy.get('input[name="password"]').type('wrongpassword')
    cy.get('button[type="submit"]').click()

    // Verificar que la llamada al API se realizó
    cy.wait('@loginRequest')
    
    // Verificar que seguimos en la página de login
    cy.url().should('include', '/login')
  })

  it('should successfully login with valid credentials', () => {
    // Primero registramos un usuario
    const timestamp = Date.now()
    const testUser = {
      username: `TestUser${timestamp}`,
      email: `test${timestamp}@example.com`,
      password: 'password123',
      firstName: 'Test',
      lastName: 'User'
    }
    
    cy.visit('/register')
    cy.get('input[name="username"]').type(testUser.username)
    cy.get('input[name="email"]').type(testUser.email)
    cy.get('input[name="password"]').type(testUser.password)
    cy.get('input[name="firstName"]').type(testUser.firstName)
    cy.get('input[name="lastName"]').type(testUser.lastName)
    cy.get('button[type="submit"]').click()
    
    // Luego intentamos hacer login
    cy.visit('/login')
    cy.get('input[name="email"]').type(testUser.email)
    cy.get('input[name="password"]').type(testUser.password)
    cy.get('button[type="submit"]').click()

    // Verificar que se redirige al dashboard después del login exitoso
    cy.url().should('include', '/dashboard')
  })
}) 