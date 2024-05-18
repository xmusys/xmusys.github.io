import * as React from "react"

import PaperItem from "./paper-item"

/**
 * 某一类的论文列表
 * 
 * @param {Object} props
 * @param {string} props.currentCatogry - 当前论文分类名称
 * @param {{title: string, authors: string, publication: string, links: {type: string, url: string}[]}[]} props.paperDatas - 当前分类的所有论文数据
 * @returns {React.ReactNode} - 论文列表
 */
export default function PaperCatogary({ currentCatogry, paperDatas }) {
    return (
        <div className="border-b-2 py-8">
            <div className="mb-3 text-3xl tracking-wide">
                {currentCatogry}
            </div>
            <ul className="pl-6">
                {paperDatas.map((paperData, index) => (
                    <li key={index} className="mb-4 list-disc">
                        <PaperItem paperData={paperData}></PaperItem>
                    </li>
                ))}
            </ul>
        </div>
    )
}