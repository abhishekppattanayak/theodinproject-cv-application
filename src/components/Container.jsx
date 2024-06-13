export default function Container ({children}) {
  return (
    <section className="flex flex-col gap-2 px-8 py-2 w-1/2">
      {children}
    </section>
  )
}