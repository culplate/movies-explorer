import { Link } from "react-router-dom";
export default function NotFound() {
  const backLinkHref = location.state?.from ?? "/";
  return (
    <main>
      <h1>Whoops!</h1>
      <p>Looks like the page you were looking for doesn't exist 🥲</p>
      <Link to={backLinkHref}>Go back to Homepage</Link>
    </main>
  );
}
