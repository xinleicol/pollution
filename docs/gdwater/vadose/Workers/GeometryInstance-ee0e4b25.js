/*! For license information please see GeometryInstance-ee0e4b25.js.LICENSE.txt */
define(["exports","./defaultValue-65031fc5","./Matrix2-c339372d"],(function(e,t,i){"use strict";e.GeometryInstance=function(e){e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT),this.geometry=e.geometry,this.modelMatrix=i.Matrix4.clone(t.defaultValue(e.modelMatrix,i.Matrix4.IDENTITY)),this.id=e.id,this.pickPrimitive=e.pickPrimitive,this.attributes=t.defaultValue(e.attributes,{}),this.westHemisphereGeometry=void 0,this.eastHemisphereGeometry=void 0}}));