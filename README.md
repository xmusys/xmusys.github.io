# ERAS Group 

*Efficient, Reliable, and Advanced Storage Research Group.*

## 数据目录

### 0、目录结构
- 📁 `assets` - `根目录`
  - 📁 `data` - `数据`
    - 📁 `home` - `首页介绍`
      - 📄 `home_en.mdx` - `英文`
      - 📄 `home_zh.mdx` - `中文`
    - 📁 `join_us` - `纳新介绍`
      - 📄 `join_us_en.mdx` - `英文`
      - 📄 `join_us_zh.mdx` - `中文`
    - 📁 `research` - `研究介绍`
      - 📄 `research_en.mdx` - `英文`
      - 📄 `research_zh.mdx` - `中文`
    - 📁 `news` - `新闻`
      - 📄 `news_en.json` - `英文`
      - 📄 `news_zh.json` - `中文`
    - 📁 `publications` - `论文发表`
      - 📄 `conference_papers.json` - `会议论文`
      - 📄 `journal_papers.json` - `期刊论文`
    - 📁 `team` - `团队成员`
      - 📄`team_falucty_en.json` - `教授-英文`
      - 📄`team_falucty_zh.json` - `教授-中文`
      - 📄`team_postdoc_en.json` - `博士后-英文`
      - 📄`team_postdoc_zh.json` - `博士后-中文`
      - 📄`team_phd_students_en.json` - `博士-英文`
      - 📄`team_phd_students_zh.json` - `博士-中文`
      - 📄`team_ms_students_en.json` - `硕士-英文`
      - 📄`team_ms_students_zh.json` - `硕士-中文`
      - 📄`team_alumni_en.json` - `校友-英文`
      - 📄`team_alumni_zh.json` - `校友-中文`
  - 📁 `images` - `图片`
    - 📁 `home` - `首页轮播图`
    - 📁 `team` - `成员照片`

### 1、`📁 Home` & `📁 Join Us` &  `📁 Research`

使用 `Markdown` 编写，需要修改时可以直接替换文本

### 2、`📁 News`

使用 `Json` 编写

```json
// 结构
{
    "date": "日期",
    "content": "新闻内容，支持 Markdown"
}

// 例子
{
    "date": "May 2024",
    "content": "Two papers have been accepted to USENIX ATC'24. Congratulations to Ronglong, Shuyue, and Yijie."
}
```

### 3、`📁 Publications`

使用 `Json` 编写

```json
// 结构
{
    "title": "论文标题",
    "authors": "论文作者，支持 Markdown",
    "publication": "会议/期刊 信息，支持 Markdown",
    "links": {
        "paper": "论文链接",
        "slides": "PPT 链接",
        "code": "代码链接"
    }
}

// 例子
{
    "title": "UniMem: Redesigning Disaggregated Memory within A Unified Local-Remote Memory Hierarchy.",
    "authors": "Yijie Zhong, Minqiang Zhou, **Zhirong Shen**, Jiwu Shu",
    "publication": "In Proceedings of 2024 USENIX Annual Technical Conference (**USENIX ATC'24**), July 10-12, 2024. (AR: 77/488=15.8%)",
    "links": {
        "paper": "https://github.com/shenzr",
        "slides": "https://github.com/shenzr",
        "code": "https://github.com/shenzr"
    }
},
```

### 4、`📁 Team`

使用 `Json` 编写

- 校友
```Json
// 结构
{
    "name": "姓名",
    "degreee": "学位",
    "date": "毕业时间",
    "first_job": "第一份工作"
}

// 例子
{
    "name": "陈建强",
    "degree": "硕士",
    "date": "2024",
    "first_job": "阿里巴巴"
},
```

- 实验室成员
```Json
// 结构
{
    "name": "姓名",
    "slug": "个人主页的路径",
    "photo": "照片文件名(不需要.jpg这样的后缀，对应 images/team 下的照片文件名)",
    "degree": "学位",
    "links": [
        { "name": "email", "link": "邮箱链接" },
        { "name": "github", "link": "GitHub 链接" },
        { "name": "google_scholar", "link": "谷歌学术链接" },
        { "name": "homepage", "link": "个人主页链接" }
    ],
    "introduce": "自我介绍",
    "education": [
        {
            "degree": "学位",
            "year": "时间",
            "major": "主修科目、学校情况等"
        }
    ],
    "publication": [ // 就是前面的 📁 Publications
        {
            "title": "论文标题",
            "authors": "论文作者，支持 Markdown",
            "publication": "会议/期刊 信息，支持 Markdown",
            "links": {
                "paper": "论文链接",
                "slides": "PPT 链接",
                "code": "代码链接"
            }
        }
    ],
    "major_awards": ["获得的奖项数组"]
}

// 例子
{
    "name": "ZhiRong Shen",
    "slug": "zhi-rong-shen", // 个人主页的路径就是 /team/zhi-rong-shen
    "photo": "zhirong_shen", // (对应 images/team/zhirong_shen.jpg)
    "degree": "Associate Professor",
    "links": [
        ["email", "mailto:shenzr@xmu.edu.cn"],
        ["github", "https://github.com/shenzr"],
        ["google_scholar", "https://scholar.google.com/scholar?q=shenzr"],
        ["homepage", "https://shenzr.github.io"]
    ],
    "introduce": "I am now an associate professor of the School of Informatics at Xiamen University.\nMy current research interests include designing and building secure and dependable techniques for large-scale storage systems and data centers.",
    "education": [
        {
            "degree": "Associate Professor",
            "major": "In Data Centers, XiaMen University",
            "year": "2023-2024"
        },
        {
            "degree": "Associate Professor",
            "major": "In Data Centers, XiaMen University",
            "year": "2023-2024"
        },
    ],
    "publications": [
        {
            "title": "UniMem: Redesigning Disaggregated Memory within A Unified Local-Remote Memory Hierarchy.",
            "authors": "Yijie Zhong, Minqiang Zhou, [**Zhirong Shen**](https://shenzr.github.io/), Jiwu Shu",
            "publication": "In Proceedings of 2024 USENIX Annual Technical Conference (**USENIX ATC'24**), July 10-12, 2024. (AR: 77/488=15.8%).",
            "links": {
                "paper": "https://github.com/shenzr",
                "slides": "https://github.com/shenzr",
                "code": "https://github.com/shenzr"
            }
        },
    ],
    "major_awards": [
        "Nanqiang Younth Scholar (B), Xiamen University",
        "Research Fellowship Scheme, The Chinese University of Hong Kong",
        "Hong Kong Scholar Awardee"
    ]
}
```