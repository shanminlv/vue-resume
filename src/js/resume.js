//中英文切换
	var localLang = {
		// 基本信息
		"name" : {"type" : "html", "zh" : "小步", "en" : "xiao bu"},
		"job" : {"type" : "html", "zh" : "求职目标：UI设计师", "en" : "Job Objective：Web Designer"},
		"basic_info" : {"type" : "html", "zh" : "基本资料", "en" : "Basic Info"},
		"age" : {"type" : "value", "zh" : "24岁", "en" : "24 years", "zh_notice" : "年龄/生日", "en_notice" : "Age"},
		"address" : {"type" : "value", "zh" : "上海浦东", "en" : "Shanghai", "zh_notice" : "居住地", "en_notice" : "Address"},		
		"mobile" : {"type" : "value", "zh" : "13588888888", "en" : "13588888888", "zh_notice" : "手机号码", "en_notice" : "Mobile"},
		"email" : {"type" : "value", "zh" : "my@ppt20.com", "en" : "my@ppt20.com", "zh_notice" : "电子邮箱", "en_notice" : "E-mail"},	
		"hobby" : {"type" : "html", "zh" : "兴趣爱好", "en" : "Hobbies"},
		"self" : {"type" : "html", "zh" : "自我评价", "en" : "Profile"},
		// 自我评价
		"self_value" : {"type" : "html", "zh" : "<p>深度互联网从业人员，对互联网保持高度的敏感性和关注度，熟悉产品开发流程，有很强的产品规划、需求分析、交互设计能力，能独立承担APP和WEB项目的管控工作，善于沟通，贴近用户。</p><p>衷情于互联网技术应用，在五年的工作经验当中，通过自身努力从软件开发工程师转型到产品经理，获得了不错的成绩；</p><p>我正在寻找一个更好的发展平台，希望能够充分发挥自己的优势，共同努力成就一番事业。</p>", "en" : "<p>Mature，dynamic and honest．Excellent ability of systematical management．</p><p>Ability to work independent1y，mature and resourcefu1, A stable personality and high sense of responsibility are desirable.</p><p>Initiative，independent and good communication skill．</p>"},
		"edu" : {"type" : "html", "zh" : "教育背景", "en" : "Education"},
		"honor" : {"type" : "html", "zh" : "奖项荣誉", "en" : "Honors"},
		// 荣誉
		"honor_value" : {"type" : "html", "zh" : "<p>2009.10获国家奖学金</p><p>2010.11获“三好学生称号”</p><p>2010.12华南大学生创意营销大赛一等奖</p><p>2011.4挑战杯创业计划大赛省级铜奖</p>", "en" : "<p>Member of the Latin Team of the WenQin Art Troupe</p><p>Second Place in Zhejiang University Yi Ou Mu Invitational Tournament</p><p>Third Place in Vanke Cup Real Estate Elite Challenge</p><p>Excellent officer of the Student Union of the School of Management in Zhejiang University</p>"},
		"cart" : {"type" : "html", "zh" : "技能证书", "en" : "Skills"},
		// 技能证书
		"cert_value" : {"type" : "html", "zh" : "<p>CET-6，优秀的听说写能力</p><p>计算机二级，熟悉计算机各项操作</p><p>高级营销员，国家职业资格四级</p>", "en" : "<p>Windows 95/98/2000 MS DOS</p><p>Java HTML</p><p>JavaScript Shell</p><p>Visual Basic 4.0 Microm Rbase</p><p>Macromedia Dream Weaver Fireworks</p><p>Adobe PhotoShop MS Access</p><p>Microsoft Front Page Oracle</p><p>Corel Paradox Visual C++</p><p>Adobe Photo Mill</p>"},
		"in_school" : {"type" : "html", "zh" : "校内实践", "en" : "Experience"},
		"out_school" : {"type" : "html", "zh" : "校外实践", "en" : "Experience"},
		"work" : {"type" : "html", "zh" : "工作经历", "en" : "Experience"},
		"project" : {"type" : "html", "zh" : "项目经验", "en" : "Project"},
		"graph" : {"type" : "html", "zh" : "个人技能", "en" : "Master Skills"},	
		// 内容
		// 教育背景
		/*"edu_time" : {"type" : "html", "zh" : "2008.9-2012.7", "en" : "Sept. 2007 till now"},
		"edu_unit" : {"type" : "html", "zh" : "脚步网科技大学", "en" : "Jiaobu Institute of Technology"},
		"edu_job" : {"type" : "html", "zh" : "市场营销（本科）", "en" : "Boston MA"},
		"edu_value" : {"type" : "html", "zh" : "<p>主修课程</p><p>基本会计、统计学、市场营销、国际市场营销、市场调查与预测、商业心理学、广告学、公共关系学、货币银行学、经济法、国际贸易、大学英语、经济数学、计算机应用等。</p>", "en" : "<p>Foreign Philosophies, International Trade, Fine Arts，Artistic Design,Art Theory,pencil sketch,Introduction to ART,sketch,modelling foundation and color foundation,sculpture,Critical Contemporary Of Western Artists, Introduction to copper plate engraving , ink and wash painting,interaction with color,Composition,Introduction to lithograph.</p>"},
		// 工作经历
		"work_a_time" : {"type" : "html", "zh" : "2012-04至今", "en" : "2000 – Present"},
		"work_a_unit" : {"type" : "html", "zh" : "脚步网信息科技有限公司", "en" : "Jiaobu Web Designers, Boston MA"},
		"work_a_job" : {"type" : "html", "zh" : "产品经理", "en" : "Web Designer"},
		"work_a_value" : {"type" : "html", "zh" : "<p>1、团队管理，电商产品管理，电子商务策划项目管理；</p><p>2、网站需求分析，产品设计，产品跟踪，及后续产品优化工作；</p><p>3、与研发、营销、客服配合，展开产品开发、销售、售后工作；</p><p>4、产品应用市场调研和分析；</p><p>5、公司品牌宣传，产品推广，负责公司网站策划和运营工作。</p>", "en" : "<p>Responsible for the design and development of Internet, Intranet, web sites and web applications through the use of Macromedia Dream weaver, Front Page and Adobe Photo Shop 5.0.</p><p>Developed page layout, navigation, copy, animation, buttons and icons.</p><p>Presented designs and concepts to Clients and the Management for review.</p><p>Installed Shopping Carts, Automatic Response mailers and Online Forms.</p><p>Assisted help desk staff in streamlining the process.</p>"},
		
		"work_b_time" : {"type" : "html", "zh" : "2010-03-2012-03", "en" : "1998 – 2000"},
		"work_b_unit" : {"type" : "html", "zh" : "脚步网信息科技有限公司", "en" : "Jiaobu Information and Technology Co., Ltd"},
		"work_b_job" : {"type" : "html", "zh" : "软件工程师", "en" : "Web Designer"},
		"work_b_value" : {"type" : "html", "zh" : "<p>1、负责公司内部业务系统的设计及改进，参与公司网上商城系统产品功能设计及实施工作。</p><p>2、负责客户调研、客户需求分析、方案写作等工作， 参与公司多个大型电子商务项目的策划工作，担任大商集团网上商城一期建设项目经理。</p>", "en" : "<p>Responsible for the design of client websites right from conceptualization stage to its implementation.</p><p>Worked with digital graphical design tools including Adobe PhotoShop, Fireworks, Flash and Illustrator.</p><p>Created animations using flash for an on-line multimedia store.</p><p>Responsible for web hosting and the installation of e-mail and forms.</p><p>Developed access database and web interface suitable for client needs.</p><p>Perform the validation and testing of the finished web sites.</p>"},*/
		
		
		
	}
	
