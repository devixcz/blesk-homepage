import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>Stránka nebyla nalezena</h2>
      <p>Nelze najít požadovanou stránku</p>
      <Link href="/">Vrátit se na hlavní stránku</Link>
    </div>
  );
}
