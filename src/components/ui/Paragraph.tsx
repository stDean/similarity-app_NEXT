import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * this create a variant of the paragraph,
 * 1st arg is the styles
 * 2nd arg is an object for the variants 
 */
const paragraphVariants = cva(
  'max-w-prose text-slate-700 dark:text-slate-300 mb-2 text-center',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

/**
 * the html attribute extension makes it possible for the component to have HTML paragraph tag attributes,
 * and also the variant props already defined
 */
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof paragraphVariants> { }


// forwardRef allow to pass a ref from the parent.
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
  className, size, children, ...props
}, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  );
});

Paragraph.displayName = 'Paragraph';

export default Paragraph;