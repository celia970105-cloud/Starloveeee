import React, { createContext, useContext, useState, useEffect } from "react";

export type LanguageType = "zh-TW" | "zh-CN" | "en";

export interface TranslationDict {
  [key: string]: {
    "zh-TW": string;
    "zh-CN": string;
    "en": string;
  };
}

export const translations: TranslationDict = {
  // General
  all_for_jiyu: {
    "zh-TW": "ALL FOR JIYU",
    "zh-CN": "ALL FOR JIYU",
    "en": "ALL FOR JIYU",
  },
  starry_support: {
    "zh-TW": "星願應援盒 ✦",
    "zh-CN": "星愿应援盒 ✦",
    "en": "Starry Support Box ✦",
  },
  home_portal: {
    "zh-TW": "星願傳送門",
    "zh-CN": "星愿传送门",
    "en": "Starry Portal",
  },
  admin_panel: {
    "zh-TW": "管理員控台",
    "zh-CN": "管理员控台",
    "en": "Admin Panel",
  },
  my_profile: {
    "zh-TW": "應援足跡",
    "zh-CN": "应援足迹",
    "en": "My Profile",
  },
  logout: {
    "zh-TW": "登出帳號 ✦",
    "zh-CN": "登出账号 ✦",
    "en": "Log Out ✦",
  },

  // Modules
  gallery: {
    "zh-TW": "相片應援",
    "zh-CN": "相片应援",
    "en": "Photo Support",
  },
  video: {
    "zh-TW": "影音珍藏",
    "zh-CN": "影音珍藏",
    "en": "Video Treasure",
  },
  letters: {
    "zh-TW": "紙短情長",
    "zh-CN": "纸短情长",
    "en": "Love Letters",
  },
  museum: {
    "zh-TW": "星願畫廊",
    "zh-CN": "星愿画廊",
    "en": "Starry Gallery",
  },
  pets: {
    "zh-TW": "星寵家園",
    "zh-CN": "星宠家园",
    "en": "Star Pet Home",
  },

  // Home Page Content
  hero_title: {
    "zh-TW": "極禹 TOP 1 雙向奔赴",
    "zh-CN": "极禹 TOP 1 双向奔赴",
    "en": "JIYU TOP 1 Mutual Support",
  },
  hero_sub: {
    "zh-TW": "在這裡記錄每一次的悸動，與星光共同編織極禹的應援足跡。",
    "zh-CN": "在这里记录每一次的悸动，与星光共同编制极禹的应援足迹。",
    "en": "Record every heart flutter here, weaving the starry support of JIYU together.",
  },
  portal_tip: {
    "zh-TW": "點擊這顆主星進入星願傳送門！✨",
    "zh-CN": "点击这颗主星进入星愿传送门！✨",
    "en": "Click this main star to enter the Starry Portal! ✨",
  },
  companion_bubble_prefix: {
    "zh-TW": "星寵小夥伴碎碎念：",
    "zh-CN": "星宠小伙伴碎碎念：",
    "en": "Star Pet Whisper:",
  },

  // User Module
  login: {
    "zh-TW": "立即登入 ✦",
    "zh-CN": "立即登入 ✦",
    "en": "Log In ✦",
  },
  register: {
    "zh-TW": "註冊帳號 ✦",
    "zh-CN": "注册账号 ✦",
    "en": "Register ✦",
  },
  quick_join: {
    "zh-TW": "快速玩 / 一鍵訪客加入 🚀",
    "zh-CN": "快速玩 / 一键访客加入 🚀",
    "en": "Quick Play / One-Click Guest Join 🚀",
  },
  guest_mode: {
    "zh-TW": "臨時訪客",
    "zh-CN": "临时访客",
    "en": "Guest Visitor",
  },
  guest_tip: {
    "zh-TW": "您目前使用臨時訪客帳號。請升級為正式應援帳號以免資料丟失：",
    "zh-CN": "您目前使用临时访客账号。请升级为正式应援账号以免资料丢失：",
    "en": "You are currently using a guest account. Upgrade to a formal account to prevent data loss:",
  },
  upgrade_title: {
    "zh-TW": "升級為正式應援帳號 ✦",
    "zh-CN": "升级为正式应援账号 ✦",
    "en": "Upgrade to Official Account ✦",
  },
  upgrade_btn: {
    "zh-TW": "綁定信箱密碼，一鍵升級 🚀",
    "zh-CN": "绑定信箱密码，一键升级 🚀",
    "en": "Bind Email & Password, Upgrade Now 🚀",
  },
  username_label: {
    "zh-TW": "應援暱稱 Username",
    "zh-CN": "应援昵称 Username",
    "en": "Username",
  },
  email_label: {
    "zh-TW": "正式信箱 Email *",
    "zh-CN": "正式信箱 Email *",
    "en": "Email Address *",
  },
  password_label: {
    "zh-TW": "設定密碼 Password *",
    "zh-CN": "设定密码 Password *",
    "en": "Set Password *",
  },
  submission_history: {
    "zh-TW": "我的應援投稿歷史紀錄",
    "zh-CN": "我的应援投稿历史纪录",
    "en": "My Submission History",
  },

  // Gallery (Photo)
  publish_photo: {
    "zh-TW": "發布相片應援 📸",
    "zh-CN": "发布相片应援 📸",
    "en": "Publish Photo Support 📸",
  },
  upload_photo_title: {
    "zh-TW": "相片標題 *",
    "zh-CN": "相片标题 *",
    "en": "Photo Title *",
  },
  upload_photo_url: {
    "zh-TW": "相片網址 (URL) *",
    "zh-CN": "相片网址 (URL) *",
    "en": "Photo URL *",
  },
  upload_photo_desc: {
    "zh-TW": "留下想對極禹說的祝福語吧！",
    "zh-CN": "留下想对极禹说的祝福语吧！",
    "en": "Write a message for JIYU!",
  },
  photo_year: {
    "zh-TW": "活動年份 *",
    "zh-CN": "活动年份 *",
    "en": "Event Year *",
  },
  photo_category: {
    "zh-TW": "相片分類 *",
    "zh-CN": "相片分类 *",
    "en": "Category *",
  },

  // Video
  publish_video: {
    "zh-TW": "上傳珍藏影音 🎬",
    "zh-CN": "上传珍藏影音 🎬",
    "en": "Upload Video Treasure 🎬",
  },
  video_title: {
    "zh-TW": "影片名稱 *",
    "zh-CN": "影片名称 *",
    "en": "Video Name *",
  },
  video_url: {
    "zh-TW": "影片網址 (Bilibili/YouTube/MP4) *",
    "zh-CN": "影片网址 (Bilibili/YouTube/MP4) *",
    "en": "Video URL (Bilibili/YouTube/MP4) *",
  },

  // Letters
  send_letter: {
    "zh-TW": "投遞紙短情長信件 💌",
    "zh-CN": "投递纸短情长信件 💌",
    "en": "Send Love Letter 💌",
  },
  letter_content: {
    "zh-TW": "信件內容 *",
    "zh-CN": "信件内容 *",
    "en": "Letter Content *",
  },
  letter_author: {
    "zh-TW": "署名 / 暱稱 *",
    "zh-CN": "署名 / 昵称 *",
    "en": "Signature / Nickname *",
  },

  // Museum
  publish_artwork: {
    "zh-TW": "投遞星願畫作 🎨",
    "zh-CN": "投递星愿画作 🎨",
    "en": "Submit Starry Artwork 🎨",
  },
  artwork_title: {
    "zh-TW": "作品名稱 *",
    "zh-CN": "作品名称 *",
    "en": "Artwork Title *",
  },
  artwork_url: {
    "zh-TW": "畫作網址 (Image URL) *",
    "zh-CN": "画作网址 (Image URL) *",
    "en": "Artwork URL (Image URL) *",
  },

  // Music
  publish_music: {
    "zh-TW": "投稿應援音樂 🎵",
    "zh-CN": "投稿应援音乐 🎵",
    "en": "Submit Support Music 🎵",
  },
  music_title: {
    "zh-TW": "音樂名稱 *",
    "zh-CN": "音乐名称 *",
    "en": "Song Name *",
  },
  music_url: {
    "zh-TW": "音訊網址 (MP3/OGG) *",
    "zh-CN": "音讯网址 (MP3/OGG) *",
    "en": "Audio URL (MP3/OGG) *",
  },
  music_artist: {
    "zh-TW": "主唱人 *",
    "zh-CN": "主唱人 *",
    "en": "Artist *",
  },

  // Friend & Pet Home
  search_friend_btn: {
    "zh-TW": "添加",
    "zh-CN": "添加",
    "en": "Add",
  },
  search_friend_placeholder: {
    "zh-TW": "輸入對方的用戶名 (如: ZackLover)",
    "zh-CN": "输入对方的用户名 (如: ZackLover)",
    "en": "Enter username or email (e.g. ZackLover)",
  },
  my_friends: {
    "zh-TW": "🌸 我的好友清單",
    "zh-CN": "🌸 我的好友清单",
    "en": "🌸 My Friends List",
  },
  co_parenting_title: {
    "zh-TW": "🏠 聯姻/共養小窩",
    "zh-CN": "🏠 联姻/共养小窝",
    "en": "🏠 Co-parenting Room",
  },
  pet_name: {
    "zh-TW": "星寵名字",
    "zh-CN": "星宠名字",
    "en": "Pet Name",
  },
  star_coins: {
    "zh-TW": "星星幣",
    "zh-CN": "星星币",
    "en": "Star Coins",
  },
  pet_status_full: {
    "zh-TW": "飽食度",
    "zh-CN": "饱食度",
    "en": "Fullness",
  },
  pet_status_love: {
    "zh-TW": "親密度",
    "zh-CN": "亲密度",
    "en": "Affection",
  },
  feed_pet: {
    "zh-TW": "餵食",
    "zh-CN": "喂食",
    "en": "Feed Pet",
  },
  play_pet: {
    "zh-TW": "摸摸/玩耍",
    "zh-CN": "摸摸/玩耍",
    "en": "Pet/Play",
  },
  submit_audit_info: {
    "zh-TW": "已提交！需經管理員審核後公開 ✨",
    "zh-CN": "已提交！需经管理员审核后公开 ✨",
    "en": "Submitted! Visible once approved by Admin ✨",
  },
};

