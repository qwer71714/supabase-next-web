'use client'

import Link from "next/link"
import useRoutes from "@/app/Hook/useRouts"

import { useState } from "react";

import { IoIosSearch } from "react-icons/io";
import { CustomModal } from "./CustomModal";
import { CustomHeaderButton } from "./ui/CustomHeaderButton"

export const CustomHeader = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const useroutes = useRoutes()

    const handleLoginClick = () => {
        setIsModalOpen(true)
    }

    const toggleModal = () => {
        setIsModalOpen(false)
    }
    return (
        // 웹 헤더
        <header className="w-full bg-white py-3 border-b border-stone-300">
            <div className="w-4/5 mx-auto flex items-center justify-between">
                <Link href="/" className="text-black">
                    <h1 className="text-xl font-bold">Logo</h1>
                </Link>
                <form action="" className="flex-1 flex items-center relative">
                    <input
                        type="text"
                        placeholder="검색..."
                        className="
                            w-1/2 
                            bg-neutral-100 
                            border 
                            border-neutral-200 
                            shadow-sm
                            rounded-md 
                            py-2
                            pl-4 
                            mx-auto
                            focus:outline-emerald-600
                            focus:border
                            text-sm
                        "
                    />
                    <IoIosSearch className="absolute left-[73%] top-1/2 transform -translate-y-1/2 text-neutral-500" />
                </form>
                <div className="flex gap-8">
                    {useroutes.map(user => (
                        <CustomHeaderButton
                            key={user.label}
                            label={user.label}
                            href={user.href}
                            onClick={user.label === "로그인" ? handleLoginClick : user.onClick || (() => { })}
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && <CustomModal onClose={toggleModal} />}
        </header>
    )
}