$(function() {
	$("input").live('keyup',function(){
		var va = $(this).val();
		$(this).attr("value",va);
	});
	$(".resume_image").resizable();
	$(".resume_textarea").resizable();
	/**
	 * 模块显示隐藏
	 */
	$(".resume_module li i").live("click", function() {
		var $this = $(this);
		var forid = $this.attr("for-id");
		var checked_ = $this.hasClass("on");
		if(forid == 'resume_cover' || forid == 'resume_letter' || forid == 'resume_cont' || forid == 'resume_back' )
		{
			if(document.getElementById(forid) == null)
			{
				if(forid == 'resume_cover')
				{
					var temp_type = 1;
				}else if(forid == 'resume_letter')
				{
					var temp_type = 2;
				}else if(forid == 'resume_cont')
				{
					var temp_type = 0;
				}else if(forid == 'resume_back')
				{
					var temp_type = 3;
				}
				$("#resume_template").load("/Home/Resume/temp_list", {temp_type: temp_type},function(response,status,xhr){
				 })
				 layer.open({
				  type: 1,
				  title:false,
				  zIndex :66666666,
				  closeBtn: 0, //不显示关闭按钮
				  area: ['1100px', '100%'], //宽高
				  shade: [0.7, '#000'],
				  shadeClose: true, //开启遮罩关闭
				  content: $("#myModalxzmb")
				});
				return;
			}
			
		}
		if(checked_) {
			$("#" + forid).fadeOut();
			$this.removeClass("on");
			$("#hidden_data").find("."+forid).val(0);
		} else {
			$("#" + forid).fadeIn();
			$this.addClass("on");
			$("#hidden_data").find("."+forid).val(1);
			$('html,body').animate({scrollTop: $("#" + forid).offset().top - 200}, 400);
		}
		resumeFomart();
	});
	
	$(".resume_hidden").live("click", function(event) {
		var $hidden = $(this);
		event.stopPropagation();
		resumeConfirm("隐藏后可在内容模块设置显示，是否隐藏？", function() {
			var forid = $hidden.attr("for-id");
			$("#" + forid).hide();
			$("#hidden_data").find("."+forid).val(0);
			$(".resume_module li i[for-id=" + forid + "]").removeClass("on");	
		}, function() {
		});
	});
	
	// 返回顶部
	$(window).scroll(function(){
		var scrollt = document.body.scrollTop - document.documentElement.scrollTop;
		if(scrollt > 200)
			$(".gotop").show();
		else
			$(".gotop").hide();
	});
	$(".gotop").click(function(){
		$("html,body").animate({scrollTop : "0px"}, 200);
	});
	
	$(".navBar li").click(function() {
		var $this = $(this);
		var type = $this.attr("data-module");
		showModule(type);
	});
	
	// 删除
	$(".baseDel .delete").live("mouseover", function(){
		$(this).closest(".baseDel").css({'border-color':'#ccc','border-width':'1px','border-style':'dashed','opacity':'0.5'});
		$(this).css('opacity','1');
	});
	$(".baseDel .delete").live("mouseout", function(){
		$(this).closest(".baseDel").css({'border-color':'transparent','opacity':'1'});
	});
	$(".baseDel_ .delete_").live("mouseover", function(){
		$(this).closest(".baseDel_").css({'border-color':'#ccc','border-width':'1px','border-style':'dashed','opacity':'0.5'});
		$(this).css('opacity','1');
	});
	$(".baseDel_ .delete_").live("mouseout", function(){
		$(this).closest(".baseDel_").css({'border-color':'transparent','opacity':'1'});
	});
	$(".custDel .cust_delete").live("mouseover", function(){
		$(this).closest(".custDel").css({'border-color':'#ccc','border-width':'1px','border-style':'dashed','opacity':'0.5'});
		$(this).css('opacity','1');
	});
	$(".custDel .cust_delete").live("mouseout", function(){
		$(this).closest(".custDel").css({'border-color':'transparent','opacity':'1'});
	});
	//
	$(".baseDel").live("mouseover", function(){
		$(this).find(".delete").show();
	});
	$(".baseDel").live("mouseout", function(){
		$(this).find(".delete").hide();
	});
	
	$(".baseDel .conTitle").live("mouseover", function(){
		$(this).siblings(".delete").css({'display':'block'});
	});
	$(".baseDel .conTitle").live("mouseout", function(){
		$(this).siblings(".delete").css({'opacity':'0'});
	});
	//整个模块删除状态
	$(".editBtn .btnDel").live("mouseover", function(){
		$(this).closest(".positonDiv").children('.mouldDiv').css({'opacity':'0.5'});
		$(this).closest(".positonDiv").children('.skillUl').css({'opacity':'0.5'});
	});
	$(".editBtn .btnDel").live("mouseout", function(){
		$(this).closest(".positonDiv").children('.mouldDiv').css({'opacity':'1'});
		$(this).closest(".positonDiv").children('.skillUl').css({'opacity':'1'});
	});	

	//hover边框
	$(".baseDel .conTitle").live("mouseover",function(){
		$(this).closest(".baseContent").css({'border-color':'rgba(141, 165, 252, 0.6)','border-width':'1px','border-style':'dashed'});
		$(this).siblings(".delete").css({'opacity':'1'});
	});
	$(".baseDel .conTitle").live("mouseout",function(){
		$(this).closest(".baseContent").css({'border-color':'transparent','border-width':'1px','border-style':'dashed'});
		$(this).siblings(".delete").css({'opacity':'0'});
	});
	
		//拖拽调用
	(function() {
		var foo = document.getElementById("foo");
		if(foo) {
			new Sortable(foo, {
				group : "sortLeft",
				handle : ".editBtn"
			});
		}
		
		var bar = document.getElementById("bar");
		if(bar) {
			new Sortable(bar, {
				group : "sortLight",
				handle :".editBtn"
			});
		}
	})();
		
	// 提示框
	var options = {"show" : false};
	// 图标提示框
	$('#myModalIcon').modal(options).on("show.bs.modal", function() {
		if(!iconIsInit) {
			loadIcon();
			iconIsInit = true;
		}
	});
	
	$(".resume_language").click(function(){
		var language = $(".resume_language.on").data("lag");
		var nowLang = language;
		var oldLang = null;
		if(nowLang == "zh")
		{
			oldLang = "en";
		}else
		{
			oldLang = "zh";
		}
		$("#hidden_data").find(".resume_lang").val(nowLang);
		for(var key in localLang) {
			var langValue = localLang[key];
			var type = langValue["type"];
			var nowValue = langValue[nowLang];
			var oldValue = langValue[oldLang];
			var placeholder = langValue[nowLang + "_notice"];
			var value = null;
			var keyObj = $(".resume_lang_" + key);
			if(type == "html")
				value = keyObj.html();
			else
				value = keyObj.val();
			value = clearBlank(value);
			if(value == oldValue) {
				if(type == "html")
					keyObj.html(nowValue);
				else
					keyObj.val(nowValue);
			}
			if(placeholder && type == "value")
				keyObj.attr("placeholder", placeholder);
		}
	});
	
	//添加模块
	$(".resume_add").live("click", function() {
		var $this = $(this);
		var $addArea = $this.closest(".resume_add_area");
		var $appendArea = $addArea.find(".resume_append_area");
		if(!$appendArea || $appendArea.length == 0)
			$appendArea = $addArea;
		var forkey = $this.attr("for-key");
		var formodel = $this.parent().attr("for-model");
		var html = "";
		if(forkey == "resume_msg")
			html = get_resume_msg();
		else if(forkey == "resume_graph")
			html = get_resume_graph(formodel);
		else if(forkey == "resume_icon")
			html = get_resume_icon(formodel);
		else if(forkey == "resume_item")
			html = get_resume_item(formodel);
		if(html && html.length > 0)
			$appendArea.append(html);
		resumeFomart();
	});
	
	//删除内容区域
	$(".resume_delete_").live("click", function() {
		var $delete = $(this);
		var delresume = {};
		delresume['id'] = $delete.parent().parent().attr("for-id");
		delresume['model'] = $delete.closest('.resume_append_area').attr("for-model");
		delresume['field'] = $delete.next().attr("for-key");
		resumeConfirm(null, function() {
			//ajax 删除内容区域
			if(delresume['id'])
			{
				$.ajax({
				   type: "POST",
				   url: "/Home/Resume/del_ajax",
				   data : {"delresume" : JSON.stringify(delresume)},
				   success: function(data){
						if(data.ok == 1)
						{
							$delete.closest(".resume_delete_area_").remove();
						}
				   }
				});	
			}else
			{
				$delete.closest(".resume_delete_area_").remove();
			}			
		}, function() {
		});
	});
	//删除模块
	$(".resume_delete").live("click", function() {
		var $delete = $(this);
		var delresume = {};
		delresume['id'] = $delete.parent().attr("for-id");
		delresume['model'] = $delete.closest('.resume_append_area').attr("for-model");
		resumeConfirm(null, function() {
			//ajax 删除模块
			if(delresume['id'])
			{
				$.ajax({
				   type: "POST",
				   url: "/Home/Resume/del_ajax",
				   data : {"delresume" : JSON.stringify(delresume)},
				   success: function(data){
						if(data.ok == 1)
						{
							$delete.closest(".resume_delete_area").remove();
						}
				   }
				});	
			}else
			{
				$delete.closest(".resume_delete_area").remove();
			}			
		}, function() {
		});
	});
	//删除自定义模块
	$(".resume_custom_delete").live("click", function() {
		var $delete = $(this);
		var delresume = {};
		delresume['time_id'] = $delete.parent().attr("time_id");
		delresume['model'] = 'custom';
		resumeConfirm(null, function() {
			//ajax 删除模块
			if(delresume['time_id'])
			{
				$.ajax({
				   type: "POST",
				   url: "/Home/Resume/del_ajax",
				   data : {"delresume" : JSON.stringify(delresume)},
				   success: function(data){
						if(data.ok == 1)
						{
							$delete.closest(".custDel").remove();
						}
				   }
				});	
			}else
			{
				$delete.closest(".custDel").remove();
			}
			//移除图标
			var _time_id = "resume_"+delresume['time_id'];
			$("#my_resume_module li[for-id='"+_time_id+"']").remove();
		}, function() {
		});
	});
	
	//自定义模块
	var _custom_model = '';
	$("#custom_model").click(function(){
		_custom_model = layer.open({
		  type: 1,
		  area: ['670px', '430px'], //宽高
		  title:false,
		  skin: 'resume-module-class',
		  closeBtn: 0, //不显示关闭按钮
		  anim: 2,
		  shadeClose: true, //开启遮罩关闭
		  content: $(".model_div")
		});
	});
	$(".add_module_confirm").click(function(){
		var _id = new Date().getTime();
		var _title = $("#custom_title").val();
		var _time = $("#custom_time").val();
		var _name = $("#custom_name").val();
		var _job = $("#custom_job").val();
		var _content = $("#custom_content").val();
		_title = $.trim(_title);
		if(_title.length == 0)
		{
			layer.msg("模型名称不能为空",{zIndex:66666667});
			return false;
		}
		if(!_name)
		{
			_name = "单位";
		}
		if(!_job)
		{
			_job = "职位";
		}
		if(!_content)
		{
			_content = "内容";
		}
		if(_time)
		{
			var _custom_model_content_html = get_custom_model_html(_id,_title,_time,_name,_job,_content);
		}else
		{
			var _custom_model_content_html = get_custom_model_content_html(_id,_title,_content);
		}
		//填充自定义数据
		var _my_resume_module = '<li class="cart"><i class="on" for-id="resume_'+_id+'"></i>'+_title+'</li>';
		var _my_resume_module_hidden = '<input type="hidden" class="resume_'+_id+'" value="1"/>';
		$("#nav_resume_model").append(_my_resume_module);
		$("#hidden_data").append(_my_resume_module_hidden);
		$("#foo").append(_custom_model_content_html);
		layer.close(_custom_model);
		resumeFomart();
	});
	
	 //导航内容的显示隐藏
	 $("#nav_resume_model li i").each(function(){
		 var for_id = $(this).attr("for-id");
		 if(document.getElementById(for_id) == null)
		 {
			 $(this).parent().remove();
		 }
	 });
	 
	 $.fn.extend({
	        insertAtCaret: function (myValue) {
	            var $t = $(this)[0];
	            if (document.selection && document.selection.createRange) {
	            	document.selection.createRange().pasteHTML(text);
	            }else if (window.getSelection && window.getSelection().getRangeAt(0)){
	            	var j = window.getSelection();
	            	var range = j.getRangeAt(0);
	            	range.collapse(false);
	            	var node = range.createContextualFragment(myValue);
	            	var c = node.lastChild;
	            	range.insertNode(node);
	            	if(c){
	            		range.setEndAfter(c);
	            		range.setStartAfter(c)
	            	}
	            	j.deleteFromDocument();
	            	j.removeAllRanges();
	            	j.addRange(range);
	            }
	        }
	    });

	resumeIcon();
	resumeDrag();
	resumeLinePull();
	resumeLange();
	resumeFomart();
});

