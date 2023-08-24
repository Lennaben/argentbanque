function Account({ title, amount, description }) {
  return (
    <section classeName="account">
      <div classeName="account-content-wrapper">
        <h3 classeName="account-title">{title}</h3>
        <p classeName="account-amount">{amount}</p>
        <p classeName="account-amount-description">{description}</p>
      </div>
      <div classeName="account-content-wrapper cta">
        <button classeName="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

export default Account
