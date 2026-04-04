export default function SearchForm() {
  return (
    <>
      <form action="">
        <input
          type="text
        "
        />
        <button
          onClick={(e) => {
            // supaya tidak merefresh
            e.preventDefault();
            alert("you search");
          }}
        >
          Search
        </button>
      </form>
    </>
  );
}
