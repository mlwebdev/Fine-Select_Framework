// fs-framework.js
(function (
  id__,            // document.getElementById()
  tag__,           // document.getElementsByTagName()
  class__,         // document.getElementsByClassName()
  name__,          // document.getElementsByName()
  query__,          // document.query()
  create__,         // document.createElement()
  item__,          // localStorage.item_()
  setAttributes,    // Set multiple attributes to one element
  addElementOnTag,  // Append child to parent with innerHTML
  addElementOnId,   // Append child to parent with innerHTML
  doIf,
  ifElse,
  evtHandle,

  a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
  ) 
  {
  this.id__ = function(a) {
    return document.getElementById(a)
  }, this.tag__ = function(a) {
    return document.getElementsByTagName(a)[0]
  }, this.class__ = function(a, i) {
    return document.getElementsByClassName(a)[i]
  }, this.name__ = function(a) {
    return document.getElementsByName(a)[0]
  }, this.query__ = function(a) {
      return document.querySelector(a)
  }, this.queryAll = function(a) {
      return document.querySelectorAll(a)
  }, this.create__ = function(a) {
      return document.createElement(a)
  }, this.item__ = function(a, b) {
    return localStorage.item__(a, b)
  }, this.setAttributes = function (el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    } // Call like so --> setAttribute(varible, "id": "id_name")
  }, this.addElementOnTag = function (elp, elc, inp) {
       elc = this.create__(elc)
       elp = this.tag__(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.addElementOnId = function (elp, elc, inp) {
       elc = this.create__(elc)
       elp = this.id__(elp)
        .appendChild(elc),
       elc.innerHTML = inp;
       return { elp, elc, inp }
  }, this.a_=this.create__("a"),this.abbr_=this.create__("abbr"),this.address_=this.create__("address"),this.area_=this.create__("area"),this.article_=this.create__("article"),this.aside_=this.create__("aside"),this.audio_=this.create__("audio"),this.b_=this.create__("b"),this.base_=this.create__("base"),this.bdi_=this.create__("bdi"),this.bdo_=this.create__("bdo"),this.blockquote_=this.create__("blockquote"),this.body_=this.create__("body"),this.br_=this.create__("br"),this.button_=this.create__("button"),this.canvas_=this.create__("canvas"),this.caption_=this.create__("caption"),this.cite_=this.create__("cite"),this.code_=this.create__("code"),this.col_=this.create__("col"),this.colgroup_=this.create__("colgroup"),this.data_=this.create__("data"),this.datalist_=this.create__("datalist"),this.dd_=this.create__("dd"),this.del_=this.create__("del"),this.details_=this.create__("details"),this.dfn_=this.create__("dfn"),this.div_=this.create__("div"),this.dl_=this.create__("dl"),this.dt_=this.create__("dt"),this.em_=this.create__("em"),this.embed_=this.create__("embed"),this.fieldset_=this.create__("fieldset"),this.figcaption_=this.create__("figcaption"),this.figure_=this.create__("figure"),this.footer_=this.create__("footer"),this.form_=this.create__("form"),this.h1_=this.create__("h1"),this.h2_=this.create__("h2"),this.h3_=this.create__("h3"),this.h4_=this.create__("h4"),this.h5_=this.create__("h5"),this.h6_=this.create__("h6"),this.head_=this.create__("head"),this.header_=this.create__("header"),this.hr_=this.create__("hr"),this.html_=this.create__("html"),this.i_=this.create__("i"),this.iframe_=this.create__("iframe"),this.img_=this.create__("img"),this.input_=this.create__("input"),this.ins_=this.create__("ins"),this.kbd_=this.create__("kbd"),this.label_=this.create__("label"),this.legend_=this.create__("legend"),this.li_=this.create__("li"),this.link_=this.create__("link"),this.main_=this.create__("main"),this.map_=this.create__("map"),this.mark_=this.create__("mark"),this.menu_=this.create__("menu"),this.menuitem_=this.create__("menuitem"),this.meta_=this.create__("meta"),this.meter_=this.create__("meter"),this.nav_=this.create__("nav"),this.noframes_=this.create__("noframes"),this.noscript_=this.create__("noscript"),this.object_=this.create__("object"),this.ol_=this.create__("ol"),this.optgroup_=this.create__("optgroup"),this.option_=this.create__("option"),this.output_=this.create__("output"),this.p_=this.create__("p"),this.param_=this.create__("param"),this.pre_=this.create__("pre"),this.progress_=this.create__("progress"),this.q_=this.create__("q"),this.rp_=this.create__("rp"),this.rt_=this.create__("rt"),this.rtc_=this.create__("rtc"),this.ruby_=this.create__("ruby"),this.s_=this.create__("s"),this.samp_=this.create__("samp"),this.script_=this.create__("script"),this.section_=this.create__("section"),this.select_=this.create__("select"),this.slot_=this.create__("slot"),this.small_=this.create__("small"),this.source_=this.create__("source"),this.span_=this.create__("span"),this.strong_=this.create__("strong"),this.style_=this.create__("style"),this.sub_=this.create__("sub"),this.summary_=this.create__("summary"),this.sup_=this.create__("sup"),this.table_=this.create__("table"),this.tbody_=this.create__("tbody"),this.td_=this.create__("td"),this.template_=this.create__("template"),this.textarea_=this.create__("textarea"),this.tfoot_=this.create__("tfoot"),this.th_=this.create__("th"),this.thead_=this.create__("thead"),this.time_=this.create__("time"),this.title_=this.create__("title"),this.tr_=this.create__("tr"),this.track_=this.create__("track"),this.u_=this.create__("u"),this.ul_=this.create__("ul"),this.var_=this.create__("var"),this.video_=this.create__("video"),this.wbr__=this.create__("wbr");     
  this.doIf = function doIf(condition, func) {
    if(condition) {
      func(); // Define a function replacement
    } 
  }, // call function like so --> doIf(a == 1, newFunc)
  this.ifElse = function ifElse(condition, func1, func2) {
    if(condition) {
      func1(); // Define a function replacement
    } else {
        func2();
    }
  }, // call function like so --> ifElse(a == 1, newFunc)
  this.evtHandle = function evtHandle(vars, evt, func) {
    return vars.addEventListener(evt, func)
  } // call function like so --> evtHandle(variable, "event", function);
   return { 
      a_,abbr_,address_,area_,article_,aside_,audio_,b_,base_,bdi_,bdo_,blockquote_,body_,br_,button_,canvas_,caption_,cite_,code_,col_,colgroup_,data_,datalist_,dd_,del_,details_,dfn_,div_,dl_,dt_,em_,embed_,fieldset_,figcaption_,figure_,footer_,form_,h1_,h2_,h3_,h4_,h5_,h6_,head_,header_,hr_,html_,i_,iframe_,img_,input_,ins_,kbd_,label_,legend_,li_,link_,main_,map_,mark_,menu_,menuitem_,meta_,meter_,nav_,noframes_,noscript_,object_,ol_,optgroup_,option_,output_,p_,param_,pre_,progress_,q_,rp_,rt_,rtc_,ruby_,s_,samp_,script_,section_,select_,slot_,small_,source_,span_,strong_,style_,sub_,summary_,sup_,table_,tbody_,td_,template_,textarea_,tfoot_,th_,thead_,time_,title_,tr_,track_,u_,ul_,var_,video_,wbr_
}
})();
