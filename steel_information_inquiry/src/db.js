const originData = [
    {
        key: '0',
        name: '焊管',
        factory: '天津锦诺钢管厂',
        address: '静海大邱庄',
        contacts: '徐经理 18522213928',
        advantage: '长期合作、加工'
    },
    {
        key: '1',
        name: '焊管',
        factory: '金誉丰钢管加工有限公司',
        address: '静海大邱庄',
        contacts: '陈金财 13820200008',
        advantage: '钢管切割'
    },
    {
        key: '2',
        name: '焊管',
        factory: '华贸钢管有限公司',
        address: '河北廊坊',
        contacts: '王永鑫  15127602322',
        advantage: '小型号薄壁焊管'
    },
    {
        key: '3',
        name: '焊管',
        factory: '天津宝升钢铁贸易有限公司',
        address: '静海大邱庄',
        contacts: '张凯  13821967170',
        advantage: '大邱庄最大商贸'
    },
    {
        key: '4',
        name: '焊管',
        factory: '友发外贸',
        address: '静海大邱庄',
        contacts: '郝女士 15210423868',
        advantage: '外贸部'
    },
    {
        key: '5',
        name: '焊管',
        factory: '天津市鑫金钰防腐保温钢管有限公司',
        address: '静海大邱庄',
        contacts: '梁军 13652100057 王庆林 13342059000',
        advantage: '商贸'
    },
    {
        key: '6',
        name: '焊管',
        factory: '君铭顺钢铁实业（天津）有限公司',
        address: '静海大邱庄',
        contacts: '王经理 022-68212866',
        advantage: '镀锌带 CUZ型钢'
    },
    {
        key: '7',
        name: '焊管',
        factory: '天津市晟德永泰钢铁有限公司',
        address: '静海大邱庄',
        contacts: '边元胜 13920194897 68585335  59529666',
        advantage: '出口加工'
    },
    {
        key: '8',
        name: '焊管',
        factory: '天津鑫君晟源钢铁贸易有限公司',
        address: '静海大邱庄',
        contacts: '022-68505088 68276280',
        advantage: '涂塑 螺旋管'
    },
    {
        key: '9',
        name: '焊管',
        factory: '天津聚德昌商贸有限公司',
        address: '天津北辰区',
        contacts: '任强 13821818108',
        advantage: '君诚钢管天津总代理'
    },
    {
        key: '10',
        name: '焊管',
        factory: '天津市宽盛钢铁有限公司',
        address: '天津市北辰区',
        contacts: '27733511 27735711',
        advantage: '友发最大代理'
    },
    {
        key: '11',
        name: '方矩管 镀锌圆管 镀锌方矩管',
        factory: '源泰德润',
        address: '静海大邱庄',
        contacts: '13512865985',
        advantage: '规格齐全'
    },
    {
        key: '12',
        name: '方矩管',
        factory: '兆利兴钢管',
        address: '静海大邱庄',
        contacts: '李先生 18522299322 王浩 18522299676',
        advantage: '规格齐全'
    },
    {
        key: '13',
        name: '方矩管',
        factory: '宏聚达方管',
        address: '静海大邱庄',
        contacts: '刘嘉才 13370385995',
        advantage: '卷板做方管'
    },
    {
        key: '14',
        name: '方矩管',
        factory: '天津市中通钢管',
        address: '静海大邱庄',
        contacts: `中通销售处电话：022-59522002 2003
                    2005 2016 2066 2010 2011
                    传真：022-59522001 2004 2008 2011
                    德天销售处电话：022-59522001 68289219
                    68289220 68289221
                    外贸部电话:
                    张曼  Mandy Zhang ：022-68727532
                    王莹  Emma Wang   ：022-23756696`,
        advantage: '货全'
    },
    {
        key: '15',
        name: '方矩管',
        factory: '天津伟恒基业钢管制造有限公司',
        address: '天津市大邱庄',
        contacts: '宋嘉楠 17695670304 59513511',
        advantage: ''
    },
    {
        key: '16',
        name: '方矩管',
        factory: '天津宝升钢铁贸易有限公司',
        address: '静海大邱庄',
        contacts: '张凯 13821967170',
        advantage: '大邱庄最大商贸'
    },
    {
        key: '17',
        name: '方矩管',
        factory: '天津市瑞泽祥新能源科技发展有限公司',
        address: '天津静海大邱庄陈大公路中段',
        contacts: '计总 15022427777',
        advantage: '可加工定做长短尺'
    },
    {
        key: '18',
        name: '焊管 镀锌管',
        factory: '丰洋远龙（天津）钢铁贸易有限公司',
        address: '静海大邱庄',
        contacts: '刘经理 18920409888 15002218118 15902218118',
        advantage: '商贸'
    },
    {
        key: '19',
        name: '焊管 镀锌管',
        factory: '唐山正元管业有限公司',
        address: '唐山市丰南沿海工业区',
        contacts: '孟建民 13315511798 马庆先 13582951872',
        advantage: '工厂 上锌量300克'
    },
    {
        key: '20',
        name: '焊管',
        factory: '唐山友发钢管制造有限公司',
        address: '唐山市丰润区',
        contacts: '赵海清 13831520217 李彦红 13903254061',
        advantage: '工厂'
    },
    {
        key: '21',
        name: '镀锌管 焊管',
        factory: '天津市宝来利工贸有限公司',
        address: '天津大邱庄海河道6号',
        contacts: `[宝来钢管销售]：022-68588097  28899371
                    [镀锌加工销售]：022-68581218  68558878
                    [德健方矩管销售]：022-68118989  68118958
                    [银程板带销售]：022-68588095  68587355
                    [丰隆商贸]：022-28896530  28897030
                    [宝来国际]：022-27812250  68587622`,
        advantage: '工厂'
    },
    {
        key: '22',
        name: '焊管 镀锌方矩管 镀锌圆管 镀锌加工',
        factory: '天津市有勇钢管有限公司',
        address: '天津市静海县大邱庄镇太平村工业园区',
        contacts: '刘经理 "136-5210-4000 022-59592777 / 59591060',
        advantage: '商贸'
    },
    {
        key: '23',
        name: '方矩管 热镀锌方矩管 镀锌带方矩管',
        factory: '唐山连创实业(集团)',
        address: '唐山滦县装备制造产业园区',
        contacts: '冯静 18833355012',
        advantage: '唐山地区 工厂 价格便宜'
    },
    {
        key: '24',
        name: '镀锌带方矩管 镀锌带圆管 镀锌带椭圆管',
        factory: '天应泰钢管',
        address: '天津静海大邱庄',
        contacts: '丁睿麒 18222607111',
        advantage: '工厂'
    },
    {
        key: '25',
        name: '镀锌带圆管 镀锌带方矩管',
        factory: '华金公司',
        address: '河北廊坊',
        contacts: '刘春晾 18733669993',
        advantage: ''
    },
    {
        key: '26',
        name: '镀锌带圆管 镀锌带方矩管',
        factory: '暂无',
        address: '河北廊坊',
        contacts: '18365868935',
        advantage: ''
    },
    {
        key: '27',
        name: '镀锌带方矩管 镀锌带圆管',
        factory: '暂无',
        address: '暂无',
        contacts: '王艳伟 13315647310/15097626646',
        advantage: ''
    },
    {
        key: '28',
        name: '镀锌带管 热镀锌管',
        factory: '天津民阁钢铁直销',
        address: '天津静海大邱庄镇静王路',
        contacts: '电话：13821226009  18630853099 微信：13752383377  18630853099',
        advantage: '镀锌角槽，方矩管，镀锌方矩管和圆管，直缝焊管，镀锌带管，各种脚手架，无缝管，温室大棚管和光伏及配件，螺旋管，钢塑管， 异型管等各种镀锌及加工'
    },
    {
        key: '29',
        name: '镀锌带方矩管',
        factory: ' 天津盛世源钢铁有限公司',
        address: '天津市静海区大邱庄镇工业区恒通路7号',
        contacts: '13672056088 15332195595 18602640917	',
        advantage: ''
    },
    {
        key: '30',
        name: '热镀锌加工',
        factory: '天津市恒兴泰金属表面热处理有限公司',
        address: '天津市静海县',
        contacts: '022-59596682  	',
        advantage: ''
    },
    {
        key: '31',
        name: '热镀锌加工',
        factory: '天津市国盛荣创镀锌',
        address: '天津市静海区蔡公庄镇工业园',
        contacts: '"吴经理15222229900（同微信）高经理18920217888（同微信）"	',
        advantage: ''
    },
    {
        key: '32',
        name: '焊管 热镀锌圆管',
        factory: '天津华鑫瑞达钢铁(华仁科技实体工厂）',
        address: '地址:天津大屯交警队东600米',
        contacts: '热镀锌直缝管：022-28879099 17622975155热镀锌无缝管/ 螺旋管02228879066 - 18526765233 黑无缝管：022 - 28879090 17622975055 焊管及方管：15522482222 - 18100103333',
        advantage: ''
    },
    {
        key: '33',
        name: 'H型钢',
        factory: '左利商贸',
        address: '唐山丰润',
        contacts: '王猛 18131754789',
        advantage: '货全'
    },
    {
        key: '34',
        name: 'H型钢',
        factory: '唐山市云峰工贸有限公司',
        address: '唐山',
        contacts: '乔树宝 18617871000',
        advantage: '津西一级代理商'
    },
    {
        key: '35',
        name: 'H型钢',
        factory: '鑫远商贸',
        address: '唐山丰润',
        contacts: '15103152980',
        advantage: ''
    },
    {
        key: '36',
        name: 'H型钢',
        factory: '唐山月羿 ',
        address: '唐山',
        contacts: '云英杰 13333154488',
        advantage: '迁安鑫达'
    },
    {
        key: '37',
        name: 'H型钢',
        factory: '暂无',
        address: '沧州',
        contacts: '刘长榆 13315778725',
        advantage: ''
    },
    {
        key: '38',
        name: '焊接H型钢',
        factory: '暂无',
        address: '沧州',
        contacts: '15133978832',
        advantage: '工厂'
    },
    {
        key: '39',
        name: '焊接H型钢',
        factory: '唐山伟业数控精密制造厂',
        address: '河北唐山（康各庄村东）',
        contacts: '刘艳梅 15133978832',
        advantage: '非标焊接H型钢，钢结构，可打孔'
    },
    {
        key: '40',
        name: '热轧H型钢 IPE 欧标工字钢',
        factory: '秦皇岛国阳',
        address: '河北秦皇岛',
        contacts: '张晋升 13293180121',
        advantage: '工厂'
    },
    {
        key: '41',
        name: '角钢 扁钢',
        factory: '澎驿',
        address: '唐山小八里',
        contacts: '霍小菲 13933360994',
        advantage: '钢材市场型号全'
    },
    {
        key: '42',
        name: '角钢',
        factory: '唐山正丰钢铁有限公司',
        address: '唐山',
        contacts: '刘梦 13031508335',
        advantage: ''
    },
    {
        key: '43',
        name: '角钢',
        factory: '唐山市德胜金商贸有限公司',
        address: '唐山小八里钢材市场',
        contacts: '姜瑶 15632585337',
        advantage: '钢材市场'
    },
    {
        key: '44',
        name: '角钢 扁钢',
        factory: '震翔',
        address: '河北唐山',
        contacts: '男经理 18633368938',
        advantage: ''
    },
    {
        key: '45',
        name: '热镀锌角钢 角钢',
        factory: '唐山市丰润区鸿翔金属制品有限公司',
        address: '唐山市丰润区',
        contacts: '张金钢 13831533455',
        advantage: ''
    },
    {
        key: '46',
        name: '镀锌角钢',
        factory: '舜辰镀锌',
        address: '天津静海大邱庄',
        contacts: '张俊 18622653590',
        advantage: ''
    },
    {
        key: '47',
        name: '不锈钢角钢',
        factory: '宏武不锈钢',
        address: '江苏 兴化 无锡',
        contacts: '李经理 13771134265',
        advantage: '工厂'
    },
    {
        key: '48',
        name: '镀锌角钢',
        factory: '唐山市恩尚钢铁',
        address: '老和平库房北门中间口第一家',
        contacts: '宋健 15243418884',
        advantage: ''
    },
    {
        key: '49',
        name: '镀锌带角钢',
        factory: '暂无',
        address: '河北唐山',
        contacts: '小雄 18631587887',
        advantage: ''
    },
    {
        key: '50',
        name: '角钢',
        factory: '秦皇岛国阳',
        address: '河北秦皇岛',
        contacts: '张晋升 13293180121',
        advantage: '日标角钢 加硼角钢'
    },
    {
        key: '51',
        name: '角钢',
        factory: '唐山盛材钢铁有限公司 ',
        address: '河北唐山',
        contacts: '男经理 17732587666',
        advantage: '日标角钢 加硼角钢'
    },
    {
        key: '52',
        name: '国标工角槽H型钢',
        factory: '泰安市信桥金属有限公司',
        address: '山东泰安市岱岳区满装钢材大市场首钢大街49号',
        contacts: '郭帅 18266500903',
        advantage: '专业锰普型材 Q235B 355B'
    },
    {
        key: '53',
        name: '定尺+超厚角钢',
        factory: '泰安市鲁阳金属制品有限公司',
        address: '山东泰安',
        contacts: `业务经理：张志刚  0538-5906801  15205486888
                    业务经理：周建华  0538 - 5906802  13953817799
                    业务经理：郑  毅  0538 - 5906808   18954869899 18769891677`,
        advantage: '定尺+超厚角钢'
    },
    {
        key: '54',
        name: '美标 欧标H型钢',
        factory: '莱芜国泰',
        address: '代理',
        contacts: '06346892444',
        advantage: '莱钢 美标 欧标H型钢'
    },
    {
        key: '55',
        name: 'H型钢',
        factory: '津西国贸',
        address: '暂无',
        contacts: '马成栋 mcd1688',
        advantage: ''
    },
    {
        key: '56',
        name: '镀锌角钢 镀锌槽钢',
        factory: '唐山海利',
        address: '唐山',
        contacts: '贾建涛 17725500116',
        advantage: ''
    },
    {
        key: '57',
        name: '镀锌方矩管',
        factory: '天津市兆利丰钢铁有限公司',
        address: '静海大邱庄',
        contacts: '13682152221  68589322',
        advantage: ''
    },
    {
        key: '58',
        name: '镀锌方矩管',
        factory: '天津晟华泰钢铁有限公司',
        address: '天津市静海区大屯',
        contacts: '18622989686  18322125559',
        advantage: '正大、华歧一级代理商'
    },
    {
        key: '59',
        name: 'H型钢',
        factory: '唐山东坤',
        address: '唐山',
        contacts: '张祥久 15369555733',
        advantage: ''
    },
    {
        key: '60',
        name: '镀锌加工',
        factory: '天津勤晟',
        address: '暂无',
        contacts: '13820823287',
        advantage: '工厂'
    },
    {
        key: '61',
        name: '角钢 扁钢',
        factory: '暂无',
        address: '小八里钢材市场',
        contacts: '15533899993',
        advantage: '锰槽锰角大量现货'
    },
    {
        key: '62',
        name: '进口外标 H型钢 工字钢 槽钢 角钢',
        factory: '上海铸然供应链（集团）有限公司',
        address: '暂无',
        contacts: '19916556720',
        advantage: ''
    },
    {
        key: '63',
        name: '槽钢',
        factory: '唐山盛材钢铁有限公司',
        address: '河北唐山',
        contacts: '男经理 17732587666',
        advantage: '日标角钢 加硼角钢'
    },
    {
        key: '64',
        name: '日标槽钢',
        factory: '唐山鑫杭钢铁有限公司',
        address: '唐山市丰润区丰津线',
        contacts: '王静文 13373598778 /13931519765',
        advantage: ''
    },
    {
        key: '65',
        name: '槽钢 角钢',
        factory: '唐山电力',
        address: '唐山',
        contacts: '李亮 15133441288',
        advantage: '角钢 大型号 125-200'
    },
    {
        key: '66',
        name: 'H型钢',
        factory: '兴华',
        address: '暂无',
        contacts: '魏 18031034213',
        advantage: ''
    },
    {
        key: '67',
        name: 'H型钢',
        factory: '严金商贸',
        address: '暂无',
        contacts: '路 15373210655',
        advantage: ''
    },
    {
        key: '68',
        name: 'H型钢 圆钢',
        factory: '天津市优顺贸易有限公司',
        address: '暂无',
        contacts: '牛喜军 13703722381/15233882381',
        advantage: ''
    },
    {
        key: '69',
        name: '石油套管',
        factory: '天津市神州通钢管有限公司',
        address: '天津市大邱庄陈大公路东段',
        contacts: '刘风发13820386536 /022-68586699 韩英杰 13752271117/022-28896655',
        advantage: ''
    },
    {
        key: '70',
        name: '热镀锌方矩管 热镀锌圆管',
        factory: '天津市晟博通钢管有限公司',
        address: '天津大邱庄',
        contacts: `热镀锌方管销售电话：022-28892955/56/58
                    热镀锌无缝管/ 无缝管销售电话：022 - 68375500/11/22/33
                    联系人：陈吉诚 13389904444
                    服务监督电话：13820050003`,
        advantage: ''
    },
    {
        key: '71',
        name: '镀锌角钢、镀锌槽钢、镀锌圆钢、镀锌扁钢 角钢 槽钢',
        factory: '唐山建源工贸有限公司',
        address: '唐山市丰润区102国道与丰津一级公路交口鑫和物流园区内',
        contacts: `总经理：李建伟0315-5175551/18712888800
                    业务经理：刘业凤 0315-5176691
                    谷孝强0315- 5176692 冯俊青0315 - 5176693
                    李玉红0315 - 5177378 张国强0315 - 5177308
                    杨振   0315 - 5177738 王文猛0315 - 5177368
                    郭瑞娜0315 - 3154554 冯素环0315 - 3125886
                    甄淳皓0315 - 3154883`,
        advantage: ''
    },
    {
        key: '72',
        name: '槽钢',
        factory: '左利商贸',
        address: '唐山丰润',
        contacts: '王猛 18131754789',
        advantage: '货全'
    },
    {
        key: '73',
        name: '日标槽钢',
        factory: '唐山申恒钢铁',
        address: '暂无',
        contacts: '3117771 15131524567',
        advantage: ''
    },
    {
        key: '74',
        name: '圆钢 盘条 盘螺',
        factory: '广益钢铁',
        address: '河北邯郸',
        contacts: '安经理 15030035533',
        advantage: '中阳/新泰/常平/立恒/高义/星源'
    },
    {
        key: '75',
        name: '圆钢 螺纹钢 盘条',
        factory: '唐山子实承业',
        address: '唐山丰润',
        contacts: '刘雄 13363362998',
        advantage: ''
    },
    {
        key: '76',
        name: '扁钢',
        factory: '首胜金属',
        address: '河北唐山',
        contacts: '王海男 17612226341',
        advantage: ''
    },
    {
        key: '77',
        name: '扁钢',
        factory: '65锰扁钢',
        address: '天津',
        contacts: '13920299768',
        advantage: ''
    },
    {
        key: '78',
        name: '扁钢',
        factory: '国海扁钢',
        address: '唐山',
        contacts: '李 18830590543',
        advantage: ''
    },
    {
        key: '79',
        name: '扁钢',
        factory: '左利商贸',
        address: '唐山丰润',
        contacts: '王猛 18131754789',
        advantage: '货全'
    },
    {
        key: '80',
        name: '异型钢',
        factory: '建湖鼎御特钢',
        address: '江苏 无锡',
        contacts: '唐新 13773072363',
        advantage: ''
    },
    {
        key: '81',
        name: '钢板桩',
        factory: '唐山市云峰工贸有限公司',
        address: '唐山',
        contacts: '乔树宝 18617871000',
        advantage: '津西钢板桩'
    },
    {
        key: '82',
        name: '钢板桩',
        factory: '顺利钢板桩',
        address: '南京',
        contacts: '李静苇 18115643074',
        advantage: '冷弯钢板桩'
    },
    {
        key: '83',
        name: '钢板桩',
        factory: '鞍山紫竹科技型钢有限公司',
        address: '鞍山市达道湾工业园区',
        contacts: '徐Frank 15942245608',
        advantage: ''
    },
    {
        key: '84',
        name: '货架角钢',
        factory: '高隆',
        address: '河北廊坊',
        contacts: '13931603637',
        advantage: '工厂'
    },
    {
        key: '85',
        name: '货架角钢',
        factory: '1688',
        address: '暂无',
        contacts: '王晓红 18502296618',
        advantage: '贸易商'
    },
    {
        key: '86',
        name: '货架角钢',
        factory: '华宇货架',
        address: '河北廊坊',
        contacts: '15076646888',
        advantage: ''
    },
    {
        key: '87',
        name: 'C/Z/U型钢 几字钢',
        factory: '详盈',
        address: '静海大邱庄',
        contacts: '朱经理 15022426601',
        advantage: ''
    },
    {
        key: '88',
        name: 'C/Z/U型钢 几字钢',
        factory: '暂无',
        address: '江苏无锡',
        contacts: 'Tears 15251664245',
        advantage: '超厚C型钢'
    },
    {
        key: '89',
        name: 'C/Z/U型钢 几字钢',
        factory: '天津泰达',
        address: '大邱庄',
        contacts: '刘松 18526003287 小马 18526726762',
        advantage: ''
    },
    {
        key: '90',
        name: 'C/Z/U型钢 几字钢',
        factory: '天津市庆荣金属冷压延加工厂',
        address: '天津市西青区',
        contacts: '杨绍荣 13602183633',
        advantage: '打孔 镀锌'
    },
    {
        key: '91',
        name: 'C/Z/U型钢 几字钢',
        factory: '天津市源兴伟业冷弯型钢有限公司',
        address: '天津市静海区汽车部件产业园',
        contacts: '13702188292',
        advantage: '光伏支架配件'
    },
    {
        key: '92',
        name: 'C/Z/U型钢 几字钢',
        factory: '天津市鑫洪鹏异型钢有限公司',
        address: '静海经济开发区',
        contacts: '孙总 13821708918',
        advantage: 'CAUM型钢'
    },
    {
        key: '93',
        name: 'C/Z/U型钢 几字钢',
        factory: '天津市红亦金属制品有限公司',
        address: '静海大邱庄',
        contacts: '刘经理 13902075307',
        advantage: '喷漆打孔'
    },
    {
        key: '94',
        name: 'C/Z/U型钢 几字钢',
        factory: '天津市正隆鑫金属制品有限公司',
        address: '静海经济开发区',
        contacts: '郑经理 13821789608 张经理13821752018',
        advantage: 'CZULTH几字钢'
    },
    {
        key: '95',
        name: 'H型钢',
        factory: '天津和济钢铁',
        address: '天津市武清区',
        contacts: '13622012278',
        advantage: ''
    },
]

export default originData