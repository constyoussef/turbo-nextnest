import Link from "next/link";

export function Navbar() {
  return (
    <div className="z-50 p-2">
      <h1 className="p-2 text-2xl font-bold">My Modern Blog</h1>
      <div className="flex flex-col gap-4 md:flex-row [&>a]:rounded-md [&>a]:px-4 [&>a]:py-2 [&>a]:transition [&>a:hover]:bg-sky-500 [&>a:hover]:text-sky-100">
        <Link href="/">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
