---
Title: 有關 NX
Date: 2022-09-02 11:00
Category: NX
Tags: Siemens, cad2022
Slug: about-nx
Author: mdecycu
---

這裡將收集與 NX 有關的資料內容. Siemens NX 在 2022.09.01 釋出最新版本為 NX2206.4020, 幾乎同步釋出的 NX2027 最新版本則為 build 3401. cd2022 電腦輔助設計與實習將使用 NX2027.3401 可攜版本.

<!-- PELICAN_END_SUMMARY -->

Recent Opened Files
----

啟動 NX 時將 HOME 以及 UGII_TMP_DIR 設定至 Temp 子目錄後, Recent Opened Files 資料會存入 Temp 目錄, 當 NX 啟動後, 會將資料轉存至 電腦\HKEY_CURRENT_USER\SOFTWARE\Unigraphics Solutions\NX\2027\General\Parts\Recent, 若希望刪除此類資料, 則必須在重新啟動 NX 之前, 分別刪除 Temp 目錄下的所有檔案, 並以 regedit 進入將 Recent 項目下的 Native 機碼刪除.

以下為啟動 NX 時所設定的環境變數:

<pre class="brush: jscript">
set HOME=%cd%\Temp
set UGII_TMP_DIR=%cd%\Temp\
</pre>

NX 繪圖與組立
----

基本的 NX2027.3401 繪圖與組立, 只需要下列目錄:

<pre class="brush: jscript">
DESIGNSPACEEXPLORER : 7.31 KB
DESIGN_TOOLS : 275.8 MB
DIAGRAMCORE : 5.81 MB
DIAGRAMMING : 64.65 MB
DRAFTING : 123.65 MB
DXFDWG : 206.79 MB
IGES : 5.2 MB
INSTALL : 55.55 KB
MECHATRONICS : 212.81 MB
NXASSEMBLY : 120.98 MB
NXBIN : 5.07 GB
NXPARTS : 53.76 MB
STEP203UG : 1.28 MB
STEP214UG : 1.27 MB
temp : 0B
TRANSLATORS : 157.87 MB
UGFLEXLM : 29.4 MB
UGII : 677.93 MB
UGMANAGER : 117.29 MB
UGOPEN : 425.32 MB
UGOPENPP : 567.28 KB
UNFOLD : 71.92 KB
total: 7.49 GB
</pre>

<h1 id="siemenssupportcenter">Siemens Support Center</h1>

從 <https://support.sw.siemens.com/en-US/> 下載檔案後, 可以利用 certutil 工具驗證檔案.

驗證下載檔案:

使用工具: <https://docs.microsoft.com/zh-tw/windows-server/administration/windows-commands/certutil>

指令: certutil -hashfile SiemensNX-2027.3401_wntx64.zip SHA512

SHA512 hash: f180a6c97b9599af0bc6068d344eeb8ea065f79648f64fea9c782fd41e00e430e04aad85c0d09705071c60ea9493c9e75f39e8bf0f22660c3dcb6cbc7819274a

<h1 id="portablenx">Portable NX</h1>

在 Windows 10 配置可攜 NX2027.3401 程式, 需要:

<https://github.com/Bioruebe/UniExtract2>

<https://github.com/wixtoolset/wix3/releases/tag/wix3112rtm>

等兩項工具, UniExtract2 用來解開 SiemensNX-2027_wntx64\nx\SiemensNX.msi, 以及 .msi, 而 wix 則用來解開 SiemensNX-2027_wntx64\nx\VC_redist.x64.exe, 指令為:

wix311-binaries\dark.exe vc_redist.x64.exe -x x64-extracted

表示要在 x64-extracted 目錄中取得 x64-extracted\AttachedContainer\packages\vcRuntimeMinimum_amd64\vc_runtimeMinimum_x64.msi 之後, 再利用 UniExtract2 解開所需的 dll 檔案後, 再放入 NXBIN 目錄.

製作 Portable NX2207 的步驟請參考以下影片(以 NX1980 為例):

解開 SiemensNX.msi 合計得到 151803 個檔案, 而將 VC_redist.x64.exe 解開後的 52 個 dll 檔案放入 NXBIN 目錄中.

<script>
var winkVideoData = {
  dataVersion: 1,
  frameRate: 10,
  buttonFrameLength: 5,
  buttonFrameOffset: 2,
  frameStops: {
  },
};
</script>
</p>
<!-- 接下來將 mp4 檔案從 downloads 目錄取出 -->
<div class="winkVideoContainerClass"><video autoplay="autoplay" class="winkVideoClass" controls="controls" data-dirname="./../cmsimde/static" data-varname="winkVideoData" height="630" muted="true" width="1008">
<source src="./../downloads/w5_portable_nx1980.mp4" type="video/mp4"/></video></div>
<br />

