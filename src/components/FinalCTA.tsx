function FinalCTA({ onCreateAccount }: { onCreateAccount: () => void }) {
  return (
    <section id="cta">
      <h2>Começar agora</h2>
      <p>Crie sua conta e comece a usar sua própria nuvem pessoal com o armazenamento que você já tem.</p>
      <button onClick={onCreateAccount}>Criar conta</button>
    </section>
  )
}

export default FinalCTA