// Traditional to Simplified Chinese character mapping
const tcToScStr = "應应願愿欄栏備备實实寵宠畫画庫库園园歷历錄录帳帐號号碼码區区體体簡简繁繁尋寻網网頁页觀观影影歡欢迎迎傳传門门聽听說说讀读寫写報报審审核核發发創创熱热餵喂養养親亲飽饱認认領领離离開开關关聯联點点擊击寶宝貝贝暱昵稱称註注冊册確确密密訪访客客設设備备史史記记投投稿稿通通過过拒拒絕绝待待刪删除除操操作作數数據据載载錯错誤误興兴趣趣談谈話话貼贴條条留留言言壁壁照照片片像像廊廊彈弹幕幕播播放放音音乐乐歌歌詞词器器屬属性性升升级级幣币經经验验體体力力清清单单好好友友搜搜添添加加房房间间小小窩窝互互动动餵喂食食玩玩耍耍撫抚摸摸散散步步帶带回回伴伴手手禮礼驚惊喜喜快快乐乐溫温馨馨提提示示確确認认定定取取消消標标題题內内容容發发布布網网址址類类别别年年份份創创建建於于批批準准駁驳回回管管理理員员權权限限設设配配色色畫画布布筆笔橡橡皮皮擦擦填填滿满清清空空保保存存載载撤撤銷销重重做做預预览览音音量量熱热门门最最新新發发现现精精選选首首页页傳传送送門门應应援援紙纸短短情情長长封封信信專专屬属祝祝福福音音乐乐盒盒當当前前無无播播放放點点击击播播放放贊赞助助留留言言板板發发表表回回复复舉举报报刪删除除關关闭闭側侧邊边欄栏首首页页進进入出出口口帳账号号升升级级轉转移移綁绑定定郵邮箱箱暱昵稱称頭头像像背背景景自自定定義义確确定定提提交交表表單单載载入入中中請请稍稍候候投投稿诉诉檢检索索社社区区規规范范違违規规舉举报报詳详情情理理由由被被處处理理進进度度審审核核人人時时间间狀状态态未未審审核核已已批批准准已已拒拒绝绝待待處处理理駁驳回回撤撤回回追追加加訪访问问次次数数熱热度度人人氣气點点击击量量播播放放次次数数投投票票支支持持投投票票數数排排行行榜榜第第一一專专輯辑歌歌單单評评论论區区發发表表評评论论刪删除除評评论论回回复复評评论论按按贊赞點点贊赞取取消消點点贊赞收收藏藏取取消消收收藏藏分分享享複复制制鏈链接接複复制制成成功功複复制制失失敗败貼贴紙纸裝装饰饰背景背景音效音效靜静音音取取消消靜静音音設设置置偏偏好好主主題题切切換换語语言言繁繁體体中中文文簡简体体中中文文英英文文設設定定成成功功歡欢迎迎回回來來登登出出帳账号号您您確確定定要要登登出出嗎嗎提提示示警警告告溫温馨馨提提示示雙双奔奔赴赴站站繪绘藝艺術术聲声劇剧場场尋寻找找誰谁獸兽貓猫狗狗魚鱼鳥鸟飛飞躍跃跳跳舞舞唱唱簽签名名計计圖图造造運运輸输鍵键盤盘鼠鼠标标豐丰富富飢饥餓饿夥伙碎碎念念陸陆臨临時时後后公公开开審审批批彈弹幕幕說说明明音音訊讯譜谱暫暂停停隨随機机順顺序序單单曲曲循循环环沒没該该用戶户週周慶庆祝祝福副副貼贴紙纸塗涂鴉ya櫥橱窗窗物物獲获益益獎奖勵励視视频频留言留言覆复檢检舉举規规範范違违規规屏屏蔽蔽訴诉修改修改密密碼码重重設设郵邮箱箱確确定定提提示意意";

