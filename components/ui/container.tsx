export default function Container({ children, className }: {children: React.ReactNode, className?: string}) {
  return (
    <section className={`relative container mx-auto px-6 py-12 max-w-screen-md h-screen ${className}`}>
      {children}
    </section>
  );
}