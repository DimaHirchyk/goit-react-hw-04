import toast, { Toaster } from "react-hot-toast";

export default function Searchbar({ onSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const topic = form.elements.inp.value.trim();
    if (topic === "") {
      toast.error("Введіть текст");

      return;
    }

    onSearch(topic);
    form.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            name="inp"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button type="submit">Search</button>
        </form>
      </header>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