完成 NX2027.3401 可攜系統製作後, 各目錄檔案容量如下:

<pre class="brush: jscript">
AUTOMATED_TESTING : 1.52 MB
AUTOMATION_DESIGNER : 254.08 MB
CAPITALINTEGRATION : 2.04 MB
CATIAV5 : 784.01 KB
CLOUDDM : 31.07 KB
CMM_INSPECTION : 143.31 MB
DESIGNSPACEEXPLORER : 7.31 KB
DESIGN_TOOLS : 275.8 MB
DIAGRAMCORE : 5.81 MB
DIAGRAMMING : 64.65 MB
DRAFTING : 123.65 MB
DXFDWG : 206.79 MB
IGES : 5.2 MB
INSTALL : 55.55 KB
LOCALIZATION : 1.09 GB
MACH : 1.96 GB
MANUFACTURING_PLANNING : 141.66 MB
MBD : 54.05 MB
MECH : 793.28 MB
MECHATRONICS : 212.81 MB
MENDIXREPORTING : 1.04 MB
MOLDCOOLING : 12.28 KB
MOLDWIZARD : 226.71 MB
MPA : 1.5 MB
NXAECDESIGN : 15.48 KB
NXASSEMBLY : 120.98 MB
NXBIN : 5.04 GB
NXCABLEROUTER : 190.45 KB
NXCAE_EXTRAS : 2.36 GB
NXCOATINGS : 645.3 KB
NXCREO : 6.17 MB
NXHUMAN : 247.51 MB
NXJOIN : 16.38 MB
NXNASTRAN : 2.93 GB
NXPARTS : 53.76 MB
NXPLOT : 151.34 MB
NXPROE : 6.17 MB
NXREPORTS : 9.42 MB
NXSHIP : 359.0 MB
NXSTRUCTUREDESIGN : 106.47 MB
NXVR : 441.53 MB
NX_VSA : 13.88 MB
OCCUPANTSAFETY : 514.74 MB
POSTBUILD : 37.65 MB
PSTUDIO : 35.5 MB
PVTRANS : 102.46 KB
REL_INFO : 36.92 KB
ROUTING : 315.47 MB
RULE : 316.7 KB
SIMULATION : 4.19 GB
STAGE_MODEL : 3.53 MB
STAMPING_TOOLS : 77.06 MB
STEP203UG : 1.28 MB
STEP214UG : 1.27 MB
TDP : 237.62 MB
TOOLING_BASE : 970.0 KB
TRANSLATORS : 157.87 MB
UGALLIANCE : 82.9 KB
UGAUTOMOTIVE : 99.41 MB
UGCATIA : 6.53 MB
UGFLEXLM : 29.4 MB
UGFPCD : 35.19 KB
UGII : 677.93 MB
UGIMW : 8.45 MB
UGMANAGER : 117.29 MB
UGOPEN : 425.32 MB
UGOPENPP : 567.28 KB
UGPCBX : 3.42 MB
UGPCBXCHANGE : 90.23 MB
UGPHOTO : 2.98 GB
UGSTRUCTURES : 735.35 MB
UGSTUDIO : 14.03 MB
UGTIPS : 278.35 MB
UGTO2D : 911.38 KB
UGWEB : 9.08 MB
UGWELD : 2.07 MB
UNFOLD : 71.92 KB
VDA : 25.44 KB
VDV : 13.11 KB
total: 28.29 GB
</pre>

請注意: 新版 NX 所建立的零組件無法由舊版的 NX 開啟.

下載 [NX12.0.2.9_lite_cad2022.7z] (for @gm users only, 1.20 GB, 解開後 6.24 GB) / 下載 [NX12.0.2.9_lite_cad2022 for @nfu])

下載 [NX2027.3401_lite_cad2022.7z] (for @gm users only, 1.97 GB, 解開後 7.49 GB) / 下載 [NX2027.3401_lite_cad2022.7z for @nfu]

下載 [NX2027.3401_cad2022.7z] (for @gm users only, 8.02 GB, 解開後 28.32 GB) / 下載 [NX2027.3401_cad2022.7z for @nfu]

下載 [NX2007_documentation.7z] (for @gm users only, 2.18 GB, 解開後 2.86 GB) / [NX2007_documentation.7z for @nfu], 使用時執行 start_static.py 後, 以瀏覽器 http://localhost:7443 開啟, 或直接在 <http://c1.cycu.org:88> 開啟. 