document.addEventListener("paste", function(e) {
	if($(":focus").is("div[contenteditable=true]")) {
		$(":focus").insertAtCaret(e.clipboardData.getData("text"));
		e.preventDefault();
	}
});


/**
 * 格式化：分页位置，多页控制最后一页高度
 * 注：导出的JS
 */
 var addMessage = {} // 获取添加信息
var themeMessage = {} // 当前主题信息
var pageHeight = 1556; // 每页高度
var nowPageSize = 0; // 当前页数
var resumeNoticeContent = null; // 内容提示信息
var resumePageHeight = 0;
var resumePageBreak = '<div class="resumePageBreak"><span>该处分页请回车OR换行避开</span></div>';
function resumeFomart() {
	var resumeBody = $("#resume_body");
	var resumeHeight = resumeBody.css({"height" : "auto"}).outerHeight();
	resumeBody.css({"height" : resumePageHeight + "px"});
	var pageSize = Math.ceil(resumeHeight / pageHeight);
	if(pageSize != nowPageSize) {
		resumePageHeight = pageSize * pageHeight;
		resumeBody.css({"height" : resumePageHeight + "px"});
		nowPageSize = pageSize;
		for(var index = 1; index < pageSize; index++) {
			var pageBreakObj = $(resumePageBreak);
			pageBreakObj.css({"top" : (index * pageHeight) + "px"});
			resumeBody.append(pageBreakObj);
		}
	}
}


/**
 * 自定义确认框
 */
function resumeConfirm(content, success, cancel) {
	if(!content)
		content = "删除后该内容将不可恢复，确认删除吗？";
	$("#confirmContent").text(content);
	$('#delModal').modal("show");
	$("#confirmSuccess").click(function() {
		if(success) {
			success();
			cancel = null;
			success = null;
			$('#delModal').modal("hide");
			$("#confirmSuccess").unbind("click"); // 解除事件
		}
	});
	$("#confirmCancel").click(function() {
		if(cancel) {
			cancel();
			cancel = null;
			success = null;
			$('#delModal').modal("hide");
			$("#confirmCancel").unbind("click");
		}
	});
}


/**
 * 线条工具
 */
/*var nowLine = null;
function resumeLine() {
	$("#line_width").change(function() {
		var width = $(this).val();
		if(nowLine) {
			nowLine.css({"width" : width + "px"});
		} else {
			layer.msg("请点击线条后再修改！");
		}
	});
	$(".line_style").click(function() {
		var style = $(this).attr("data-style");
		if(nowLine) {
			nowLine.css({"border-top-style" : style});
		} else {
			layer.msg("请点击线条后再修改！");
		}
	});
	$(".line_width").click(function() {
		var width = $(this).attr("data-width");
		if(nowLine) {
			nowLine.css({"border-top-width" : width + "px"});
		} else {
			layer.msg("请点击线条后再修改！");
		}
	});
	 $(".resume_line").live("click", function() {
		 showModule("line");
		 removeFocus();
		 nowLine = $(this);
		 nowLine.addClass("resume_focus");
		 //addFocusStyle(nowLine.css("width"), nowLine.css("border-top-width"), nowLine.css("border-top-color"));
		 $("#line_width").val(parseInt(nowLine.css("width")));
	 });
	 
}*/

/**
 * 图标工具
 */
var iconPage = 1;
var nowIcon = null;
var iconIsInit = false;
function resumeIcon() {
	$("#icon_search").click(function() {
		loadIcon();
	});
	$("#myModalIcon .icon_type a").click(function() {
		$("#myModalIcon .icon_type a").removeClass("current");
		$(this).addClass("current");
		loadIcon();
	});
	$("#myModalIcon .icon_page button").click(function() {
		var type = $(this).attr("data-type");
		if(type && type == "prev")
			loadIcon(-1);
		else
			loadIcon(+1);
	});
	$("#resume_icon_list li").live("click", function() {
		var $this = $(this);
		if(nowIcon) {
			var code = $this.attr("data-code");
			nowIcon.text(code);
			$('#myModalIcon').modal("hide");
		} else {
			layer.msg("请点击图标后替换！");
		}
	});
	$("#icon_size").change(function() {
		var size = $(this).val();
		if(nowIcon) {
			nowIcon.css({"fontSize" : size + "px"});
		} else {
			layer.msg("请点击图标后再修改！");
		}
	});
	$(".resume_icon_diy").live("click", function(){
		// showModule("icon");
		//removeFocus();
		nowIcon = $(this);
		$("#icon_size").val(parseInt(nowIcon.css("fontSize")));
		$("#myModalIcon").modal({"show" : true});
	});
	$(".resume_icon_diy").live("click", function() {
		 // showModule("icon");
		 //removeFocus();
		 nowIcon = $(this);
		 nowIcon.addClass("resume_focus");
		 //addFocusStyle(nowIcon.width(), nowIcon.height(), nowIcon.css("border-top-color"));
	 });
	$("#icon_search_value").keyup(function(e) {
		if(e.keyCode == "13")
			loadIcon();
	});
}

