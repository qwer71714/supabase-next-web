import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

interface AuthLoginButtonProps {
    label: string;
    onClick: () => void;
}

export const AuthLoginButton: React.FC<AuthLoginButtonProps> = ({
    label,
    onClick,
}) => {
    // label 값에 따라 아이콘 컴포넌트를 매핑합니다.
    const iconMap: { [key: string]: React.ComponentType } = {
        "Sign in with Google": FcGoogle,
        "Sign in with GitHub": FaGithub,
    };

    // label에 해당하는 아이콘 컴포넌트를 가져오고, 없으면 기본적으로 FcGoogle을 사용합니다.
    const IconComponent = iconMap[label] || FcGoogle;

    return (
        <button
            onClick={onClick}
            className="
                p-2
                border
                border-neutral-400/70
                hover:bg-neutral-100
                rounded
                flex
                flex-row w-full 
                justify-center 
                items-center
            ">
            <div className="flex flex-row items-center gap-4">
                <IconComponent />
                <p className="font-medium">{label}</p>
            </div>
        </button>
    );
};
