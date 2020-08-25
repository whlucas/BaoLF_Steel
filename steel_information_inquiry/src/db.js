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
    {
        key: '96',
        name: 'C/Z/U型钢 几字钢',
        factory: '鼎舜冷弯',
        address: '静海县良王庄',
        contacts: '安智慧 13821459777',
        advantage: 'CZU型钢'
    },
    {
        key: '97',
        name: '厚壁超大方矩管',
        factory: '广信钢铁',
        address: '大邱庄工业开发区',
        contacts: '68669127 68669255',
        advantage: ''
    },
    {
        key: '98',
        name: '厚壁超大方矩管',
        factory: '源宇金属',
        address: '静海县大邱庄',
        contacts: '赵阳 15222721111',
        advantage: ''
    },
    {
        key: '99',
        name: '光伏支架',
        factory: '仁汇',
        address: '静海',
        contacts: '刘经理 13702148440',
        advantage: ''
    },
    {
        key: '100',
        name: '光伏支架',
        factory: '天津泰达',
        address: '大邱庄',
        contacts: '小马	18526726762',
        advantage: ''
    },
    {
        key: '101',
        name: '光伏支架',
        factory: '天津市正德远钢铁贸易有限公司',
        address: '天津市静海区大邱庄镇大屯村东1000米  ',
        contacts: '张子彦 13299997206',
        advantage: ''
    },
    {
        key: '102',
        name: '钢板',
        factory: '润驰钢板 ',
        address: '唐山',
        contacts: '宋春宇 18732586949',
        advantage: ''
    },
    {
        key: '103',
        name: '钢板',
        factory: '迁安市仁泰金属制品有限公司 ',
        address: '唐山',
        contacts: '王秀娟 18632506967',
        advantage: ''
    },
    {
        key: '104',
        name: '钢板',
        factory: '唐山中环贸易有限公司 ',
        address: '河北唐山丰润区',
        contacts: '王帝 15033372723',
        advantage: ''
    },
    {
        key: '105',
        name: '钢板',
        factory: '天津市盛龙发钢铁贸易有限公司',
        address: '天津市东丽区军粮城宝仓路丽兴物流园B8下',
        contacts: '王先生 18322239712',
        advantage: ''
    },
    {
        key: '106',
        name: '钢板',
        factory: '五矿钢铁天津有限公司',
        address: '天津市河西区马场道',
        contacts: '022-83865986',
        advantage: ''
    },
    {
        key: '107',
        name: '钢板',
        factory: '天津市赛特商贸有限公司',
        address: '天津市北辰区中储大厦',
        contacts: '刘志强 13821775539',
        advantage: ''
    },
    {
        key: '108',
        name: '钢板',
        factory: '天津市鑫祺基金属材料贸易有限公司',
        address: '天津市东丽区军粮城',
        contacts: '赵伟 刘凤莲	022-24910346 24850203 24850138',
        advantage: ''
    },
    {
        key: '109',
        name: '特殊钢板',
        factory: '天津市益钢贸易发展有限公司',
        address: '国际金属物流园',
        contacts: '赵宗利	18920029781  13802121869',
        advantage: ''
    },
    {
        key: '110',
        name: '钢板',
        factory: '天津市浩维钢铁贸易公司',
        address: '天津市东丽区古镇物流园',
        contacts: '付兰浩	13672027555  15122596955',
        advantage: ''
    },
    {
        key: '111',
        name: '钢板',
        factory: '天津华益晟钢铁贸易有限公司',
        address: '天津市东丽区新世嘉大厦',
        contacts: '王琳莉	13920948898',
        advantage: ''
    },
    {
        key: '112',
        name: '钢板',
        factory: '天津市华建安泰商贸有限公司',
        address: '天津市西青区',
        contacts: '刘经理	13821141199  18522145199',
        advantage: '中厚板切割批发'
    },
    {
        key: '113',
        name: '合金耐磨钢板',
        factory: '天津派旺钢材',
        address: '天津市',
        contacts: '13821103369',
        advantage: '合金耐磨 42CrMo 40Cr 65Mn'
    },
    {
        key: '114',
        name: '耐候钢板',
        factory: '申强耐候钢板',
        address: '天津市',
        contacts: '孟 13920603833',
        advantage: ''
    },
    {
        key: '115',
        name: '钢板',
        factory: '佳源板材',
        address: '河北唐山',
        contacts: '0315-7839888',
        advantage: ''
    },
    {
        key: '116',
        name: '钢板',
        factory: '天津储鑫盛钢材销售有限公司',
        address: '天津市武清区下朱庄钢铁城',
        contacts: '肖经理 15022113717',
        advantage: ''
    },
    {
        key: '117',
        name: '冷轧钢板',
        factory: '天津宝澳钢材加工有限公司',
        address: '天津市北辰区',
        contacts: '王经理	13802105338',
        advantage: ''
    },
    {
        key: '118',
        name: '冷轧钢板',
        factory: '迁安市思文科德薄板科技有限公司',
        address: '河北省迁安市',
        contacts: '马壮	18931587018',
        advantage: ''
    },
    {
        key: '119',
        name: '冷轧钢板',
        factory: '天津冶金轧一国际贸易',
        address: '天津市',
        contacts: '022-58688830',
        advantage: ''
    },
    {
        key: '120',
        name: '冷轧钢板',
        factory: '聚仁薄板',
        address: '天津市',
        contacts: '18602261276',
        advantage: ''
    },
    {
        key: '121',
        name: '热轧薄板、冷轧薄板',
        factory: '邱钢',
        address: '天津市大邱庄工业区',
        contacts: '李建	18526769688 18920078222',
        advantage: ''
    },
    {
        key: '122',
        name: '容器板、中板、卷板、锰板',
        factory: '邯郸博富钢铁贸易',
        address: '邯郸',
        contacts: '任 13313207168',
        advantage: ''
    },
    {
        key: '123',
        name: '无缝管',
        factory: '汇科',
        address: '河北',
        contacts: 'Hiram 李	13389978988',
        advantage: ''
    },
    {
        key: '124',
        name: '无缝管',
        factory: '沧州升鼎管道装备有限公司',
        address: '河北沧州',
        contacts: '蒋 18931769987',
        advantage: ''
    },
    {
        key: '125',
        name: '无缝管',
        factory: '唐太无缝钢管',
        address: '河北唐山',
        contacts: '刘新国 18833322333',
        advantage: ''
    },
    {
        key: '126',
        name: '无缝管',
        factory: '河北圣天无缝钢管',
        address: '沧州盐山',
        contacts: '张利彩 18631788561',
        advantage: ''
    },
    {
        key: '127',
        name: '不锈钢无缝管',
        factory: '温州朝阳进出口有限公司',
        address: '浙江温州',
        contacts: '黄斌	13587686960',
        advantage: ''
    },
    {
        key: '128',
        name: '不锈钢无缝管',
        factory: '温州赛灵',
        address: '温州',
        contacts: '刘小勤 15869601932',
        advantage: ''
    },
    {
        key: '129',
        name: '不锈钢无缝管',
        factory: '银隆-银来-泓泉',
        address: '温州',
        contacts: 'Susan Beautyskye',
        advantage: ''
    },
    {
        key: '130',
        name: '无缝管',
        factory: '茂源管业',
        address: '河北沧州',
        contacts: '刘雯	13166568682',
        advantage: ''
    },
    {
        key: '131',
        name: '花纹板、卷板',
        factory: '迁安市仁泰金属制品有限公司 ',
        address: '唐山',
        contacts: '王秀娟 18632506967',
        advantage: ''
    },
    {
        key: '132',
        name: '花纹板',
        factory: '天津明立达工贸有限公司',
        address: '天津市静海区大邱庄镇李八庄村东200米',
        contacts: '朱经理13920099949（微信同步） 刘经理13821908608	',
        advantage: ''
    },
    {
        key: '133',
        name: '热轧板',
        factory: '鑫祺基',
        address: '天津市东丽区军粮城',
        contacts: '赵伟，刘凤莲	24910346  24850203',
        advantage: ''
    },
    {
        key: '134',
        name: '花纹板',
        factory: '天津阅历翔钢铁贸易有限公司',
        address: '天津市东丽区军粮城',
        contacts: '侯经理 	15122058088',
        advantage: ''
    },
    {
        key: '135',
        name: '花纹板',
        factory: '天津市浩维钢铁贸易公司',
        address: '天津市东丽区古镇物流园',
        contacts: '付兰浩	13672027555  15122596955',
        advantage: ''
    },
    {
        key: '136',
        name: '花纹板',
        factory: '天津为昂商贸有限公司',
        address: '天津市东丽区津塘公路',
        contacts: '王文龙 15620095510',
        advantage: ''
    },
    {
        key: '137',
        name: '镀锌板',
        factory: '富沃德镀锌板',
        address: '山东聊城',
        contacts: '汤占朋 18963565289',
        advantage: ''
    },
    {
        key: '138',
        name: '彩涂、压型板',
        factory: '暂无',
        address: '山东滨州',
        contacts: 'zc1444',
        advantage: ''
    },
    {
        key: '139',
        name: '镀锌板 彩涂',
        factory: '星瀚股份',
        address: '山东聊城',
        contacts: '张秀欢	15865737639',
        advantage: ''
    },
    {
        key: '140',
        name: '镀锌板',
        factory: '暂无',
        address: '山东',
        contacts: '翟 15910066611',
        advantage: ''
    },
    {
        key: '141',
        name: '彩涂',
        factory: '暂无',
        address: '山东滨州',
        contacts: '马雪飞 15865224222',
        advantage: ''
    },
    {
        key: '142',
        name: '彩涂',
        factory: '山东金泰利',
        address: '山东滨州',
        contacts: '黄雪	13371335020',
        advantage: ''
    },
    {
        key: '143',
        name: '卷板中板 花纹板',
        factory: '唐山市嘉汇贸易有限公司',
        address: '唐山',
        contacts: '左坤	18731541118',
        advantage: ''
    },
    {
        key: '144',
        name: '镀锌板，高锌层',
        factory: '海钢板材',
        address: '大邱庄',
        contacts: '李经理 13821999789',
        advantage: ''
    },
    {
        key: '145',
        name: '压型板',
        factory: '星光与中捷彩钢',
        address: '天津大港',
        contacts: '马海涛 15022094946',
        advantage: ''
    },
    {
        key: '146',
        name: '压型板',
        factory: '天津新宇彩钢',
        address: '天津',
        contacts: '18322014995',
        advantage: ''
    },
    {
        key: '147',
        name: '钢板',
        factory: '中盈科技（天津）有限公司',
        address: '天津市东丽区军粮城',
        contacts: '022-844-79539',
        advantage: ''
    },
    {
        key: '148',
        name: '铝板',
        factory: '信义通',
        address: '山东济南',
        contacts: '邱云鹏 15969710876',
        advantage: ''
    },
    {
        key: '149',
        name: '铝板',
        factory: '凯华铝业',
        address: '徐州',
        contacts: '薛静 15152170099',
        advantage: ''
    },
    {
        key: '150',
        name: '铝板',
        factory: '鸿鼎',
        address: '暂无',
        contacts: '任淑芬 15106878650',
        advantage: ''
    },
    {
        key: '151',
        name: '铝板',
        factory: '河南祥和铝业',
        address: '河南郑州',
        contacts: '周梦	13071063899',
        advantage: ''
    },
    {
        key: '152',
        name: '铝板',
        factory: '舍得铝板',
        address: '河南巩义',
        contacts: 'TBALUM',
        advantage: ''
    },
    {
        key: '153',
        name: '不锈钢板',
        factory: '无锡市钧圣金属材料有限公司 ',
        address: '不锈钢板 靠谱  无锡',
        contacts: '陈伟权 13771407333',
        advantage: ''
    },
    {
        key: '154',
        name: '不锈钢板',
        factory: '卓润不锈钢',
        address: '江苏 无锡',
        contacts: '13338783870',
        advantage: ''
    },
    {
        key: '155',
        name: '镀锌带钢',
        factory: '三钢科技',
        address: '廊坊',
        contacts: '孙松	15132604670',
        advantage: ''
    },
    {
        key: '156',
        name: '镀锌带钢',
        factory: '万事达',
        address: '廊坊',
        contacts: '郭超	15231653147',
        advantage: ''
    },
    {
        key: '157',
        name: '镀锌带钢',
        factory: '海钢板材',
        address: '大邱庄',
        contacts: '李经理 13821999789',
        advantage: ''
    },
    {
        key: '158',
        name: '镀锌带 高锌层',
        factory: '胜方',
        address: '暂无',
        contacts: '崔涧松 15100720111',
        advantage: ''
    },
    {
        key: '159',
        name: '镀锌带钢',
        factory: '暂无',
        address: '暂无',
        contacts: '华美静 13582788040',
        advantage: ''
    },
    {
        key: '160',
        name: '镀锌带钢',
        factory: '暂无',
        address: '暂无',
        contacts: '王桐	17736770842',
        advantage: ''
    },
    {
        key: '161',
        name: '镀锌带钢',
        factory: '霸州市海洪金属制品有限公司',
        address: '河北省霸州市东段乡中兴园区',
        contacts: '马超	18099996999',
        advantage: ''
    },
    {
        key: '162',
        name: '镀锌带钢',
        factory: '苏州松辉金属',
        address: '苏州',
        contacts: '18914928175',
        advantage: ''
    },
    {
        key: '163',
        name: '镀锌带钢',
        factory: '海钢',
        address: '大邱庄',
        contacts: '刘仲强 15822478106',
        advantage: ''
    },
    {
        key: '164',
        name: '盘条',
        factory: '唐山宏忠钢铁',
        address: '唐山',
        contacts: '李密	15833450053',
        advantage: ''
    },
    {
        key: '165',
        name: '盘条',
        factory: '北京普德',
        address: '北京',
        contacts: '王先生 13426017740',
        advantage: '安丰国义代理'
    },
    {
        key: '166',
        name: '镀锌盘条、镀锌圆钢',
        factory: '盛鑫丰钢铁贸易',
        address: '天津滨海新区',
        contacts: '樊 18102036596',
        advantage: ''
    },
    {
        key: '167',
        name: '盘条',
        factory: '广益钢铁',
        address: '河北邯郸',
        contacts: '安经理 15030035533',
        advantage: '中阳/新泰/常平/立恒/高义/星源'
    },
    {
        key: '168',
        name: '盘条',
        factory: '唐山骏楠',
        address: '唐山',
        contacts: '闫女士 13783612332',
        advantage: ''
    },
    {
        key: '169',
        name: '盘条',
        factory: '唐山宇轩国际贸易',
        address: '暂无',
        contacts: '李女士 15690517810',
        advantage: ''
    },
    {
        key: '170',
        name: '螺纹钢',
        factory: '暂无',
        address: '邯郸',
        contacts: '宋志辉 13315566488',
        advantage: ''
    },
    {
        key: '171',
        name: '螺纹钢',
        factory: '唐山热联贸易有限公司',
        address: '北京',
        contacts: '010-6070018',
        advantage: ''
    },
    {
        key: '172',
        name: '螺纹钢',
        factory: '祥通国际',
        address: '河东区华龙道',
        contacts: '13920411512',
        advantage: ''
    },
    {
        key: '173',
        name: '螺纹钢',
        factory: '义信钢铁',
        address: '北辰区渤海钢材城',
        contacts: '李峰	15822828252',
        advantage: ''
    },
    {
        key: '174',
        name: '螺纹钢',
        factory: '国泰乾成',
        address: '北辰区中关村',
        contacts: '张荣利 13212267858',
        advantage: ''
    },
    {
        key: '175',
        name: '螺纹钢',
        factory: '丰润区明鑫商贸',
        address: '燕南钢材市场北7号',
        contacts: '18617866666',
        advantage: ''
    },
    {
        key: '176',
        name: '镀锌丝',
        factory: '暂无',
        address: '安平',
        contacts: 'Mr.SIMON	1893182910',
        advantage: ''
    },
    {
        key: '177',
        name: '热镀锌丝',
        factory: '暂无',
        address: '天津',
        contacts: '马贞珍 18102030021',
        advantage: ''
    },
    {
        key: '178',
        name: '不锈钢丝网',
        factory: '暂无',
        address: '暂无',
        contacts: 'kevin 15931442844',
        advantage: ''
    },
    {
        key: '179',
        name: '退火丝 丝网',
        factory: '暂无',
        address: '暂无',
        contacts: '13273328980',
        advantage: '安平丝网厂家'
    },
    {
        key: '180',
        name: '法兰、管件、弯头、三通',
        factory: '鑫广德',
        address: '河北沧州',
        contacts: '15373318826',
        advantage: ''
    },
    {
        key: '181',
        name: '法兰、管件、弯头、三通',
        factory: '暂无',
        address: '河北沧州',
        contacts: '邢友娜 电话暂无',
        advantage: ''
    },
    {
        key: '182',
        name: '法兰、管件、弯头、三通',
        factory: '锐泰管件',
        address: '沧州',
        contacts: '张帅	13930775883',
        advantage: ''
    },
    {
        key: '183',
        name: '法兰、管件、弯头、三通',
        factory: 'GEE',
        address: '沧州',
        contacts: '400-885-3728',
        advantage: ''
    },
    {
        key: '184',
        name: '不锈钢螺丝',
        factory: '万千腾驰螺丝',
        address: '苏州',
        contacts: '王巧云 051066726647',
        advantage: ''
    },
    {
        key: '185',
        name: '螺丝 丝杠 U型螺栓',
        factory: '邯郸市久涵贸易有限公司',
        address: '河北邯郸',
        contacts: '王经理 13363038101',
        advantage: ''
    },
    {
        key: '186',
        name: '螺丝 丝杠 U型螺栓',
        factory: '邯郸市永年区龙宸紧固件制造有限公司',
        address: '河北邯郸',
        contacts: 'Vicky 15690009032',
        advantage: ''
    },
    {
        key: '187',
        name: '螺丝',
        factory: '永年紧固件制造有限公司',
        address: '邯郸',
        contacts: '13230002208',
        advantage: ''
    },
    {
        key: '188',
        name: '螺丝',
        factory: '中盾紧固件',
        address: '暂无',
        contacts: '张星	13082104198',
        advantage: ''
    },
    {
        key: '189',
        name: '螺丝',
        factory: '温州瓯海锅溪坚世紧固件',
        address: '温州',
        contacts: '13968836262',
        advantage: ''
    },
    {
        key: '190',
        name: '螺丝',
        factory: '嘉兴海纳紧固件',
        address: '',
        contacts: 'Siky	18967309521',
        advantage: ''
    },
    {
        key: '191',
        name: '彩涂',
        factory: '山东金泰利',
        address: '山东滨州',
        contacts: '黄雪	13371335020',
        advantage: ''
    },
    {
        key: '192',
        name: '卷板中板 花纹板',
        factory: '唐山市嘉汇贸易有限公司',
        address: '唐山',
        contacts: '左坤	18731541118',
        advantage: ''
    },
    {
        key: '193',
        name: '镀锌板，高锌层',
        factory: '海钢板材',
        address: '大邱庄',
        contacts: '李经理 13821999789',
        advantage: ''
    },
    {
        key: '194',
        name: '压型板',
        factory: '星光与中捷彩钢',
        address: '天津大港',
        contacts: '马海涛 15022094946',
        advantage: ''
    },
    {
        key: '195',
        name: '压型板',
        factory: '天津新宇彩钢',
        address: '天津',
        contacts: '18322014995',
        advantage: ''
    },
    {
        key: '196',
        name: '钢板',
        factory: '中盈科技（天津）有限公司',
        address: '天津市东丽区军粮城',
        contacts: '022-844-79539',
        advantage: ''
    },
    {
        key: '197',
        name: '镀锌板 彩涂',
        factory: '唐山热轧彩涂镀锌首钢河钢',
        address: '唐山',
        contacts: '刘永利 17725532333',
        advantage: ''
    },
    {
        key: '198',
        name: '镀锌板 彩涂',
        factory: '冠县前进有花镀锌彩涂卷',
        address: '冠县',
        contacts: '159662588749',
        advantage: ''
    },
    {
        key: '199',
        name: '镀锌板 彩涂',
        factory: '山东恒丰集团',
        address: '山东',
        contacts: '张超 电话暂无',
        advantage: ''
    },
    {
        key: '200',
        name: '镀锌板 彩涂',
        factory: '山东烨辉彩涂镀铝锌',
        address: '山东博兴',
        contacts: '贾英伟 13371335050',
        advantage: ''
    },
    {
        key: '201',
        name: '镀锌板 彩涂',
        factory: '山东烨辉涂镀',
        address: '山东滨州',
        contacts: '崔路强 15314360333',
        advantage: ''
    },
    {
        key: '202',
        name: '镀锌板 彩涂',
        factory: '山东冠洲股份有限公司',
        address: '山东聊城',
        contacts: '周立硕 15166505896',
        advantage: '可以做1277宽度'
    },
    {
        key: '203',
        name: '镀锌板 彩涂',
        factory: '鑫鼎立',
        address: '山东滨州',
        contacts: '崔志敏 18854306537',
        advantage: ''
    },
    {
        key: '204',
        name: '镀锌板 彩涂',
        factory: '中泰彩板',
        address: '山东博兴',
        contacts: '张经理 15854395234',
        advantage: ''
    },
    {
        key: '205',
        name: '薄壁管',
        factory: '廊坊广义薄壁管齐林',
        address: '河北廊坊',
        contacts: '齐林	18632638669',
        advantage: ''
    },
    {
        key: '206',
        name: '薄壁管',
        factory: '廊坊诚实薄壁管',
        address: '河北廊坊',
        contacts: '13831637865',
        advantage: ''
    },
    {
        key: '207',
        name: '薄壁管',
        factory: '霸州华龙薄壁管',
        address: '霸州',
        contacts: '17732618668',
        advantage: ''
    },
    {
        key: '208',
        name: '薄壁管',
        factory: '廊坊薄壁管',
        address: '河北廊坊',
        contacts: '郭涛	13103262822',
        advantage: ''
    },
    {
        key: '209',
        name: '薄壁管',
        factory: '永阔金属',
        address: '河北廊坊',
        contacts: '仇雅鑫 15132602844',
        advantage: '可以做0.2的'
    },
    {
        key: '210',
        name: '不锈钢螺丝',
        factory: '暂无',
        address: '江苏盐城',
        contacts: '胡九青 kim_hu 暂无电话',
        advantage: ''
    },
    {
        key: '211',
        name: '夹芯板',
        factory: '山东宏鑫源钢板有限公司',
        address: '山东博兴',
        contacts: '400-1117-0688',
        advantage: ''
    },
    {
        key: '212',
        name: '钢绞线',
        factory: '隆恒',
        address: '静海',
        contacts: '赵靖	133-2345-5767',
        advantage: ''
    },
    {
        key: '213',
        name: '钢绞线',
        factory: '暂无',
        address: '河北沧州',
        contacts: '纪晓敏	13731750515',
        advantage: ''
    },
    {
        key: '214',
        name: '喷漆加工',
        factory: '暂无',
        address: '静海',
        contacts: '马先生 13352062188',
        advantage: ''
    },

]

export default originData