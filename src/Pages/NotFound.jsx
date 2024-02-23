import { Link } from "react-router-dom";
import { HeadlineMain } from "../Components/HeadlineMain/HeadlineMain";
import { BackLink } from "../Components/BackLink/BackLink";
export default function NotFound() {
  const backLinkHref = location.state?.from ?? "/";
  return (
    <main>
      <HeadlineMain>Whoops!</HeadlineMain>
      <p>Looks like the page you were looking for doesn't exist 🥲</p>
      <BackLink route={backLinkHref} />
    </main>
  );
}
