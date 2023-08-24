import React from "react"
import Account from "../Components/Account/Account"

function User() {
  // Si je suis pas connecter, reditreciont logion (Token)

  return (
    <main className="main bg-dark">
      <section className="account">
        <div className="header">
          <h1>
            Welcome back
            <br />
            Tony Jarvis!
          </h1>
          <button className="edit-button">Edit Name</button>
        </div>
        <h2 className="sr-only">Accounts</h2>
        <Account
          title="Argent Bank Checking (x8349)"
          amount="$2,082.79"
          description="Available Balance"
        />

        <Account
          title="Argent Bank Savings (x6712)"
          amount="$10,928.42"
          description="Available Balance"
        />

        <Account
          title=">Argent Bank Credit Card (x8349)"
          amount="$184.30"
          description="Available Balance"
        />

        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  )
}
export default User
