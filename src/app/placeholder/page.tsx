import React from 'react';
import Image from 'next/image';

const ComingSoonPage: React.FC = () => {
    return (
        <div className='h-screen md:flex mt-24 md:mt-0 md:items-center '>
            <div className='w-full md:w-1/3 flex justify-center md:justify-end'>
                <Image
                    src="/img/fursona/avatar/blep.png"
                    alt="Vercel Logo"
                    className="rounded-full ring-4 ring-accent ring-offset-base-100 w-56 h-56"
                    width={200}
                    height={200}
                    priority
                />
            </div>
            <div className='w-full md:w-2/3 p-10 antialiased'>
                <h1 className='text-5xl text-accent'>Under Construction</h1>
                <p className='py-8 text-accent'>This part of the website is still under construction and will be changed soon...</p>
            </div>
        </div>
    );
};

export default ComingSoonPage;
