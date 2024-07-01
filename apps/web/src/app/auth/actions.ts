'use server'

import { env } from '@saas/env'
import { redirect } from 'next/navigation'

export async function signInWithGithub() {
  const githubSignUrl = new URL('login/oauth/authorize', 'https://github.com')

  githubSignUrl.searchParams.set('client_id', env.GITHUB_OAUTH_CLIENT_ID)
  githubSignUrl.searchParams.set(
    'redirect_uri',
    env.GITHUB_OAUTH_CLIENT_REDIRECT_URI,
  )
  githubSignUrl.searchParams.set('scope', 'user')

  redirect(githubSignUrl.toString())
}
