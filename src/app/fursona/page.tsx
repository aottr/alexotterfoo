import Link from 'next/link';
import Image from 'next/image';

import Fursona from '@public/.well-known/fursona.json';

const FursonaPage = () => {

    const fursona = Fursona.sonas[0];
    return (
        <div className='min-h-screen antialiased font-mono'>
            <nav className='flex justify-between items-center p-4'>
                <Link href="/" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
                    Back
                </Link>
            </nav>
            <main className='flex flex-col items-center justify-center p-4'>
                <div className="flex flex-col items-center">
                    <Image
                        src="/img/fursona/avatar/avatar.jpg"
                        alt="Fursona avatar"
                        className="rounded-xl ring-4 ring-accent ring-offset-base-100 w-80 hover:scale-105 ease-in duration-200"
                        width={200}
                        height={200}
                        priority
                    />
                </div>
                <h1 className="text-4xl font-bold my-4 text-white">
                    {fursona.name}
                    <span className='text-2xl font-bold text-accent'> ({fursona.pronouns})</span>
                </h1>
                <h2 className="text-2xl font-bold my-2 text-accent">
                    {fursona.species} ({fursona.gender})
                </h2>
                <div className="avatar-group -space-x-4 p-6">
                    {fursona.colors.map((color, index) => {
                        return (
                            <div className="avatar placeholder hover:scale-125 hover:z-50 ease-in duration-200" key={index}>
                                <div className='w-14 text-xs md:text-base md:w-20' style={{ background: color }}><span style={{ color: color }} className='invert'>{color}</span></div>
                            </div>
                        );
                    })}
                </div>
                <h2 className="text-3xl font-bold my-4 text-white">
                    Ref
                </h2>
                <Link href={fursona.ref} target='_blank'><Image
                    src={fursona.ref}
                    alt="Fursona avatar"
                    className="rounded-xl ring-4 ring-accent ring-offset-base-100 w-96 hover:scale-105 ease-in duration-200"
                    width={200}
                    height={200}
                    priority
                /></Link>
            </main>
        </div>
    );
}

export default FursonaPage;