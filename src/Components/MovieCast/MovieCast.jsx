import { useOutletContext } from "react-router-dom";

export default function MovieCast() {
  const [movie] = useOutletContext();
  return (
    <div>
      <h3>Movie cast</h3>
    </div>
  );
}
