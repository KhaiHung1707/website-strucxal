import Image from "next/image";
import { PortableText, type PortableTextComponents } from "next-sanity";
import type { PortableTextBlock } from "next-sanity";
import { urlForImage } from "@/sanity/image";

const components: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      const builder = urlForImage(value);
      if (!builder) return null;
      const alt = (value?.alt as string | undefined) ?? "";
      return (
        <Image
          src={builder.width(1400).fit("max").auto("format").url()}
          alt={alt}
          width={1400}
          height={788}
        />
      );
    },
  },
  marks: {
    link: ({ value, children }) => {
      const href = value?.href ?? "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined}>
          {children}
        </a>
      );
    },
  },
};

export function PostBody({ value }: { value: PortableTextBlock[] | undefined }) {
  if (!value || value.length === 0) return null;
  return (
    <div className="post-body">
      <PortableText value={value} components={components} />
    </div>
  );
}
