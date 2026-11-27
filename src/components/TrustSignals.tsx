import Link from "next/link";

const principles = [
  { title: "Evidence over claims", copy: "Projects are labelled by their actual status. Concepts, demos and starter work are not presented as production client deployments." },
  { title: "Scope before promises", copy: "Deliverables, dependencies, assumptions and timelines are discussed before a project commitment is made." },
  { title: "Useful handover", copy: "Documentation, deployment context, access and ongoing support are considered as part of delivery planning." },
];

export default function TrustSignals() {
  return (
    <section className="border-y border-white/10 bg-white/[.02]">
      <div className="container grid gap-12 py-20 md:grid-cols-[.72fr_1.28fr] md:py-24">
        <div>
          <p className="eyebrow">How we work</p>
          <h2 className="display mt-4 max-w-xl text-4xl font-semibold leading-[.94] md:text-5xl">Clear work. Honest evidence. Useful outcomes.</h2>
          <p className="mt-6 max-w-md text-sm leading-7 text-white/45">We want prospective clients to understand what has been built, what is still a concept and what a working relationship involves.</p>
          <Link href="/contact" className="ui-btn-text mt-8 inline-flex border-b border-transparent pb-2 text-sm text-[#d7ff65]">Discuss your project ↗</Link>
        </div>
        <div className="grid gap-0 sm:grid-cols-3">
          {principles.map((item) => (
            <article key={item.title} className="border-t border-white/10 py-6 sm:px-5 sm:first:pl-0 sm:last:pr-0 sm:odd:border-t sm:even:border-l sm:even:border-white/10">
              <span aria-hidden="true" className="block h-px w-8 bg-[#d7ff65]/65" />
              <h3 className="mt-4 text-lg font-medium text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-white/42">{item.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