/**
 * 线条拉升
 */
var pullLine = null;
function resumeLinePull() {
	$(".resume_line").live("mousedown", function() {
		var $this = $(this);
		pullLine = new Object();
		var ee=arguments.callee.caller.arguments[0] || window.event;
		pullLine.x = ee.clientX;
		pullLine.y = ee.clientY;
		pullLine.width = parseInt($this.css("width"));
		pullLine.line = $this;
	});
	
	$(document).mouseup(function() {
		if(pullLine)
			pullLine = null;
	});
	
	$(document).mousemove(function(e) {
		var ee=arguments.callee.caller.arguments[0] || window.event;
		resumeLineDraw(pullLine, ee.clientX, ee.clientY);
		if(dragObject)
			return false;
	});
}
/**
 * 重写线条
 */
function resumeLineDraw(pullLine, x, y) {
	if(pullLine) {
		var line = pullLine.line;
		var ox = pullLine.x;
		var width = pullLine.width;
		line.css("width", (x - ox + width) + "px");
	}
}


// 加载
function loadIcon(page) {
	if(page)
	{
		iconPage += page;
		if(iconPage == 0)
		{
			iconPage = 1;
		}
	}
	else
		iconPage = 1;
	var type = $("#myModalIcon .icon_type a.current").attr("data-type");
	if(!type)
		type = "";
	var name = $("#icon_search_value").val();
	if(name)
	{
		type = "";
	}		 
	$("#icon_list").load("/Home/Resume/icon",{p:iconPage,type:type,name:name});
}

/**
 * 添加选中样式
 * @param width 选中区域宽度
 * @param height 选中区域高度
 */
function addFocusStyle(width, height, color) {
	width = parseInt(width);
	height = parseInt(height);
	if(!color)
		color = "#ff6600";
	$("#resume_focus_style").remove();
	$("head").append('<style type="text/css" id="resume_focus_style">\
		.resume_focus:after{\
			position:absolute;\
			border:1px dashed ' + color + ';\
			content:"";\
			width:' + (width + 6) + 'px;\
			height:' + (height + 6) + 'px;\
			top:-' + (height + 3) + 'px;\
			left:-3px;\
		}\
	</style>');
}
/**
 * 去掉选中样式
 */
function removeFocus() {
	if(nowLine)
		nowLine.removeClass("resume_focus");
	if(nowIcon)
		nowIcon.removeClass("resume_focus");
}


var dragObject = false;
var insertTextareaDiv = '<div class="resume_textarea resume_drag positonDiv ui-resizable on"><span class="resume_drag_move"></span><span class="resume_drag_delete"></span><div class="textarea" contenteditable="true"></div><div class="ui-resizable-handle ui-resizable-e" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-s" style="z-index: 90;"></div><div class="ui-resizable-handle ui-resizable-se ui-icon ui-icon-gripsmall-diagonal-se" style="z-index: 90; display: block;"></div></div>';

/**
 * 插入文本框
 */
function insertTextarea(content) {
	var $textarea = $(insertTextareaDiv);
	$textarea.find("div.textarea").text(content);
	$("#resume_body").append($textarea);
}

/**
 * 加载风格
 */
var defaultStyle = null;
function resumeStyle(styles, defaultValue) {
	var styleList = $("#resume_style");
	if(defaultStyle)
	{
		defaultValue = defaultStyle;
	}
	if(styles) {
		for(var i = 0; i < styles.length; i++) {
			var style = styles[i];
			for(var key in style) {
				var value = style[key];
				if(!defaultValue) {
					if(i == 0)
						defaultStyle = key;
					styleList.append('<li class="resume_style ' + (i == 0 ? 'on' : '') + '" data-style="' + key + '" style="background:#' + value + ';"></li>');
				} else {
					defaultStyle = defaultValue;
					styleList.append('<li class="resume_style ' + (key == defaultValue ? 'on' : '') + '" data-style="' + key + '" style="background:#' + value + ';"></li>');
				}
				break;
			}
		}
	}

	if(defaultValue)
		defaultStyle = defaultValue;
		$("#hidden_data").find(".resume_temp_colour").val(defaultValue);
	styleList.find(".resume_style").click(function() {
		styleList.find(".resume_style").removeClass("on");
		var $this = $(this);
		$this.addClass("on");
		var style = $this.attr("data-style");
		$("#resume_body").removeClass(defaultStyle).addClass(style);
		defaultStyle = style;
		$("#hidden_data").find(".resume_temp_colour").val(style);
	});
}

function setTheme() {
	defaultStyle = $("#hidden_data").find(".resume_temp_colour").val();
}
/***
 * 拖动
 */

function resumeDrag() {
	$(".resume_drag_delete").live("click", function() {
		var $this = $(this);
		var _img = $this.closest(".resume_drag").find("img").attr("src");
		if(_img)
		{
			var res_id = $("#res_id").val();
			$.ajax({
			   type: "POST",
			   url: "/Home/Resume/resume_delete_image",
			   data : {"res_id":res_id,"img" : _img},
			   success: function(data){
					if(data.error == 1)
					{
						layer.msg(data.msg,{icon: 5});
					}else if(data.ok == 1)
					{
						//删除后保存简历
						$this.closest(".resume_drag").remove();
						$("#save_resume").click();	
					}
			   }
			});
		}else
		{
			$this.closest(".resume_drag").remove();
		}
	});
	Dragging(getDraggingDialog).enable(); // 拖动
}

var Dragging = function(validateHandler) { // 参数为验证点击区域是否为可移动区域，如果是返回欲移动元素，负责返回null
	var diffX = 0;
	var diffY = 0;
	var draggingObj = null; // dragging Dialog

	function mouseHandler(e) {
		switch (e.type) {
			case 'mousedown':
				draggingObj = validateHandler(e);//验证是否为可点击移动区域
				if (draggingObj != null) {
					diffX = e.clientX - draggingObj.offsetLeft;
					diffY = e.clientY - draggingObj.offsetTop;
				}
			break;
	
			case 'mousemove':
				if (draggingObj) {
					var left = e.clientX - diffX;
					var top = e.clientY - diffY;
					var bodyWidth = $("#resume_body").width();
					var bodyHeight = $("#resume_body").outerHeight();
					var objectWidth = $(draggingObj).outerWidth(true);
					var objectHeight = $(draggingObj).outerHeight(true);
					if(left < 0)
						left = 0;
					if(top < 0)
						top = 0;
					if(left + objectWidth > bodyWidth)
						left = bodyWidth - objectWidth;
					if(top + objectHeight > bodyHeight)
						top = bodyHeight - objectHeight;
					draggingObj.style.left = left + 'px';
					draggingObj.style.top = top + 'px';
				}
			break;
	
			case 'mouseup':
				draggingObj = null;
				diffX = 0;
				diffY = 0;
				dragObject = false;
			break;
		}
	}

	return {
		enable : function() {
			document.addEventListener('mousedown', mouseHandler);
			document.addEventListener('mousemove', mouseHandler);
			document.addEventListener('mouseup', mouseHandler);
		},
		disable : function() {
			document.removeEventListener('mousedown', mouseHandler);
			document.removeEventListener('mousemove', mouseHandler);
			document.removeEventListener('mouseup', mouseHandler);
		}
	}
}
function getDraggingDialog(e) {
	var target = e.target;
	while (target && target.className.indexOf('resume_drag') == -1) {
		target = target.offsetParent;
	}
	if (target != null) {
		if(target.className.indexOf('resume_image') >= 0) {
			dragObject = true;
			return target;
		}
		if(target.className.indexOf('resume_drag_move') >= 0) {
			dragObject = true;
			return target.offsetParent;
		}
		return null;
	} else {
		return null;
	}
}


