import siteMetadata from '@/data/siteMetadata'
import { PageSEO } from '@/components/SEO'
import membersData from '@/data/membersData'
import Card from '@/components/Card'
import SocialIcon from '@/components/social-icons'

export default function Members() {
  return (
    <>
      <PageSEO title={`${siteMetadata.title} - Members`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="pt-6 pb-8 space-y-2 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Members
          </h1>
          <div className="flex gap-2 items-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size="6" />
          </div>
        </div>
        <div className="container py-12">
          <div className="flex flex-wrap -m-4">
            {membersData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
