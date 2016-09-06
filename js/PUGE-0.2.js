/**
 * Created by PuGe on 2016/7/24.
 */

//返回值 String
//字符串截取(原字符串,截取起点,截取终点(可选),起始位置(可选)
//例：cut_string("123你好145你好","1","好",1)返回值为 45你

function cut_string(Original,Before) {return Original.substring(Original.indexOf(Before) + Before.toString().length)}
function cut_string(Original,Before,After){if(Before!=null){var e=Original.indexOf(Before);var f=Original.indexOf(After,e+1);if(f>-1){return Original.substring(e+Before.toString().length,f)}else{return null}}else{return Original.substring(0,Original.indexOf(After))}}
function cut_string(Original,Before,After,Index){var e=Original.indexOf(Before,Index);if(e>-1){if(After!=null){var f=Original.indexOf(After,e+1);if(f>-1){return Original.substring(e+Before.toString().length,f)}else{return null}}else{return Original.substring(e+Before.toString().length)}}else{return null}}

//多个字符串截取(原字符串,截取起点,截取终点(可选),起始位置(可选)
//例：cut_string_array("123你好145你好","1","好",0)返回值为 ["23你","45你"]
function cut_string_array(e,f,g,h){var aa=[];var ab=0;while(e.indexOf(f,h)>0){aa[ab]=cut_string(e,f,g,h);h=e.indexOf(f,h)+1;ab++};return aa};

//在指定元素后追加元素
//例：var a = document.createElement("li");
//    a.setAttribute("class", "mui-table-view-cell mui-indexed-list-item mui-checkbox mui-left");
//	  a.innerHTML = "asd";
//    var b =document.getElementById("id");
//    insert_tag_after(a,b);
function insert_tag_after(Object,Target){var parent=Target.parentNode;if(parent.lastChild==Target){parent.appendChild(Object)}else{parent.insertBefore(Object,Target.nextSibling)}};

//返回值 String[]
//为一个数组中添加元素
//解释：a-被追加的数组，b-追加的元素，c-模式[1-直接追加，2-如果包含相同元素就不追加，3-有相同元素不追加并删除那个元素]
function append_element(a,b,c){if(c==0){return(a.concat(b))}else if(c==1){if(a.indexOf(b)<0){return(a.concat(b))}else{return a}}else{if(a.indexOf(b)<0){return(a.concat(b))}else{Array.prototype.remove=function(e){var d=this.indexOf(e);if(d>-1){this.splice(d,1)}};a.remove(b);return a}}}

//字符串转DOM对象
//例子:var strDom = "<div id='strDom'>hi<li>good</li></div>"
//    var node = string_to_DOM(strDom);
//    console.log(node[0].getElementsByTagName("li")[0].innerHTML);
//    输出结果为 good
function string_to_DOM(str) {var a = document.createElement("div");a.innerHTML = str;return a.childNodes;}

//隐藏元素(如果元素已经隐藏那么显示元素)
function hide_element(Dom) {if(Dom.style.display == "none"){Dom.style.display = "";} else {Dom.style.display = "none";}}