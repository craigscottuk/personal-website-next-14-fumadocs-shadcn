import { ImageProps } from 'next/image';
import { ImgHTMLAttributes } from 'react';

type ImageZoomProps = ImageProps & {
    /**
     * Image props when zoom in
     */
    zoomInProps?: ImgHTMLAttributes<HTMLImageElement>;
};
declare function ImageZoom({ zoomInProps, children, ...props }: ImageZoomProps): React.ReactElement;

export { ImageZoom, type ImageZoomProps };
