/*! For license information please see EllipseGeometryLibrary-53ed4539.js.LICENSE.txt */
define(["exports","./Matrix2-c339372d","./ComponentDatatype-1b227f17","./Transforms-a48d25e5"],(function(t,a,e,n){"use strict";const i={},r=new a.Cartesian3,s=new a.Cartesian3,o=new n.Quaternion,l=new a.Matrix3;function c(t,e,i,c,C,y,u,m,h,x){const M=t+e;a.Cartesian3.multiplyByScalar(c,Math.cos(M),r),a.Cartesian3.multiplyByScalar(i,Math.sin(M),s),a.Cartesian3.add(r,s,r);let f=Math.cos(t);f*=f;let z=Math.sin(t);z*=z;const d=y/Math.sqrt(u*f+C*z)/m;return n.Quaternion.fromAxisAngle(r,d,o),a.Matrix3.fromQuaternion(o,l),a.Matrix3.multiplyByVector(l,h,x),a.Cartesian3.normalize(x,x),a.Cartesian3.multiplyByScalar(x,m,x),x}const C=new a.Cartesian3,y=new a.Cartesian3,u=new a.Cartesian3,m=new a.Cartesian3;i.raisePositionsToHeight=function(t,e,n){const i=e.ellipsoid,r=e.height,s=e.extrudedHeight,o=n?t.length/3*2:t.length/3,l=new Float64Array(3*o),c=t.length,h=n?c:0;for(let e=0;e<c;e+=3){const o=e+1,c=e+2,x=a.Cartesian3.fromArray(t,e,C);i.scaleToGeodeticSurface(x,x);const M=a.Cartesian3.clone(x,y),f=i.geodeticSurfaceNormal(x,m),z=a.Cartesian3.multiplyByScalar(f,r,u);a.Cartesian3.add(x,z,x),n&&(a.Cartesian3.multiplyByScalar(f,s,z),a.Cartesian3.add(M,z,M),l[e+h]=M.x,l[o+h]=M.y,l[c+h]=M.z),l[e]=x.x,l[o]=x.y,l[c]=x.z}return l};const h=new a.Cartesian3,x=new a.Cartesian3,M=new a.Cartesian3;i.computeEllipsePositions=function(t,n,i){const r=t.semiMinorAxis,s=t.semiMajorAxis,o=t.rotation,l=t.center,m=8*t.granularity,f=r*r,z=s*s,d=s*r,_=a.Cartesian3.magnitude(l),p=a.Cartesian3.normalize(l,h);let O=a.Cartesian3.cross(a.Cartesian3.UNIT_Z,l,x);O=a.Cartesian3.normalize(O,O);const w=a.Cartesian3.cross(p,O,M);let P=1+Math.ceil(e.CesiumMath.PI_OVER_TWO/m);const T=e.CesiumMath.PI_OVER_TWO/(P-1);let I=e.CesiumMath.PI_OVER_TWO-P*T;I<0&&(P-=Math.ceil(Math.abs(I)/T));const g=n?new Array(P*(P+2)*2*3):void 0;let E=0,V=C,A=y;const R=4*P*3;let W=R-1,S=0;const B=i?new Array(R):void 0;let b,v,Q,G,H;for(I=e.CesiumMath.PI_OVER_TWO,V=c(I,o,w,O,f,d,z,_,p,V),n&&(g[E++]=V.x,g[E++]=V.y,g[E++]=V.z),i&&(B[W--]=V.z,B[W--]=V.y,B[W--]=V.x),I=e.CesiumMath.PI_OVER_TWO-T,b=1;b<P+1;++b){if(V=c(I,o,w,O,f,d,z,_,p,V),A=c(Math.PI-I,o,w,O,f,d,z,_,p,A),n){for(g[E++]=V.x,g[E++]=V.y,g[E++]=V.z,Q=2*b+2,v=1;v<Q-1;++v)G=v/(Q-1),H=a.Cartesian3.lerp(V,A,G,u),g[E++]=H.x,g[E++]=H.y,g[E++]=H.z;g[E++]=A.x,g[E++]=A.y,g[E++]=A.z}i&&(B[W--]=V.z,B[W--]=V.y,B[W--]=V.x,B[S++]=A.x,B[S++]=A.y,B[S++]=A.z),I=e.CesiumMath.PI_OVER_TWO-(b+1)*T}for(b=P;b>1;--b){if(I=e.CesiumMath.PI_OVER_TWO-(b-1)*T,V=c(-I,o,w,O,f,d,z,_,p,V),A=c(I+Math.PI,o,w,O,f,d,z,_,p,A),n){for(g[E++]=V.x,g[E++]=V.y,g[E++]=V.z,Q=2*(b-1)+2,v=1;v<Q-1;++v)G=v/(Q-1),H=a.Cartesian3.lerp(V,A,G,u),g[E++]=H.x,g[E++]=H.y,g[E++]=H.z;g[E++]=A.x,g[E++]=A.y,g[E++]=A.z}i&&(B[W--]=V.z,B[W--]=V.y,B[W--]=V.x,B[S++]=A.x,B[S++]=A.y,B[S++]=A.z)}I=e.CesiumMath.PI_OVER_TWO,V=c(-I,o,w,O,f,d,z,_,p,V);const N={};return n&&(g[E++]=V.x,g[E++]=V.y,g[E++]=V.z,N.positions=g,N.numPts=P),i&&(B[W--]=V.z,B[W--]=V.y,B[W--]=V.x,N.outerPositions=B),N};var f=i;t.EllipseGeometryLibrary=f}));