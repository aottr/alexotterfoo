import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import FurAffinity from '@icons/FurAffinity';
import { IconBrandMastodon, IconBrandTwitter, IconBrandDiscord, IconBrandTelegram, IconBrandGithub, IconCoffee, IconBrandPatreon, IconBrandBluesky, IconCode } from '@tabler/icons-react';

import LinkCategory from '@components/linkpage/LinkCategory';
import LinkPageLink from '@components/linkpage/Link';
import IconOtter from '@components/icons/Otter';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-6 antialiased font-mono">
      <div className="flex flex-col items-center">
        <Image
          src="/img/fursona/avatar/avatar.jpg"
          alt="Vercel Logo"
          className="rounded-full ring-4 ring-accent ring-offset-base-100 w-56 hover:scale-105 ease-in duration-200"
          width={200}
          height={200}
          priority
        />
        <h1 className="text-4xl font-bold mt-6 text-accent">Alex</h1>
        <p className='text-sm text-center text-accent mt-2 max-w-96'>Part-time Otter and Software-Engineer, always trying to make the world better. uwu </p>
      </div>

      <LinkCategory title="Socials">
        <LinkPageLink link="https://bsky.app/profile/otter.foo" title="Bluesky" Icon={IconBrandBluesky} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://furry.engineer/@alex" title="Mastodon" Icon={IconBrandMastodon} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://twitter.com/alexottr" title="Twitter" Icon={IconBrandTwitter} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://discordapp.com/users/748482870942629889" title="Discord" Icon={IconBrandDiscord} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://t.me/alexottr" title="Telegram" Icon={IconBrandTelegram} iconClasses='w-8 h-8' />
      </LinkCategory>

      <LinkCategory title="Projects and Art">
        <LinkPageLink link="https://github.com/aottr" title="Github" Icon={IconBrandGithub} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://www.furaffinity.net/user/coy~" title="FurAffinity" Icon={FurAffinity} />
        <Link href='/projects' className='btn btn-lg btn-secondary btn-outline border-4 rounded-2xl w-full md:col-span-2 '>
          <IconCode className='w-8 h-8' />
          My Projects
        </Link>
        <Link href='/placeholder' className='btn btn-lg btn-secondary btn-outline border-4 rounded-2xl w-full md:col-span-2 '>
          <IconOtter />
          My Fursona
        </Link>
      </LinkCategory>

      <LinkCategory title="Support">
        <LinkPageLink link="https://ko-fi.com/alexottr" title="Ko-Fi" Icon={IconCoffee} iconClasses='w-8 h-8' />
        <LinkPageLink link="https://patreon.com/alexottr" title="Patreon" Icon={IconBrandPatreon} iconClasses='w-8 h-8' />
      </LinkCategory>
    </main>
  );
}