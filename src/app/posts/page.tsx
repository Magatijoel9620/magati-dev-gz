import Image from "next/image";
import Link from "next/link";
import { posts } from "@/lib/data";

const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export default function PostsPage() {
  return (
    <main className="container min-h-screen pb-24 pt-28 md:pb-32 md:pt-36">
      <header className="max-w-4xl border-b border-white/10 pb-10 md:pb-14">
        <p className="eyebrow">Notes from the work</p>
        <h1 className="display mt-4 text-5xl font-semibold leading-[.9] sm:text-7xl">Ideas, decisions<br className="hidden sm:block" /> and things I&apos;ve built.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-white/55 md:text-lg">
          Writing about product ideas, technical choices, and lessons learned while building useful digital systems.
        </p>
        <p className="mono mt-6 text-[10px] uppercase tracking-[.18em] text-white/35">{sortedPosts.length} articles</p>
      </header>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {sortedPosts.map((post, index) => (
          <Link key={post.slug} href={`/posts/${post.slug}`} className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101213] transition hover:-translate-y-1 hover:border-white/20">
            <div className="relative aspect-[1.45] overflow-hidden bg-white/[.03]">
              <Image src={post.imageUrl} alt={`${post.title} cover`} fill sizes="(max-width: 640px) 92vw, (max-width: 1024px) 45vw, 30vw" className="object-cover transition duration-700 group-hover:scale-[1.04]" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/35 px-2.5 py-1 text-[9px] uppercase tracking-[.18em] text-white/75 backdrop-blur-md">{String(index + 1).padStart(2, "0")}</span>
            </div>
            <div className="p-5">
              <p className="mono text-[9px] uppercase tracking-[.15em] text-white/40">{formatDate(post.date)} <span className="px-1.5 text-white/20">/</span> {post.author}</p>
              <h2 className="mt-3 text-lg font-medium leading-snug transition group-hover:text-[#d7ff65]">{post.title}</h2>
              <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/50">{post.excerpt}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-medium text-white/75">Read article <span className="transition-transform group-hover:translate-x-1">↗</span></span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
