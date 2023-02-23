/*! For license information please see PolylinePipeline-78c6adf0.js.LICENSE.txt */
define(["exports","./Matrix2-c339372d","./defaultValue-65031fc5","./EllipsoidGeodesic-14d277c6","./EllipsoidRhumbLine-0df6bb40","./IntersectionTests-87344d12","./ComponentDatatype-1b227f17","./Plane-3d182a08"],(function(e,t,a,n,i,r,o,s){"use strict";const c={numberOfPoints:function(e,a,n){const i=t.Cartesian3.distance(e,a);return Math.ceil(i/n)},numberOfPointsRhumbLine:function(e,t,a){const n=Math.pow(e.longitude-t.longitude,2)+Math.pow(e.latitude-t.latitude,2);return Math.max(1,Math.ceil(Math.sqrt(n/(a*a))))}},l=new t.Cartographic;c.extractHeights=function(e,t){const a=e.length,n=new Array(a);for(let i=0;i<a;i++){const a=e[i];n[i]=t.cartesianToCartographic(a,l).height}return n};const u=new t.Matrix4,h=new t.Cartesian3,f=new t.Cartesian3,g=new s.Plane(t.Cartesian3.UNIT_X,0),C=new t.Cartesian3,p=new s.Plane(t.Cartesian3.UNIT_X,0),d=new t.Cartesian3,m=new t.Cartesian3,w=[];function P(e,t,a){const n=w;let i;if(n.length=e,t===a){for(i=0;i<e;i++)n[i]=t;return n}const r=(a-t)/e;for(i=0;i<e;i++){const e=t+i*r;n[i]=e}return n}const T=new t.Cartographic,y=new t.Cartographic,A=new t.Cartesian3,E=new t.Cartesian3,b=new t.Cartesian3,R=new n.EllipsoidGeodesic;let M=new i.EllipsoidRhumbLine;function S(e,a,n,i,r,o,s,l){const u=i.scaleToGeodeticSurface(e,E),h=i.scaleToGeodeticSurface(a,b),f=c.numberOfPoints(e,a,n),g=i.cartesianToCartographic(u,T),C=i.cartesianToCartographic(h,y),p=P(f,r,o);R.setEndPoints(g,C);const d=R.surfaceDistance/f;let m=l;g.height=r;let w=i.cartographicToCartesian(g,A);t.Cartesian3.pack(w,s,m),m+=3;for(let e=1;e<f;e++){const a=R.interpolateUsingSurfaceDistance(e*d,y);a.height=p[e],w=i.cartographicToCartesian(a,A),t.Cartesian3.pack(w,s,m),m+=3}return m}function D(e,a,n,r,o,s,l,u){const h=r.cartesianToCartographic(e,T),f=r.cartesianToCartographic(a,y),g=c.numberOfPointsRhumbLine(h,f,n);h.height=0,f.height=0;const C=P(g,o,s);M.ellipsoid.equals(r)||(M=new i.EllipsoidRhumbLine(void 0,void 0,r)),M.setEndPoints(h,f);const p=M.surfaceDistance/g;let d=u;h.height=o;let m=r.cartographicToCartesian(h,A);t.Cartesian3.pack(m,l,d),d+=3;for(let e=1;e<g;e++){const a=M.interpolateUsingSurfaceDistance(e*p,y);a.height=C[e],m=r.cartographicToCartesian(a,A),t.Cartesian3.pack(m,l,d),d+=3}return d}c.wrapLongitude=function(e,n){const i=[],o=[];if(a.defined(e)&&e.length>0){n=a.defaultValue(n,t.Matrix4.IDENTITY);const c=t.Matrix4.inverseTransformation(n,u),l=t.Matrix4.multiplyByPoint(c,t.Cartesian3.ZERO,h),w=t.Cartesian3.normalize(t.Matrix4.multiplyByPointAsVector(c,t.Cartesian3.UNIT_Y,f),f),P=s.Plane.fromPointNormal(l,w,g),T=t.Cartesian3.normalize(t.Matrix4.multiplyByPointAsVector(c,t.Cartesian3.UNIT_X,C),C),y=s.Plane.fromPointNormal(l,T,p);let A=1;i.push(t.Cartesian3.clone(e[0]));let E=i[0];const b=e.length;for(let n=1;n<b;++n){const c=e[n];if(s.Plane.getPointDistance(y,E)<0||s.Plane.getPointDistance(y,c)<0){const e=r.IntersectionTests.lineSegmentPlane(E,c,P,d);if(a.defined(e)){const a=t.Cartesian3.multiplyByScalar(w,5e-9,m);s.Plane.getPointDistance(P,E)<0&&t.Cartesian3.negate(a,a),i.push(t.Cartesian3.add(e,a,new t.Cartesian3)),o.push(A+1),t.Cartesian3.negate(a,a),i.push(t.Cartesian3.add(e,a,new t.Cartesian3)),A=1}}i.push(t.Cartesian3.clone(e[n])),A++,E=c}o.push(A)}return{positions:i,lengths:o}},c.generateArc=function(e){a.defined(e)||(e={});const n=e.positions,i=n.length,r=a.defaultValue(e.ellipsoid,t.Ellipsoid.WGS84);let s=a.defaultValue(e.height,0);const l=Array.isArray(s);if(i<1)return[];if(1===i){const e=r.scaleToGeodeticSurface(n[0],E);if(s=l?s[0]:s,0!==s){const a=r.geodeticSurfaceNormal(e,A);t.Cartesian3.multiplyByScalar(a,s,a),t.Cartesian3.add(e,a,e)}return[e.x,e.y,e.z]}let u=e.minDistance;if(!a.defined(u)){const t=a.defaultValue(e.granularity,o.CesiumMath.RADIANS_PER_DEGREE);u=o.CesiumMath.chordLength(t,r.maximumRadius)}let h,f=0;for(h=0;h<i-1;h++)f+=c.numberOfPoints(n[h],n[h+1],u);const g=3*(f+1),C=new Array(g);let p=0;for(h=0;h<i-1;h++)p=S(n[h],n[h+1],u,r,l?s[h]:s,l?s[h+1]:s,C,p);w.length=0;const d=n[i-1],m=r.cartesianToCartographic(d,T);m.height=l?s[i-1]:s;const P=r.cartographicToCartesian(m,A);return t.Cartesian3.pack(P,C,g-3),C};const x=new t.Cartographic,N=new t.Cartographic;c.generateRhumbArc=function(e){a.defined(e)||(e={});const n=e.positions,i=n.length,r=a.defaultValue(e.ellipsoid,t.Ellipsoid.WGS84);let s=a.defaultValue(e.height,0);const l=Array.isArray(s);if(i<1)return[];if(1===i){const e=r.scaleToGeodeticSurface(n[0],E);if(s=l?s[0]:s,0!==s){const a=r.geodeticSurfaceNormal(e,A);t.Cartesian3.multiplyByScalar(a,s,a),t.Cartesian3.add(e,a,e)}return[e.x,e.y,e.z]}const u=a.defaultValue(e.granularity,o.CesiumMath.RADIANS_PER_DEGREE);let h,f,g=0,C=r.cartesianToCartographic(n[0],x);for(h=0;h<i-1;h++)f=r.cartesianToCartographic(n[h+1],N),g+=c.numberOfPointsRhumbLine(C,f,u),C=t.Cartographic.clone(f,x);const p=3*(g+1),d=new Array(p);let m=0;for(h=0;h<i-1;h++)m=D(n[h],n[h+1],u,r,l?s[h]:s,l?s[h+1]:s,d,m);w.length=0;const P=n[i-1],y=r.cartesianToCartographic(P,T);y.height=l?s[i-1]:s;const b=r.cartographicToCartesian(y,A);return t.Cartesian3.pack(b,d,p-3),d},c.generateCartesianArc=function(e){const a=c.generateArc(e),n=a.length/3,i=new Array(n);for(let e=0;e<n;e++)i[e]=t.Cartesian3.unpack(a,3*e);return i},c.generateCartesianRhumbArc=function(e){const a=c.generateRhumbArc(e),n=a.length/3,i=new Array(n);for(let e=0;e<n;e++)i[e]=t.Cartesian3.unpack(a,3*e);return i};var G=c;e.PolylinePipeline=G}));