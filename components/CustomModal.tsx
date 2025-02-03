import { useState, useEffect } from "react";
import { CustimModalLoginInput } from "./ui/CustimModalLoginInput";
import { AuthLoginButton } from "./ui/AuthLoginButton";

interface CustomModalProps {
    onClose: () => void;
}

export const CustomModal: React.FC<CustomModalProps> = ({ onClose }) => {
    // 로그인 모드(false)와 회원가입 모드(true)를 전환할 상태
    const [isSignUp, setIsSignUp] = useState(false);

    useEffect(() => {
        // 모달이 열릴 때 body의 스크롤을 막음
        document.body.style.overflow = "hidden";
        // 컴포넌트가 언마운트될 때 원래 상태로 복구
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);

    // 임시 방편 함수 (소셜 로그인 버튼 클릭 시)
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
                        <h1 className="text-2xl font-bold">
                            {isSignUp ? "환영합니다, 사랑하는 독자님!" : "어서오세요! 반가워요!"}
                        </h1>
                        <p className="text-sm text-neutral-700">
                            {isSignUp
                                ? "이곳은 제가 직접 꾸민 개인 블로그입니다. 회원가입하시면 언제든 제 소중한 이야기를 읽어보실 수 있어요."
                                : "당신의 자리에서 따뜻한 쿠션을 준비해뒀어요!"}
                        </p>
                        <div className="border border-neutral-300 mt-5" />
                    </div>
                    <form className="mt-12 flex flex-col gap-4">
                        {/* 회원가입 모드일 경우 이름 입력란 추가 */}
                        {isSignUp && (
                            <CustimModalLoginInput
                                type="text"
                                label="닉네임"
                                inputlabel="닉네임 입력하세요"
                            />
                        )}
                        <CustimModalLoginInput
                            type="email"
                            label="이메일"
                            inputlabel="이메일 입력하세요"
                        />
                        <CustimModalLoginInput
                            type="password"
                            label="비밀번호"
                            inputlabel="비밀번호 입력하세오"
                        />
                        {/* 회원가입 모드일 경우 비밀번호 확인 입력란 추가 */}
                        {isSignUp && (
                            <CustimModalLoginInput
                                type="password"
                                label="비밀번호 확인"
                                inputlabel="비밀번호 확인"
                            />
                        )}
                        <button className="mt-4 p-2 rounded bg-emerald-600 hover:bg-emerald-700/90">
                            <p className="text-white font-medium">
                                {isSignUp ? "회원가입" : "로그인"}
                            </p>
                        </button>
                        <AuthLoginButton
                            iconstype="Google"
                            label={isSignUp ? "Google 회원가입" : "Google 로그인"}
                            onClick={test}
                        />
                        <AuthLoginButton
                            iconstype="GitHub"
                            label={isSignUp ? "GitHub 회원가입" : "GitHub 로그인"}
                            onClick={test}
                        />
                        {/* 모드 전환용 텍스트 (클릭 시 현재 모드를 반전) */}
                        <p
                            className="text-center mt-4 text-sm text-blue-600 hover:text-blue-700/90 cursor-pointer"
                            onClick={() => setIsSignUp(!isSignUp)}
                        >
                            {isSignUp
                                ? "이미 계정이 있으신가요? 로그인하기"
                                : "계정이 없으신가요? 회원가입하기"}
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};
