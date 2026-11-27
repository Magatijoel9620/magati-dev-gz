import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

const skillGroups = [
  {
    title: "Frontend & Web",
    description: "Building responsive, accessible interfaces and web experiences.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SvelteKit"],
  },
  {
    title: "Backend & Data",
    description: "Connecting applications, services and the data behind them.",
    skills: ["Node.js", "Python", "Django", "REST APIs", "GraphQL", "PostgreSQL"],
  },
  {
    title: "Mobile & Automation",
    description: "Creating practical tools that simplify work across devices and workflows.",
    skills: ["Flutter", "Google Apps Script", "AI Integration", "Data Automation"],
  },
  {
    title: "Tools & Design",
    description: "Working across implementation, collaboration and product experience.",
    skills: ["Docker", "Git", "Figma", "UI/UX"],
  },
];

const focusAreas = [
  {
    title: "Websites & digital experiences",
    description:
      "Modern websites and landing experiences that communicate clearly, work across devices and help people take the next step.",
  },
  {
    title: "Business systems & applications",
    description:
      "Purpose-built software that brings everyday operations, records and workflows into more useful digital tools.",
  },
  {
    title: "Mobile products",
    description:
      "Cross-platform applications designed around real usage, practical workflows and dependable experiences.",
  },
  {
    title: "Automation & AI integration",
    description:
      "Thoughtful automation and AI-powered capabilities that support people and reduce repetitive work.",
  },
];

const principles = [
  {
    title: "Understand before building",
    description:
      "Start with the people, process and problem. The right solution should fit the work instead of adding complexity.",
  },
  {
    title: "Build for the long term",
    description:
      "Readable code, maintainable architecture and considered technical choices matter beyond the first release.",
  },
  {
    title: "Make it useful and usable",
    description:
      "A solution should be technically sound, intuitive to use and accessible across the devices people rely on.",
  },
];

