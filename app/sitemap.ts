type Sitemap = Array<{
    url: string
    lastModified?: string | Date
    changeFrequency?:
      | 'always'
      | 'hourly'
      | 'daily'
      | 'weekly'
      | 'monthly'
      | 'yearly'
      | 'never'
    priority?: number
  }>

export default function sitemap(): Sitemap {
  return [
    {
      url: 'https://saiful.dev',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://saiful.dev/en',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}