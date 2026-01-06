import { useState } from 'react'

function Signup() {
  const [showMessage, setShowMessage] = useState(false)

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
      <button onClick={() => setShowMessage(true)}>Criar conta</button>
      {showMessage && <p>Cadastro iniciado. Em breve você continuará.</p>}
    </section>
  )
}

export default Signup
