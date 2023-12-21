(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{432:function(s,t,a){s.exports=a.p+"assets/img/docker-container.736c353b.jpg"},433:function(s,t,a){s.exports=a.p+"assets/img/01.3697b9a5.jpg"},434:function(s,t,a){s.exports=a.p+"assets/img/02.94fbb63a.jpg"},460:function(s,t,a){"use strict";a.r(t);var e=a(35),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"镜像构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像构建"}},[s._v("#")]),s._v(" 镜像构建")]),s._v(" "),e("h2",{attrs:{id:"docker-commit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-commit"}},[s._v("#")]),s._v(" "),e("strong",[s._v("docker commit")])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("运行容器")])]),s._v(" "),e("li",[e("p",[s._v("修改容器")])]),s._v(" "),e("li",[e("p",[s._v("将容器保存为新镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" commit "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("新镜像名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("源镜像名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"dockerfile文件构建-推荐"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile文件构建-推荐"}},[s._v("#")]),s._v(" "),e("strong",[s._v("dockerfile文件构建")]),s._v("（推荐）")]),s._v(" "),e("blockquote",[e("p",[e("code",[s._v("dockerfile")]),s._v("是一个文本文件，里边记录了构建镜像的所有步骤")]),s._v(" "),e("p",[e("code",[s._v("dockerfile")]),s._v('支持以"#"开头的注释')]),s._v(" "),e("p",[s._v("docker build 构建过程 默认会使用构建过镜像的缓存（镜像的缓存特性：构建镜像时，如果某镜像层已经存在，就直接使用，无需重新创建）")]),s._v(" "),e("p",[s._v("docker build --no-cache[不使用缓存]")]),s._v(" "),e("p",[e("code",[s._v("dockerfile")]),s._v("调试：可以在RUN 命令后边 echo “备注信息”，来查看命令执行到哪一步，进而排查问题。")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" build -t "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("新镜像名称"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("dockerfile文件"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("### -t: 构建镜像名称")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("ol",[e("li",[e("p",[s._v("从base镜像运行一个容器")])]),s._v(" "),e("li",[e("p",[s._v("执行一条指令，修改容器")])]),s._v(" "),e("li",[e("p",[s._v("执行类型docker commit 操作，生成一个新的镜像层")])]),s._v(" "),e("li",[e("p",[s._v("Docker 基于刚刚提交的镜像运行一个 新的容器")])]),s._v(" "),e("li",[e("p",[s._v("重复 2 ~ 4 步骤，直至 "),e("code",[s._v("Dockerfile")]),s._v("中的所有指令执行完毕")]),s._v(" "),e("div",{staticClass:"language-dockerfile line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# my dockerfile")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v(" busybox")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" touch tmpfile")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("RUN")]),s._v(" /bin/bash -c echo "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"continue to build"')])]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token instruction"}},[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("COPY")]),s._v(" testfile/")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])]),s._v(" "),e("h3",{attrs:{id:"dockerfile常用命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dockerfile常用命令"}},[s._v("#")]),s._v(" "),e("code",[s._v("Dockerfile")]),s._v("常用命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('FROM: 指定base镜像\nMAINTAINER：设置镜像的作者，可以是任意字符\nCOPY：将文件从build context复制到镜像\n\tCOPY支持两种形式： COPY src dest 与 COPY ["src", "dest"]\n\t注意：src只能指定build context 中的文件或者目录\nADD：将文件从build context复制到镜像\n\tADD src dest 或者 ADD ["src", "dest"]\n\t区别COPY：如果src是归档文件（tar、zip、tgz、xz等）， 文件会被自动解压到dest\nENV：设置环境变量。环境变量会被后边的命令使用\n\t例如：ENV MY_VERSION 1.5 RUN apt-get install -y mypackage=$MY_VERSION\nEXPOSE：指定容器中的进程会监听某个端口，Docker可以将该关口暴露出来\nVOLUME：将文件或目录声明为volume\nWORKDIR：为后面的RUN、CMD、ENTRYPOINT、ADD或COPY 指令设置镜像中的 当前工作目录\nRUN：在容器中运行指定的命令\nCMD：容器启动时运行指定的命令\n\tDockerfile中可以有多个CMD指令，但是只有最后一个可以生效。CMD可以被docker run 之后的参数替换\nENTRYPOINT：设置容器启动时运行的命令\n\tDockerfile可以有多个ENTRYPOINT命令，但只有最后一个生效。CMD或docker run后边的参数 会被当作参数传递给ENTRYPOINT\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br"),e("span",{staticClass:"line-number"},[s._v("12")]),e("br"),e("span",{staticClass:"line-number"},[s._v("13")]),e("br"),e("span",{staticClass:"line-number"},[s._v("14")]),e("br"),e("span",{staticClass:"line-number"},[s._v("15")]),e("br"),e("span",{staticClass:"line-number"},[s._v("16")]),e("br"),e("span",{staticClass:"line-number"},[s._v("17")]),e("br"),e("span",{staticClass:"line-number"},[s._v("18")]),e("br")])]),e("h2",{attrs:{id:"镜像构建并上传镜像"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#镜像构建并上传镜像"}},[s._v("#")]),s._v(" 镜像构建并上传镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 登录docker 账号，并输入密码")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" log -u "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("docker账号"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改镜像的Repository, 使之与dockhub 账号匹配 tjrf/httpd:1 => [用户账号]/[image]:[指定tag]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag http tjrf/httpd:1\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 通过docker push将镜像上传到Docker Hub")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push tjrf/httpd:1\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h2",{attrs:{id:"搭建本地registry"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#搭建本地registry"}},[s._v("#")]),s._v(" 搭建本地Registry")]),s._v(" "),e("blockquote",[e("p",[s._v("镜像名称：repository + tag组成")]),s._v(" "),e("p",[s._v("repository完整路径：[registry-host]:[port]/[username]/xxx")]),s._v(" "),e("p",[s._v("注意：只有Docker Hub上的镜像可以省略[registry-host]:[port]")]),s._v(" "),e("p",[s._v("registry 支持 https安全传输等特性，可参照官方文档")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动Registry容器")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -d -p "),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5000")]),s._v(":5000 -v /myregistry:/var/lib/registry registry:2\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker tag 重命名镜像，使之与registry匹配 [registry.example.net 需要再host上配置本地对应的host，例如本地[127.0.0.1: registry.example.net]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" tag tjrf/httpd:latest registry.example.net:5000/tjrf/httpd:latest\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker push 上传到本地镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" push registry.example.net:5000/tjrf/httpd:latest\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker pull 拉取本地镜像")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" pull registry.example.net:5000/tjrf/httpd:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br")])]),e("h1",{attrs:{id:"docker-容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-容器"}},[s._v("#")]),s._v(" Docker 容器")]),s._v(" "),e("h2",{attrs:{id:"容器运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器运行"}},[s._v("#")]),s._v(" 容器运行")]),s._v(" "),e("h3",{attrs:{id:"容器长期运行"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#容器长期运行"}},[s._v("#")]),s._v(" 容器长期运行")]),s._v(" "),e("p",[e("img",{attrs:{src:a(432),alt:"image-20231218143812288"}})]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 仅仅是启动容器，并未干实际的事情")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run ubuntu /bin/bash -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'while true; do sleep 1; done'")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# -d 后台运行[推荐]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run ubuntu -d\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# --name 为容器命名")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run ubuntu -d --name my-ubuntu\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"停止容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#停止容器"}},[s._v("#")]),s._v(" 停止容器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CONTAINER_ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# CONTAINTER_ID 容器ID")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" stop "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("NAMES"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# NAMES 容器名称")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"进入容器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#进入容器"}},[s._v("#")]),s._v(" 进入容器")]),s._v(" "),e("p",[e("img",{attrs:{src:a(433),alt:"image-20231218150434799"}})]),s._v(" "),e("ol",[e("li",[s._v("docker attach")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" run -itd ubuntu /bin/bash -c "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"while true; do sleep 1; echo I_am_in_container; done"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" attach "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CONTAINER_ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ctrl + p, ctrl + q 退出，必须以交互命令-it进入，否则无法退出")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[e("img",{attrs:{src:a(434),alt:"image-20231218151505786"}})]),s._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[s._v("docker exec")]),s._v(" "),e("blockquote",[e("p",[s._v("-it：以交互模式打开 pseudo-TTY（虚拟交互终端，TTY（teletypewriter）），执行bash， 结果就是打开一个bash终端")]),s._v(" "),e("p",[s._v("ps -elf：显示容器启动进程while以及当前的bash进程")]),s._v(" "),e("p",[s._v("exit：退出容器")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("CONTAINER_ID"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sh")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"docker-attach-vs-docker-exec"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-attach-vs-docker-exec"}},[s._v("#")]),s._v(" docker attach VS docker exec")]),s._v(" "),e("ul",[e("li",[s._v("docker attach 直接进入容器启动命令的中终端，不会启动新的进程。")]),s._v(" "),e("li",[s._v("docker exec 是在容器中打开新的终端，并且可以启动新的进程。")]),s._v(" "),e("li",[s._v("希望直接在启动终端中查看命令的输出，使用attach, 其他则使用exec")]),s._v(" "),e("li",[s._v("可以直接使用docker logs -f [CONTAINER_ID]查看命令输出。-f，类似tail -f ，持续打印输入")])]),s._v(" "),e("h1",{attrs:{id:"docker网络"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker网络"}},[s._v("#")]),s._v(" Docker网络")]),s._v(" "),e("h1",{attrs:{id:"docker-存储"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#docker-存储"}},[s._v("#")]),s._v(" Docker 存储")]),s._v(" "),e("h1",{attrs:{id:"每日命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#每日命令"}},[s._v("#")]),s._v(" 每日命令")]),s._v(" "),e("ol",[e("li",[e("p",[e("code",[s._v("-it")])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("-it: 以交互模式进入容器，并打开终端\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("docker history")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" history: 查看镜像的构建历史（过程）\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("docker tag 给镜像打tag")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("docker tag [当前镜像] [新镜像名称]:[tag名称]\n例如：docker tag mongo:latest my_mongo:1.0.0\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("docker rmi 删除本地host镜像")]),s._v(" "),e("blockquote",[e("ol",[e("li",[s._v("只删除host的镜像，不会删除registry的镜像")]),s._v(" "),e("li",[s._v("如果镜像有多个tag，只有删除了所有的对应的tag的镜像，镜像才真正被删除，否则只是删除了镜像对应的tag")])])]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" rmi registry.example.net:5000/tjrf/httpd:latest\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("docker search  搜索Docker Hub中的镜像")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" search httpd\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("docker ps [ docker container ls ] 查看当前Docker host 中运行的 container")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看运行中的container")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 或者")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所有状态的container")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -a\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("docker")]),s._v(" container "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("ls")]),s._v(" -a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);