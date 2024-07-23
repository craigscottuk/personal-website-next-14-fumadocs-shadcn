import { getBlogPage, getBlogPages, blogPageTree } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';

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

  // console.log(blogPageTree);

  return (
    <DocsPage
      breadcrumb={{ enabled: true, full: true, includeRoot: true }}
      tableOfContentPopover={{ enabled: false }}
      toc={page.data.exports.toc}
      full={page.data.full}
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
