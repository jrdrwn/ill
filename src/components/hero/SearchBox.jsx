export default function SearchBox() {
  return (
    <div className="mt-3 flex justify-center">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="Cari..."
        className="input input-secondary w-3/4"
      />
    </div>
  );
}
