import React from 'react';
import Image from 'next/image';

import FurAffinity from '@icons/FurAffinity';
import { IconBrandMastodon, IconBrandTwitter, IconBrandDiscord, IconBrandTelegram, IconBrandGithub, IconCoffee, IconBrandPatreon, IconBrandBluesky } from '@tabler/icons-react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center py-12 px-6 antialiased font-mono">
      <div className="flex flex-col items-center">
        <Image
          src="/avatar.jpg"
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
        <a href="https://bsky.app/profile/otter.foo" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandBluesky className='w-8 h-8' />
          Bluesky
        </a>
        <a href="https://furry.engineer/@alex" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandMastodon className='w-8 h-8' />
          Mastodon
        </a>
        <a href="https://twitter.com/alexottr" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandTwitter className='w-8 h-8' />
          Twitter
        </a>
        <a href="https://discordapp.com/users/748482870942629889" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandDiscord className='w-8 h-8' />
          Discord
        </a>
        <a href="https://t.me/alexottr" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandTelegram className='w-8 h-8' />
          Telegram
        </a>
      </div>
      <h2 className="text-2xl font-bold my-4 text-white">Projects and Art</h2>
      <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">
        <a href="https://github.com/aottr" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandGithub className='w-8 h-8' />
          Github
        </a>

        <a href="https://www.furaffinity.net/user/coy~" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <FurAffinity />
          FurAffinity
        </a>
      </div>
      <h2 className="text-2xl font-bold my-4 text-white">Support</h2>
      <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">

        <a href="https://ko-fi.com/alexottr" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconCoffee className='w-8 h-8' />
          Ko-Fi
        </a>
        <a href="https://patreon.com/alexottr" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
          <IconBrandPatreon className='w-8 h-8' />
          Patreon
        </a>
      </div>
    </main>
  );
}