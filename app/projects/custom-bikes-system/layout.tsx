import { DocsLayout } from 'components/fumadocs-ui/dist/layout';
import type { ReactNode } from 'react';
import { projectCustomBikesOptions } from '../../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      sidebar={{ defaultOpenLevel: 0 }}
      {...projectCustomBikesOptions}
    >
      {children}
    </DocsLayout>
  );
}
