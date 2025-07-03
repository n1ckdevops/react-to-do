import { Link } from "react-router-dom"

export const NotFoundPage = () => {
  return (
    <div className="container">
      <h1>404 - Not Found</h1>
      <Link to="/">Go to Home</Link>
    </div>
  )
}