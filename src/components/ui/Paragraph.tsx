import { HTMLAttributes, forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * this create a variant of the paragraph,
 * 1st arg is the styles
 * 2nd arg is an object for the variants 
 * making it possible to have different style for the paragraph component
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
 * 1. the html attribute extension makes it possible for the component to have HTML paragraph tag attributes,
 * 2. extending VariantProp gives the component access to the size 
 */
interface ParagraphProps
  extends HTMLAttributes<HTMLParagraphElement>,
  VariantProps<typeof paragraphVariants> { }


// forwardRef allows for passing ref from the parent.
const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(({
  className, size, children, ...props
}, ref) => {
  return (
    <p
      ref={ref}
      {...props}
      // merge the base class from the paragraphVariants with any size value passed and any additional className styles passed.
      className={cn(paragraphVariants({ size, className }))}
    >
      {children}
    </p>
  );
});

// for debugging purpose because component uses forwardRef!
Paragraph.displayName = 'Paragraph';

export default Paragraph;