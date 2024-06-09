# ERAS Research Group 

*Efficient, Reliable, and Advanced System Research Group. 🚀* 

---

> 页面基于 [Gastsby](https://www.gatsbyjs.com/) 构建，部署于 [GitHub Pages](https://pages.github.com/) 
>
> - 编辑指南
>   - 加入仓库，直接在代码仓库中编辑
>   - 或克隆到本地后进行修改，然后推送到 main 分支
> - 部署时机
>   - 更新 main 分支时
>   - 每天零点固定部署一次
>
> - 下面是具体介绍，介绍分为 
>   - **目录结构**
>   - **网站信息**
>   - **介绍、新闻、论文、成员、图片** 五个部分
>   - **注意事项**

---

## 目录结构 

> **`src/assets/`** 这里是存放数据的目录
> 
> **`templates/`** 这里是存放模版的目录
> 
> 目录结构如下：

- 📄 `gatsby-config.js` - `网站配置`
- 📁 `src` - `源代码`
    - 📁 `assets` - `数据根目录`
    - 📁 `images` - `图片`
        - 📁 `home` - `首页轮播图`
        - 📁 `team` - `成员照片`
    - 📁 `data` - `数据`
        - 📁 `home` - `首页介绍`
            - 📄 `home_en.mdx` - `英文`
            - 📄 `home_zh.mdx` - `中文`
        - 📁 `join_us` - `加入我们`
            - 📄 `join_us_en.mdx` - `英文`
            - 📄 `join_us_zh.mdx` - `中文`
        - 📁 `research` - `研究领域`
            - 📄 `research_en.mdx` - `英文`
            - 📄 `research_zh.mdx` - `中文`
        - 📁 `news` - `新闻`
            - 📄 `news.json` - `新闻`
        - 📁 `publications` - `论文`
            - 📄 `conference_papers.json` - `会议论文`
            - 📄 `journal_papers.json` - `期刊论文`
        - 📁 `team` - `成员`
            - 📄`team.json` - `现团队成员`
            - 📄`alumni.json` - `已毕业校友`
- 📁 `templates` - `参考模版:jin`
    - 📄 `min-news.json` - `最小新闻模版`
    - 📄 `min-paper.json` - `最小论文模版`
    - 📄 `min-alumni.json` - `最小校友模版`
    - 📄 `min-team.json` - `最小团队成员模版`
    - 📄 `full-news.json` - `完整新闻模版`
    - 📄 `full-paper.json` - `完整论文模版`
    - 📄 `full-alumni.json` - `完整校友模版`
    - 📄 `full-team.json` - `完整团队成员模版`

---

## 网站信息

在 `gatsby-config.js` 文件中，可以配置网站的基本信息如下

- `title`：网站标题
- `description`：网站介绍
- `keywords`：网站关键词

```javascript
module.exports = {
  siteMetadata: {
    title: `ERAS Research Group`,
    siteUrl: `https://xmusys.github.io/`,
    description: `Efficient, Reliable, and Advanced System Research Group`,
    keywords: `System Research`,
  },
}
```

---

## 1、介绍：`📁Home`、`📁Join Us`、`📁Research`

后缀 `.mdx` 的都是使用 `Markdown` 编写，需要修改时可以直接替换文本



- **首页介绍：📄 `home_zh.mdx`  和 📄 `home_en.mdx`**

```markdown
# 欢迎来到 ERAS 研究小组！

*高效、可靠、先进的系统研究小组*

ERAS 研究小组由沈志荣副教授负责，聚焦于智能存储系统的研究，主要研究内容包括基于纠删码的高可靠存储和高效访问技术，新兴存储器件的容错和性能优化，以及KV存储系统。

在过去三年中，我们团队在国际会议和权威期刊上发表了十多篇论文，包括 USENIX ATC、HPCA、INFOCOM 和 IEEE TC。此外，我们还获得了国家自然科学基金等国家级资助，并与阿里巴巴、华为等知名公司建立了合作关系。

<HomeCarousel />
```

> 其中 `<HomeCarousel />` 是轮播图，可以调整排版，如：

```markdown
# 欢迎来到 ERAS 研究小组！

