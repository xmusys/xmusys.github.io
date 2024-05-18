# ERAS Research Group 

>  *Efficient, Reliable, and Advanced Storage Research Group. 🚀* 

---

> 页面基于 [Gastsby](https://www.gatsbyjs.com/) 构建，部署于 [GitHub Pages](https://pages.github.com/) 
>
> Get Start  >  加入仓库，直接在代码仓库中编辑，或克隆/拉取到本地后进行修改，然后推送到 main 分支
>
> 下面是资料的具体介绍

---

## 🗂目录结构 

> **`src/assets`** 这里是存放数据的目录，目录结构如下，介绍部分分为 **介绍、新闻、论文、成员、图片** 五个部分，还有 **注意事项**

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


---

## 1、介绍：`📁Home`、`📁Join Us`、`📁Research`

后缀 `.mdx` 的都是使用 `Markdown` 编写，需要修改时可以直接替换文本



- **📄 `home_zh.mdx`  和 📄 `home_en.mdx`**

```markdown
# 欢迎来到 ERAS 研究小组！

*高效、可靠、先进的存储研究小组*

ERAS 研究小组由沈志荣副教授负责，聚焦于智能存储系统的研究，主要研究内容包括基于纠删码的高可靠存储和高效访问技术，新兴存储器件的容错和性能优化，以及KV存储系统。

在过去三年中，我们团队在国际会议和权威期刊上发表了十多篇论文，包括 USENIX ATC、HPCA、INFOCOM 和 IEEE TC。此外，我们还获得了国家自然科学基金等国家级资助，并与阿里巴巴、华为等知名公司建立了合作关系。

<HomeCarousel />
```

> 其中 `<HomeCarousel />` 是轮播图，可以调整排版，如：

```markdown
# 欢迎来到 ERAS 研究小组！

*高效、可靠、先进的存储研究小组*

ERAS 研究小组由沈志荣副教授负责，聚焦于智能存储系统的研究，主要研究内容包括基于纠删码的高可靠存储和高效访问技术，新兴存储器件的容错和性能优化，以及KV存储系统。

<HomeCarousel />

在过去三年中，我们团队在国际会议和权威期刊上发表了十多篇论文，包括 USENIX ATC、HPCA、INFOCOM 和 IEEE TC。此外，我们还获得了国家自然科学基金等国家级资助，并与阿里巴巴、华为等知名公司建立了合作关系。
```



- **📄 `join_us_zh.mdx` 和 📄 `join_us_en.mdx`**

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



- **📄 `research_zh.mdx` 和 📄 `research_en.mdx`**

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

- 初始模版

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

- 初始模版

```json
{
    "title": "",
    "authors": "",
    "publication": "",
    "links": []
}
```

- 结构

```json
{
    "title": "论文标题",
    "authors": "论文作者，支持 Markdown",
    "publication": "会议/期刊信息，支持 Markdown",
    "links": [
        {"type": "链接类型 paper-论文、slides-幻灯片、code-代码" "url": "链接地址"},
        {"type": "paper", "url": "https://github.com/shenzr"},
        {"type": "slides", "url": "https://github.com/shenzr"},
        {"type": "code", "url": "https://github.com/shenzr"}
    ]
}
```

- 例子

```json
{
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

**校友 📄 `alumni.json`**

- 初始模版

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
    "date": "毕业时间",
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
    "date": "2024",
    "first_job": {
      "en": "Alibaba",
      "zh": "阿里巴巴"
    }
},
```



**实验室成员 📄 `team.json`**

>`slug`：这个是个人主页的路径，一般是姓名拼音加横杠，如 小红 `-> xiao-hong`，张三 `-> zhang-san`
>
>- 那么小红的 中文个人主页在  `xmusys.github.io/xiao-hong-zh` 下，英文个人主页在 `xmusys.github.io/xiao-hong` 下
>- 当姓名为同音字时，这个字段可以防止个人主页的路径有冲突。
>- 或者不想用姓名，可以拿来自定义自己的个人主页路径
>
>`publications`：结构同上面的 `3、Publications`

- 初始模版

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
    "publications": [
        {
            "title": "",
            "authors": "",
            "publication": "",
            "links": []
        }
    ],
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
    "photo": "照片的文件名（无扩展名），比如 xiao_hong，对应 src/assets/images/team/xiao_hong.jpg",
    "degree": "当前学历，用于 team 页面的分类，可选的值只有 Faculty | Postdoc | PhD Student | MS Student",
    "position": {
        "en": "身份，比如 Professor",
        "zh": "身份，比如 教授"
    },
    "links": [
        { "type": "个人链接类型，支持下面这些", "url": "链接地址" },
        { "type": "email", "url": "邮箱链接" },
        { "type": "google_scholar", "url": "谷歌学术链接" },
        { "type": "github", "url": "Github链接" },
        { "type": "homepage", "url": "个人主页链接" },
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
    "publications": [
        {
            "title": "论文标题",
            "authors": "论文作者，支持 Markdown",
            "publication": "会议/期刊信息，支持 Markdown",
            "links": [
                {"type": "链接类型，支持下面这些" "url": "链接地址"},
                {"type": "paper", "url": "https://github.com/shenzr"},
                {"type": "slides", "url": "https://github.com/shenzr"},
                {"type": "code", "url": "https://github.com/shenzr"}
            ]
        }
    ],
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
        "en": "I am Ronglong Wu, a first-year Ph.D. student at the School of Informatics, Xiamen University, advised by Prof. Zhirong Shen. I earned my B.S. degree from Xiamen University in 2021. My research focuses on building an efficient and reliable memory system.",
        "zh": "我是吴镕龙，厦门大学信息学院的博士一年级学生，导师是沈志荣教授。我于2021年获得厦门大学的学士学位。我的研究方向是构建高效可靠的内存系统。"
    },
    "education": {
        "en": [
            { "degree": "Ph.D.", "major": "School of Informatics, Xiamen University", "period": "2024 - Present" },
            { "degree": "M.S.", "major": "School of Informatics, Xiamen University", "period": "2021 - 2024" },
            { "degree": "B.S.", "major": "School of Informatics, Xiamen University", "period": "2017 - 2021" }
        ],
        "zh": [
            { "degree": "博士", "major": "厦门大学信息学院", "period": "2024 - 至今" },
            { "degree": "硕士", "major": "厦门大学信息学院", "period": "2021 - 2024" },
            { "degree": "学士", "major": "厦门大学信息学院", "period": "2017 - 2021" }
        ]
    },
    "publications": [
        {
            "title": "Removing Obstacles before Breaking Through the Memory Wall: A Close Look at HBM Errors in the Field",
            "authors": "**Ronglong Wu**, Shuyue Zhou, Jiahao Lu, Zhirong Shen, Jiwu Shu, Zikang Xu, Kunlin Yang, Feilong Lin, Yiming Zhang",
            "publication": "In Proceedings of 2024 USENIX Annual Technical Conference (**USENIX ATC'24**), July 10-12, 2024. (AR: 77/488=15.8%)",
            "links": []
        },
        {
            "title": "Mitigating Write Disturbance in Non-Volatile Memory via Coupling Machine Learning with Out-of-Place Updates",
            "authors": "**Ronglong Wu**, Zhirong Shen, Zhiwei Yang, Jiwu Shu",
            "publication": "In Proceedings of International Symposium on High-Performance Computer Architecture (**HPCA'24**), March 2-6, 2024. (AR: 75/410=18.3%)",
            "links": []
        },
        {
            "title": "Relieving Write Disturbance for Phase Change Memory with RESET-Aware Data Encoding",
            "authors": "**Ronglong Wu**, Zhirong Shen, Chengshuo Zheng, Jianqiang Chen, Zhiwei Yang, Dmitrii Kaplun, and Jiwu Shu",
            "publication": "Accepted to IEEE Transactions on Computers (**TC**).",
            "links": []
        }

    ],
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
},
```

---

## 5、图片：`📁Images`

- **📁 `home` - `首页轮播图`**
  - 这里存放首页的轮播图，没限制
- **📁 `team` - `成员照片`**
  - 这里存放成员的照片，然后在 `team.json` 中指定成员的照片文件名就行
  - 比如 `team.json` 的字段 `photo` 为 `xiao_hong`，那么 该文件夹下应有 `xiao_hong.[jpg/png/...]`

---

## 🔔注意事项

### 初始模版

> 在添加新闻、论文、成员时
>
> 下面是最基本的初始模版，这些字段只能增加或置空，但不能删除，数据不足可能会发生错误
>
> 模版文件放在顶级文件夹 /templates 下，可以复制粘贴然后添加数据，或者复制已有的数据进行修改
>
> 有出问题找我 248619945@qq.com 😗

- 📄 `news.json`

```json
{
    "date": "",
    "content": {
        "en": "",
        "zh": ""
    }
}
```

- 📄 `conference_papers.json` 和 📄 `journal_papers.json`

```json
{
    "title": "",
    "authors": "",
    "publication": "",
    "links": []
}
```

- 📄 `alumni.json`

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

- 📄 `team.json`

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
    "publications": [
        {
            "title": "",
            "authors": "",
            "publication": "",
            "links": []
        }
    ],
    "major_awards": {
        "en": [],
        "zh": []
    }
}
```

### 个人主页

- 个人主页的路径是需要在自己的数据中 `slug` 字段定义的
- 定义之后
  - 中文个人主页：`xmusys.github.io/{slug}-zh`
  - 英文个人主页：`xmusys.github.io/{slug}`

### Markdown 支持

- 支持部分（大段的文字都支持）
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
