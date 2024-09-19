import { BackLink, HeadlineMain } from 'shared/components';

export default function NotFound() {
  const backLinkHref = location.state?.from ?? '/';
  return (
    <main>
      <HeadlineMain>Whoops!</HeadlineMain>
      <p>Looks like the page you were looking for doesn't exist 🥲</p>
      <BackLink route={backLinkHref} />
    </main>
  );
}
