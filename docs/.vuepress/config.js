module.exports = {
    base: '/webnote/',
    title: '云笔记',
    description: '好用、强劲的UI框架',
    themeConfig: {
        logo: '/note.png',
        nav: [
            { text: '首页', link: '/' },
            { text: 'Github', link: 'https://github.com/sgshy1995/webnote' },
            { text: '搜索', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title: '说明',   // 必要的
                path: '/home/',      // 可选的, 应该是一个绝对路径
                collapsable: true, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
            },
            {
                title: '项目',
                path: '/project/',
                collapsable: true,
                sidebarDepth: 2
            },
            {
                title: 'Vue',
                path: '/notes-vue/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/notes-vue/vue-class-style',
                    '/notes-vue/vue-img-src',
                    '/notes-vue/vue-parcel-one',
                    '/notes-vue/vue-watch-computed',
                    '/notes-vue/vue-watch'
                ]
            },
        ]
    }
}