export default function AboutPage() {
  return (
    <>
      <main className="container max-w-6xl py-12 md:py-20">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.025] p-6 sm:p-9 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-28 h-80 w-80 rounded-full bg-[var(--accent)]/[.07] blur-3xl"
          />
          <div className="relative grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_240px] lg:gap-16">
            <div className="text-center md:text-left">
              <p className="eyebrow">The person behind the work</p>
              <h1 className="display mt-4 text-5xl font-semibold leading-[.98] tracking-tight sm:text-6xl lg:text-7xl">
                Magati Joel<span className="accent">.</span>
              </h1>
              <p className="mt-5 text-base font-medium text-[var(--accent)] sm:text-lg">
                Full-Stack Developer &amp; IT Solutions Specialist
              </p>
              <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/65 sm:text-base md:mx-0">
                I’m a developer and IT professional based in Mombasa, Kenya. Through my work with
                Hempon Group, I design and build websites, business systems, mobile applications,
                automation tools and AI-enabled experiences — with a focus on solving practical
                problems and making technology easier to use.
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-white/55 md:mx-0">
                My work sits at the intersection of software development and hands-on IT. I enjoy
                understanding how an organisation works, identifying where technology can help,
                and carrying an idea from an initial problem through to a working product.
              </p>
              <div className="mt-7 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href="/contact"
                  className="ui-btn-primary ui-btn-jelly inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#08090a]"
                >
                  Let’s work together <span aria-hidden="true" className="ml-2">↗</span>
                </Link>
                <a
                  href="mailto:magatijoel@gmail.com"
                  className="ui-btn-secondary ui-btn-neon inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-medium text-white/85"
                >
                  Email me
                </a>
                <a
                  href="https://github.com/Magatijoel9620"
                  target="_blank"
                  rel="noreferrer"
                  className="ui-btn-secondary inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/65"
                >
                  GitHub ↗
                </a>
                <a
                  href="https://www.linkedin.com/in/joel-magati-973972422/"
                  target="_blank"
                  rel="noreferrer"
                  className="ui-btn-secondary inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 px-4 py-2.5 text-sm text-white/65"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>

            <div className="relative mx-auto w-48 md:w-full">
              <div aria-hidden="true" className="absolute -inset-5 rounded-full bg-[var(--accent)]/[.09] blur-2xl" />
              <div className="relative aspect-square overflow-hidden rounded-[1.7rem] border border-white/15 bg-white/[.04] shadow-2xl">
                <Image
                  src="/profile.png"
                  alt="Portrait of Magati Joel"
                  fill
                  priority
                  sizes="(max-width: 768px) 192px, 240px"
                  className="object-cover"
                />
              </div>
              <div className="relative mx-auto -mt-5 w-[88%] rounded-2xl border border-white/10 bg-[#111415]/95 px-4 py-3 text-center shadow-xl backdrop-blur">
                <p className="text-[10px] uppercase tracking-[.2em] text-white/45">Based in</p>
                <p className="mt-1 text-sm font-medium text-white/85">Mombasa, Kenya</p>
              </div>
            </div>
          </div>
        </header>

        <section className="mt-20 md:mt-24" aria-labelledby="story-heading">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">A little background</p>
            <h2 id="story-heading" className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              My story<span className="accent">.</span>
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-8">
              <span className="eyebrow">Where it started</span>
              <h3 className="mt-4 text-xl font-semibold">From curiosity to development</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                My interest in technology started with wanting to understand how computers,
                networks, websites and applications work. That curiosity gradually grew into
                practical development skills as I began building websites, mobile applications,
                automation tools and business systems. Each project has been another opportunity
                to learn, experiment and turn an idea into something useful.
              </p>
            </article>
            <article className="rounded-2xl border border-white/10 bg-white/[.025] p-6 sm:p-8">
              <span className="eyebrow">Putting it into practice</span>
              <h3 className="mt-4 text-xl font-semibold">Technology beyond the screen</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">
                Working in IT within a professional services environment has shown me that
                technology is most valuable when it improves how people actually work. My
                experience spans supporting office systems, managing infrastructure, improving
                digital workflows and developing tools that make everyday work easier. It keeps
                my approach grounded in both the technical details and the people using the result.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 md:mt-24" aria-labelledby="focus-heading">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">What I work on</p>
              <h2 id="focus-heading" className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
                Areas of focus<span className="accent">.</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/55">
              A broad, connected skill set — applied where it can make a meaningful difference.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {focusAreas.map((item) => (
              <article key={item.title} className="group rounded-2xl border border-white/10 bg-white/[.02] p-6 transition hover:border-white/20 hover:bg-white/[.035] sm:p-7">
                <div className="flex items-center justify-end">
                  <span aria-hidden="true" className="text-white/25 transition group-hover:translate-x-1 group-hover:text-[var(--accent)]">↗</span>
                </div>
                <h3 className="mt-7 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 md:mt-24" aria-labelledby="principles-heading">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">How I approach the work</p>
            <h2 id="principles-heading" className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Principles, not shortcuts<span className="accent">.</span>
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {principles.map((item) => (
              <article key={item.title} className="rounded-2xl border border-white/10 p-6">
                <span aria-hidden="true" className="block h-px w-8 bg-[var(--accent)]/60" />
                <h3 className="mt-5 font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/60">{item.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 md:mt-24" aria-labelledby="skills-heading">
          <div className="mb-8 max-w-2xl">
            <p className="eyebrow">Tools I work with</p>
            <h2 id="skills-heading" className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              Skills &amp; expertise<span className="accent">.</span>
            </h2>
            <p className="mt-3 text-sm leading-6 text-white/55">
              Technologies are tools, not the destination. I keep learning and choose the stack
              that best fits the product, its users and its operating needs.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-2xl border border-white/10 bg-white/[.02] p-5 sm:p-6">
                <div className="flex items-center gap-3">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--accent)]/75" />
                  <h3 className="font-semibold">{group.title}</h3>
                </div>
                <p className="mt-2 text-xs leading-5 text-white/45">{group.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-white/10 bg-white/[.035] px-3 py-1.5 text-xs text-white/70">
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-20 overflow-hidden rounded-[2rem] border border-[var(--accent)]/20 bg-[linear-gradient(120deg,rgba(215,255,101,.09),rgba(255,255,255,.025)_55%)] p-7 text-center sm:p-10 md:mt-24">
          <p className="eyebrow">Available for selected projects</p>
          <h2 className="display mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
            Have an idea worth building?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/65">
            I’m open to website development, business systems, automation, mobile applications
            and other technology-focused collaborations. If you have a challenge to solve or an
            idea you want to explore, let’s start with a conversation.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="ui-btn-primary ui-btn-jelly inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-semibold text-[#08090a]">
              Start a conversation ↗
            </Link>
            <Link href="/projects" className="ui-btn-secondary ui-btn-neon inline-flex min-h-11 items-center justify-center rounded-full border border-white/15 px-5 py-2.5 text-sm text-white/80">
              Explore my work
            </Link>
            <Link href="/posts" className="ui-btn-secondary inline-flex min-h-11 items-center justify-center rounded-full border border-white/10 px-5 py-2.5 text-sm text-white/65">
              Read articles
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
