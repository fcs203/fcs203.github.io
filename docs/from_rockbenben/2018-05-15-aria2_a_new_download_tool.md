---
title: 【转载】抛弃迅雷，Aria2 新手入门
date: 2018-05-15
category:
  - 工具
tag:
  - Aria2
  - 迅雷
star: true
order: -17
---

<!-- 迅雷已经用了 10 年，一直把它看作是速度最快也最方便的下载工具，也一直买着迅雷会员。

但，**迅雷堕落了**。

- `thunder:\\` 迅雷专属链接越来越少，下载基本是磁力链接、BT 种子；
- 迅雷会员加速不再给力，大量资源速度为 0（会员虽然还有一年多，但已经没用了）；
- 迅雷关闭旧版功能逼大家升级迅雷 U 享版，但升级后，才发现新版迅雷会强制接收所有下载。
  > 有些小文件，我只想用浏览器直接下载。而一些不想下的链接，也会被迅雷非常敏感的感应到，强制下载，真的真的特别流氓。

## 为什么选择 Aria2？

Aria2 下载比较全能，支持 BT 和磁力链接，性能也相当不错，**速度不比迅雷慢**。

虽然没原生应用界面，配置也麻烦，但这些用懒人包就能轻松解决。

## 真·懒人包

Aria2 真·懒人包无需配置，下载即用，适合不想折腾的人。

真·懒人包：<https://www.seoipo.com/software/Aria2/>

将懒人包解压到 `D:\Aria2`，点击 `AriaNg 启动器.exe` 即可开始下载。两个启动器任选其一，都集成了后端服务和前端 UI，无需启动其他程序。包内均为开源绿色软件，不涉及任何隐私和安装，更没病毒，360 误报拿它没办法。

2022.10.21 重构启动器，更新 Aria2 1.36.0，AriaNG 1.2.5，并增加 bt-tracker 到 143，方便 BT 和磁力链接提速。

功能新增：任务开始、完成和错误时，推送系统通知，aria2.conf 特别功能区块设置通知的开启与关闭，建议来自 @我真的爱发明。

---

如果想从小白进阶，搞清 Aria2 背后设置的话，请往下看配置步骤。

## Aria2 设置

