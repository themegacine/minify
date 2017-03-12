function removeHtmlTag(strx,chop){var s=strx.split("<");for(var i=0;i<s.length;i++){if(s[i].indexOf(">")!=-1){s[i]=s[i].substring(s[i].indexOf(">")+1,s[i].length);}}
s=s.join("");s=s.substring(0,chop-1);return s;}
function showrecentposts(json){document.write('<ul id="postslideContent">');j=(showRandomImg)?Math.floor((imgr.length+1)*Math.random()):0;img=new Array();for(var i=0;i<numposts;i++){var entry=json.feed.entry[i];var posttitle=entry.title.$t;var posturl;if(i==json.feed.entry.length)break;for(var k=0;k<entry.link.length;k++){if(entry.link[k].rel=='alternate'){posturl=entry.link[k].href;break;}}
if("content"in entry){var postcontent=entry.content.$t;}
else
if("summary"in entry){var postcontent=entry.summary.$t;}
else var postcontent="";if(j>imgr.length-1)j=0;img[i]=imgr[j];s=postcontent;a=s.indexOf("<img");b=s.indexOf("src=\"",a);c=s.indexOf("\"",b+5);d=s.substr(b+5,c-b-5);if((a!=-1)&&(b!=-1)&&(c!=-1)&&(d!=""))img[i]=d;var item='<li class="postslideImage"><a href="'+posturl+'"><img src="'+img[i]+'" width="'+imgwidth+'" height="'+imgheight+'"/></a><span><a href="'+posturl+'">'+posttitle+'</a> <p>'+removeHtmlTag(postcontent,summaryPost)+'...</p></span></li>';if(summaryPost==0){item='<li class="postslideImage"><a href="'+posturl+'"><img src="'+img[i]+'" width="'+imgwidth+'" height="'+imgheight+'"/></a><span><a href="'+posturl+'">'+posttitle+'</a></span></li>';}
document.write(item);j++;}
document.write('</ul>');}
document.write("<script src=\""+home_page+"feeds/posts/default?max-results="+numposts+"&start-index="+startpost+"&orderby=published&alt=json-in-script&callback=showrecentposts\"><\/script>");