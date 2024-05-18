import * as React from "react"
import { useContext } from "react"

import { LangContext } from "../../contexts/lang-context"
import MemberCard from "./member-card"

/**
 * 某类成员列表
 * 
 * @param {Object} props
 * @param {string[]} props.allCatogaries - 所有成员类别
 * @param {string} props.catogary - 当前成员类别
 * @param {{name: string, slug: string, photo: string, degree: string, links: {type: string, url: string}[]}[]} props.memberDatas - 当前成员类别的所有成员数据
 * @param {Object} props.memberImages - 所有成员图片
 * @returns {React.ReactNode}
 */
export default function MemberCatogary({ allCatogaries, catogary, memberDatas, memberImages }) {
    const lang = useContext(LangContext)

    const name = lang === "en" ? "Name" : "姓名"
    const degree = lang === "en" ? "Degree" : "学位"
    const year = lang === "en" ? "Year" : "毕业时间"
    const firstJob = lang === "en" ? "First Job" : "第一份工作"

    if (catogary === allCatogaries[allCatogaries.length-1]) {
        // 校友
        return (
        <div className="pt-8 flex flex-col items-center gap-8">
            <div className="text-3xl tracking-wider">
                {catogary}
            </div>
            <div className="w-full ml:w-4/5 border-2 rounded-xl py-2 px-4 ml:px-8 overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col" className="whitespace-nowrap py-3.5 pr-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{name}</th>
                            <th scope="col" className="whitespace-nowrap py-3.5 px-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{degree}</th>
                            <th scope="col" className="whitespace-nowrap py-3.5 px-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{year}</th>
                            <th scope="col" className="whitespace-nowrap py-3.5 px-3 sm:px-4 text-left text-sm font-semibold text-gray-900">{firstJob}</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {memberDatas.map(({name, degree, year, first_job}, index) => (
                            <tr key={index}>
                                <td className="whitespace-nowrap py-3.5 pr-3 sm:px-4 text-sm font-medium text-gray-900">{name}</td>
                                <td className="whitespace-nowrap py-3.5 px-3 sm:px-4 text-sm text-gray-500">{degree}</td>
                                <td className="whitespace-nowrap py-3.5 px-3 sm:px-4 text-sm text-gray-500">{year}</td>
                                <td className="whitespace-nowrap py-3.5 px-3 sm:px-4 text-sm text-gray-500">{first_job}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        )
    } else {
        // 非校友
        return (
            <div className="pt-8 flex flex-col items-center gap-8">
                <div className="text-3xl tracking-wider">
                    {catogary}
                </div>
                <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
                    {memberDatas.map((memberData, index) => <MemberCard key={index} memberData={memberData} memberImage={memberImages[memberData.photo] ? memberImages[memberData.photo] : memberImages["default"]}></MemberCard>)}
                </div>
            </div>
        )
    }
}
