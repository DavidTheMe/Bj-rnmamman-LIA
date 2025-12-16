import { WidePuff } from "../components/puff/WidePuff";

type PuffItem = {
    title: string;
    href: string;
    inverted?: boolean;
};

type Props = { items: PuffItem[] };

export function WidePuffGrid({ items }: Props) {
    return (
      <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
            <WidePuff key={i} {...item} />
        ))}
      </div>
    );
}