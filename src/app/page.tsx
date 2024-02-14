import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ModeToggle } from "@/components/mode-toggle"
import DownloadButton from "@/components/download-button"
import { Image } from "lucide-react"

export default function Home() {
  return (
    <main className="flex h-screen items-center justify-center">
      <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
        <Icons.logo className="h-16 w-16" />
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl lg:text-7xl">
          {siteConfig.name}
        </h1>
        <div className="flex flex-col gap-2 m-10 md:flex-row ">
          <Link
            href={siteConfig.links.image}
            target="_blank"
            className={cn(buttonVariants({ size: "default" }), "gap-2")}
          >
            <Image />View
          </Link>
          <DownloadButton fileUrl={siteConfig.links.image} fileName={"personPic"} />
          <ModeToggle />
        </div>
      </div>
    </main>
  )
}
