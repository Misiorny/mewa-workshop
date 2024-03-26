import { ReactNode } from 'react';

interface WorkshopProps {
  children: ReactNode;
}

export function Workshop ({ children }: WorkshopProps) {
  return (
    <section className="max-w-screen-2xl">
      {children}
    </section>
  );

}

export default Workshop
