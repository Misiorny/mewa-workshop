import { ReactNode } from 'react';

interface WorkshopProps {
  children: ReactNode;
}

export function Workshop ({ children }: WorkshopProps) {
  return (
    <section className="flex max-w-screen-2xl mx-auto bg-amber-100 h-screen justify-center">
      {children}
    </section>
  );

}

export default Workshop
