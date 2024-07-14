import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import { Layout } from 'fumadocs-ui/layout';
import { baseOptions } from './layout.config';

export default function HomePage() {
  return (
    <Layout {...baseOptions}>
      <main className='flex h-screen flex-col justify-center text-center'>
        <h1 className='mb-4 text-2xl font-bold'>Hello World</h1>
        <p className='text-muted-foreground'>
          You can open{' '}
          <Link
            href='/docs'
            className='text-foreground font-semibold underline'
          >
            /docs
          </Link>{' '}
          and see the documentation.
        </p>
        <div className='flex justify-center text-left'>
          <div className='items-center w-1/2'>
            <Accordion type='single' collapsible>
              <AccordionItem value='item-1'>
                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                <AccordionContent>
                  Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-2'>
                <AccordionTrigger>Is this item 2?</AccordionTrigger>
                <AccordionContent>Yes. This is item 2.</AccordionContent>
              </AccordionItem>
              <AccordionItem value='item-3'>
                <AccordionTrigger>Is this item 3?</AccordionTrigger>
                <AccordionContent>Yes. This is item 3.</AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>
    </Layout>
  );
}
