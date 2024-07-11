import * as React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

declare const Accordions: React.ForwardRefExoticComponent<(Omit<AccordionPrimitive.AccordionSingleProps, "value" | "onValueChange"> | Omit<AccordionPrimitive.AccordionMultipleProps, "value" | "onValueChange">) & React.RefAttributes<HTMLDivElement>>;
declare const Accordion: React.ForwardRefExoticComponent<Omit<Omit<AccordionPrimitive.AccordionItemProps & React.RefAttributes<HTMLDivElement>, "ref">, "value"> & {
    title: string;
} & React.RefAttributes<HTMLDivElement>>;

export { Accordion, Accordions };
