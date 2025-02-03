import Link from 'next/link'
import React from 'react'

interface CustomHeaderProps {
    label: string,
    href: string,
    onClick: () => void,
}

export const CustomHeaderButton: React.FC<CustomHeaderProps> = ({
    label,
    href,
    onClick
}) => {
    return (
        <Link href={href}>
            <button
                type={"button"}
                onClick={onClick}
                className='font-medium hover:text-emerald-600'
            >
                {label}
            </button>
        </Link>
    )
}