function get_resume_graph(formodel)
{
	var model_len = $("."+formodel+"_").length;
	var _formodel = formodel+'_';
	var _model_len = formodel+'_'+model_len;
	return '<li class="baseDel resume_delete_area resume_graph_item '+_formodel+' '+_model_len+'"  for-id="">\
			<div class="skillTitle"><input class="graph_msg baseBorder" for-type="val" for-key="skill_graph" placeholder="填写你的技能名称" value="" maxlength="10"/></div>\
			<span><i class="resume_line graph_msg" for-type="style" for-key="style_graph"></i></span>\
			<div class="delete resume_delete"></div>\
		</li>';
}

function get_resume_icon(formodel)
{
	var model_len = $("."+formodel+"_").length;
	var _formodel = formodel+'_';
	var _model_len = formodel+'_'+model_len;
	return '<div class="hobbyicon baseDel resume_delete_area resume_icon_item '+_formodel+' '+_model_len+'"  for-id="">\
					<a class="hobby_msg icon wbdfont resume_icon_diy" for-key="hobby_val" for-type="html">&#xe698;</a>\
					<span class="hobbyTitle"><input class="hobby_msg baseBorder" for-key="hobby_title" placeholder="兴趣爱好" value="" maxlength="10"/></span>\
					<div class="delete resume_delete"></div>\
				</div>';
}

function get_resume_msg()
{
	return '<div class="custom_information baseMsg baseDel resume_delete_area">\
		<div class="delete resume_delete"></div>\
		<a class="resume_icon_diy icon wbdfont">&#xe602;</a>\
		<input class="baseBorder" placeholder="自定义" value="" maxlength="25"/>\
	</div>'				
};

/**
 * 清除空白符
 */
function clearBlank(text) {
	if(!text)
		return "";
	text = text.replace(/(^\s+)|(\s+$)/ig,'');
	return text;
}

function resumeLange()
{
	var lang = $("#hidden_data").find(".resume_lang").val();
	if(lang == 'en')
	{
		var nowLang = 'en';
		var oldLang = null;
		if(nowLang == "zh")
		{
			oldLang = "en";
		}else
		{
			oldLang = "zh";
		}
		$("#hidden_data").find(".resume_lang").val(nowLang);
		for(var key in localLang) {
			var langValue = localLang[key];
			var type = langValue["type"];
			var nowValue = langValue[nowLang];
			var oldValue = langValue[oldLang];
			var placeholder = langValue[nowLang + "_notice"];
			var value = null;
			var keyObj = $(".resume_lang_" + key);
			if(type == "html")
				value = keyObj.html();
			else
				value = keyObj.val();
			value = clearBlank(value);
			if(value == oldValue) {
				if(type == "html")
					keyObj.html(nowValue);
				else
					keyObj.val(nowValue);
			}
			if(placeholder && type == "value")
				keyObj.attr("placeholder", placeholder);
		}
	}
}

//online  部分
$(document).ready(function(){
	
//////////编辑器///////////
//显示编辑器
	$(".resume_line").live("click",function(){
		$(".resume_textarea").removeClass("on");
		$(".resume_line").removeClass("on resume_focus");
		$(".resume_icon_diy").removeClass("on resume_focus");
		$(this).addClass("on resume_focus");
		addFocusStyle($(this).css("width"), $(this).css("border-top-width"), $(this).css("border-top-color"));
	});
	$(".resume_icon_diy").live("click", function(){
		$(".resume_line").removeClass("on resume_focus");
		$(".resume_icon_diy").removeClass("on resume_focus");
		nowIcon = $(this);
		nowIcon.addClass("on resume_focus");
		addFocusStyle($(this).css("width"), $(this).css("border-top-width"), $(this).css("border-top-color"));
		$("#myModalIcon").modal({"show" : true});
		
	});
	$(".baseMsg").click(function(){

		$("#baseditBar").find("li:eq(1)").addClass("active").attr("aria-expanded",true).siblings("li").removeClass("active").attr("aria-expanded",false);
		$("#editor").find(".zpart").css("z-index",50);
		$("#editor").find(".fontsty").css("z-index",200);
		$("#editor").find(".alignment").css("z-index",200);
		$(".tab-content").find(".tab-pane:eq(1)").addClass("active").addClass("in").siblings(".tab-pane").removeClass("active").removeClass("in");
	});
	
	$(".resume_textarea").live('click',function(){
		$(".resume_line").removeClass("on");
		$(".resume_icon_diy").removeClass("on");
		$(".resume_textarea").removeClass("on");
		$(this).addClass("on");
		$("#line_width").val(parseInt($(this).css('width')));
		$("#line_height").val(parseInt($(this).css('height')));
		$("#baseditBar").find("li:eq(1)").addClass("active").attr("aria-expanded",true).siblings("li").removeClass("active").attr("aria-expanded",false); 
		$("#editor").find(".borstyle").css("z-index",200)
		$(".tab-content").find(".tab-pane:eq(1)").addClass("active").addClass("in").siblings(".tab-pane").removeClass("active").removeClass("in");
		
	});
	
	//编辑器功能
	$(".editors").click(function() {
					
		var $this = $(this);
		var cmd = $this.attr("data-cmd");
		
		var param = $this.attr("data-param");
		if(cmd) {
			switch (cmd) {
			case "FontSize":
				var size = parseInt(document.queryCommandValue("FontSize"));
				if(param && param == "+1")
					document.execCommand("FontSize", false, size + 1);
				else if(param && param == "-1")
					document.execCommand("FontSize", false, size - 1);
				else{
					document.execCommand("FontSize", false, param);
					$('.FontSize').text(param);
				}
			break;
			case "FontName":		
					document.execCommand("FontName", false, param);
					$('.FontName').text(param);		
			break;
			case "RemoveFormat":		
					document.execCommand("SelectAll", false);
					document.execCommand(cmd, false);
					document.execCommand("Unselect", false);
			break;
			default:
				document.execCommand(cmd, false);
			break;
			}
		}
	});
	var _bor_dir = "";
	//选中
	$("div[contenteditable]").live('click',function(){
		var userSelection;
		$(".resume_line").removeClass("on resume_focus");
		$(".resume_icon_diy").removeClass("on resume_focus");
		$(".resume_textarea").removeClass("on");
		$(".tab-content").find(".tab-pane:eq(1)").addClass("active").addClass("in").siblings(".tab-pane").removeClass("active").removeClass("in");
		if (window.getSelection) { //现代浏览器
		    userSelection = window.getSelection();
		} else if (document.selection) { //IE浏览器 考虑到Opera，应该放在后面
		    userSelection = document.selection.createRange();
		}
		if(userSelection)
			startOffset = $(userSelection.focusNode.parentElement).index();
			
		   
	});
	//文字背景颜色
	$(".bgcolor").bigColorpicker(function(el,color){
		document.execCommand("BackColor", false, color);
		$(el).css("backgroundColor",color);});
	//文字前颜色
	$(".fontcolor").bigColorpicker(function(el,color){
		document.execCommand("ForeColor", false, color);
		$(el).find("em").css({"backgroundColor":color});
	});
	//线条颜色
	$(".linecolor").bigColorpicker(function(el,color){
		$(".resume_line.on").css("border-color",color);
		if(_bor_dir == 'left')
		{
			$(".resume_textarea.on").css({"border-left-color":color});
		}else if(_bor_dir == 'right')
		{
			$(".resume_textarea.on").css({"border-right-color":color});
		}else if(_bor_dir == 'top')
		{
			$(".resume_textarea.on").css({"border-top-color":color});
		}else if(_bor_dir == 'bottom')
		{
			$(".resume_textarea.on").css({"border-bottom-color":color});
		}else
		{
			$(".resume_textarea.on").css({"border-color":color});
		}
		
	});
	//线条背景颜色
	$(".zhcolor").bigColorpicker(function(el,color){
		$(".resume_textarea.on").css({"background-color":color});
	});
	//线条宽度
	$("#line_width").keyup(function(){
		$(".resume_line.on").css("width",$(this).val());
		$(".resume_textarea.on").css("width",$(this).val());
	});
	$("#line_width").click(function(){
		$(".resume_line.on").css("width",$(this).val());
		$(".resume_textarea.on").css("width",$(this).val());
	});
	//线条高度
	$("#line_height").keyup(function(){
		$(".resume_line.on").css("height",$(this).val());
		$(".resume_textarea.on").css("height",$(this).val());
	});
	$("#line_height").click(function(){
		$(".resume_line.on").css("height",$(this).val());
		$(".resume_textarea.on").css("height",$(this).val());
	});
	//线条粗细
	$(".online-bold").click(function(){		
		$(".resume_line.on").css("border-top-width",$(this).attr("data-param")+"px");
	});
	//线条样式
	$(".online-style").click(function(){		
		$(".resume_line.on").css("border-top-style",$(this).attr("data-param"));
	});
	
	//左边框
	$(".leftbor").click(function(){		
		_bor_dir = "left";
	});
	//右边框
	$(".rightbor").click(function(){		
		_bor_dir = "right";
	});
	//上边框
	$(".topbor").click(function(){
		_bor_dir = "top";
	});
	//下边框
	$(".bottombor").click(function(){
		_bor_dir = "bottom";
	});
	//线条粗细
	$(".online-bold").click(function(){
		var _width = $(this).attr("data-param");
		if(_bor_dir == 'left')
		{
			$(".resume_textarea.on").css({"border-left-width":_width+"px"});
		}else if(_bor_dir == 'right')
		{
			$(".resume_textarea.on").css({"border-right-width":_width+"px"});
		}else if(_bor_dir == 'top')
		{
			$(".resume_textarea.on").css({"border-top-width":_width+"px"});
		}else if(_bor_dir == 'bottom')
		{
			$(".resume_textarea.on").css({"border-bottom-width":_width+"px"});
		}else
		{
			$(".resume_textarea.on").css({"border-width":_width+"px"});
		}
		
	});
	//线条风格
	$(".online-style").click(function(){
		var _style = $(this).attr("data-param");
		if(_bor_dir == 'left')
		{
			$(".resume_textarea.on").css({"border-left-style":_style});
		}else if(_bor_dir == 'right')
		{
			$(".resume_textarea.on").css({"border-right-style":_style});
		}else if(_bor_dir == 'top')
		{
			$(".resume_textarea.on").css({"border-top-style":_style});
		}else if(_bor_dir == 'bottom')
		{
			$(".resume_textarea.on").css({"border-bottom-style":_style});
		}else
		{
			$(".resume_textarea.on").css({"border-style":_style});
		}
		
	});

});


	
//setInterval("save_resume()", 120000);
function save_resume()
{	
	$("#save_resume").click();	
}


