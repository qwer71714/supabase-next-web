import { useState } from "react";

interface CustimModalLoginInputProps {
    type: string;
    label: string;
    inputlabel: string;
}

export const CustimModalLoginInput: React.FC<CustimModalLoginInputProps> = ({
    type,
    label,
    inputlabel,
}) => {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);
        // 입력 중에는 바로 에러를 표시하지 않음
    };

    // 이메일 유효성 검사
    const handleBlur = () => {
        if (type === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            // 값이 있을 때만 검증하여 에러 메시지를 설정
            if (value && !emailRegex.test(value)) {
                setError("유효한 이메일 주소를 입력하세요.");
            } else {
                setError("");
            }
        }
    };

    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-sm font-medium">
                {label}
            </label>
            <input
                value={value}
                onChange={handleChange}
                onBlur={handleBlur} // 포커스가 벗어날 때 검증 실행
                placeholder={inputlabel}
                type={type}
                className="
                    p-2
                    border 
                    border-neutral-400
                    rounded
                    text-sm
                    focus:outline-green-600
                "/>
            {error && <p className="text-red-500 text-xs font-semibold">{error}</p>}
        </div>
    );
};
