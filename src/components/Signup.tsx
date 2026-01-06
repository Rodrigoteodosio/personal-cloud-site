function Signup() {
  return (
    <section>
      <h1>Criar conta</h1>
      <p>Você poderá conectar seu armazenamento depois.</p>
      <input
        type="email"
        placeholder="Seu email"
        style={{ width: '100%', padding: '12px 16px', marginBottom: '16px' }}
      />
      <input
        type="password"
        placeholder="Sua senha"
        style={{ width: '100%', padding: '12px 16px', marginBottom: '16px' }}
      />
      <button>Criar conta</button>
    </section>
  )
}

export default Signup
