import Counter from "./Counter";
import Logo from "./Logo";

export default function Header({ totalNumberOfItems, numbersOfItemsPacked }) {
  return (
    <header>
      <Logo />
      <Counter
        numbersOfItemsPacked={numbersOfItemsPacked}
        totalNumberOfItems={totalNumberOfItems}
      />
    </header>
  );
}
