import { useMemo } from "react"

const useRoutes = () => {
    const routes = useMemo(
        () => [
            {
                label: "포트폴리오",
                href: "/"
            },
            {
                label: "전체글",
                href: "/"
            },
            {
                label: "로그인",
                href: "/",
                onClick: () => {}
            },
        ],
        []
    )
    return routes
}

export default useRoutes