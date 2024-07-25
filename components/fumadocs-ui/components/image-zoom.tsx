'use client';

import Image, { type ImageProps } from 'next/image';
import { type ImgHTMLAttributes } from 'react';
import Zoom from 'react-medium-image-zoom';
import { defaultImageSizes } from '@fumadocs-ui/utils/shared';
import '../../dist/image-zoom.css';

export type ImageZoomProps = ImageProps & {
  /**
   * Image props when zoom in
   */
  zoomInProps?: ImgHTMLAttributes<HTMLImageElement>;
};

function getImageSrc(src: ImageProps['src']): string {
  if (typeof src === 'string') return src;
  if ('default' in src) return src.default.src;
  return src.src;
}

export function ImageZoom({
  zoomInProps,
  children,
  ...props
}: ImageZoomProps): React.ReactElement {
  return (
    <Zoom
      zoomMargin={20}
      wrapElement='span'
      zoomImg={{
        src: getImageSrc(props.src),
        sizes: undefined,
        ...zoomInProps,
      }}
    >
      {children ?? <Image sizes={defaultImageSizes} {...props} />}
    </Zoom>
  );
}
