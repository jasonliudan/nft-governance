import 'tailwindcss/tailwind.css'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import withRedux from 'next-redux-wrapper'
import withReduxSaga from 'next-redux-saga'
import { Title, Description, Meta } from '@/components'
import React from 'react'
import ProgressBar from '@badrap/bar-of-progress'
import { Router } from 'next/router'
import createStore from '../store'

const progress = new ProgressBar({
  size: 2,
  color: '#22D3EE',
  className: 'bar-of-progress',
  delay: 100,
})

if (typeof window !== 'undefined') {
  progress.start()
  progress.finish()
}

Router.events.on('routeChangeStart', progress.start)
Router.events.on('routeChangeComplete', () => {
  progress.finish()

  // Will not work if scroll is not on <html>
  window.scrollTo(0, 0)
})
Router.events.on('routeChangeError', progress.finish)

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  const Layout = (Component as any).layoutProps?.Layout || React.Fragment
  const layoutProps = (Component as any).layoutProps?.Layout
    ? { layoutProps: (Component as any).layoutProps }
    : {}
  const meta = (Component as any).layoutProps?.meta || {}
  const description =
    meta.metaDescription ||
    meta.description ||
    'A Next.js starter kit template with React 17 + Typescript + Tailwind CSS 2 + React Query 3 + GitHub Auth + Passwordless Auth + Fauna DB'

  return (
    <QueryClientProvider client={queryClient}>
      <Title suffix="NFT Governance">{meta.metaTitle || meta.title}</Title>
      <Description>{description}</Description>
      <Meta />
      <Layout {...layoutProps}>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  )
}

export default withRedux(createStore)(withReduxSaga(MyApp))
