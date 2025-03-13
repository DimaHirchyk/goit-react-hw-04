import { BarLoader } from "react-spinners";

export default function Loader({ loading }) {
  return (
    <>
      <BarLoader
        loading={loading}
        height="6"
        width="300"
        speedMultiplier="0.5"
      />
    </>
  );
}
