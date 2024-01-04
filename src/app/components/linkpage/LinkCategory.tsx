import React, { ReactNode } from 'react';

type LinkCategoryProps = {
    title: string;
    children: ReactNode;
};

const LinkCategory: React.FC<LinkCategoryProps> = ({ title, children }) => {
    return (
        <>
            <h2 className="text-2xl font-bold mb-4 mt-8 text-white">{title}</h2>
            <div className="grid md:grid-cols-2 gap-4 w-full md:w-auto">
                {children}
            </div>
        </>
    );
};

export default LinkCategory;
