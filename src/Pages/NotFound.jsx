import { Link } from "react-router-dom";
import { HeadlineMain } from "../Components/HeadlineMain/HeadlineMain";
export default function NotFound() {
  const backLinkHref = location.state?.from ?? "/";
  return (
    <main>
      <HeadlineMain>Whoops!</HeadlineMain>
      <p>Looks like the page you were looking for doesn't exist 🥲</p>
      <Link to={backLinkHref}>Go back to Homepage</Link>
    </main>
  );
}
