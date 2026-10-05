import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { posts } from "@/lib/data";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  return post ? { title: `${post.title} — Magati.dev`, description: post.excerpt } : {};
}

function renderInline(text: string): ReactNode[] {
  const tokenPattern = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;
  const nodes: ReactNode[] = [];
  let lastIndex = 0;

  for (const match of text.matchAll(tokenPattern)) {
    const value = match[0];
    const index = match.index ?? 0;
    if (index > lastIndex) nodes.push(text.slice(lastIndex, index));

    if (value.startsWith("**")) {
      nodes.push(<strong key={index} className="font-semibold text-white">{value.slice(2, -2)}</strong>);
    } else if (value.startsWith("`")) {
      nodes.push(<code key={index} className="rounded bg-white/10 px-1.5 py-0.5 text-[.9em] text-[#d7ff65]">{value.slice(1, -1)}</code>);
    } else {
      const link = value.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
      if (link) {
        const external = /^https?:\/\//.test(link[2]);
        nodes.push(<a key={index} href={link[2]} className="text-[#d7ff65] underline decoration-[#d7ff65]/40 underline-offset-4 hover:decoration-[#d7ff65]" target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>{link[1]}</a>);
      }
    }

    lastIndex = index + value.length;
  }

  if (lastIndex < text.length) nodes.push(text.slice(lastIndex));
  return nodes;
}

function PostContent({ content }: { content: string }) {
  const blocks = content.trim().split(/\n\s*\n/).map((block) => block.trim()).filter(Boolean);

  return (
    <div className="space-y-6 text-base leading-8 text-white/65">
      {blocks.map((block, index) => {
        if (/^---+$/.test(block)) return <hr key={index} className="border-white/10" />;

        const heading = block.match(/^(#{1,6})\s+(.+)$/);
        if (heading) {
          const level = Math.min(heading[1].length + 1, 6);
          const Heading = `h${level}` as "h2" | "h3" | "h4" | "h5" | "h6";
          return <Heading key={index} className="display pt-4 text-2xl font-semibold leading-tight text-white md:text-3xl">{renderInline(heading[2])}</Heading>;
        }

        const lines = block.split("\n");
        if (lines.every((line) => /^[-*]\s+/.test(line))) {
          return <ul key={index} className="list-disc space-y-2 pl-6 marker:text-[#d7ff65]">{lines.map((line, itemIndex) => <li key={itemIndex}>{renderInline(line.replace(/^[-*]\s+/, ""))}</li>)}</ul>;
        }
        if (lines.every((line) => /^\d+\.\s+/.test(line))) {
          return <ol key={index} className="list-decimal space-y-2 pl-6 marker:text-[#d7ff65]">{lines.map((line, itemIndex) => <li key={itemIndex}>{renderInline(line.replace(/^\d+\.\s+/, ""))}</li>)}</ol>;
        }
        if (lines.every((line) => /^>\s?/.test(line))) {
          return <blockquote key={index} className="border-l-2 border-[#d7ff65]/60 pl-5 text-white/80">{lines.map((line, lineIndex) => <p key={lineIndex}>{renderInline(line.replace(/^>\s?/, ""))}</p>)}</blockquote>;
        }

        return <p key={index}>{renderInline(lines.join(" "))}</p>;
      })}
    </div>
  );
}

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  return (
    <main className="container max-w-6xl pb-24 pt-28 md:pb-32 md:pt-36">
      <Link href="/posts" className="text-xs uppercase tracking-[.16em] text-white/45 transition hover:text-white">← All posts</Link>
      <article>
        <header className="mx-auto mt-8 max-w-4xl">
          <p className="eyebrow">{formatDate(post.date)} <span className="px-2 text-white/20">·</span> {post.author}</p>
          <h1 className="display mt-5 text-4xl font-semibold leading-[.95] sm:text-6xl md:text-7xl">{post.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-white/55">{post.excerpt}</p>
        </header>

        <div className="relative mx-auto mt-10 aspect-[16/9] max-w-5xl overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#101213] md:mt-14 md:rounded-[2rem]">
          <Image src={post.imageUrl} alt={`${post.title} cover`} fill priority sizes="(max-width: 1024px) 92vw, 80vw" className="object-cover" />
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-[minmax(0,1fr)_220px] lg:gap-16">
          <PostContent content={post.content} />
          <aside className="h-fit rounded-2xl border border-white/10 bg-white/[.03] p-5 lg:sticky lg:top-28">
            <div className="flex items-center gap-3">
              <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/15">
                <Image src={post.authorImage} alt={post.author} fill sizes="44px" className="object-cover" />
              </div>
              <div><p className="text-sm font-medium text-white">{post.author}</p><p className="text-xs text-white/45">Author</p></div>
            </div>
            <p className="mt-4 text-xs leading-5 text-white/45">More notes on the ideas, technology and lessons behind my work.</p>
            <Link href="/posts" className="mt-4 inline-flex text-xs font-medium text-[#d7ff65] hover:text-white">Explore all posts ↗</Link>
          </aside>
        </div>
      </article>
    </main>
  );
}
