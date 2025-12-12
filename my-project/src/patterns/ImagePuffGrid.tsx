import { ImagePuff } from '../components/puff/ImagePuff';

type PuffItem = {
    label: string;
    title: string;
    image: string;
    href: string;
};

type Props = {
    items: PuffItem[];
};

export function ImagePuffGrid({ items }: Props) {
    return (
      <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <ImagePuff key={i} {...item} />
        ))}
      </div>
    );
}