const tcToSc: Record<string, string> = {};
for (let i = 0; i < tcToScStr.length; i += 2) {
  tcToSc[tcToScStr[i]] = tcToScStr[i + 1];
}

const enPhrases: Array<[string, string]> = [
  ["星寵小夥伴碎碎念：", "Star Pet Whisper: "],
  ["在這裡記錄每一次的悸動，與星光共同編織極禹的應援足跡。", "Record every heart flutter here, weaving the starry support of Jiyu together."],
  ["點擊這顆主星進入星願傳送門！✨", "Click this main star to enter the Starry Portal! ✨"],
  ["您目前使用臨時訪客帳號。為了在清理快取或更換設備登入時，所有應援足跡、星星幣和星寵記錄不丟失，請在下方設定信箱與密碼升級：", "You are currently using a temporary guest account. To prevent loss of support footprints, star coins, and star pet records when clearing cache or switching devices, please set an email and password to upgrade below:"],
  ["我的應援投稿歷史紀錄", "My Submission History"],
  ["沒有找到符合條件的星光相片", "No matching starry photos found"],
  ["快來遞交你的第一張珍藏應援吧！", "Submit your first photo support!"],
  ["已提交！需經管理員審核後公開 ✨", "Submitted! Visible once approved by Admin ✨"],
  ["投稿失敗，請確認檔案格式與大小。", "Submission failed, please verify file format and size."],
  ["上傳檔案 (限制 15MB) 📸", "Upload File (Limit 15MB) 📸"],
  ["影片網址 (Bilibili/YouTube/MP4) *", "Video URL (Bilibili/YouTube/MP4) *"],
  ["投遞紙短情長信件 💌", "Send Love Letter 💌"],
  ["畫作網址 (Image URL) *", "Artwork URL (Image URL) *"],
  ["音訊網址 (MP3/OGG) *", "Audio URL (MP3/OGG) *"],
  ["輸入對方的用戶名 (如: ZackLover)", "Enter username or email (e.g. ZackLover)"],
  ["🌸 我的好友清單", "🌸 My Friends List"],
  ["🏠 聯姻/共養小窩", "🏠 Co-parenting Room"],
  ["沒有任何待審核的投稿", "No pending submissions to audit"],
  ["點擊展開 / 收合側邊欄", "Click to expand / collapse sidebar"],
  ["確定要登出嗎嗎？", "Are you sure you want to log out?"],
  ["確定要登出嗎？", "Are you sure you want to log out?"],
  ["溫馨提示", "Kindly reminder"],
  ["極禹 TOP 1 雙向奔赴", "JIYU TOP 1 Mutual Support"],
  ["星願應援盒 ✦", "Starry Support Box ✦"],
  ["星願應援盒", "Starry Support Box"],
  ["星願傳送門", "Starry Portal"],
  ["管理員控台", "Admin Control Panel"],
  ["應援暱稱 Username", "Username"],
  ["正式信箱 Email *", "Email Address *"],
  ["設定正式信箱", "Set Email Address"],
  ["設定正式密碼", "Set Password"],
  ["設定密碼 Password *", "Set Password *"],
  ["升級為正式應援帳號 ✦", "Upgrade to Official Account ✦"],
  ["升級為正式應援帳號", "Upgrade to Official Account"],
  ["綁定信箱密碼，一鍵升級 🚀", "Bind Email and Password, Upgrade Now 🚀"],
  ["帳號成功升級！您現在可以在任何設備登入了。", "Account successfully upgraded! You can now log in on any device."],
  ["發布相片應援 📸", "Submit Photo Support 📸"],
  ["發布相片應援", "Submit Photo Support"],
  ["相片標題 *", "Photo Title *"],
  ["相片標題", "Photo Title"],
  ["相片網址 (URL) *", "Photo URL *"],
  ["相片網址", "Photo URL"],
  ["活動年份 *", "Event Year *"],
  ["活動年份", "Event Year"],
  ["相片分類 *", "Photo Category *"],
  ["相片分類", "Photo Category"],
  ["留下想對極禹說的祝福語吧！", "Leave your wishes for Jiyu here!"],
  ["上傳珍藏影音 🎬", "Upload Video Treasure 🎬"],
  ["上傳珍藏影音", "Upload Video Treasure"],
  ["影片名稱 *", "Video Name *"],
  ["影片名稱", "Video Name"],
  ["影片網址 *", "Video URL *"],
  ["影片網址", "Video URL"],
  ["影片描述", "Video Description"],
  ["投遞紙短情長信件", "Send Love Letter"],
  ["信件內容 *", "Letter Content *"],
  ["信件內容", "Letter Content"],
  ["署名 / 暱稱 *", "Signature / Nickname *"],
  ["署名 / 暱稱", "Signature / Nickname"],
  ["投遞星願畫作 🎨", "Submit Starry Artwork 🎨"],
  ["投遞星願畫作", "Submit Starry Artwork"],
  ["作品名稱 *", "Artwork Title *"],
  ["作品名稱", "Artwork Title"],
  ["畫作網址", "Artwork URL"],
  ["投稿應援音樂 🎵", "Submit Support Music 🎵"],
  ["投稿應援音樂", "Submit Support Music"],
  ["音樂名稱 *", "Song Name *"],
  ["音樂名稱", "Song Name"],
  ["音訊網址", "Audio URL"],
  ["主唱人 *", "Artist *"],
  ["主唱人", "Artist"],
  ["添加好友", "Add Friend"],
  ["沒有好友", "No friends yet"],
  ["我的好友清單", "My Friends List"],
  ["共養小窩", "Co-parenting Room"],
  ["星寵名字", "Pet Name"],
  ["星星幣", "Star Coins"],
  ["飽食度", "Fullness"],
  ["親密度", "Affection"],
  ["餵食星寵", "Feed Pet"],
  ["玩耍星寵", "Play with Pet"],
  ["餵食", "Feed"],
  ["摸摸/玩耍", "Pet/Play"],
  ["全部類別", "All Categories"],
  ["全部年份", "All Years"],
  ["重新整理", "Refresh"],
  ["管理員審核系統", "Admin Audit System"],
  ["全部投稿", "All Submissions"],
  ["待審核", "Pending"],
  ["已通過", "Approved"],
  ["已拒絕", "Rejected"],
  ["投稿人", "Submitter"],
  ["投稿類型", "Type"],
  ["內容", "Content"],
  ["狀態", "Status"],
  ["操作", "Action"],
  ["通過", "Approve"],
  ["拒絕", "Reject"],
  ["刪除", "Delete"],
  ["審核中", "Reviewing"],
  ["已批准", "Approved"],
  ["已駁回", "Rejected"],
  ["已刪除", "Deleted"],
  ["星應站管理", "Star Support Admin"],
  ["確定", "Confirm"],
  ["返回", "Back"],
  ["首頁", "Home"],
  ["傳送門", "Portal"],
  ["畫廊", "Gallery"],
  ["相簿", "Album"],
  ["相片", "Photo"],
  ["影音", "Video"],
  ["信箱", "Letters"],
  ["博物館", "Museum"],
  ["寵物", "Pets"],
  ["管理", "Admin"],
  ["在線繪圖板", "Online Canvas"],
  ["星願音樂盒", "Starry Music Box"],
  ["目前無播放音樂", "No music playing"],
  ["點擊播放", "Click to play"],
  ["歌曲列表", "Song List"],
  ["正在播放", "Now Playing"],
  ["暫停", "Pause"],
  ["播放", "Play"],
  ["隨機播放", "Shuffle"],
  ["順序播放", "Sequential"],
  ["單曲循環", "Loop One"],
  ["靜音", "Mute"],
  ["取消靜音", "Unmute"],
  ["歡迎回來", "Welcome back"],
  ["設定成功", "Settings success"],
  ["登出帳號 ✦", "Log Out ✦"],
  ["登出帳號", "Log Out"],
  ["立即登入 ✦", "Log In ✦"],
  ["立即登入", "Log In"],
  ["快速玩 / 一鍵訪客加入 🚀", "Quick Play / Guest Join 🚀"],
  ["快速加入 ✦", "Quick Join ✦"],
  ["快速加入", "Quick Join"],
  ["註冊帳號 ✦", "Register Account ✦"],
  ["註冊帳號", "Register Account"],
  ["臨時訪客", "Guest Visitor"],
  ["已提交", "Submitted"],
  ["繁體中文", "Traditional Chinese"],
  ["簡體中文", "Simplified Chinese"],
  ["英文", "English"],
  ["年份：", "Year: "],
  ["類別：", "Category: "],
  ["暱稱：", "Nickname: "],
  ["頭像：", "Avatar: "],
  ["背景：", "Background: "],
  ["自定義", "Customize"],
  ["提交", "Submit"],
  ["登入", "Log In"],
  ["註冊", "Register"],
  ["登出", "Log Out"],
  ["帳號", "Account"],
  ["升級", "Upgrade"],
  ["轉移", "Transfer"],
  ["綁定", "Bind"],
  ["成功", "Success"],
  ["失敗", "Failure"],
  ["提示", "Notice"],
  ["警告", "Warning"],
  ["演唱會舞台", "Concert Stage"],
  ["運動會", "Sports Meet"],
  ["外務", "External Schedule"],
  ["幕後花絮", "Behind the Scenes"],
  ["日常應援", "Daily Support"],
  ["同人同好繪", "Fanart"],
  ["全部", "All"],
  ["年份", "Year"],
  ["類別", "Category"],
  ["暱稱", "Nickname"],
  ["頭像", "Avatar"],
  ["背景", "Background"],
  ["取消", "Cancel"],
  ["確認", "Confirm"],
  ["確定", "Confirm"],
  ["添加", "Add"]
];

