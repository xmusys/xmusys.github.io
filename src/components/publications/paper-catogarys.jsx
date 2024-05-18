import * as React from "react"

import PaperCatogary from "./paper-catogary"
import usePublicationsData from "../../hooks/usePublicationsData"

/**
 * 论文列表
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有论文分类
 * @param {String} props.currentIndex - 当前论文分类索引
 * @returns {React.ReactNode}
 */
export default function PaperCatogarys({ allCatogaries, currentIndex }) {
    const allPaperDatas = usePublicationsData()

    if (currentIndex === 0) {
        return (
            <div>
                {allCatogaries.map((catogary, index) => (
                    index !== 0 ? <PaperCatogary key={index} currentCatogry={catogary} paperDatas={allPaperDatas[index]}></PaperCatogary> : <React.Fragment key={index}></React.Fragment>
                ))}
            </div>
        )
    } else {
        return <PaperCatogary currentCatogry={allCatogaries[currentIndex]} paperDatas={allPaperDatas[currentIndex]}></PaperCatogary>
    }
}