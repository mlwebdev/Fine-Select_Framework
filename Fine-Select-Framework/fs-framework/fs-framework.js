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
  }, this.a_=this.createEl("a"),this.abbr_=this.createEl("abbr"),this.address_=this.createEl("address"),this.area_=this.createEl("area"),this.article_=this.createEl("article"),this.aside_=this.createEl("aside"),this.audio_=this.createEl("audio"),this.b_=this.createEl("b"),this.base_=this.createEl("base"),this.bdi_=this.createEl("bdi"),this.bdo_=this.createEl("bdo"),this.blockquote_=this.createEl("blockquote"),this.body_=this.createEl("body"),this.br_=this.createEl("br"),this.button_=this.createEl("button"),this.canvas_=this.createEl("canvas"),this.caption_=this.createEl("caption"),this.cite_=this.createEl("cite"),this.code_=this.createEl("code"),this.col_=this.createEl("col"),this.colgroup_=this.createEl("colgroup"),this.data_=this.createEl("data"),this.datalist_=this.createEl("datalist"),this.dd_=this.createEl("dd"),this.del_=this.createEl("del"),this.details_=this.createEl("details"),this.dfn_=this.createEl("dfn"),this.div_=this.createEl("div"),this.dl_=this.createEl("dl"),this.dt_=this.createEl("dt"),this.em_=this.createEl("em"),this.embed_=this.createEl("embed"),this.fieldset_=this.createEl("fieldset"),this.figcaption_=this.createEl("figcaption"),this.figure_=this.createEl("figure"),this.footer_=this.createEl("footer"),this.form_=this.createEl("form"),this.h1_=this.createEl("h1"),this.h2_=this.createEl("h2"),this.h3_=this.createEl("h3"),this.h4_=this.createEl("h4"),this.h5_=this.createEl("h5"),this.h6_=this.createEl("h6"),this.head_=this.createEl("head"),this.header_=this.createEl("header"),this.hr_=this.createEl("hr"),this.html_=this.createEl("html"),this.i_=this.createEl("i"),this.iframe_=this.createEl("iframe"),this.img_=this.createEl("img"),this.input_=this.createEl("input"),this.ins_=this.createEl("ins"),this.kbd_=this.createEl("kbd"),this.label_=this.createEl("label"),this.legend_=this.createEl("legend"),this.li_=this.createEl("li"),this.link_=this.createEl("link"),this.main_=this.createEl("main"),this.map_=this.createEl("map"),this.mark_=this.createEl("mark"),this.menu_=this.createEl("menu"),this.menuitem_=this.createEl("menuitem"),this.meta_=this.createEl("meta"),this.meter_=this.createEl("meter"),this.nav_=this.createEl("nav"),this.noframes_=this.createEl("noframes"),this.noscript_=this.createEl("noscript"),this.object_=this.createEl("object"),this.ol_=this.createEl("ol"),this.optgroup_=this.createEl("optgroup"),this.option_=this.createEl("option"),this.output_=this.createEl("output"),this.p_=this.createEl("p"),this.param_=this.createEl("param"),this.pre_=this.createEl("pre"),this.progress_=this.createEl("progress"),this.q_=this.createEl("q"),this.rp_=this.createEl("rp"),this.rt_=this.createEl("rt"),this.rtc_=this.createEl("rtc"),this.ruby_=this.createEl("ruby"),this.s_=this.createEl("s"),this.samp_=this.createEl("samp"),this.script_=this.createEl("script"),this.section_=this.createEl("section"),this.select_=this.createEl("select"),this.slot_=this.createEl("slot"),this.small_=this.createEl("small"),this.source_=this.createEl("source"),this.span_=this.createEl("span"),this.strong_=this.createEl("strong"),this.style_=this.createEl("style"),this.sub_=this.createEl("sub"),this.summary_=this.createEl("summary"),this.sup_=this.createEl("sup"),this.table_=this.createEl("table"),this.tbody_=this.createEl("tbody"),this.td_=this.createEl("td"),this.template_=this.createEl("template"),this.textarea_=this.createEl("textarea"),this.tfoot_=this.createEl("tfoot"),this.th_=this.createEl("th"),this.thead_=this.createEl("thead"),this.time_=this.createEl("time"),this.title_=this.createEl("title"),this.tr_=this.createEl("tr"),this.track_=this.createEl("track"),this.u_=this.createEl("u"),this.ul_=this.createEl("ul"),this.var_=this.createEl("var"),this.video_=this.createEl("video"),this.wbr__=this.createEl("wbr");     
   return { 
      a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
}
})();
