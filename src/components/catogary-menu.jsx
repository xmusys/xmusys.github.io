import * as React from 'react'

export default function CatogaryMenu({ allCatogaries, currentCatogry, setCurrentCatogary}) {
    return (
        <div className="border-b-2 flex flex-col ml:flex-row justify-center gap-x-4">
            {allCatogaries.map((name) => (
                <button key={name} onClick={() => setCurrentCatogary(name)} className={`p-2 text-left ${(currentCatogry === name ? " bg-orange-50 border-l-[3px] ml:border-0 ml:border-b-[3px] border-orange-200 text-black": "text-neutral-400 cursor-pointer")}`}>
                    {name}
                </button>
            ))}
        </div>
    )
}