t.stratify=function(){var t=Yl,n=Bl;function e(e){var r,i,o,a,u,f,c,s=e.length,l=new Array(s),h={};for(i=0;i<s;++i)r=e[i],u=l[i]=new hl(r),null!=(f=t(r,i,e))&&(f+="")&&(h[c=Ul+(u.id=f)]=c in h?Ol:u);for(i=0;i<s;++i)if(u=l[i],null!=(f=n(e[i],i,e))&&(f+="")){if(!(a=h[Ul+f]))throw new Error("missing: "+f);if(a===Ol)throw new Error("ambiguous: "+f);a.children?a.children.push(u):a.children=[u],u.parent=a}else{if(o)throw new Error("multiple roots");o=u}if(!o)throw new Error("no root");if(o.parent=ql,o.eachBefore(function(t){t.depth=t.parent.depth+1,--s}).eachBefore(ll),o.parent=null,s>0)throw new Error("cycle");return o}return e.id=function(n){return arguments.length?(t=Sl(n),e):t},e.parentId=function(t){return arguments.length?(n=Sl(t),e):n},e}