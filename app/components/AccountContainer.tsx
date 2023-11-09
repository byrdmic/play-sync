export default function AccountContainer({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <div>{title}</div>
      <div>{children}</div>
    </div>
  )
}
