import Image from 'next/image';
import Link from 'next/link';

export interface Project {
    name: string;
    description: string;
    url: string;
    logo: string;
    position: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <div className='w-full md:max-w-3xl border-4 border-accent rounded-2xl p-4 text-accent bg-accent/5 flex flex-col md:flex-row mb-4 items-center'>
            <Image
                src={project.logo}
                alt={`${project.name} logo`}
                className="w-48 hover:scale-105 ease-in duration-200"
                width={200}
                height={200}
                priority
            />
            <div className='w-full md:w-auto flex-grow md:pl-8 flex flex-col'>
                <div className='flex-grow'>
                    <h2 className='text-2xl font-bold mb-2'>{project.name}</h2>
                    <p className='text-sm text-accent'>{project.description}</p>
                    <p className='text-sm text-accent pt-2'><span className='font-bold'>Position:</span> {project.position}</p>
                </div>
                <div className='flex justify-end'>
                    <Link href={project.url} className='btn btn-secondary rounded-2xl'>
                        Go to {project.name}
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;