import { cn } from "@/lib/utils";

interface ImageSource {
  src: string;
  alt: string;
}

interface RevealImageListItemProps {
  text: string;
  images: [ImageSource, ImageSource];
}

export function RevealImageListItem({ text, images }: RevealImageListItemProps) {
  const effect =
    "relative duration-500 delay-100 shadow-none group-hover/reveal:shadow-xl scale-0 group-hover/reveal:scale-100 opacity-0 group-hover/reveal:opacity-100 group-hover/reveal:w-full group-hover/reveal:h-full w-24 h-32 overflow-hidden transition-all rounded-md";

  return (
    <div className="group/reveal relative w-full overflow-visible py-6 md:py-8 px-4 md:px-6 rounded-2xl border border-stroke hover:bg-surface/30 transition-colors">
      <h3 className="text-base md:text-2xl lg:text-3xl font-body font-bold uppercase tracking-[0.08em] text-text-primary transition-opacity duration-500 group-hover/reveal:opacity-40 break-words">
        {text}
      </h3>
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-40 h-32 w-24 pointer-events-none">
        <div className={effect}>
          <img alt={images[1].alt} src={images[1].src} className="h-full w-full object-cover" />
        </div>
      </div>
      <div className="hidden md:block absolute right-8 top-1/2 -translate-y-1/2 z-40 h-32 w-24 pointer-events-none">
        <div
          className={cn(
            effect,
            "duration-200 translate-x-0 translate-y-0 rotate-0 transition-transform delay-150 group-hover/reveal:translate-x-6 group-hover/reveal:translate-y-6 group-hover/reveal:rotate-12",
          )}
        >
          <img alt={images[0].alt} src={images[0].src} className="h-full w-full object-cover" />
        </div>
      </div>
    </div>
  );
}

interface RevealImagesProps {
  items: RevealImageListItemProps[];
  className?: string;
}

export function RevealImages({ items, className }: RevealImagesProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      {items.map((item, index) => (
        <RevealImageListItem key={index} text={item.text} images={item.images} />
      ))}
    </div>
  );
}
