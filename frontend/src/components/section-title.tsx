interface SectionTitleProps {
  badge: string
  title: string
  description: string
}

export function SectionTitle({ badge, title, description }: SectionTitleProps) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10" id="package">
      <div className="space-y-2">
        <div className="inline-block rounded-lg bg-gray-100 dark:bg-zinc-900 px-3 py-1 text-sm">{badge}</div>
        <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">{title}</h2>
        <p className="max-w-[900px] text-gray-500 md:text-xl">{description}</p>
      </div>
    </div>
  )
}
