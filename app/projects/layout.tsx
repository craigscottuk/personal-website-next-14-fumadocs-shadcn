import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { projectsOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...projectsOptions}>{children}</DocsLayout>;
}
