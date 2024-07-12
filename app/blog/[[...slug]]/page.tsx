import { getBlogPage, getBlogPages, blogPageTree } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'components/fumadocs-ui/dist/page';
import { notFound } from 'next/navigation';

import { usePathname } from 'next/navigation';
import { useBreadcrumb } from 'fumadocs-core/breadcrumb';

const pathname = usePathname();
const items = useBreadcrumb(pathname, blogPageTree);

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getBlogPage(params.slug);

  if (page == null) {
    notFound();
  }

  const MDX = page.data.exports.default;

  return (
    <DocsPage
      breadcrumb={{ full: true }}
      toc={page.data.exports.toc}
      full={page.data.full}
      tableOfContentPopover={{ enabled: false }}
    >
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return getBlogPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getBlogPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
