import * as React from 'react'

/**
 * 分类菜单
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有分类
 * @param {string} props.currentCatogry - 当前分类
 * @param {Function} props.setCurrentCatogary - 设置当前分类
 * @returns {React.ReactNode} - 分类菜单
 */
export default function CatogaryMenu({ allCatogaries, currentCatogry, setCurrentCatogary}) {
    return (
        <div className="border-b-2 flex flex-col ml:flex-row justify-center ml:gap-x-4">
            {allCatogaries.map((name) => (
                <button key={name} onClick={() => setCurrentCatogary(name)} className={`p-2 text-sm ml:text-base text-left ${(currentCatogry === name ? " bg-orange-50 border-l-[3px] ml:border-0 ml:border-b-[3px] border-orange-200 text-black": "text-neutral-400 cursor-pointer")}`}>
                    {name}
                </button>
            ))}
        </div>
    )
}