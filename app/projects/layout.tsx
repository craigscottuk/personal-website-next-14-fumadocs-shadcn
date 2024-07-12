import { DocsLayout } from 'components/fumadocs-ui/dist/layout';
import type { ReactNode } from 'react';
import { projectsOptions } from '../layout.config';
import { title } from 'process';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...projectsOptions}>{children}</DocsLayout>;
}
