import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">University Course Catalog</h1>
      <p className="mb-4">Welcome to the advanced web technologies catalog.</p>
      <Link href="/courses" className="text-blue-600 underline">
        View all courses
      </Link>
    </div>
  );
}
