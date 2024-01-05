import Link from 'next/link';
import { IconBrandGithub } from '@tabler/icons-react';
import ProjectCard from '@components/projects/Card';

const ProjectsPage = () => {
    return (
        <div className='min-h-screen antialiased font-mono'>
            <nav className='flex justify-between items-center p-4'>
                <Link href="/" className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
                    Back
                </Link>
            </nav>
            <main className='flex flex-col items-center justify-center p-4'>
                <h1 className="text-4xl font-bold mb-4 text-white">Projects</h1>
                <div className='w-full md:max-w-3xl border-4 border-accent rounded-2xl p-4 text-accent bg-accent/5'>
                    Please check out my Github Profile or my Github Organisation for a full list of my projects.
                    <div className='mt-8'>
                        <Link href="https://github.com/aottr" className='btn btn-secondary rounded-2xl w-full mb-4'>
                            <IconBrandGithub className='w-8 h-8' />
                            Private Profile
                        </Link>
                        <Link href="https://github.com/ShorkBytes" className='btn btn-secondary rounded-2xl w-full'>
                            <IconBrandGithub className='w-8 h-8' />
                            ShorkBytes Organisation
                        </Link>
                    </div>
                </div>
                <h1 className="text-2xl font-bold my-4 text-white">Contributions</h1>
                <ProjectCard project={{ name: 'AwtterSpace', description: 'VR-content creation and community around the Awtter model and it\'s successors.', url: 'https://awtterspace.com', logo: 'https://awtterspace.com/static/img/logowhite.png', position: 'Head Dev / Infrastructure' }} />
                <ProjectCard project={{ name: 'Furry Blacklight', description: 'A medium-sized convention located in Paris (France) hosted once per year.', url: 'https://fblacklight.org', logo: 'https://social.fblacklight.org/assets/fbl-logo.webp', position: 'DevOps / Infrastructure' }} />
                <ProjectCard project={{ name: 'BARQ!', description: 'A social app with 144k+ furries all around the world.', url: 'https://barq.app', logo: 'https://barq.app/barq.svg', position: 'Translator (DE)' }} />

            </main>
        </div>
    );
}

export default ProjectsPage;