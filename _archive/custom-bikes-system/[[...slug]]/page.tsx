import { getCustomBikesPage, getCustomBikesPages } from '@/app/source';
import type { Metadata } from 'next';
import { DocsPage, DocsBody } from 'components/fumadocs-ui/dist/page';
import { notFound } from 'next/navigation';

export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const page = getCustomBikesPage(params.slug);

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
  return getCustomBikesPages().map((page) => ({
    slug: page.slugs,
  }));
}

export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getCustomBikesPage(params.slug);

  if (page == null) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata;
}
