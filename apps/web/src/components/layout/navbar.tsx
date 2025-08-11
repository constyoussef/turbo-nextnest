import Link from "next/link";

export function Navbar() {
  return (
    <>
      <h1 className="p-2 text-2xl font-bold">My Modern Blog</h1>
      <div className="flex gap-4 [&>a]:rounded-md [&>a]:px-4 [&>a]:py-2 [&>a]:transition [&>a:hover]:bg-sky-500 [&>a:hover]:text-sky-100">
        <Link href="/">Blog</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </>
  );
}
