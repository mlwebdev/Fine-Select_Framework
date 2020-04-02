// fs-framework.js
(function (
  ID,            // document.getElementById()
  TAG,           // document.getElementsByTagName()
  CLASS,         // document.getElementsByClassName()
  NAME,          // document.getElementsByName()
  QUERY,          // document.querySelector()
  QueryAll,        // document.querySelectorAll()
  GetValue,       // document.getElementsByName().value
  CREATE,         // document.createElement()
  ElEvent,        // a.addEventListener(b, func)
  LStoreItem,          // localStorage.item_()
  SetAttributes,    // Set multiple attributes to one element
  AddElementOnTag,  // Append child to parent with innerHTML
  AddElementOnId,   // Append child to parent with innerHTML
  DoIf,
  IfElse,

  a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
  ) 
  {
  this.ID = function ID(a) {
    return document.getElementById(a)
  }, this.TAG = function TAG(a) {
    return document.getElementsByTagName(a)[0]
  }, this.CLASS = function CLASS(a, i) {
    return document.getElementsByClassName(a)[i]
  }, this.NAME = function NAME(a) {
    return document.getElementsByName(a)[0]
  }, this.QUERY = function QUERY(a) {
      return document.querySelector(a)
  },  this.GetValue = function GetValue(a) {
      return document.querySelector(a).value
  }, this.QueryAll = function QueryAll(a) {
      return document.querySelectorAll(a)
  }, this.ElEvent = function ElEvent(a, b, func){
      return a.addEventListener(b, func)
  }, this.CREATE = function CREATE(a) {
      return document.createElement(a)
  }, this.LStoreItem = function LStoreItem(a, b) {
    return localStorage.StoreItem(a, b)
  }, this.SetAttributes = function SetAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    } 
  }, this.AddElementOnTag = function (elp, elc, inp) {
       elc = this.CREATE(elc)
       elp = this.TAG(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.AddElementOnId = function (elp, elc, inp) {
       elc = this.CREATE(elc)
       elp = this.ID(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.a_=this.CREATE("a"),this.abbr_=this.CREATE("abbr"),this.address_=this.CREATE("address"),this.area_=this.CREATE("area"),this.article_=this.CREATE("article"),this.aside_=this.CREATE("aside"),this.audio_=this.CREATE("audio"),this.b_=this.CREATE("b"),this.base_=this.CREATE("base"),this.bdi_=this.CREATE("bdi"),this.bdo_=this.CREATE("bdo"),this.blockquote_=this.CREATE("blockquote"),this.body_=this.CREATE("body"),this.br_=this.CREATE("br"),this.button_=this.CREATE("button"),this.canvas_=this.CREATE("canvas"),this.caption_=this.CREATE("caption"),this.cite_=this.CREATE("cite"),this.code_=this.CREATE("code"),this.col_=this.CREATE("col"),this.colgroup_=this.CREATE("colgroup"),this.data_=this.CREATE("data"),this.datalist_=this.CREATE("datalist"),this.dd_=this.CREATE("dd"),this.del_=this.CREATE("del"),this.details_=this.CREATE("details"),this.dfn_=this.CREATE("dfn"),this.div_=this.CREATE("div"),this.dl_=this.CREATE("dl"),this.dt_=this.CREATE("dt"),this.em_=this.CREATE("em"),this.embed_=this.CREATE("embed"),this.fieldset_=this.CREATE("fieldset"),this.figcaption_=this.CREATE("figcaption"),this.figure_=this.CREATE("figure"),this.footer_=this.CREATE("footer"),this.form_=this.CREATE("form"),this.h1_=this.CREATE("h1"),this.h2_=this.CREATE("h2"),this.h3_=this.CREATE("h3"),this.h4_=this.CREATE("h4"),this.h5_=this.CREATE("h5"),this.h6_=this.CREATE("h6"),this.head_=this.CREATE("head"),this.header_=this.CREATE("header"),this.hr_=this.CREATE("hr"),this.html_=this.CREATE("html"),this.i_=this.CREATE("i"),this.iframe_=this.CREATE("iframe"),this.img_=this.CREATE("img"),this.input_=this.CREATE("input"),this.ins_=this.CREATE("ins"),this.kbd_=this.CREATE("kbd"),this.label_=this.CREATE("label"),this.legend_=this.CREATE("legend"),this.li_=this.CREATE("li"),this.link_=this.CREATE("link"),this.main_=this.CREATE("main"),this.map_=this.CREATE("map"),this.mark_=this.CREATE("mark"),this.menu_=this.CREATE("menu"),this.menuitem_=this.CREATE("menuitem"),this.meta_=this.CREATE("meta"),this.meter_=this.CREATE("meter"),this.nav_=this.CREATE("nav"),this.noframes_=this.CREATE("noframes"),this.noscript_=this.CREATE("noscript"),this.object_=this.CREATE("object"),this.ol_=this.CREATE("ol"),this.optgroup_=this.CREATE("optgroup"),this.option_=this.CREATE("option"),this.output_=this.CREATE("output"),this.p_=this.CREATE("p"),this.param_=this.CREATE("param"),this.pre_=this.CREATE("pre"),this.progress_=this.CREATE("progress"),this.q_=this.CREATE("q"),this.rp_=this.CREATE("rp"),this.rt_=this.CREATE("rt"),this.rtc_=this.CREATE("rtc"),this.ruby_=this.CREATE("ruby"),this.s_=this.CREATE("s"),this.samp_=this.CREATE("samp"),this.script_=this.CREATE("script"),this.section_=this.CREATE("section"),this.select_=this.CREATE("select"),this.slot_=this.CREATE("slot"),this.small_=this.CREATE("small"),this.source_=this.CREATE("source"),this.span_=this.CREATE("span"),this.strong_=this.CREATE("strong"),this.style_=this.CREATE("style"),this.sub_=this.CREATE("sub"),this.summary_=this.CREATE("summary"),this.sup_=this.CREATE("sup"),this.table_=this.CREATE("table"),this.tbody_=this.CREATE("tbody"),this.td_=this.CREATE("td"),this.template_=this.CREATE("template"),this.textarea_=this.CREATE("textarea"),this.tfoot_=this.CREATE("tfoot"),this.th_=this.CREATE("th"),this.thead_=this.CREATE("thead"),this.time_=this.CREATE("time"),this.title_=this.CREATE("title"),this.tr_=this.CREATE("tr"),this.track_=this.CREATE("track"),this.u_=this.CREATE("u"),this.ul_=this.CREATE("ul"),this.var_=this.CREATE("var"),this.video_=this.CREATE("video"),this.wbr__=this.CREATE("wbr");     
  this.DoIf = function DoIf(condition, func) {
    if(condition) {
      func(); // Define a function replacement
    } 
  }, // call function like so --> DoIf(a == 1, newFunc)
  this.IfElse = function IfElse(condition, func1, func2) {
    if(condition) {
      func1(); // Define a function replacement
    } 
    else {
      func2();
    }
  } // call function like so --> IfElse(a == 1, newFunc)
  
   return { 
      a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
}
})();
