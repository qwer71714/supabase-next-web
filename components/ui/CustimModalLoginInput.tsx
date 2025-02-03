import React from 'react'

interface CustimModalLoginInputProps {
    type: string
    label: string
    inputlabel: string
}

export const CustimModalLoginInput: React.FC<CustimModalLoginInputProps> = ({
    type,
    label,
    inputlabel
}) => {
    return (
        <div className='flex flex-col gap-2'>
            <label
                htmlFor=""
                className='text-sm font-medium'
            >
                {label}
            </label>
            <input
                placeholder={inputlabel}
                type={type}
                className='
                    p-2
                    border 
                    border-neutral-400
                    rounded
                    text-sm
                    focus:outline-green-600
                '/>
        </div>
    )
}
