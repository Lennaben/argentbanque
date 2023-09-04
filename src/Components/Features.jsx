function Features({ children, title, content }) {
  return (
    <div>
      <h2 className="sr-only">Features</h2>
      <div className="feature-item">
        {children}
        <h3 className="feature-item-title">{title}</h3>
        <p>{content}</p>
      </div>
    </div>
  )
}

export default Features
