
const LinkPageLink = ({ link, title, Icon, iconClasses }: { link: string, title: string, Icon: React.ElementType, iconClasses?: string }) => (
    <a href={link} className='btn btn-lg btn-outline btn-accent border-4 rounded-2xl w-full md:w-72'>
        <Icon className={iconClasses} />
        {title}
    </a>
)

export default LinkPageLink;