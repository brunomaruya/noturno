export function Searchbar({ placeholder = "Search..." }) {
  return (
    <input type="text" placeholder={placeholder} style={{ margin: "0 20px" }} />
  );
}
