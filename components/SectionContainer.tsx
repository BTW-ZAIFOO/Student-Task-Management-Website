import type { HTMLAttributes } from 'react';

interface SectionContainerProps extends HTMLAttributes<HTMLElement> {
  id?: string;
}

export default function SectionContainer({
  id,
  children,
  className = '',
  ...props
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-white ${className}`.trim()}
      {...props}
    >
      <div className="max-w-6xl mx-auto">{children}</div>
    </section>
  );
}
