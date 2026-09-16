"use client";

import { useState } from "react";
import CourseCard from "./CourseCard";
import type { Course } from "@/lib/courses";

export default function CourseSearchWrapper({ courses }: { courses: Course[] }) {
  const [search, setSearch] = useState("");

  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border border-gray-400 rounded px-4 py-2 mb-8 w-full max-w-md"
      />
      <div className="flex flex-col gap-4">
        {filtered.length > 0 ? (
          filtered.map((c) => (
            <CourseCard
              key={c.id}
              id={c.id}
              title={c.title}
              description={c.description}
              credits={c.credits}
              likes={c.likes}
            />
          ))
        ) : (
          <p>No courses found.</p>
        )}
      </div>
    </div>
  );
}
