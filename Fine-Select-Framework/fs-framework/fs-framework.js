// fs-framework.js
(function (
  getId,            // document.getElementById()
  getTag,           // document.getElementsByTagName()
  getClass,         // document.getElementsByClassName()
  getName,          // document.getElementsByName()
  createEl,         // document.createElement()
  setItem,          // localStorage.setItem()
  setAttributes,    // Set multiple attributes to one element
  addElementOnTag,  // Append child to parent with innerHTML
  addElementOnId,   // Append child to parent with innerHTML
  a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_;
  ) 
  {
  this.getId = function(a) {
    return document.getElementById(a)
  }, this.getTag = function(a) {
    return document.getElementsByTagName(a)[0]
  }, this.getClass = function(a, i) {
    return document.getElementsByClassName(a)[i]
  }, this.getName = function(a) {
    return document.getElementsByName(a)[0]
  }, this.createEl = function(a) {
    return document.createElement(a)
  }, this.setItem = function(a, b) {
    return localStorage.setItem(a, b)
  }, this.setAttributes = function (el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    } 
  }, this.addElementOnTag = function (elp, elc, inp) {
       elc = this.createEl(elc)
       elp = this.getTag(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.addElementOnId = function (elp, elc, inp) {
       elc = this.createEl(elc)
       elp = this.getId(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.a=this.createEl("a")_,this.abbr=this.createEl("abbr")_,this.address=this.createEl("address")_,this.area=this.createEl("area")_,this.article=this.createEl("article")_,this.aside=this.createEl("aside")_,this.audio=this.createEl("audio")_,this.b=this.createEl("b")_,this.base=this.createEl("base")_,this.bdi=this.createEl("bdi")_,this.bdo=this.createEl("bdo")_,this.blockquote=this.createEl("blockquote")_,this.body=this.createEl("body")_,this.br=this.createEl("br")_,this.button=this.createEl("button")_,this.canvas=this.createEl("canvas")_,this.caption=this.createEl("caption")_,this.cite=this.createEl("cite")_,this.code=this.createEl("code")_,this.col=this.createEl("col")_,this.colgroup=this.createEl("colgroup")_,this.data=this.createEl("data")_,this.datalist=this.createEl("datalist")_,this.dd=this.createEl("dd")_,this.del=this.createEl("del")_,this.details=this.createEl("details")_,this.dfn=this.createEl("dfn")_,this.div=this.createEl("div")_,this.dl=this.createEl("dl")_,this.dt=this.createEl("dt")_,this.em=this.createEl("em")_,this.embed=this.createEl("embed")_,this.fieldset=this.createEl("fieldset")_,this.figcaption=this.createEl("figcaption")_,this.figure=this.createEl("figure")_,this.footer=this.createEl("footer")_,this.form=this.createEl("form")_,this.h1=this.createEl("h1")_,this.h2=this.createEl("h2")_,this.h3=this.createEl("h3")_,this.h4=this.createEl("h4")_,this.h5=this.createEl("h5")_,this.h6=this.createEl("h6")_,this.head=this.createEl("head")_,this.header=this.createEl("header")_,this.hr=this.createEl("hr")_,this.html=this.createEl("html")_,this.i=this.createEl("i")_,this.iframe=this.createEl("iframe")_,this.img=this.createEl("img")_,this.input=this.createEl("input")_,this.ins=this.createEl("ins")_,this.kbd=this.createEl("kbd")_,this.label=this.createEl("label")_,this.legend=this.createEl("legend")_,this.li=this.createEl("li")_,this.link=this.createEl("link")_,this.main=this.createEl("main")_,this.map=this.createEl("map")_,this.mark=this.createEl("mark")_,this.menu=this.createEl("menu")_,this.menuitem=this.createEl("menuitem")_,this.meta=this.createEl("meta")_,this.meter=this.createEl("meter")_,this.nav=this.createEl("nav")_,this.noframes=this.createEl("noframes")_,this.noscript=this.createEl("noscript")_,this.object=this.createEl("object")_,this.ol=this.createEl("ol")_,this.optgroup=this.createEl("optgroup")_,this.option=this.createEl("option")_,this.output=this.createEl("output")_,this.p=this.createEl("p")_,this.param=this.createEl("param")_,this.pre=this.createEl("pre")_,this.progress=this.createEl("progress")_,this.q=this.createEl("q")_,this.rp=this.createEl("rp")_,this.rt=this.createEl("rt")_,this.rtc=this.createEl("rtc")_,this.ruby=this.createEl("ruby")_,this.s=this.createEl("s")_,this.samp=this.createEl("samp")_,this.script=this.createEl("script")_,this.section=this.createEl("section")_,this.select=this.createEl("select")_,this.slot=this.createEl("slot")_,this.small=this.createEl("small")_,this.source=this.createEl("source")_,this.span=this.createEl("span")_,this.strong=this.createEl("strong")_,this.style=this.createEl("style")_,this.sub=this.createEl("sub")_,this.summary=this.createEl("summary")_,this.sup=this.createEl("sup")_,this.table=this.createEl("table")_,this.tbody=this.createEl("tbody")_,this.td=this.createEl("td")_,this.template=this.createEl("template")_,this.textarea=this.createEl("textarea")_,this.tfoot=this.createEl("tfoot")_,this.th=this.createEl("th")_,this.thead=this.createEl("thead")_,this.time=this.createEl("time")_,this.title=this.createEl("title")_,this.tr=this.createEl("tr")_,this.track=this.createEl("track")_,this.u=this.createEl("u")_,this.ul=this.createEl("ul")_,this.var=this.createEl("var")_,this.video=this.createEl("video")_,this.wbr_=this.createEl("wbr");
      return { 
        a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_;
}
})();
