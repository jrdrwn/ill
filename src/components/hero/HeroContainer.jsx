import DotGrid from "../layouts/DotGrid";

export default function HeroContainer({ children }) {
  return (
    <section>
      <div className="container mx-auto">
        <>
          <DotGrid className="fixed -right-10 -top-10 -z-10 scale-75 fill-current text-secondary opacity-50" />
          {children}
        </>
      </div>
    </section>
  );
}
