import * as runtime from 'react/jsx-runtime'
import { evaluateSync } from '@mdx-js/mdx'

/**
 * 
 * @param {string} mdx - MDX 格式的字符串
 * @returns {React.ReactNode} - 生成的 React 组件
 */
function mdxToJsx(mdx) {
    return evaluateSync(mdx, runtime).default
}

export default mdxToJsx