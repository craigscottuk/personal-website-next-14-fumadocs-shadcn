import { DocsLayout } from 'fumadocs-ui/layout';
import type { ReactNode } from 'react';
import { blogOptions } from '../layout.config';

export default function Layout({ children }: { children: ReactNode }) {
  return <DocsLayout {...blogOptions}>{children}</DocsLayout>;
}
