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
  a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
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
  }, this.a=this.createEl("a"),this.abbr=this.createEl("abbr"),this.address=this.createEl("address"),this.area=this.createEl("area"),this.article=this.createEl("article"),this.aside=this.createEl("aside"),this.audio=this.createEl("audio"),this.b=this.createEl("b"),this.base=this.createEl("base"),this.bdi=this.createEl("bdi"),this.bdo=this.createEl("bdo"),this.blockquote=this.createEl("blockquote"),this.body=this.createEl("body"),this.br=this.createEl("br"),this.button=this.createEl("button"),this.canvas=this.createEl("canvas"),this.caption=this.createEl("caption"),this.cite=this.createEl("cite"),this.code=this.createEl("code"),this.col=this.createEl("col"),this.colgroup=this.createEl("colgroup"),this.data=this.createEl("data"),this.datalist=this.createEl("datalist"),this.dd=this.createEl("dd"),this.del=this.createEl("del"),this.details=this.createEl("details"),this.dfn=this.createEl("dfn"),this.div=this.createEl("div"),this.dl=this.createEl("dl"),this.dt=this.createEl("dt"),this.em=this.createEl("em"),this.embed=this.createEl("embed"),this.fieldset=this.createEl("fieldset"),this.figcaption=this.createEl("figcaption"),this.figure=this.createEl("figure"),this.footer=this.createEl("footer"),this.form=this.createEl("form"),this.h1=this.createEl("h1"),this.h2=this.createEl("h2"),this.h3=this.createEl("h3"),this.h4=this.createEl("h4"),this.h5=this.createEl("h5"),this.h6=this.createEl("h6"),this.head=this.createEl("head"),this.header=this.createEl("header"),this.hr=this.createEl("hr"),this.html=this.createEl("html"),this.i=this.createEl("i"),this.iframe=this.createEl("iframe"),this.img=this.createEl("img"),this.input=this.createEl("input"),this.ins=this.createEl("ins"),this.kbd=this.createEl("kbd"),this.label=this.createEl("label"),this.legend=this.createEl("legend"),this.li=this.createEl("li"),this.link=this.createEl("link"),this.main=this.createEl("main"),this.map=this.createEl("map"),this.mark=this.createEl("mark"),this.menu=this.createEl("menu"),this.menuitem=this.createEl("menuitem"),this.meta=this.createEl("meta"),this.meter=this.createEl("meter"),this.nav=this.createEl("nav"),this.noframes=this.createEl("noframes"),this.noscript=this.createEl("noscript"),this.object=this.createEl("object"),this.ol=this.createEl("ol"),this.optgroup=this.createEl("optgroup"),this.option=this.createEl("option"),this.output=this.createEl("output"),this.p=this.createEl("p"),this.param=this.createEl("param"),this.pre=this.createEl("pre"),this.progress=this.createEl("progress"),this.q=this.createEl("q"),this.rp=this.createEl("rp"),this.rt=this.createEl("rt"),this.rtc=this.createEl("rtc"),this.ruby=this.createEl("ruby"),this.s=this.createEl("s"),this.samp=this.createEl("samp"),this.script=this.createEl("script"),this.section=this.createEl("section"),this.select=this.createEl("select"),this.slot=this.createEl("slot"),this.small=this.createEl("small"),this.source=this.createEl("source"),this.span=this.createEl("span"),this.strong=this.createEl("strong"),this.style=this.createEl("style"),this.sub=this.createEl("sub"),this.summary=this.createEl("summary"),this.sup=this.createEl("sup"),this.table=this.createEl("table"),this.tbody=this.createEl("tbody"),this.td=this.createEl("td"),this.template=this.createEl("template"),this.textarea=this.createEl("textarea"),this.tfoot=this.createEl("tfoot"),this.th=this.createEl("th"),this.thead=this.createEl("thead"),this.time=this.createEl("time"),this.title=this.createEl("title"),this.tr=this.createEl("tr"),this.track=this.createEl("track"),this.u=this.createEl("u"),this.ul=this.createEl("ul"),this.var=this.createEl("var"),this.video=this.createEl("video"),this.wbr_=this.createEl("wbr");     
   return { 
      a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
}
})();
