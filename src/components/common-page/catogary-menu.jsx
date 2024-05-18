import * as React from 'react'

/**
 * 分类菜单
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有分类
 * @param {string} props.currentIndex - 当前分类
 * @param {Function} props.setCurrentIndex - 设置当前分类
 * @returns {React.ReactNode}
 */
export default function CatogaryMenu({ allCatogaries, currentIndex, setCurrentIndex}) {
    return (
        <div className="border-b-2 flex flex-col ml:flex-row justify-center ml:gap-x-4">
            {allCatogaries.map((name, index) => (
                <button key={index} onClick={() => setCurrentIndex(index)} className={`p-2 text-sm ml:text-base text-left ${(currentIndex === index ? " bg-orange-50 border-l-[3px] ml:border-0 ml:border-b-[3px] border-orange-200 text-black": "text-neutral-400 cursor-pointer")}`}>
                    {name}
                </button>
            ))}
        </div>
    )
}