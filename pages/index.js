import { WORK_CONTENT_PATH } from '@config/constants'
import siteMetadata from '@data/siteMetadata'
import { getFrontMatter } from '@lib/mdx'
import { PageSEO } from '@components/SEO'
import Universe from '@components/Universe'

export async function getStaticProps() {
  const posts = await getFrontMatter(WORK_CONTENT_PATH, true)
  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Universe posts={posts} />
    </>
  )
}