//title滚动
function newtext() {
var text=document.title
var timerID	
clearTimeout(timerID)
document.title=text.substring(1,text.length)+text.substring(0,1)
text=document.title.substring(0,text.length)
timerID = setTimeout("newtext()", 500)
}




//////////online///////////
$(function(){
	var user_id = "{$user_info.id}";
	//选择头像
	$('#change_avatar').on('click', function(){
		layer.open({
			type: 2,
			title: '上传头像',
			maxmin: true,
			shadeClose: false, //点击遮罩关闭层
			area : ['900px' , '700px'],
			content: '/Home/Shear/index'
		});
	});	
	
	//插入图像
	$('#insert_picture').on('click', function(){
		layer.open({
			type: 2,
			title: '上传图片',
			maxmin: true,
			shadeClose: false, //点击遮罩关闭层
			area : ['900px' , '700px'],
			content: '/Home/Shear/avatar'
		});
	});
	
	//更换模板
	$(".left-editbtn .replace").click(function(){
		$("#save_resume").click();
		if(flag==""){
			ajax_login();
			return false;
		}
		 layer.open({
		  type: 2,
		  title: false,
		  closeBtn: 0,
		  shadeClose: false,
		  shade: 0.8,
		  scrollbar: false,
		  area: ['100%', '100%'],
		  content: '/Home/Resume/temp_list_2'
		});
	});
	$(".webpages a").live("click",function(){
		pagenum = $(this).attr("href");
		$("#resume_template").load("/Home/Resume/temp_list",{p:pagenum}, function(){
		});
		return false;
	});
	/*$("#myModalxzmb").click(function(){
		layer.close(resume_temp);
	});*/
	$(".resume_change_template").live("click",function(){
		//$("#save_resume").click();
		var temp_id = $(this).attr("data-itemid");
		var res_id = $("#res_id").val();
		var temp_colour = $(this).attr("data-style");
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/change_template",
		   data : {"temp_id" : temp_id,"res_id":res_id,"temp_colour":temp_colour},
		   success: function(data){
				if(data.error == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
				}else if(data.ok == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
					location.reload();
				}
		   }
		});
	});
	$(".resume_change_cover").live("click",function(){
		var temp_id = $(this).attr("data-itemid");
		var res_id = $("#res_id").val();
		var temp_colour = $(this).attr("data-style");
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/change_cover",
		   data : {"temp_id" : temp_id,"res_id":res_id,"temp_colour":temp_colour},
		   success: function(data){
				if(data.error == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
				}else if(data.ok == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
					location.reload();
				}
		   }
		});
	});
	$(".resume_change_letter").live("click",function(){
		var temp_id = $(this).attr("data-itemid");
		var res_id = $("#res_id").val();
		var temp_colour = $(this).attr("data-style");
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/change_letter",
		   data : {"temp_id" : temp_id,"res_id":res_id,"temp_colour":temp_colour},
		   success: function(data){
				if(data.error == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
				}else if(data.ok == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
					location.reload();
				}
		   }
		});
	});
	$(".resume_change_back").live("click",function(){
		var temp_id = $(this).attr("data-itemid");
		var res_id = $("#res_id").val();
		var temp_colour = $(this).attr("data-style");
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/change_back",
		   data : {"temp_id" : temp_id,"res_id":res_id,"temp_colour":temp_colour},
		   success: function(data){
				if(data.error == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
				}else if(data.ok == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
					location.reload();
				}
		   }
		});
	});
	
	//生成简历
	var resume_url = "";
	$("#generate_resume").click(function(){
		if(flag==""){
			$("#save_resume").click();
			ajax_login();
			return false;
		}
		var res_id = $("#res_id").val();
		//查看该简历是否处于下单状态
		/*var ii = 0;
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/check_order",
		   data : {"res_id":res_id},
		   async: false,
		   success: function(data){
				if(data.error == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
					ii = 1;
				}
		   }
		});
		if(ii == 1)
		{
			return false;
		}*/
		$("#save_resume").click();
		var _resume_html = $("#resume_body").prop("outerHTML");
		var cover_dis = $("#resume_cover").css('display');
		if(cover_dis == 'block')
		{
			var _cover_html = $("#resume_cover").prop("outerHTML");
		}else
		{
			var _cover_html = '';
		}
		var letter_dis = $("#resume_letter").css('display');
		if(letter_dis == 'block')
		{
			var _letter_html = $("#resume_letter").prop("outerHTML");
		}else
		{
			var _letter_html = '';
		}
		var back_dis = $("#resume_back").css('display');
		if(back_dis == 'block')
		{
			var _back_html = $("#resume_back").prop("outerHTML");
		}else
		{
			var _back_html = '';
		}
		var newwindow=window.open("about:blank");
		//直接更新简历文件
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/update_resume_url&t="+$.now(),
		   data : {"res_id":res_id,"resume_html":_resume_html,"cover_html":_cover_html,"letter_html":_letter_html,"back_html":_back_html},
		   success: function(data){
				if(data.error == 1)
				{
					layer.msg(data.msg,{zIndex:66666667});
					newwindow.close();
				}else if(data.ok == 1)
				{
						
					/*layer.confirm("简历生成成功", {
					  btn: ['查看','取消'] //按钮
					}, function(){
						layer.closeAll();
					   window.open('/Resume/'+data.msg);
					}, function(){
			  
					});*/
					newwindow.location.href='/resume/'+data.msg;
					newwindow.focus();

				}
		   }
		});
		
		
	});
	
	//保存简历
	var save_resume_index = "";
	$("#save_resume").click(function(){
		save_resume_index = layer.load(2, {shade: [0.5,'#000']});
		var resumeAll = getAllresume();
		//layer.alert(JSON.stringify(resumeAll));
		//入库
		$.ajax({
		   type: "POST",
		   url: "/Home/Resume/add_ajax&t="+$.now(),
		   data : {"resumeAll" : JSON.stringify(resumeAll)},
		   success: function(data){
				layer.close(save_resume_index);
				if(data.error == 1)
				{
					layer.msg(data.msg,{icon: 5});
				}else if(data.ok)
				{
					//保存附表id
					var info = data.info;
					jQuery.each(info, function(i, val) {
						if(i == 'custom')
						{
							jQuery.each(val, function(e, vo){
								$(".custom_").eq(e).attr("for-id",vo);
							}); 
						}else
						{
							$("."+i).attr("for-id",val);
						}						
					});
					//更新修改时间
					$("#resume_update_time").text(data.update_time);
					layer.msg(data.msg);				
				}
		   }
		});
		//alert(JSON.stringify(resumeAll));
		//layer.msg(1);
	});
	
	//获取保存信息
	function getAllresume()
	{
		resumeFomart();
		var resumeAll = {};
		resumeAll['resume'] = getResume(); //获取基本信息
		if($("#hidden_data").find(".resume_edu").val() == 1)
		{
			resumeAll['education'] = getEducation(); //获取教育信息
		}
		if($("#hidden_data").find(".resume_work").val() == 1)
		{
			resumeAll['work'] = getWork(); //获取工作经历
		}
		if($("#hidden_data").find(".resume_skill").val() == 1)
		{
			resumeAll['skill'] = getSkill(); //获取技能证书
		}
		if($("#hidden_data").find(".resume_self").val() == 1)
		{
			resumeAll['self'] = getSelf(); //获取自我评价
		}
		if($("#hidden_data").find(".resume_item").val() == 1)
		{
			resumeAll['item'] = getItem(); //获取项目经验
		}
		if($("#hidden_data").find(".resume_honor").val() == 1)
		{
			resumeAll['honor'] = getHonor(); //获取奖项荣誉
		}
		if($("#hidden_data").find(".resume_campus").val() == 1)
		{
			resumeAll['campus'] = getCampus(); //获取校内实践
		}
		if($("#hidden_data").find(".resume_offcampus").val() == 1)
		{
			resumeAll['offcampus'] = getOffcampus(); //获取校外实践
		}
		if($("#hidden_data").find(".resume_graph").val() == 1)
		{
			resumeAll['graph'] = getGraph(); //获取个人技能
		}
		if($("#hidden_data").find(".resume_hobby").val() == 1)
		{
			resumeAll['hobby'] = getHobby(); //获取兴趣爱好
		}	
		resumeAll['res_id'] = $("#res_id").val();//获取该简历id
		resumeAll['custom'] = getCustom(); //获取自定义模型
		resumeAll['cover'] = getCover(); //获取封面信息
		resumeAll['letter'] = getLetter(); //获取自荐信
		resumeAll['back'] = getBack(); //获取自荐信
		return resumeAll;
	}
	
	//获得简历表基本信息 - resume
	function getResume()
	{
		var resume = {};
		$(".resume_msg").each(function (index, domEle) { 
			domEle = $(domEle);
			var forkey = domEle.attr("for-key");
			var fortype = domEle.attr("for-type");
			if(fortype == 'src') //头像
			{
				resume[forkey] = domEle.attr("src");
			}else if(fortype == 'html')
			{
				resume[forkey] = trim(domEle.html());
			}else if(fortype == 'val')
			{
				resume[forkey] = trim(domEle.val());
			}
		});
		//自定义个人信息
		var information ={};
		$(".custom_information").each(function(index, domEle){
			information[index] = {};
			domEle = $(domEle);
			var information_val = domEle.find(".resume_icon_diy").html();
			var information_title = domEle.find("input").val();
			information[index]['information_val'] = information_val;
			information[index]['information_title'] = information_title;
		});
		//插入的内容
		var insert_content = {};
		insert_content['resume_textarea'] = {}
		insert_content['resume_image'] = {}
		$(".resume_textarea").each(function(index, domEle){
			insert_content['resume_textarea'][index] = {};
			domEle = $(domEle);
			insert_content['resume_textarea'][index] = domEle.prop("outerHTML");
		});
		$(".resume_image").each(function(index, domEle){
			insert_content['resume_image'][index] = {};
			domEle = $(domEle);
			insert_content['resume_image'][index] = domEle.prop("outerHTML");
		});
		resume['information'] = information;
		resume['insert_content'] = insert_content;
		resume['resume_title'] = $("#resume_title").val();
		resume['education'] = $("#hidden_data").find(".resume_edu").val();
		resume['work'] = $("#hidden_data").find(".resume_work").val();
		resume['skill'] = $("#hidden_data").find(".resume_skill").val();
		resume['self'] = $("#hidden_data").find(".resume_self").val();
		resume['item'] = $("#hidden_data").find(".resume_item").val();
		resume['honor'] = $("#hidden_data").find(".resume_honor").val();
		resume['campus'] = $("#hidden_data").find(".resume_campus").val();
		resume['offcampus'] = $("#hidden_data").find(".resume_offcampus").val();
		resume['temp_colour'] = $("#hidden_data").find(".resume_temp_colour").val();
		resume['order'] = getResumeSort();
		resume['is_avatar'] = $("#hidden_data").find(".resume_is_avatar").val();
		resume['is_age'] = $("#hidden_data").find(".resume_is_age").val();
		resume['is_address'] = $("#hidden_data").find(".resume_is_address").val();
		resume['is_phone'] = $("#hidden_data").find(".resume_is_phone").val();
		resume['is_email'] = $("#hidden_data").find(".resume_is_email").val();
		resume['graph'] = $("#hidden_data").find(".resume_graph").val();
		resume['hobby'] = $("#hidden_data").find(".resume_hobby").val();
		resume['lang'] = $("#hidden_data").find(".resume_lang").val();
		//alert(JSON.stringify(resume));
		return resume;
	}
	
	//获取教育信息 - education
	function getEducation()
	{
		var education = {};
		var icon = $(".education_").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".education_").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".education_").closest("dl").find("dt .resume_lang_edu").html();
		$(".education_").each(function(dex, ele){
			education[dex] = {};
			var education_id = $(ele).attr("for-id");
			education[dex]['education_id'] = education_id;
			$(".education_"+dex+" .education_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				education[dex][forkey] = trim(domEle.html());
				if(icon)
				education[dex]['icon'] = icon;
				if(line)
				education[dex]['line'] = line;
				if(title)
				education[dex]['title'] = title;
			});
		});
		//alert(JSON.stringify(education));
		return education;
	}
	
	//工作经历 - work
	function getWork()
	{
		var work = {};
		var icon = $(".work_").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".work_").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".work_").closest("dl").find("dt .resume_lang_work").html();
		$(".work_").each(function(dex, ele){
			work[dex] = {};
			var work_id = $(ele).attr("for-id");
			work[dex]['work_id'] = work_id;
			$(".work_"+dex+" .work_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				work[dex][forkey] = trim(domEle.html());
				if(icon)
				work[dex]['icon'] = icon;
				if(line)
				work[dex]['line'] = line;
				if(title)
				work[dex]['title'] = title;
			});
		});
		//alert(JSON.stringify(work));
		return work;
	}
	
	//获取技能证书 - skill
	function getSkill()
	{
		var skill = {};
		var icon = $(".skill_msg").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".skill_msg").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".skill_msg").closest("dl").find("dt .resume_lang_cart").html();
		$(".skill_msg").each(function (index, domEle) { 
			domEle = $(domEle);
			var skill_id = domEle.attr("for-id");
			var forkey = domEle.attr("for-key");
			skill['skill_id'] = skill_id;
			skill[forkey] = trim(domEle.html());
			if(icon)
			skill['icon'] = icon;
			if(line)
			skill['line'] = line;
			if(title)
			skill['title'] = title;
		});
		return skill;
	}
	
	//获取自我评价 - self
	function getSelf()
	{
		var self = {};
		var icon = $(".self_msg").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".self_msg").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".self_msg").closest("dl").find("dt .resume_lang_self").html();
		$(".self_msg").each(function (index, domEle) { 
			domEle = $(domEle);
			var self_id = domEle.attr("for-id");
			var forkey = domEle.attr("for-key");
			self['self_id'] = self_id;
			self[forkey] = trim(domEle.html());
			if(icon)
			self['icon'] = icon;
			if(line)
			self['line'] = line;
			if(title)
			self['title'] = title;
		});
		return self;
	}
	
	//获取项目经验 - item
	function getItem()
	{
		var item = {};
		var icon = $(".item_").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".item_").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".item_").closest("dl").find("dt .resume_lang_project").html();
		$(".item_").each(function(dex, ele){
			item[dex] = {};
			var item_id = $(ele).attr("for-id");
			item[dex]['item_id'] = item_id;
			$(".item_"+dex+" .item_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				item[dex][forkey] = trim(domEle.html());
				if(icon)
				item[dex]['icon'] = icon;
				if(line)
				item[dex]['line'] = line;
				if(title)
				item[dex]['title'] = title;
			});
		});
		//alert(JSON.stringify(item));
		return item;
	}
	
	//获取奖项荣誉 - honor
	function getHonor()
	{
		var honor = {};
		var icon = $(".honor_msg").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".honor_msg").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".honor_msg").closest("dl").find("dt .resume_lang_honor").html();
		$(".honor_msg").each(function (index, domEle) { 
			domEle = $(domEle);
			var honor_id = domEle.attr("for-id");
			var forkey = domEle.attr("for-key");
			honor['honor_id'] = honor_id;
			honor[forkey] = trim(domEle.html());
			if(icon)
			honor['icon'] = icon;
			if(line)
			honor['line'] = line;
			if(title)
			honor['title'] = title;
		});
		return honor;
	}
	//获取自定义 - custom
	function getCustom()
	{
		var custom = {};
		$(".custom_").each(function(index, domEle){
			custom[index] = {};
			var custom_id = $(domEle).attr("for-id");
			var time_id = $(domEle).closest(".mouldDiv").attr("time-id");
			var custom_title = $(domEle).closest(".mouldDiv").find(".mtitle .custom_msg").html();
			var is_custom = $("#hidden_data").find(".resume_"+time_id).val();
			var icon = $(domEle).closest("dl").find("dt .resume_icon_diy").html();
			var line = $(domEle).closest("dl").find("dt .resume_line").attr("style");
			$(domEle).find(".custom_msg").each(function(){
				var forkey = $(this).attr("for-key");
				custom[index][forkey] = trim($(this).html());
				custom[index]['custom_id'] = custom_id;
				custom[index]['time_id'] = time_id;
				custom[index]['custom_title'] = custom_title;
				custom[index]['is_custom'] = is_custom;
				custom[index]['icon'] = icon;
				custom[index]['line'] = line;
			});
		});
		//alert(JSON.stringify(custom));
		return custom;
	}
	
	//获取个人技能 - graph
	function getGraph()
	{
		var graph = {};
		var icon = $(".graph_").closest("dl").find("dt .resume_icon_diy").html();
		var title = $(".graph_").closest("dl").find("dt .resume_lang_graph").html();
		$(".graph_").each(function(dex, ele){
			graph[dex] = {};
			var graph_id = $(ele).attr("for-id");
			graph[dex]['graph_id'] = graph_id;
			$(".graph_"+dex+" .graph_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				var fortype = domEle.attr("for-type");
				if(fortype == 'style')
				{
					graph[dex][forkey] = trim(domEle.attr("style"));
				}else if(fortype == 'val')
				{
					graph[dex][forkey] = trim(domEle.val());
				}
				if(icon)
				graph[dex]['icon'] = icon;
				if(title)
				graph[dex]['title'] = title;
			});
		});
		return graph;
	}
	//获取兴趣爱好 - hobby
	function getHobby()
	{
		var hobby = {};
		var icon = $(".hobby_").closest("dl").find("dt .resume_icon_diy").html();
		var title = $(".hobby_").closest("dl").find("dt .resume_lang_hobby").html();
		$(".hobby_").each(function(dex, ele){
			hobby[dex] = {};
			var hobby_id = $(ele).attr("for-id");
			hobby[dex]['hobby_id'] = hobby_id;
			$(".hobby_"+dex+" .hobby_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				var fortype = domEle.attr("for-type");
				if(fortype == 'html')
				{
					hobby[dex][forkey] = trim(domEle.html());
				}else
				{
					hobby[dex][forkey] = trim(domEle.val());
				}
				if(icon)
				hobby[dex]['icon'] = icon;
				if(title)
				hobby[dex]['title'] = title;
			});
		});
		//alert(JSON.stringify(hobby));
		return hobby;
	}
	//获取封面信息 - cover
	function getCover()
	{
		var cover = {};
		var dis = $(".fm_baseStyle").css('display');
		if(dis == 'block')
		{
			cover['cover_id'] = $(".fm_baseStyle").attr("cover_id");
			$(".fm_baseStyle .resume_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				cover[forkey] = trim(domEle.find("span").html());
			});
		}
		//alert(JSON.stringify(cover));
		return cover;
	}
	//获取自荐信内容 - letter
	function getLetter()
	{
		var letter = {};
		var dis = $(".zjx_baseStyle").css('display');
		if(dis == 'block')
		{
			letter['letter_id'] = $(".zjx_baseStyle").attr("letter_id");
			var letter_content = $(".zjx_baseStyle #letter").html();
			letter['letter_content'] = letter_content;
		}
		//alert(JSON.stringify(letter));
		return letter;
	}
	//获取封面信息 - back
	function getBack()
	{
		var back = {};
		var dis = $(".fd_baseStyle").css('display');
		if(dis == 'block')
		{
			back['back_id'] = $(".fd_baseStyle").attr("back_id");
			$(".fd_baseStyle .resume_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				back[forkey] = trim(domEle.find("span").html());
			});
		}
		//alert(JSON.stringify(back));
		return back;
	}
	
	
	
	//去除两边的空格
	function trim(stri)
	{ 
		if(!stri)
			return "";
        stri=$.trim(stri);
        //stri=stri.replace(/&nbsp;/ig,'');//去掉&nbsp;
        //stri=stri.replace(/\s/g, "");
		return stri;
	}
	
	//校内实践 - campus
	function getCampus()
	{
		var campus = {};
		var icon = $(".campus_").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".campus_").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".campus_").closest("dl").find("dt .resume_lang_in_school").html();
		$(".campus_").each(function(dex, ele){
			campus[dex] = {};
			var campus_id = $(ele).attr("for-id");
			campus[dex]['campus_id'] = campus_id;
			$(".campus_"+dex+" .campus_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				campus[dex][forkey] = trim(domEle.html());
				if(icon)
				campus[dex]['icon'] = icon;
				if(line)
				campus[dex]['line'] = line;
				if(title)
				campus[dex]['title'] = title;
			});
		});
		return campus;
	}
	
	//校外实践 - offcampus
	function getOffcampus()
	{
		var offcampus = {};
		var icon = $(".offcampus_").closest("dl").find("dt .resume_icon_diy").html();
		var line = $(".offcampus_").closest("dl").find("dt .resume_line").attr("style");
		var title = $(".offcampus_").closest("dl").find("dt .resume_lang_out_school").html();
		$(".offcampus_").each(function(dex, ele){
			offcampus[dex] = {};
			var offcampus_id = $(ele).attr("for-id");
			offcampus[dex]['offcampus_id'] = offcampus_id;
			$(".offcampus_"+dex+" .offcampus_msg").each(function(index, domEle){
				domEle = $(domEle);
				var forkey = domEle.attr("for-key");
				offcampus[dex][forkey] = trim(domEle.html());
				if(icon)
				offcampus[dex]['icon'] = icon;
				if(line)
				offcampus[dex]['line'] = line;
				if(title)
				offcampus[dex]['title'] = title;
			});
		});
		//alert(JSON.stringify(offcampus));
		return offcampus;
	}
	
	
	/**
 * 排序
 */
function getResumeSort() {
	var sort = {};
	var foos = [];
	var bars = [];
	$("#foo .resume_sort").each(function(index, ele) {
		ele = $(ele);
		var id = ele.attr("id");
		foos[foos.length] = id;
	});
	$("#bar .resume_sort").each(function(index, ele) {
		ele = $(ele);
		var id = ele.attr("id");
		bars[bars.length] = id;
	});
	sort["foos"] = foos;
	sort["bars"] = bars;
	return sort;
	//resume["sort"] = sort;
}

/**
 * 添加选中样式
 * @param width 选中区域宽度
 * @param height 选中区域高度
 */
function addFocusStyle(width, height, color) {
	width = parseInt(width);
	height = parseInt(height);
	if(!color)
		color = "#ff6600";
	$("#resume_focus_style").remove();
	$("head").append('<style type="text/css" id="resume_focus_style">\
		.resume_focus:after{\
			position:absolute;\
			border:1px dashed ' + color + ';\
			content:"";\
			width:' + (width + 6) + 'px;\
			height:' + (height + 6) + 'px;\
			top:-' + (height + 3) + 'px;\
			left:-3px;\
		}\
	</style>');
}

	
});






	