*高效、可靠、先进的系统研究小组*

ERAS 研究小组由沈志荣副教授负责，聚焦于智能存储系统的研究，主要研究内容包括基于纠删码的高可靠存储和高效访问技术，新兴存储器件的容错和性能优化，以及KV存储系统。

<HomeCarousel />

在过去三年中，我们团队在国际会议和权威期刊上发表了十多篇论文，包括 USENIX ATC、HPCA、INFOCOM 和 IEEE TC。此外，我们还获得了国家自然科学基金等国家级资助，并与阿里巴巴、华为等知名公司建立了合作关系。
```



- **加入我们的介绍：📄 `join_us_zh.mdx` 和 📄 `join_us_en.mdx`**

> 其中 `<EmailIcon />` 和 `<PositionIcon />` 分别是 邮箱图标 📧 和 位置图标📍
>
> 之后有需要的话，还可以添加 `<PhoneIcon />` 电话图标 📞

```markdown
# 加入我们

**我们团队的研究目标是为大型存储系统和数据中心设计和构建安全可靠的技术，如果您对我们的研究课题感兴趣，欢迎与沈志荣联系！**

- 对有志于攻读硕士或博士学位的同学，可以尽早与我们联系。
- 我们欢迎对系统和内存研究感兴趣的本科生。
- 我们团队有博士后名额，详情请联系沈志荣。

---

# 联系方式

<EmailIcon /> zhirong.shen2601@gmail.com, shenzr@xmu.edu.cn

<PositionIcon /> 厦门市翔安区厦门大学翔安校区西部片区3号楼101
```



- **研究领域的介绍：📄 `research_zh.mdx` 和 📄 `research_en.mdx`**

> 没有附加的东西，是 `Markdown` 格式的纯文本，可以直接修改

```markdown
# 研究领域

## 新兴存储芯片

