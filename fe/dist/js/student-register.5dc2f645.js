(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["student-register"],{"78e0":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"hero"},[a("div",{staticClass:"d-flex justify-content-center align-items-center h-100"},[a("div",{staticClass:"col-10 col-sm-10 col-md-6 col-lg-5 col-xl-4"},[a("div",{staticClass:"card p-5"},[a("h4",{staticClass:"mb-2 mt-2"},[t._v("Register")]),t._m(0),1===t.step?a("div",[t._m(1),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.student_id,expression:"data.student_id"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.data.student_id},on:{input:function(e){e.target.composing||t.$set(t.data,"student_id",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Student Number")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.email,expression:"data.email"}],staticClass:"form-control",attrs:{type:"email",id:"floatingInput",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.data.email},on:{input:function(e){e.target.composing||t.$set(t.data,"email",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Email address")])]),a("div",{staticClass:"form-floating"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.password,expression:"data.password"}],staticClass:"form-control mb-3",attrs:{type:"password",id:"floatingPassword",placeholder:"Password"},domProps:{value:t.data.password},on:{input:function(e){e.target.composing||t.$set(t.data,"password",e.target.value)}}}),a("label",{attrs:{for:"floatingPassword"}},[t._v("Password")])]),a("div",{staticClass:"form-floating"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.type,expression:"data.type"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"type",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:""},domProps:{textContent:t._s(t.disabledOption4)}}),a("option",{attrs:{value:"admin"}},[t._v("Org-Admin")]),a("option",{attrs:{value:"member"}},[t._v("Org-Member")])]),a("label",[t._v("Account Type")])]),a("div",{staticClass:"d-flex justify-content-center mt-4"},[a("button",{staticClass:"btn btn-primary px-4 me-3",attrs:{href:""},on:{click:t.returnLogin}},[t._v(" Return ")]),a("button",{staticClass:"btn btn-success px-4",attrs:{href:"",disabled:t.isLoading},on:{click:t.step1}},[t._v(" Next ")])])]):t._e(),2===t.step?a("div",[t._m(2),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.first_name,expression:"data.first_name"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.data.first_name},on:{input:function(e){e.target.composing||t.$set(t.data,"first_name",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("First Name")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.middle_name,expression:"data.middle_name"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.data.middle_name},on:{input:function(e){e.target.composing||t.$set(t.data,"middle_name",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Middle Name (Optional)")])]),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.last_name,expression:"data.last_name"}],staticClass:"form-control",attrs:{type:"text",id:"floatingInput",placeholder:"name@example.com",autocomplete:"off"},domProps:{value:t.data.last_name},on:{input:function(e){e.target.composing||t.$set(t.data,"last_name",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Last Name")])]),a("div",{staticClass:"form-floating mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.course_id,expression:"data.course_id"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"course_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""}},[t._v("Select a course")]),t._l(t.allcourses,(function(e,r){return a("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.course))])}))],2),a("label",[t._v("Course")])]),a("div",{staticClass:"d-flex justify-content-center mt-4"},[a("button",{staticClass:"btn btn-primary px-2 me-3",attrs:{href:""},on:{click:t.prev}},[t._v(" Previous ")]),a("button",{staticClass:"btn btn-success px-4",attrs:{href:""},on:{click:t.step2}},[t._v(" Next ")])])]):t._e(),3===t.step?a("div",[t._m(3),a("div",{staticClass:"form-floating mb-3"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.age,expression:"data.age"}],staticClass:"form-control",attrs:{type:"number",id:"floatingInput",placeholder:"name@example.com",autocomplete:"off",disabled:""},domProps:{value:t.data.age},on:{input:function(e){e.target.composing||t.$set(t.data,"age",e.target.value)}}}),a("label",{attrs:{for:"floatingInput"}},[t._v("Age")])]),a("div",{staticClass:"form-floating mb-3"},[a("date-picker",{staticClass:"w-100",attrs:{"value-type":"format",format:"YYYY-MM-DD",placeholder:"Date of Birth ",autocomplete:"off"},model:{value:t.data.birthday,callback:function(e){t.$set(t.data,"birthday",e)},expression:"data.birthday"}})],1),a("div",{staticClass:"form-floating mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.gender,expression:"data.gender"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"gender",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""},domProps:{textContent:t._s(t.disabledOption)}}),a("option",{attrs:{value:"Male"}},[t._v("Male")]),a("option",{attrs:{value:"Female"}},[t._v("Female")])]),a("label",[t._v("Gender")])]),a("label",{staticClass:"mt-2",attrs:{for:""}},[t._v("Contact")]),a("div",{staticClass:"input-group mb-3"},[a("span",{staticClass:"input-group-text",attrs:{id:"basic-addon1"}},[t._v("+63")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.data.contact,expression:"data.contact"}],staticClass:"form-control",attrs:{type:"number",placeholder:"9366036099","aria-label":"9366036099","aria-describedby":"basic-addon1"},domProps:{value:t.data.contact},on:{input:function(e){e.target.composing||t.$set(t.data,"contact",e.target.value)}}})]),a("div",{staticClass:"d-flex justify-content-center mt-4"},[a("button",{staticClass:"btn btn-primary px-2 me-3",attrs:{href:""},on:{click:t.prev}},[t._v(" Previous ")]),a("button",{staticClass:"btn btn-success px-4",attrs:{href:""},on:{click:t.step3}},[t._v(" Next ")])])]):t._e(),4===t.step?a("div",[t._m(4),a("div",{staticClass:"mb-3"},[a("label",[t._v("Upload Image")]),a("VueFileAgent",{ref:"vueFileAgent",attrs:{multiple:!1,maxSize:"3MB",deletable:!0,accept:"image/*,",theme:"list",errorText:{type:"Invalid file type. Only image file is allowed",size:"Image should not exceed 3MB in size"}},on:{select:function(e){return t.filesSelected(e)},beforedelete:function(e){return t.onBeforeDelete(e)},delete:function(e){return t.fileDeleted(e)}},model:{value:t.fileRecords,callback:function(e){t.fileRecords=e},expression:"fileRecords"}})],1),a("div",{staticClass:"form-floating mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.year_level,expression:"data.year_level"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"year_level",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""},domProps:{textContent:t._s(t.disabledOption1)}}),a("option",{attrs:{value:"1"}},[t._v("Year Level - I")]),a("option",{attrs:{value:"2"}},[t._v("Year Level - II")]),a("option",{attrs:{value:"3"}},[t._v("Year Level - III")]),a("option",{attrs:{value:"4"}},[t._v("Year Level - IV")])]),a("label",[t._v("Year Level")])]),a("div",{staticClass:"form-floating mb-3"},[a("date-picker",{staticClass:"w-100",attrs:{"value-type":"format",range:"",type:"year",format:"YYYY",placeholder:"Select academic year",autocomplete:"off"},model:{value:t.data.academic_year,callback:function(e){t.$set(t.data,"academic_year",e)},expression:"data.academic_year"}})],1),a("div",{staticClass:"form-floating mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.section_id,expression:"data.section_id"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"section_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""},domProps:{textContent:t._s(t.disabledOption2)}}),t._l(t.filteredSection,(function(e,r){return a("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.section))])}))],2),a("label",[t._v("Section")])]),a("div",{staticClass:"form-floating mb-3"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.data.organization_id,expression:"data.organization_id"}],staticClass:"form-select",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.data,"organization_id",e.target.multiple?a:a[0])}}},[a("option",{attrs:{disabled:"",value:""},domProps:{textContent:t._s(t.disabledOption3)}}),t._l(t.allorganizations,(function(e,r){return a("option",{key:r,domProps:{value:e.id}},[t._v(t._s(e.organization)+" - "),a("span",{staticClass:"text-muted"},[t._v(t._s(e.abbreviation))])])}))],2),a("label",[t._v("Organization")])]),a("div",{staticClass:"d-flex justify-content-center mt-4"},[a("button",{staticClass:"btn btn-primary px-2 me-3",attrs:{href:""},on:{click:t.prev}},[t._v(" Previous ")]),a("button",{staticClass:"btn btn-success px-2",attrs:{href:"",disabled:t.isLoading},on:{click:t.register}},[t._v(" Register ")])])]):t._e()])])])])])},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"mb-4"},[a("small",[t._v("Hi, please fill in all forms to sign-up.")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"mb-3"},[a("small",[t._v("Step 1: Your Login Credentials")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"mb-3"},[a("small",[t._v("Step 2: Your Information")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"mb-3"},[a("small",[t._v("Step 3: Tell us more about yourself")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("h6",{staticClass:"mb-3"},[a("small",[t._v("Final Step: Your Education")])])}],i=a("5530"),n=a("1da1"),o=(a("4de4"),a("99af"),a("a434"),a("ac1f"),a("466d"),a("d3b7"),a("25f0"),a("a15b"),a("96cf"),a("2f62")),l={data:function(){return{step:1,data:{email:"",password:"",first_name:"",middle_name:"",last_name:"",age:"",birthday:"",gender:"",contact:"",year_level:"",academic_year:[],acad_year:"",student_id:"",section_id:"",organization_id:"",course_id:"",type:""},isLoading:!1,fileRecords:[],fileRecordsForUpload:[]}},props:{disabledOption:{type:String,default:"Select your gender"},disabledOption1:{type:String,default:"Select year level"},disabledOption2:{type:String,default:"Select section"},disabledOption3:{type:String,default:"Select organization"},disabledOption4:{type:String,default:"Select account type"}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return document.title="Please Login",e.next=3,t.$store.dispatch("sections/allSections");case 3:return e.next=5,t.$store.dispatch("organizations/allOrganizations");case 5:return e.next=7,t.$store.dispatch("courses/allCourses");case 7:case"end":return e.stop()}}),e)})))()},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(o["c"])("sections",["allsections"])),Object(o["c"])("organizations",["allorganizations"])),Object(o["c"])("courses",["allcourses"])),{},{filteredSection:function(){var t=this;return this.allsections.filter((function(e){return e.year_level===t.data.year_level}))}}),methods:Object(i["a"])(Object(i["a"])({},Object(o["b"])("auth",["createAccount","emailValidate"])),{},{filesSelected:function(t){var e=t.filter((function(t){return!t.error}));this.fileRecordsForUpload=this.fileRecordsForUpload.concat(e)},fileDeleted:function(t){var e=this.fileRecordsForUpload.indexOf(t);-1!==e&&this.fileRecordsForUpload.splice(e,1)},onBeforeDelete:function(t){var e=this.fileRecordsForUpload.indexOf(t);if(-1!==e){this.fileRecordsForUpload.splice(e,1);var a=this.fileRecords.indexOf(t);-1!==a&&this.fileRecords.splice(a,1)}},disabledDate:function(t){var e=new Date;return e.setHours(0,0,0,0),t>=new Date("2002-01-01")},step1:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(a=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,""!=t.data.student_id){e.next=3;break}return e.abrupt("return",t.$toast.error("Student ID is required"));case 3:if(""!=t.data.email){e.next=5;break}return e.abrupt("return",t.$toast.error("Email is required"));case 5:if(""!=t.data.password){e.next=7;break}return e.abrupt("return",t.$toast.error("Password is required"));case 7:if(0!=t.data.type){e.next=9;break}return e.abrupt("return",t.$toast.error("Account Type is required"));case 9:return t.isLoading=!0,e.next=12,t.emailValidate(t.data);case 12:r=e.sent,s=r.status,i=r.data,200==s?t.data.password.match(a)?t.step++:(t.$toast.error("Password must be 8 characters long and contain one lowercase letter, one uppercase letter and one number."),t.isLoading=!1):t.$toast.error(i.errors.email[0]),t.isLoading=!1;case 17:case"end":return e.stop()}}),e)})))()},step2:function(){return""==this.data.first_name?this.$toast.error("First name is required"):""==this.data.last_name?this.$toast.error("Last name is required"):void this.step++},step3:function(){var t=/^((9)(|\d{9,9}))$/gm;if(""==this.data.age)return this.$toast.error("Age is required");if(""==this.data.birthday)return this.$toast.error("Birthday is required");if(0==this.data.gender)return this.$toast.error("Gender is required");if(""==this.data.contact)return this.$toast.error("Contact is required");if(this.data.contact.match(t)){var e="63",a=e+this.data.contact;this.data.contact=a,this.step++}else this.$toast.error("Contact must be a valid number and not contain any letters or special characters")},register:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(""!=t.data.academic_year){e.next=2;break}return e.abrupt("return",t.$toast.error("Academic Year is required"));case 2:if(0!=t.fileRecordsForUpload.length){e.next=4;break}return e.abrupt("return",t.$toast.error("Please include an image"));case 4:if(0!=t.data.year_level){e.next=6;break}return e.abrupt("return",t.$toast.error("Year level is required"));case 6:if(0!=t.data.section_id){e.next=8;break}return e.abrupt("return",t.$toast.error("Section is required"));case 8:if(0!=t.data.organization_id){e.next=10;break}return e.abrupt("return",t.$toast.error("Organization is required"));case 10:if(t.data.academic_year[1]=t.data.academic_year[1].toString().substring(2),t.data.acad_year=t.data.academic_year.join("-"),!(t.fileRecordsForUpload.length>0)){e.next=17;break}return e.next=15,t.$refs.vueFileAgent.upload("http://be.evsu-organization-system.com/api/uploadImage",{"X-Requested-With":"XMLHttpRequest"},t.fileRecordsForUpload);case 15:a=e.sent,t.data.image=a[0].data;case 17:return t.isLoading=!0,e.next=20,t.createAccount(t.data);case 20:r=e.sent,s=r.data,i=r.status,t.checkStatus(s,i,"register","",""),t.$router.push("/");case 25:case"end":return e.stop()}}),e)})))()},prev:function(){this.step--},returnLogin:function(){this.$router.push("/")},closeModal:function(){this.$bvModal.hide(this.modalId)}}),watch:{"data.birthday":function(){if(""==this.data.birthday||null==this.data.birthday)return this.data.age="";var t=new Date(this.data.birthday),e=new Date,a=Math.abs(t.getTime()-e.getTime()),r=Math.ceil(a/31536e6);this.data.age=r-1}}},c=l,d=(a("a43d"),a("2877")),u=Object(d["a"])(c,r,s,!1,null,"a9cc530c",null);e["default"]=u.exports},"85a5":function(t,e,a){},a43d:function(t,e,a){"use strict";a("85a5")}}]);
//# sourceMappingURL=student-register.5dc2f645.js.map