import { useOutletContext } from "react-router-dom";

export const MovieCast = () => {
  const [movie] = useOutletContext();
  return (
    <div>
      <h3>Movie cast</h3>
    </div>
  );
};