export function translateString(text: string, targetLang: LanguageType): string {
  if (!text) return text;
  
  if (targetLang === "zh-TW") {
    return text;
  }
  
  let result = text;
  
  if (targetLang === "en") {
    // English translation by phrase replacement
    for (const [tc, en] of enPhrases) {
      if (result.includes(tc)) {
        result = result.replaceAll(tc, en);
      }
    }
    return result;
  }
  
  if (targetLang === "zh-CN") {
    // Simplified Chinese character-by-character conversion
    let scResult = "";
    for (let i = 0; i < result.length; i++) {
      const char = result[i];
      scResult += tcToSc[char] || char;
    }
    return scResult;
  }
  
  return text;
}

export function applyTranslation(root: Node, lang: LanguageType) {
  // Translate text nodes using TreeWalker
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let node: Node | null;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (parent) {
      const tag = parent.tagName.toLowerCase();
      if (tag === "script" || tag === "style" || tag === "iframe" || tag === "textarea") {
        continue;
      }
      // Skip home-hero-title as requested by the user
      if (parent.closest("#home-hero-title") || parent.closest("[data-no-translate]")) {
        continue;
      }
    }

    const value = node.nodeValue;
    if (!value || !value.trim()) continue;

    // Save or update original value
    if ((node as any).__originalValue === undefined) {
      (node as any).__originalValue = value;
    } else {
      const prevOrig = (node as any).__originalValue;
      const prevTranslated = translateString(prevOrig, lang);
      if (value !== prevTranslated && value !== prevOrig) {
        (node as any).__originalValue = value;
      }
    }

    const orig = (node as any).__originalValue;
    const translated = translateString(orig, lang);
    if (node.nodeValue !== translated) {
      node.nodeValue = translated;
    }
  }

  // Translate placeholders of inputs & textareas
  const inputs = document.querySelectorAll("input, textarea");
  inputs.forEach((inputEl) => {
    const el = inputEl as HTMLInputElement | HTMLTextAreaElement;
    if (el.closest("#home-hero-title") || el.closest("[data-no-translate]")) {
      return;
    }
    const placeholder = el.getAttribute("placeholder");
    if (placeholder) {
      if ((el as any).__originalPlaceholder === undefined) {
        (el as any).__originalPlaceholder = placeholder;
      } else {
        const prevOrig = (el as any).__originalPlaceholder;
        const prevTranslated = translateString(prevOrig, lang);
        if (placeholder !== prevTranslated && placeholder !== prevOrig) {
          (el as any).__originalPlaceholder = placeholder;
        }
      }
      const orig = (el as any).__originalPlaceholder;
      const translated = translateString(orig, lang);
      if (el.getAttribute("placeholder") !== translated) {
        el.setAttribute("placeholder", translated);
      }
    }
  });

  // Translate select option text contents
  const options = document.querySelectorAll("option");
  options.forEach((optEl) => {
    const el = optEl as HTMLOptionElement;
    if (el.closest("#home-hero-title") || el.closest("[data-no-translate]")) {
      return;
    }
    const text = el.textContent;
    if (text) {
      if ((el as any).__originalText === undefined) {
        (el as any).__originalText = text;
      } else {
        const prevOrig = (el as any).__originalText;
        const prevTranslated = translateString(prevOrig, lang);
        if (text !== prevTranslated && text !== prevOrig) {
          (el as any).__originalText = text;
        }
      }
      const orig = (el as any).__originalText;
      const translated = translateString(orig, lang);
      if (el.textContent !== translated) {
        el.textContent = translated;
      }
    }
  });
}

interface LanguageContextProps {
  language: LanguageType;
  setLanguage: (lang: LanguageType) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<LanguageType>(() => {
    const saved = localStorage.getItem("starry_support_lang");
    return (saved as LanguageType) || "zh-TW";
  });

  const setLanguage = (lang: LanguageType) => {
    setLanguageState(lang);
    localStorage.setItem("starry_support_lang", lang);
  };

  const t = (key: string): string => {
    if (!translations[key]) {
      return key;
    }
    return translations[key][language] || translations[key]["zh-TW"] || key;
  };

  useEffect(() => {
    // Apply initial translation
    applyTranslation(document.body, language);

    // Setup MutationObserver to automatically translate dynamically added or changed content
    const observer = new MutationObserver(() => {
      observer.disconnect();
      applyTranslation(document.body, language);
      observer.observe(document.body, {
        childList: true,
        subtree: true,
        characterData: true,
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });

    return () => {
      observer.disconnect();
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
