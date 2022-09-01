var tipuesearch = {"pages":[{"title":"About","text":"mde.tw 課程倉儲: https://github.com/mdecycu/mdecycu.github.io 內容管理: https://mde.tw/ 課程投影片: https://mde.tw/reveal 課程網誌: https://mde.tw/blog","tags":"misc","url":"https://mde.tw/blog/pages/about/"},{"title":"cp2022_w1","text":"計算機程式課程第一週, 只有 1b 有課, 1a 因為中秋節放假. 電腦系統 目前電腦輔助設計室中絕大部分的電腦都只有一個磁區 (假如有三個磁區的電腦是上一代的舊電腦), 使用的操作系統是 Windows 10, 因為系上有四門課程在電腦輔助設計室上課時, 採用的是純 IPv6 網路連線, 因此各位學員在接觸到計算機程式課程時, 必須學會設定電腦系統的網路連線. IPv4 與 IPv6 IPv4 與 IPv6 是兩種不相容的網路協定. 目前除了計算機程式課程, 還有網際內容管理、電腦輔助設計與實習以及協同產品設計實習等課程, 上課時都將電腦輔助設計室的連外網路直接與系上主幹連接. 目的是希望擴大每一台電腦的網路頻寬, 可以無需透過 NAT 轉址後再連接到系上. 但是這樣做, 所要付出的代價是, 首先, 每一台電腦都直接以 IPv6 外部網路位址與網際網路相通, 若此時電腦中的 IPv4 也同時開啟的話, 安裝在操作系統中的某些軟體會以為已經取得 IPv4 的外部網路位址 (其實並沒有, 因此系上已經沒有額外的外部 IPv4 網路位址), 而啟動網路攻擊. 因而導致操作系統所安裝的防毒軟體作動, 關閉電腦的所有對外網路連線, 亦即, 當電腦輔助設計室網路線直接連到主幹時, 要設法關閉 IPv4 網路連線, 否則無法使用網路. 其次, IPv6 網路協定雖然已經逐漸普及, 但目前仍有許多網站只支援 IPv4 網路協定, 因此在純 IPv6 網路設定下, 若要連接至某些只支援 IPv4 的電腦或網站, 必須透過代理主機. 學習議題 為什麼會有 IPv4 與 IPv6 兩種網路協定並存? 上計算機程式課程時, 當使用瀏覽器與執行 git 指令時, 該如何正確設定網路協定? 線上學習 Brython 當你完成電腦輔助設計室中的[網路設定]後, 就可以利用瀏覽器連線到[這裡], 直接在線上學習 [Brython].","tags":"cp2022","url":"https://mde.tw/blog/cp2022-w1.html"},{"title":"有關 TCExam","text":"這裡將收集與 TCExam 有關的資料內容. 虛擬主機上的 TCExam 相關程式檔案放在 c:\\tcexam, 管理者帳號設為 tcexam. 啟動 exam.網域.名稱, 牽涉 nginx, php, pgsql 以及 tcexam 程式原始碼. nginx 主要負責將 http 跳轉至 https, 並且透過 fastcgi 啟動 php 解譯器的執行. 而 nginx 的 server 設定範例如下: server { listen 98 ssl; listen [::]:98 ssl; root c:/tmp/TCExam; server_name exam.網域.名稱; ssl_certificate C:/pj2022/stunnel/config/fullchain.pem; ssl_certificate_key C:/pj2022/stunnel/config/privkey.pem; ssl_protocols TLSv1 TLSv1.1 TLSv1.2; ssl_ciphers HIGH:!aNULL:!MD5; location /{ index index.html index.php; } location ~ \\.php$ { fastcgi_pass 127.0.0.1:9123; fastcgi_index index.php; fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name; include fastcgi_params; } } pgsql 以手動 start.bat 啟動, 設定檔案如下: @echo off set /p DATA= 其中的 PGDATA.txt 內容為 .\\data, 表示資料庫內容存在 .\\data 目錄中. 一旦考試結束後, 以 stop.bat 關閉 pgsql: @echo off set /p DATA= TCExam 原始碼 ==== 由於目前所啟動的線上 TCExam 採用 2022.06.9 釋出的 PHP 8.1.7 版, 而 最近修改日期為 2021.08.05, 因此直接從 TCExam github 網站 clone 下來的原始碼無法在最新版的 PHP 解譯環境中執行. 因此啟動修改 TCExam, 令其可以在 PHP 8.1.7 中執行, 且 pdf 轉檔的部分, 也自行建立中文字型, 以便正確將考試內容轉為中英並存的格式. 目前尚未完成的設定為 send mail 的部分. 總結上述說明, 要啟動 TCExam 考試系統, 必須確認 nginx 已經啟動, 然後手動執行 pgsql 目錄下的 start.bat, 並且注意 c:\\certbot 目錄下有關 https 數位簽章每 90 天必須設法手動或自動更新.","tags":"tcexam","url":"https://mde.tw/blog/about-tcexam.html"},{"title":"Windows 常用指令","text":"根據使用情境將常用的 Windows 指令加以整理. 密碼最長使用期限 Windows 10 密碼最長使用期限 內定為 42 天, 假如此一設定對使用者造成困擾, 可以從系統管理者執行的 cmd 中, 輸入 secpol.msc 開啟 本機安全性設定 , 開啟\"帳戶原則\"中的\"密碼原則\", 然後將\"密碼最長使用期限\"從內定的 42 天改為 0, 表示密碼永不過期.","tags":"windows","url":"https://mde.tw/blog/useful-windows-commands.html"},{"title":"Git 常用指令","text":"根據使用情境將常用的 git 指令加以整理. remote add git remote add 的使用情境是希望將某一個倉儲的完整歷程資料, 改存至另一個倉儲. 假設原來的 cad2021_final 倉儲位於 mdecourse 帳號下, 現在想要將此倉儲的完整歷程資料, 轉存至 mdecycu 帳號下. 先前準備: 要先在近端電腦設定好 mdecourse 與 mdecycu 對 git 的 SSH 公私鑰簽章設定 . 且 mdecourse 對應的 putty session 為 github.com, 而 mdecycu 對應的 putty session 為 mdecycu. 步驟一: 登入 github.com mdecycu 帳號, 建立一個空的 cad2021_final 倉儲, 也就是連 README.md 都先不加入的完全空的倉儲. 步驟二: 將 cad2021_final 從 mdecycu 帳號下, git clone 至近端電腦. git clone --recurse-submodules git@github.com:mdecourse/cad2021_final.git 因為 cad2021_final 倉儲在 mdecourse 帳號下設為 private, 因此需要透過 putty session github.com, 利用近端的 puttygen 所建立的 .ppk private key 與 github 上 OpenSSL 格式的 public 對應下, 才能夠透過 ssh 協定取下 cad2021_final 倉儲. 步驟三: cd 至 cad2021_final 倉儲目錄, 以 git remote add 設定代號, 並對應至 mdecycu 帳號下的同名倉儲. git remote add mdecycu git@mdecycu:mdecycu/cad2021_final.git 其中的 git remote add 為指令, 表示要加入一個遠端的連結代號, 而此代號名稱為 mdecycu, 隨後的 git@ 表示要利用 ssh 協定, 以 git 作為登入帳號, @ 後面的 mdecycu 為近端 putty 的 session 名稱, 而 :mdecycu 中的 mdecycu 則是 github 系統下的 mdecycu 帳號用戶名稱, /cad2021_final.git 則為先前已經建立的空倉儲. 步驟四: 將 cad2021_final 倉儲內容, 以 git push 推送到 mdecycu 帳號下. git push mdecycu recurse-submodules 當使用 git clone 倉儲時, 之所以要宣告 --recurse-submodules 選項命令, 是針對該倉儲的所有子模組, 包括子模組下的所有子模組, 也要同時取下. submodule add git submodule add 隨後要加入 URL 指向某一倉儲, 表示要將該倉儲設為子模組, 然後指令還要再加上該子模組連結的對應代號. git submodule add https://github.com/mdecycu/cmsimde.git cmsimde 表示要將 cmsimde 倉儲設為子模組, 且放入 cmsimde 目錄中.","tags":"git","url":"https://mde.tw/blog/useful-git-commands.html"},{"title":"有關 Fossil SCM","text":"Fossil SCM 是一套 Software Configuration Management 套件, 專門用於 SQLite 的原始碼管理. Fossil SCM 是一套冷門的系統, 感覺好像沒有太多單位或團體使用, 只是就分散式版次管理系統的角度來看, 其實是一套小而美且功能齊全的 SCM 系統, 接下來將對 Fossil SCM 進行初步介紹. fossil init 起始一個 Fossil SCM 倉儲之前需要先從 https://fossil-scm.org/home/uv/download.html 下載相應的檔案, 與 Portablegit 相比, Fossil SCM 工具無論在 Windows, Linux 或 Mac 操作系統, 都只有一個檔案, 且大小只有約 9MB. 而起始 Fossil SCM 倉儲的指令與 Git 相同: fossil init 只不過 Fossil SCM 在倉儲 clone 之後的檔案為一個壓縮檔案, 通常以 .fossil 作為副檔名, 其實這是一個 SQLite 資料庫檔案. 當使用者 clone Fossil SCM 倉儲至近端之後, 必須透過 fossil open 將最新的版本內容展開, 一般會建議, 擺放 .fossil 檔案的目錄中, 建立 working director 目錄, 建議命名為 wd, 然後在 wd 目錄之中, 再根據各倉儲檔案的名稱建立位於 wd 目錄下的子目錄, 而各 .fossil 倉儲的內容則在各自的 \"wd\\倉儲名稱\" 目錄下展開. 假如要將遠端的倉儲 clone 至遠端, 若採 https 協定, 其命令列語法為: fossil clone https://user_name@fossil.kmol.info/repository repository.fossil 表示要將位於 fossil.kmol.info 主機上的 repository 倉儲, 以 https 協定 clone 至近端且存為 repository.fossil 以一位於近端檔案架構的 repository.fossil 本身會帶有管理者的密碼設定, 而此一管理者帳號下對應的 local password 與 remote passwors 分屬於兩個不同的 repository.fossil, 當使用者要將近端改版資料推向遠端時, 依據的是遠端的管理者 passwors, 而近端的管理者密碼則在近端倉儲以 fossil web 進行網際啟動時之用. 換言之, 各個 Fossil SCM 倉儲壓縮檔案內所儲存的管理者帳號密碼, 主針對下游啟動服務時採用. 至於在工作目錄下倉儲資料檔案中的改版資料, 一旦新增提交推送後, 不僅會將版本更新資料註記在近端對應的 .fossil 檔案中, 也會推向遠端對應的 .fossil 倉儲檔案. Fossil SCM project documentation: https://www.fossil-scm.org/home/doc/trunk/www/embeddeddoc.wiki Fossil SCM unversioned content: https://www.fossil-scm.org/home/doc/trunk/www/unvers.wiki 在 Fossil SCM 倉儲中, 所謂的 unversioned content 指在改版紀錄中沒有保留改版資料的檔案, 倉儲中的 unversioned 內容只保留最新的版本, 且可以透過網際 /uvlist 列出無改版歷程的檔案列表, 並能透過網際 /uv/檔案名稱 進行下載. Fossil SCM 中的帳號必須具備 y capabilities 的權限才能 fossil uv sync -v 對倉儲中先前所加入的無版本檔案送到倉儲資料中. Fossil SCM 中的帳號最高管理者必須具備 s capabilities (setup 權限). Fossil SCM 倉儲改版時若刪除檔案, 則可以透過 fossil addremove 納入改版內容. 將 uversioned_file_name 納入或移除倉儲中成為無版本管理內容: fossil uv add unversioned_file_name fossil uv delete unversioned_file_name fossil uv sync -v 其他參考資料: https://fossil-scm.org/home/help?cmd=unversioned Fossil SCM 使用案例 Fossil SCM 與 Github 整合 Fossil SCM on Ubuntu","tags":"fossil-scm","url":"https://mde.tw/blog/about-fossil-scm.html"},{"title":"有關 ethercalc","text":"ethercalc 是一個網頁同步試算表. 有關 ethercalc 若 ethercalc 與 redis 合用, sheet 資料將會存入 /var/lib/redis/dump.rdb, 此一檔案儲存設定位於 /etc/redis/redis.conf 中的 dbfilename dump.rdb 使用者若要以 root 身分檢視 /var/lib/redis/dump.rdb 可以透過 sudo -s 以 root 身分執行命令. 若以 /etc/init.d/redis-server stop 關閉 redis, 然後執行 ethercalc, sheet 資料將會存在執行命令目錄下的 dump 目錄中. 在結合 redis 使用下的 ethercalc, 若希望 reset /var/lib/redis/dump.rdb 中的資料: sudo -s /etc/init.d/redis-server stop rm /var/lib/redis/dump.rdb /etc/init.d/redis-server start ethercalc 則 /var/lib/redis/dump.rdb 中為空資料.","tags":"ethercalc","url":"https://mde.tw/blog/about-ethercalc.html"},{"title":"編譯 Solvespace","text":"這裡將利用 MSYS2 編譯 Solvespace . 上列影片採用 MSYS2 編譯 Solvespace 原始碼. MSYS2 套件中名稱帶有 mingw-w64-x86_64 表示用於 MinGW 64 bit 操作系統 更新系統核心組件: pacman -Syu 安裝基本 C/C++ 編譯與開發工具: pacman -S mingw-w64-x86_64-toolchain 安裝 CMake: pacman -S mingw-w64-x86_64-cmake 編譯之前必須 rename Y:\\msys64\\usr\\bin\\sh.exe 接著就是 build solvespace.exe 以 git clone --recurse-submodules https://github.com/solvespace/solvespace.git 取下原始碼與子模組. 接下來進入倉儲後執行編譯: cd solvespace mkdir build cd build cmake .. -G \"MinGW Makefiles\" -DCMAKE_BUILD_TYPE=Release mingw32-make cd bin solvespace.exe 即可執行. 編譯結束後, 之所以可以直接執行 solvespace.exe 是由於先前已經在啟動可攜程式系統時設定 set path_msys2=%Disk%:\\msys64_20210419\\mingw64\\bin; 且將 path_msys2 納入 path 命令搜尋路徑中, 因此可以直接以命令列執行 solvespace.exe, 但是若要讓 solvespace.exe 獨立執行, 則需要 libwinpthread-1.dll to execute solvespace.exe 編譯 Range3 為了 compile Range3 , MSYS2 除了mingw-w64-x86_64-toolchain 還必須加裝: pacman -Sy mingw-w64-x86_64-qt5 pacman -Sy mingw-w64-x86_64-qt5-static pacman -Sy mingw-w64-x86_64-ffmpeg 接著編譯 Range3 : start Y:\\msys64\\mingw64.exe cd /y/tmp/range3 ./scripts/build.sh --clean && ./scripts/create_package.sh 而為了讓 svg 格式的 icons 能夠正確顯示, 必須納入 Qt5Svg.dll","tags":"compilation","url":"https://mde.tw/blog/compile-solvespace.html"},{"title":"編譯 CoppeliaSim 4.3.0 rev12","text":"CoppeliaSim 採用 C++ 與 Qt 編寫, 安裝系統則利用 QSetup 建立. 這裡希望編譯的是 CoppeliaSim 原始碼中的 CoppeliaSimLib 第 4.3.0 rev12 版, 是由 448 個 .cpp 編譯連結而成 coppeliaSim.dll, 檔案大小約為 9538 KB, 是 CoppeliaSim 套件中最重要的核心程式庫 . config.pri CoppeliaSim 自 4.2.0 版之後, 所使用的 Lua 從 5.1 升級為 5.3 , 配合設定的 config.pri 也必須修改如下: # location of boost headers: BOOST_INCLUDEPATH = \"Y:/msys64_20210419/mingw64/include/boost\" # location of lua headers: LUA_INCLUDEPATH = \"Y:/lua-5.3.5/src\" # lua libraries to link: LUA_LIBS = \"y:/lua-5.3.5/src/liblua.a\" # qscintilla location: QSCINTILLA_DIR = \"y:/QScintilla_gpl-2.11.2\" # qscintilla headers: QSCINTILLA_INCLUDEPATH = \"$${QSCINTILLA_DIR}/include\" \"$${QSCINTILLA_DIR}/Qt4Qt5\" # qscintilla libraries to link: QSCINTILLA_LIBS = \"$${QSCINTILLA_DIR}/libqscintilla2_qt5.dll.a\" # Make sure if a config.pri is found one level above, that it will be used instead of this one: exists(../config.pri) { include(../config.pri) } 由上列 config.pri 設定檔案可以得知, 編譯 CoppeliaSimLib 之前, 必須要先編譯 lua-5.3.5 與 QScintilla_gpl-2.11.2, 分別取得對應的程式庫之後, 再編譯 CoppeliaSimLib. 編譯 Lua 5.3.5 Y:\\lua-5.3.5>mingw32-make mingw 可以建立 y:/lua-5.3.5/src/liblua.a 編譯 QScintilla Location: Y:\\QScintilla_gpl-2.11.2 Compile: cd Qt4Qt5 qmake -o Makefile qscintilla.pro mingw32-make to get libqscintilla2_qt5.dll.a under release directory 編譯 CoppeliaSimLib config.pri 設定修改完成後, 執行 C:\\acc_430_12\\CoppeliaSimLib>qmake -o Makefile coppeliaSimLib.pro 接著執行 C:\\acc_430_12\\CoppeliaSimLib>mingw32-make -f Makefile.Release 編譯結束後, 可以在 Release 目錄中建立 coppeliaSim.dll, 這是 CoppeliaSim 的主要動態連結程式庫. 下載可攜編譯系統: compile_copsim_cd2022.7z (for @gm users only) 下載已經完成 CoppeliaSimLib 編譯的檔案: acc_430_12_compile_Lib.7z (for @gm users only) 下載啟動 coppeliasim.exe 所需的 dlls 檔案: dlls_for_coppeliasimlib_430_12.7z (for @gm users only) 編譯 coppeliaSimClientApplication coppeliaSimClientApplication 是呼叫 CoppeliaSimLib 動態連結程式庫的客戶端應用程式. 編譯時必須位於 programming 目錄中: C:\\acc_430_12\\programming>git clone --recurse-submodules https://github.com/CoppeliaRobotics/coppeliaSimClientApplication.git Cloning into 'coppeliaSimClientApplication'... remote: Enumerating objects: 170, done. remote: Counting objects: 100% (6/6), done. remote: Compressing objects: 100% (5/5), done. Receiving objects: 86% (145/170)sed 4 (delta 1), pack-reused 164eceiving objects: 82% (140/1 Receiving objects: 100% (170/170), 32.92 KiB | 2.99 MiB/s, done. Resolving deltas: 100% (100/100), done. C:\\acc_430_12\\programming>cd coppeliasimclientapplication C:\\acc_430_12\\programming\\coppeliaSimClientApplication>git checkout coppeliasim-v4.3.0-rev12 Note: switching to 'coppeliasim-v4.3.0-rev12'. You are in 'detached HEAD' state. You can look around, make experimental changes and commit them, and you can discard any commits you make in this state without impacting any branches by switching back to a branch. If you want to create a new branch to retain commits you create, you may do so (now or later) by using -c with the switch command. Example: git switch -c Or undo this operation with: git switch - Turn off this advice by setting config variable advice.detachedHead to false HEAD is now at 306a6c1 updated copyright C:\\acc_430_12\\programming\\coppeliaSimClientApplication> 將 C:\\acc_430_12\\programming\\coppeliaSimClientApplication\\config.pri 修改為: # lua libraries to link: LUA_LIBS = \"y:/lua-5.3.5/src/liblua.a\" # location of lua headers: LUA_INCLUDEPATH = \"Y:/lua-5.3.5/src\" exists(../config.pri) { include(../config.pri) } 而在建立 coppeliaSim.exe 之前, 需要再編輯 coppeliaSim_resource.rc 檔案, 下載 coppeliaSim.ico, 並且開啟 coppeliaSim.pro 中第 42 行 RC_ICONS += coppeliaSim.ico 設定, 以便將 coppeliaSim.ico 圖像編譯後放入 coppeliaSim.exe, coppeliaSim_resource.rc 設定內容如下: #include IDI_ICON1 ICON DISCARDABLE \"C:/acc_430_12/programming/coppeliaSimClientApplication/coppeliaSim.ico\" VS_VERSION_INFO VERSIONINFO FILEVERSION 0,0,0,0 PRODUCTVERSION 0,0,0,0 FILEFLAGSMASK 0x3fL #ifdef _DEBUG FILEFLAGS VS_FF_DEBUG #else FILEFLAGS 0x0L #endif FILEOS VOS__WINDOWS32 FILETYPE VFT_DLL FILESUBTYPE 0x0L BEGIN BLOCK \"StringFileInfo\" BEGIN BLOCK \"040904b0\" BEGIN VALUE \"CompanyName\", \"\\0\" VALUE \"FileDescription\", \"\\0\" VALUE \"FileVersion\", \"0.0.0.0\\0\" VALUE \"LegalCopyright\", \"\\0\" VALUE \"OriginalFilename\", \"coppeliaSim.exe\\0\" VALUE \"ProductName\", \"coppeliaSim\\0\" VALUE \"ProductVersion\", \"0.0.0.0\\0\" END END BLOCK \"VarFileInfo\" BEGIN VALUE \"Translation\", 0x0409, 1200 END END /* End of Version info */ 接下來就可以利用 qmake 建立 Makefile.Release, 並利用 mingw32-make 建立 coppeliaSim.exe C:\\acc_430_12\\programming\\coppeliaSimClientApplication>qmake -o Makefile coppeliaSim.pro C:\\acc_430_12\\programming\\coppeliaSimClientApplication>mingw32-make -f Makefile.Release 可以在 release 目錄中取得 coppeliaSim.exe 編譯 simExtDynamics C:\\acc_430_12\\programming\\simExtDynamics\\build>cmake .. -G \"MinGW Makefiles\" -DCMAKE_BUILD_TYPE=Release 再執行: Y:\\tmp\\cop410\\programming\\simExtUI\\build>mingw32-make","tags":"compilation","url":"https://mde.tw/blog/compile-coppeliasim-4.3.0-rev12.html"},{"title":"電腦輔助設計室系統更新","text":"今天收到通知, 電腦輔助設計室下週要重新更新套件, 管理員問我說: 內容需要更新嗎? 我的回答是: 不用, 只要 Windows 操作系統能正常運作就行, 所有上課的套件都使用可攜模式. Hybrid 模式 雖然記不得是從何時開始在上課採用可攜套件模式, 但 2004 導入 NX3 時就已經採用 Portable 架構, 將程式存入隨身碟, 以 start.bat 啟動, 以 stop.bat 關閉, 所有與個人工作有關的資料與設定都可隨身帶走, 就好像擁有一台虛擬的筆電一樣, 唯一的缺點就是 USB 隨身碟的讀取速度沒有目前 Solid State 硬碟快, 因此從上學期電腦更新後, 就一直採用 Hybrid 的模式啟動套件. 2022 Fall 將所使用的 Hybrid 套件可以從 drive.7z 下載, 其中包含 start_ipv6.bat: @echo off REM 將目前隨身碟所在目錄設為變數 Disk set Disk=%cd%\\data REM 將SSD 上的 data 目錄設為 Local REM for cadlab set Local=C:\\2021_cadlab_portable\\data REM for c1 REM set Local=C:\\compile_copsim_cd2022\\data set HomePath=%Disk%\\home_ipv6 set HomeDrive=%Disk%\\home_ipv6 set Home=%Disk%\\home_ipv6 set USERPROFILE=%Disk%\\home_ipv6 REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" set PYTHONPATH=%Local%\\Python395\\DLLs;%Local%\\Python395\\Lib;%Local%\\Python395\\Lib\\site-packages; set PYTHONHOME=%Local%\\Python395 REM 使用 putty 設定 git ssh 連線 set GIT_SSH=%Disk%\\putty\\plink.exe REM 設定跟 Python 有關的命令搜尋路徑 set path_python=%Local%\\Python395;%Local%\\Python395\\Scripts; set path_portablegit=%Local%\\portablegit_2.31.1\\bin; set path_tcc=%Disk%\\tcc; path=%Disk%;%path_python%;%path_portablegit%;%path_tcc%;%path%; reg.exe import %Disk%\\2022_cdb.reg; start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN %Disk%\\wScite\\SciTE.exe start /MIN %Disk%\\wScite\\SciTE.exe Exit 而 stop.bat 則為: @echo off taskkill /IM python.exe /F taskkill /IM pythonw.exe /F taskkill /IM scite.exe /F REM 關閉 cmd 指令視窗 taskkill /IM cmd.exe /F EXIT 隨身攜帶的 git 倉儲 由於電腦輔助設計室中的電腦安裝了防寫系統, 因此使用者為了利用 Github 維護個人的倉儲, 除了使用個人的筆電, 最方便的還是隨身攜帶一個 USB 硬碟, 除了帶有常用的可攜的套件外, 還可在任何一台 Windwos 電腦中維護自己的 git 倉儲, 當然前提是, 可能要自帶合用的 portablegit 與 Python, 或者就連 NX2206 與 Coppeliasim 加上 MSYS2 都自己隨身帶著.","tags":"chat","url":"https://mde.tw/blog/renew-cad-lab-software.html"},{"title":"建立可攜 Python 系統","text":"這裡所謂的可攜 Python 系統, 是指能夠放入 USB 隨身碟中的 Python 解譯器. 整個過程分為三個部分. 包括 Python 核心程式, pip 以及安裝常用模組等過程. 動機 由於電腦輔助設計室中的電腦配置防寫系統, 大約每半年才更新一次, 為了及時配合不同課程所需,除了使用電腦操作系統中所安裝的 Python 外, 通常建議學員自行建立可直接放入 USB 隨身碟啟動的可攜 Python 解譯系統. 使用可攜 Python 解譯系統的好處是, 可以在任何的 64 位元 Windows 操作系統中使用相同配置的 Python 解譯器. 且可同時將 portable git 與 scite 納入可攜系統, 採可攜的方式執行程式編寫, 並維護電腦輔助設計流程中所建立 github 倉儲內容. 建立步驟 核心程式 已知從 https://www.python.org/ftp/python/ 可以下載各版本的 Python .msi 安裝檔案, 且所下載的 .msi 可以直接以 msiexec.exe 解開內容, 而不需要經過操作系統的套件安裝流程. 由於以下 Python 程式可以利用現有舊版的 Python 解譯器執行, 下載並解開最新版的 Python 可攜解譯器, 因此只要進入 cmd 命令視窗, 選擇所要配置 Portable Python 的目錄, 即可直接執行後完成第一階段的 Python 核心程式的配置. 這裡以 Python 3.10.6 為例, 下載並解開所需的 Python 核心程式內容: import urllib.request import os # basic files for Python installation py_list = [\"core\", \"dev\", \"exe\", \"lib\", \"tcltk\", \"tools\"] # Python version version = \"3.10.6\" # location for Portable Python path = \"c:\\\\tmp\\\\Python310\" # Python msi download URL ftp = \"https://www.python.org/ftp/python/\" + version + \"/amd64/\" extract_path = path + \"\\\\extract\" # create directory try: os.mkdir(path) except: # path exists pass # get Python installation msi files and extract into target dir for i in py_list: filename = i + \".msi\" url = ftp + filename # download basic python msi file urllib.request.urlretrieve(url, path+ \"\\\\\"+ filename) os.system(\"msiexec.exe /a \" + path + \"\\\\\" + i + \".msi /qb targetdir=\" + extract_path) # delete msi file os.remove(extract_path + \"\\\\\" + i + \".msi\") 執行結束後, path (在上述範例 path 為 \"c:/tmp/Python310\") 目錄中的 extract 子目錄即為可攜 Python 解譯器檔案. 安裝 pip 從 https://bootstrap.pypa.io/get-pip.py 可以下載 get-pip.py 檔案, 利用前面完成的 Python 核心程式可以在可攜 Python 程式的架構下安裝 pip 工具, 但必須先讓可攜的核心程式得以運作, 這時需要安排 start.bat 與 stop.bat 安裝 pip 時, 先以 cmd 進入命令列視窗, 然後更換目錄至 get-pip.py 所在目錄後, 以 python get-pip.py 進行安裝. Microsoft Windows [版本 10.0.19042.1706] (c) Microsoft Corporation. 著作權所有，並保留一切權利。 C:\\tmp\\portable_python_3.10.6>cd tmp C:\\tmp\\portable_python_3.10.6\\tmp>python get-pip.py Collecting pip Downloading pip-22.2.2-py3-none-any.whl (2.0 MB) ---------------------------------------- 2.0/2.0 MB 1.5 MB/s eta 0:00:00 Collecting setuptools Downloading setuptools-65.2.0-py3-none-any.whl (1.2 MB) ---------------------------------------- 1.2/1.2 MB 2.7 MB/s eta 0:00:00 Collecting wheel Downloading wheel-0.37.1-py2.py3-none-any.whl (35 kB) Installing collected packages: wheel, setuptools, pip Successfully installed pip-22.2.2 setuptools-65.2.0 wheel-0.37.1 可攜 Python 安裝 pip 後, 就可以利用 pip list 列出目前所安裝的模組, 並接著安裝 cmsimde 所需模組. C:\\tmp\\portable_python_3.10.6\\tmp>pip list Package Version ---------- ------- pip 22.2.2 setuptools 65.2.0 wheel 0.37.1 C:\\tmp\\portable_python_3.10.6\\tmp>pip install flask flask_cors bs4 lxml pelican markdown leo pyopenssl 以下為用來啟動可攜 Python 的批次檔案: start.bat @echo off set PATH=%cd% set HomePath=%cd%\\home_ipv6 set HomeDrive=%cd%\\home_ipv6 set Home=%cd%\\home_ipv6 set USERPROFILE=%cd%\\home_ipv6 REM 將系統 Python 程式的 io 設為 utf-8 set PYTHONIOENCODING=\"utf-8\" set PYTHONPATH=%cd%\\Python310\\DLLs;%cd%\\Python310\\Lib;%cd%\\Python310\\Lib\\site-packages; set PYTHONHOME=%cd%\\Python310 REM for putty set GIT_SSH=%cd%\\putty\\plink.exe REM 設定跟 Python 有關的命令搜尋路徑 set path_python=%cd%\\Python310;%cd%\\Python310\\Scripts; REM 設定跟Git 有關的命令搜尋路徑 set path_git=%cd%\\portablegit_2.31.1\\bin; set path_tcc=%cd%\\tcc; REM for execute scite directly set path_scite=%cd%\\wScite502\\; path=%cd%;%path_python%;%path_git%;%path_tcc%;%path_scite%;%path%; start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN cmd.exe start /MIN %cd%\\wScite502\\SciTE.exe start /MIN %cd%\\wScite502\\SciTE.exe Exit 以下為關閉可攜 Python 的批次檔: stop.bat @echo off taskkill /IM python.exe /F taskkill /IM pythonw.exe /F taskkill /IM scite.exe /F taskkill /IM cmd.exe /F EXIT 安裝模組 pip install flask flask_cors bs4 lxml pelican markdown leo pyopenssl 上述配置 pip 與模組 安裝詳細過程紀錄 . portable_python_3.10.6.7z (for @gm users only)","tags":"cp2022","url":"https://mde.tw/blog/Create-a-portable-python-system.html"},{"title":"可攜 CoppeliaSim 4.3.0 rev12","text":"CoppeliaSim 的安裝套件採用 QSetup 製作, 即便在安裝過程可從 %temp% 中的暫存目錄 (例如: AppData\\Local\\Temp\\SETUP_2639) 取得其 setup.exe 所解開的檔案, 但仍無法直接 extract 出完整的可攜 CoppeliaSim 目錄. Portable CoppeliaSim 因此這裡所謂的可攜 CoppeliaSim, 其實就是從操作系統完成安裝的目錄中取出資料, 然後加上存入操作系統中的 redistributable dll 檔案製作而成. 其中的 vcRedist/vc2019redist_x64.exe 需要利用 Wix 解出 .msi 之後, 再利用 UniExtract2 解出所需要的 .dll, 並將所有的 .dll 檔案放入可攜 CoppeliaSim 的根目錄中. 解開 vc2019redist_x64.exe 的指令: wix311-binaries\\dark.exe vc2019redist_x64.exe -x extracted 表示要在 extracted 目錄中取得 extracted\\AttachedContainer\\packages\\vcRuntimeMinimum_amd64\\vc_runtimeMinimum_x64.msi 之後, 再利用 UniExtract2 解開所需的 dll 檔案, 最後再放入 CoppeliaSim 根目錄. 啟動時直接執行 coppeliaSim.exe 即可. CoppeliaSimEdu_4.3.0_rev12.7z (for @gm users only)","tags":"cad2022","url":"https://mde.tw/blog/portable-CoppeliaSim-4.3.0-rev12.html"},{"title":"2022 Fall CP 課程","text":"2022 Fall 計算機程式開場, 這學期的課程進度將放在 Weblog, 並且使用 mdecycu At cycu 登記 disqus. 所有與課程相關的問題, 都希望在各週 Weblog 下方的 disqus 詢答. 課程評分 cp2022 課程評分項目請參考: syllabus 命令提示字元 cmd (Command Line) 指令, 是 Windows 命令 中的一種. 常用的命令提示字元視窗中的指令包括: echo , dir , cd , ping , set , rem , start , path , reg , exit , taskkill , powershell 網路環境設定 由於希望能夠讓電腦輔助設計室中使用純 IPv6 網路設定上網, 開機啟動後, 可採管理員模式執行下列 batch file 進行 網路環境設定 : 1_ipv6_network_setup.bat 通常放在隨身碟最外部. REM Get-ExecutionPolicy -List REM Set-ExecutionPolicy RemoteSigned echo \"disable ipv4 and setup proxy for ipv6\" SET CurrentDir=%~dp0 %windir%\\system32\\reg.exe import %CurrentDir%1_2022_cadlab_network_setup.reg REM powershell -noexit -executionpolicy bypass -File %CurrentDir%1_disable_ipv4.ps1 powershell -executionpolicy bypass -File %CurrentDir%1_disable_ipv4.ps1 exit 執行時, 需要 1_2022_cadlab_network_setup.reg 與 1_disable_ipv4.ps1 兩個檔案: 1_2022_cadlab_network_setup.reg 主要是關閉自動偵測 proxy server , 且手動設定代理主機. Windows Registry Editor Version 5.00 [HKEY_CURRENT_USER\\Software\\Microsoft\\Windows\\CurrentVersion\\Internet Settings] ; disable AutoDetect \"AutoDetect\"=dword:00000000 \"MigrateProxy\"=dword:00000001 ; enable Proxy \"ProxyEnable\"=dword:00000001 \"ProxyHttp1.1\"=dword:00000000 \"ProxyServer\"=\"http://[2001:288:6004:17::42]:3128\" \"ProxyOverride\"=\"localhost;\" 1_disable_ipv4.ps1 為 Powershell 命令 , 主要將所有網路卡上的 IPv4 網路設定取消 (因為現階段所安裝的某套件會啟動網路攻擊, 透過 IPv4 網路協定嘗試與外部網站連結取得後門權限). Disable-NetAdapterBinding -Name \"*\" -ComponentID ms_tcpip 上述相關設定檔案: cadlab_network_setup.zip 建立 Github 帳號 https://github.com/join 建立 Onedrive 帳號 請各學員登入 @gm 帳號後, 至 https://www.microsoft.com/zh-tw/education/products/office , 以 @gm 帳號申請 OneDrive 5TB 儲存權限. 利用 Github 建立網頁 只要在 Github 倉儲中放入 HTML , css 與 Javascript , 並且設定 Github Pages 對應的分支, Github 就會給定 Github_帳號.github.io 作為網址, 以 WWW 伺服器 server 使用者所提供的網頁內容. 登入 Github 後, 利用 https://github.com/mdecycu/cmsite 作為 template , 使用 https://pages.github.com/ 建立個人網頁, 並利用網頁建立個人簡歷 ( Curriculum Vitae ). 維護 Github 上的網頁 在近端將動態網頁轉為靜態網頁後, acp 至 Github 倉儲. Computer 簡介 以下資料取自: https://mde.tw/content/Computer.html A computer is a digital electronic machine that can be programmed to carry out sequences of arithmetic or logical operations (computation) automatically. Modern computers can perform generic sets of operations known as programs. These programs enable computers to perform a wide range of tasks. A computer system is a \"complete\" computer that includes the hardware, operating system (main software), and peripheral equipment needed and used for \"full\" operation. This term may also refer to a group of computers that are linked and function together, such as a computer network or computer cluster. A broad range of industrial and consumer products use computers as control systems. Simple special-purpose devices like microwave ovens and remote controls are included, as are factory devices like industrial robots and computer-aided design, as well as general-purpose devices like personal computers and mobile devices like smartphones. Computers power the Internet, which links billions of other computers and users. Early computers were meant to be used only for calculations. Simple manual instruments like the abacus have aided people in doing calculations since ancient times. Early in the Industrial Revolution, some mechanical devices were built to automate long tedious tasks, such as guiding patterns for looms. More sophisticated electrical machines did specialized analog calculations in the early 20th century. The first digital electronic calculating machines were developed during World War II. The first semiconductor transistors in the late 1940s were followed by the silicon-based MOSFET (MOS transistor) and monolithic integrated circuit (IC) chip technologies in the late 1950s, leading to the microprocessor and the microcomputer revolution in the 1970s. The speed, power and versatility of computers have been increasing dramatically ever since then, with transistor counts increasing at a rapid pace (as predicted by Moore's law), leading to the Digital Revolution during the late 20th to early 21st centuries. Conventionally, a modern computer consists of at least one processing element, typically a central processing unit (CPU) in the form of a microprocessor, along with some type of computer memory, typically semiconductor memory chips. The processing element carries out arithmetic and logical operations, and a sequencing and control unit can change the order of operations in response to stored information. Peripheral devices include input devices (keyboards, mice, joystick, etc.), output devices (monitor screens, printers, etc.), and input/output devices that perform both functions (e.g., the 2000s-era touchscreen). Peripheral devices allow information to be retrieved from an external source and they enable the result of operations to be saved and retrieved. Program 簡介 以下資料取自: https://mde.tw/content/Program.html A computer program is a sequence or set of instructions in a programming language for a computer to execute. Computer programs are one component of software, which also includes documentation and other intangible components. A computer program in its human-readable form is called source code. Source code needs another computer program to execute because computers can only execute their native machine instructions. Therefore, source code may be translated to machine instructions using the language's compiler. (Machine language programs are translated using an assembler.) The resulting file is called an executable. Alternatively, source code may execute within the language's interpreter. If the executable is requested for execution, then the operating system loads it into memory and starts a process. The central processing unit will soon switch to this process so it can fetch, decode, and then execute each machine instruction. If the source code is requested for execution, then the operating system loads the corresponding interpreter into memory and starts a process. The interpreter then loads the source code into memory to translate and execute each statement. Running the source code is slower than running an executable. Moreover, the interpreter must be installed on the computer. Python 簡介 以下資料取自: https://en.wikipedia.org/wiki/Python_(programming_language) , 充分了解上述內容後, 可進入 https://mde.tw/content/Python.html 開始練習如何根據需求編寫 Python 程式. Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming. It is often described as a \"batteries included\" language due to its comprehensive standard library. Guido van Rossum began working on Python in the late 1980s as a successor to the ABC programming language and first released it in 1991 as Python 0.9.0. Python 2.0 was released in 2000 and introduced new features such as list comprehensions, cycle-detecting garbage collection, reference counting, and Unicode support. Python 3.0, released in 2008, was a major revision that is not completely backward-compatible with earlier versions. Python 2 was discontinued with version 2.7.18 in 2020. Python consistently ranks as one of the most popular programming languages.","tags":"cp2022","url":"https://mde.tw/blog/2022-Fall-Intro-to-computer-programming.html"},{"title":"2022 Fall CAD 課程","text":"2022 Fall 電腦輔助設計與實習的教學主要介紹 NX 與 CoppeliaSim 在機械設計流程中的應用. 課程評分 cad2022 課程評分項目請參考: syllabus 課程目標 利用 MCAD 與 Robotic Simulator 建立一個能結合 影像辨識 與 深度強化學習 探索用之 數位平台 . 設計繪圖 以 NX2206 建立 Foosball Table 零組件. 以 Onshape 建立 Foosball Table 零組件 , Foosball Table . 以 Solvespace (含套件編譯) 建立 Foosball Table 零組件. 機電模擬 Robotic Simulator 部分將利用 CoppeliaSim 4.3.0 rev3 建立 Foosball Table 模擬場景. CoppeliaSim 使用者手冊: https://mde.tw/pjcopsim CoppeliaSim Overview CoppeliaSim Tutorials Import and Export Joints Build a clean model Simulation Design dynamic simulations Writing code Web-browser based frontend 控制方法 Robotic player 組設計驅動機構並交由 Lua 或 Python 執行控制. Human player 組則直接由鍵盤或搖桿執行控制. 可行機構分析 Robotic player 平移與旋踢機構設計. Actuation 機構設計. 送球循環機構設計. 網誌類別 Category: Cad2022 類別代表與 2022 Fall 電腦輔助設計實習相關進度的內容 Tutorial 類別代表與課程有關的教學示範 Misc 類別代表雜項內容 標籤 Tags: 標籤則可以分為: 課程簡介或 w1, w2 等各週的相關教學內容. 除了課程週次 Tags 之外, 也可以將文章分為 NX, Solvespace, Onshape, CoppeliaSim, Brython or Python, Leo Editor 與 Fossil SCM 等專門介紹 Tags. 單篇文章可以加入多個 Tags 以逗點隔開. 其他的文章則放入 Misc 類別. 解開 redist_x64.exe C:\\CoppeliaSimEdu_4.3.0_rev12\\vcRedist>c:\\wix311\\dark.exe vc_2019redist_x64.exe -x test Use UniExtract to extract the .msi","tags":"cad2022","url":"https://mde.tw/blog/2022-Fall-computer-aided-design-and-practices.html"}]};