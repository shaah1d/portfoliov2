import { siteConfig } from "@/config/site.config";
import { portfolioConfig } from "@/config/portfolio.config";
import { Socials } from "@/components/socials";
import Link from "next/link";
import ThemeToggler from "@/components/theme/theme-toggler";
import { Rss } from "lucide-react";
import { Button } from "@/components/ui/button";
import { skillsConfig } from "@/config/skills.config";
import {
  Glimpse,
  GlimpseContent,
  GlimpseDescription,
  GlimpseImage,
  GlimpseTitle,
  GlimpseTrigger,
} from '@/components/ui/kibo-ui/glimpse';
import { glimpse } from '@/components/ui/kibo-ui/glimpse/server';


export default async function Hero() {
    const data = await glimpse('https://kuesuto.vercel.app/');

  return (
    <section className="w-full flex flex-col lg:min-h-[calc(100vh-7rem)]">
      <Link href="/">
        <span className="font-mono text-sm underline">{siteConfig.name}</span>
      </Link>
      <div className="flex justify-between items-center mt-6">
        <h1 className="head-text-sm">{portfolioConfig.name}</h1>
        <div className="flex items-center gap-2">
          <Button size="icon" variant="ghost" className="rounded-full" asChild>
            {/* TODO: add rss feed */}
            <Link href="#">
              <Rss size={18} />
              <span className="sr-only">rss feed</span>
            </Link>
          </Button>
          <ThemeToggler />
        </div>
      </div>
      <h3 className="mt-2 text-lg">
        {portfolioConfig.tagline} <span className="sr-only">tagline</span>
      </h3>
      <p className="my-6 max-w-2xl text-foreground/80">
  Hey 👋 I&apos;m Shaahid Shaikh — online I go by{" "}
  <span className="text-foreground font-semibold">shaah1d</span>. I&apos;m a{" "}
  <a href="#" className="text-foreground font-semibold hover:underline">
    full-stack generalist
  </a>{" "}
  who builds with web, AI, blockchain systems.
  I&apos;ve shipped projects like{" "}
  <Glimpse closeDelay={0} openDelay={0}>
        <GlimpseTrigger asChild>
          <a
            className="font-medium text-primary underline"
            href="https://github.com/shaah1d/Kuesuto"
          >
            Kuesuto
          </a>
        </GlimpseTrigger>
        <GlimpseContent className="w-80">
          <GlimpseImage src={data.image ?? ''} />
          <GlimpseTitle>{data.title}</GlimpseTitle>
          <GlimpseDescription>{data.description}</GlimpseDescription>
        </GlimpseContent>
      </Glimpse>{' '}
  (an AI quiz generator), a no-code AI builder, and a provably fair decentralized raffle.
  I care about performance, modern UI, and solving real-world problems with elegant code.
  <span className="sr-only">bio</span>
</p>

      <Socials />
      <div className="hidden md:flex flex-col text-sm space-y-2 rounded max-w-2xl text-foreground/70 my-7">
        {skillsConfig.map((skill) => (
          <p key={skill.category}>
            <span className="font-semibold text-primary/90">
              {skill.category}:
            </span>{" "}
            {skill.technologies.join(", ")}
          </p>
        ))}
      </div>
    </section>
  );
}
