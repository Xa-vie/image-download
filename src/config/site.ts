import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Image Downloader",
  author: "redpangilinan",
  description:
    "Next.js 14+ starter template with app router, shadcn/ui, typesafe env, icons and configs setup.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    image: "https://sdbooth2-production.s3.amazonaws.com/s1s5rnxoj50uf974ytgp7pgdyedd",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}
