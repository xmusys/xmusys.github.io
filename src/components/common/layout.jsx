import * as React from "react"
import { useState, useRef, useEffect, useContext  } from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router'

import { LangContext } from "../../contexts/lang-context"


/**
 * 实验室 Logo
 * 
 * @returns {React.ReactNode} - 实验室Logo
 */
function Logo() {
    return (
        <Link to="/" className="text-2xl tracking-wide hover:text-yellow-200 hover:shadow transition-colors duration-300">
            ERAS Group
        </Link>
    )
}

/**
 * 导航菜单
 * 
 * @param {Object} props
 * @param {number} props.size - 菜单按钮大小，默认 22 
 * @param {Object[]} props.navItems - 导航选项
 * @returns {React.ReactNode} - 导航菜单
 */
function Menu({ size=22, navItems }) {
    const [isActive, setIsActive] = useState(false)
    const dropdown = useRef(null)

    function handleClick() {
        setIsActive(!isActive)
    }

    const handleClickOutside = (event) => {
        if (dropdown.current && !dropdown.current.contains(event.target)) {
            setIsActive(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className="relative" ref={dropdown}>
            <button onClick={handleClick} className="p-1 rounded hover:bg-xmu-blue-70 focus:bg-xmu-blue-70">
                <svg height={size} width={size} viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="m116 68h-104c-2.209 0-4-1.789-4-4s1.791-4 4-4h104c2.209 0 4 1.789 4 4s-1.791 4-4 4zm4 28c0-2.211-1.791-4-4-4h-104c-2.209 0-4 1.789-4 4s1.791 4 4 4h104c2.209 0 4-1.789 4-4zm0-64c0-2.211-1.791-4-4-4h-104c-2.209 0-4 1.789-4 4s1.791 4 4 4h104c2.209 0 4-1.789 4-4z"/>
                </svg>
            </button>
            {isActive && (
                <div  className="absolute right-0 z-10 mt-2 py-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {navItems.map(item => (<Link key={item.title} to={item.target} className={`text-gray-700 block px-4 py-2 text-sm hover:bg-gray-100 hover:text-gray-900`}>{item.title}</Link>))}
                </div>
            )}
        </div>
    )
}

/**
 * 导航选项
 * 
 * @param {Object} props
 * @param {string} props.title - 导航标题
 * @param {string} props.target - 导航目标  
 * @returns {React.ReactNode} - 导航选项
 */
function NavItem({ title, target }) {
    const location = useLocation()
    const currentPath = location.pathname

    return (
        <li className={`px-3 py-2 flex items-center rounded duration-300 ${(currentPath === target ? "bg-xmu-blue-70" : "hover:bg-xmu-blue-70")}`}>
            <Link to={target} className="text-sm">{title}</Link>
        </li>
    )
}


/**
 * 导航选项列表
 * 
 * @returns {React.ReactNode} - 导航选项列表
 */
function NavItems() {
    const lang = useContext(LangContext)    
    const location = useLocation()
    const currentPath = location.pathname
    const enPath = currentPath === "/home-zh/" ? "/" : currentPath.startsWith("\/team-zh\/") ? currentPath.replace("team-zh", "team") : currentPath.replace(/-zh/, "")
    const zhPath = currentPath === "/" ? "/home-zh/" : currentPath.startsWith("\/team\/") ? currentPath.replace("team", "team-zh") : currentPath.slice(0, -1).concat("-zh/")

    const navItems = (lang === "en" ? [
        ["Home", "/"],
        ["Team", "/team"],
        ["Research", "/research"],
        ["Publications", "/publications"],
        ["Join Us", "/join-us"],
        ["ZH", zhPath]
    ] : [
        ["首页", "/home-zh"],
        ["团队成员", "/team-zh"],
        ["研究领域", "/research-zh"],
        ["发表论文", "/publications-zh"],
        ["加入我们", "/join-us-zh"],
        ["英文", enPath]
    ]).map(([title, target]) => ({ title, target }))

    return (
        <nav className="ml-auto">
            <ul className="hidden ml:flex ml:space-x-2">
                {navItems.map(item => <NavItem key={item.title} title={item.title} target={item.target}></NavItem>)}
            </ul>
            <div className="ml:hidden">
                <Menu navItems={navItems}></Menu>
            </div>
        </nav>
    )
}

/**
 * 页眉
 * 
 * @returns {React.ReactNode} - 页眉
 */
function Header() {
    return (
        <header className="sticky top-0 z-50 bg-xmu-blue-100 text-white shadow-md">
            <div className="max-w-[68rem] mx-auto px-8 py-4 flex items-center">
                <Logo></Logo>
                <NavItems></NavItems>
            </div>
        </header>   
    )
}

/**
 * 页脚
 * 
 * @returns {React.ReactNode} - 页脚
 */
function Footer() {
    return (
        <footer className="mt-auto">
            <div className="py-3 bg-xmu-blue-10 text-neutral-500 text-xs sm:text-sm text-center hyphens-manual">
                © 2024 ERAS Group <span className="hidden sm:inline">(Efficient, Reliable, and Advanced Storage Research Group)</span>
            </div>
        </footer>
    )
}

/**
 * 主要内容区域
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - 页面内容 
 * @returns {React.ReactNode} - 主要内容区域
 */
function Main({ children }) {
    return (
        <main className="">
            <div className="max-w-[68rem] mx-auto px-8">
                {children}
            </div>
        </main>
    )
}


/**
 * 页面布局
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - 页面内容
 * @returns {React.ReactNode} - 填充页面内容的页面布局
 */
export default function Layout({ children }) {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto antialiased text-pretty bg-white text-black">
            <div className="min-w-full min-h-full flex flex-col">
                <Header />
                <Main>{ children }</Main>
                <Footer />
            </div>
        </div>
    )
}