1. 下载 [Aria2 快速设置包](https://aria2c.com/archiver/aria2.zip) 或 [备用链接](https://wwz.lanzouf.com/iROZE0eai3xe)，将其解压到存放文件夹，比如 `D:\Aria2`。

2. 官网下载 [Aria2 程序](https://github.com/aria2/aria2/releases)（Windows 选择 [aria2-1.36.0-win-64bit-build1.zip](https://github.com/aria2/aria2/releases/download/release-1.36.0/aria2-1.36.0-win-64bit-build1.zip)），然后解压到快速设置包的存放文件夹中，替代其中的 `aria2c.exe` 程序。

   ![](http://tc.seoipo.com/20191210232831.png "GitHub 官方仓库下载 Aria2")

3. 点击 `aria2.exe` 启动 aria2，系统托盘区会同步出现应用图标。

4. 参照 [懒人包配置](https://wwz.lanzouf.com/iwv6f0eadq9i) 修改 `aria2.conf`，更多设置参考 [aria2c 官方文档](https://aria2.github.io/manual/en/html/aria2c.html)。^[[Aria2 基础上手指南](https://zhuanlan.zhihu.com/p/30666881)]

   修改默认下载目录：

   ```conf
   # 文件的保存路径 (可使用绝对路径或相对路径), 默认：当前启动位置
   # D:\Download 是我的默认下载目录，可以改为你自己的下载路径
   dir=D:\Download
   ```

   修改服务器默认连接数：

   ```conf
   # 同一服务器连接数，添加时可指定，默认:1
   max-connection-per-server=16
   ```

   开启 BT 下列设置：

   ```conf
   enable-dht=true
   bt-enable-lpd=true
   enable-peer-exchange=true
   ```

   在最后添加 BT trackers，配置列表时重新获取 [最新 trackers 列表](https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_best.txt), tracker 中用 `,` 隔开。

   ```conf
   # bt-tracker 更新，解决 Aria2 BT 下载速度慢没速度的问题
   bt-tracker=udp://tracker.opentrackr.org:1337/announce,udp://9.rarbg.com:2810/announce,udp://tracker.openbittorrent.com:6969/announce,udp://opentracker.i2p.rocks:6969/announce,https://opentracker.i2p.rocks:443/announce,http://tracker.openbittorrent.com:80/announce,udp://tracker.torrent.eu.org:451/announce,udp://open.stealth.si:80/announce,udp://vibe.sleepyinternetfun.xyz:1738/announce,udp://tracker2.dler.org:80/announce,udp://tracker1.bt.moack.co.kr:80/announce,udp://tracker.zemoj.com:6969/announce,udp://tracker.tiny-vps.com:6969/announce,udp://tracker.theoks.net:6969/announce,udp://tracker.publictracker.xyz:6969/announce,udp://tracker.monitorit4.me:6969/announce,udp://tracker.moeking.me:6969/announce,udp://tracker.lelux.fi:6969/announce,udp://tracker.dler.org:6969/announce,udp://tracker.army:6969/announce
   ```

   其他设置不大常用，有时间的话，你可以慢慢调整。

5. Aira2 没有原生应用界面，输入网址 `http://aria2c.com` 使用第三方下载界面。该页面自动与本地的 aira2c 程序关联，实现下载管理，建议把其收藏到书签，方便使用。^[[aria2 懒人安装教程](https://www.appinn.com/aria2-in-windows-setup/)]

如果出现「Aria2 RPC 服务器错误」，检查 JSON-RPC Path 是否为 `http://localhost:6800/jsonrpc`。如果依然报错，则说明 aria2.conf 配置错了，推荐下载 [真·懒人包](https://www.seoipo.com/software/Aria2/)。

## Aria2 进阶

### 更换 Aria2 界面

[AriaNg](https://github.com/mayswind/AriaNg) 和传统下载软件界面类似，使用简单。

![](http://tc.seoipo.com/20180516104758.png "AriaNg 界面")

使用方法：下载并解压 [AriaNg](https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip)，运行目录下的 index.html，打开 Aria2 WebUI 界面，将页面链接收藏到书签，方便后续使用 Aria2。

如果 AriaNg 页面出现报错，则从页面左侧进入 `AriaNg 设置 - RPC`，检查 RPC 地址，默认地址为 `localhost:6800`。

### Aira2 下载预热

Aira2 下载预热是 BT 下载前的必备步骤，否则速度容易很慢。

找个热门影视的 BT 种子 (千万建议是种子，而不是磁力链接)，然后下一波，挂着做种。过几个小时后退出 Aria2，或者等 Aria2 会话自动保存，你会发现 dht.dat 从空文件变成有数据了，这时下载速度就会正常很多。

> 很多 BT 客户端一样，Aria2 有个 dht.dat 文件 (开启 ipv6 还有个 dht6.dat)，这玩意用于存储一种叫做 DHT Routing Table 的东西，DHT 网络由无数节点组成，你接触到一个后能通过它接触到更多的节点，Aria2 我记得是有内置的节点，但是！如果你在 Aria2 第一次运行的时候直接下载磁力链接或者冷门种子，你很可能遇到连 MetaData 都无法获取的情况，这就是因为第一次只是初始化 dht.dat 文件，你本地不存在 DHT Routing Table 的缓存，所以你无法从 DHT 网络中获取足够的数据。^[[解决 Aria2 BT 下载速度慢没速度的问题](http://www.senra.me/solutions-to-aria2-bt-metalink-download-slowly/)]

### 接管浏览器下载

如果想用 Aria2 接管浏览器的下载管理，需安装插件扩展。

- Chrome：[添加到 aria2](https://chrome.google.com/webstore/detail/nimeojfecmndgolmlmjghjmbpdkhhogl)，也可以从 [国内搬运地址](https://wwi.lanzoui.com/i4Fmeetsdaj) 下载，懒人包已内置该扩展。
  有的 Chrome 浏览器无法直接安装 `.crx` 格式的扩展，需将文件解压到新文件夹「xxx」，然后在浏览器地址栏输入 `chrome://extensions/` 开启开发者模式，点击加载已解压的扩展程序，选中刚才解压的文件夹「xxx」。
- Firefox：[Aria2 Download Manager Integration](https://addons.mozilla.org/en-US/firefox/addon/aria2-integration/)，配置可参考下方的 Chrome 扩展设置。

扩展「添加到 aria2」安装好后，右键扩展图标，点击 `选项 - 设置`，设置如下：

- 最小监视：`10` M，低于该容量将由浏览器下载。如果 Aria2 要接手所有下载，可以将最小监视设为 `0.001`。
- JSON-RPC 链接：`http://localhost:6800/jsonrpc`。

注意：「添加到 aria2」图标显示 `en` 方为开启状态，`dis` 为关闭状态，点击图标可以切换使用状态。

## Aria2 启动器

每次启动 Aria2 下载，总要执行两次，打开 WebUI 链接和 aria2c 两个文件，比较麻烦。因此，我用 AutoHotKey 做了个启动器，可以检测 aria2c 运行状态并一键打开下载界面，简化 Aria 启动。

下载 [Aria2 启动器](https://wwz.lanzouf.com/iqud50ebl06d)，然后将其解压到 Aria2 运行目录，比如 `D:\Aria2`。Aria2 启动器包含两种方式，二选一即可。

- **AriaNg 启动器**（推荐）：使用 AriaNg 本地版作下载管理界面。使用该启动器前，需将 [AriaNg](https://github.com/mayswind/AriaNg-DailyBuild/archive/master.zip) 解压到 Aria2 目录下，并将文件夹名改为 AriaNg，执行页面 index.html 位于 `Aria2\AriaNg\index.html`。
- **Aria2c 启动器**：将 `http://aria2c.com` 作为默认下载界面，不需要多余设置。 -->
