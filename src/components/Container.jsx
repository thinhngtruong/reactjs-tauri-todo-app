export default function Container({ children }) {
  return (
    <main className="mx-auto w-[87%] max-w-[34rem] py-10 md:py-20">
      {children}
    </main>
  );
}
