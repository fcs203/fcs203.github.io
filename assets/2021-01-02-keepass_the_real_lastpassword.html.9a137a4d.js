import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as n,c as h,a as e,b as t,d as o,e as a,r as i}from"./app.b31a9603.js";const c={},l=e("p",null,"用了 5 年的 Lastpass，但随着网站密码的增加，遇到的 bug 也越来越多。有次误操作，合并了 Lastpass 密码库，丢失了一大批密码，对云端密码库的信任度直接降为零。",-1),d=e("p",null,[t("之后，尝试了 1Password、Bitwarden、Enpass、Remembear 多种密码管理软件，最终选择"),e("strong",null,"开源免费且自动填充超强"),t("的 KeePass。")],-1),p=e("p",null,[t("KeePass 的密码保存在本地的 "),e("code",null,".kdbx"),t(" 数据库中，让你真正掌握自己的账号密码。搭配坚果云或同步盘的 KeePass，能实现密码多端同步，让手机与电脑使用同一密码库。")],-1),_={href:"https://keepass.info/download.html",target:"_blank",rel:"noopener noreferrer"},f=e("code",null,"Keepass2Android",-1),u=e("code",null,"Strongbox",-1),g=e("code",null,"KeePassium",-1),k=a('<p>接着我会逐步介绍 KeePass 的配置和插件，也可以直接拖到文章底部，下载懒人包，开箱即用。</p><h2 id="keepass-设置" tabindex="-1"><a class="header-anchor" href="#keepass-设置" aria-hidden="true">#</a> KeePass 设置</h2><h3 id="选项设置" tabindex="-1"><a class="header-anchor" href="#选项设置" aria-hidden="true">#</a> 选项设置</h3><p>依次点击菜单栏 -「工具」-「选项」</p><ul><li>外观 - 主窗口，勾选「最小化到系统托盘（而不是任务栏）」；</li><li>外观 - 主窗口，勾选「关闭按钮 [X] 最小化主窗口，而不是退出程序」；</li><li>集成 - 全局热键，全局自动输入：<code>Ctrl+Alt+A</code>；</li><li>集成 - 全局热键，全局自动输入（仅密码）：<code>Ctrl+Alt+Shift+A</code>。</li></ul><h3 id="自动输入规则" tabindex="-1"><a class="header-anchor" href="#自动输入规则" aria-hidden="true">#</a> 自动输入规则</h3><p>选中左侧的数据库，右键点击「编辑群组」-「自动输入」，替换默认规则为 <code>^{SPACE}{DELAY 100}{CLEARFIELD}{USERNAME}{TAB}{PASSWORD}{DELAY 100}{ENTER}^{SPACE}</code>。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p><code>^{SPACE}</code> 即 <code>Ctrl+Space</code>，该热键能关闭或启用当前输入法。关闭输入法后，默认为美式键盘输入。</p><p><code>Ctrl+Space</code> 需在输入法编辑状态下才能生效，而密码区都禁用输入法编辑。因此，输入密码完成后，可能输入法并未重置，要按 <code>Ctrl+Space</code> 才能正常启用输入法。</p><h3 id="匹配多个网址" tabindex="-1"><a class="header-anchor" href="#匹配多个网址" aria-hidden="true">#</a> 匹配多个网址</h3><p>KeePass 不能在一个条目填写多个匹配网址，但不同条目可以共享用户名、密码等字段数据，并且通过更改被引用的数据条目，所有其他条目也会同步使用更新值。<sup class="footnote-ref"><a href="#footnote2">[2]</a><a class="footnote-anchor" id="footnote-ref2"></a></sup></p><p>比如 <code>163.com</code> 和 <code>youdao.com</code> 都使用网易账户，账号密码相同，根据网址建立了 2 个条目。首先，在 163 条目输入实际的账户密码，将其作为网易账户的主条目。然后，双击进入 youdao 条目，依次点击 Edit Entry 界面左下角的「工具-插入字段引用-在用户名/密码字段」，选中需要引用的条目。设置好后，字段旁边会出现分享符，表明这是引用字段，该字段数值会跟随主条目更新。引用字段的实际内容类似 <code>{REF:P@I:8CC19B988F0F9D499459B741753BEE5F}</code>，更改账户密码只能在主条目上进行。</p><p><figure><img src="http://tc.seoipo.com/2022-10-18-11-41-15.png" alt="" title="引用字段设置步骤" loading="lazy"><figcaption>引用字段设置步骤</figcaption></figure></p><h2 id="必备插件" tabindex="-1"><a class="header-anchor" href="#必备插件" aria-hidden="true">#</a> 必备插件</h2><p>连接浏览器、密码自动输入等主要功能，KeePass 均需配置插件。下载插件并放入指定文件夹 <code>\\Plugins</code>，重启 KeePass 即可使插件生效。</p>',15),b={id:"keepasshttp",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#keepasshttp","aria-hidden":"true"},"#",-1),P={href:"https://raw.github.com/pfn/keepasshttp/master/KeePassHttp.plgx",target:"_blank",rel:"noopener noreferrer"},m=e("p",null,"KeePassHttp 需搭配浏览器插件 KeePassHttp-Connector，达到自动填充密码效果。",-1),y={id:"kpenhancedentryview",tabindex:"-1"},w=e("a",{class:"header-anchor",href:"#kpenhancedentryview","aria-hidden":"true"},"#",-1),x={href:"https://keepass.info/plugins.html#kpenhentryview",target:"_blank",rel:"noopener noreferrer"},T=e("p",null,"KPEnhancedEntryView 增强视觉效果，为达到最佳显示效果，按以下配置：",-1),A=e("ul",null,[e("li",null,"在主界面中点击【显示】→【窗口布局】→【平铺】；"),e("li",null,"在主界面中点击【显示】→【列设置】，只选择：标题 →【确定】。大家也可以按自己要求选择。")],-1),E={id:"autotypesearch",tabindex:"-1"},C=e("a",{class:"header-anchor",href:"#autotypesearch","aria-hidden":"true"},"#",-1),S={href:"https://keepass.info/plugins.html#atsearch",target:"_blank",rel:"noopener noreferrer"},v=e("p",null,[t("AutoTypeSearch 提供全局框，输入热键 "),e("code",null,"Ctrl+Shift+A"),t(" 后，搜索关键词输入密码。")],-1),B=e("p",null,[e("figure",null,[e("img",{src:"http://tc.seoipo.com/20191013083950.png",alt:"AutoTypeSearch 通用设置",title:"AutoTypeSearch 通用设置",loading:"lazy"}),e("figcaption",null,"AutoTypeSearch 通用设置")])],-1),N={id:"kp-entry-templates",tabindex:"-1"},F=e("a",{class:"header-anchor",href:"#kp-entry-templates","aria-hidden":"true"},"#",-1),H={href:"https://github.com/mitchcapper/KPEntryTemplates",target:"_blank",rel:"noopener noreferrer"},R=e("p",null,"配置方法：",-1),D=e("ol",null,[e("li",null,"点击 KeePass 主界面的【文件】→【数据库设置】→【高级】，在【模板记录组】中选择一个群组 →【确定】；"),e("li",null,"返回主界面，点击步骤 1 中选择的群组，按 Ctrl+I 键（或点击上方工具栏的钥匙图标）添加记录；"),e("li",null,[t("点击【自动输入】，勾选【双通道自动输入混淆】（"),e("strong",null,"以后用模板添加记录时就不需要再勾选，一劳永逸"),t("）；")]),e("li",null,"点击最左边的【Template】→【Init As Template】；"),e("li",null,"配置所需模板 →【确定】。")],-1),L={id:"kpsourceforgeupdatechecker",tabindex:"-1"},O=e("a",{class:"header-anchor",href:"#kpsourceforgeupdatechecker","aria-hidden":"true"},"#",-1),I={href:"https://sourceforge.net/projects/kpsfupdatechecker/reviews",target:"_blank",rel:"noopener noreferrer"},M=e("p",null,"KeePass 菜单栏 - 帮助 - 检查更新，检查从 SourceForge 上的插件更新信息。",-1),V=e("h2",{id:"可选插件",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#可选插件","aria-hidden":"true"},"#"),t(" 可选插件")],-1),z={id:"keetraytotp",tabindex:"-1"},W=e("a",{class:"header-anchor",href:"#keetraytotp","aria-hidden":"true"},"#",-1),j={href:"https://github.com/victor-rds/KeeTrayTOTP/releases/",target:"_blank",rel:"noopener noreferrer"},U={href:"https://www.cnblogs.com/tielemao/p/9613839.html",target:"_blank",rel:"noopener noreferrer"},X={id:"webautotype",tabindex:"-1"},Y=e("a",{class:"header-anchor",href:"#webautotype","aria-hidden":"true"},"#",-1),q={href:"https://keepass.info/plugins.html#webautotype",target:"_blank",rel:"noopener noreferrer"},G=e("p",null,"WebAutoType 是很多人的推荐插件，启动密码热键后会自动匹配当前网址、标题。这对于已经有大量密码的人来说，并不实用，可不安装。",-1),J={id:"yet-another-favicon-downloader",tabindex:"-1"},Z=e("a",{class:"header-anchor",href:"#yet-another-favicon-downloader","aria-hidden":"true"},"#",-1),Q={href:"https://keepass.info/plugins.html#yafd",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,"该插件能自动匹配下载网站图标，但会大幅增加数据库的大小。不在意界面美观度的话，无需安装 Yet Another Favicon Downloader。",-1),ee={id:"hibp-offline-check",tabindex:"-1"},te=e("a",{class:"header-anchor",href:"#hibp-offline-check","aria-hidden":"true"},"#",-1),se={href:"https://github.com/mihaifm/HIBPOfflineCheck",target:"_blank",rel:"noopener noreferrer"},oe={href:"https://haveibeenpwned.com/",target:"_blank",rel:"noopener noreferrer"},ae={id:"keepassrpc",tabindex:"-1"},re=e("a",{class:"header-anchor",href:"#keepassrpc","aria-hidden":"true"},"#",-1),ne={href:"https://github.com/kee-org/keepassrpc/releases/",target:"_blank",rel:"noopener noreferrer"},he=e("p",null,[t("KeePassRpc 搭配浏览器插件 Kee，能实现"),e("strong",null,"自动填充密码并登录"),t("。")],-1),ie=e("p",null,"其他插件不能自动登录，只有 Kee 能做到该功能。使用 Kee 的自动登录功能后，少数页面会出现循环登录，需暂停 Kee 扩展来停止循环错误。",-1),ce=e("p",null,[e("figure",null,[e("img",{src:"http://tc.seoipo.com/2022-05-05-14-29-32.png",alt:"Kee 设置",title:"Kee 设置",loading:"lazy"}),e("figcaption",null,"Kee 设置")])],-1),le={id:"keepassnatmsg",tabindex:"-1"},de=e("a",{class:"header-anchor",href:"#keepassnatmsg","aria-hidden":"true"},"#",-1),pe={href:"https://github.com/smorks/keepassnatmsg",target:"_blank",rel:"noopener noreferrer"},_e=a('<p>浏览器插件 KeePassHttp-Connector 已不再更新，有段时间甚至不兼容新版 KeePass。</p><p>如果遇到不兼容，可使用 KeePassNatMsg 和 KeePassXC-Browser 连接浏览器，本方案不支持搜狗浏览器。</p><blockquote><p>如果报错「proxy download error」，备份并删除文件夹 C:\\Users%Username%\\AppData\\Local\\KeePassNatMsg，然后重新加载 Native Messaging Host。</p></blockquote><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="多账户排序" tabindex="-1"><a class="header-anchor" href="#多账户排序" aria-hidden="true">#</a> 多账户排序</h3><p>同一网址有多个账户密码时，无将其中一个账户密码默认置顶。通过插件 KeePassHttp 和 KeePassNatMsg，能按 username 或 title 对账户进行排序。</p><h3 id="为什么不选-keepassxc" tabindex="-1"><a class="header-anchor" href="#为什么不选-keepassxc" aria-hidden="true">#</a> 为什么不选 KeepassXC</h3><p>KeepassXC 基于 KeePass 开发，界面更美观，应用设置更简单，并开发了专属的浏览器插件。</p><p>入门 KeepassXC 也比 KeePass 来得轻松，但 KeePass 操控和定制性更强。密码库的使用是以年为单位，比起节约一两天的时间，个人推荐使用 KeePass 原版定制你自己的密码库。</p><h2 id="keepass-懒人包" tabindex="-1"><a class="header-anchor" href="#keepass-懒人包" aria-hidden="true">#</a> KeePass 懒人包</h2>',10),fe={href:"https://wwz.lanzouy.com/iJ6yA0bve7wb",target:"_blank",rel:"noopener noreferrer"},ue={href:"https://pan.baidu.com/s/1dm0djnDGq8SOsTPy3jByZg?pwd=nrwj",target:"_blank",rel:"noopener noreferrer"},ge=a('<p>KeePass 懒人包为绿色版，集成了常用插件，建立数据库即可使用 KeePass。</p><p><strong>建立数据库：</strong></p><ol><li><p>解压懒人包，打开程序 <code>KeePass.exe</code>。</p></li><li><p>屏幕右下角托盘处，打开 KeePass。</p></li><li><p>依次点击 <code>菜单栏 - 文件 - 新建</code>，建立属于你的密码数据库。</p><p><figure><img src="http://tc.seoipo.com/KeePass_new_kdbx.gif" alt="KeePass 懒人包设置" title="KeePass 懒人包设置" loading="lazy"><figcaption>KeePass 懒人包设置</figcaption></figure></p></li></ol><p>懒人包集成插件：AutoTypeSearch，Entry Templates，KeePassHttp，KeePassNatMsg，KeePassRpc，KeeTrayTOTP，KPEnhancedEntryView，SourceForgeUpdateChecker，WebAutoType。</p><hr class="footnotes-sep">',5),ke={class:"footnotes"},be={class:"footnotes-list"},Ke={id:"footnote1",class:"footnote-item"},Pe={href:"https://blog.csdn.net/SingWarm/article/details/90669580",target:"_blank",rel:"noopener noreferrer"},me=e("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),ye={id:"footnote2",class:"footnote-item"},we={href:"https://keepass.info/help/base/fieldrefs.html",target:"_blank",rel:"noopener noreferrer"},xe=e("a",{href:"#footnote-ref2",class:"footnote-backref"},"↩︎",-1);function Te(Ae,Ee){const s=i("ExternalLinkIcon");return n(),h("div",null,[l,d,p,e("p",null,[t("KeePass 官网下载（Windows）："),e("a",_,[t("https://keepass.info/download.html"),o(s)]),t("。安卓推荐 "),f,t("，iOS/Mac 推荐 "),u,t(" 或 "),g,t("。")]),k,e("h3",b,[K,t(),e("a",P,[t("KeePassHttp"),o(s)])]),m,e("h3",y,[w,t(),e("a",x,[t("KPEnhancedEntryView"),o(s)])]),T,A,e("h3",E,[C,t(),e("a",S,[t("AutoTypeSearch"),o(s)])]),v,B,e("h3",N,[F,t(),e("a",H,[t("KP Entry Templates"),o(s)])]),R,D,e("h3",L,[O,t(),e("a",I,[t("KPSourceForgeUpdateChecker"),o(s)])]),M,V,e("h3",z,[W,t(),e("a",j,[t("KeeTrayTOTP"),o(s)])]),e("p",null,[t("如果你有更高安全要求，KeeTrayTOTP 能增加二次动态验证，使用参考 "),e("a",U,[t("使用 KeePass 管理两步验证"),o(s)]),t("。")]),e("h3",X,[Y,t(),e("a",q,[t("WebAutoType"),o(s)])]),G,e("h3",J,[Z,t(),e("a",Q,[t("Yet Another Favicon Downloader"),o(s)])]),$,e("h3",ee,[te,t(),e("a",se,[t("HIBP Offline Check"),o(s)])]),e("p",null,[t("使用 "),e("a",oe,[t("have i been pwned?"),o(s)]),t(" 在线检查密码库，也能使用本地数据库离线检查。")]),e("h3",ae,[re,t(),e("a",ne,[t("KeePassRpc"),o(s)])]),he,ie,ce,e("h3",le,[de,t(),e("a",pe,[t("KeePassNatMsg"),o(s)])]),_e,e("p",null,[t("2022.09.17 更新懒人包："),e("a",fe,[t("蓝奏云"),o(s)]),t("，"),e("a",ue,[t("百度云盘"),o(s)]),t(" 提取码：nrwj。")]),ge,e("section",ke,[e("ol",be,[e("li",Ke,[e("p",null,[e("a",Pe,[t("Keepass 教程之二——完美的通用自动输入规则"),o(s)]),t(),me])]),e("li",ye,[e("p",null,[e("a",we,[t("Field References-KeePass"),o(s)]),t(),xe])])])])])}const ve=r(c,[["render",Te],["__file","2021-01-02-keepass_the_real_lastpassword.html.vue"]]);export{ve as default};
