module.exports = {
    base: '/',
    title: '云笔记',
    description: '我的个人知识库，伴我成长',
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
                title: 'JS',
                path: '/notes-js/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-js/js-data-type',
                    './notes-js/js-this',
                    './notes-js/js-immediate-function',
                    './notes-js/js-garbage-collection',
                    './notes-js/js-in-of',
                    './notes-js/js-object-is',
                    './notes-js/js-object-defineproperty'
                ]
            },
            {
                title: 'HTTP',
                path: '/notes-http/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-http/http-code',
                    './notes-http/http-load',
                    './notes-http/http-writepost',
                    './notes-http/ajax',
                    './notes-http/json',
                    './notes-http/cross-domain',
                    './notes-http/cors',
                    './notes-http/jsonp',
                    './notes-http/browser-local-save',
                    './notes-http/https',
                    './notes-http/http-http2',
                    './notes-http/http-tcp-udp',
                    './notes-http/http-cache'
                ]
            },
            {
                title: '排序算法',
                path: '/notes-sort-algorithm/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-sort-algorithm/sort-three',
                    './notes-sort-algorithm/js-recursion'
                ]
            },
            {
                title: 'HTML',
                path: '/notes-html/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-html/html-inline-block',
                    './notes-html/html-write',
                    './notes-html/html-src-href',
                    './notes-html/html-seo',
                    './notes-html/html-html5',
                    './notes-html/html-semantization',
                    './notes-html/html-doctype',
                    './notes-html/html-verification-code',
                    './notes-html/html-compatibility',
                    './notes-html/html-meta-viewport',
                    './notes-html/html-canvas',
                ]
            },
            {
                title: 'CSS',
                path: '/notes-css/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-css/css3-radius-boxshadow',
                    './notes-css/css-box-size',
                    './notes-css/css-none-ele',
                    './notes-css/css-clear-float',
                    './notes-css/css-import',
                    './notes-css/css-selector',
                    './notes-css/css-vertical-center',
                    './notes-css/css-flex-3',
                    './notes-css/css-bfc'
                ]
            },
            {
                title: '移动适配',
                path: '/notes-mobile/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-mobile/mobile-adaptive'
                ]
            },
            {
                title: 'DOM',
                path: '/notes-function/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-dom/dom',
                    './notes-dom/dom-virtual',
                    './notes-dom/node',
                    './notes-dom/dom-event',
                    './notes-dom/dom-reflow-repaint'
                ]
            },
            {
                title: '基础杂项',
                path: '/notes-basic/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-basic/js-import-require'
                ]
            },
            {
                title: '对象',
                path: '/notes-object/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-object/prototype-one',
                    './notes-object/this-newfn',
                    './notes-object/inherit',
                ]
            },
            {
                title: '函数',
                path: '/notes-function/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-function/function-name',
                    './notes-function/function-method',
                    './notes-function/function-immediate',
                    './notes-function/async',
                    './notes-function/closure',
                    './notes-function/function-debounce-throttle'
                ]
            },
            {
                title: '事件',
                path: '/notes-events/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-events/event-entrust',
                    './notes-events/event-flow',
                    './notes-events/event-eventloop'
                ]
            },
            {
                title: '数组',
                path: '/notes-array/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-array/array-norepeat',
                    './notes-array/array-sort',
                    './notes-array/array-traverse',
                    './notes-array/array-map-foreach',
                    './notes-array/array-flat'
                ]
            },
            {
                title: 'ES6',
                path: '/notes-es6/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-es6/promise-one',
                    './notes-es6/promise-all',
                    './notes-es6/promise-race',
                    './notes-es6/code-block',
                    './notes-es6/class',
                    './notes-es6/code-destruction'
                ]
            },
            {
                title: '设计模式',
                path: '/notes-design-mode/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    './notes-design-mode/mvc-one'
                ]
            },
            {
                title: 'Vue',
                path: '/notes-vue/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/notes-vue/vue-data',
                    '/notes-vue/vue-class-style',
                    '/notes-vue/vue-img-src',
                    '/notes-vue/vue-parcel-one',
                    '/notes-vue/vue-watch-computed',
                    '/notes-vue/vue-watch',
                    '/notes-vue/vue-global-variate',
                    '/notes-vue/vue-router',
                    '/notes-vue/vue-vue2-vue3'
                ]
            },
            {
                title: '优化相关',
                path: '/optimize/',
                collapsable: true,
                sidebarDepth: 2,
                children: [
                    '/optimize/web-optimize'
                ]
            }
        ]
    }
}