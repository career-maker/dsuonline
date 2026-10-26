import Image from 'next/image';

type Rect = readonly [x: number, y: number, w: number, h: number];

type Props = {
  src: string;
  alt?: string;
  /** frame the image is clipped to, in design (1920px artboard) pixels */
  frame: Rect;
  /** where the design draws the full image, in the same coordinates */
  box: Rect;
  sizes?: string;
  priority?: boolean;
  flip?: boolean;
};

/**
 * Draws an image exactly as the design does (offset + zoom inside its clipped frame),
 * expressed in percentages so it scales with the frame. Parent must be `position: relative; overflow: hidden`.
 */
export function FramedImage({ src, alt = '', frame, box, sizes, priority, flip }: Props) {
  const [fx, fy, fw, fh] = frame;
  const [bx, by, bw, bh] = box;
  return (
    <Image
      src={src}
      alt={alt}
      width={Math.round(bw)}
      height={Math.round(bh)}
      sizes={sizes}
      priority={priority}
      style={{
        position: 'absolute',
        maxWidth: 'none',
        left: `${((bx - fx) / fw) * 100}%`,
        top: `${((by - fy) / fh) * 100}%`,
        width: `${(bw / fw) * 100}%`,
        height: `${(bh / fh) * 100}%`,
        objectFit: 'cover',
        aspectRatio: `${Math.round(bw)} / ${Math.round(bh)}`,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
    />
  );
}
