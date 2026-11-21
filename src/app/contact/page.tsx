import type { Metadata } from "next";
import Link from "next/link";
import LeadEnquiryForm from "@/components/LeadEnquiryForm";

export const metadata: Metadata = {
  title: "Contact Hempon Group | Start a Project",
  description: "Tell Hempon Group what you are trying to build, improve or automate. Share your project brief and receive a considered next step.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | Hempon.dev",
    description: "Share the problem, the context and what a useful outcome would look like.",
    url: "/contact",
    type: "website",
  },
};

const faqs = [
  {
    question: "What happens after I send an enquiry?",
    answer: "The team reviews the information and follows up using the email address you provide. If the brief needs clarification, the next step is a conversation rather than an assumed proposal.",
  },
  {
    question: "Can I enquire if my idea is not fully defined?",
    answer: "Yes. A clear problem or workflow is enough to begin. The first discussion can help determine whether the right next step is discovery, a prototype or a defined implementation.",
  },
  {
    question: "How are pricing and timelines determined?",
    answer: "They depend on scope, integrations, content, delivery constraints and the condition of any existing system. A useful estimate follows an initial review; the site does not publish one-size-fits-all prices or guaranteed delivery dates.",
  },
  {
    question: "Do you work with existing products and systems?",
    answer: "Potentially. Existing platforms, data, integrations and access requirements are reviewed before a commitment is made. Any constraints and dependencies should be included in the agreed scope.",
  },
  {
    question: "Is support included after launch?",
    answer: "Post-launch support, maintenance and ownership arrangements are agreed as part of each project scope. They are not assumed to be unlimited or automatically included.",
  },
];

export default function ContactPage() {
  return (
    <main className="grid-noise min-h-screen pt-32">
      <section className="container pb-16 pt-10 md:pb-24">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="eyebrow">Project enquiry · Hempon Group</p>
            <h1 className="display mt-5 max-w-2xl text-5xl font-semibold leading-[.9] md:text-7xl">Start with the problem.</h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-white/50">Tell us what you are trying to build, improve or make easier. A little context helps us understand the work before recommending a next step.</p>
            <div className="mt-10 space-y-6 border-t border-white/10 pt-7">
              <div>
                <p className="mono text-[10px] uppercase tracking-[.18em] text-white/30">Business enquiries</p>
                <a href="mailto:hempongroup@gmail.com" className="mt-2 inline-block text-lg text-white transition hover:text-[#d7ff65]">hempongroup@gmail.com ↗</a>
              </div>
              <div>
                <p className="mono text-[10px] uppercase tracking-[.18em] text-white/30">Founder correspondence</p>
                <a href="mailto:magatijoel@gmail.com" className="mt-2 inline-block text-base text-white/70 transition hover:text-[#d7ff65]">magatijoel@gmail.com ↗</a>
              </div>
              <p className="max-w-sm text-xs leading-5 text-white/35">No WhatsApp or telephone contact is listed here because a verified business number has not been supplied.</p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#101213]/90 p-6 sm:p-9 md:p-10">
            <div className="mb-8">
              <p className="eyebrow">Tell us about it</p>
              <h2 className="display mt-3 text-3xl font-semibold md:text-4xl">A few useful details.</h2>
            </div>
            <LeadEnquiryForm />
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[.02]">
        <div className="container grid gap-12 py-20 md:grid-cols-[.7fr_1.3fr] md:py-24">
          <div>
            <p className="eyebrow">Before we begin</p>
            <h2 className="display mt-4 text-4xl font-semibold leading-[.95] md:text-5xl">Clear expectations make better projects.</h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/45">A good engagement starts with shared context. These are the principles that guide the first conversation and the work that may follow.</p>
            <Link href="/services" className="mt-8 inline-flex border-b border-[#d7ff65]/50 pb-2 text-sm text-[#d7ff65]">Explore services ↗</Link>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {[
              ["01", "Understand first", "We clarify the problem, intended users and constraints before recommending a build."],
              ["02", "Scope in writing", "Deliverables, assumptions, dependencies and acceptance points should be clear before implementation."],
              ["03", "Review as we go", "Important decisions and working outputs are reviewed at agreed checkpoints."],
              ["04", "Plan the handover", "Deployment, documentation, ownership and post-launch support are addressed in the project scope."],
            ].map(([number, title, copy]) => (
              <div key={number} className="border-t border-white/10 py-6 sm:px-6 sm:odd:pl-0 sm:even:border-l sm:even:border-white/10">
                <span className="mono text-[10px] text-[#d7ff65]/60">{number}</span>
                <h3 className="mt-3 text-lg font-medium text-white">{title}</h3>
                <p className="mt-2 max-w-sm text-sm leading-6 text-white/42">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Useful to know</p>
            <h2 className="display mt-4 text-4xl font-semibold leading-[.95] md:text-5xl">A few common questions.</h2>
          </div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 text-base font-medium text-white marker:hidden">
                  {faq.question}
                  <span className="text-xl text-[#d7ff65] transition group-open:rotate-45">+</span>
                </summary>
                <p className="max-w-3xl pt-4 text-sm leading-7 text-white/48">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container pb-24">
        <div className="rounded-[2rem] border border-white/10 bg-[#101213] p-8 md:p-12">
          <p className="eyebrow">Still exploring?</p>
          <h2 className="display mt-4 max-w-3xl text-4xl font-semibold leading-[.95] md:text-6xl">See the work before you decide.</h2>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-full bg-[#d7ff65] px-6 py-3 text-sm font-semibold text-[#08090a]">Explore projects ↗</Link>
            <Link href="/apps" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/35">View products ↗</Link>
            <Link href="/posts" className="rounded-full border border-white/15 px-6 py-3 text-sm text-white/75 transition hover:border-white/35">Read insights ↗</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
