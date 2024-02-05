# 第一章
Next.js 是在 React 上构建的一个用于**生产环境**框架，包含了很多功能，比如静态及服务器端融合渲染、智能化打包、 路由预取。

Next.js 的优势有以下三点：

1、内置服务端渲染

2、基于文件的路由

3、拥有全栈的能力

可以通过以下命令安装 Next.js

> npx create-next-app

视频中老师使用的 Next.js 版本是 10.0.7，本人全程学习使用的版本是 13.1.1，全程没有冲突，大家可看情况安装不同版本。

第一章对 Next.js 进行了一个速览，其中最重要的两个特性就是页面预渲染与基于文件路由机制。



# 第二章
复习 React，略。



# 第三章
第三章详细介绍了 Next.js 基于文件路由机制。

- ## 静态路由

Next.js 在构建时会自动查找根目录的 pages 文件夹，pages 文件夹中 js 文件对应渲染的 React 组件，就是 js 文件内 export default 导出的组件。

- ## 动态路由

动态路由使用中括号 [variable].js 作为文件名，其中 variable 会映射成 URL query 的变量名称，在 React 中可以通过 useRouter 获取路由信息：

> import {useRouter} from 'next/router'
> 
> export default function PortfolioDemo() {
>     const router = useRouter();
>     console.log(router.pathname);
>     console.log(router.query);
> 
>     return <>PortfolioDemo</>
> }

启动项目后，访问 http://localhost:3000/portfolio/mimi，控制台输出如下信息：

动态路由 query
在匹配 URL 时，静态路由优先权大于动态路由。

⚠️注意：文件夹也可以是动态的

Link 组件

可以使用 Next.js 中的 Link 组件来导航至各个页面：

import Link from 'next/link';

<Link href="/">
  首页
</Link>
Link 组件的 href 不但支持字符串，还可以传入 UrlObject，接口如下：

interface UrlObject {
    auth?: string | null | undefined;
    hash?: string | null | undefined;
    host?: string | null | undefined;
    hostname?: string | null | undefined;
    href?: string | null | undefined;
    pathname?: string | null | undefined;
    protocol?: string | null | undefined;
    search?: string | null | undefined;
    slashes?: boolean | null | undefined;
    port?: string | number | null | undefined;
    query?: string | null | ParsedUrlQueryInput | undefined;
}
如果 url 很长，参数很多的情况下可以使用这种方法传参。

router.push

在代码中，如果需要触发导航逻辑，可以使用 router.push 方法：

import {useRouter} from 'next/router'

export default function PortfolioDemo() {
    const router = useRouter();

		const myFunc = () => {
	    router.push("[url]");
	  }

    return <>PortfolioDemo</>
}
404

pages 文件夹下创建特殊文件 404.js，Next.js 将会在返回 404 错误时，自动加载组件。

