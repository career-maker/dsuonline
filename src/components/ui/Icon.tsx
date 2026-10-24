import Image from 'next/image';
import { iconSize } from '@/data/icon-sizes';

/** Raster icon cut from the approved design; renders at its design size unless `scale` is given. */
export function Icon({ name, scale = 1, className }: { name: string; scale?: number; className?: string }) {
  const [w, h] = iconSize[name];
  return <Image src={`/icons/${name}.png`} alt="" width={Math.round(w * scale)} height={Math.round(h * scale)} className={className} />;
}
