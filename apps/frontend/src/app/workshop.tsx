import { ReactNode } from 'react';

interface WorkshopProps {
  children: ReactNode;
}

export function Workshop ({ children }: WorkshopProps) {
  return (
    <section>
      {children}
    </section>
  );

}

export default Workshop
