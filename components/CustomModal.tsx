import { useEffect } from "react";
import { CustimModalLoginInput } from "./ui/CustimModalLoginInput";
import { AuthLoginButton } from "./ui/AuthLoginButton";

interface CustomModalProps {
    onClose: () => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({ 
    onClose 
}) => {
    useEffect(() => {
        // 모달이 열릴 때 body의 스크롤을 막음
        document.body.style.overflow = "hidden";

        // 컴포넌트가 언마운트될 때 원래 상태로 복구
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    const test = () => console.log("이것은 임시 방편 함수입니다.");

    return (
        <div
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center"
        >
            <div
                className="w-1/5 bg-white py-16 px-14 rounded-lg shadow-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-col">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">어서오세요! 반가워요!</h1>
                        <p className="text-sm text-neutral-700">
                            당신의 자리에서 따뜻한 쿠션을 준비해뒀어요!
                        </p>
                        <div className="border border-neutral-300 mt-5" />
                    </div>
                    <form className="mt-12 flex flex-col gap-4">
                        <CustimModalLoginInput
                            type="text"
                            label="Email"
                            inputlabel="이메일 입력 하시오"
                        />
                        <CustimModalLoginInput
                            type="password"
                            label="비밀번호"
                            inputlabel="비밀번호 입력 하시오"
                        />
                        <button className="mt-4 p-2 rounded bg-emerald-600 hover:bg-emerald-700/90">
                            <p className="text-white font-medium">Sign in</p>
                        </button>
                        <AuthLoginButton label="Sign in with Google" onClick={test} />
                        <AuthLoginButton label="Sign in with GitHub" onClick={test} />
                    </form>
                </div>
            </div>
        </div>
    );
};
