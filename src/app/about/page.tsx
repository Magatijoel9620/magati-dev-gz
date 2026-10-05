import Image from "next/image";
import Link from "next/link";

export const revalidate = 0;

export default function AboutPage() {
  const name = "Magati Joel";
  const role = "Full-Stack Developer & IT Solutions Specialist";

  const skillGroups = [
    { title: "Frontend", skills: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "SvelteKit"] },
    { title: "Backend & Data", skills: ["Node.js", "Python", "Django", "REST APIs", "GraphQL", "PostgreSQL"] },
    { title: "Mobile & Automation", skills: ["Flutter", "Google Apps Script", "AI Integration", "Data Automation"] },
    { title: "Tools & Design", skills: ["Docker", "Git", "Figma", "UI/UX"] },
  ];

  return (
    <main className="container max-w-5xl py-12 md:py-20">
      <header className="flex flex-col-reverse items-center gap-12 md:flex-row">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{name}</h1>
          <p className="mt-2 text-lg text-emerald-400">{role}</p>

          <p className="mt-4 max-w-2xl text-white/70">
            I’m a full-stack developer and IT professional based in Mombasa, Kenya.
            I build modern websites, business systems, mobile applications, automation tools,
            and AI-powered experiences that solve practical problems for organizations and everyday users.
          </p>

          <div className="mt-6 flex justify-center gap-4 md:justify-start">
            <a href="mailto:magatijoel@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white/6 px-4 py-2 text-sm font-medium text-white hover:bg-white/10">Email me</a>
            <a href="https://github.com/Magatijoel9620" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 hover:border-white/20">GitHub</a>
            <a href="https://www.linkedin.com/in/joel-magati-973972422/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-2 text-sm text-white/80 hover:border-white/20">LinkedIn</a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-3 rounded-full bg-emerald-600/10 blur-2xl" />
          <div className="relative rounded-full overflow-hidden border-4 border-white/6 w-44 h-44 shadow-xl">
            <Image src="/profile.png" alt="Magati Joel" fill sizes="176px" className="object-cover" />
          </div>
        </div>
      </header>

      <section className="mt-20 space-y-10">
        <div>
          <h2 className="mb-4 text-2xl font-bold">My Story</h2>
          <div className="grid gap-6 md:grid-cols-2 md:gap-8 text-white/75">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-emerald-400">From Curiosity to Development</h3>
              <p>My interest in technology started with wanting to understand how computers, networks, websites, and applications work. That curiosity gradually grew into practical development skills as I began building websites, mobile applications, automation tools, and business systems.</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold text-emerald-400">Technology in the Real World</h3>
              <p>Working in IT within a professional services environment taught me that technology is most valuable when it solves real operational problems. My work includes supporting office systems, managing infrastructure, improving digital workflows, and developing tools that make everyday work easier.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Philosophy</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border border-white/6 p-6">
              <h4 className="font-semibold">Clean Code</h4>
              <p className="mt-2 text-white/75">Code should be readable, maintainable and tested — not just functional.</p>
            </div>
            <div className="rounded-xl border border-white/6 p-6">
              <h4 className="font-semibold">Problem Solving</h4>
              <p className="mt-2 text-white/75">I enjoy dissecting complex problems and developing practical, efficient solutions.</p>
            </div>
            <div className="rounded-xl border border-white/6 p-6">
              <h4 className="font-semibold">User-Centric Design</h4>
              <p className="mt-2 text-white/75">Focus on simple, intuitive interfaces that solve real user needs.</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold">Skills & Expertise</h2>
          <div className="flex flex-wrap gap-3">
            {skillGroups.flatMap(g => g.skills).map((skill) => (
              <span key={skill} className="inline-block rounded-full bg-white/6 px-3 py-1 text-sm text-white/80">{skill}</span>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border bg-white/4 p-6 text-center">
          <div className="mb-3 inline-block rounded-full bg-emerald-600/10 px-3 py-1 text-xs">Available for selected projects</div>
          <h3 className="mt-2 text-xl font-semibold">Have an idea worth building?</h3>
          <p className="mt-3 text-white/75">I’m open to website development, business systems, automation, mobile applications, and other technology-focused collaborations.</p>
          <div className="mt-4 flex justify-center gap-3">
            <a href="mailto:magatijoel@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-medium text-black">Start a conversation</a>
            <Link href="/posts" className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm text-white/80">Read posts</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