[NX12.0.2.9_lite_cad2022.7z]: https://gmnfuedutw-my.sharepoint.com/:u:/g/personal/yen_gm_nfu_edu_tw/Eb7GeAUGMANEkijnWXGNH60BltYzKwkkffas3JhzgwnmxQ?e=K4HKXF
[NX12.0.2.9_lite_cad2022 for @nfu]: https://nfuedu-my.sharepoint.com/:u:/g/personal/yen_nfu_edu_tw/EUyA1JH9PsVHjjiZ_3a_voUBZQPSNugB5q2y-iAFVHtCgg?e=qTsfXz
[NX2027.3401_lite_cad2022.7z]: https://gmnfuedutw-my.sharepoint.com/:u:/g/personal/yen_gm_nfu_edu_tw/EfvS63_7udVPhe-xlXrYPCMBVTUEEona5_QXwHdZD_8Vww?e=LNczOS
[NX2027.3401_lite_cad2022.7z for @nfu]: https://nfuedu-my.sharepoint.com/:u:/g/personal/yen_nfu_edu_tw/EW0eW8fnq2lAtCNHD6r6zqQBeJ-eqkROCzE7RpBM9-PCmw?e=rq94Li
[NX2027.3401_cad2022.7z]: https://gmnfuedutw-my.sharepoint.com/:u:/g/personal/yen_gm_nfu_edu_tw/EfC-9gy1PN9MmJtpD9VO5KcB3kehP6VVVgmQt3ej5D_BIQ?e=deXuWs
[NX2027.3401_cad2022.7z for @nfu]: https://nfuedu-my.sharepoint.com/:u:/g/personal/yen_nfu_edu_tw/EfZUTNYTlMVFgkGd00cs3JkBKCfgzukXFn5U1ikAdwHBXw?e=55tjsp
[NX2007_documentation.7z]: https://gmnfuedutw-my.sharepoint.com/:u:/g/personal/yen_gm_nfu_edu_tw/EU-fmibMpBZKg2ZiXmBlK-oBQj7wLV5YeMGI8rCI60NhmQ?e=EuxlyD
[NX2007_documentation.7z for @nfu]: https://nfuedu-my.sharepoint.com/:u:/g/personal/yen_nfu_edu_tw/EVx4Xf0IaSZBsD4KyEp6584BKbFINFRXAqViqnX5qhfOkg?e=TZ7AyT

<h1 id="nx2007doc">NX2007 Documentation</h1>

2022.09 <https://support.sw.siemens.com/en-US/> 只提供 NX2206 與 NX2007 的 Documentation, 這裡將採用 NX2007 的英文手冊.

下載 [NX2007_documentation.7z] (for @gm users only, 2.18 GB, 解開後 2.86 GB), 使用時執行 start_static.py 後, 以瀏覽器 http://localhost:7443 開啟. 也可以透過 <http://c1.cycu.org:88> 查看內容.

線上 [NX2007 EN Documentation]

滑鼠
====

LMB - 滑鼠左鍵, 一般元件選擇, 可以連續使用滑鼠左鍵選擇多個元件

Shitf + LMB - 可以去除利用滑鼠左鍵已經選擇的元件

RMB - 滑鼠右鍵, 在視圖空白按住滑鼠右鍵, 可以帶出相關 menu

MMB - 滑鼠中鍵, 單擊表示 confirm 確認, 按住中鍵移動則可以旋轉觀測視圖 (rotate), 前後滑動中鍵則可放大縮小觀測視圖 (zoom in or out)

MMB + RMB - 同時按住滑鼠中鍵與右鍵後移動, 可以平移觀測視圖 (pan), 相同功能也可以同時按住 Shift 與滑鼠中鍵後移動滑鼠, 以執行 pan 動作

ESC - 取消

F4 - 帶出上一個執行功能

F6 - Zoom, 以滑鼠左鍵在視圖中選擇放大的區域

F7 - Rotate, 進入此功能後, 可以使用任一滑鼠鍵移動, 執行旋轉視圖功能

F8 - Snap view, 轉到與目前視圖最接近的正向視圖

Ctrl + f - Fit

Ctrl + l - Layer Settings

Layers
====

NX 提供 256 個圖層 (Layers)

layers objects

1 - 20 solids

21 - 40 sketches

41 - 60 curves

61 - 80 reference elements

81 - 100 faces

101 - 120 PMI

Ctrl + l - Layer Settings









