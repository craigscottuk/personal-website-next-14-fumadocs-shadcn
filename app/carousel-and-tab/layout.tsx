import { Layout as HomeLayout } from '@fumadocs-ui/layout';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return <HomeLayout>{children}</HomeLayout>;
}
