(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{Pl3L:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),c=u("Ip0R"),a=[{tile:"News",icon:"news.svg",link:"#/main/news"},{tile:"Contacts",icon:"contacts.svg",link:"#/main/contacts"},{tile:"Useful links",icon:"useful-links.svg",link:"#/main/usefulllink"},{tile:"Documents",icon:"documents.svg",link:"#/main/documents"},{tile:"Create sample",icon:"create-sample.svg",link:"#/main/sample"}],t=u("TtU4"),o=function(){return function(){}}(),d=function(){function l(l){this.ref=l,this.icons=[{src:"news.svg",id:0},{src:"contacts.svg",id:1},{src:"user-link.svg",id:3},{src:"document.svg",id:4},{src:"sample.svg",id:5}],this.selectedIconId=0,this.appTile=new o}return l.prototype.ngOnInit=function(){},l.prototype.cancel=function(){this.ref.close()},l.prototype.next=function(){this.selectedIconId=this.selectedIconId===this.icons.length-1?0:this.selectedIconId+1},l.prototype.prev=function(){this.selectedIconId=0===this.selectedIconId?this.icons.length-1:this.selectedIconId-1},l.prototype.create=function(){this.appTile.icon=this.icons[this.selectedIconId].src,this.ref.close(this.appTile)},l}(),r=function(){function l(l){this.dialogService=l,this.items=a}return l.prototype.ngOnInit=function(){},l.prototype.onCreateTitle=function(){var l=this;this.dialogService.open(d,{closeOnBackdropClick:!1}).onClose.subscribe(function(n){return n&&l.items.push(n)})},l.prototype.redirect=function(l){alert(l)},l}(),i=function(){return function(){}}(),s=u("gIcY"),m=(t.p.forChild(),function(){return function(){}}()),g=u("pMnS"),p=u("4bAE"),v=u("mc3f"),f=u("OHTX"),b=e["\u0275crt"]({encapsulation:0,styles:[[".redirect[_ngcontent-%COMP%]{text-decoration:none}.redirect[_ngcontent-%COMP%]:hover{cursor:pointer}.container[_ngcontent-%COMP%]{max-width:1200px;margin-top:26px}nb-card[_ngcontent-%COMP%]{width:100%;border:1px solid #e8e8ed;display:block;text-align:center}.item[_ngcontent-%COMP%]{background-color:#353135;color:#fff}.add-item[_ngcontent-%COMP%]{background-color:#fff;color:#666}.dot-menu[_ngcontent-%COMP%]{height:25px;margin-top:20px;margin-right:20px;display:block}.tile[_ngcontent-%COMP%]{font-family:Helvetica;font-size:18px;font-weight:700;line-height:30px;text-align:center;margin-top:36px}.add-icon[_ngcontent-%COMP%], .icon[_ngcontent-%COMP%]{width:50%;height:50%;margin-left:25%;margin-right:25%;display:block}.add-tile[_ngcontent-%COMP%]{margin-top:10px}"]],data:{}});function h(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,9,"div",[["class","col-sm-12 col-md-6 col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,8,"a",[["class","redirect"]],[[8,"href",4]],null,null,null,null)),(l()(),e["\u0275eld"](2,0,null,null,7,"nb-card",[["class","item"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,p.f,p.b)),e["\u0275did"](3,49152,null,0,v.b,[],null,null),(l()(),e["\u0275eld"](4,0,null,1,5,"nb-card-body",[],null,null,null,p.e,p.a)),e["\u0275did"](5,49152,null,0,v.a,[],null,null),(l()(),e["\u0275eld"](6,0,null,0,0,"img",[["class","dot-menu float-right"],["src","../../../assets/dashboard-icon/dot-menu.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](7,0,null,0,0,"img",[["class","icon"]],[[8,"src",4]],null,null,null,null)),(l()(),e["\u0275eld"](8,0,null,0,1,"p",[["class","tile"]],null,null,null,null,null)),(l()(),e["\u0275ted"](9,null,[" "," "]))],null,function(l,n){l(n,1,0,e["\u0275inlineInterpolate"](1,"./",n.context.$implicit.link,"")),l(n,2,1,[e["\u0275nov"](n,3).xxsmall,e["\u0275nov"](n,3).xsmall,e["\u0275nov"](n,3).small,e["\u0275nov"](n,3).medium,e["\u0275nov"](n,3).large,e["\u0275nov"](n,3).xlarge,e["\u0275nov"](n,3).xxlarge,e["\u0275nov"](n,3).active,e["\u0275nov"](n,3).disabled,e["\u0275nov"](n,3).primary,e["\u0275nov"](n,3).info,e["\u0275nov"](n,3).success,e["\u0275nov"](n,3).warning,e["\u0275nov"](n,3).danger,e["\u0275nov"](n,3).hasAccent,e["\u0275nov"](n,3).primaryAccent,e["\u0275nov"](n,3).infoAccent,e["\u0275nov"](n,3).successAccent,e["\u0275nov"](n,3).warningAccent,e["\u0275nov"](n,3).dangerAccent,e["\u0275nov"](n,3).activeAccent,e["\u0275nov"](n,3).disabledAccent]),l(n,7,0,e["\u0275inlineInterpolate"](1,"../../../assets/dashboard-icon/",n.context.$implicit.icon,"")),l(n,9,0,n.context.$implicit.tile)})}function x(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","container"]],null,null,null,null,null)),(l()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,h)),e["\u0275did"](3,278528,null,0,c.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](4,0,null,null,9,"div",[["class","col-sm-12 col-md-6 col-lg-3"]],null,null,null,null,null)),(l()(),e["\u0275eld"](5,0,null,null,8,"a",[["class","redirect"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.onCreateTitle()&&e),e},null,null)),(l()(),e["\u0275eld"](6,0,null,null,7,"nb-card",[["class","add-item"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,p.f,p.b)),e["\u0275did"](7,49152,null,0,v.b,[],null,null),(l()(),e["\u0275eld"](8,0,null,1,5,"nb-card-body",[],null,null,null,p.e,p.a)),e["\u0275did"](9,49152,null,0,v.a,[],null,null),(l()(),e["\u0275eld"](10,0,null,0,0,"img",[["class","dot-menu float-right"],["src","../../../assets/dashboard-icon/dot-menu-dark.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,0,0,"img",[["class","add-icon"],["src","../../../assets/dashboard-icon/add.svg"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,0,1,"p",[["class","tile add-tile"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Add a tile"]))],function(l,n){l(n,3,0,n.component.items)},function(l,n){l(n,6,1,[e["\u0275nov"](n,7).xxsmall,e["\u0275nov"](n,7).xsmall,e["\u0275nov"](n,7).small,e["\u0275nov"](n,7).medium,e["\u0275nov"](n,7).large,e["\u0275nov"](n,7).xlarge,e["\u0275nov"](n,7).xxlarge,e["\u0275nov"](n,7).active,e["\u0275nov"](n,7).disabled,e["\u0275nov"](n,7).primary,e["\u0275nov"](n,7).info,e["\u0275nov"](n,7).success,e["\u0275nov"](n,7).warning,e["\u0275nov"](n,7).danger,e["\u0275nov"](n,7).hasAccent,e["\u0275nov"](n,7).primaryAccent,e["\u0275nov"](n,7).infoAccent,e["\u0275nov"](n,7).successAccent,e["\u0275nov"](n,7).warningAccent,e["\u0275nov"](n,7).dangerAccent,e["\u0275nov"](n,7).activeAccent,e["\u0275nov"](n,7).disabledAccent])})}function _(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"ngx-dashboard",[],null,null,null,x,b)),e["\u0275did"](1,114688,null,0,r,[f.a],null,null)],function(l,n){l(n,1,0)},null)}var C=e["\u0275ccf"]("ngx-dashboard",r,_,{},{},[]),y=u("cMIS"),O=u("j8n1"),k=e["\u0275crt"]({encapsulation:0,styles:[["nb-card[_ngcontent-%COMP%]{max-width:571px;height:100%}nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border:none;color:#242a32;font-family:Helvetica;font-size:30px;font-weight:800;line-height:30px;text-align:center}nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%]{width:18px}nb-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{padding-top:10px}nb-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{margin:0 10%;padding:0;overflow-x:hidden;overflow-y:auto}nb-card[_ngcontent-%COMP%]   nb-card-footer[_ngcontent-%COMP%]{margin:10px 10% 30px;padding:0;border:none}label[_ngcontent-%COMP%]{color:#666;font-family:Helvetica;font-size:16px;line-height:30px}.description[_ngcontent-%COMP%]{color:#666;font-family:Helvetica;font-size:12px;line-height:16px;margin:8px 0 0}.custom-select[_ngcontent-%COMP%]{background-image:url(drop-down-arrow.ad837eb6bf730a10a673.svg)}.cancel[_ngcontent-%COMP%]{background-color:#a5a5a5;margin-bottom:10px}.create[_ngcontent-%COMP%]{background-color:#f17922;margin-bottom:10px}.custom-carousel[_ngcontent-%COMP%]{background-color:#f17922;margin-bottom:1rem}.custom-carousel[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%]{width:30%;margin:20px 35%}"]],data:{}});function M(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,3,"div",[["class","carousel-item"]],null,null,null,null,null)),e["\u0275did"](1,278528,null,0,c.NgClass,[e.IterableDiffers,e.KeyValueDiffers,e.ElementRef,e.Renderer2],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),e["\u0275pod"](2,{active:0}),(l()(),e["\u0275eld"](3,0,null,null,0,"img",[["alt","First slide"],["class","d-block icon"]],[[8,"src",4]],null,null,null,null))],function(l,n){var u=l(n,2,0,0==n.context.$implicit.id);l(n,1,0,"carousel-item",u)},function(l,n){l(n,3,0,e["\u0275inlineInterpolate"](1,"assets/dashboard-icon/",n.context.$implicit.src,""))})}function w(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,86,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,p.f,p.b)),e["\u0275did"](1,49152,null,0,v.b,[],null,null),(l()(),e["\u0275eld"](2,0,null,0,4,"nb-card-header",[],null,null,null,p.h,p.d)),e["\u0275did"](3,49152,null,0,v.d,[],null,null),(l()(),e["\u0275eld"](4,0,null,0,0,"img",[["class","close"],["src","assets/dashboard-icon/close.svg"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cancel()&&e),e},null,null)),(l()(),e["\u0275eld"](5,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Create App Tile"])),(l()(),e["\u0275eld"](7,0,null,1,70,"nb-card-body",[],null,null,null,p.e,p.a)),e["\u0275did"](8,49152,null,0,v.a,[],null,null),(l()(),e["\u0275eld"](9,0,null,0,13,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](10,0,null,null,12,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](11,0,null,null,11,"div",[["class","carousel slide custom-carousel"],["data-interval","false"],["data-ride","carousel"],["id","tile-image-carousel"]],null,null,null,null,null)),(l()(),e["\u0275eld"](12,0,null,null,2,"div",[["class","carousel-inner"]],null,null,null,null,null)),(l()(),e["\u0275and"](16777216,null,null,1,null,M)),e["\u0275did"](14,278528,null,0,c.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),e["\u0275eld"](15,0,null,null,3,"a",[["class","carousel-control-prev"],["data-slide","prev"],["href","#tile-image-carousel"],["role","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.prev()&&e),e},null,null)),(l()(),e["\u0275eld"](16,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-prev-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](17,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Previous"])),(l()(),e["\u0275eld"](19,0,null,null,3,"a",[["class","carousel-control-next"],["data-slide","next"],["href","#tile-image-carousel"],["role","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.next()&&e),e},null,null)),(l()(),e["\u0275eld"](20,0,null,null,0,"span",[["aria-hidden","true"],["class","carousel-control-next-icon"]],null,null,null,null,null)),(l()(),e["\u0275eld"](21,0,null,null,1,"span",[["class","sr-only"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Next"])),(l()(),e["\u0275eld"](23,0,null,0,11,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](24,0,null,null,10,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](25,0,null,null,9,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](26,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Site user name"])),(l()(),e["\u0275eld"](28,0,null,null,4,"select",[["class","form-control custom-select"]],null,null,null,null,null)),(l()(),e["\u0275eld"](29,0,null,null,3,"option",[["value","0"]],null,null,null,null,null)),e["\u0275did"](30,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),e["\u0275did"](31,147456,null,0,s["\u0275angular_packages_forms_forms_s"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["sm103@gmail.com"])),(l()(),e["\u0275eld"](33,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["We automatically detect your user names for the Adjuno sites that you use."])),(l()(),e["\u0275eld"](35,0,null,0,29,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](36,0,null,null,2,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](37,0,null,null,1,"label",[],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["The tile will take me to..."])),(l()(),e["\u0275eld"](39,0,null,null,14,"div",[["class","col-sm-4"]],null,null,null,null,null)),(l()(),e["\u0275eld"](40,0,null,null,13,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](41,0,null,null,12,"select",[["class","form-control custom-select"]],null,null,null,null,null)),(l()(),e["\u0275eld"](42,0,null,null,3,"option",[["value","0"]],null,null,null,null,null)),e["\u0275did"](43,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),e["\u0275did"](44,147456,null,0,s["\u0275angular_packages_forms_forms_s"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Dashboard"])),(l()(),e["\u0275eld"](46,0,null,null,3,"option",[["value","1"]],null,null,null,null,null)),e["\u0275did"](47,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),e["\u0275did"](48,147456,null,0,s["\u0275angular_packages_forms_forms_s"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Report"])),(l()(),e["\u0275eld"](50,0,null,null,3,"option",[["value","2"]],null,null,null,null,null)),e["\u0275did"](51,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),e["\u0275did"](52,147456,null,0,s["\u0275angular_packages_forms_forms_s"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Tool"])),(l()(),e["\u0275eld"](54,0,null,null,6,"div",[["class","col-sm-8"]],null,null,null,null,null)),(l()(),e["\u0275eld"](55,0,null,null,5,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](56,0,null,null,4,"select",[["class","form-control custom-select"]],null,null,null,null,null)),(l()(),e["\u0275eld"](57,0,null,null,3,"option",[["value","0"]],null,null,null,null,null)),e["\u0275did"](58,147456,null,0,s.NgSelectOption,[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),e["\u0275did"](59,147456,null,0,s["\u0275angular_packages_forms_forms_s"],[e.ElementRef,e.Renderer2,[8,null]],{value:[0,"value"]},null),(l()(),e["\u0275ted"](-1,null,["Site homepage"])),(l()(),e["\u0275eld"](61,0,null,null,3,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](62,0,null,null,2,"div",[["class","form-group"],["style","margin-top: -1rem;"]],null,null,null,null,null)),(l()(),e["\u0275eld"](63,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Select the destination for your app tile"])),(l()(),e["\u0275eld"](65,0,null,0,12,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](66,0,null,null,11,"div",[["class","col-sm-12"]],null,null,null,null,null)),(l()(),e["\u0275eld"](67,0,null,null,10,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),e["\u0275eld"](68,0,null,null,1,"label",[["for","inputTileName"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Tile name"])),(l()(),e["\u0275eld"](70,0,null,null,5,"input",[["class","form-control"],["id","inputTileName"],["name","tileName"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],function(l,n,u){var c=!0,a=l.component;return"input"===n&&(c=!1!==e["\u0275nov"](l,71)._handleInput(u.target.value)&&c),"blur"===n&&(c=!1!==e["\u0275nov"](l,71).onTouched()&&c),"compositionstart"===n&&(c=!1!==e["\u0275nov"](l,71)._compositionStart()&&c),"compositionend"===n&&(c=!1!==e["\u0275nov"](l,71)._compositionEnd(u.target.value)&&c),"ngModelChange"===n&&(c=!1!==(a.appTile.tile=u)&&c),c},null,null)),e["\u0275did"](71,16384,null,0,s.DefaultValueAccessor,[e.Renderer2,e.ElementRef,[2,s.COMPOSITION_BUFFER_MODE]],null,null),e["\u0275prd"](1024,null,s.NG_VALUE_ACCESSOR,function(l){return[l]},[s.DefaultValueAccessor]),e["\u0275did"](73,671744,null,0,s.NgModel,[[8,null],[8,null],[8,null],[6,s.NG_VALUE_ACCESSOR]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e["\u0275prd"](2048,null,s.NgControl,null,[s.NgModel]),e["\u0275did"](75,16384,null,0,s.NgControlStatus,[[4,s.NgControl]],null,null),(l()(),e["\u0275eld"](76,0,null,null,1,"p",[["class","description"]],null,null,null,null,null)),(l()(),e["\u0275ted"](-1,null,["Give your tile a descriptive name to make it easy to find on your dashboard."])),(l()(),e["\u0275eld"](78,0,null,3,8,"nb-card-footer",[],null,null,null,p.g,p.c)),e["\u0275did"](79,49152,null,0,v.c,[],null,null),(l()(),e["\u0275eld"](80,0,null,0,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),e["\u0275eld"](81,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](82,0,null,null,1,"button",[["class","btn btn-block cancel"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.cancel()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Cancel"])),(l()(),e["\u0275eld"](84,0,null,null,2,"div",[["class","col-6"]],null,null,null,null,null)),(l()(),e["\u0275eld"](85,0,null,null,1,"button",[["class","btn btn-block create"],["type","button"]],null,[[null,"click"]],function(l,n,u){var e=!0;return"click"===n&&(e=!1!==l.component.create()&&e),e},null,null)),(l()(),e["\u0275ted"](-1,null,["Create"]))],function(l,n){var u=n.component;l(n,14,0,u.icons),l(n,30,0,"0"),l(n,31,0,"0"),l(n,43,0,"0"),l(n,44,0,"0"),l(n,47,0,"1"),l(n,48,0,"1"),l(n,51,0,"2"),l(n,52,0,"2"),l(n,58,0,"0"),l(n,59,0,"0"),l(n,73,0,"tileName",u.appTile.tile)},function(l,n){l(n,0,1,[e["\u0275nov"](n,1).xxsmall,e["\u0275nov"](n,1).xsmall,e["\u0275nov"](n,1).small,e["\u0275nov"](n,1).medium,e["\u0275nov"](n,1).large,e["\u0275nov"](n,1).xlarge,e["\u0275nov"](n,1).xxlarge,e["\u0275nov"](n,1).active,e["\u0275nov"](n,1).disabled,e["\u0275nov"](n,1).primary,e["\u0275nov"](n,1).info,e["\u0275nov"](n,1).success,e["\u0275nov"](n,1).warning,e["\u0275nov"](n,1).danger,e["\u0275nov"](n,1).hasAccent,e["\u0275nov"](n,1).primaryAccent,e["\u0275nov"](n,1).infoAccent,e["\u0275nov"](n,1).successAccent,e["\u0275nov"](n,1).warningAccent,e["\u0275nov"](n,1).dangerAccent,e["\u0275nov"](n,1).activeAccent,e["\u0275nov"](n,1).disabledAccent]),l(n,70,0,e["\u0275nov"](n,75).ngClassUntouched,e["\u0275nov"](n,75).ngClassTouched,e["\u0275nov"](n,75).ngClassPristine,e["\u0275nov"](n,75).ngClassDirty,e["\u0275nov"](n,75).ngClassValid,e["\u0275nov"](n,75).ngClassInvalid,e["\u0275nov"](n,75).ngClassPending)})}function P(l){return e["\u0275vid"](0,[(l()(),e["\u0275eld"](0,0,null,null,1,"ngx-create-or-edit-title",[],null,null,null,w,k)),e["\u0275did"](1,114688,null,0,d,[O.a],null,null)],function(l,n){l(n,1,0)},null)}var R=e["\u0275ccf"]("ngx-create-or-edit-title",d,P,{},{},[]),A=u("eDkP"),I=u("Fzqc"),N=u("ZlY8"),E=u("IK/E"),S=u("JODa"),T=u("wW3g"),F=u("ZYCi"),D=u("P8+w"),L=u("4c35"),V=u("dWZg"),j=u("qAlS"),U=u("hle7"),z=u("lOUe"),H=u("yHPJ"),$=u("SdSL"),B=u("Ku2q"),G=u("6wBL"),J=u("V6uK"),K=u("rNHn"),Z=u("eBEu");u.d(n,"DashboardModuleNgFactory",function(){return q});var q=e["\u0275cmf"](m,[],function(l){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[g.a,C,y.a,R]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,c.NgLocalization,c.NgLocaleLocalization,[e.LOCALE_ID,[2,c["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,s["\u0275angular_packages_forms_forms_j"],s["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,A.d,A.d,[A.i,A.e,e.ComponentFactoryResolver,A.h,A.f,e.Injector,e.NgZone,c.DOCUMENT,I.b,[2,c.Location]]),e["\u0275mpd"](5120,A.j,A.k,[A.d]),e["\u0275mpd"](4608,f.a,f.a,[N.b,E.a,S.c,T.a,e.Injector,e.ComponentFactoryResolver]),e["\u0275mpd"](1073742336,c.CommonModule,c.CommonModule,[]),e["\u0275mpd"](1073742336,F.p,F.p,[[2,F.v],[2,F.l]]),e["\u0275mpd"](1073742336,i,i,[]),e["\u0275mpd"](1073742336,s["\u0275angular_packages_forms_forms_bc"],s["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,s.FormsModule,s.FormsModule,[]),e["\u0275mpd"](1073742336,D.a,D.a,[]),e["\u0275mpd"](1073742336,I.a,I.a,[]),e["\u0275mpd"](1073742336,L.f,L.f,[]),e["\u0275mpd"](1073742336,V.b,V.b,[]),e["\u0275mpd"](1073742336,j.b,j.b,[]),e["\u0275mpd"](1073742336,A.g,A.g,[]),e["\u0275mpd"](1073742336,U.a,U.a,[]),e["\u0275mpd"](1073742336,z.a,z.a,[]),e["\u0275mpd"](1073742336,H.a,H.a,[]),e["\u0275mpd"](1073742336,$.a,$.a,[]),e["\u0275mpd"](1073742336,B.a,B.a,[]),e["\u0275mpd"](1073742336,G.a,G.a,[]),e["\u0275mpd"](1073742336,J.a,J.a,[]),e["\u0275mpd"](1073742336,K.a,K.a,[]),e["\u0275mpd"](1073742336,Z.a,Z.a,[]),e["\u0275mpd"](1073742336,m,m,[]),e["\u0275mpd"](1024,F.j,function(){return[[{path:"",component:r}]]},[]),e["\u0275mpd"](256,E.a,{},[])])})}}]);