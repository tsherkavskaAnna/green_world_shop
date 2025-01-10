import Image from 'next/image';
import { getStrapiMedia } from '@/lib/utils';

interface StrapiImageProps {
  src: string;
  alt: string;
  height: number;
  width: number;
  className?: string;
  priority?: boolean;
}

export function ImageStrapi({
  src,
  alt,
  height,
  width,
  className,
  priority = false,
}: Readonly<StrapiImageProps>) {
  const imageUrl = getStrapiMedia(src);

  if (!imageUrl) return null;

  return (
    <Image
      src={imageUrl}
      alt={alt}
      height={height}
      width={width}
      className={className}
      priority={priority}
    />
  );
}
