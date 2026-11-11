type Props = { eyebrow: string; title: string; intro?: string };

const SectionHeading = ({ eyebrow, title, intro }: Props) => (
  <div className="mb-12 max-w-3xl">
    <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-primary">{eyebrow}</p>
    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
    {intro && <p className="mt-4 text-lg text-muted-foreground">{intro}</p>}
  </div>
);

export default SectionHeading;
