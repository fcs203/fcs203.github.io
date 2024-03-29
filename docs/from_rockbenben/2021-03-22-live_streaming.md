---
title: 【转载】直播新手攻略：从小白入门到网红达人
subtitle: 新手如何开直播？
date: 2021-03-26
category:
  - 工具
tag:
  - 直播
order: -36
---

<!-- 直播已成为主流媒体，几乎所有行业都会涉及直播。

本文是我持续直播一年的经验总结，会从硬件、软件、技巧三方面，让你快速入门直播，开始自己的直播之旅。

## 直播硬件

直播设备分为视频采集（摄像头）、音频采集（收音器）、稳定器（三脚架）和补光灯。

### 视频采集

桌面摄像头、手机和微单相机都可以作直播的视频采集来源。

#### 摄像头

桌面摄像头价格为 50~1000 元不等，但实际效果没太大区别。个人体验罗技 C930 后，发现画面模糊不清晰，反馈给客服，得知画质不清是桌面摄像头的通病。

不管是几十的廉价摄像头还是上千的罗技 C1000，它们的**实际像素都只有 200 万**。宣传中的 2000 万像素是通过软件放大的效果，画质并没有实质性的变化。初级用户选择 100 元的自动变焦摄像头即可。

桌面摄像头搭配三角架角度更佳，购买时注意**摄像头是否有三脚架接口**。

#### 手机

手机充当摄像头，在室外直播中使用较多。如果室内没有桌面摄像头又希望用电脑直播，可以参考下方的 Camo、NDI、IP Webcam 介绍。

