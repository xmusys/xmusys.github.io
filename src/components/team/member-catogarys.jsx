import * as React from "react"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"
import MemberCatogary from "./member-catogary"
import useTeamData from "../../hooks/useTeamData"
import useTeamImageData from "../../hooks/useTeamImageData"

/**
 * 成员列表
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有成员类别
 * @param {string} props.currentIndex - 当前成员类别索引
 * @returns {React.ReactNode}
 */
export default function MemberCatogarys({ allCatogaries, currentIndex }) {
    const lang = useContext(LangContext)
    const allMemberDatas = useTeamData(lang)
    const memberImages = useTeamImageData()

    if (currentIndex === 0) {
        return (
            <div className="flex flex-col gap-10">
                {allCatogaries.map((catogary, index) => (
                    index !== 0 ? <MemberCatogary key={index} allCatogaries={allCatogaries} catogary={catogary} memberDatas={allMemberDatas[index]} memberImages={memberImages}></MemberCatogary> : <React.Fragment key={index}></React.Fragment>
                ))}
            </div>
        )
    } else {
        return (
            <MemberCatogary allCatogaries={allCatogaries} catogary={allCatogaries[currentIndex]} memberDatas={allMemberDatas[currentIndex]} memberImages={memberImages}></MemberCatogary>
        )
    }
}
