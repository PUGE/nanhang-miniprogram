//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    date: '2020-11-21',
    index: 2,
    index2: 0,
    loading: false,
    plant: [
      ["广州白云国际机场", "Guangzhou Baiyun International Airport", "CAN", "GuangZhouBaiYunGuoJiJiChang", "广州白云", "Guangzhou Baiyun", "GZBYGJJC"],
      ["北京首都国际机场", "Beijing Capital International Airport", "PEK", "BeijingShouDuGuoJiJiChang", "北京首都", "Beijing Capital", "BJSDGJJC"],
      ["北京大兴国际机场", "Beijing Daxing International Airport", "PKX", "beijngdaxingguojijichang", "北京大兴", "Beijing Daxing", "BJDXGJJC"],
      ["深圳宝安国际机场", "Shenzhen Baoan International Airport", "SZX", "ShenZhenBaoAnGuoJiJiChang", "深圳宝安", "Shenzhen Baoan", "SZBAGJJC"],
      ["阿克苏机场", "Aksu Airport", "AKU", "AKeSuJiChang", "阿克苏", "Aksu", "AKSJC"],
      ["阿勒泰机场", "Altay Airport", "AAT", "ALeTaiJiChang", "阿勒泰", "Altay", "ALTJC"],
      ["安庆天柱山机场", "Anqing Tianzhushan Airport", "AQG", "AnQingTianZhuShanJiChang", "安庆天柱山", "Anqing Tianzhushan", "AQTZSJC"],
      ["鞍山腾鳌机场", "Anshan Airport", "AOG", "AnShanTengAoJiChang", "鞍山腾鳌", "Anshan", "ASTAJC"],
      ["琼海博鳌国际机场", "Qionghai Boao International Airport", "BAR", "QiongHaiBoAoGuoJiJiChang", "琼海博鳌", "QionghaiBoao", "QHBAGJJC"],
      ["北海福成机场", "Beihai Fucheng Airport", "BHY", "BeiHaiFuChengJiChang", "北海福成", "Beihai Fucheng", "BHFCJC"],
      ["毕节飞雄机场", "Bijie Feixiong Airport", "BFJ", "BiJieFeiXiongJiChang", "毕节飞雄", "Bijie Feixiong", "BJFXJC"],
      ["博乐阿拉山口机场", "Bole Alashankou Airport", "BPL", "BoLeALaShanKouJiChang", "博乐阿拉山口", "Bole Alashankou", "BLALSKJC"],
      ["包头二里半机场", "Baotou Erliban Airport", "BAV", "BaoTouErLiBanJiChang", "包头二里半", "Baotou Erliban", "BTELBJC"],
      ["常德桃花源机场", "Changde Taohuayuan Airport", "CGD", "ChangDeTaoHuaYuanJiChang", "常德桃花源", "Changde Taohuayuan", "CDTHYJC"],
      ["成都双流国际机场", "Chengdu Shuangliu International Airport", "CTU", "ChengDuShuangLiuGuoJiJiChang", "成都双流", "Chengdu Shuangliu", "CDSLGJJC"],
      ["常州奔牛国际机场", "Changzhou Benniu International Airport", "CZX", "ChangZhouBenNiuGuoJiJiChang", "常州奔牛", "Changzhou Benniu", "CZBNGJJC"],
      ["池州九华山机场", "Chizhou Jiuhuashan Airport", "JUH", "ChiZhouJiuHuaShanJiChang", "池州九华山", "Chizhou Jiuhuashan", "CZJHSJC"],
      ["稻城亚丁机场", "Daocheng Yading Airport", "DCY", "DaoChengYaDingJiChang", "稻城亚丁", "Daocheng Yading", "DCYDJC"],
      ["丹东浪头国际机场", "Dandong Langtou International Airport", "DDG", "DanDongLangTouGuojiJiChang", "丹东浪头", "Dandong Langtou", "DDLTGJJC"],
      ["敦煌机场", "Dunhuang Airport", "DNH", "DunHuangJiChang", "敦煌", "Dunhuang", "DHJC"],
      ["大连周水子国际机场", "Dalian Zhoushuizi International Airport", "DLC", "DaLianZhouShuiZiGuoJiJiChang", "大连周水子", "Dalian Zhoushuizi", "DLZSZGJJC"],
      ["大理机场", "Dali Airport", "DLU", "DaLiJiChang", "大理", "Dali", "DLJC"],
      ["大庆萨尔图机场", "DaQing Saertu Airport", "DQA", "DaQingSaErTuJiChang", "大庆萨尔图", "DaQing Saertu", "DQSETJC"],
      ["鄂尔多斯伊金霍洛国际机场", "Erdos Ejin Horo International Airport", "DSN", "EErDuoSiYiJinHuoLuoGuoJiJiChang", "鄂尔多斯", "Erdos Ejin Horo", "EEDSYJHLGJJC"],
      ["阜阳西关机场", "Fuyang Xiguan Airport", "FUG", "FuYangXiGuanJiChang", "阜阳西关", "Fuyang Xiguan", "FYXGJC"],
      ["富蕴可可托海机场", "Fuyun Koktokay Airport", "FYN", "FuYunKeKeTuoHaiJiChang", "富蕴可可托海", "Fuyun Koktokay", "FYKKTHJC"],
      ["福州长乐国际机场", "Fuzhou Changle International Airport", "FOC", "FuZhouChangLeGuoJiJiChang", "福州长乐", "Fuzhou Changle", "FZCLGJJC"],
      ["桂林两江国际机场", "Guilin Liangjiang International Airport", "KWL", "GuiLinLiangJiangGuoJiJiChang", "桂林两江", "Guilin Liangjiang", "GLLJGJJC"],
      ["广元盘龙机场", "Guangyuan Panlong Airport", "GYS", "GuangYuanPanLongJiChang", "广元盘龙", "Guangyuan Panlong", "GYPLJC"],
      ["贵阳龙洞堡国际机场", "Guiyang Longdongbao International Airport", "KWE", "GuiYangLongDongBaoGuoJiJiChang", "贵阳龙洞堡", "Guiyang Longdongbao", "GYLDBGJJC"],
      ["赣州黄金机场", "Ganzhou Huangjin Airport", "KOW", "GanZhouHuangJinJiChang", "赣州黄金", "Ganzhou Huangjin", "GZHJJC"],
      ["淮安涟水机场", "Huaian Lianshui Airport", "HIA", "HuaiAnLianShuiJiChang", "淮安涟水", "Huaian Lianshui", "HALSJC"],
      ["邯郸机场", "Handan Airport", "HDG", "HanDanJiChang", "邯郸", "Handan", "HDJC"],
      ["哈尔滨太平国际机场", "Harbin Taiping International Airport", "HRB", "HaErBinTaiPingGuoJiJiChang", "哈尔滨太平", "Harbin Taiping", "HEBTPGJJC"],
      ["合肥新桥国际机场", "Hefei Xinqiao International Airport", "HFE", "HeFeiXinQiaoGuoJiJiChang", "合肥新桥", "Hefei Xinqiao", "HFXQGJJC"],
      ["黑河瑷珲机场", "Heihe Aihui Airport", "HEK", "HeiHeAiHuiJiChang", "黑河瑷珲", "Heihe Aihui", "HHAHJC"],
      ["呼和浩特白塔国际机场", "Hohhot Baita International Airport", "HET", "HuHeHaoTeBaiTaGuoJiJiChang", "呼和浩特白塔", "Hohhot Baita", "HHHTBTGJJC"],
      ["海口美兰国际机场", "Haikou Meilan International Airport", "HAK", "HaiKouMeiLanGuoJiJiChang", "海口美兰", "Haikou Meilan", "HKMLGJJC"],
      ["海拉尔东山国际机场", "Hailar Dongshan International Airport", "HLD", "HaiLaErDongShanJiGuoJiChang", "海拉尔东山", "Hailar Dongshan", "HLEDSGJJC"],
      ["哈密机场", "Hami Airport", "HMI", "HaMiJiChang", "哈密", "Hami", "HMJC"],
      ["黄山屯溪国际机场", "Huangshan Tunxi International Airport", "TXN", "HuangShanTunXiGuoJiJiChang", "黄山屯溪", "Huangshan Tunxi", "HSTXGJJC"],
      ["和田机场", "Hotan Airport", "HTN", "HeTianJiChang", "和田", "Hotan", "HTJC"],
      ["衡阳南岳机场", "Hengyang Nanyue Airport", "HNY", "HengYangNanYueJiChang", "衡阳南岳", "Hengyang Nanyue", "HYNYJC"],
      ["杭州萧山国际机场", "Hangzhou Xiaoshan International Airport", "HGH", "HangZhouXiaoShanGuoJiJiChang", "杭州萧山", "Hangzhou Xiaoshan", "HZXSGJJC"],
      ["惠州平潭机场", "Huizhou Pingtan Airport", "HUZ", "HuiZhouPingTanJiChang", "惠州平潭", "Huizhou Pingtan", "HZPTJC"],
      ["汉中城固机场", "Hanzhong Chenggu Airport", "HZG", "HanZhongChengGuJiChang", "汉中城固", "Hanzhong Chenggu", "HZCGJC"],
      ["井冈山机场", "Jinggangshan  Airport", "JGS", "JingGangShanJiChang", "井冈山", "Jinggangshan", "JGSJC"],
      ["佳木斯东郊机场", "Jiamusi Dongjiao Airport", "JMU", "JiaMuSiDongJiaoJiChang", "佳木斯东郊", "Jiamusi Dongjiao", "JMSDJJC"],
      ["济宁曲阜机场", "Jining Qufu Airport", "JNG", "JiNingQuFuJiChang", "济宁曲阜", "Jining Qufu", "JNQFJC"],
      ["济南遥墙国际机场", "Jinan Yaoqiang International Airport", "TNA", "JiNanYaoQiangGuoJiJiChang", "济南遥墙", "Jinan Yaoqiang", "JNYQGJJC"],
      ["鸡西兴凯湖机场", "Jixi Xingkaihu Airport", "JXA", "JiXiXingKaiHuJiChang", "鸡西兴凯湖", "Jixi Xingkaihu", "JXXKHJC"],
      ["揭阳潮汕国际机场", "Jieyang Chaoshan International Airport", "SWA", "JieYangChaoShanGuoJiJiChang", "揭阳潮汕", "Jieyang Chaoshan", "JYCSGJJC"],
      ["嘉峪关机场", "Jiayuguan Airport", "JGN", "JiaYuGuanJiChang", "嘉峪关", "Jiayuguan", "JYGJC"],
      ["库车龟兹机场", "Kuqa Qiuci Airport", "KCA", "KuCheGuiZiJiChang", "库车龟兹", "Kuqa Qiuci", "KCGZJC"],
      ["库尔勒机场", "Korla Airport", "KRL", "KuErLeJiChang", "库尔勒", "Korla", "KELJC"],
      ["克拉玛依机场", "Karamay Airport", "KRY", "KeLaMaYiJiChang", "克拉玛依", "Karamay", "KLMYJC"],
      ["昆明长水国际机场", "Kunming Changshui International Airport", "KMG", "KunMingChangShuiGuoJiJiChang", "昆明长水", "Kunming Changshui", "KMCSGJJC"],
      ["喀纳斯机场", "Kanas Airport", "KJI", "KaNaSiJiChang", "喀纳斯", "Kanas", "KNSJC"],
      ["喀什机场", "Kashi Airport", "KHG", "KaShiJiChang", "喀什", "Kashi", "KSJC"],
      ["荔波机场", "Libo Airport", "LLB", "LiBoJiChang", "荔波", "Libo", "LBJC"],
      ["澜沧景迈机场", "LanCang JingMai Airport", "JMJ", "lancangjingmaijichang", "澜沧景迈", "LanCang JingMai", "LCJMJC"],
      ["临沧机场", "Lincang Airport", "LNJ", "LinCangJiChang", "临沧", "Lincang", "LCJC"],
      ["临汾乔李机场", "Linfen Qiaoli Airport", "LFQ", "LinFenQiaoLiJiChang", "临汾乔李", "Linfen Qiaoli", "LFQLJC"],
      ["丽江三义机场", "Lijiang Sanyi Airport", "LJG", "LiJiangSanYiJiChang", "丽江三义", "Lijiang Sanyi", "LJSYJC"],
      ["陇南成县机场", "Longnan Chengxian Airport", "LNL", "longnanchengxianjichang", "陇南成县", "Longnan Chengxian", "LNCXJC"],
      ["六盘水月照机场", "Liupanshui Yuezhao Airport", "LPF", "LiuPanShuiYueZhaoJiChang", "六盘水月照", "Liupanshui Yuezhao", "LPSYZJC"],
      ["拉萨贡嘎国际机场", "Lhasa Gonggar International Airport", "LXA", "LaSaGongGaGuoJiJiChang", "拉萨贡嘎", "Lhasa Gonggar", "LSGGGJJC"],
      ["洛阳北郊机场", "Luoyang Beijiao Airport", "LYA", "LuoYangBeiJiaoJiChang", "洛阳北郊", "Luoyang Beijiao", "LYBJJC"],
      ["临沂沭埠岭机场", "Linyi Shubuling Airport", "LYI", "LinYiShuBuLingJiChang", "临沂沭埠岭", "Linyi Shubuling", "LYSBLJC"],
      ["连云港白塔埠机场", "Lianyungang Baitabu Airport", "LYG", "LianYunGangBaiTaBuJiChang", "连云港白塔埠", "Lianyungang Baitabu", "LYGBTBJC"],
      ["兰州中川国际机场", "Lanzhou Zhongchuan International Airport", "LHW", "LanZhouZhongChuanGuoJiJiChang", "兰州中川", "Lanzhou Zhongchuan", "LZZCGJJC"],
      ["柳州白莲机场", "Liuzhou Bailian Airport", "LZH", "LiuZhouBaiLianJiChang", "柳州白莲", "Liuzhou Bailian", "LZBLJC"],
      ["泸州云龙机场", "Luzhou Yunlong Airport", "LZO", "LuZhouYunLongJiChang", "泸州云龙", "Luzhou Yunlong", "LZYLJC"],
      ["林芝米林机场", "Nyingchi Mainling Airport", "LZY", "LinZhiMiLinJiChang", "林芝米林", "Nyingchi Mainling", "LZMLJC"],
      ["牡丹江海浪机场", "Mudanjiang Hailang Airport", "MDG", "MuDanJiangHaiLangJiChang", "牡丹江海浪", "Mudanjiang Hailang", "MDJHLJC"],
      ["漠河古莲机场", "Mohe GuLian Airport", "OHE", "MoHeGuLianJiChang", "漠河古莲", "Mohe GuLian", "MHGLJC"],
      ["德宏芒市机场", "Dehong Mangshi Airport", "LUM", "dehongmangshijichang", "德宏芒市", "Dehong Mangshi", "DHMSJC"],
      ["绵阳南郊机场", "Mianyang Nanjiao Airport", "MIG", "MianYangNanJiaoJiChang", "绵阳南郊", "Mianyang Nanjiao", "MYNJJC"],
      ["梅州梅县机场", "MeiZhou Meixian Airport", "MXZ", "MeiZhouMeiXianJiChang", "梅州梅县", "Meizhou Meixian", "MZMXJC"],
      ["宁波栎社国际机场", "Ningbo Lishe International Airport", "NGB", "NingBoLiSheGuoJiJiChang", "宁波栎社", "Ningbo Lishe", "NBLSGJJC"],
      ["南昌昌北国际机场", "Nanchang Changbei International Airport", "KHN", "NanChangChangBeiGuoJiJiChang", "南昌昌北", "Nanchang Changbei", "NCCBGJJC"],
      ["南充高坪机场", "Nanchong Gaoping Airport", "NAO", "NanChongGaoPingJiChang", "南充高坪", "Nanchong Gaoping", "NCGPJC"],
      ["南京禄口国际机场", "Nanjing Lukou International Airport", "NKG", "NanJingLuKouGuoJiJiChang", "南京禄口", "Nanjing Lukou", "NJLKGJJC"],
      ["宁蒗泸沽湖机场", "Ninglang Luguhu Airport", "NLH", "NinglangLuGuHuJiChang", "宁蒗泸沽湖", "Ninglang Luguhu", "NLLGHJC"],
      ["那拉提机场", "Nalati Airport", "NLT", "NaLaTiJiChang", "那拉提", "Nalati", "NLTJC"],
      ["南宁吴圩国际机场", "Nanning Wuxu International Airport", "NNG", "NanNingWuWeiGuoJiJiChang", "南宁吴圩", "Nanning Wuxu", "NNWWGJJC"],
      ["南通兴东国际机场", "Nantong Xingdong International Airport", "NTG", "NanTongXingDongGuoJiJiChang", "南通兴东", "Nantong Xingdong", "NTXDGJJC"],
      ["南阳姜营机场", "Nanyang Jiangying Airport", "NNY", "NanYangJiangYingJiChang", "南阳姜营", "Nanyang Jiangying", "NYJYJC"],
      ["普洱思茅机场", "Puer Simao Airport", "SYM", "puersimaojichang", "普洱思茅", "Puer Simao", "PESMJC"],
      ["攀枝花保安营机场", "Panzhihua Baoanying Airport", "PZI", "PanZhiHuaBaoAnYingJiChang", "攀枝花保安营", "Panzhihua Baoanying", "PZHBAYJC"],
      ["青岛流亭国际机场", "Qingdao Liuting International Airport", "TAO", "QingDaoLiuTingGuoJiJiChang", "青岛流亭", "Qingdao Liuting", "QDLTGJJC"],
      ["秦皇岛北戴河国际机场", "Qinhuangdao Beidaihe International Airport", "BPE", "QinHuangDaoBeiDaiHeGuojiJiChang", "秦皇岛北戴河", "Qinhuangdao Beidaihe", "QHDBDHGJJC"],
      ["黔江武陵山机场", "Qianjiang Wulingshan Airport", "JIQ", "QianJiangWuLingShanJiChang", "黔江武陵山", "Qianjiang Wulingshan", "QJWLSJC"],
      ["且末机场", "Qiemo Airport", "IQM", "QieMoJiChang", "且末", "Qiemo", "QMJC"],
      ["齐齐哈尔三家子机场", "Qiqihar Sanjiazi Airport", "NDG", "QiQiHaErSanJiaZiJiChang", "齐齐哈尔三家子", "Tsitsihar Sanjiazi", "QQHESJZJC"],
      ["若羌楼兰机场", "Ruoqiang Loulan Airport", "RQA", "ruoqiangloulanjichang", "若羌楼兰", "Ruoqiang Loulan", "RQLLJC"],
      ["日照山字河机场", "Rizhao Shanzihe Airport", "RIZ", "RiZhaoShanZiHeJiChang", "日照山字河", "Rizhao Shanzihe", "RZSZHJC"],




      ["莎车机场", "Shache Airport", "QSZ", "shachejichang", "莎车", "Shache", "SCHC"],
      ["上海虹桥国际机场", "Shanghai Hongqiao International Airport", "SHA", "ShangHaiHongQiaoGuoJiJiChang", "上海虹桥", "Shanghai Hongqiao", "SHHQGJJC"],
      ["上海浦东国际机场", "Shanghai Pudong International Airport", "PVG", "ShangHaiPuDongGuoJiJiChang", "上海浦东", "Shanghai Pudong", "SHPDGJJC"],
      ["石河子花园机场", "Shihezi Huayuan Airport", "SHF", "ShiHeZiHuaYuanJiChang", "石河子花园", "Shihezi Huayuan", "SHZHYJC"],
      ["石家庄正定国际机场", "Shijiazhuang Zhengding International Airport", "SJW", "ShiJiaZhuangZhengDingGuoJiJiChang", "石家庄正定", "Shijiazhuang Zhengding", "SJZZDGJJC"],
      ["三明沙县机场", "Sanming Shaxian Airport", "SQJ", "SanMingShaXianJiChang", "三明沙县", "Sanming Shaxian", "SMSXJC"],
      ["厦门高崎国际机场", "Xiamen Gaoqi International Airport", "XMN", "XiaMenGaoQiGuoJiJiChang", "厦门高崎", "Xiameng Gaoqi", "XMGQGJJC"],
      ["神农架红坪机场", "Shennongjia Hongping Airport", "HPG", "ShenNongJiaHongPingJiChang", "神农架红坪", "Shennongjia Hongping", "SNJHPJC"],
      ["上饶三清山机场", "Shangrao Sanqingshan Airport", "SQD", "shangraosanqingshanjichang", "上饶三清山", "Shangrao Sanqingshan", "SRSQSJC"],
      ["揭阳潮汕国际机场", "Jieyang Chaoshan International Airport", "SWA", "JieYangChaoShanGuoJiJiChang", "揭阳潮汕", "Jieyang Chaoshan", "JYCSGJJC"],
      ["沈阳桃仙国际机场", "Shenyang Taoxian International Airport", "SHE", "ShenYangTaoXianGuoJiJiChang", "沈阳桃仙", "Shenyang Taoxian", "SYTXGJJC"],
      ["三亚凤凰国际机场", "Sanya phoenix International Airport", "SYX", "SanYaFengHuangGuoJiJiChang", "三亚凤凰", "Sanya phoenix", "SYFHGJJC"],
      ["十堰武当山机场", "Shiyan Wudangshan Airport", "WDS", "ShiYanWuDangShanJiChang", "十堰武当山", "Shiyan Wudangshan", "SYWDSJC"],
      ["邵阳武冈机场", "Shaoyang Wugang Airport", "WGN", "shaoyangwugangjichang", "邵阳武冈", "Shaoyang Wugang", "SYWGJC"],
      ["松原查干湖机场", "Songyuan Chaganhu Airport", "YSQ", "songyuanchaganhujichang", "松原查干湖", "Songyuan Chaganhu", "SYCGHJC"],
      ["塔城机场", "Tacheng Airport", "TCG", "TaChengJiChang", "塔城", "Tacheng", "TCMHJC"],
      ["腾冲驼峰机场", "Tengchong Tuofeng Airport", "TCZ", "TengChongTuoFengJiChang", "腾冲驼峰", "Tengchong Tuofeng", "TCTFJC"],
      ["通化三源浦机场", "Tonghua Sanyuanpu Airport", "TNH", "TongHuaSanYuanPuJiChang", "通化三源浦", "Tonghua Sanyuanpu", "THSYPJC"],
      ["天津滨海国际机场", "Tianjin Binhai International Airport", "TSN", "TianJinBinHaiGuoJiJiChang", "天津滨海", "Tianjin Binhai", "TJBHGJJC"],
      ["通辽机场", "Tongliao Airport", "TGO", "TongLiaoJiChang", "通辽", "Tongliao", "TLJC"],
      ["吐鲁番交河机场", "Turpan Jiaohe Airport", "TLQ", "TuLuFanJiaoHeJiChang", "吐鲁番交河", "Turpan Jiaohe", "TLFJHJC"],
      ["图木舒克唐王城机场", "Tumushuke Tangwangcheng Airport", "TWC", "tumushuketangwangchengjichang", "图木舒克唐王城", "Tumushuke Tangwangcheng", "TMSKTWCJC"],
      ["铜仁凤凰机场", "Tongren Fenghuang Airport", "TEN", "Tongren FengHuangJiChang", "铜仁凤凰", "Tongren Fenghuang", "TRFHJC"],
      ["天水麦积山机场", "Tianshui Maijishan Airport", "THQ", "TianShuiMaiJiShanJiChang", "天水麦积山", "Tianshui Maijishan", "TSMJSJC"],
      ["唐山三女河机场", "Tangshan Sannuhe Airport", "TVS", "TangShanSanNvHeJiChang", "唐山三女河", "Tangshan Sannuhe", "TSSNHJC"],
      ["太原武宿国际机场", "Taiyuan Wusu International Airport", "TYN", "TaiYuanWuSuGuoJiJiChang", "太原武宿", "Taiyuan Wusu", "TYWSGJJC"],
      ["台州路桥机场", "Taizhou Luqiao Airport", "HYN", "TaiZhouLuQiaoJiChang", "台州路桥", "Taizhou Luqiao", "TZLQJC"],
      ["扬州泰州国际机场", "Yangzhou Taizhou International Airport", "YTY", "YangZhouTaiZhouGuoJiJiChang", "扬州泰州", "Yangzhou TaiZhou", "YZTZGJJC"],
      ["潍坊机场", "Weifang Airport", "WEF", "WeiFangJiChang", "潍坊", "Weifang", "WFJC"],
      ["威海大水泊国际机场", "Weihai Dashuibo International Airport", "WEH", "WeiHaiDaShuiBoGuojiJiChang", "威海大水泊", "Weihai Dashuibo", "WHDSBJC"],
      ["乌海机场", "Wuhai Airport", "WUA", "WuHaiJiChang", "乌海", "Wuhai", "WHJC"],
      ["武汉天河国际机场", "Wuhan Tianhe International Airport", "WUH", "WuHanTianHeGuoJiJiChang", "武汉天河", "Wuhan Tianhe", "WHTHGJJC"],
      ["乌兰察布机场", "Ulanqab Airport", "UCB", "WuLanChaBuJiChang", "乌兰察布", "Ulanqab", "WLCBJC"],
      ["乌兰浩特机场", "Ulanhot Airport", "HLH", "WuLanHaoTeJiChang", "乌兰浩特", "Ulanhot", "WLHTJC"],
      ["乌鲁木齐地窝堡国际机场", "Urumchi Diwopu International Airport", "URC", "WuLuMuQiDiWoBaoGuoJiJiChang", "乌鲁木齐地窝堡", "Urumchi Diwopu", "WLMQDWBGJJC"],
      ["文山普者黑机场", "Wenshan Puzhehei Airport", "WNH", "WenShanPuZheHeiJiChang", "文山普者黑", "Wenshan Puzhehei", "WSPZHJC"],
      ["重庆巫山机场", "Chongqing Wushan Airport", "WSK", "chongqingwushanjichang", "巫山", "Wushan", "CQWSJC"],
      ["无锡苏南硕放国际机场", "Wuxi Sunan shuofang International Airport", "WUX", "WuXiSuNanShuoFangGuoJiJiChang", "无锡苏南硕放", "Wuxi Sunan shuofang", "WXSNSFGJJC"],
      ["武夷山机场", "Wuyishan Airport", "WUS", "WuYiShanJiChang", "武夷山", "Wuyishan", "WYSJC"],
      ["温州龙湾国际机场", "Wenzhou Longwan International Airport", "WNZ", "WenZhouLongWanGuoJiJiChang", "温州龙湾", "Wenzhou Longwan", "WZLWGJJC"],
      ["梧州长洲岛机场", "Wuzhou Changzhoudao Airport", "WUZ", "WuZhouChangZhoudaoJiChang", "梧州长洲岛", "Wuzhou Changzhoudao", "WZCZDJC"],
      ["万州五桥机场", "Wanzhou Wuqiao Airport", "WXN", "WanZhouWuQiaoJiChang", "万州五桥", "Wanzhou Wuqiao", "WZWQJC"],
      ["西安咸阳国际机场", "Xi’an Xianyang International Airport", "XIY", "XianXianYangGuoJiJiChang", "咸阳", "XianXianYang", "XAXYGJJC"],
      ["西昌青山机场", "Xichang Qingshan Airport", "XIC", "XiChangQingShanJiChang", "西昌青山", "Xichang Qingshan", "XCQSJC"],
      ["夏河机场", "XIAHE Airport", "GXH", "XiaHeJiChang", "夏河", "XIAHE", "XHJC"],
      ["锡林浩特机场", "Xilinhot Airport", "XIL", "XiLinHaoTeJiChang", "锡林浩特", "Xilinhot", "XLHTJC"],
      ["西宁曹家堡机场", "Xining Caojiabao Airport", "XNN", "XiNingCaoJiaBaoJiChang", "西宁曹家堡", "Xining Caojiabao", "XNCJBJC"],
      ["西双版纳嘎洒国际机场", "Xishuangbanna International Airport", "JHG", "XiShuangBanNaGaSaGuoJiJiChang", "西双版纳嘎洒", "Xishuangbannags", "XSBNGSGJJC"],
      ["兴义万峰林机场", "Xingyi Wanfeng Airport", "ACX", "XingYiWanFengJiChang", "兴义", "XingyiWanfeng", "XYWFJC"],
      ["信阳明港机场", "XinYang MingGang Airport", "XAI", "xinyangminggangjichang", "信阳明港机场", "XinYang MingGang Airport", "XYMGJC"],
      ["襄阳刘集机场", "Xiangyang Liuji Airport", "XFN", "XiangyangLiuJiJiChang", "襄阳刘集", "Xiangyang Liuji", "XYLJJC"],
      ["忻州五台山机场", "Xinzhou Wutaishan Airport", "WUT", "XinZhouWuTaiShanJiChang", "忻州五台山", "Xinzhou Wutaishan", "XZWTSJC"],
      ["徐州观音国际机场", "Xuzhou Guanyin International Airport", "XUZ", "XuZhouGuanYinGuoJiJiChang", "徐州观音", "Xuzhou Guanyin", "XZGYGJJC"],
      ["延安南泥湾机场", "Yan'an Nanniwan Airport", "ENY", "YanAnNanniwanJiChang", "延安南泥湾", "Yan'an Nanniwan", "YANNWJC"],
      ["宜宾五粮液机场", "Yibin Wuliangye Airport", "YBP", "YiBinWuLiangYeJiChang", "宜宾五粮液", "Yibin Wuliangye", "YBWLYJC"],
      ["银川河东国际机场", "Yinchuan Hedong International Airport", "INC", "YinChuanHeDongGuoJiJiChang", "银川河东", "Yinchuan Hedong", "YCHDGJJC"],
      ["伊春林都机场", "Yichun Lindu Airport", "LDS", "YiChunLinDuJiChang", "伊春林都", "Yichun Lindu", "YCLDJC"],
      ["运城关公机场", "Yuncheng Guangong Airport", "YCU", "YunChengGuanGongJiChang", "运城关公", "Yuncheng Guangong", "YCGGJC"],
      ["宜春明月山机场", "Yichun Mingyueshan Airport", "YIC", "YiChunMingYueShanJiChang", "宜春明月山", "Yichun Mingyueshan", "YCMYSJC"],
      ["宜昌三峡机场", "Yichang Sanxia Airport", "YIH", "YiChangSanXiaJiChang", "宜昌三峡", "Yichang Sanxia", "YCSXJC"],
      ["盐城南洋机场", "Yancheng Nanyang Airport", "YNZ", "YanChengNanYangJiChang", "盐城南洋", "Yancheng Nanyang", "YCNYJC"],
      ["延吉朝阳川国际机场", "Yanji Chaoyangchuan International Airport", "YNJ", "YanJiChaoYangChuanGuoJiJiChang", "延吉朝阳川", "Yanji Chaoyangchuan", "YJCYCGJJC"],
      ["营口兰旗机场", "Yingkou Lanqi Airport", "YKH", "YingKouLanQiJiChang", "营口兰旗", "Yingkou Lanqi", "YKLQJC"],
      ["榆林榆阳机场", "Yulin Yuyang Airport", "UYN", "YulinYuYangJiChang", "榆林榆阳", "Yulin Yuyang", "YLYYJC"],
      ["伊宁机场", "Yining Airport", "YIN", "YiNingJiChang", "伊宁", "Yining", "YNJC"],
      ["玉树巴塘机场", "Yushu Batang Airport", "YUS", "YuShuBaTangJiChang", "玉树巴塘", "Yushu Batang", "YSBTJC"],
      ["烟台蓬莱国际机场", "Yantai Penglai International Airport", "YNT", "YanTaiPenLaiGuoJiJiChang", "烟台蓬莱", "Yantai Penglai", "YTPLGJJC"],
      ["义乌机场", "Yiwu Airport", "YIW", "YiWuJiChang", "义乌", "Yiwu", "YWJC"],
      ["岳阳三荷机场", "Yueyang Sanhe Airport", "YYA", "yueyang sanhe jichang", "岳阳三荷", "Yueyang Sanhe", "YYSHJC"],
      ["永州零陵机场", "Yongzhou Lingling Airport", "LLF", "YongZhouLingLingJiChang", "永州零陵", "Yongzhou Lingling", "YZLLJC"],
      ["扬州泰州国际机场", "Yangzhou Taizhou International Airport", "YTY", "YangZhouTaiZhouGuoJiJiChang", "扬州泰州", "Yangzhou TaiZhou", "YZTZGJJC"],
      ["长白山机场", "Changbaishan Airport", "NBS", "ChangBaiShanJiChang", "长白山", "Changbaishan", "CBSJC"],
      ["长春龙嘉国际机场", "Changchun Longjia International Airport", "CGQ", "ChangChunLongJiaGuoJiJiChang", "长春龙嘉", "Changchun Longjia", "CCLJGJJC"],
      ["中国金门尚义机场", "Kinmen Shangyi Airport", "KNH", "zhongguojinmenshangyijichang", "中国金门尚义", "Kinmen Shangyi", "ZGJMSYJC"],
      ["珠海金湾机场", "Zhuhai Jinwan Airport", "ZUH", "ZhuHaiJinWanJiChang", "珠海金湾", "Zhuhai Jinwan", "ZHJWJC"],
      ["湛江机场", "Zhanjiang Airport", "ZHA", "ZhanJiangJiChang", "湛江", "Zhanjiang", "ZJJC"],
      ["张家界荷花机场", "Zhangjiajie Hehua Airport", "DYG", "ZhangJiaJieHeHuaJiChang", "张家界荷花", "Zhangjiajie Hehua", "ZJJHHJC"],
      ["张家口宁远机场", "Zhangjiakou Ningyuan Airport", "ZQZ", "ZhangJiaKouNingYuanJiChang", "张家口宁远", "Zhangjiakou Ningyuan", "ZJKNYJC"],
      ["扎兰屯成吉思汗机场", "Zhalantun Chengjisihan Airport", "NZL", "ZhaLanTunChengJiSiHanJiChang", "扎兰屯成吉思汗", "Zhalantun Chengjisihan", "ZLTCJSHJC"],
      ["重庆江北国际机场", "Chongqing Jiangbei International Airport", "CKG", "ChongQingJiangBeiGuoJiJiChang", "重庆江北", "Chongqing Jiangbei", "CQJBGJJC"],
      ["长沙黄花国际机场", "Changsha Huanghua International Airport", "CSX", "ChangShaHuangHuaGuoJiJiChang", "长沙黄花", "Changsha Huanghua", "CSHHGJJC"],
      ["中山", "Zhongshan", "HHS", "zhongshan", "", "", "ZS"],
      ["舟山普陀山机场", "Zhoushan Putuoshan Airport", "HSN", "ZhouShanPuTuoShanJiChang", "舟山普陀山", "Zhoushan Putuoshan", "ZSPTSJC"],
      ["昭通机场", "Zhaotong Airport", "ZAT", "ZhaoTongJiChang", "昭通", "Zhaotong", "ZTJC"],
      ["中卫香山机场", "Zhongwei Xiangshan Airport", "ZHY", "Zhongwei XiangShanJiChang", "中卫香山", "Zhongwei Xiangshan", "ZWXSJC"],
      ["张掖甘州机场", "Zhangye Ganzhou Airport", "YZY", "ZhangYeGanZhouJiChang", "张掖甘州", "Zhangye Ganzhou", "ZYGZJC"],
      ["遵义茅台机场", "Zunyi Maotai Airport", "WMT", "zunyimaotaojichang", "遵义茅台", "Zunyi Maotai", "ZYMTJC"],
      ["遵义新舟国际机场", "Zunyi Xinzhou International Airport", "ZYI", "ZunyiXinZhouGuoJiJiChang", "遵义新舟", "Zunyi Xinzhou", "ZYXZGJJC"],
      ["郑州新郑国际机场", "ZhengzhouXinzheng International Airport", "CGO", "ZhengzhouXinZhengGuoJiJiChang", "郑州新郑", "ZhengzhouXinzheng", "ZZXZGJJC"],
      ["长治王村机场", "Changzhi Wangcun Airport", "CIH", "ChangZhiWangcunJiChang", "长治王村", "Changzhi Wangcun", "CZWCJC"]
    ],
    flightList: []
  },
  // 获取N天以后日期
  fun_date: function(dayNum) {
    var date1 = new Date()
    var date2 = new Date(date1);
    date2.setDate(date1.getDate() + dayNum);
    var month = date2.getMonth() + 1
    if (month < 10) month = '0' + month
    let day = date2.getDate()
    if (day < 10) day = '0' + day
    var time2 = date2.getFullYear() + "-" + (month) + "-" + day;
    return time2
  },
  onLoad: function (options) {
    this.setData({
      date: this.fun_date(10)
    })
  },
  // search停止监控
  search: function(event) {
    wx.navigateTo({
      url: 'search',
      success: (res) => {
        // 通过eventChannel向被打开页面传送数据
        res.eventChannel.emit('acceptDataFromOpenerPage', {
          flightDate: this.data.date.replace(/-/g, ''),
          depCity: this.data.plant[this.data.index][2],
          arrCity: this.data.plant[this.data.index2][2],
          depCityName: this.data.plant[this.data.index][0],
          arrCityName: this.data.plant[this.data.index2][0]
        })
      }
    })
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindPickerChange: function(e) {
    this.setData({
      index: e.detail.value
    })
  },
  bindPickerChange2: function(e) {
    this.setData({
      index2: e.detail.value
    })
  },
  onShareAppMessage: function () {
    
  }
})
