export default function Auth({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-ful max-w-xs">{children}</div>
    </div>
  )
}
