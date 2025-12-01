import { ImagePuff } from '../components/puff/ImagePuff';

type PuffItem = {
    title: string;
    subtitle?: string;
    image: string;
    href: string;
};

type Props = {
    items: PuffItem[];
};

export function ImagePuffGrid({ items }: Props) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <ImagePuff key={i} {...item} />
        ))}
      </div>
    );
}