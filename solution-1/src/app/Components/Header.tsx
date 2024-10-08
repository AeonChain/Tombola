import Link from "next/link";
import OrderButton from "./OrderButton";

export default function Header() {
  return (
    <Link
      href={"/"}
      className="w-full text-center justify-between font-mono text-3xl bg-slate-500 pt-6 pb-4"
    >
      <div>Tom-Beana!</div>
      <div className="text-lg">Your one stop shop for beans!</div>
      <OrderButton />
    </Link>
  );
}
