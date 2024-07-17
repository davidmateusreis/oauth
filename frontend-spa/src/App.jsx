function App() {
  return (
    <main>
      <div>
        <br />
        <div className="d-grid gap-2 col-4 mx-auto">
          <br />
          <form className="form-signin w-100 m-auto">
            <a className="w-100 btn btn-lg btn-primary" href="http://localhost:3000/oauth2/authorization/keycloak"
              role="link" style={{ marginTop: '10px' }}>
              Login
            </a>
          </form>
        </div>
      </div>
    </main>
  )
}

export default App