[Camo](https://apps.apple.com/app/reincubate-camo/id1514199064?platform=iphone) 专用于 iOS 设备，连接数据线后能将 iPhone 或 iPad 变为直播摄像头。

**NDI** 最为稳定，能自由调节拍摄参数。打开 NDI 应用，需等待 NDI 界面周边出现绿框或红框，OBS 才可以识别到摄像头。不过 NDI 是收费应用，安卓测试可使用 [NDI 调试 APK](https://wwe.lanzoup.com/iQCMh00b946b)。

**IP Webcam** 推流稳定性一般，容易掉帧，但 [IP Webcam 免费版](https://wwz.lanzouf.com/iT6pH01tj7yb) 足够个人使用。

- IP Webcam 设置网页将流质量调整至 90%，视频分辨率 720p，能有效减少卡顿。IP camera 耗电低，适合手机长时间直播，支持视频与浏览器等方式。
- OBS `场景 - 来源 - 视频源`，「输入」项中填入 IP Webcam 视频地址，例如 `http://192.168.2.234:8080/video`。
- OBS `场景 - 来源 - 添加浏览器`，「URL」项中填入 IP Webcam 浏览器全屏地址，例如 `http://192.168.2.234:8080/jsfs.html`。注意：浏览器推流，容易出现闪屏。

无他伴侣（不推荐），虽然国内大量教程介绍无他伴侣，但使用中出现非常多的问题，如：摄影角度很难控制；无法使用 FaceRig 等变脸应用；直播 10 分钟后，摄像头经常自动与 OBS 断开连接；直播 2 小时后，OBS 无法检测到无他伴侣。

#### 相机

与摄像头的算法像素相比，相机才能达到真正意义上的高清直播。

如果你的相机有外接视频接口（例如：HDMI、mini HDMI、sdi），可以通过视频采集卡，将相机视频转为直播视频传入电脑。索尼、佳能等主流相机都专门的直播软件，不通过采集卡直连电脑即可直播。运动相机 GoPro 也已经支持相机直播传输了，希望国内厂商也早点跟上。

相机充当摄像头的费用偏高，一般需要几千到几万，只推荐已购入相机的主播采用此方案。

### 音频采集

收音设备的费用从几元到几千元不等。手机的收音性能好于绝大多数的话筒，如果你使用手机摄像方案，可以先不用买收音器材。

廉价麦克风存在收音范围窄、不清晰、多噪音等问题，但费用低、使用方便，适合新人测试使用。

桌面直播多采取「声卡 + 话筒」方案，预算需一千以上。不要买廉价的山寨声卡，还不如手机收音来得清晰。

外出直播或进阶用户推荐 RODE 或 DJI 的无线麦克风，这两款音频水准皆可吊打同行。RODE 是老牌话筒厂家，音质有保障；DJI 麦克风推出不久，集百家之长，设计非常贴心，小白使用也很方便。

### 三脚架

三脚架主要有两类，桌面款高度推荐 55cm，站立款推荐 210cm。

三脚架价位从 10~500 元不等，效果无明显区别，建议新手用户的三脚架预算不要高于一百。

### 补光灯

露脸主播一定要配柔光灯或环形灯，对颜值提升巨大。

环形灯容易在眼镜片反射出光圈，影响视觉。如果带眼镜的话，可在摄像头上方放置小型补光灯代替环形灯。

补光灯可放于正面 45 度成蝴蝶光 (派拉蒙光)，可显瘦显轮廓；背后可使用辅助光或一张白纸反光，防止正面灯光太亮。

## OBS 直播

[OBS](https://obsproject.com/) 开源免费，能对直播界面进行调整和美化，是最流行的直播软件，大部分直播软件都基于 OBS。

### OBS 设置

直播前调整 OBS 设置，优化直播效果。

- 直播推流：`设置－通用－推流` 中的服务调整为「自定义」，服务器和串流密钥则按平台要求输入。

  ![](http://tc.seoipo.com/2022-06-30-14-33-34.png "推流服务器设置")

- 直播清晰度：直播并非越清晰越好，对网络稳定性要求较高，建议将 `设置－输出－串流－视频比特率` 设为 4000-6000 Kbps。
- 直播分辨率：分辨率一般 1080p 或 720p，帧率为 30。注意 `设置－视频` 中的输出分辨率要与基础分辨率一致，游戏直播中将 `常用 FPS 值 (帧率)` 从 30 调整到 60。
- 直播延迟：`设置 - 高级 - 串流延迟` 开启 20s 的延迟时间，避免网络卡顿。
- 音频输出：`场景 - 来源 - 混音器`，右键点击调整「高级音频属性」。
  - 默认音频设置为「关闭监听」，音频仅对直播间观众输出，主播听不到。
  - 仅监听 (输出静音)：主播能听到，但观众能通过主播话筒的收音听到声音，不过音量会小很多。
  - 监听并输出：主播和观众都能直接听到。如果主播在该模式下使用了话筒，建议使用耳麦，否则话筒音量容易被输出音频盖住，观众难以听清主播声音。修改音量或使用滤镜并不能降低输出音频音量。

**注意**：

- 来源使用窗口采集时，窗口不能最小化，否则窗口会卡住不同步。
- 直播电脑超过 5 年的话，可考虑使用两台主机 (PC、手机均可) 进行 NDI 双机推流，避免卡顿。

### OBS 滤镜

OBS 滤镜是对音视频来源进行裁剪、过滤、增益等多种处理的工具。

- 色度键：绿幕抠图必用，能将指定颜色变为透明，比如抠掉绿色，将绿幕换成其他场景。

  ![色度键滤镜一键抠图](http://tc.seoipo.com/20210328235013.gif "色度键滤镜一键抠图")

- 应用 LUT：使用 LUT 对画面进行色彩调整，相当于平常手机修图用的风格滤镜，对画面效果提升巨大。将 OBS 滤镜插件目录下的 original.png 复制到 Photoshop，然后进入右侧的调整界面，选择第二行的最右侧「创建新的颜色查找调节图层」，尝试载入自带的 3DLUT 文件，最后导出 png 文件，这也就是直播能用的 LUT 文件。如果自带 LUT 不能满足需求，则使用 Premiere 调节定制 LUT cube 文件。
- 裁剪/填充：对来源进行裁剪，剪去多余的部分。
- 增益：当麦克风声音过大或过小时，可以通过增益滤镜调整音量，但是不宜设置数值过大，容易造成声音失真。
- 噪音阈值：当背景有噪音时，设置噪音阈值来控制底噪，降低噪音干扰。
- 色彩校正：修改伽玛度、对比度、亮度、饱和度，对来源的显示效果进行调整。

### 常用插件

OBS 插件多为绿色版本，进入 `%ProgramFiles%\obs-studio\data\obs-plugins` 和 `%ProgramFiles%\obs-studio\obs-plugins\64bit` 按插件关键词删出相关文件即可卸载插件。

- [StreamFX](https://github.com/Xaymar/obs-StreamFX/releases)：支持更多的信号源、滤镜和转场效果，如：模糊滤镜。OBS28 新版安装暂只支持绿色模式。
- [OBS Shaderfilter](https://obsproject.com/forum/threads/shaderfilter-went-away.155555/#post-571174)：文字图片特效滤镜，该插件已从社区删除，GitHub 可下载 [最新版](https://github.com/Oncorporation/obs-shaderfilter/releases/)。
- [multi-rtmp](https://github.com/sorayuki/obs-multi-rtmp)：OBS 多地址推流，同时在多个平台上进行直播。
- [Asynchronous Source Duplication](https://obsproject.com/forum/resources/asynchronous-source-duplication.1483/)：复制来源可以同时展示在多个场景，复制源会有延迟。
- [VLC](https://www.videolan.org/vlc/)：非插件，安装 VLC 应用后，OBS 就能使用「VLC 视频源」(播放列表)。
- [咩播](https://www.kuabo.cn/)、[智播](http://zbmate.com/)：第三方的直播美化插件，新手可参考使用。

### 进阶插件

进阶插件的功能更多，配置也更复杂，新手可暂时忽略。如果未在下方列表没找到你需要的功能，可以进入 [OBS 插件库](https://obsproject.com/forum/resources/categories/obs-studio-plugins.6/) 搜索。

- [Advanced Scene Switcher](https://obsproject.com/forum/resources/advanced-scene-switcher.395/)：使用「宏」来自动完成各种任务，按条件切换场景、来源。比如，电脑闲置 10 分钟后，让摄像头来源变为不可见。
- [Move transition](https://obsproject.com/forum/resources/move-transition.913/)：记录来源的位置变化，生成元素移动的动画效果。比如，视频演讲时，将摄像头位置从屏幕右下移动到中央。
- [Transition Table](https://obsproject.com/forum/resources/transition-table.1174/)：场景切换效果，设定不同场景间的切换规则。
- [Source Dock](https://obsproject.com/forum/resources/source-dock.1317/)：为单独场景或来源建立控制栏，使用小窗口预览场景。
- [Source Copy](https://obsproject.com/forum/resources/source-copy.1261/)：更方便地复制、保存场景设置。
- [Scene Collection Manager](https://obsproject.com/forum/resources/scene-collection-manager.1434/)：自动备份场景，防止误操作。
- [Audio Monitor](https://obsproject.com/forum/resources/audio-monitor.1186/)：将来源声音输出给指定设备播放，方便单独调节音量，能让主播与观众听到不同的音频效果。
- [Downstream Keyer](https://obsproject.com/forum/resources/downstream-keyer.1254/)：切换场景时，置顶指定场景。
- [Multi Source Effect](https://github.com/norihiro/obs-multisource-effect)：滤镜效果
- [Teleport](https://github.com/fzwoch/obs-teleport)：NDI 替代品，局域网设备推流到直播。
- [spectralizer](https://github.com/univrsal/spectralizer)：音频频谱，用滤镜「图像掩码」的「混合图层」给频谱遮罩滤镜。
- transition matrix 过渡矩阵
- scrab 截图
- lower third in html/css 文字运动特效
- input overlay 输入显示
- motion-effect 动画效果
- reply source 回放控制
- advanced scene switcher 高级场景切换器
- PTZ controller PTZ 摄影机云台控制器

以下插件仅作记录，用于 OBS 27：

- [Virtual Cam Filter](https://obsproject.com/forum/resources/virtual-cam-filter.1142/)：能让来源单独输出虚拟摄像头，OBS 28 已内置该功能。
- [obs-websocket](https://obsproject.com/forum/resources/obs-websocket-remote-control-obs-studio-from-websockets.466/)：远程控制插件，OBS 28 已内置该功能。
- [NDI](https://obsproject.com/forum/resources/obs-ndi-newtek-ndi%E2%84%A2-integration-into-obs-studio.528/): 局域网视频无线传输技术 NDI 插件。
- [Animated captions](https://obsproject.com/forum/resources/animated-captions-with-obs-controller-and-a-preview-function.1407/)：自定义弹幕功能，无漂浮弹幕，适用较少。
- [Background Removal](https://github.com/royshil/obs-backgroundremoval)：无绿幕移除背景，需搭配神经网络环境。

## 其他直播软件

### 小葫芦弹幕助手

[小葫芦弹幕助手](https://zs.xiaohulu.com/danmu/) 能实时显示网友的互动、打赏，尤其适合游戏直播。不过，小葫芦弹幕助手的弹幕答谢、自动定时弹幕、手动弹幕等功能均已暂停，不建议新手充值会员。

如果你不是游戏主播，不需要在直播界面中显示弹幕，就不要安装小葫芦弹幕插件。安装弹幕助手后，会影响 OBS 窗口捕获功能，无法抓取基于 Electron 的应用界面。如果窗口捕捉黑屏，删除 `C:\Program Files\obs-studio\obs-plugins\64bit` 目录内的 `CalabashDanmuPlugin.dll`、`CalabashWinCapture.dll`、`ObssDanmuInfo.dll`，重启 OBS 即可恢复。但当下次使用弹幕助手时，这三个文件会自动安装，黑屏问题复现，只能重新删除指定文件。

小葫芦直播助手集成了 OBS 和弹幕助手的功能，但为了直播的扩展性，依然推荐由 OBS 入门。

### YY 开播 (美颜)

OBS 美颜需借助第三方应用，推荐 [YY 开播](https://v.yy.com/)。

1. 打开 YY 开播，调用摄像头摄像，开启美颜。
2. OBS 视频采集设备调用 YY 开播，有绿幕的话，添加「色度值」滤镜进行视频抠图。

初次配置好后，下次启动 OBS，软件会自动调用 YY 开播，无需重复配置。

**使用注意**：

- 剧烈运动时，不要开美颜直播，否则容易卡顿。
- 不要开启除美颜外的功能，如虚拟背景、虚拟形象等，否则直播中的画面背景无法透明化。

### SplitCam (摄像头多开)

摄像头默认只能被一个应用调用。借助 [SplitCam](https://splitcam.com/)，你能在摄像头画面上叠加元素，使用镜像、高亮滤镜微调画面，还能让摄像头画面同步给多个应用。

例如，摄像头用于 OBS 直播的同时，供 Capture 录屏。不同用途上，摄像头可以叠加不同滤镜和特效，呈现出不同的画面。

**使用流程**：

1. 打开 SplitCam，选择默认摄像头。
2. Snap Camera、Capture 等调用摄像头，选择「SplitCam Video Driver」。

## 直播娱乐

### 虚拟主播

如果不想录脸或原声直播，可以配合 MorphVOX Pro(变音)、Snap Camera(变脸) 使用虚拟形象直播。

#### 变声

MorphVOX Pro、神舌等软件变声器对使用者的语气要求较高。

我在淘宝找人进行了声音精调，但效果依旧无法仿真。店家发的语气教程没有参考价值，初学者很难入门。

与软件变声相比，硬件变声器效果更糟糕，极度不推荐。

#### 变脸

[Snap Camera](https://snapcamera.snapchat.com/) 是 SnapChat 的免费增强现实应用。在电脑直播/录屏时，它可以帮你实现挡脸头套、美化滤镜等特效。熟悉 3D 建模的话，使用 Lens Studio 就可以定制属于你自己的变脸特效。需要注意的是，当你喝水，低头及脸部被遮挡时，脸部特效会失效。

![Snap Camera 效果图](http://tc.seoipo.com/SnapCamera.gif "Snap Camera 效果图")

如果你用不了 Snap Camera，可以试试 FaceRig 和 PrprLive。

[FaceRig](https://store.steampowered.com/app/274920/FaceRig/)（steam 已停售）通过对五官的动作捕捉，让卡通脸的表情进行同步变化，不能对头部以下的部分进行捕捉和同步。直播时，FaceRig 需打开「切换广播」，否则 obs 中的窗口会显示黑屏。

![FaceRig 演示图](http://tc.seoipo.com/20210329092154.gif "FaceRig 演示图")

注意：**FaceRig 在百度的首个搜索结果是虚假官网**，价格高且无保障，不要在上面进行购买。

[PrprLive](https://store.steampowered.com/app/1279610/PrprLive/) 是国内的变脸软件，基础版免费，同样在 steam 销售，付费前先试试基础版。

变脸软件会占用较高的 cpu，推荐使用 5 年内的电脑。

### 动态素材

如果直播场景单调，可以使用带绿幕的视频画面，给直播添加动态画面。

![直播间的猫咪](http://tc.seoipo.com/2022-06-30-08-29-40.png "直播间的猫咪")

除了动态视频，还可以借助类虚拟主播技术，达到交互效果。比如 [Bongo Cat Mver](https://d.appinn.com/bongo-cat-mver/)，它能实时同步键盘与鼠标状态，增加直播趣味性。如果使用 Bongo Cat 全键盘同步模型，建议打乱映射规则，防止隐私泄露。

## 直播平台

主流直播平台有淘宝、京东、抖音、快手、视频号、哔哩哔哩、小红书、微博直播、斗鱼、虎牙、Youtube。

接下来，我会介绍如何在 PC 端用 OBS 在这些平台上进行直播。

### 淘宝直播

1. [淘宝直播官网](https://market.m.taobao.com/app/mtb/live-portal/download/index.html) 下载客户端。
2. 打开淘宝直播客户端，点击「我要开播」，进入直播间界面。

   ![](http://tc.seoipo.com/2022-06-29-22-23-26.png "淘宝直播设置")

3. 左侧依次点击 `添加元素 - 摄像头`，选择「OBS-Camera」，即可同步 OBS 直播画面。淘宝直播客户端也是基于 OBS，但不支持推流直播，只能通过虚拟摄像头同步画面。

除客户端外，我们也能通过 [直播中控台](https://liveplatform.taobao.com/restful/index/home/) 来设置淘宝直播间。

### 抖音直播

1. 电脑端下载 [直播伴侣](https://www.douyin.com/falcon/webcast_openpc/pages/streamingtool_download/index.html)，适配西瓜视频、抖音、抖音火山版的直播。
2. 左侧依次点击 `添加元素 - 采集`，选择「OBS-Camera」(摄像头较多时，可下滑选择)，设置采集自定义音频设备为「OBS-Audio」，声音改为单声道，推流延迟 20s。

   ![](http://tc.seoipo.com/2022-06-29-23-59-02.png "抖音直播设置")

以上为新手的直播步骤，如果抖音粉丝在一万以上，可直接使用 [OBS 模式推流](http://streamingtool.douyin.com/docs/guide/96319/)。

### 快手直播

快手直播无需 PC 客户端，在 [快手云直播](https://studio.kuaishou.com/profile) 页面配置直播间，支持 OBS 模式推流直播。

快手直播断流超过 2 分钟或直播超过 7 天，都会自动下播。

### 视频号直播

视频号要用电脑直播，需完成[视频号认证](https://channels.weixin.qq.com/platform/live/apply)。

视频号认证最重要的一环是**有效关注数 1000 人以上**，可疑和外挂用户都不包含在有效人数内。

当到达 1000 有效粉丝后，你就可以在视频号助手网页端发起直播推流。

### B 站直播

哔哩哔哩可以在 [直播姬客户端](https://link.bilibili.com/p/eden/download#/web) 或 [网页端](https://link.bilibili.com/p/center/index#/my-room/start-live) 上进行在线直播。直播封面一定要有图像，不支持纯文本封面。

如果你主做 B 站直播，可以试试哔哩哔哩直播机器人 [神奇弹幕](https://github.com/iwxyi/Bilibili-MagicalDanmaku)，号称整合弹幕姬 + 答谢姬 + 点歌姬 + 回复姬 + 工作流 (workflow)，支持弹幕聊天、观众互动、自动点歌、数据统计、私信处理等。这应用看着蛮有趣的，我还没使用。

### 知乎直播

在 [推流直播](https://www.zhihu.com/creator/streaming/push) 页面开启直播后，就可以开始知乎电脑直播。

知乎直播注意：

- 推流直播，不能与第三方连接谈话；手机直播，不支持绿幕抠图。
- 电脑直播然后进入知乎手机端时，会提示「是否继续直播」。你选择「继续」，则可进入直播界面与观众互动。如果选「忽略」，则将停止直播。
- 当直播时间超过一个月时，小葫芦直播码会失效。我们无法继续使用小葫芦直播助手/弹幕助手。

### 小红书直播

小红书 [电脑直播助手](http://www.xiaohongshu.com/zhibo/robs)，开播步骤查看 [官方文档](https://fe-video-qc.xhscdn.com/fe-platform/f03ae58e50e6d53580fa16a58e9dffbbbabbb5f0.pdf)。

登录直播助手时，提示「暂无直播权限，请联系运营及客服开通」。但我手机可以直接直播，说明提示中的直播权限专指电脑端直播。

我在应用中的意见反馈提交了问题，之后看看有没问题。

### 微博直播

微博直播需先完成实名认证，然后在 [微博管理中心](https://weibo.com/manage/frame?furl=https%3A%2F%2Fweibo.com%2Fl%2Fwblive%2Fadmin%2Fhome%2Fauthentication) 创建直播。

详细开播步骤，参考官方的 [微博 PC 开播教程](https://weibo.com/l/wblive/act/k2mw80kz3kw0)。

### Youtube 直播

如果你过去 90 天没进行 Youtube 直播，平台会要求验证你的频道。首次启用直播功能时，最长可能需要等待 24 个小时。

1. 打开 [YouTube 直播控制室](http://youtube.com/livestreaming)。
2. 点击**直播**标签页或为新直播安排时间。
3. 从直播控制室复制直播网址和直播码，然后将其粘贴到编码器中。

## 直播技巧

开播前把脸部肌肉活动开。嘴张到最大，舌顶上颚 60 秒；嘴张到最大，尽量伸舌 30 秒。说话时，让嘴皮子用力。

### 直播定位

开设直播前，从你的兴趣、能力和直播目的出发，确定直播定位。

- 我是谁：我的职业/身份是什么。
- 面向谁：目标用户画像：性别、年龄、兴趣、收入、消费能力、性格特征等。
- 我能提供什么：核心竞争力：陪伴？专业知识？丰富经验？渠道资源？
- 解决目标用户什么问题：排遣寂寞？选购答疑？

定位完成后，把自己放在目标观众角度进行换位思考，调整直播定位。

- 你喜欢哪类型的直播？喜欢谁的直播？为什么？每个主播至少列出 3 个吸引你的点。
- 你不喜欢哪种直播？为什么？
- 如果是你做直播，你希望是什么样的？你的底线是什么？有什么顾虑？顾虑和目标比起来，孰轻孰重？

如果前期定位依然不清，可以**观察头部主播、找到对标主播**，模仿对标主播的设置。

### 素材选题

直播选题决定直播前期自然流量的多少。

新手直播流量不高时，主题尽量搭上最新热点，**看到热点直接开始，用现有内容来做，抢黄金流量时间**。但你的直播内容一定要与热点相关，否则牛头不对马嘴，自然流量也不会留下来。

选好主题后，**准备 15~20 分钟的脚本，直播中循环使用**。即使直播间没人，也不要停止说话，否则进入的自然流量会变少。

### 标题

直播标题控制在 8 字，可以通过关键词搜索站内热门，从中参考直播标题。直播标题没有搜索权重，所以不需要堆砌关键词，能说清直播间主题就行。

标题要素：

- 突出主播特征，比如：人物特征，性格。
- 突出内容，比如：才艺展示，音乐主题，户外和其他品类。
- 突出玩法吸引，比如说各种秒杀活动，免费送等。
- 突出实力，清晰地表现出你的能力，当然做解说也可以。

### 预告

开播前一定要先发直播预告或短视频，可以有机会让更多观众进入到直播间看到你。预告发布不要迟于直播前两小时。

每次开播前，在开播页面提前设置好**封面标题**并勾选**定位**。

优质有特色的封面能够提升观众对直播间的点击欲望，但应尽量选择本人或和内容相关的图片作为封面。如果你不知道什么是好的封面标题，可以参考其他观众较多的直播间。

打开直播定位，将会有更多的同城观众看到你的直播间，对直播间提升流量是非常有好处的。

### 环境

灯光和环境声决定了你的直播效果。

直播间灯光要亮，露脸主播可以把灯光打在脸部的右前方 45 度，这能提升你的颜值。

直播前，尽量关闭门窗和不必要的电器，降低直播间环境噪音，避免干扰直播效果。

### 开播时间

**保持长时间和持续开播，稳定开播频次与时间段**。

比如，一周固定开播两到三场，每次直播不要低于 30 分钟。直播频率和直播时长是做好直播的基础，如果开播时长和开播频率不稳定，那么系统就没有办法准确的去判断进行推荐。

新人直播有流量扶持，初期没有观众也要坚持开播。开播时间尽量选白天等冷门时间段，竞争相对较小。

娱乐直播保持 2.5 小时以上，电商直播保持 3.5 小时以上才会有官方稳定推流。

### 直播互动

开场前 10~15 分钟是暖场阶段，你先和用户互动，等人多了再正式开始主题。

有新观众进入直播间时，要主动欢迎。有意识地引导用户关注、互动，呼吁点亮粉丝灯牌，及时感谢礼物。

对于用户评论，要**先读出弹幕后做应答**。粉丝对我们的意见是有帮助的，一定要虛心接受并感谢。

如果有团队配合，可以安排管理员维持直播间的秩序并活跃气氛，参与直播平台的官方活动，适当购买直播道具（宠粉红包福袋）。

下播后，进行数据复盘，调整直播间的标题，封面和背景。

## 总结

持续直播一年后，我深深感到直播的硬件、软件和技巧都只是锦上添花。

如果你不愿研究，只是想体验直播，那就拿出手机开播吧。刚开始直播，会存在很多疑问和顾虑，效果可能也不会有多好。但只有不断开拓，不断勇敢地尝试新事物，我们的人生才会有更多的可能性。 -->