- PM: LearnWD(HPCA'24), CacheKV (ICDE'23), ResEnc (IEEE TC)
- 3D-Flash: CC-Flash (SAC'23), ParaGC (ICCD'22), SpeedupGC (ICCD'23)

---

## 基于纠删码的容错技术

- 高效访问
- 高可靠存储

---
```

---

## 2、新闻：`📁News`

**📄 `news.json`**

- 完整模版

```json
{
    "date": "",
    "content": {
        "en": "",
        "zh": ""
    }
}
```

- 结构

```json
{
    "date": "日期，需要 yyyy-mm 的格式",
    "content": {
        "en": "英文，新闻内容，支持 Markdown",
        "zh": "中文，新闻内容，支持 Markdown"
    }
}
```

- 例子

> 例子的 `[Ronglong](/rong-long-wu)` 是 `Markdown` 的链接语法，指向个人主页的链接，在**第四点 `4、Team` **或者最后的**注意事项**会提到，这里用于在新闻中指向个人简历主页

```json
{
    "date": "2024-5",
    "content": {
        "en": "Two papers have been accepted to USENIX ATC'24. Congratulations to [Ronglong](/rong-long-wu), [Shuyue](/shu-yue-zhou), and [Yijie](/yi-jie-zhong).",
        "zh": "两篇论文被 USENIX ATC'24 接收。祝贺 [吴镕龙](/rong-long-wu-zh)、[周书悦](/shu-yue-zhou-zh) 和 [钟一捷](/yi-jie-zhong-zh)。"
    }
},
```

---

## 3、论文：`📁Publications`

**📄 `conference_papers.json` 和 📄 `journal_papers.json`**

- 完整模版

```json
{
    "paper_id": "",
    "title": "",
    "authors": "",
    "publication": "",
    "links": [
        {"type": "paper", "url": ""},
        {"type": "slides", "url": ""},
        {"type": "code", "url": ""}
    ]
}
```

- 结构

```json
{
    "paper_id": "论文的唯一标识符，用于个人主页的快捷引用，会议论文为 ：C<序号>，期刊论文为：J<序号>",
    "title": "论文标题",
    "authors": "论文作者，支持 Markdown",
    "publication": "会议/期刊信息，支持 Markdown",
    "links": [
        {"type": "链接类型，支持下面这些，每个类型可以有很多项","url": "链接地址"},
        {"type": "paper", "url": "论文地址"},
        {"type": "slides", "url": "PPT地址，用作资源地址其实也行"},
        {"type": "code", "url": "代码地址"}
    ]
}
```

- 例子

```json
{
    "paper_id": "C33",
    "title": "UniMem: Redesigning Disaggregated Memory within A Unified Local-Remote Memory Hierarchy.",
    "authors": "Yijie Zhong, Minqiang Zhou, **Zhirong Shen**, Jiwu Shu",
    "publication": "In Proceedings of 2024 USENIX Annual Technical Conference (**USENIX ATC'24**), July 10-12, 2024. (AR: 77/488=15.8%)",
    "links": [
        {"type": "paper", "url": "https://github.com/shenzr"},
        {"type": "code", "url": "https://github.com/shenzr"},
        {"type": "code", "url": "https://gitee.com/shenzr"}
    ]
},
```

---

## 4、成员：`📁Team`

> 分为 **校友** 和 **实验室成员**

**校友 📄 `alumni.json`**

- 完整模版

```json
{
    "name": {
      	"en": "",
      	"zh": ""
    },
    "degree": {
        "en": "",
        "zh": ""
    },
    "year": "",
    "first_job": {
      	"en": "",
      	"zh": ""
    }
}
```

- 结构

```json
{
    "name": {
      	"en": "姓名，英文",
      	"zh": "姓名，中文"
    },
    "degree": {
        "en": "学位，英文",
        "zh": "学位，中文"
    },
    "year": "毕业年份",
    "first_job": {
      	"en": "毕业第一份工作，英文",
      	"zh": "毕业第一份工作，中文"
    }
},
```

- 例子

```Json
{
    "name": {
      "en": "Jianqiang Chen",
      "zh": "陈建强"
    },
    "degree": {
      "en": "Master",
      "zh": "硕士"
    },
    "year": "2024",
    "first_job": {
      "en": "Alibaba",
      "zh": "阿里巴巴"
    }
},
```



**实验室成员 📄 `team.json`**

> 字段解读：
> 
> **`slug`**：这个是个人主页的路径，一般是姓名的拼音加横杠，或者自定义，只要不太奇葩都行，
> - 当两个人的姓名为同音字时，这个字段可以防止个人主页的路径有冲突
> - 或者不想用姓名，可以拿来自定义自己的个人主页路径
> 
> 如 张三 `-> slug: san-zhang`，那么张三的
>
> - 中文个人主页在  `https://xmusys.github.io/san-zhang-zh` 下
> - 英文个人主页在 `https://xmusys.github.io/san-zhang` 下
>
> **`publications 下的 personal`**：结构同上面的 `3、Publications`，属于个人的但不在团队中的论文，唯一不同的是没有 `paper_id` 字段

- 完整模版

```json
{
    "name": {
        "en": "",
        "zh": ""
    },
    "slug": "",
    "photo": "",
    "degree": "",
    "position": {
        "en": "",
        "zh": ""
    },
    "links": [
        { "type": "email", "url": "" },
        { "type": "google_scholar", "url": "" },
        { "type": "github", "url": "" },
        { "type": "homepage", "url": "" }
    ],
    "about_me": {
        "en": "",
        "zh": ""
    },
    "education": {
        "en": [],
        "zh": []
    },
    "publications": {
        "group": [],
        "personal": [
            {
                "title": "",
                "authors": "",
                "publication": "",
                "links": [
                    { "type": "paper", "url": "" },
                    { "type": "slides", "url": "" },
                    { "type": "code", "url": "" }
                ]
            }
        ]
    },
    "major_awards": {
        "en": [],
        "zh": []
    }
}
```

- 结构

```json
{
    "name": {
        "en": "姓名，英文",
        "zh": "姓名，中文"
    },
    "slug": "个人主页的路径, 看上面的介绍，或者最后的注意事项也有具体介绍",
    "photo": "个人照片的文件名（无扩展名），比如 xiao_hong，对应 src/assets/images/team/xiao_hong.jpg，下面的图片目录介绍有具体介绍",
    "degree": "当前学历，用于 team 页面中成员的分类，可选的值只能是 'Faculty | Postdoc | PhD Student | MS Student' 其中一个",
    "position": {
        "en": "身份，比如 Professor",
        "zh": "身份，比如 教授"
    },
    "links": [
        { "type": "个人链接类型，支持下面这些，每种类型可以多项", "url": "链接地址" },
        { "type": "email", "url": "邮箱链接" },
        { "type": "google_scholar", "url": "谷歌学术链接" },
        { "type": "github", "url": "Github链接" },
        { "type": "homepage", "url": "个人主页链接" }
    ],
    "about_me": {
        "en": "自我介绍，英文，支持 Markdown",
        "zh": "自我介绍，中文，支持 Markdown"
    },
    "education": {
        "en": [
            { "degree": "学历", "major": "主修科目、学校等", "period": "开始时间 - 结束时间" }
        ],
        "zh": [
            { "degree": "学历", "major": "主修科目、学校等", "period": "开始时间 - 结束时间" }
        ]
    },
    "publications": {
        "group": [
            "引用团队论文中的 paper_id，算是一个快捷方式"
        ],
        "personnal": [
            {
                "title": "论文标题，这里的格式都和前面的 3、Publications 里面定义的一样",
                "authors": "论文作者，支持 Markdown",
                "publication": "会议/期刊信息，支持 Markdown",
                "links": [
                    {"type": "链接类型，支持下面这些，每个类型可以有很多项","url": "链接地址"},
                    {"type": "paper", "url": "论文地址"},
                    {"type": "slides", "url": "PPT地址，用作资源地址其实也行"},
                    {"type": "code", "url": "代码地址"}
                ]
            }
        ]
    },
    "major_awards": {
        "en": [
            "主要奖项，英文"
        ],
        "zh": [
            "主要奖项，中文",
        ]
    }
}
```

- 例子

```Json
{
    "name": {
        "en": "Ronglong Wu",
        "zh": "吴镕龙"
    },
    "slug": "rong-long-wu",
    "photo": "rong_long_wu",
    "degree": "PhD Student",
    "position": {
        "en": "PhD student",
        "zh": "博士生"
    },
    "links": [
        { "type": "email", "url": "mailto:rlwoo@stu.xmu.edu.cn" }
    ],
    "about_me": {
        "en": "I am Ronglong Wu, a Ph.D. student at the School of Informatics, Xiamen University, advised by Prof. Zhirong Shen. I earned my B.S. degree from Xiamen University in 2021. My research focuses on building an efficient and reliable memory system.",
        "zh": "我是吴镕龙，厦门大学信息学院的博士生，导师是沈志荣教授。我于2021年获得厦门大学的学士学位。我的研究方向是构建高效可靠的内存系统。"
    },
    "education": {
        "en": [
            { "degree": "M.S - Ph.D.", "major": "School of Informatics, Xiamen University", "period": "2021 - Present" },
            { "degree": "B.S.", "major": "School of Informatics, Xiamen University", "period": "2017 - 2021" }
        ],
        "zh": [
            { "degree": "硕士 - 博士", "major": "厦门大学信息学院", "period": "2021 - 至今" },
            { "degree": "学士", "major": "厦门大学信息学院", "period": "2017 - 2021" }
        ]
    },
    "publications": {
        "group": [
            "C32", "C30",
            "J22"
        ],
        "personal": []
    },
    "major_awards": {
        "en": [
            "IEEE HPCA Travel Grant, 2024",
            "Outstanding Undergraduate Student, Xiamen University, 2021"
        ],
        "zh": [
            "IEEE HPCA 2024会议旅行资助",
            "厦门大学优秀本科生，2021年"
        ]
    }
}
```

---

## 5、图片：`📁Images`

- **📁 `home` - `首页轮播图`**
  - 这里存放首页的轮播图，没限制
- **📁 `team` - `成员照片`**
  - 这里存放成员的照片，然后在 `team.json` 中指定成员的照片文件名就行
  - 比如 `team.json` 的字段 `photo` 为 `xiao_hong`，那么 该文件夹下应有 `xiao_hong.[jpg/png/...]` 这图片文件

---

## 🔔注意事项

> 有出问题找我 248619945@qq.com 😗

### 最小模版

> 在添加 **新闻、论文、成员** 时
>
> 上面的介绍都有定义模版，叫做 **完整模版**，是因为它用到了**所有的功能**，但是和这里的不一样
> 
> 下面是最基本的模版，称作 **最小模版**，这里的这些字段 **只能增加或置空，但不能删除**，因为字段不足可能会发生错误
>
> 如果发生错误，请对比此次添加的数据是否删除了某些项
>
> 总之  **最小模版<= 数据字段 <= 完整模版**
>
> **最小模版文件 (min-?.json)** 和 **完整模版文件 (full-?.json)** 都放在顶级文件夹 `/templates` 下
>
> 所以一般来说，复制原来已经有的东西，然后在上面修改就行，如果需要添加新的东西再去看完整版本，如果报错说明可能删除了最小版本包含的东西
>


- 📄 `min-news.json`

```json
{
    "date": "",
    "content": {
        "en": "",
        "zh": ""
    }
}
```

- 📄 `min-paper.json`

```json
{
    "title": "",
    "authors": "",
    "publication": "",
    "links": []
}
```

- 📄 `min-alumni.json`

```json
{
    "name": {
      	"en": "",
      	"zh": ""
    },
    "degree": {
        "en": "",
        "zh": ""
    },
    "date": "",
    "first_job": {
      	"en": "",
      	"zh": ""
    }
}
```

- 📄 `min-team.json`

```json
{
    "name": {
        "en": "",
        "zh": ""
    },
    "slug": "",
    "photo": "",
    "degree": "",
    "position": {
        "en": "",
        "zh": ""
    },
    "links": [],
    "about_me": {
        "en": "",
        "zh": ""
    },
    "education": {
        "en": [],
        "zh": []
    },
    "publications": {
        "group": [],
        "personal": []
    },
    "major_awards": {
        "en": [],
        "zh": []
    }
}
```

### 个人主页

- 个人主页的路径是需要在自己的数据 (`team.json`) 中 `slug` 字段定义的（防止姓名冲突）
- 定义之后
    - 中文个人主页：`https://xmusys.github.io/{slug}-zh`
    - 英文个人主页：`https://xmusys.github.io/{slug}`
- 那么在 Markdown 中可以这样使用（别忘了前面的斜杠）
    - `[张三](/san-zhang-zh)` 导航到 `https://xmusys.github.io/san-zhang-zh`
    - `[San Zhang](/san-zhang)` 导航到 `https://xmusys.github.io/san-zhang`

### Markdown 支持

> 保留这个功能，是因为以下需求
> 
> - 无法自动化，需要手动的情况
>   - 个人主页的论文，会自动使用个人的姓名自动加粗论文中的作者，如果使用了不同的笔名，姓名和笔名不匹配，需要自己手动加粗
>   - 新闻列表中，想要添加个人主页的链接，因为重名、只写名而没写姓等情况，会导致姓名不匹配或者冲突，需要自己添加个人主页的链接：看上一点 **个人主页**，并且参考已有新闻内容
> - 想添加链接、粗体等额外样式
>   - 例如：给新闻中的东西，论文中的作者，个人介绍中的东西 添加链接什么的

- 支持的部分（只要有大段的文字都支持，或者看上面的介绍（`Ctrl+F 搜索 Markdown`））
    - **Home、 Join Us、Research**
    - 新闻的 **内容**
    - 论文的 **作者、会议/期刊信息**
  - 成员的 **自我介绍、论文(作者、会议/期刊信息)、主要奖项**
- 常用用法
  - 链接：`[San Zhang](/zhang-san)` / `[张三](/zhang-san-zh)`（链接到个人主页，记得在前面加斜杠）
  - 斜体：`*ERAS Research Group*` 
  - 粗体：`**Author: Zhang San**` （论文作者加粗）
  - 标题：`# Welcome to ERAS Research Group`
  - 列表：`- research item` （研究领域列表、加入我们页面的指南列表）
