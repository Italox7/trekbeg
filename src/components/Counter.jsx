export default function Counter({ totalNumberOfItems, numbersOfItemsPacked }) {
  return (
    <p>
      <b>{numbersOfItemsPacked}</b> / {totalNumberOfItems} Items packed
    </p>
  );
}
