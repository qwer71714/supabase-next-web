import Image from "next/image"
import Link from "next/link"
import "../../globals.css"

interface CredProps {
  label: string,
  user: string,
  profileImage: string, // 유저 프로필 사진
  createdDate: string, // 글 생성 날짜
  title: string, // 제목
}

export const Cred: React.FC<CredProps> = ({
  label,
  user,
  profileImage,
  createdDate,
  title,
}) => {
  return (
    <Link
      href={"/"}
      className="
        flex 
        flex-col 
        gap-4
        pb-4
        border-b
      ">
      <div className="flex flex-row items-center gap-2">
        <Image
          src={profileImage}
          alt={`${user}'s profile`}
          width={120}
          height={120}
          unoptimized
          className="rounded-full w-[28px] h-[28px]"
        />
        <p className="text-sm">{user}</p>
      </div>
      <h1 className="text-lg font-bold">{title}</h1>
      <p className="label_text text-sm text-neutral-600">{label}</p>
      <span className="text-sm text-gray-500">{createdDate}</span>
    </Link>
  )
}