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
  a_,abbr,address_,area_,article,aside,audio,b_,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data_,datalist,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hr,html,i_,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p_,param,pre,progress,q_,rp,rt,rtc,ruby,s_,samp,script,section,select,slot,small,source,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u_,ul,var_,video,wbr
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
  }, this.a_=this.createEl("a"),this.abbr=this.createEl("abbr"),this.address_=this.createEl("address"),this.area_=this.createEl("area"),this.article=this.createEl("article"),this.aside=this.createEl("aside"),this.audio=this.createEl("audio"),this.b_=this.createEl("b"),this.base=this.createEl("base"),this.bdi=this.createEl("bdi"),this.bdo=this.createEl("bdo"),this.blockquote=this.createEl("blockquote"),this.body=this.createEl("body"),this.br=this.createEl("br"),this.button=this.createEl("button"),this.canvas=this.createEl("canvas"),this.caption=this.createEl("caption"),this.cite=this.createEl("cite"),this.code=this.createEl("code"),this.col=this.createEl("col"),this.colgroup=this.createEl("colgroup"),this.data_=this.createEl("data"),this.datalist=this.createEl("datalist"),this.dd=this.createEl("dd"),this.del=this.createEl("del_"),this.details=this.createEl("details"),this.dfn=this.createEl("dfn"),this.div=this.createEl("div"),this.dl=this.createEl("dl"),this.dt=this.createEl("dt"),this.em=this.createEl("em"),this.embed=this.createEl("embed"),this.fieldset=this.createEl("fieldset"),this.figcaption=this.createEl("figcaption"),this.figure=this.createEl("figure"),this.footer=this.createEl("footer"),this.form=this.createEl("form"),this.h1=this.createEl("h1"),this.h2=this.createEl("h2"),this.h3=this.createEl("h3"),this.h4=this.createEl("h4"),this.h5=this.createEl("h5"),this.h6=this.createEl("h6"),this.head=this.createEl("head"),this.header=this.createEl("header"),this.hr=this.createEl("hr"),this.html=this.createEl("html"),this.i_=this.createEl("i"),this.iframe=this.createEl("iframe"),this.img=this.createEl("img"),this.input=this.createEl("input"),this.ins=this.createEl("ins"),this.kbd=this.createEl("kbd"),this.label=this.createEl("label"),this.legend=this.createEl("legend"),this.li=this.createEl("li"),this.link=this.createEl("link"),this.main=this.createEl("main"),this.map=this.createEl("map"),this.mark=this.createEl("mark"),this.menu=this.createEl("menu"),this.menuitem=this.createEl("menuitem"),this.meta=this.createEl("meta"),this.meter=this.createEl("meter"),this.nav=this.createEl("nav"),this.noframes=this.createEl("noframes"),this.noscript=this.createEl("noscript"),this.object=this.createEl("object"),this.ol=this.createEl("ol"),this.optgroup=this.createEl("optgroup"),this.option=this.createEl("option"),this.output=this.createEl("output"),this.p_=this.createEl("p"),this.param=this.createEl("param"),this.pre=this.createEl("pre"),this.progress=this.createEl("progress"),this.q_=this.createEl("q"),this.rp=this.createEl("rp"),this.rt=this.createEl("rt"),this.rtc=this.createEl("rtc"),this.ruby=this.createEl("ruby"),this.s_=this.createEl("s"),this.samp=this.createEl("samp"),this.script=this.createEl("script"),this.section=this.createEl("section"),this.select=this.createEl("select"),this.slot=this.createEl("slot"),this.small=this.createEl("small"),this.source=this.createEl("source"),this.span=this.createEl("span"),this.strong=this.createEl("strong"),this.style=this.createEl("style"),this.sub=this.createEl("sub"),this.summary=this.createEl("summary"),this.sup=this.createEl("sup"),this.table=this.createEl("table"),this.tbody=this.createEl("tbody"),this.td=this.createEl("td"),this.template=this.createEl("template"),this.textarea=this.createEl("textarea"),this.tfoot=this.createEl("tfoot"),this.th=this.createEl("th"),this.thead=this.createEl("thead"),this.time=this.createEl("time"),this.title=this.createEl("title"),this.tr=this.createEl("tr"),this.track=this.createEl("track"),this.u_=this.createEl("u"),this.ul=this.createEl("ul"),this.var_=this.createEl("var"),this.video=this.createEl("video"),this.wbr=this.createEl("wbr");
  return { 
    a_,abbr,address_,area_,article,aside,audio,b_,base,bdi,bdo,blockquote,body,br,button,canvas,caption,cite,code,col,colgroup,data_,datalist,dd,del,details,dfn,div,dl,dt,em,embed,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hr,html,i_,iframe,img,input,ins,kbd,label,legend,li,link,main,map,mark,menu,menuitem,meta,meter,nav,noframes,noscript,object,ol,optgroup,option,output,p_,param,pre,progress,q_,rp,rt,rtc,ruby,s_,samp,script,section,select,slot,small,source,span,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,u_,ul,var_,video,wbr 
  }
})();
