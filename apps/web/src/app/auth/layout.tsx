import { redirect } from 'next/navigation'

import { isAuthenticated } from '@/auth/auth'

export default async function Auth({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  if (isAuthenticated()) {
    redirect('/')
  }
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4">
      <div className="w-ful max-w-xs">{children}</div>
    </div>
  )
}
