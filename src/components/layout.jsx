import * as React from "react"
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

// 页眉
const navItems = [
    ["Home", "/"],
    ["Team", "/team/"],
    ["Research", "/research/"],
    ["Publications", "/publications/"],
    ["Join Us", "/joinus/"],
    ["中文", "/zh/"]
].map(([title, target]) => ({ title, target }))

function Logo() {
    return (
        <Link to="/" className="text-xl">
            ZhiRong Research Group
        </Link>
    )
}


function NavItem({ title, target }) {
    const location = useLocation();
    const currentPath = location.pathname;

    return (
        <li className={`px-3 py-2 flex items-center rounded duration-300 ${(currentPath === target ? "bg-xmu-blue-70" : "hover:bg-xmu-blue-70")}`}>
            <Link to={target} className="text-[0.8rem]">{title}</Link>
        </li>
    )
}

function Menu({ size=22 }) {

    const [isActive, setIsActive] = useState(false);
    const dropdown = useRef(null);

    function handleClick() {
        setIsActive(!isActive);
    }

    const handleClickOutside = (event) => {
        if (dropdown.current && !dropdown.current.contains(event.target)) {
            setIsActive(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

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

function NavItems() {
    return (
        <nav className="ml-auto">
            <ul className="hidden ml:flex ml:space-x-2">
                {navItems.map(item => <NavItem key={item.title} title={item.title} target={item.target}></NavItem>)}
            </ul>
            <div className="ml:hidden">
                <Menu></Menu>
            </div>
        </nav>
    )
}

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

// 页脚
function Footer() {
    return (
        <footer className="mt-auto">
            <div className="py-3 bg-xmu-blue-10 text-neutral-500 text-sm text-center">
                © 2024 ZhiRong Shen Research Group.
            </div>
        </footer>
    )
}

// 主要内容
function Main({ children }) {
    return (
        <main className="">
            <div className="max-w-[68rem] mx-auto px-8">
                {children}
            </div>
        </main>
    )
}


// 页面基本布局
export default function Layout({ children }) {
    return (
        <div className="w-screen h-screen overflow-x-hidden overflow-y-auto antialiased text-pretty bg-white text-black">
            <div className="min-w-full min-h-full flex flex-col">
                <Header></Header>
                <Main>{ children }</Main>
                <Footer></Footer>
            </div>
        </div>
    )
}