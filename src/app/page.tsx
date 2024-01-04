import React from 'react';
import Image from 'next/image';

import FurAffinity from '@icons/FurAffinity';
import { IconBrandMastodon, IconBrandTwitter, IconBrandDiscord, IconBrandTelegram, IconBrandGithub, IconCoffee, IconBrandPatreon, IconBrandBluesky } from '@tabler/icons-react';

import LinkPageLink from '@components/linkpage/Link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-6 antialiased font-mono">
      <div className="flex flex-col items-center">
        <Image
          src="/img/fursona/avatar/avatar.jpg"
          alt="Vercel Logo"
          className="rounded-full ring-4 ring-accent ring-offset-base-100 w-56"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-4xl font-bold mb-10 mt-6 text-accent">Alex</h1>
      </div>
      <h2 className="text-2xl font-bold mb-4 text-white">Socials</h2>
      <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">
        <LinkPageLink link="https://bsky.app/profile/otter.foo" title="Bluesky" Icon={IconBrandBluesky} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://furry.engineer/@alex" title="Mastodon" Icon={IconBrandMastodon} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://twitter.com/alexottr" title="Twitter" Icon={IconBrandTwitter} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://discordapp.com/users/748482870942629889" title="Discord" Icon={IconBrandDiscord} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://t.me/alexottr" title="Telegram" Icon={IconBrandTelegram} iconClasses='w-8 h-8' />
      </div>
      <h2 className="text-2xl font-bold my-4 text-white">Projects and Art</h2>
      <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">
        <LinkPageLink link="https://github.com/aottr" title="Github" Icon={IconBrandGithub} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://www.furaffinity.net/user/coy~" title="FurAffinity" Icon={FurAffinity} />
      </div>
      <h2 className="text-2xl font-bold my-4 text-white">Support</h2>
      <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">
        <LinkPageLink link="https://ko-fi.com/alexottr" title="Ko-Fi" Icon={IconCoffee} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://patreon.com/alexottr" title="Patreon" Icon={IconBrandPatreon} iconClasses='w-8 h-8' />
      </div>
    </main>
  );
}