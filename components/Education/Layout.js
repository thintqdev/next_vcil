export function Layout({ children }) {
  return (
    <div className="grotesk max-w-8xl mx-auto">
      <section className="w-full text-black">
        {children}
      </section>
    </div>
  );
}