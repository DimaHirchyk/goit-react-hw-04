import { BarLoader } from "react-spinners";

export default function Loader({ loading }) {
  return (
    <>
      <BarLoader
        loading={loading}
        height="3"
        width="150"
        speedMultiplier="0.5"
      />
    </>
  );
}
