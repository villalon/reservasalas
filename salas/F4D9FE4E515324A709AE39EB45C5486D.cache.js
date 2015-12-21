var $wnd = $wnd || window.parent;
var __gwtModuleFunction = $wnd.salas;
var $sendStats = __gwtModuleFunction.__sendStats;
$sendStats('moduleStartup', 'moduleEvalStart');
var $gwt_version = "2.7.0";
var $strongName = 'F4D9FE4E515324A709AE39EB45C5486D';
var $gwt = {};
var $doc = $wnd.document;
var $moduleName, $moduleBase;
function __gwtStartLoadingFragment(frag) {
var fragFile = 'deferredjs/' + $strongName + '/' + frag + '.cache.js';
return __gwtModuleFunction.__startLoadingFragment(fragFile);
}
function __gwtInstallCode(code) {return __gwtModuleFunction.__installRunAsyncCode(code);}
function __gwt_isKnownPropertyValue(propName, propValue) {
return __gwtModuleFunction.__gwt_isKnownPropertyValue(propName, propValue);
}
function __gwt_getMetaProperty(name) {
return __gwtModuleFunction.__gwt_getMetaProperty(name);
}
var $stats = $wnd.__gwtStatsEvent ? function(a) {
return $wnd.__gwtStatsEvent && $wnd.__gwtStatsEvent(a);
} : null;
var $sessionId = $wnd.__gwtStatsSessionId ? $wnd.__gwtStatsSessionId : null;
var $intern_0 = {61:1, 29:1}, $intern_1 = {16:1, 12:1, 15:1, 14:1, 17:1, 10:1, 9:1}, $intern_2 = 65535, $intern_3 = 3.141592653589793, $intern_4 = {3:1}, $intern_5 = {3:1, 7:1}, $intern_6 = {3:1, 11:1, 7:1}, $intern_7 = {8:1, 13:1, 3:1, 6:1, 5:1}, $intern_8 = {13:1, 35:1, 3:1, 6:1, 5:1}, $intern_9 = {19:1, 3:1, 6:1, 5:1}, $intern_10 = {13:1, 27:1, 3:1, 6:1, 5:1}, $intern_11 = {47:1, 3:1, 11:1, 7:1}, $intern_12 = {59:1}, $intern_13 = 4194303, $intern_14 = 1048575, $intern_15 = 524288, $intern_16 = 4194304, $intern_17 = 17592186044416, $intern_18 = -9223372036854775808, $intern_19 = 32768, $intern_20 = 65536, $intern_21 = {16:1, 12:1, 15:1, 14:1, 17:1, 55:1, 10:1, 9:1}, $intern_22 = {33:1, 3:1, 6:1, 5:1}, $intern_23 = {20:1}, $intern_24 = {3:1, 31:1};
var _, initFnList_0, prototypesByTypeId_0 = {}, permutationId = -1;
function typeMarkerFn(){
}

function portableObjCreate(obj){
  function F(){
  }

  ;
  F.prototype = obj || {};
  return new F;
}

function modernizeBrowser(){
  !Array.isArray && (Array.isArray = function(vArg){
    return Object.prototype.toString.call(vArg) === '[object Array]';
  }
  );
}

function maybeGetClassLiteralFromPlaceHolder_0(entry){
  return entry instanceof Array?entry[0]:null;
}

function emptyMethod(){
}

function defineClass(typeId, superTypeId, castableTypeMap){
  var prototypesByTypeId = prototypesByTypeId_0;
  var createSubclassPrototype = createSubclassPrototype_0;
  var maybeGetClassLiteralFromPlaceHolder = maybeGetClassLiteralFromPlaceHolder_0;
  var prototype_0 = prototypesByTypeId[typeId];
  var clazz = maybeGetClassLiteralFromPlaceHolder(prototype_0);
  if (prototype_0 && !clazz) {
    _ = prototype_0;
  }
   else {
    _ = prototypesByTypeId[typeId] = !superTypeId?{}:createSubclassPrototype(superTypeId);
    _.castableTypeMap$ = castableTypeMap;
    _.constructor = _;
    !superTypeId && (_.typeMarker$ = typeMarkerFn);
  }
  for (var i = 3; i < arguments.length; ++i) {
    arguments[i].prototype = _;
  }
  clazz && (_.___clazz$ = clazz);
}

function createSubclassPrototype_0(superTypeId){
  var prototypesByTypeId = prototypesByTypeId_0;
  return portableObjCreate(prototypesByTypeId[superTypeId]);
}

function setGwtProperty(propertyName, propertyValue){
  typeof window === 'object' && typeof window['$gwt'] === 'object' && (window['$gwt'][propertyName] = propertyValue);
}

function registerEntry(){
  return entry_0;
}

function gwtOnLoad_0(errFn, modName, modBase, softPermutationId){
  ensureModuleInit();
  var initFnList = initFnList_0;
  $moduleName = modName;
  $moduleBase = modBase;
  permutationId = softPermutationId;
  function initializeModules(){
    for (var i = 0; i < initFnList.length; i++) {
      initFnList[i]();
    }
  }

  if (errFn) {
    try {
      $entry(initializeModules)();
    }
     catch (e) {
      errFn(modName, e);
    }
  }
   else {
    $entry(initializeModules)();
  }
}

function ensureModuleInit(){
  initFnList_0 == null && (initFnList_0 = []);
}

function addInitFunctions(){
  ensureModuleInit();
  var initFnList = initFnList_0;
  for (var i = 0; i < arguments.length; i++) {
    initFnList.push(arguments[i]);
  }
}

function Object_0(){
}

function equals_Ljava_lang_Object__Z__devirtual$(this$static, other){
  return isJavaString(this$static)?$equals(this$static, other):hasJavaObjectVirtualDispatch(this$static)?this$static.equals$(other):isJavaArray(this$static)?this$static === other:this$static === other;
}

function getClass__Ljava_lang_Class___devirtual$(this$static){
  return isJavaString(this$static)?Ljava_lang_String_2_classLit:hasJavaObjectVirtualDispatch(this$static)?this$static.___clazz$:isJavaArray(this$static)?this$static.___clazz$:Lcom_google_gwt_core_client_JavaScriptObject_2_classLit;
}

function hashCode__I__devirtual$(this$static){
  return isJavaString(this$static)?getHashCode_0(this$static):hasJavaObjectVirtualDispatch(this$static)?this$static.hashCode$():isJavaArray(this$static)?getHashCode(this$static):getHashCode(this$static);
}

defineClass(1, null, {}, Object_0);
_.equals$ = function equals(other){
  return this === other;
}
;
_.getClass$ = function getClass_0(){
  return this.___clazz$;
}
;
_.hashCode$ = function hashCode_0(){
  return getHashCode(this);
}
;
_.toString$ = function toString_0(){
  return $getName(getClass__Ljava_lang_Class___devirtual$(this)) + '@' + (hashCode__I__devirtual$(this) >>> 0).toString(16);
}
;
_.toString = function(){
  return this.toString$();
}
;
stringCastMap = {3:1, 345:1, 6:1, 2:1};
modernizeBrowser();
function canCast(src_0, dstId){
  return isJavaString(src_0) && !!stringCastMap[dstId] || src_0.castableTypeMap$ && !!src_0.castableTypeMap$[dstId];
}

function charToString(x_0){
  return String.fromCharCode(x_0);
}

function dynamicCast(src_0, dstId){
  if (src_0 != null && !canCast(src_0, dstId)) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastJso(src_0){
  if (src_0 != null && !(!isJavaString(src_0) && !hasTypeMarker(src_0))) {
    throw new ClassCastException;
  }
  return src_0;
}

function dynamicCastToString(src_0){
  if (src_0 != null && !isJavaString(src_0)) {
    throw new ClassCastException;
  }
  return src_0;
}

function hasJavaObjectVirtualDispatch(src_0){
  return !instanceofArray(src_0) && hasTypeMarker(src_0);
}

function instanceOf(src_0, dstId){
  return src_0 != null && canCast(src_0, dstId);
}

function instanceOfJso(src_0){
  return src_0 != null && !isJavaString(src_0) && !hasTypeMarker(src_0);
}

function instanceofArray(src_0){
  return Array.isArray(src_0);
}

function isJavaArray(src_0){
  return instanceofArray(src_0) && hasTypeMarker(src_0);
}

function isJavaString(src_0){
  return typeof src_0 === 'string';
}

function maskUndefined(src_0){
  return src_0 == null?null:src_0;
}

function round_int(x_0){
  return ~~Math.max(Math.min(x_0, 2147483647), -2147483648);
}

function throwClassCastExceptionUnlessNull(o){
  if (o != null) {
    throw new ClassCastException;
  }
  return null;
}

var stringCastMap;
function $ensureNamesAreInitialized(this$static){
  if (this$static.typeName != null) {
    return;
  }
  initializeNames(this$static);
}

function $getName(this$static){
  $ensureNamesAreInitialized(this$static);
  return this$static.typeName;
}

function Class(){
  ++nextSequentialId;
  this.typeName = null;
  this.simpleName = null;
  this.packageName = null;
  this.compoundName = null;
  this.canonicalName = null;
  this.typeId = null;
  this.arrayLiterals = null;
}

function createClassObject(packageName, compoundClassName){
  var clazz;
  clazz = new Class;
  clazz.packageName = packageName;
  clazz.compoundName = compoundClassName;
  return clazz;
}

function createForClass(packageName, compoundClassName, typeId){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  return clazz;
}

function createForEnum(packageName, compoundClassName, typeId, enumConstantsFunc){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  maybeSetClassLiteral(typeId, clazz);
  clazz.modifiers = enumConstantsFunc?8:0;
  return clazz;
}

function createForInterface(packageName, compoundClassName){
  var clazz;
  clazz = createClassObject(packageName, compoundClassName);
  clazz.modifiers = 2;
  return clazz;
}

function createForPrimitive(className, primitiveTypeId){
  var clazz;
  clazz = createClassObject('', className);
  clazz.typeId = primitiveTypeId;
  clazz.modifiers = 1;
  return clazz;
}

function getClassLiteralForArray_0(leafClass, dimensions){
  var arrayLiterals = leafClass.arrayLiterals = leafClass.arrayLiterals || [];
  return arrayLiterals[dimensions] || (arrayLiterals[dimensions] = leafClass.createClassLiteralForArray(dimensions));
}

function getPrototypeForClass(clazz){
  if (clazz.isPrimitive()) {
    return null;
  }
  var typeId = clazz.typeId;
  var prototype_0 = prototypesByTypeId_0[typeId];
  return prototype_0;
}

function initializeNames(clazz){
  if (clazz.isArray_1()) {
    var componentType = clazz.componentType;
    componentType.isPrimitive()?(clazz.typeName = '[' + componentType.typeId):!componentType.isArray_1()?(clazz.typeName = '[L' + componentType.getName() + ';'):(clazz.typeName = '[' + componentType.getName());
    clazz.canonicalName = componentType.getCanonicalName() + '[]';
    clazz.simpleName = componentType.getSimpleName() + '[]';
    return;
  }
  var packageName = clazz.packageName;
  var compoundName = clazz.compoundName;
  compoundName = compoundName.split('/');
  clazz.typeName = join_0('.', [packageName, join_0('$', compoundName)]);
  clazz.canonicalName = join_0('.', [packageName, join_0('.', compoundName)]);
  clazz.simpleName = compoundName[compoundName.length - 1];
}

function join_0(separator, strings){
  var i = 0;
  while (!strings[i] || strings[i] == '') {
    i++;
  }
  var result = strings[i++];
  for (; i < strings.length; i++) {
    if (!strings[i] || strings[i] == '') {
      continue;
    }
    result += separator + strings[i];
  }
  return result;
}

function maybeSetClassLiteral(typeId, clazz){
  var proto;
  if (!typeId) {
    return;
  }
  clazz.typeId = typeId;
  var prototype_0 = getPrototypeForClass(clazz);
  if (!prototype_0) {
    prototypesByTypeId_0[typeId] = [clazz];
    return;
  }
  prototype_0.___clazz$ = clazz;
}

defineClass(93, 1, {}, Class);
_.createClassLiteralForArray = function createClassLiteralForArray(dimensions){
  var clazz;
  clazz = new Class;
  clazz.modifiers = 4;
  dimensions > 1?(clazz.componentType = getClassLiteralForArray_0(this, dimensions - 1)):(clazz.componentType = this);
  return clazz;
}
;
_.getCanonicalName = function getCanonicalName(){
  $ensureNamesAreInitialized(this);
  return this.canonicalName;
}
;
_.getName = function getName(){
  return $getName(this);
}
;
_.getSimpleName = function getSimpleName(){
  $ensureNamesAreInitialized(this);
  return this.simpleName;
}
;
_.isArray_1 = function isArray_1(){
  return (this.modifiers & 4) != 0;
}
;
_.isPrimitive = function isPrimitive(){
  return (this.modifiers & 1) != 0;
}
;
_.toString$ = function toString_18(){
  return ((this.modifiers & 2) != 0?'interface ':(this.modifiers & 1) != 0?'':'class ') + ($ensureNamesAreInitialized(this) , this.typeName);
}
;
_.modifiers = 0;
var nextSequentialId = 1;
var Ljava_lang_Object_2_classLit = createForClass('java.lang', 'Object', 1), Lcom_google_gwt_core_client_JavaScriptObject_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptObject$', 0), Ljava_lang_Class_2_classLit = createForClass('java.lang', 'Class', 93);
function $clinit_AjaxRequest(){
  $clinit_AjaxRequest = emptyMethod;
  $ensureNamesAreInitialized(Lcl_webcursos_salas_client_AjaxRequest_2_classLit);
}

function ajaxRequest(params, callback){
  var request, uri_0, prefix, script;
  $clinit_AjaxRequest();
  var requestBuilder, url_0;
  url_0 = moodleUrl + '?' + params;
  requestBuilder = new JsonpRequestBuilder;
  requestBuilder.timeout = 30000;
  requestBuilder.callbackParam = 'callback';
  request = new JsonpRequest(callback, requestBuilder.timeout, requestBuilder.callbackParam);
  $registerCallbacks(request, CALLBACKS, request.canHaveMultipleRequestsForSameId);
  uri_0 = new StringBuilder_1(url_0);
  $append_0(uri_0, url_0.indexOf('?') != -1?'&':'?');
  prefix = '__gwt_jsonp__.' + request.callbackId;
  $append_0($append_0($append_0($append_0(uri_0, request.callbackParam), '='), prefix), '.onSuccess');
  script = $createElement($doc, 'script');
  script.type = 'text/javascript';
  $setId(script, request.callbackId);
  $setSrc(script, uri_0.string);
  request.timer = new JsonpRequest$1(request, url_0);
  $schedule(request.timer, request.timeout);
  $appendChild($doc.getElementsByTagName('head')[0], script);
}

function getValueFromResult(result){
  $clinit_AjaxRequest();
  var key2, key2$iterator, output, values;
  values = new JSONObject_0(result.values);
  output = new HashMap;
  for (key2$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList($keySet(values).val$keys2)); key2$iterator.i < key2$iterator.this$01_0.size_1();) {
    key2 = (checkCriticalElement(key2$iterator.i < key2$iterator.this$01_0.size_1()) , dynamicCastToString(key2$iterator.this$01_0.get_0(key2$iterator.last = key2$iterator.i++)));
    !!$get_0(values, key2) && !!$get_0(values, key2).isString()?$putStringValue(output, key2, $get_0(values, key2).isString().value_0):$putStringValue(output, key2, $get_0(values, key2).toString$());
  }
  return output;
}

function getValuesFromResult(values){
  var key, key$iterator, key2, key2$iterator, obj, output, starr, student;
  output = new ArrayList;
  for (key$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList($keySet(values).val$keys2)); key$iterator.i < key$iterator.this$01_0.size_1();) {
    key = (checkCriticalElement(key$iterator.i < key$iterator.this$01_0.size_1()) , dynamicCastToString(key$iterator.this$01_0.get_0(key$iterator.last = key$iterator.i++)));
    student = $get_0(values, key);
    starr = student.isObject();
    obj = new HashMap;
    for (key2$iterator = new AbstractList$IteratorImpl(new Arrays$ArrayList($keySet(starr).val$keys2)); key2$iterator.i < key2$iterator.this$01_0.size_1();) {
      key2 = (checkCriticalElement(key2$iterator.i < key2$iterator.this$01_0.size_1()) , dynamicCastToString(key2$iterator.this$01_0.get_0(key2$iterator.last = key2$iterator.i++)));
      !!$get_0(starr, key2) && !!$get_0(starr, key2).isString()?$putStringValue(obj, key2, $get_0(starr, key2).isString().value_0):$putStringValue(obj, key2, $get_0(starr, key2).toString$());
    }
    setCheck(output.array, output.array.length, obj);
  }
  return output;
}

function getValuesFromResultString(result){
  $clinit_AjaxRequest();
  var i, jsonArray, jsonValue, values;
  jsonValue = ($clinit_JSONParser() , parse_0(result));
  values = new JSONObject;
  jsonArray = jsonValue.isArray_0();
  for (i = 0; i < jsonArray.jsArray.length; i++) {
    $put(values, '' + i, $get(jsonArray, i));
  }
  return getValuesFromResult(values);
}

var moodleUrl = null;
var Lcl_webcursos_salas_client_AjaxRequest_2_classLit = createForClass('cl.webcursos.salas.client', 'AjaxRequest', null);
function $getAllButtonsDown(vPanel){
  var bt, buttonsDown, hpanel, i, j, obj;
  buttonsDown = new ArrayList;
  for (i = 0; i < vPanel.children_0.size_0; i++) {
    hpanel = dynamicCast($get_3(vPanel.children_0, i), 43);
    for (j = 0; j < hpanel.children_0.size_0; j++) {
      if (!instanceOf($get_3(hpanel.children_0, j), 28))
        continue;
      bt = dynamicCast($get_3(hpanel.children_0, j), 28);
      !bt.curFace && $setCurrentFace_0(bt, bt.up);
      if ((1 & bt.curFace.val$faceID5) > 0) {
        obj = new HashMap;
        $putStringValue(obj, 'nombreSala', bt.nombreSala);
        $putStringValue(obj, 'idSala', '' + bt.idSala);
        $putStringValue(obj, 'idModulo', '' + bt.idModulo);
        $putStringValue(obj, 'nombreModulo', bt.nombreModulo);
        $putStringValue(obj, 'inicio', bt.inicioModulo);
        $putStringValue(obj, 'termino', bt.terminoModulo);
        setCheck(buttonsDown.array, buttonsDown.array.length, obj);
      }
    }
  }
  return buttonsDown;
}

function $getButtons(btn){
  var bt, buttons, hpanel, i, j, vpanel;
  buttons = new ArrayList;
  vpanel = dynamicCast(btn.parent_0.parent_0, 42);
  for (i = 0; i < vpanel.children_0.size_0; i++) {
    hpanel = dynamicCast($get_3(vpanel.children_0, i), 43);
    for (j = 0; j < hpanel.children_0.size_0; j++) {
      if (!instanceOf($get_3(hpanel.children_0, j), 28))
        continue;
      bt = dynamicCast($get_3(hpanel.children_0, j), 28);
      bt != btn && (setCheck(buttons.array, buttons.array.length, bt) , true);
    }
  }
  return buttons;
}

function $getVerticalButtons(btn){
  var bt, buttons, hpanel, i, j, vpanel;
  buttons = new ArrayList;
  vpanel = dynamicCast(btn.parent_0.parent_0, 42);
  for (i = 0; i < vpanel.children_0.size_0; i++) {
    hpanel = dynamicCast($get_3(vpanel.children_0, i), 43);
    for (j = 0; j < hpanel.children_0.size_0; j++) {
      if (!instanceOf($get_3(hpanel.children_0, j), 28))
        continue;
      bt = dynamicCast($get_3(hpanel.children_0, j), 28);
      bt != btn && bt.idModulo == btn.idModulo && (setCheck(buttons.array, buttons.array.length, bt) , true);
    }
  }
  return buttons;
}

function $howManyButtonsDown(btn, book){
  var bt, bt$iterator, total;
  total = 0;
  if (!book) {
    !btn.curFace && $setCurrentFace_0(btn, btn.up);
    (1 & btn.curFace.val$faceID5) > 0 && ++total;
    for (bt$iterator = new AbstractList$IteratorImpl($getButtons(btn)); bt$iterator.i < bt$iterator.this$01_0.size_1();) {
      bt = (checkCriticalElement(bt$iterator.i < bt$iterator.this$01_0.size_1()) , dynamicCast(bt$iterator.this$01_0.get_0(bt$iterator.last = bt$iterator.i++), 28));
      !bt.curFace && $setCurrentFace_0(bt, bt.up);
      (1 & bt.curFace.val$faceID5) > 0 && ++total;
    }
  }
  return total;
}

function $loadInterface(this$static){
  var availabilityBookingToday, availabilityBookingWeek, param;
  this$static.matrixButtons = new VerticalPanel;
  $setSpacing(this$static.matrixButtons, 5);
  availabilityBookingToday = this$static.maxDailyBookings - this$static.userDayReservations;
  availabilityBookingWeek = this$static.maxWeeklyBookings - this$static.userWeeklyBooking;
  param = '&campusid=' + this$static.idCampus + '&type=' + this$static.typeRoom + '&date=' + this$static.initialDate + '&multiply=' + this$static.advOptions + '&size=' + this$static.size_0 + '&finalDate=' + this$static.endDate + '&days=' + this$static.selectDays + '&frequency=' + this$static.weeklyFrequencyBookings;
  ajaxRequest('action=getbooking' + param, new Salas$2(this$static, availabilityBookingWeek, availabilityBookingToday));
  this$static.form_0 = new FormPanel;
  this$static.form_0.element.action = '';
  $setEncoding(this$static.form_0.element, 'application/x-www-form-urlencoded');
  this$static.form_0.element.method = 'post';
  this$static.formPanel = new VerticalPanel;
  $setSpacing(this$static.formPanel, 4);
  $setWidget(this$static.form_0, this$static.formPanel);
  this$static.eventName = new TextBox;
  this$static.eventNameTxt = 'Nombre del evento';
  $setValue(this$static.eventName, this$static.eventNameTxt);
  $setStyleName_0(this$static.eventName, 'GEM5FX3DH', true);
  $addDomHandler(this$static.eventName, new Salas$3(this$static), ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  this$static.attendeesAmount = new TextBox;
  this$static.attendeesAmountTxt = 'Asistentes';
  $setValue(this$static.attendeesAmount, this$static.attendeesAmountTxt);
  $setStyleName_0(this$static.attendeesAmount, 'GEM5FX3DH', true);
  $addDomHandler(this$static.attendeesAmount, new Salas$4(this$static), (null , TYPE));
  this$static.emailForm = new TextBox;
  this$static.emailFormTxt = 'Correo electr\xF3nico';
  $setValue(this$static.emailForm, this$static.emailFormTxt);
  $setStyleName_0(this$static.emailForm, 'GEM5FX3DH', true);
  $addDomHandler(this$static.emailForm, new Salas$5(this$static), (null , TYPE));
  $add_3(this$static.formPanel, this$static.eventName);
  $add_3(this$static.formPanel, this$static.attendeesAmount);
  this$static.submit_0 = new Button(new Salas$6(this$static));
  $setStyleName_0(this$static.submit_0, 'GEM5FX3DA', true);
  $add_3(this$static.formPanel, this$static.submit_0);
  this$static.decoratordecoratorPanelFormPanel = new DecoratorPanel;
  $add_1(this$static.decoratordecoratorPanelFormPanel, this$static.form_0);
  $add_0(get_0(this$static.buttonsRoomsDivId), this$static.matrixButtons);
  $add_0(get_0(this$static.buttonsRoomsDivId), this$static.decoratordecoratorPanelFormPanel);
  $addHandler(this$static.form_0, new Salas$7(this$static), (!TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8));
}

function $onModuleLoad(this$static){
  var errors, errorsLabel, i, text_0;
  errors = new ArrayList;
  this$static.buttonsRoomsDivId = 'buttonsRooms';
  if (!get_0(this$static.buttonsRoomsDivId)) {
    setCheck(errors.array, errors.array.length, 'Can not initalize. Buttons Rooms requires an existing DIV tag with id: buttonsRooms.');
    alert_0('GWT impossible initialize');
    return;
  }
  $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'moodleurl') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'moodleurl'), '')?(this$static.moodleurl = $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'moodleurl')):(setCheck(errors.array, errors.array.length, 'Invalid Moodle ajax url') , true);
  try {
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'initialDate') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'initialDate'), '') && (this$static.initialDate = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'initialDate')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'typeRoom') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'typeRoom'), '') && (this$static.typeRoom = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'typeRoom')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'campus') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'campus'), '') && (this$static.idCampus = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'campus')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'userDayReservations') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'userDayReservations'), '') && (this$static.userDayReservations = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'userDayReservations')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'userWeeklyBooking') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'userWeeklyBooking'), '') && (this$static.userWeeklyBooking = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'userWeeklyBooking')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'maxDailyBookings') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'maxDailyBookings'), '') && (this$static.maxDailyBookings = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'maxDailyBookings')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'maxWeeklyBookings') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'maxWeeklyBookings'), '') && (this$static.maxWeeklyBookings = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'maxWeeklyBookings')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'size') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'size'), '') && (this$static.size_0 = $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'size'));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'endDate') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'endDate'), '') && (this$static.endDate = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'endDate')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'selectDays') != null && (this$static.selectDays = $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'selectDays'));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'weeklyFrequencyBookings') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'weeklyFrequencyBookings'), '') && (this$static.weeklyFrequencyBookings = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'weeklyFrequencyBookings')));
    $getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'advOptions') != null && !$equals($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'advOptions'), '') && (this$static.advOptions = __parseAndValidateInt($getAttribute(get_0(this$static.buttonsRoomsDivId).element, 'advOptions')));
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 11)) {
      setCheck(errors.array, errors.array.length, 'Form error process, check that the input is correctly entered');
    }
     else 
      throw unwrap_5($e0);
  }
  if (errors.array.length > 0) {
    errorsLabel = new Label;
    text_0 = '';
    for (i = 0; i < errors.array.length; i++) {
      text_0 += (checkElementIndex(i, errors.array.length) , '\n' + dynamicCastToString(errors.array[i]));
    }
    $setTextOrHtml(errorsLabel.directionalTextHelper, text_0, false);
    $setAttribute(errorsLabel.element, 'title', 'Fatal error while initializing modules');
    $clear(get_0(this$static.buttonsRoomsDivId));
    $add_0(get_0(this$static.buttonsRoomsDivId), errorsLabel);
  }
   else {
    $clinit_AjaxRequest();
    moodleUrl = this$static.moodleurl;
    ajaxRequest('action=info', new Salas$1(this$static));
    $loadInterface(this$static);
  }
}

function Salas(){
}

defineClass(117, 1, {}, Salas);
_.advOptions = -1;
_.attendeesAmount = null;
_.attendeesAmountTxt = null;
_.buttonsRoomsDivId = null;
_.counter = -1;
_.decoratordecoratorPanelFormPanel = null;
_.emailForm = null;
_.emailFormTxt = null;
_.endDate = -1;
_.eventName = null;
_.eventNameTxt = null;
_.firstRowButtons = null;
_.form_0 = null;
_.formPanel = null;
_.idCampus = -1;
_.initialDate = -1;
_.isAdmin = -1;
_.matrixButtons = null;
_.maxDailyBookings = -1;
_.maxWeeklyBookings = -1;
_.moodleurl = null;
_.resultPanelBookings = null;
_.rowButtons = null;
_.selectDays = null;
_.size_0 = null;
_.submit_0 = null;
_.typeRoom = -1;
_.userDayReservations = -1;
_.userEmail = null;
_.userLastName = null;
_.userName = null;
_.userWeeklyBooking = -1;
_.weeklyFrequencyBookings = -1;
var Lcl_webcursos_salas_client_Salas_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas', 117);
function $onSuccess(this$static, result){
  var values;
  values = getValueFromResult(result);
  if (!$equals(result.error, '')) {
    alert_0('Ajax query error: user data');
    return;
  }
  this$static.this$01.isAdmin = __parseAndValidateInt(dynamicCastToString(values.stringMap.get_1('isAdmin')));
  this$static.this$01.userName = dynamicCastToString(values.stringMap.get_1('firstname'));
  this$static.this$01.userLastName = dynamicCastToString(values.stringMap.get_1('lastname'));
  this$static.this$01.userEmail = dynamicCastToString(values.stringMap.get_1('email'));
}

function Salas$1(this$0){
  this.this$01 = this$0;
}

defineClass(110, 1, {}, Salas$1);
_.onFailure_0 = function onFailure(caught){
  $clear(get_0(this.this$01.buttonsRoomsDivId));
  $add_0(get_0(this.this$01.buttonsRoomsDivId), new HTML('Ajax query error: user data'));
}
;
_.onSuccess_0 = function onSuccess(result){
  $onSuccess(this, dynamicCastJso(result));
}
;
var Lcl_webcursos_salas_client_Salas$1_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/1', 110);
function $onSuccess_0(this$static, result){
  var book, bookAvaible, bookAvaible$iterator, dieTip, idRoom, moduleButton, modules, modules$iterator, nameRoom, numberRoom, rooms, rooms$iterator, values, valuesBookingAvailable, valuesModules, valuesRooms;
  values = getValueFromResult(result);
  valuesModules = getValuesFromResultString(dynamicCastToString(values.stringMap.get_1('Modulos')));
  valuesRooms = getValuesFromResultString(dynamicCastToString(values.stringMap.get_1('Salas')));
  this$static.this$01.firstRowButtons = new HorizontalPanel;
  $setSpacing(this$static.this$01.firstRowButtons, 4);
  dieTip = new HTML_0;
  setStyleName(dieTip.element, 'GEM5FX3DG', true);
  $add_2(this$static.this$01.firstRowButtons, dieTip);
  for (modules$iterator = new AbstractList$IteratorImpl(valuesModules); modules$iterator.i < modules$iterator.this$01_0.size_1();) {
    modules = (checkCriticalElement(modules$iterator.i < modules$iterator.this$01_0.size_1()) , dynamicCast(modules$iterator.this$01_0.get_0(modules$iterator.last = modules$iterator.i++), 26));
    moduleButton = new ToggleButton(dynamicCastToString(modules.stringMap.get_1('name')));
    $setEnabled(moduleButton, false);
    setStyleName(moduleButton.element, 'GEM5FX3DD', true);
    $add_2(this$static.this$01.firstRowButtons, moduleButton);
    $setCellVerticalAlignment_1(this$static.this$01.firstRowButtons, moduleButton, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
    $setCellHorizontalAlignment(this$static.this$01.firstRowButtons, moduleButton, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
  }
  $add_3(this$static.this$01.matrixButtons, this$static.this$01.firstRowButtons);
  for (rooms$iterator = new AbstractList$IteratorImpl(valuesRooms); rooms$iterator.i < rooms$iterator.this$01_0.size_1();) {
    rooms = (checkCriticalElement(rooms$iterator.i < rooms$iterator.this$01_0.size_1()) , dynamicCast(rooms$iterator.this$01_0.get_0(rooms$iterator.last = rooms$iterator.i++), 26));
    nameRoom = dynamicCastToString(rooms.stringMap.get_1('nombresala'));
    idRoom = __parseAndValidateInt(dynamicCastToString(rooms.stringMap.get_1('salaid')));
    this$static.this$01.rowButtons = new HorizontalPanel;
    $setSpacing(this$static.this$01.rowButtons, 4);
    numberRoom = new ToggleButton(nameRoom);
    $setEnabled(numberRoom, false);
    setStyleName(numberRoom.element, 'GEM5FX3DD', true);
    $add_2(this$static.this$01.rowButtons, numberRoom);
    $setCellVerticalAlignment_1(this$static.this$01.rowButtons, numberRoom, ($clinit_HasVerticalAlignment() , ALIGN_MIDDLE));
    $setCellHorizontalAlignment(this$static.this$01.rowButtons, numberRoom, ($clinit_HasHorizontalAlignment() , ALIGN_CENTER));
    valuesBookingAvailable = getValuesFromResultString(dynamicCastToString(rooms.stringMap.get_1('disponibilidad')));
    for (bookAvaible$iterator = new AbstractList$IteratorImpl(valuesBookingAvailable); bookAvaible$iterator.i < bookAvaible$iterator.this$01_0.size_1();) {
      bookAvaible = (checkCriticalElement(bookAvaible$iterator.i < bookAvaible$iterator.this$01_0.size_1()) , dynamicCast(bookAvaible$iterator.this$01_0.get_0(bookAvaible$iterator.last = bookAvaible$iterator.i++), 26));
      book = new SalasButton(this$static.this$01.initialDate, nameRoom, idRoom, dynamicCastToString(bookAvaible.stringMap.get_1('horaInicio')), dynamicCastToString(bookAvaible.stringMap.get_1('horaFin')), dynamicCastToString(bookAvaible.stringMap.get_1('modulonombre')), __parseAndValidateInt(dynamicCastToString(bookAvaible.stringMap.get_1('moduloid'))), __parseAndValidateInt(dynamicCastToString(bookAvaible.stringMap.get_1('ocupada'))) == 1, new Salas$2$1(this$static, this$static.val$availabilityBookingWeek2, this$static.val$availabilityBookingToday3));
      $add_2(this$static.this$01.rowButtons, book);
    }
    $add_3(this$static.this$01.matrixButtons, this$static.this$01.rowButtons);
  }
}

function Salas$2(this$0, val$availabilityBookingWeek, val$availabilityBookingToday){
  this.this$01 = this$0;
  this.val$availabilityBookingWeek2 = val$availabilityBookingWeek;
  this.val$availabilityBookingToday3 = val$availabilityBookingToday;
}

defineClass(111, 1, {}, Salas$2);
_.onFailure_0 = function onFailure_0(caught){
}
;
_.onSuccess_0 = function onSuccess_0(result){
  $onSuccess_0(this, dynamicCastJso(result));
}
;
_.val$availabilityBookingToday3 = 0;
_.val$availabilityBookingWeek2 = 0;
var Lcl_webcursos_salas_client_Salas$2_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/2', 111);
function Salas$2$1(this$1, val$availabilityBookingWeek, val$availabilityBookingToday){
  this.this$11 = this$1;
  this.val$availabilityBookingWeek2 = val$availabilityBookingWeek;
  this.val$availabilityBookingToday3 = val$availabilityBookingToday;
}

defineClass(118, 1, $intern_0, Salas$2$1);
_.onClick = function onClick(event_0){
  var bt, bt$iterator, buttonBook;
  buttonBook = dynamicCast(event_0.source, 28);
  !buttonBook.curFace && $setCurrentFace_0(buttonBook, buttonBook.up);
  if ((1 & buttonBook.curFace.val$faceID5) > 0) {
    if (this.this$11.this$01.isAdmin == 1)
    ;
    else {
      if (this.val$availabilityBookingWeek2 > 0) {
        if (this.val$availabilityBookingToday3 > 0) {
          for (bt$iterator = new AbstractList$IteratorImpl($getVerticalButtons(buttonBook)); bt$iterator.i < bt$iterator.this$01_0.size_1();) {
            bt = (checkCriticalElement(bt$iterator.i < bt$iterator.this$01_0.size_1()) , dynamicCast(bt$iterator.this$01_0.get_0(bt$iterator.last = bt$iterator.i++), 28));
            !bt.curFace && $setCurrentFace_0(bt, bt.up);
            (1 & bt.curFace.val$faceID5) > 0 && $toggleDown(bt);
          }
          if ($howManyButtonsDown(buttonBook, false) > this.val$availabilityBookingToday3) {
            !buttonBook.curFace && $setCurrentFace_0(buttonBook, buttonBook.up);
            (1 & buttonBook.curFace.val$faceID5) > 0 && $toggleDown(buttonBook);
            alert_0('No puedes seleccionar m\xE1s de ' + this.val$availabilityBookingToday3 + ' m\xF3dulo(s) el d\xEDa de hoy.');
            return;
          }
        }
         else {
          !buttonBook.curFace && $setCurrentFace_0(buttonBook, buttonBook.up);
          (1 & buttonBook.curFace.val$faceID5) > 0 && $toggleDown(buttonBook);
          alert_0('No puedes reservar m\xE1s m\xF3dulos el d\xEDa de hoy.');
        }
      }
       else {
        !buttonBook.curFace && $setCurrentFace_0(buttonBook, buttonBook.up);
        (1 & buttonBook.curFace.val$faceID5) > 0 && $toggleDown(buttonBook);
        alert_0('No puedes reservar m\xE1s m\xF3dulos esta semana.');
      }
    }
  }
}
;
_.val$availabilityBookingToday3 = 0;
_.val$availabilityBookingWeek2 = 0;
var Lcl_webcursos_salas_client_Salas$2$1_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/2/1', 118);
function Salas$3(this$0){
  this.this$01 = this$0;
}

defineClass(112, 1, $intern_0, Salas$3);
_.onClick = function onClick_0(event_0){
  $setValue(this.this$01.eventName, null);
  $getValue(this.this$01.attendeesAmount).length == 0 && $setValue(this.this$01.attendeesAmount, 'Asistentes');
  $getValue(this.this$01.emailForm).length == 0 && $setValue(this.this$01.emailForm, 'Correo electr\xF3nico');
}
;
var Lcl_webcursos_salas_client_Salas$3_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/3', 112);
function Salas$4(this$0){
  this.this$01 = this$0;
}

defineClass(113, 1, $intern_0, Salas$4);
_.onClick = function onClick_1(event_0){
  $setValue(this.this$01.attendeesAmount, null);
  $getValue(this.this$01.eventName).length == 0 && $setValue(this.this$01.eventName, 'Nombre del evento');
  $getValue(this.this$01.emailForm).length == 0 && $setValue(this.this$01.emailForm, 'Correo electr\xF3nico');
}
;
var Lcl_webcursos_salas_client_Salas$4_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/4', 113);
function Salas$5(this$0){
  this.this$01 = this$0;
}

defineClass(114, 1, $intern_0, Salas$5);
_.onClick = function onClick_2(event_0){
  $setValue(this.this$01.emailForm, null);
  $getValue(this.this$01.attendeesAmount).length == 0 && $setValue(this.this$01.attendeesAmount, 'Asistentes');
  $getValue(this.this$01.eventName).length == 0 && $setValue(this.this$01.eventName, 'Nombre del evento');
}
;
var Lcl_webcursos_salas_client_Salas$5_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/5', 114);
function Salas$6(this$0){
  this.this$01 = this$0;
}

defineClass(115, 1, $intern_0, Salas$6);
_.onClick = function onClick_3(event_0){
  $eventPreventDefault(event_0.nativeEvent);
  $submit(this.this$01.form_0);
}
;
var Lcl_webcursos_salas_client_Salas$6_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/6', 115);
function $onSubmit(this$static, event_0){
  var Disp, Disp$iterator, dataTable, dateEndInfo, dateInfo, fmt, info, inicio, modulo, nombreModulo, nombreSalas, param, rows_0, sala, termino, values;
  if ($getPropertyString(this$static.this$01.eventName.element, 'value').length == 0 || $equals($getPropertyString(this$static.this$01.eventName.element, 'value'), this$static.this$01.eventNameTxt)) {
    alert_0('Debe escribir un  nombre de evento.');
    $setStyleName_0(this$static.this$01.eventName, 'GEM5FX3DI', true);
    $setValue(this$static.this$01.eventName, 'Nombre del evento');
    event_0.canceled = true;
  }
   else {
    $setStyleName_0(this$static.this$01.eventName, 'GEM5FX3DH', true);
  }
  if (!$matches($getPropertyString(this$static.this$01.attendeesAmount.element, 'value'), '[0-9]*')) {
    alert_0('La cantidad de asistentes debe ser un n\xFAmero entero');
    $setStyleName_0(this$static.this$01.attendeesAmount, 'GEM5FX3DI', true);
    event_0.canceled = true;
  }
  if ($getPropertyString(this$static.this$01.attendeesAmount.element, 'value').length == 0 || $equals($getPropertyString(this$static.this$01.attendeesAmount.element, 'value'), this$static.this$01.attendeesAmountTxt)) {
    alert_0('Debe escribir la cantidad de asistentes.');
    $setStyleName_0(this$static.this$01.attendeesAmount, 'GEM5FX3DI', true);
    $setValue(this$static.this$01.attendeesAmount, 'Asistentes');
    event_0.canceled = true;
  }
   else {
    setStylePrimaryName(this$static.this$01.attendeesAmount.element, 'Text-Box');
    $setStyleName_0(this$static.this$01.attendeesAmount, 'GEM5FX3DH', true);
  }
  if (this$static.this$01.endDate < this$static.this$01.initialDate) {
    alert_0('Verficar correcta selecci\xF3n de fechas');
    event_0.canceled = true;
  }
  if (!event_0.canceled) {
    rows_0 = $getAllButtonsDown(this$static.this$01.matrixButtons).array.length + 1;
    this$static.this$01.resultPanelBookings = new VerticalPanel;
    $setSpacing(this$static.this$01.resultPanelBookings, 4);
    dataTable = new Grid(rows_0, 5);
    $setText_0(dataTable, 0, 0, 'Nombre sala');
    $setText_0(dataTable, 0, 1, 'M\xF3dulo');
    $setText_0(dataTable, 0, 2, 'Hora inicio');
    $setText_0(dataTable, 0, 3, 'Hora t\xE9rmino');
    $setText_0(dataTable, 0, 4, 'Estado');
    $setPropertyString(dataTable.tableElem, 'border', '1');
    values = $getAllButtonsDown(this$static.this$01.matrixButtons);
    sala = 'inicio';
    modulo = 'inicio';
    nombreSalas = 'inicio';
    nombreModulo = 'inicio';
    inicio = 'inicio';
    termino = 'inicio';
    for (Disp$iterator = new AbstractList$IteratorImpl(values); Disp$iterator.i < Disp$iterator.this$01_0.size_1();) {
      Disp = (checkCriticalElement(Disp$iterator.i < Disp$iterator.this$01_0.size_1()) , dynamicCast(Disp$iterator.this$01_0.get_0(Disp$iterator.last = Disp$iterator.i++), 26));
      sala = sala + ',' + dynamicCastToString(Disp.stringMap.get_1('idSala'));
      modulo = modulo + ',' + dynamicCastToString(Disp.stringMap.get_1('idModulo'));
      nombreSalas = nombreSalas + ',' + dynamicCastToString(Disp.stringMap.get_1('nombreSala'));
      nombreModulo = nombreModulo + ',' + dynamicCastToString(Disp.stringMap.get_1('nombreModulo'));
      inicio = inicio + ',' + dynamicCastToString(Disp.stringMap.get_1('inicio'));
      termino = termino + ',' + dynamicCastToString(Disp.stringMap.get_1('termino'));
    }
    this$static.this$01.counter = 1;
    param = '&campusid=' + this$static.this$01.idCampus + '&inicio=' + inicio + '&termino=' + termino + '&nombremodulo=' + nombreModulo + '&nombresala=' + nombreSalas + '&moduleid=' + modulo + '&room=' + sala + '&date=' + this$static.this$01.initialDate + '&name=' + $getValue(this$static.this$01.eventName) + '&asistentes=' + $getValue(this$static.this$01.attendeesAmount) + '&multiply=' + this$static.this$01.advOptions + '&finalDate=' + this$static.this$01.endDate + '&days=' + this$static.this$01.selectDays + '&frequency=' + this$static.this$01.weeklyFrequencyBookings;
    ajaxRequest('action=submission' + param, new Salas$7$1(this$static, dataTable));
    dateInfo = new Date_1(mul(fromInt(this$static.this$01.initialDate), {l:1000, m:0, h:0}));
    dateEndInfo = new Date_1(mul(fromInt(this$static.this$01.endDate), {l:1000, m:0, h:0}));
    fmt = ($clinit_DateTimeFormat_0() , getFormat('d/M/yyyy', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0))));
    info = new Grid(7, 2);
    $setPropertyString(info.tableElem, 'border', '0');
    $setText_0(info, 0, 0, 'Nombre del evento:');
    $setText_0(info, 0, 1, $getValue(this$static.this$01.eventName));
    $setText_0(info, 1, 0, 'Fecha inicio:');
    $setText_0(info, 1, 1, $format(fmt, dateInfo, null));
    $setText_0(info, 2, 0, 'Fecha t\xE9rmino:');
    $setText_0(info, 2, 1, $format(fmt, dateEndInfo, null));
    $setText_0(info, 3, 0, 'Frecuencia:');
    $setText_0(info, 3, 1, 'Cada ' + this$static.this$01.weeklyFrequencyBookings + ' semana(s)');
    $setText_0(info, 4, 0, 'N\xB0 de asistentes:');
    $setText_0(info, 4, 1, $getValue(this$static.this$01.attendeesAmount));
    $setText_0(info, 5, 0, 'Responsable');
    $setText_0(info, 5, 1, this$static.this$01.userName + ' ' + this$static.this$01.userLastName);
    $setText_0(info, 6, 0, 'Correo responsable:');
    $setText_0(info, 6, 1, this$static.this$01.userEmail);
    $add_3(this$static.this$01.resultPanelBookings, info);
    $add_3(this$static.this$01.resultPanelBookings, dataTable);
    setVisible(this$static.this$01.matrixButtons.element, false);
    setVisible(this$static.this$01.decoratordecoratorPanelFormPanel.element, false);
    $add_0(get_0(this$static.this$01.buttonsRoomsDivId), this$static.this$01.resultPanelBookings);
  }
}

function Salas$7(this$0){
  this.this$01 = this$0;
}

defineClass(116, 1, {29:1, 313:1}, Salas$7);
var Lcl_webcursos_salas_client_Salas$7_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/7', 116);
function $onSuccess_1(this$static, result){
  var bookings, bookings$iterator, bookings$iterator0, values, valuesErroneousBookings, valuesSatisfactoryBookingsReservas;
  values = getValueFromResult(result);
  valuesSatisfactoryBookingsReservas = getValuesFromResultString(dynamicCastToString(values.stringMap.get_1('well')));
  valuesErroneousBookings = getValuesFromResultString(dynamicCastToString(values.stringMap.get_1('errors')));
  for (bookings$iterator0 = new AbstractList$IteratorImpl(valuesSatisfactoryBookingsReservas); bookings$iterator0.i < bookings$iterator0.this$01_0.size_1();) {
    bookings = (checkCriticalElement(bookings$iterator0.i < bookings$iterator0.this$01_0.size_1()) , dynamicCast(bookings$iterator0.this$01_0.get_0(bookings$iterator0.last = bookings$iterator0.i++), 26));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 0, dynamicCastToString(bookings.stringMap.get_1('nombresala')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 1, dynamicCastToString(bookings.stringMap.get_1('nombremodulo')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 2, dynamicCastToString(bookings.stringMap.get_1('inicio')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 3, dynamicCastToString(bookings.stringMap.get_1('termino')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 4, 'OK');
    ++this$static.this$11.this$01.counter;
  }
  for (bookings$iterator = new AbstractList$IteratorImpl(valuesErroneousBookings); bookings$iterator.i < bookings$iterator.this$01_0.size_1();) {
    bookings = (checkCriticalElement(bookings$iterator.i < bookings$iterator.this$01_0.size_1()) , dynamicCast(bookings$iterator.this$01_0.get_0(bookings$iterator.last = bookings$iterator.i++), 26));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 0, dynamicCastToString(bookings.stringMap.get_1('nombresala')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 1, dynamicCastToString(bookings.stringMap.get_1('nombremodulo')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 2, dynamicCastToString(bookings.stringMap.get_1('inicio')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 3, dynamicCastToString(bookings.stringMap.get_1('termino')));
    $setText_0(this$static.val$dataTable2, this$static.this$11.this$01.counter, 4, 'Error');
    ++this$static.this$11.this$01.counter;
  }
}

function Salas$7$1(this$1, val$dataTable){
  this.this$11 = this$1;
  this.val$dataTable2 = val$dataTable;
}

defineClass(119, 1, {}, Salas$7$1);
_.onFailure_0 = function onFailure_1(caught){
}
;
_.onSuccess_0 = function onSuccess_1(result){
  $onSuccess_1(this, dynamicCastJso(result));
}
;
var Lcl_webcursos_salas_client_Salas$7$1_2_classLit = createForClass('cl.webcursos.salas.client', 'Salas/7/1', 119);
function $addStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix, true);
}

function $removeStyleDependentName(this$static, styleSuffix){
  $setStyleName_0(this$static, getStylePrimaryName(this$static.element) + '-' + styleSuffix, false);
}

function $setElement(this$static, elem){
  this$static.element = elem;
}

function $setElement_0(this$static, elem){
  this$static.element = elem;
}

function $setStyleName(this$static, style){
  $setClassName(this$static.element, style);
}

function $setStyleName_0(this$static, style, add_0){
  setStyleName(this$static.element, style, add_0);
}

function getStylePrimaryName(elem){
  var fullClassName, spaceIdx;
  fullClassName = $getClassName(elem);
  spaceIdx = $indexOf_0(fullClassName, fromCodePoint(32));
  if (spaceIdx >= 0) {
    return fullClassName.substr(0, spaceIdx);
  }
  return fullClassName;
}

function setStyleName(elem, style, add_0){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException('Style names cannot be empty');
  }
  add_0?$addClassName(elem, style):$removeClassName(elem, style);
}

function setStylePrimaryName(elem, style){
  if (!elem) {
    throw new RuntimeException_0('Null widget handle. If you are creating a composite, ensure that initWidget() has been called.');
  }
  style = $trim(style);
  if (style.length == 0) {
    throw new IllegalArgumentException('Style names cannot be empty');
  }
  updatePrimaryAndDependentStyleNames(elem, style);
}

function setVisible(elem, visible){
  elem.style.display = visible?'':'none';
  visible?elem.removeAttribute('aria-hidden'):elem.setAttribute('aria-hidden', 'true');
}

function updatePrimaryAndDependentStyleNames(elem, newPrimaryStyle){
  var classes = (elem.className || '').split(/\s+/);
  if (!classes) {
    return;
  }
  var oldPrimaryStyle = classes[0];
  var oldPrimaryStyleLen = oldPrimaryStyle.length;
  classes[0] = newPrimaryStyle;
  for (var i = 1, n = classes.length; i < n; i++) {
    var name_0 = classes[i];
    name_0.length > oldPrimaryStyleLen && name_0.charAt(oldPrimaryStyleLen) == '-' && name_0.indexOf(oldPrimaryStyle) == 0 && (classes[i] = newPrimaryStyle + name_0.substring(oldPrimaryStyleLen));
  }
  elem.className = classes.join(' ');
}

defineClass(10, 1, {14:1, 10:1});
_.setHeight = function setHeight(height){
  $setPropertyImpl(this.element.style, 'height', height);
}
;
_.setWidth = function setWidth(width_0){
  $setPropertyImpl(this.element.style, 'width', width_0);
}
;
_.toString$ = function toString_1(){
  if (!this.element) {
    return '(null handle)';
  }
  return this.element.outerHTML;
}
;
var Lcom_google_gwt_user_client_ui_UIObject_2_classLit = createForClass('com.google.gwt.user.client.ui', 'UIObject', 10);
function $addDomHandler(this$static, handler, type_0){
  var typeInt;
  typeInt = $eventGetTypeInt(type_0.name_0);
  typeInt == -1?null:this$static.eventsToSink == -1?$sinkEvents(this$static.element, typeInt | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= typeInt);
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $addHandler(this$static, handler, type_0){
  return $addHandler_0(!this$static.handlerManager?(this$static.handlerManager = new HandlerManager(this$static)):this$static.handlerManager, type_0, handler);
}

function $fireEvent(this$static, event_0){
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
}

function $onAttach(this$static){
  var bitsToAdd;
  if (this$static.attached) {
    throw new IllegalStateException_0("Should only call onAttach when the widget is detached from the browser's document");
  }
  this$static.attached = true;
  setEventListener(this$static.element, this$static);
  bitsToAdd = this$static.eventsToSink;
  this$static.eventsToSink = -1;
  bitsToAdd > 0 && (this$static.eventsToSink == -1?$sinkEvents(this$static.element, bitsToAdd | $getEventsSunk(this$static.element)):(this$static.eventsToSink |= bitsToAdd));
  this$static.doAttachChildren();
  this$static.onLoad();
}

function $onBrowserEvent(this$static, event_0){
  var related;
  switch ($eventGetTypeInt(event_0.type)) {
    case 16:
    case 32:
      related = event_0.relatedTarget || (event_0.type == 'mouseout'?event_0.toElement:event_0.fromElement);
      if (!!related && isOrHasChildImpl(this$static.element, related)) {
        return;
      }

  }
  fireNativeEvent(event_0, this$static, this$static.element);
}

function $onDetach(this$static){
  if (!this$static.attached) {
    throw new IllegalStateException_0("Should only call onDetach when the widget is attached to the browser's document");
  }
  try {
    this$static.onUnload();
  }
   finally {
    try {
      this$static.doDetachChildren();
    }
     finally {
      setEventListener(this$static.element, null);
      this$static.attached = false;
    }
  }
}

function $removeFromParent(this$static){
  if (!this$static.parent_0) {
    $clinit_RootPanel();
    $contains_0(widgetsToDetach, this$static) && detachNow(this$static);
  }
   else if (this$static.parent_0) {
    this$static.parent_0.remove_0(this$static);
  }
   else if (this$static.parent_0) {
    throw new IllegalStateException_0("This widget's parent does not implement HasWidgets");
  }
}

function $setParent(this$static, parent_0){
  var oldParent;
  oldParent = this$static.parent_0;
  if (!parent_0) {
    try {
      !!oldParent && oldParent.attached && this$static.onDetach();
    }
     finally {
      this$static.parent_0 = null;
    }
  }
   else {
    if (oldParent) {
      throw new IllegalStateException_0('Cannot set a new parent without first clearing the old parent');
    }
    this$static.parent_0 = parent_0;
    parent_0.attached && this$static.onAttach();
  }
}

defineClass(9, 10, $intern_1);
_.doAttachChildren = function doAttachChildren(){
}
;
_.doDetachChildren = function doDetachChildren(){
}
;
_.fireEvent_0 = function fireEvent(event_0){
  $fireEvent(this, event_0);
}
;
_.onAttach = function onAttach(){
  $onAttach(this);
}
;
_.onBrowserEvent = function onBrowserEvent(event_0){
  $onBrowserEvent(this, event_0);
}
;
_.onDetach = function onDetach(){
  $onDetach(this);
}
;
_.onLoad = function onLoad(){
}
;
_.onUnload = function onUnload(){
}
;
_.attached = false;
_.eventsToSink = 0;
var Lcom_google_gwt_user_client_ui_Widget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Widget', 9);
function $onAttach_0(this$static){
  var tabIndex;
  $onAttach(this$static);
  tabIndex = this$static.getTabIndex();
  -1 == tabIndex && this$static.setTabIndex(0);
}

function FocusWidget(elem){
  $setElement_0(this, elem);
}

defineClass(98, 9, $intern_1);
_.getTabIndex = function getTabIndex(){
  return this.element.tabIndex;
}
;
_.onAttach = function onAttach_0(){
  $onAttach_0(this);
}
;
_.setTabIndex = function setTabIndex(index_0){
  $setTabIndex(this.element, index_0);
}
;
var Lcom_google_gwt_user_client_ui_FocusWidget_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FocusWidget', 98);
function ButtonBase(elem){
  FocusWidget.call(this, elem);
}

defineClass(99, 98, $intern_1);
var Lcom_google_gwt_user_client_ui_ButtonBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ButtonBase', 99);
function $cleanupCaptureState(this$static){
  if (this$static.isCapturing || this$static.isFocusing) {
    releaseCapture(this$static.element);
    this$static.isCapturing = false;
    this$static.isFocusing = false;
  }
}

function $getFaceFromID(this$static, id_0){
  switch (id_0) {
    case 1:
      return !this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down;
    case 0:
      return this$static.up;
    case 3:
      return !this$static.downHovering && $setDownHoveringFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-hovering', 3)) , this$static.downHovering;
    case 2:
      return !this$static.upHovering && $setUpHoveringFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-hovering', 2)) , this$static.upHovering;
    case 4:
      return !this$static.upDisabled && $setUpDisabledFace(this$static, new CustomButton$2(this$static, this$static.up, 'up-disabled', 4)) , this$static.upDisabled;
    case 5:
      return !this$static.downDisabled && $setDownDisabledFace(this$static, new CustomButton$2(this$static, (!this$static.down && $setDownFace(this$static, new CustomButton$2(this$static, this$static.up, 'down', 1)) , this$static.down), 'down-disabled', 5)) , this$static.downDisabled;
    default:throw new IllegalStateException_0(id_0 + ' is not a known face id.');
  }
}

function $onClick(this$static){
  var evt, evt_0;
  this$static.allowClick = true;
  evt = (evt_0 = $doc.createEventObject() , evt_0.type = 'click' , evt_0.detail = 1 , evt_0.screenX = 0 , evt_0.screenY = 0 , evt_0.clientX = 0 , evt_0.clientY = 0 , evt_0.ctrlKey = false , evt_0.altKey = false , evt_0.shiftKey = false , evt_0.metaKey = false , evt_0.button = 1 , evt_0.relatedTarget = null , evt_0);
  $dispatchEvent(this$static.element, evt);
  this$static.allowClick = false;
}

function $setAriaPressed(this$static, newFace){
  var pressed;
  pressed = (newFace.val$faceID5 & 1) == 1;
  $clinit_Roles();
  $setAriaPressedState(this$static.element, pressed?0:1);
}

function $setCurrentFace(this$static, faceID){
  var newFace;
  newFace = $getFaceFromID(this$static, faceID);
  $setCurrentFace_0(this$static, newFace);
}

function $setCurrentFace_0(this$static, newFace){
  if (this$static.curFace != newFace) {
    !!this$static.curFace && $removeStyleDependentName(this$static, this$static.curFace.val$name4);
    this$static.curFace = newFace;
    $setCurrentFaceElement(this$static, $getFace(newFace));
    $addStyleDependentName(this$static, this$static.curFace.val$name4);
    !this$static.element['disabled'] && $setAriaPressed(this$static, newFace);
  }
}

function $setCurrentFaceElement(this$static, newFaceElement){
  if (this$static.curFaceElement != newFaceElement) {
    !!this$static.curFaceElement && $removeChild(this$static.element, this$static.curFaceElement);
    this$static.curFaceElement = newFaceElement;
    $appendChild(this$static.element, resolve(this$static.curFaceElement));
  }
}

function $setDownDisabledFace(this$static, downDisabled){
  this$static.downDisabled = downDisabled;
}

function $setDownFace(this$static, down){
  this$static.down = down;
}

function $setDownHoveringFace(this$static, downHovering){
  this$static.downHovering = downHovering;
}

function $setEnabled(this$static, enabled){
  var newFaceID;
  if (!this$static.element['disabled'] != enabled) {
    newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 4);
    newFaceID &= -3;
    $setCurrentFace(this$static, newFaceID);
    this$static.element['disabled'] = !enabled;
    if (enabled) {
      $setAriaPressed(this$static, (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace));
    }
     else {
      $cleanupCaptureState(this$static);
      $clinit_Roles();
      $removeAriaPressedState(this$static.element);
    }
  }
}

function $setUpDisabledFace(this$static, upDisabled){
  this$static.upDisabled = upDisabled;
}

function $setUpFace(this$static, up){
  this$static.up = up;
}

function $setUpHoveringFace(this$static, upHovering){
  this$static.upHovering = upHovering;
}

function $toggleDown(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 1);
  $setCurrentFace(this$static, newFaceID);
}

function $toggleHover(this$static){
  var newFaceID;
  newFaceID = (!this$static.curFace && $setCurrentFace_0(this$static, this$static.up) , this$static.curFace.val$faceID5 ^ 2);
  newFaceID &= -5;
  $setCurrentFace(this$static, newFaceID);
}

function CustomButton(upText){
  var e;
  ButtonBase.call(this, (e = $createElement($doc, 'div') , $setTabIndex(e, 0) , e));
  this.eventsToSink == -1?sinkEvents(this.element, 7165 | $getEventsSunk(this.element)):(this.eventsToSink |= 7165);
  $setUpFace(this, new CustomButton$2(this, null, 'up', 0));
  $setClassName(this.element, 'gwt-CustomButton');
  $clinit_Roles();
  $set(BUTTON, this.element);
  $setText(this.up, upText);
}

defineClass(57, 99, $intern_1);
_.getTabIndex = function getTabIndex_0(){
  return this.element.tabIndex;
}
;
_.onAttach = function onAttach_1(){
  !this.curFace && $setCurrentFace_0(this, this.up);
  $onAttach_0(this);
}
;
_.onBrowserEvent = function onBrowserEvent_0(event_0){
  var keyCode, to, type_0;
  if (this.element['disabled']) {
    return;
  }
  type_0 = $eventGetTypeInt(event_0.type);
  switch (type_0) {
    case 1:
      if (!this.allowClick) {
        $eventStopPropagation(event_0);
        return;
      }

      break;
    case 4:
      if ($eventGetButton(event_0) == 1) {
        $focus(this.element);
        setCapture(this.element);
        this.isCapturing = true;
        $eventPreventDefault(event_0);
      }

      break;
    case 8:
      if (this.isCapturing) {
        this.isCapturing = false;
        releaseCapture(this.element);
        !this.curFace && $setCurrentFace_0(this, this.up);
        (2 & this.curFace.val$faceID5) > 0 && $eventGetButton(event_0) == 1 && this.onClick_0();
      }

      break;
    case 64:
      this.isCapturing && $eventPreventDefault(event_0);
      break;
    case 32:
      to = event_0.relatedTarget || event_0.toElement;
      isOrHasChildImpl(this.element, event_0.srcElement) && (!to || !isOrHasChildImpl(this.element, to)) && (!this.curFace && $setCurrentFace_0(this, this.up) , (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this));
      break;
    case 16:
      isOrHasChildImpl(this.element, event_0.srcElement) && (!this.curFace && $setCurrentFace_0(this, this.up) , (2 & this.curFace.val$faceID5) <= 0 && $toggleHover(this));
      break;
    case 4096:
      this.isFocusing && (this.isFocusing = false);
      break;
    case 8192:
      this.isCapturing && (this.isCapturing = false);
  }
  $onBrowserEvent(this, event_0);
  if (($eventGetTypeInt(event_0.type) & 896) != 0) {
    keyCode = $eventGetKeyCode(event_0) & $intern_2;
    switch (type_0) {
      case 128:
        keyCode == 32 && (this.isFocusing = true);
        break;
      case 512:
        if (this.isFocusing && keyCode == 32) {
          this.isFocusing = false;
          this.onClick_0();
        }

        break;
      case 256:
        (keyCode == 10 || keyCode == 13) && this.onClick_0();
    }
  }
}
;
_.onClick_0 = function onClick_4(){
  $onClick(this);
}
;
_.onDetach = function onDetach_0(){
  $onDetach(this);
  $cleanupCaptureState(this);
  !this.curFace && $setCurrentFace_0(this, this.up);
  (2 & this.curFace.val$faceID5) > 0 && $toggleHover(this);
}
;
_.setTabIndex = function setTabIndex_0(index_0){
  $setTabIndex(this.element, index_0);
}
;
_.allowClick = false;
_.isCapturing = false;
_.isFocusing = false;
var Lcom_google_gwt_user_client_ui_CustomButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton', 57);
function ToggleButton(upText){
  CustomButton.call(this, upText);
  $setStyleName(this, STYLENAME_DEFAULT);
}

defineClass(73, 57, $intern_1, ToggleButton);
_.onClick_0 = function onClick_5(){
  $toggleDown(this);
  $onClick(this);
  fire_2(this, ($clinit_Boolean() , !this.curFace && $setCurrentFace_0(this, this.up)));
}
;
var STYLENAME_DEFAULT = 'gwt-ToggleButton';
var Lcom_google_gwt_user_client_ui_ToggleButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ToggleButton', 73);
function SalasButton(initialDate, sala, idSala, horaInicio, horaFin, modulo, idModulo, ocupa, handler){
  CustomButton.call(this, '');
  $setText((!this.down && $setDownFace(this, new CustomButton$2(this, this.up, 'down', 1)) , this.down), '');
  $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
  $setStyleName(this, STYLENAME_DEFAULT);
  this.sobreescribir = false;
  this.ocupado = false;
  this.popup = null;
  this.unixTime = div(fromDouble(now_1()), {l:1000, m:0, h:0});
  this.currentDate = new Date_0;
  this.hourFormat = ($clinit_DateTimeFormat_0() , getFormat('HH:mm', $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0))));
  this.s = $format(this.hourFormat, this.currentDate, null);
  this.splitNow = $split(this.s, ':', 0);
  this.hourNow = __parseAndValidateInt(this.splitNow[0]);
  this.minuteNow = __parseAndValidateInt(this.splitNow[1]);
  this.initialDate = initialDate;
  this.nombreSala = sala;
  this.idSala = idSala;
  this.nombreModulo = modulo;
  this.sobreescribir = false;
  this.ocupado = ocupa;
  this.idModulo = idModulo;
  this.inicioModulo = horaInicio;
  this.terminoModulo = horaFin;
  this.moduleHour = __parseAndValidateInt($split(this.inicioModulo, ':', 0)[0]);
  this.moduleMinute = __parseAndValidateInt($split(this.inicioModulo, ':', 0)[1]);
  this.popup = new PopupPanel;
  $setWidget_0(this.popup, new HTML('<div>Modulo: ' + modulo + '<br>(' + horaInicio + '-' + horaFin + ')<br><br> Sala:' + sala + '<\/div>'));
  $addDomHandler(this, new SalasButton$1(this), ($clinit_MouseOverEvent() , $clinit_MouseOverEvent() , TYPE_1));
  $addDomHandler(this, new SalasButton$2(this), ($clinit_MouseOutEvent() , $clinit_MouseOutEvent() , TYPE_0));
  if (this.ocupado) {
    setStyleName(this.element, 'GEM5FX3DE', true);
    this.sobreescribir || $setEnabled(this, false);
  }
   else {
    setStyleName(this.element, 'GEM5FX3DB', true);
  }
  if (gte_0(this.unixTime, fromInt(this.initialDate))) {
    if (this.hourNow > this.moduleHour) {
      $setEnabled(this, false);
      setStyleName(this.element, 'GEM5FX3DC', true);
    }
     else if (this.hourNow == this.moduleHour && this.minuteNow > this.moduleMinute) {
      $setEnabled(this, false);
      setStyleName(this.element, 'GEM5FX3DC', true);
    }
  }
}

defineClass(28, 73, {28:1, 16:1, 12:1, 15:1, 14:1, 17:1, 10:1, 9:1}, SalasButton);
_.onLoad = function onLoad_0(){
  $setPopupPosition(this.popup, $getAbsoluteLeft(this.element), $getAbsoluteTop(this.element));
}
;
_.hourNow = 0;
_.idModulo = 0;
_.idSala = 0;
_.initialDate = 0;
_.minuteNow = 0;
_.moduleHour = 0;
_.moduleMinute = 0;
_.ocupado = false;
_.sobreescribir = false;
_.unixTime = {l:0, m:0, h:0};
var Lcl_webcursos_salas_client_SalasButton_2_classLit = createForClass('cl.webcursos.salas.client', 'SalasButton', 28);
function SalasButton$1(this$0){
  this.this$01 = this$0;
}

defineClass(223, 1, {350:1, 29:1}, SalasButton$1);
var Lcl_webcursos_salas_client_SalasButton$1_2_classLit = createForClass('cl.webcursos.salas.client', 'SalasButton/1', 223);
function SalasButton$2(this$0){
  this.this$01 = this$0;
}

defineClass(224, 1, {351:1, 29:1}, SalasButton$2);
var Lcl_webcursos_salas_client_SalasButton$2_2_classLit = createForClass('cl.webcursos.salas.client', 'SalasButton/2', 224);
function $cancel(this$static){
  if (!this$static.isRunning) {
    return;
  }
  this$static.wasStarted = this$static.isStarted;
  this$static.element = null;
  this$static.isRunning = false;
  this$static.isStarted = false;
  if (this$static.requestHandle) {
    this$static.requestHandle.cancel();
    this$static.requestHandle = null;
  }
  this$static.wasStarted && $onComplete(this$static);
}

function $update(this$static, curTime){
  var curRunId, finished, progress;
  curRunId = this$static.runId;
  finished = curTime >= this$static.startTime + this$static.duration;
  if (this$static.isStarted && !finished) {
    progress = (curTime - this$static.startTime) / this$static.duration;
    $onUpdate(this$static, (1 + Math.cos($intern_3 + progress * $intern_3)) / 2);
    return this$static.isRunning && this$static.runId == curRunId;
  }
  if (!this$static.isStarted && curTime >= this$static.startTime) {
    this$static.isStarted = true;
    this$static.offsetHeight = $getPropertyInt(this$static.curPanel.element, 'offsetHeight');
    this$static.offsetWidth = $getPropertyInt(this$static.curPanel.element, 'offsetWidth');
    $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'hidden');
    $onUpdate(this$static, (1 + Math.cos($intern_3)) / 2);
    if (!(this$static.isRunning && this$static.runId == curRunId)) {
      return false;
    }
  }
  if (finished) {
    this$static.isRunning = false;
    this$static.isStarted = false;
    $onComplete(this$static);
    return false;
  }
  return true;
}

function Animation(scheduler){
  this.callback = new Animation$1(this);
  this.scheduler = scheduler;
}

defineClass(107, 1, {});
_.duration = -1;
_.isRunning = false;
_.isStarted = false;
_.runId = -1;
_.startTime = -1;
_.wasStarted = false;
var Lcom_google_gwt_animation_client_Animation_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation', 107);
function $execute(this$static, timestamp){
  $update(this$static.this$01, timestamp)?(this$static.this$01.requestHandle = this$static.this$01.scheduler.requestAnimationFrame_0(this$static.this$01.callback, this$static.this$01.element)):(this$static.this$01.requestHandle = null);
}

function Animation$1(this$0){
  this.this$01 = this$0;
}

defineClass(231, 1, {}, Animation$1);
_.execute = function execute(timestamp){
  $execute(this, timestamp);
}
;
var Lcom_google_gwt_animation_client_Animation$1_2_classLit = createForClass('com.google.gwt.animation.client', 'Animation/1', 231);
defineClass(342, 1, {});
var instance;
var Lcom_google_gwt_animation_client_AnimationScheduler_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler', 342);
defineClass(85, 1, {85:1});
var Lcom_google_gwt_animation_client_AnimationScheduler$AnimationHandle_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationScheduler/AnimationHandle', 85);
function AnimationSchedulerImplStandard(){
}

function cancelImpl(holder){
  $wnd.cancelAnimationFrame(holder.id);
}

function requestImpl(cb, element){
  var callback = $entry(function(){
    var time = now_1();
    cb.execute(time);
  }
  );
  var handle = $wnd.requestAnimationFrame(callback, element);
  return {id:handle};
}

defineClass(308, 342, {}, AnimationSchedulerImplStandard);
_.requestAnimationFrame_0 = function requestAnimationFrame(callback, element){
  var handle;
  handle = requestImpl(callback, element);
  return new AnimationSchedulerImplStandard$1(handle);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard', 308);
function AnimationSchedulerImplStandard$1(val$handle){
  this.val$handle2 = val$handle;
}

defineClass(309, 85, {85:1}, AnimationSchedulerImplStandard$1);
_.cancel = function cancel(){
  cancelImpl(this.val$handle2);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplStandard$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplStandard/1', 309);
function $cancelAnimationFrame(this$static, requestId){
  $remove_10(this$static.animationRequests, requestId);
  this$static.animationRequests.array.length == 0 && $cancel_0(this$static.timer);
}

function $updateAnimations(this$static){
  var curAnimations, duration, requestId, requestId$index, requestId$max;
  curAnimations = initDim(Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit, {352:1, 3:1}, 89, this$static.animationRequests.array.length, 0, 1);
  curAnimations = dynamicCast($toArray(this$static.animationRequests, curAnimations), 352);
  duration = new Duration;
  for (requestId$index = 0 , requestId$max = curAnimations.length; requestId$index < requestId$max; ++requestId$index) {
    requestId = curAnimations[requestId$index];
    $remove_10(this$static.animationRequests, requestId);
    $execute(requestId.callback, duration.start_0);
  }
  this$static.animationRequests.array.length > 0 && $schedule(this$static.timer, max_0(16 - (now_1() - duration.start_0)));
}

function AnimationSchedulerImplTimer(){
  this.animationRequests = new ArrayList;
  this.timer = new AnimationSchedulerImplTimer$1(this);
}

defineClass(310, 342, {}, AnimationSchedulerImplTimer);
_.requestAnimationFrame_0 = function requestAnimationFrame_0(callback, element){
  var requestId;
  requestId = new AnimationSchedulerImplTimer$AnimationHandleImpl(this, callback);
  $add_5(this.animationRequests, requestId);
  this.animationRequests.array.length == 1 && $schedule(this.timer, 16);
  return requestId;
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer', 310);
function $cancel_0(this$static){
  if (!this$static.timerId) {
    return;
  }
  ++this$static.cancelCounter;
  this$static.isRepeating?clearInterval_0(this$static.timerId.value_0):clearTimeout_0(this$static.timerId.value_0);
  this$static.timerId = null;
}

function $schedule(this$static, delayMillis){
  if (delayMillis < 0) {
    throw new IllegalArgumentException('must be non-negative');
  }
  !!this$static.timerId && $cancel_0(this$static);
  this$static.isRepeating = false;
  this$static.timerId = valueOf(setTimeout_0(createCallback(this$static, this$static.cancelCounter), delayMillis));
}

function Timer(){
}

function clearInterval_0(timerId){
  $wnd.clearInterval(timerId);
}

function clearTimeout_0(timerId){
  $wnd.clearTimeout(timerId);
}

function createCallback(timer, cancelCounter){
  return $entry(function(){
    timer.fire(cancelCounter);
  }
  );
}

function setTimeout_0(func, time){
  return $wnd.setTimeout(func, time);
}

defineClass(102, 1, {});
_.fire = function fire(scheduleCancelCounter){
  if (scheduleCancelCounter != this.cancelCounter) {
    return;
  }
  this.isRepeating || (this.timerId = null);
  this.run();
}
;
_.cancelCounter = 0;
_.isRepeating = false;
_.timerId = null;
var Lcom_google_gwt_user_client_Timer_2_classLit = createForClass('com.google.gwt.user.client', 'Timer', 102);
function AnimationSchedulerImplTimer$1(this$0){
  this.this$01 = this$0;
  Timer.call(this);
}

defineClass(311, 102, {}, AnimationSchedulerImplTimer$1);
_.run = function run(){
  $updateAnimations(this.this$01);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$1_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/1', 311);
function AnimationSchedulerImplTimer$AnimationHandleImpl(this$0, callback){
  this.this$01 = this$0;
  this.callback = callback;
}

defineClass(89, 85, {85:1, 89:1}, AnimationSchedulerImplTimer$AnimationHandleImpl);
_.cancel = function cancel_0(){
  $cancelAnimationFrame(this.this$01, this);
}
;
var Lcom_google_gwt_animation_client_AnimationSchedulerImplTimer$AnimationHandleImpl_2_classLit = createForClass('com.google.gwt.animation.client', 'AnimationSchedulerImplTimer/AnimationHandleImpl', 89);
function $set(this$static, element){
  $setAttribute(element, 'role', this$static.roleName);
}

function RoleImpl(roleName){
  this.roleName = roleName;
}

defineClass(4, 1, {});
var Lcom_google_gwt_aria_client_RoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RoleImpl', 4);
function AlertRoleImpl(){
  RoleImpl.call(this, 'alert');
}

defineClass(233, 4, {}, AlertRoleImpl);
var Lcom_google_gwt_aria_client_AlertRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertRoleImpl', 233);
function AlertdialogRoleImpl(){
  RoleImpl.call(this, 'alertdialog');
}

defineClass(232, 4, {}, AlertdialogRoleImpl);
var Lcom_google_gwt_aria_client_AlertdialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'AlertdialogRoleImpl', 232);
function ApplicationRoleImpl(){
  RoleImpl.call(this, 'application');
}

defineClass(234, 4, {}, ApplicationRoleImpl);
var Lcom_google_gwt_aria_client_ApplicationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ApplicationRoleImpl', 234);
function $getAriaValue(value_0){
  var buf, item_0, item$index, item$max;
  buf = new StringBuilder;
  for (item$index = 0 , item$max = value_0.length; item$index < item$max; ++item$index) {
    item_0 = value_0[item$index];
    $append_0($append_0(buf, $getAriaValue_0(item_0)), ' ');
  }
  return $trim(buf.string);
}

function $remove(this$static, element){
  $removeAttribute(element, this$static.name_0);
}

function $set_0(this$static, element, values){
  $setAttribute(element, this$static.name_0, $getAriaValue(values));
}

function Attribute(name_0){
  this.name_0 = name_0;
}

defineClass(109, 1, {});
var Lcom_google_gwt_aria_client_Attribute_2_classLit = createForClass('com.google.gwt.aria.client', 'Attribute', 109);
function AriaValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(49, 109, {}, AriaValueAttribute);
var Lcom_google_gwt_aria_client_AriaValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'AriaValueAttribute', 49);
function ArticleRoleImpl(){
  RoleImpl.call(this, 'article');
}

defineClass(235, 4, {}, ArticleRoleImpl);
var Lcom_google_gwt_aria_client_ArticleRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ArticleRoleImpl', 235);
function BannerRoleImpl(){
  RoleImpl.call(this, 'banner');
}

defineClass(236, 4, {}, BannerRoleImpl);
var Lcom_google_gwt_aria_client_BannerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'BannerRoleImpl', 236);
function $removeAriaPressedState(element){
  $remove(($clinit_State() , PRESSED), element);
}

function $setAriaPressedState(element, value_0){
  $set_0(($clinit_State() , PRESSED), element, initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_4, 0, 7, [value_0]));
}

function ButtonRoleImpl(){
  RoleImpl.call(this, 'button');
}

defineClass(237, 4, {}, ButtonRoleImpl);
var Lcom_google_gwt_aria_client_ButtonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ButtonRoleImpl', 237);
function CheckboxRoleImpl(){
  RoleImpl.call(this, 'checkbox');
}

defineClass(238, 4, {}, CheckboxRoleImpl);
var Lcom_google_gwt_aria_client_CheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'CheckboxRoleImpl', 238);
function ColumnheaderRoleImpl(){
  RoleImpl.call(this, 'columnheader');
}

defineClass(239, 4, {}, ColumnheaderRoleImpl);
var Lcom_google_gwt_aria_client_ColumnheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ColumnheaderRoleImpl', 239);
function ComboboxRoleImpl(){
  RoleImpl.call(this, 'combobox');
}

defineClass(240, 4, {}, ComboboxRoleImpl);
var Lcom_google_gwt_aria_client_ComboboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComboboxRoleImpl', 240);
function ComplementaryRoleImpl(){
  RoleImpl.call(this, 'complementary');
}

defineClass(241, 4, {}, ComplementaryRoleImpl);
var Lcom_google_gwt_aria_client_ComplementaryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ComplementaryRoleImpl', 241);
function ContentinfoRoleImpl(){
  RoleImpl.call(this, 'contentinfo');
}

defineClass(242, 4, {}, ContentinfoRoleImpl);
var Lcom_google_gwt_aria_client_ContentinfoRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ContentinfoRoleImpl', 242);
function DefinitionRoleImpl(){
  RoleImpl.call(this, 'definition');
}

defineClass(243, 4, {}, DefinitionRoleImpl);
var Lcom_google_gwt_aria_client_DefinitionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DefinitionRoleImpl', 243);
function DialogRoleImpl(){
  RoleImpl.call(this, 'dialog');
}

defineClass(244, 4, {}, DialogRoleImpl);
var Lcom_google_gwt_aria_client_DialogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DialogRoleImpl', 244);
function DirectoryRoleImpl(){
  RoleImpl.call(this, 'directory');
}

defineClass(245, 4, {}, DirectoryRoleImpl);
var Lcom_google_gwt_aria_client_DirectoryRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DirectoryRoleImpl', 245);
function DocumentRoleImpl(){
  RoleImpl.call(this, 'document');
}

defineClass(246, 4, {}, DocumentRoleImpl);
var Lcom_google_gwt_aria_client_DocumentRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'DocumentRoleImpl', 246);
function FormRoleImpl(){
  RoleImpl.call(this, 'form');
}

defineClass(247, 4, {}, FormRoleImpl);
var Lcom_google_gwt_aria_client_FormRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'FormRoleImpl', 247);
function GridRoleImpl(){
  RoleImpl.call(this, 'grid');
}

defineClass(249, 4, {}, GridRoleImpl);
var Lcom_google_gwt_aria_client_GridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridRoleImpl', 249);
function GridcellRoleImpl(){
  RoleImpl.call(this, 'gridcell');
}

defineClass(248, 4, {}, GridcellRoleImpl);
var Lcom_google_gwt_aria_client_GridcellRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GridcellRoleImpl', 248);
function GroupRoleImpl(){
  RoleImpl.call(this, 'group');
}

defineClass(250, 4, {}, GroupRoleImpl);
var Lcom_google_gwt_aria_client_GroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'GroupRoleImpl', 250);
function HeadingRoleImpl(){
  RoleImpl.call(this, 'heading');
}

defineClass(251, 4, {}, HeadingRoleImpl);
var Lcom_google_gwt_aria_client_HeadingRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'HeadingRoleImpl', 251);
function ImgRoleImpl(){
  RoleImpl.call(this, 'img');
}

defineClass(252, 4, {}, ImgRoleImpl);
var Lcom_google_gwt_aria_client_ImgRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ImgRoleImpl', 252);
function LinkRoleImpl(){
  RoleImpl.call(this, 'link');
}

defineClass(253, 4, {}, LinkRoleImpl);
var Lcom_google_gwt_aria_client_LinkRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LinkRoleImpl', 253);
function ListRoleImpl(){
  RoleImpl.call(this, 'list');
}

defineClass(256, 4, {}, ListRoleImpl);
var Lcom_google_gwt_aria_client_ListRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListRoleImpl', 256);
function ListboxRoleImpl(){
  RoleImpl.call(this, 'listbox');
}

defineClass(254, 4, {}, ListboxRoleImpl);
var Lcom_google_gwt_aria_client_ListboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListboxRoleImpl', 254);
function ListitemRoleImpl(){
  RoleImpl.call(this, 'listitem');
}

defineClass(255, 4, {}, ListitemRoleImpl);
var Lcom_google_gwt_aria_client_ListitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ListitemRoleImpl', 255);
function LogRoleImpl(){
  RoleImpl.call(this, 'log');
}

defineClass(257, 4, {}, LogRoleImpl);
var Lcom_google_gwt_aria_client_LogRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'LogRoleImpl', 257);
function MainRoleImpl(){
  RoleImpl.call(this, 'main');
}

defineClass(258, 4, {}, MainRoleImpl);
var Lcom_google_gwt_aria_client_MainRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MainRoleImpl', 258);
function MarqueeRoleImpl(){
  RoleImpl.call(this, 'marquee');
}

defineClass(259, 4, {}, MarqueeRoleImpl);
var Lcom_google_gwt_aria_client_MarqueeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MarqueeRoleImpl', 259);
function MathRoleImpl(){
  RoleImpl.call(this, 'math');
}

defineClass(260, 4, {}, MathRoleImpl);
var Lcom_google_gwt_aria_client_MathRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MathRoleImpl', 260);
function MenuRoleImpl(){
  RoleImpl.call(this, 'menu');
}

defineClass(265, 4, {}, MenuRoleImpl);
var Lcom_google_gwt_aria_client_MenuRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuRoleImpl', 265);
function MenubarRoleImpl(){
  RoleImpl.call(this, 'menubar');
}

defineClass(261, 4, {}, MenubarRoleImpl);
var Lcom_google_gwt_aria_client_MenubarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenubarRoleImpl', 261);
function MenuitemRoleImpl(){
  RoleImpl.call(this, 'menuitem');
}

defineClass(264, 4, {}, MenuitemRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemRoleImpl', 264);
function MenuitemcheckboxRoleImpl(){
  RoleImpl.call(this, 'menuitemcheckbox');
}

defineClass(262, 4, {}, MenuitemcheckboxRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemcheckboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemcheckboxRoleImpl', 262);
function MenuitemradioRoleImpl(){
  RoleImpl.call(this, 'menuitemradio');
}

defineClass(263, 4, {}, MenuitemradioRoleImpl);
var Lcom_google_gwt_aria_client_MenuitemradioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'MenuitemradioRoleImpl', 263);
function NavigationRoleImpl(){
  RoleImpl.call(this, 'navigation');
}

defineClass(266, 4, {}, NavigationRoleImpl);
var Lcom_google_gwt_aria_client_NavigationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NavigationRoleImpl', 266);
function NoteRoleImpl(){
  RoleImpl.call(this, 'note');
}

defineClass(267, 4, {}, NoteRoleImpl);
var Lcom_google_gwt_aria_client_NoteRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'NoteRoleImpl', 267);
function OptionRoleImpl(){
  RoleImpl.call(this, 'option');
}

defineClass(268, 4, {}, OptionRoleImpl);
var Lcom_google_gwt_aria_client_OptionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'OptionRoleImpl', 268);
function PresentationRoleImpl(){
  RoleImpl.call(this, 'presentation');
}

defineClass(269, 4, {}, PresentationRoleImpl);
var Lcom_google_gwt_aria_client_PresentationRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'PresentationRoleImpl', 269);
function Enum(name_0, ordinal){
  this.name_0 = name_0;
  this.ordinal = ordinal;
}

defineClass(5, 1, {3:1, 6:1, 5:1});
_.equals$ = function equals_0(other){
  return this === other;
}
;
_.hashCode$ = function hashCode_1(){
  return getHashCode(this);
}
;
_.toString$ = function toString_2(){
  return this.name_0 != null?this.name_0:'' + this.ordinal;
}
;
_.ordinal = 0;
var Ljava_lang_Enum_2_classLit = createForClass('java.lang', 'Enum', 5);
function $getAriaValue_0(this$static){
  switch (this$static) {
    case 0:
      return 'true';
    case 1:
      return 'false';
    case 2:
      return 'mixed';
    case 3:
      return 'undefined';
  }
  return null;
}

function values_0(){
  return initValues(getClassLiteralForArray(Lcom_google_gwt_aria_client_PressedValue_2_classLit, 1), $intern_4, 0, 7, [0, 1, 2, 3]);
}

var Lcom_google_gwt_aria_client_PressedValue_2_classLit = createForEnum('com.google.gwt.aria.client', 'PressedValue', null, values_0);
function PrimitiveValueAttribute(name_0){
  Attribute.call(this, name_0);
}

defineClass(88, 109, {}, PrimitiveValueAttribute);
var Lcom_google_gwt_aria_client_PrimitiveValueAttribute_2_classLit = createForClass('com.google.gwt.aria.client', 'PrimitiveValueAttribute', 88);
function ProgressbarRoleImpl(){
  RoleImpl.call(this, 'progressbar');
}

defineClass(270, 4, {}, ProgressbarRoleImpl);
var Lcom_google_gwt_aria_client_ProgressbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ProgressbarRoleImpl', 270);
function RadioRoleImpl(){
  RoleImpl.call(this, 'radio');
}

defineClass(272, 4, {}, RadioRoleImpl);
var Lcom_google_gwt_aria_client_RadioRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadioRoleImpl', 272);
function RadiogroupRoleImpl(){
  RoleImpl.call(this, 'radiogroup');
}

defineClass(271, 4, {}, RadiogroupRoleImpl);
var Lcom_google_gwt_aria_client_RadiogroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RadiogroupRoleImpl', 271);
function RegionRoleImpl(){
  RoleImpl.call(this, 'region');
}

defineClass(273, 4, {}, RegionRoleImpl);
var Lcom_google_gwt_aria_client_RegionRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RegionRoleImpl', 273);
function $clinit_Roles(){
  $clinit_Roles = emptyMethod;
  ALERTDIALOG = new AlertdialogRoleImpl;
  ALERT = new AlertRoleImpl;
  APPLICATION = new ApplicationRoleImpl;
  ARTICLE = new ArticleRoleImpl;
  BANNER = new BannerRoleImpl;
  BUTTON = new ButtonRoleImpl;
  CHECKBOX = new CheckboxRoleImpl;
  COLUMNHEADER = new ColumnheaderRoleImpl;
  COMBOBOX = new ComboboxRoleImpl;
  COMPLEMENTARY = new ComplementaryRoleImpl;
  CONTENTINFO = new ContentinfoRoleImpl;
  DEFINITION = new DefinitionRoleImpl;
  DIALOG = new DialogRoleImpl;
  DIRECTORY = new DirectoryRoleImpl;
  DOCUMENT = new DocumentRoleImpl;
  FORM = new FormRoleImpl;
  GRIDCELL = new GridcellRoleImpl;
  GRID = new GridRoleImpl;
  GROUP = new GroupRoleImpl;
  HEADING = new HeadingRoleImpl;
  IMG = new ImgRoleImpl;
  LINK = new LinkRoleImpl;
  LISTBOX = new ListboxRoleImpl;
  LISTITEM = new ListitemRoleImpl;
  LIST = new ListRoleImpl;
  LOG = new LogRoleImpl;
  MAIN = new MainRoleImpl;
  MARQUEE = new MarqueeRoleImpl;
  MATH = new MathRoleImpl;
  MENUBAR = new MenubarRoleImpl;
  MENUITEMCHECKBOX = new MenuitemcheckboxRoleImpl;
  MENUITEMRADIO = new MenuitemradioRoleImpl;
  MENUITEM = new MenuitemRoleImpl;
  MENU = new MenuRoleImpl;
  NAVIGATION = new NavigationRoleImpl;
  NOTE = new NoteRoleImpl;
  OPTION = new OptionRoleImpl;
  PRESENTATION = new PresentationRoleImpl;
  PROGRESSBAR = new ProgressbarRoleImpl;
  RADIOGROUP = new RadiogroupRoleImpl;
  RADIO = new RadioRoleImpl;
  REGION = new RegionRoleImpl;
  ROWGROUP = new RowgroupRoleImpl;
  ROWHEADER = new RowheaderRoleImpl;
  ROW = new RowRoleImpl;
  SCROLLBAR = new ScrollbarRoleImpl;
  SEARCH = new SearchRoleImpl;
  SEPARATOR = new SeparatorRoleImpl;
  SLIDER = new SliderRoleImpl;
  SPINBUTTON = new SpinbuttonRoleImpl;
  STATUS = new StatusRoleImpl;
  TABLIST = new TablistRoleImpl;
  TABPANEL = new TabpanelRoleImpl;
  TAB = new TabRoleImpl;
  TEXTBOX = new TextboxRoleImpl;
  TIMER = new TimerRoleImpl;
  TOOLBAR = new ToolbarRoleImpl;
  TOOLTIP = new TooltipRoleImpl;
  TREEGRID = new TreegridRoleImpl;
  TREEITEM = new TreeitemRoleImpl;
  TREE = new TreeRoleImpl;
  ROLES_MAP = new HashMap;
  $putStringValue(ROLES_MAP, 'region', REGION);
  $putStringValue(ROLES_MAP, 'alert', ALERT);
  $putStringValue(ROLES_MAP, 'dialog', DIALOG);
  $putStringValue(ROLES_MAP, 'alertdialog', ALERTDIALOG);
  $putStringValue(ROLES_MAP, 'application', APPLICATION);
  $putStringValue(ROLES_MAP, 'document', DOCUMENT);
  $putStringValue(ROLES_MAP, 'article', ARTICLE);
  $putStringValue(ROLES_MAP, 'banner', BANNER);
  $putStringValue(ROLES_MAP, 'button', BUTTON);
  $putStringValue(ROLES_MAP, 'checkbox', CHECKBOX);
  $putStringValue(ROLES_MAP, 'gridcell', GRIDCELL);
  $putStringValue(ROLES_MAP, 'columnheader', COLUMNHEADER);
  $putStringValue(ROLES_MAP, 'group', GROUP);
  $putStringValue(ROLES_MAP, 'combobox', COMBOBOX);
  $putStringValue(ROLES_MAP, 'complementary', COMPLEMENTARY);
  $putStringValue(ROLES_MAP, 'contentinfo', CONTENTINFO);
  $putStringValue(ROLES_MAP, 'definition', DEFINITION);
  $putStringValue(ROLES_MAP, 'list', LIST);
  $putStringValue(ROLES_MAP, 'directory', DIRECTORY);
  $putStringValue(ROLES_MAP, 'form', FORM);
  $putStringValue(ROLES_MAP, 'grid', GRID);
  $putStringValue(ROLES_MAP, 'heading', HEADING);
  $putStringValue(ROLES_MAP, 'img', IMG);
  $putStringValue(ROLES_MAP, 'link', LINK);
  $putStringValue(ROLES_MAP, 'listbox', LISTBOX);
  $putStringValue(ROLES_MAP, 'listitem', LISTITEM);
  $putStringValue(ROLES_MAP, 'log', LOG);
  $putStringValue(ROLES_MAP, 'main', MAIN);
  $putStringValue(ROLES_MAP, 'marquee', MARQUEE);
  $putStringValue(ROLES_MAP, 'math', MATH);
  $putStringValue(ROLES_MAP, 'menu', MENU);
  $putStringValue(ROLES_MAP, 'menubar', MENUBAR);
  $putStringValue(ROLES_MAP, 'menuitem', MENUITEM);
  $putStringValue(ROLES_MAP, 'menuitemcheckbox', MENUITEMCHECKBOX);
  $putStringValue(ROLES_MAP, 'option', OPTION);
  $putStringValue(ROLES_MAP, 'radio', RADIO);
  $putStringValue(ROLES_MAP, 'menuitemradio', MENUITEMRADIO);
  $putStringValue(ROLES_MAP, 'navigation', NAVIGATION);
  $putStringValue(ROLES_MAP, 'note', NOTE);
  $putStringValue(ROLES_MAP, 'presentation', PRESENTATION);
  $putStringValue(ROLES_MAP, 'progressbar', PROGRESSBAR);
  $putStringValue(ROLES_MAP, 'radiogroup', RADIOGROUP);
  $putStringValue(ROLES_MAP, 'row', ROW);
  $putStringValue(ROLES_MAP, 'rowgroup', ROWGROUP);
  $putStringValue(ROLES_MAP, 'rowheader', ROWHEADER);
  $putStringValue(ROLES_MAP, 'search', SEARCH);
  $putStringValue(ROLES_MAP, 'separator', SEPARATOR);
  $putStringValue(ROLES_MAP, 'scrollbar', SCROLLBAR);
  $putStringValue(ROLES_MAP, 'slider', SLIDER);
  $putStringValue(ROLES_MAP, 'spinbutton', SPINBUTTON);
  $putStringValue(ROLES_MAP, 'status', STATUS);
  $putStringValue(ROLES_MAP, 'tab', TAB);
  $putStringValue(ROLES_MAP, 'tablist', TABLIST);
  $putStringValue(ROLES_MAP, 'tabpanel', TABPANEL);
  $putStringValue(ROLES_MAP, 'textbox', TEXTBOX);
  $putStringValue(ROLES_MAP, 'timer', TIMER);
  $putStringValue(ROLES_MAP, 'toolbar', TOOLBAR);
  $putStringValue(ROLES_MAP, 'tooltip', TOOLTIP);
  $putStringValue(ROLES_MAP, 'tree', TREE);
  $putStringValue(ROLES_MAP, 'treegrid', TREEGRID);
  $putStringValue(ROLES_MAP, 'treeitem', TREEITEM);
}

var ALERT, ALERTDIALOG, APPLICATION, ARTICLE, BANNER, BUTTON, CHECKBOX, COLUMNHEADER, COMBOBOX, COMPLEMENTARY, CONTENTINFO, DEFINITION, DIALOG, DIRECTORY, DOCUMENT, FORM, GRID, GRIDCELL, GROUP, HEADING, IMG, LINK, LIST, LISTBOX, LISTITEM, LOG, MAIN, MARQUEE, MATH, MENU, MENUBAR, MENUITEM, MENUITEMCHECKBOX, MENUITEMRADIO, NAVIGATION, NOTE, OPTION, PRESENTATION, PROGRESSBAR, RADIO, RADIOGROUP, REGION, ROLES_MAP, ROW, ROWGROUP, ROWHEADER, SCROLLBAR, SEARCH, SEPARATOR, SLIDER, SPINBUTTON, STATUS, TAB, TABLIST, TABPANEL, TEXTBOX, TIMER, TOOLBAR, TOOLTIP, TREE, TREEGRID, TREEITEM;
function RowRoleImpl(){
  RoleImpl.call(this, 'row');
}

defineClass(276, 4, {}, RowRoleImpl);
var Lcom_google_gwt_aria_client_RowRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowRoleImpl', 276);
function RowgroupRoleImpl(){
  RoleImpl.call(this, 'rowgroup');
}

defineClass(274, 4, {}, RowgroupRoleImpl);
var Lcom_google_gwt_aria_client_RowgroupRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowgroupRoleImpl', 274);
function RowheaderRoleImpl(){
  RoleImpl.call(this, 'rowheader');
}

defineClass(275, 4, {}, RowheaderRoleImpl);
var Lcom_google_gwt_aria_client_RowheaderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'RowheaderRoleImpl', 275);
function ScrollbarRoleImpl(){
  RoleImpl.call(this, 'scrollbar');
}

defineClass(277, 4, {}, ScrollbarRoleImpl);
var Lcom_google_gwt_aria_client_ScrollbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ScrollbarRoleImpl', 277);
function SearchRoleImpl(){
  RoleImpl.call(this, 'search');
}

defineClass(278, 4, {}, SearchRoleImpl);
var Lcom_google_gwt_aria_client_SearchRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SearchRoleImpl', 278);
function SeparatorRoleImpl(){
  RoleImpl.call(this, 'separator');
}

defineClass(279, 4, {}, SeparatorRoleImpl);
var Lcom_google_gwt_aria_client_SeparatorRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SeparatorRoleImpl', 279);
function SliderRoleImpl(){
  RoleImpl.call(this, 'slider');
}

defineClass(280, 4, {}, SliderRoleImpl);
var Lcom_google_gwt_aria_client_SliderRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SliderRoleImpl', 280);
function SpinbuttonRoleImpl(){
  RoleImpl.call(this, 'spinbutton');
}

defineClass(281, 4, {}, SpinbuttonRoleImpl);
var Lcom_google_gwt_aria_client_SpinbuttonRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'SpinbuttonRoleImpl', 281);
function $clinit_State(){
  $clinit_State = emptyMethod;
  new PrimitiveValueAttribute('aria-busy');
  new AriaValueAttribute('aria-checked');
  new PrimitiveValueAttribute('aria-disabled');
  new AriaValueAttribute('aria-expanded');
  new AriaValueAttribute('aria-grabbed');
  new PrimitiveValueAttribute('aria-hidden');
  new AriaValueAttribute('aria-invalid');
  PRESSED = new AriaValueAttribute('aria-pressed');
  new AriaValueAttribute('aria-selected');
}

var PRESSED;
function StatusRoleImpl(){
  RoleImpl.call(this, 'status');
}

defineClass(282, 4, {}, StatusRoleImpl);
var Lcom_google_gwt_aria_client_StatusRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'StatusRoleImpl', 282);
function TabRoleImpl(){
  RoleImpl.call(this, 'tab');
}

defineClass(285, 4, {}, TabRoleImpl);
var Lcom_google_gwt_aria_client_TabRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabRoleImpl', 285);
function TablistRoleImpl(){
  RoleImpl.call(this, 'tablist');
}

defineClass(283, 4, {}, TablistRoleImpl);
var Lcom_google_gwt_aria_client_TablistRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TablistRoleImpl', 283);
function TabpanelRoleImpl(){
  RoleImpl.call(this, 'tabpanel');
}

defineClass(284, 4, {}, TabpanelRoleImpl);
var Lcom_google_gwt_aria_client_TabpanelRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TabpanelRoleImpl', 284);
function TextboxRoleImpl(){
  RoleImpl.call(this, 'textbox');
}

defineClass(286, 4, {}, TextboxRoleImpl);
var Lcom_google_gwt_aria_client_TextboxRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TextboxRoleImpl', 286);
function TimerRoleImpl(){
  RoleImpl.call(this, 'timer');
}

defineClass(287, 4, {}, TimerRoleImpl);
var Lcom_google_gwt_aria_client_TimerRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TimerRoleImpl', 287);
function ToolbarRoleImpl(){
  RoleImpl.call(this, 'toolbar');
}

defineClass(288, 4, {}, ToolbarRoleImpl);
var Lcom_google_gwt_aria_client_ToolbarRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'ToolbarRoleImpl', 288);
function TooltipRoleImpl(){
  RoleImpl.call(this, 'tooltip');
}

defineClass(289, 4, {}, TooltipRoleImpl);
var Lcom_google_gwt_aria_client_TooltipRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TooltipRoleImpl', 289);
function TreeRoleImpl(){
  RoleImpl.call(this, 'tree');
}

defineClass(292, 4, {}, TreeRoleImpl);
var Lcom_google_gwt_aria_client_TreeRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeRoleImpl', 292);
function TreegridRoleImpl(){
  RoleImpl.call(this, 'treegrid');
}

defineClass(290, 4, {}, TreegridRoleImpl);
var Lcom_google_gwt_aria_client_TreegridRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreegridRoleImpl', 290);
function TreeitemRoleImpl(){
  RoleImpl.call(this, 'treeitem');
}

defineClass(291, 4, {}, TreeitemRoleImpl);
var Lcom_google_gwt_aria_client_TreeitemRoleImpl_2_classLit = createForClass('com.google.gwt.aria.client', 'TreeitemRoleImpl', 291);
function Duration(){
  this.start_0 = now_1();
}

defineClass(105, 1, {}, Duration);
_.start_0 = 0;
var Lcom_google_gwt_core_client_Duration_2_classLit = createForClass('com.google.gwt.core.client', 'Duration', 105);
function isScript(){
  return true;
}

function $toString(this$static){
  var className, msg;
  className = $getName(this$static.___clazz$);
  msg = this$static.getMessage();
  return msg != null?className + ': ' + msg:className;
}

function Throwable(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(7, 1, $intern_5);
_.getMessage = function getMessage(){
  return this.detailMessage;
}
;
_.toString$ = function toString_3(){
  return $toString(this);
}
;
var Ljava_lang_Throwable_2_classLit = createForClass('java.lang', 'Throwable', 7);
function Exception(message){
  this.detailMessage = message;
  captureStackTrace(this, this.detailMessage);
}

defineClass(11, 7, $intern_6, Exception);
var Ljava_lang_Exception_2_classLit = createForClass('java.lang', 'Exception', 11);
function RuntimeException(){
  captureStackTrace(this, this.detailMessage);
}

function RuntimeException_0(message){
  Exception.call(this, message);
}

function RuntimeException_1(message){
  Throwable.call(this, message);
}

defineClass(18, 11, $intern_6, RuntimeException_0);
var Ljava_lang_RuntimeException_2_classLit = createForClass('java.lang', 'RuntimeException', 18);
defineClass(126, 18, $intern_6);
var Lcom_google_gwt_core_client_impl_JavaScriptExceptionBase_2_classLit = createForClass('com.google.gwt.core.client.impl', 'JavaScriptExceptionBase', 126);
function $clinit_JavaScriptException(){
  $clinit_JavaScriptException = emptyMethod;
  NOT_SET = new Object_0;
}

function $ensureInit(this$static){
  var exception;
  if (this$static.message_0 == null) {
    exception = maskUndefined(this$static.e) === maskUndefined(NOT_SET)?null:this$static.e;
    this$static.name_0 = exception == null?'null':instanceOfJso(exception)?getExceptionName0(dynamicCastJso(exception)):isJavaString(exception)?'String':$getName(getClass__Ljava_lang_Class___devirtual$(exception));
    this$static.description = this$static.description + ': ' + (instanceOfJso(exception)?getExceptionDescription0(dynamicCastJso(exception)):exception + '');
    this$static.message_0 = '(' + this$static.name_0 + ') ' + this$static.description;
  }
}

function JavaScriptException(e){
  $clinit_JavaScriptException();
  this.detailMessage = null;
  this.description = '';
  this.e = e;
  this.description = '';
}

function getExceptionDescription0(e){
  return e == null?null:e.message;
}

function getExceptionName0(e){
  return e == null?null:e.name;
}

defineClass(39, 126, {39:1, 3:1, 11:1, 7:1}, JavaScriptException);
_.getMessage = function getMessage_0(){
  $ensureInit(this);
  return this.message_0;
}
;
_.getThrown = function getThrown(){
  return maskUndefined(this.e) === maskUndefined(NOT_SET)?null:this.e;
}
;
var NOT_SET;
var Lcom_google_gwt_core_client_JavaScriptException_2_classLit = createForClass('com.google.gwt.core.client', 'JavaScriptException', 39);
function $push(this$static, value_0){
  this$static[this$static.length] = value_0;
}

function create(milliseconds){
  return new Date(milliseconds);
}

function now_1(){
  if (Date.now) {
    return Date.now();
  }
  return (new Date).getTime();
}

function escapeChar(c, escapeTable){
  var lookedUp = escapeTable_0[c.charCodeAt(0)];
  return lookedUp == null?c:lookedUp;
}

function escapeJsonForEval(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return s;
}

function escapeValue(toEscape){
  var escapeTable = getEscapeTable();
  var s = toEscape.replace(/[\x00-\x1f\xad\u0600-\u0603\u06dd\u070f\u17b4\u17b5\u200b-\u200f\u2028-\u202e\u2060-\u2064\u206a-\u206f\ufeff\ufff9-\ufffb"\\]/g, function(x_0){
    return escapeChar(x_0, escapeTable);
  }
  );
  return '"' + s + '"';
}

function getEscapeTable(){
  !escapeTable_0 && (escapeTable_0 = initEscapeTable());
  return escapeTable_0;
}

function initEscapeTable(){
  var out = ['\\u0000', '\\u0001', '\\u0002', '\\u0003', '\\u0004', '\\u0005', '\\u0006', '\\u0007', '\\b', '\\t', '\\n', '\\u000B', '\\f', '\\r', '\\u000E', '\\u000F', '\\u0010', '\\u0011', '\\u0012', '\\u0013', '\\u0014', '\\u0015', '\\u0016', '\\u0017', '\\u0018', '\\u0019', '\\u001A', '\\u001B', '\\u001C', '\\u001D', '\\u001E', '\\u001F'];
  out[34] = '\\"';
  out[92] = '\\\\';
  out[173] = '\\u00ad';
  out[1536] = '\\u0600';
  out[1537] = '\\u0601';
  out[1538] = '\\u0602';
  out[1539] = '\\u0603';
  out[1757] = '\\u06dd';
  out[1807] = '\\u070f';
  out[6068] = '\\u17b4';
  out[6069] = '\\u17b5';
  out[8203] = '\\u200b';
  out[8204] = '\\u200c';
  out[8205] = '\\u200d';
  out[8206] = '\\u200e';
  out[8207] = '\\u200f';
  out[8232] = '\\u2028';
  out[8233] = '\\u2029';
  out[8234] = '\\u202a';
  out[8235] = '\\u202b';
  out[8236] = '\\u202c';
  out[8237] = '\\u202d';
  out[8238] = '\\u202e';
  out[8288] = '\\u2060';
  out[8289] = '\\u2061';
  out[8290] = '\\u2062';
  out[8291] = '\\u2063';
  out[8292] = '\\u2064';
  out[8298] = '\\u206a';
  out[8299] = '\\u206b';
  out[8300] = '\\u206c';
  out[8301] = '\\u206d';
  out[8302] = '\\u206e';
  out[8303] = '\\u206f';
  out[65279] = '\\ufeff';
  out[65529] = '\\ufff9';
  out[65530] = '\\ufffa';
  out[65531] = '\\ufffb';
  return out;
}

var escapeTable_0;
defineClass(317, 1, {});
var Lcom_google_gwt_core_client_Scheduler_2_classLit = createForClass('com.google.gwt.core.client', 'Scheduler', 317);
function apply_0(jsFunction, thisObj, args){
  return jsFunction.apply(thisObj, args);
  var __0;
}

function enter(){
  var now_0;
  if (entryDepth != 0) {
    now_0 = now_1();
    if (now_0 - watchdogEntryDepthLastScheduled > 2000) {
      watchdogEntryDepthLastScheduled = now_0;
      watchdogEntryDepthTimerId = $wnd.setTimeout(watchdogEntryDepthRun, 10);
    }
  }
  if (entryDepth++ == 0) {
    $flushEntryCommands(($clinit_SchedulerImpl() , INSTANCE));
    return true;
  }
  return false;
}

function entry_0(jsFunction){
  return function(){
    if (isScript()) {
      return entry0(jsFunction, this, arguments);
    }
     else {
      var __0 = entry0(jsFunction, this, arguments);
      __0 != null && (__0 = __0.val);
      return __0;
    }
  }
  ;
}

function entry0(jsFunction, thisObj, args){
  var initialEntry;
  initialEntry = enter();
  try {
    return apply_0(jsFunction, thisObj, args);
  }
   finally {
    exit(initialEntry);
  }
}

function exit(initialEntry){
  initialEntry && $flushFinallyCommands(($clinit_SchedulerImpl() , INSTANCE));
  --entryDepth;
  if (initialEntry) {
    if (watchdogEntryDepthTimerId != -1) {
      watchdogEntryDepthCancel(watchdogEntryDepthTimerId);
      watchdogEntryDepthTimerId = -1;
    }
  }
}

function getHashCode(o){
  return o.$H || (o.$H = ++sNextHashId);
}

function reportToBrowser(e){
  $wnd.setTimeout(function(){
    throw e;
  }
  , 0);
}

function watchdogEntryDepthCancel(timerId){
  $wnd.clearTimeout(timerId);
}

function watchdogEntryDepthRun(){
  entryDepth != 0 && (entryDepth = 0);
  watchdogEntryDepthTimerId = -1;
}

var entryDepth = 0, sNextHashId = 0, watchdogEntryDepthLastScheduled = 0, watchdogEntryDepthTimerId = -1;
function $clinit_SchedulerImpl(){
  $clinit_SchedulerImpl = emptyMethod;
  INSTANCE = new SchedulerImpl;
}

function $flushEntryCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.entryCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.entryCommands;
      this$static.entryCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.entryCommands);
    this$static.entryCommands = rescheduled;
  }
}

function $flushFinallyCommands(this$static){
  var oldQueue, rescheduled;
  if (this$static.finallyCommands) {
    rescheduled = null;
    do {
      oldQueue = this$static.finallyCommands;
      this$static.finallyCommands = null;
      rescheduled = runScheduledTasks(oldQueue, rescheduled);
    }
     while (this$static.finallyCommands);
    this$static.finallyCommands = rescheduled;
  }
}

function $flushPostEventPumpCommands(this$static){
  var oldDeferred;
  if (this$static.deferredCommands) {
    oldDeferred = this$static.deferredCommands;
    this$static.deferredCommands = null;
    !this$static.incrementalCommands && (this$static.incrementalCommands = []);
    runScheduledTasks(oldDeferred, this$static.incrementalCommands);
  }
  !!this$static.incrementalCommands && (this$static.incrementalCommands = $runRepeatingTasks(this$static.incrementalCommands));
}

function $isWorkQueued(this$static){
  return !!this$static.deferredCommands || !!this$static.incrementalCommands;
}

function $maybeSchedulePostEventPumpCommands(this$static){
  if (!this$static.shouldBeRunning) {
    this$static.shouldBeRunning = true;
    !this$static.flusher && (this$static.flusher = new SchedulerImpl$Flusher(this$static));
    scheduleFixedDelayImpl(this$static.flusher, 1);
    !this$static.rescue && (this$static.rescue = new SchedulerImpl$Rescuer(this$static));
    scheduleFixedDelayImpl(this$static.rescue, 50);
  }
}

function $runRepeatingTasks(tasks){
  var canceledSomeTasks, duration, executedSomeTask, i, length_0, newTasks, t;
  length_0 = tasks.length;
  if (length_0 == 0) {
    return null;
  }
  canceledSomeTasks = false;
  duration = new Duration;
  while (now_1() - duration.start_0 < 16) {
    executedSomeTask = false;
    for (i = 0; i < length_0; i++) {
      t = tasks[i];
      if (!t) {
        continue;
      }
      executedSomeTask = true;
      if (!t[0].execute_0()) {
        tasks[i] = null;
        canceledSomeTasks = true;
      }
    }
    if (!executedSomeTask) {
      break;
    }
  }
  if (canceledSomeTasks) {
    newTasks = [];
    for (i = 0; i < length_0; i++) {
      !!tasks[i] && $push(newTasks, tasks[i]);
    }
    return newTasks.length == 0?null:newTasks;
  }
   else {
    return tasks;
  }
}

function $scheduleDeferred(this$static, cmd){
  this$static.deferredCommands = push_0(this$static.deferredCommands, [cmd, false]);
  $maybeSchedulePostEventPumpCommands(this$static);
}

function SchedulerImpl(){
}

function execute_0(cmd){
  return cmd.execute_0();
}

function push_0(queue, task){
  !queue && (queue = []);
  $push(queue, task);
  return queue;
}

function runScheduledTasks(tasks, rescheduled){
  var e, i, j, t;
  for (i = 0 , j = tasks.length; i < j; i++) {
    t = tasks[i];
    try {
      t[1]?t[0].execute_0() && (rescheduled = push_0(rescheduled, t)):t[0].execute_1();
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        reportToBrowser(instanceOf(e, 39)?dynamicCast(e, 39).getThrown():e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  return rescheduled;
}

function scheduleFixedDelayImpl(cmd, delayMs){
  $clinit_SchedulerImpl();
  function callback(){
    var ret = $entry(execute_0)(cmd);
    !isScript() && (ret = ret == true);
    ret && $wnd.setTimeout(callback, delayMs);
  }

  $wnd.setTimeout(callback, delayMs);
}

defineClass(173, 317, {}, SchedulerImpl);
_.flushRunning = false;
_.shouldBeRunning = false;
var INSTANCE;
var Lcom_google_gwt_core_client_impl_SchedulerImpl_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl', 173);
function SchedulerImpl$Flusher(this$0){
  this.this$01 = this$0;
}

defineClass(174, 1, {}, SchedulerImpl$Flusher);
_.execute_0 = function execute_1(){
  this.this$01.flushRunning = true;
  $flushPostEventPumpCommands(this.this$01);
  this.this$01.flushRunning = false;
  return this.this$01.shouldBeRunning = $isWorkQueued(this.this$01);
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Flusher_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Flusher', 174);
function SchedulerImpl$Rescuer(this$0){
  this.this$01 = this$0;
}

defineClass(175, 1, {}, SchedulerImpl$Rescuer);
_.execute_0 = function execute_2(){
  this.this$01.flushRunning && scheduleFixedDelayImpl(this.this$01.flusher, 1);
  return this.this$01.shouldBeRunning;
}
;
var Lcom_google_gwt_core_client_impl_SchedulerImpl$Rescuer_2_classLit = createForClass('com.google.gwt.core.client.impl', 'SchedulerImpl/Rescuer', 175);
function $clinit_StackTraceCreator(){
  $clinit_StackTraceCreator = emptyMethod;
  var c, enforceLegacy;
  enforceLegacy = !(!!Error.stackTraceLimit || 'stack' in new Error);
  c = new StackTraceCreator$CollectorModernNoSourceMap;
  collector = enforceLegacy?new StackTraceCreator$CollectorLegacy:c;
}

function captureStackTrace(throwable, reference){
  $clinit_StackTraceCreator();
  collector.collect(throwable, reference);
}

function extractFunctionName(fnName){
  var fnRE = /function(?:\s+([\w$]+))?\s*\(/;
  var match_0 = fnRE.exec(fnName);
  return match_0 && match_0[1] || 'anonymous';
}

var collector;
defineClass(328, 1, {});
var Lcom_google_gwt_core_client_impl_StackTraceCreator$Collector_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/Collector', 328);
function StackTraceCreator$CollectorLegacy(){
}

defineClass(127, 328, {}, StackTraceCreator$CollectorLegacy);
_.collect = function collect(t, thrownIgnored){
  var seen = {}, name_1;
  t.fnStack = [];
  var callee = arguments.callee.caller;
  while (callee) {
    var name_0 = ($clinit_StackTraceCreator() , callee.name || (callee.name = extractFunctionName(callee.toString())));
    t.fnStack.push(name_0);
    var keyName = ':' + name_0;
    var withThisName = seen[keyName];
    if (withThisName) {
      var i, j;
      for (i = 0 , j = withThisName.length; i < j; i++) {
        if (withThisName[i] === callee) {
          return;
        }
      }
    }
    (withThisName || (seen[keyName] = [])).push(callee);
    callee = callee.caller;
  }
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorLegacy_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorLegacy', 127);
function $clinit_StackTraceCreator$CollectorModern(){
  $clinit_StackTraceCreator$CollectorModern = emptyMethod;
  Error.stackTraceLimit = 64;
}

defineClass(329, 328, {});
_.collect = function collect_0(t, jsThrown){
  function fixIE(e){
    if (!('stack' in e)) {
      try {
        throw e;
      }
       catch (ignored) {
      }
    }
    return e;
  }

  var backingJsError;
  typeof jsThrown == 'string'?(backingJsError = fixIE(new Error(jsThrown))):jsThrown instanceof Object && 'stack' in jsThrown?(backingJsError = jsThrown):(backingJsError = fixIE(new Error));
  t.__gwt$backingJsError = backingJsError;
}
;
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModern_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModern', 329);
function StackTraceCreator$CollectorModernNoSourceMap(){
  $clinit_StackTraceCreator$CollectorModern();
}

defineClass(128, 329, {}, StackTraceCreator$CollectorModernNoSourceMap);
var Lcom_google_gwt_core_client_impl_StackTraceCreator$CollectorModernNoSourceMap_2_classLit = createForClass('com.google.gwt.core.client.impl', 'StackTraceCreator/CollectorModernNoSourceMap', 128);
function checkCriticalElement(expression){
  if (!expression) {
    throw new NoSuchElementException;
  }
}

function checkElementIndex(index_0, size_0){
  if (index_0 < 0 || index_0 >= size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkNotNull(reference){
  if (!reference) {
    throw new NullPointerException;
  }
  return reference;
}

function checkPositionIndex(index_0, size_0){
  if (index_0 < 0 || index_0 > size_0) {
    throw new IndexOutOfBoundsException_0('Index: ' + index_0 + ', Size: ' + size_0);
  }
}

function checkState(expression){
  if (!expression) {
    throw new IllegalStateException;
  }
}

function $appendChild(this$static, newChild){
  return this$static.appendChild(newChild);
}

function $removeChild(this$static, oldChild){
  return this$static.removeChild(oldChild);
}

function is(o){
  try {
    return !!o && !!o.nodeType;
  }
   catch (e) {
    return false;
  }
}

function $addClassName(this$static, className){
  var idx, oldClassName;
  className = trimClassName(className);
  oldClassName = $getClassName(this$static);
  idx = indexOfName(oldClassName, className);
  if (idx == -1) {
    oldClassName.length > 0?$setClassName(this$static, oldClassName + ' ' + className):$setClassName(this$static, className);
    return true;
  }
  return false;
}

function $getClassName(this$static){
  return this$static.className || '';
}

function $getPropertyInt(this$static, name_0){
  return parseInt(this$static[name_0]) | 0;
}

function $getPropertyString(this$static, name_0){
  return this$static[name_0] == null?null:String(this$static[name_0]);
}

function $removeAttribute(this$static, name_0){
  this$static.removeAttribute(name_0);
}

function $removeClassName(this$static, className){
  var begin, end, idx, newClassName, oldStyle;
  className = trimClassName(className);
  oldStyle = $getClassName(this$static);
  idx = indexOfName(oldStyle, className);
  if (idx != -1) {
    begin = $trim(oldStyle.substr(0, idx));
    end = $trim($substring(oldStyle, idx + className.length));
    begin.length == 0?(newClassName = end):end.length == 0?(newClassName = begin):(newClassName = begin + ' ' + end);
    $setClassName(this$static, newClassName);
    return true;
  }
  return false;
}

function $setAttribute(this$static, name_0, value_0){
  this$static.setAttribute(name_0, value_0);
}

function $setClassName(this$static, className){
  this$static.className = className || '';
}

function $setId(this$static, id_0){
  this$static.id = id_0;
}

function $setInnerHTML(this$static, html){
  this$static.innerHTML = html || '';
}

function $setPropertyInt(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setPropertyString(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $setTabIndex(this$static, tabIndex){
  this$static.tabIndex = tabIndex;
}

function indexOfName(nameList, name_0){
  var idx, last, lastPos;
  idx = nameList.indexOf(name_0);
  while (idx != -1) {
    if (idx == 0 || nameList.charCodeAt(idx - 1) == 32) {
      last = idx + name_0.length;
      lastPos = nameList.length;
      if (last == lastPos || last < lastPos && nameList.charCodeAt(last) == 32) {
        break;
      }
    }
    idx = nameList.indexOf(name_0, idx + 1);
  }
  return idx;
}

function is_0(o){
  if (is(o)) {
    return !!o && o.nodeType == 1;
  }
  return false;
}

function trimClassName(className){
  className = $trim(className);
  return className;
}

function $createScriptElement(doc, source){
  var elem;
  elem = $createElement(doc, 'script');
  elem.text = source;
  return elem;
}

function $eventGetAltKey(evt){
  return !!evt.altKey;
}

function $eventGetButton(evt){
  return evt.button | 0;
}

function $eventGetCtrlKey(evt){
  return !!evt.ctrlKey;
}

function $eventGetKeyCode(evt){
  return evt.keyCode | 0;
}

function $eventGetMetaKey(evt){
  return !!evt.metaKey;
}

function $eventGetShiftKey(evt){
  return !!evt.shiftKey;
}

function $getFirstChildElement(elem){
  var child = elem.firstChild;
  while (child && child.nodeType != 1)
    child = child.nextSibling;
  return child;
}

function $getParentElement(node){
  var parent_0 = node.parentNode;
  (!parent_0 || parent_0.nodeType != 1) && (parent_0 = null);
  return parent_0;
}

function $getSubPixelScrollLeft(elem){
  return elem.scrollLeft || 0;
}

function $createElement(doc, tagName){
  var container, elem;
  if (tagName.indexOf(':') != -1) {
    container = (!doc.__gwt_container && (doc.__gwt_container = doc.createElement('div')) , doc.__gwt_container);
    $setInnerHTML(container, '<' + tagName + '/>');
    elem = $getFirstChildElement(container);
    container.removeChild(elem);
    return elem;
  }
  return doc.createElement(tagName);
}

function $dispatchEvent(target, evt){
  target.fireEvent('on' + evt.type, evt);
}

function $eventPreventDefault(evt){
  evt.returnValue = false;
}

function $eventStopPropagation(evt){
  evt.cancelBubble = true;
}

function $getAttribute(elem, name_0){
  var attr = elem.getAttribute(name_0);
  return attr == null?'':attr + '';
}

function $getBoundingClientRectLeft(elem){
  try {
    return elem.getBoundingClientRect().left;
  }
   catch (e) {
    return 0;
  }
}

function $getBoundingClientRectTop(elem){
  try {
    return elem.getBoundingClientRect().top;
  }
   catch (e) {
    return 0;
  }
}

function $getTagName(elem){
  var scopeName, tagName;
  tagName = elem.tagName;
  scopeName = elem.scopeName;
  if (scopeName == null || $equalsIgnoreCase('html', scopeName)) {
    return tagName;
  }
  return scopeName + ':' + tagName;
}

function $setInnerText(elem, text_0){
  elem.innerText = text_0 || '';
}

function isOrHasChildImpl(parent_0, child){
  if (parent_0.nodeType != 1 && parent_0.nodeType != 9) {
    return parent_0 == child;
  }
  if (child.nodeType != 1) {
    child = child.parentNode;
    if (!child) {
      return false;
    }
  }
  if (parent_0.nodeType == 9) {
    return parent_0 === child || parent_0.body && parent_0.body.contains(child);
  }
   else {
    return parent_0 === child || parent_0.contains(child);
  }
}

var currentEventTarget;
function $getAbsoluteLeft(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectLeft(elem) + $getScrollLeft($equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body);
}

function $getAbsoluteTop(elem){
  var doc;
  doc = elem.ownerDocument;
  return $getBoundingClientRectTop(elem) + ((($equals(doc.compatMode, 'CSS1Compat')?doc.documentElement:doc.body).scrollTop || 0) | 0);
}

function $getScrollLeft(elem){
  if (elem.currentStyle.direction == 'rtl') {
    return -($getSubPixelScrollLeft(elem) | 0);
  }
  return $getSubPixelScrollLeft(elem) | 0;
}

function $getBodyOffsetLeft(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientLeft;
}

function $getBodyOffsetTop(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientTop;
}

function $getClientHeight(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientHeight | 0;
}

function $getClientWidth(this$static){
  return ($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).clientWidth | 0;
}

function $getElementById(this$static, elementId){
  return this$static.getElementById(elementId);
}

function $getScrollHeight(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollHeight || 0) | 0;
}

function $getScrollWidth(this$static){
  return (($equals(this$static.compatMode, 'CSS1Compat')?this$static.documentElement:this$static.body).scrollWidth || 0) | 0;
}

function $setTarget(this$static, target){
  this$static.target = target;
}

function $setSrc(this$static, src_0){
  this$static.src = src_0;
}

function $setPropertyImpl(this$static, name_0, value_0){
  this$static[name_0] = value_0;
}

function $clinit_Style$Display(){
  $clinit_Style$Display = emptyMethod;
  NONE = new Style$Display$1;
  BLOCK = new Style$Display$2;
  INLINE = new Style$Display$3;
  INLINE_BLOCK = new Style$Display$4;
  INLINE_TABLE = new Style$Display$5;
  LIST_ITEM = new Style$Display$6;
  RUN_IN = new Style$Display$7;
  TABLE = new Style$Display$8;
  TABLE_CAPTION = new Style$Display$9;
  TABLE_COLUMN_GROUP = new Style$Display$10;
  TABLE_HEADER_GROUP = new Style$Display$11;
  TABLE_FOOTER_GROUP = new Style$Display$12;
  TABLE_ROW_GROUP = new Style$Display$13;
  TABLE_CELL = new Style$Display$14;
  TABLE_COLUMN = new Style$Display$15;
  TABLE_ROW = new Style$Display$16;
  INITIAL = new Style$Display$17;
}

function Style$Display(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_1(){
  $clinit_Style$Display();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Display_2_classLit, 1), $intern_4, 8, 0, [NONE, BLOCK, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, RUN_IN, TABLE, TABLE_CAPTION, TABLE_COLUMN_GROUP, TABLE_HEADER_GROUP, TABLE_FOOTER_GROUP, TABLE_ROW_GROUP, TABLE_CELL, TABLE_COLUMN, TABLE_ROW, INITIAL]);
}

defineClass(8, 5, $intern_7);
var BLOCK, INITIAL, INLINE, INLINE_BLOCK, INLINE_TABLE, LIST_ITEM, NONE, RUN_IN, TABLE, TABLE_CAPTION, TABLE_CELL, TABLE_COLUMN, TABLE_COLUMN_GROUP, TABLE_FOOTER_GROUP, TABLE_HEADER_GROUP, TABLE_ROW, TABLE_ROW_GROUP;
var Lcom_google_gwt_dom_client_Style$Display_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display', 8, values_1);
function Style$Display$1(){
  Style$Display.call(this, 'NONE', 0);
}

defineClass(185, 8, $intern_7, Style$Display$1);
var Lcom_google_gwt_dom_client_Style$Display$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/1', 185, null);
function Style$Display$10(){
  Style$Display.call(this, 'TABLE_COLUMN_GROUP', 9);
}

defineClass(194, 8, $intern_7, Style$Display$10);
var Lcom_google_gwt_dom_client_Style$Display$10_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/10', 194, null);
function Style$Display$11(){
  Style$Display.call(this, 'TABLE_HEADER_GROUP', 10);
}

defineClass(195, 8, $intern_7, Style$Display$11);
var Lcom_google_gwt_dom_client_Style$Display$11_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/11', 195, null);
function Style$Display$12(){
  Style$Display.call(this, 'TABLE_FOOTER_GROUP', 11);
}

defineClass(196, 8, $intern_7, Style$Display$12);
var Lcom_google_gwt_dom_client_Style$Display$12_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/12', 196, null);
function Style$Display$13(){
  Style$Display.call(this, 'TABLE_ROW_GROUP', 12);
}

defineClass(197, 8, $intern_7, Style$Display$13);
var Lcom_google_gwt_dom_client_Style$Display$13_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/13', 197, null);
function Style$Display$14(){
  Style$Display.call(this, 'TABLE_CELL', 13);
}

defineClass(198, 8, $intern_7, Style$Display$14);
var Lcom_google_gwt_dom_client_Style$Display$14_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/14', 198, null);
function Style$Display$15(){
  Style$Display.call(this, 'TABLE_COLUMN', 14);
}

defineClass(199, 8, $intern_7, Style$Display$15);
var Lcom_google_gwt_dom_client_Style$Display$15_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/15', 199, null);
function Style$Display$16(){
  Style$Display.call(this, 'TABLE_ROW', 15);
}

defineClass(200, 8, $intern_7, Style$Display$16);
var Lcom_google_gwt_dom_client_Style$Display$16_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/16', 200, null);
function Style$Display$17(){
  Style$Display.call(this, 'INITIAL', 16);
}

defineClass(201, 8, $intern_7, Style$Display$17);
var Lcom_google_gwt_dom_client_Style$Display$17_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/17', 201, null);
function Style$Display$2(){
  Style$Display.call(this, 'BLOCK', 1);
}

defineClass(186, 8, $intern_7, Style$Display$2);
var Lcom_google_gwt_dom_client_Style$Display$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/2', 186, null);
function Style$Display$3(){
  Style$Display.call(this, 'INLINE', 2);
}

defineClass(187, 8, $intern_7, Style$Display$3);
var Lcom_google_gwt_dom_client_Style$Display$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/3', 187, null);
function Style$Display$4(){
  Style$Display.call(this, 'INLINE_BLOCK', 3);
}

defineClass(188, 8, $intern_7, Style$Display$4);
var Lcom_google_gwt_dom_client_Style$Display$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/4', 188, null);
function Style$Display$5(){
  Style$Display.call(this, 'INLINE_TABLE', 4);
}

defineClass(189, 8, $intern_7, Style$Display$5);
var Lcom_google_gwt_dom_client_Style$Display$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/5', 189, null);
function Style$Display$6(){
  Style$Display.call(this, 'LIST_ITEM', 5);
}

defineClass(190, 8, $intern_7, Style$Display$6);
var Lcom_google_gwt_dom_client_Style$Display$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/6', 190, null);
function Style$Display$7(){
  Style$Display.call(this, 'RUN_IN', 6);
}

defineClass(191, 8, $intern_7, Style$Display$7);
var Lcom_google_gwt_dom_client_Style$Display$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/7', 191, null);
function Style$Display$8(){
  Style$Display.call(this, 'TABLE', 7);
}

defineClass(192, 8, $intern_7, Style$Display$8);
var Lcom_google_gwt_dom_client_Style$Display$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/8', 192, null);
function Style$Display$9(){
  Style$Display.call(this, 'TABLE_CAPTION', 8);
}

defineClass(193, 8, $intern_7, Style$Display$9);
var Lcom_google_gwt_dom_client_Style$Display$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Display/9', 193, null);
function $clinit_Style$TextAlign(){
  $clinit_Style$TextAlign = emptyMethod;
  CENTER = new Style$TextAlign$1;
  JUSTIFY = new Style$TextAlign$2;
  LEFT = new Style$TextAlign$3;
  RIGHT = new Style$TextAlign$4;
}

function Style$TextAlign(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_2(){
  $clinit_Style$TextAlign();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit, 1), $intern_4, 35, 0, [CENTER, JUSTIFY, LEFT, RIGHT]);
}

defineClass(35, 5, $intern_8);
var CENTER, JUSTIFY, LEFT, RIGHT;
var Lcom_google_gwt_dom_client_Style$TextAlign_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign', 35, values_2);
function Style$TextAlign$1(){
  Style$TextAlign.call(this, 'CENTER', 0);
}

defineClass(202, 35, $intern_8, Style$TextAlign$1);
var Lcom_google_gwt_dom_client_Style$TextAlign$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/1', 202, null);
function Style$TextAlign$2(){
  Style$TextAlign.call(this, 'JUSTIFY', 1);
}

defineClass(203, 35, $intern_8, Style$TextAlign$2);
var Lcom_google_gwt_dom_client_Style$TextAlign$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/2', 203, null);
function Style$TextAlign$3(){
  Style$TextAlign.call(this, 'LEFT', 2);
}

defineClass(204, 35, $intern_8, Style$TextAlign$3);
var Lcom_google_gwt_dom_client_Style$TextAlign$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/3', 204, null);
function Style$TextAlign$4(){
  Style$TextAlign.call(this, 'RIGHT', 3);
}

defineClass(205, 35, $intern_8, Style$TextAlign$4);
var Lcom_google_gwt_dom_client_Style$TextAlign$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/TextAlign/4', 205, null);
function $clinit_Style$Unit(){
  $clinit_Style$Unit = emptyMethod;
  PX = new Style$Unit$1;
  PCT = new Style$Unit$2;
  EM = new Style$Unit$3;
  EX = new Style$Unit$4;
  PT = new Style$Unit$5;
  PC = new Style$Unit$6;
  IN = new Style$Unit$7;
  CM = new Style$Unit$8;
  MM = new Style$Unit$9;
}

function Style$Unit(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_3(){
  $clinit_Style$Unit();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$Unit_2_classLit, 1), $intern_4, 19, 0, [PX, PCT, EM, EX, PT, PC, IN, CM, MM]);
}

defineClass(19, 5, $intern_9);
var CM, EM, EX, IN, MM, PC, PCT, PT, PX;
var Lcom_google_gwt_dom_client_Style$Unit_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit', 19, values_3);
function Style$Unit$1(){
  Style$Unit.call(this, 'PX', 0);
}

defineClass(176, 19, $intern_9, Style$Unit$1);
var Lcom_google_gwt_dom_client_Style$Unit$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/1', 176, null);
function Style$Unit$2(){
  Style$Unit.call(this, 'PCT', 1);
}

defineClass(177, 19, $intern_9, Style$Unit$2);
var Lcom_google_gwt_dom_client_Style$Unit$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/2', 177, null);
function Style$Unit$3(){
  Style$Unit.call(this, 'EM', 2);
}

defineClass(178, 19, $intern_9, Style$Unit$3);
var Lcom_google_gwt_dom_client_Style$Unit$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/3', 178, null);
function Style$Unit$4(){
  Style$Unit.call(this, 'EX', 3);
}

defineClass(179, 19, $intern_9, Style$Unit$4);
var Lcom_google_gwt_dom_client_Style$Unit$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/4', 179, null);
function Style$Unit$5(){
  Style$Unit.call(this, 'PT', 4);
}

defineClass(180, 19, $intern_9, Style$Unit$5);
var Lcom_google_gwt_dom_client_Style$Unit$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/5', 180, null);
function Style$Unit$6(){
  Style$Unit.call(this, 'PC', 5);
}

defineClass(181, 19, $intern_9, Style$Unit$6);
var Lcom_google_gwt_dom_client_Style$Unit$6_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/6', 181, null);
function Style$Unit$7(){
  Style$Unit.call(this, 'IN', 6);
}

defineClass(182, 19, $intern_9, Style$Unit$7);
var Lcom_google_gwt_dom_client_Style$Unit$7_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/7', 182, null);
function Style$Unit$8(){
  Style$Unit.call(this, 'CM', 7);
}

defineClass(183, 19, $intern_9, Style$Unit$8);
var Lcom_google_gwt_dom_client_Style$Unit$8_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/8', 183, null);
function Style$Unit$9(){
  Style$Unit.call(this, 'MM', 8);
}

defineClass(184, 19, $intern_9, Style$Unit$9);
var Lcom_google_gwt_dom_client_Style$Unit$9_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/Unit/9', 184, null);
function $clinit_Style$WhiteSpace(){
  $clinit_Style$WhiteSpace = emptyMethod;
  NORMAL = new Style$WhiteSpace$1;
  NOWRAP = new Style$WhiteSpace$2;
  PRE = new Style$WhiteSpace$3;
  PRE_LINE = new Style$WhiteSpace$4;
  PRE_WRAP = new Style$WhiteSpace$5;
}

function Style$WhiteSpace(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_4(){
  $clinit_Style$WhiteSpace();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit, 1), $intern_4, 27, 0, [NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP]);
}

defineClass(27, 5, $intern_10);
var NORMAL, NOWRAP, PRE, PRE_LINE, PRE_WRAP;
var Lcom_google_gwt_dom_client_Style$WhiteSpace_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace', 27, values_4);
function Style$WhiteSpace$1(){
  Style$WhiteSpace.call(this, 'NORMAL', 0);
}

defineClass(206, 27, $intern_10, Style$WhiteSpace$1);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$1_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/1', 206, null);
function Style$WhiteSpace$2(){
  Style$WhiteSpace.call(this, 'NOWRAP', 1);
}

defineClass(207, 27, $intern_10, Style$WhiteSpace$2);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$2_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/2', 207, null);
function Style$WhiteSpace$3(){
  Style$WhiteSpace.call(this, 'PRE', 2);
}

defineClass(208, 27, $intern_10, Style$WhiteSpace$3);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$3_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/3', 208, null);
function Style$WhiteSpace$4(){
  Style$WhiteSpace.call(this, 'PRE_LINE', 3);
}

defineClass(209, 27, $intern_10, Style$WhiteSpace$4);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$4_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/4', 209, null);
function Style$WhiteSpace$5(){
  Style$WhiteSpace.call(this, 'PRE_WRAP', 4);
}

defineClass(210, 27, $intern_10, Style$WhiteSpace$5);
var Lcom_google_gwt_dom_client_Style$WhiteSpace$5_2_classLit = createForEnum('com.google.gwt.dom.client', 'Style/WhiteSpace/5', 210, null);
defineClass(316, 1, {});
_.toString$ = function toString_4(){
  return 'An event type';
}
;
var Lcom_google_web_bindery_event_shared_Event_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event', 316);
function $overrideSource(this$static, source){
  this$static.source = source;
}

defineClass(315, 316, {});
_.revive = function revive(){
  this.dead = false;
  this.source = null;
}
;
_.dead = false;
var Lcom_google_gwt_event_shared_GwtEvent_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent', 315);
function $setNativeEvent(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function $setRelativeElement(this$static, relativeElem){
  this$static.relativeElem = relativeElem;
}

function fireNativeEvent(nativeEvent, handlerSource, relativeElem){
  var currentNative, currentRelativeElem, type_0, type$iterator, types;
  if (registered) {
    types = dynamicCast($unsafeGet(registered, nativeEvent.type), 31);
    if (types) {
      for (type$iterator = types.iterator(); type$iterator.hasNext();) {
        type_0 = dynamicCast(type$iterator.next(), 56);
        currentNative = type_0.flyweight.nativeEvent;
        currentRelativeElem = type_0.flyweight.relativeElem;
        $setNativeEvent(type_0.flyweight, nativeEvent);
        $setRelativeElement(type_0.flyweight, relativeElem);
        $fireEvent(handlerSource, type_0.flyweight);
        $setNativeEvent(type_0.flyweight, currentNative);
        $setRelativeElement(type_0.flyweight, currentRelativeElem);
      }
    }
  }
}

defineClass(337, 315, {});
_.getAssociatedType = function getAssociatedType(){
  return this.getAssociatedType_0();
}
;
var registered;
var Lcom_google_gwt_event_dom_client_DomEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent', 337);
defineClass(338, 337, {});
var Lcom_google_gwt_event_dom_client_HumanInputEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'HumanInputEvent', 338);
defineClass(339, 338, {});
var Lcom_google_gwt_event_dom_client_MouseEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseEvent', 339);
function $clinit_ClickEvent(){
  $clinit_ClickEvent = emptyMethod;
  TYPE = new DomEvent$Type('click', new ClickEvent);
}

function ClickEvent(){
}

defineClass(212, 339, {}, ClickEvent);
_.dispatch = function dispatch(handler){
  dynamicCast(handler, 61).onClick(this);
}
;
_.getAssociatedType_0 = function getAssociatedType_0(){
  return TYPE;
}
;
var TYPE;
var Lcom_google_gwt_event_dom_client_ClickEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'ClickEvent', 212);
defineClass(124, 1, {});
_.hashCode$ = function hashCode_2(){
  return this.index_0;
}
;
_.toString$ = function toString_5(){
  return 'Event type';
}
;
_.index_0 = 0;
var nextHashCode = 0;
var Lcom_google_web_bindery_event_shared_Event$Type_2_classLit = createForClass('com.google.web.bindery.event.shared', 'Event/Type', 124);
function GwtEvent$Type(){
  this.index_0 = ++nextHashCode;
}

defineClass(36, 124, {}, GwtEvent$Type);
var Lcom_google_gwt_event_shared_GwtEvent$Type_2_classLit = createForClass('com.google.gwt.event.shared', 'GwtEvent/Type', 36);
function DomEvent$Type(eventName, flyweight){
  var types;
  GwtEvent$Type.call(this);
  this.flyweight = flyweight;
  !registered && (registered = new PrivateMap);
  types = dynamicCast($unsafeGet(registered, eventName), 31);
  if (!types) {
    types = new ArrayList;
    $unsafePut(registered, eventName, types);
  }
  types.add_1(this);
  this.name_0 = eventName;
}

defineClass(56, 36, {56:1}, DomEvent$Type);
var Lcom_google_gwt_event_dom_client_DomEvent$Type_2_classLit = createForClass('com.google.gwt.event.dom.client', 'DomEvent/Type', 56);
function $clinit_MouseOutEvent(){
  $clinit_MouseOutEvent = emptyMethod;
  TYPE_0 = new DomEvent$Type('mouseout', new MouseOutEvent);
}

function MouseOutEvent(){
}

defineClass(295, 339, {}, MouseOutEvent);
_.dispatch = function dispatch_0(handler){
  $hide(dynamicCast(handler, 351).this$01.popup);
}
;
_.getAssociatedType_0 = function getAssociatedType_1(){
  return TYPE_0;
}
;
var TYPE_0;
var Lcom_google_gwt_event_dom_client_MouseOutEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOutEvent', 295);
function $clinit_MouseOverEvent(){
  $clinit_MouseOverEvent = emptyMethod;
  TYPE_1 = new DomEvent$Type('mouseover', new MouseOverEvent);
}

function $dispatch(handler){
  $setPopupPosition(handler.this$01.popup, $getAbsoluteLeft(handler.this$01.element), $getAbsoluteTop(handler.this$01.element) + $getPropertyInt(handler.this$01.element, 'offsetHeight'));
  $show(handler.this$01.popup);
}

function MouseOverEvent(){
}

defineClass(294, 339, {}, MouseOverEvent);
_.dispatch = function dispatch_1(handler){
  $dispatch(dynamicCast(handler, 350));
}
;
_.getAssociatedType_0 = function getAssociatedType_2(){
  return TYPE_1;
}
;
var TYPE_1;
var Lcom_google_gwt_event_dom_client_MouseOverEvent_2_classLit = createForClass('com.google.gwt.event.dom.client', 'MouseOverEvent', 294);
function $unsafeGet(this$static, key){
  return this$static.map_0[key];
}

function $unsafePut(this$static, key, value_0){
  this$static.map_0[key] = value_0;
}

function PrivateMap(){
  this.map_0 = {};
}

defineClass(217, 1, {}, PrivateMap);
var Lcom_google_gwt_event_dom_client_PrivateMap_2_classLit = createForClass('com.google.gwt.event.dom.client', 'PrivateMap', 217);
function CloseEvent_0(){
}

function fire_0(source){
  var event_0;
  if (TYPE_2) {
    event_0 = new CloseEvent_0;
    source.fireEvent_0(event_0);
  }
}

defineClass(213, 315, {}, CloseEvent_0);
_.dispatch = function dispatch_2(handler){
  dynamicCast(handler, 346);
  detachWidgets();
}
;
_.getAssociatedType = function getAssociatedType_3(){
  return TYPE_2;
}
;
var TYPE_2;
var Lcom_google_gwt_event_logical_shared_CloseEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'CloseEvent', 213);
function ResizeEvent(){
}

function fire_1(source){
  var event_0;
  if (TYPE_3) {
    event_0 = new ResizeEvent;
    $fireEvent_0(source, event_0);
  }
}

defineClass(306, 315, {}, ResizeEvent);
_.dispatch = function dispatch_3(handler){
  dynamicCast(handler, 347);
  $onResize();
}
;
_.getAssociatedType = function getAssociatedType_4(){
  return TYPE_3;
}
;
var TYPE_3;
var Lcom_google_gwt_event_logical_shared_ResizeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ResizeEvent', 306);
function $dispatch_0(handler){
  handler.this$01.autoHideOnHistoryEvents && $hide(handler.this$01);
}

function ValueChangeEvent(){
}

function fire_2(source){
  var event_0;
  if (TYPE_4) {
    event_0 = new ValueChangeEvent;
    source.fireEvent_0(event_0);
  }
}

defineClass(214, 315, {}, ValueChangeEvent);
_.dispatch = function dispatch_4(handler){
  $dispatch_0(dynamicCast(handler, 349));
}
;
_.getAssociatedType = function getAssociatedType_5(){
  return TYPE_4;
}
;
var TYPE_4;
var Lcom_google_gwt_event_logical_shared_ValueChangeEvent_2_classLit = createForClass('com.google.gwt.event.logical.shared', 'ValueChangeEvent', 214);
function $addHandler_0(this$static, type_0, handler){
  return new LegacyHandlerWrapper($doAdd(this$static.eventBus, type_0, handler));
}

function $fireEvent_0(this$static, event_0){
  var e, oldSource;
  !event_0.dead || event_0.revive();
  oldSource = event_0.source;
  $overrideSource(event_0, this$static.source);
  try {
    $doFire(this$static.eventBus, event_0);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 47)) {
      e = $e0;
      throw new UmbrellaException_0(e.causes);
    }
     else 
      throw unwrap_5($e0);
  }
   finally {
    oldSource == null?(event_0.dead = true , event_0.source = null):(event_0.source = oldSource);
  }
}

function $isEventHandled(this$static, e){
  return $isEventHandled_0(this$static.eventBus, e);
}

function HandlerManager(source){
  HandlerManager_0.call(this, source, false);
}

function HandlerManager_0(source, fireInReverseOrder){
  this.eventBus = new HandlerManager$Bus(fireInReverseOrder);
  this.source = source;
}

defineClass(44, 1, {12:1}, HandlerManager, HandlerManager_0);
_.fireEvent_0 = function fireEvent_0(event_0){
  $fireEvent_0(this, event_0);
}
;
var Lcom_google_gwt_event_shared_HandlerManager_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager', 44);
defineClass(335, 1, {});
var Lcom_google_web_bindery_event_shared_EventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'EventBus', 335);
function $defer(this$static, command){
  !this$static.deferredDeltas && (this$static.deferredDeltas = new ArrayList);
  $add_5(this$static.deferredDeltas, command);
}

function $doAdd(this$static, type_0, handler){
  if (!type_0) {
    throw new NullPointerException_0('Cannot add a handler with a null type');
  }
  if (!handler) {
    throw new NullPointerException_0('Cannot add a null handler');
  }
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$2(this$static, type_0, handler)):$doAddNow(this$static, type_0, null, handler);
  return new SimpleEventBus$1(this$static, type_0, handler);
}

function $doAddNow(this$static, type_0, source, handler){
  var l;
  l = $ensureHandlerList(this$static, type_0, source);
  l.add_1(handler);
}

function $doFire(this$static, event_0){
  var causes, e, handler, handlers, it;
  if (!event_0) {
    throw new NullPointerException_0('Cannot fire null event');
  }
  try {
    ++this$static.firingDepth;
    handlers = $getDispatchList(this$static, event_0.getAssociatedType());
    causes = null;
    it = this$static.isReverseOrder?handlers.listIterator_0(handlers.size_1()):handlers.listIterator();
    while (this$static.isReverseOrder?it.hasPrevious():it.hasNext()) {
      handler = this$static.isReverseOrder?it.previous():it.next();
      try {
        event_0.dispatch(dynamicCast(handler, 29));
      }
       catch ($e0) {
        $e0 = wrap($e0);
        if (instanceOf($e0, 7)) {
          e = $e0;
          !causes && (causes = new HashSet);
          $add_6(causes, e);
        }
         else 
          throw unwrap_5($e0);
      }
    }
    if (causes) {
      throw new UmbrellaException(causes);
    }
  }
   finally {
    --this$static.firingDepth;
    this$static.firingDepth == 0 && $handleQueuedAddsAndRemoves(this$static);
  }
}

function $doRemoveNow(this$static, type_0, source, handler){
  var l, removed, sourceMap;
  l = $getHandlerList(this$static, type_0, source);
  removed = l.remove(handler);
  removed && l.isEmpty() && (sourceMap = dynamicCast($get_4(this$static.map_0, type_0), 26) , dynamicCast($remove_12(sourceMap.hashCodeMap, source), 31) , sourceMap.size_0 == 0 && $remove_7(this$static.map_0, type_0) , undefined);
}

function $ensureHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_4(this$static.map_0, type_0), 26);
  if (!sourceMap) {
    sourceMap = new HashMap;
    $put_0(this$static.map_0, type_0, sourceMap);
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 31);
  if (!handlers) {
    handlers = new ArrayList;
    $put_1(sourceMap.hashCodeMap, source, handlers);
  }
  return handlers;
}

function $getDispatchList(this$static, type_0){
  var directHandlers;
  directHandlers = $getHandlerList(this$static, type_0, null);
  return directHandlers;
}

function $getHandlerList(this$static, type_0, source){
  var handlers, sourceMap;
  sourceMap = dynamicCast($get_4(this$static.map_0, type_0), 26);
  if (!sourceMap) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  handlers = dynamicCast(getEntryValueOrNull($getEntry(sourceMap.hashCodeMap, source)), 31);
  if (!handlers) {
    return $clinit_Collections() , $clinit_Collections() , EMPTY_LIST;
  }
  return handlers;
}

function $handleQueuedAddsAndRemoves(this$static){
  var c, c$iterator;
  if (this$static.deferredDeltas) {
    try {
      for (c$iterator = new AbstractList$IteratorImpl(this$static.deferredDeltas); c$iterator.i < c$iterator.this$01_0.size_1();) {
        c = (checkCriticalElement(c$iterator.i < c$iterator.this$01_0.size_1()) , dynamicCast(c$iterator.this$01_0.get_0(c$iterator.last = c$iterator.i++), 312));
        c.execute_1();
      }
    }
     finally {
      this$static.deferredDeltas = null;
    }
  }
}

function $isEventHandled_0(this$static, eventKey){
  return $containsKey_0(this$static.map_0, eventKey);
}

defineClass(148, 335, {});
_.firingDepth = 0;
_.isReverseOrder = false;
var Lcom_google_web_bindery_event_shared_SimpleEventBus_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus', 148);
function $doRemove(this$static, type_0, source, handler){
  this$static.firingDepth > 0?$defer(this$static, new SimpleEventBus$3(this$static, type_0, source, handler)):$doRemoveNow(this$static, type_0, source, handler);
}

function HandlerManager$Bus(fireInReverseOrder){
  this.map_0 = new HashMap;
  this.isReverseOrder = fireInReverseOrder;
}

defineClass(149, 148, {}, HandlerManager$Bus);
var Lcom_google_gwt_event_shared_HandlerManager$Bus_2_classLit = createForClass('com.google.gwt.event.shared', 'HandlerManager/Bus', 149);
function LegacyHandlerWrapper(real){
  this.real = real;
}

defineClass(218, 1, {}, LegacyHandlerWrapper);
var Lcom_google_gwt_event_shared_LegacyHandlerWrapper_2_classLit = createForClass('com.google.gwt.event.shared', 'LegacyHandlerWrapper', 218);
function UmbrellaException(causes){
  RuntimeException_1.call(this, makeMessage(causes), makeCause(causes));
  this.causes = causes;
}

function makeCause(causes){
  var iterator;
  iterator = causes.iterator();
  if (!iterator.hasNext()) {
    return null;
  }
  return dynamicCast(iterator.next(), 7);
}

function makeMessage(causes){
  var b, count, first, t, t$iterator;
  count = causes.size_1();
  if (count == 0) {
    return null;
  }
  b = new StringBuilder_1(count == 1?'Exception caught: ':count + ' exceptions caught: ');
  first = true;
  for (t$iterator = causes.iterator(); t$iterator.hasNext();) {
    t = dynamicCast(t$iterator.next(), 7);
    first?(first = false):(b.string += '; ' , b);
    $append_0(b, t.getMessage());
  }
  return b.string;
}

defineClass(47, 18, $intern_11, UmbrellaException);
var Lcom_google_web_bindery_event_shared_UmbrellaException_2_classLit = createForClass('com.google.web.bindery.event.shared', 'UmbrellaException', 47);
function UmbrellaException_0(causes){
  UmbrellaException.call(this, causes);
}

defineClass(97, 47, $intern_11, UmbrellaException_0);
var Lcom_google_gwt_event_shared_UmbrellaException_2_classLit = createForClass('com.google.gwt.event.shared', 'UmbrellaException', 97);
function getDirectionOnElement(elem){
  var dirPropertyValue;
  dirPropertyValue = $getPropertyString(elem, 'dir');
  if ($equalsIgnoreCase('rtl', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , RTL;
  }
   else if ($equalsIgnoreCase('ltr', dirPropertyValue)) {
    return $clinit_HasDirection$Direction() , LTR;
  }
  return $clinit_HasDirection$Direction() , DEFAULT;
}

function setDirectionOnElement(elem, direction){
  switch (direction.ordinal) {
    case 0:
      {
        $setPropertyString(elem, 'dir', 'rtl');
        break;
      }

    case 1:
      {
        $setPropertyString(elem, 'dir', 'ltr');
        break;
      }

    case 2:
      {
        getDirectionOnElement(elem) != ($clinit_HasDirection$Direction() , DEFAULT) && $setPropertyString(elem, 'dir', '');
        break;
      }

  }
}

function $clinit_DateTimeFormat(){
  $clinit_DateTimeFormat = emptyMethod;
  new HashMap;
}

function $addPart(this$static, buf, count){
  var oldLength;
  if (buf.string.length > 0) {
    $add_5(this$static.patternParts, new DateTimeFormat$PatternPart(buf.string, count));
    oldLength = buf.string.length;
    0 < oldLength?(buf.string = $substring_0(buf.string, 0, 0)):0 > oldLength && (buf.string += valueOf_1(initDim(C_classLit, $intern_4, 0, -oldLength, 7, 1)));
  }
}

function $format(this$static, date, timeZone){
  var ch_0, diff, i, j, keepDate, keepTime, n, toAppendTo, trailQuote;
  !timeZone && (timeZone = createTimeZone(date.jsdate.getTimezoneOffset()));
  diff = (date.jsdate.getTimezoneOffset() - timeZone.standardOffset) * 60000;
  keepDate = new Date_1(add_1(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  keepTime = keepDate;
  if (keepDate.jsdate.getTimezoneOffset() != date.jsdate.getTimezoneOffset()) {
    diff > 0?(diff -= 86400000):(diff += 86400000);
    keepTime = new Date_1(add_1(fromDouble(date.jsdate.getTime()), fromInt(diff)));
  }
  toAppendTo = new StringBuilder_0;
  n = this$static.pattern.length;
  for (i = 0; i < n;) {
    ch_0 = $charAt(this$static.pattern, i);
    if (ch_0 >= 97 && ch_0 <= 122 || ch_0 >= 65 && ch_0 <= 90) {
      for (j = i + 1; j < n && $charAt(this$static.pattern, j) == ch_0; ++j)
      ;
      $subFormat(toAppendTo, ch_0, j - i, keepDate, keepTime, timeZone);
      i = j;
    }
     else if (ch_0 == 39) {
      ++i;
      if (i < n && $charAt(this$static.pattern, i) == 39) {
        toAppendTo.string += "'";
        ++i;
        continue;
      }
      trailQuote = false;
      while (!trailQuote) {
        j = i;
        while (j < n && $charAt(this$static.pattern, j) != 39) {
          ++j;
        }
        if (j >= n) {
          throw new IllegalArgumentException("Missing trailing '");
        }
        j + 1 < n && $charAt(this$static.pattern, j + 1) == 39?++j:(trailQuote = true);
        $append_0(toAppendTo, $substring_0(this$static.pattern, i, j));
        i = j + 1;
      }
    }
     else {
      toAppendTo.string += charToString(ch_0);
      ++i;
    }
  }
  return toAppendTo.string;
}

function $formatFractionalSeconds(buf, count, date){
  var time, value_0;
  time = fromDouble(date.jsdate.getTime());
  if (lt(time, {l:0, m:0, h:0})) {
    value_0 = 1000 - toInt(mod(neg(time), {l:1000, m:0, h:0}));
    value_0 == 1000 && (value_0 = 0);
  }
   else {
    value_0 = toInt(mod(time, {l:1000, m:0, h:0}));
  }
  if (count == 1) {
    value_0 = ~~((value_0 + 50) / 100) < 9?~~((value_0 + 50) / 100):9;
    buf.string += String.fromCharCode(48 + value_0 & $intern_2);
  }
   else if (count == 2) {
    value_0 = ~~((value_0 + 5) / 10) < 99?~~((value_0 + 5) / 10):99;
    $zeroPaddingNumber(buf, value_0, 2);
  }
   else {
    $zeroPaddingNumber(buf, value_0, 3);
    count > 3 && $zeroPaddingNumber(buf, 0, count - 3);
  }
}

function $formatMonth(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getMonth();
  switch (count) {
    case 5:
      $append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_0]);
      break;
    case 4:
      $append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_0]);
      break;
    case 3:
      $append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_0]);
      break;
    default:$zeroPaddingNumber(buf, value_0 + 1, count);
  }
}

function $formatYear(buf, count, date){
  var value_0;
  value_0 = date.jsdate.getFullYear() - 1900 + 1900;
  value_0 < 0 && (value_0 = -value_0);
  switch (count) {
    case 1:
      buf.string += value_0;
      break;
    case 2:
      $zeroPaddingNumber(buf, value_0 % 100, 2);
      break;
    default:$zeroPaddingNumber(buf, value_0, count);
  }
}

function $getNextCharCountInPattern(pattern, start_0){
  var ch_0, next;
  ch_0 = pattern.charCodeAt(start_0);
  next = start_0 + 1;
  while (next < pattern.length && pattern.charCodeAt(next) == ch_0) {
    ++next;
  }
  return next - start_0;
}

function $identifyAbutStart(this$static){
  var abut, i, len;
  abut = false;
  len = this$static.patternParts.array.length;
  for (i = 0; i < len; i++) {
    if ($isNumeric(dynamicCast($get_5(this$static.patternParts, i), 58))) {
      if (!abut && i + 1 < len && $isNumeric(dynamicCast($get_5(this$static.patternParts, i + 1), 58))) {
        abut = true;
        dynamicCast($get_5(this$static.patternParts, i), 58).abutStart = true;
      }
    }
     else {
      abut = false;
    }
  }
}

function $isNumeric(part){
  var i;
  if (part.count <= 0) {
    return false;
  }
  i = $indexOf_0('MLydhHmsSDkK', fromCodePoint(part.text_0.charCodeAt(0)));
  return i > 1 || i >= 0 && part.count < 3;
}

function $parsePattern(this$static, pattern){
  var buf, ch_0, count, i, inQuote;
  buf = new StringBuilder_0;
  inQuote = false;
  for (i = 0; i < pattern.length; i++) {
    ch_0 = pattern.charCodeAt(i);
    if (ch_0 == 32) {
      $addPart(this$static, buf, 0);
      buf.string += ' ';
      $addPart(this$static, buf, 0);
      while (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 32) {
        ++i;
      }
      continue;
    }
    if (inQuote) {
      if (ch_0 == 39) {
        if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
          buf.string += "'";
          ++i;
        }
         else {
          inQuote = false;
        }
      }
       else {
        buf.string += charToString(ch_0);
      }
      continue;
    }
    if ($indexOf_0('GyMLdkHmsSEcDahKzZv', fromCodePoint(ch_0)) > 0) {
      $addPart(this$static, buf, 0);
      buf.string += charToString(ch_0);
      count = $getNextCharCountInPattern(pattern, i);
      $addPart(this$static, buf, count);
      i += count - 1;
      continue;
    }
    if (ch_0 == 39) {
      if (i + 1 < pattern.length && pattern.charCodeAt(i + 1) == 39) {
        buf.string += "'";
        ++i;
      }
       else {
        inQuote = true;
      }
    }
     else {
      buf.string += charToString(ch_0);
    }
  }
  $addPart(this$static, buf, 0);
  $identifyAbutStart(this$static);
}

function $subFormat(buf, ch_0, count, adjustedDate, adjustedTime, timezone){
  var value_0, value_1, value_2, value_3, value_4, value_5, value_6, value_7, value_8, value_9, value_10, value_11;
  switch (ch_0) {
    case 71:
      value_0 = adjustedDate.jsdate.getFullYear() - 1900 >= -1900?1:0;
      count >= 4?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Before Christ', 'Anno Domini'])[value_0]):$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['BC', 'AD'])[value_0]);
      break;
    case 121:
      $formatYear(buf, count, adjustedDate);
      break;
    case 77:
      $formatMonth(buf, count, adjustedDate);
      break;
    case 107:
      value_1 = adjustedTime.jsdate.getHours();
      value_1 == 0?$zeroPaddingNumber(buf, 24, count):$zeroPaddingNumber(buf, value_1, count);
      break;
    case 83:
      $formatFractionalSeconds(buf, count, adjustedTime);
      break;
    case 69:
      value_2 = adjustedDate.jsdate.getDay();
      count == 5?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_2]):count == 4?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_2]):$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_2]);
      break;
    case 97:
      adjustedTime.jsdate.getHours() >= 12 && adjustedTime.jsdate.getHours() < 24?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['AM', 'PM'])[1]):$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['AM', 'PM'])[0]);
      break;
    case 104:
      value_3 = adjustedTime.jsdate.getHours() % 12;
      value_3 == 0?$zeroPaddingNumber(buf, 12, count):$zeroPaddingNumber(buf, value_3, count);
      break;
    case 75:
      value_4 = adjustedTime.jsdate.getHours() % 12;
      $zeroPaddingNumber(buf, value_4, count);
      break;
    case 72:
      value_5 = adjustedTime.jsdate.getHours();
      $zeroPaddingNumber(buf, value_5, count);
      break;
    case 99:
      value_6 = adjustedDate.jsdate.getDay();
      count == 5?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['S', 'M', 'T', 'W', 'T', 'F', 'S'])[value_6]):count == 4?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'])[value_6]):count == 3?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])[value_6]):$zeroPaddingNumber(buf, value_6, 1);
      break;
    case 76:
      value_7 = adjustedDate.jsdate.getMonth();
      count == 5?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'])[value_7]):count == 4?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'])[value_7]):count == 3?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'])[value_7]):$zeroPaddingNumber(buf, value_7 + 1, count);
      break;
    case 81:
      value_8 = ~~(adjustedDate.jsdate.getMonth() / 3);
      count < 4?$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Q1', 'Q2', 'Q3', 'Q4'])[value_8]):$append_0(buf, initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter'])[value_8]);
      break;
    case 100:
      value_9 = adjustedDate.jsdate.getDate();
      $zeroPaddingNumber(buf, value_9, count);
      break;
    case 109:
      value_10 = adjustedTime.jsdate.getMinutes();
      $zeroPaddingNumber(buf, value_10, count);
      break;
    case 115:
      value_11 = adjustedTime.jsdate.getSeconds();
      $zeroPaddingNumber(buf, value_11, count);
      break;
    case 122:
      count < 4?$append_0(buf, timezone.tzNames[0]):$append_0(buf, timezone.tzNames[1]);
      break;
    case 118:
      $append_0(buf, timezone.timezoneID);
      break;
    case 90:
      count < 3?$append_0(buf, $getRFCTimeZoneString(timezone)):count == 3?$append_0(buf, $getISOTimeZoneString(timezone)):$append_0(buf, composeGMTString(timezone.standardOffset));
      break;
    default:return false;
  }
  return true;
}

function $zeroPaddingNumber(buf, value_0, minWidth){
  var b, i;
  b = 10;
  for (i = 0; i < minWidth - 1; i++) {
    value_0 < b && (buf.string += '0' , buf);
    b *= 10;
  }
  buf.string += value_0;
}

defineClass(293, 1, {});
var Lcom_google_gwt_i18n_shared_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat', 293);
function $clinit_DateTimeFormat_0(){
  $clinit_DateTimeFormat_0 = emptyMethod;
  $clinit_DateTimeFormat();
  cache = new HashMap;
}

function DateTimeFormat(pattern){
  $clinit_DateTimeFormat();
  this.patternParts = new ArrayList;
  this.pattern = pattern;
  $parsePattern(this, pattern);
}

function getFormat(pattern, dtfi){
  $clinit_DateTimeFormat_0();
  var defaultDtfi, dtf;
  defaultDtfi = $getDateTimeFormatInfo(($clinit_LocaleInfo() , $clinit_LocaleInfo() , instance_0));
  dtf = null;
  dtfi == defaultDtfi && (dtf = dynamicCast($getStringValue(cache, pattern), 86));
  if (!dtf) {
    dtf = new DateTimeFormat(pattern);
    dtfi == defaultDtfi && $putStringValue(cache, pattern, dtf);
  }
  return dtf;
}

defineClass(86, 293, {86:1}, DateTimeFormat);
var cache;
var Lcom_google_gwt_i18n_client_DateTimeFormat_2_classLit = createForClass('com.google.gwt.i18n.client', 'DateTimeFormat', 86);
defineClass(343, 1, {});
var Lcom_google_gwt_i18n_shared_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DefaultDateTimeFormatInfo', 343);
defineClass(344, 343, {});
var Lcom_google_gwt_i18n_client_DefaultDateTimeFormatInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'DefaultDateTimeFormatInfo', 344);
function $clinit_HasDirection$Direction(){
  $clinit_HasDirection$Direction = emptyMethod;
  RTL = new HasDirection$Direction('RTL', 0);
  LTR = new HasDirection$Direction('LTR', 1);
  DEFAULT = new HasDirection$Direction('DEFAULT', 2);
}

function HasDirection$Direction(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_5(){
  $clinit_HasDirection$Direction();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit, 1), $intern_4, 54, 0, [RTL, LTR, DEFAULT]);
}

defineClass(54, 5, {54:1, 3:1, 6:1, 5:1}, HasDirection$Direction);
var DEFAULT, LTR, RTL;
var Lcom_google_gwt_i18n_client_HasDirection$Direction_2_classLit = createForEnum('com.google.gwt.i18n.client', 'HasDirection/Direction', 54, values_5);
function $clinit_LocaleInfo(){
  $clinit_LocaleInfo = emptyMethod;
  instance_0 = new LocaleInfo;
}

function $getDateTimeFormatInfo(this$static){
  !this$static.dateTimeFormatInfo && (this$static.dateTimeFormatInfo = new DateTimeFormatInfoImpl);
  return this$static.dateTimeFormatInfo;
}

function LocaleInfo(){
}

defineClass(159, 1, {}, LocaleInfo);
var instance_0;
var Lcom_google_gwt_i18n_client_LocaleInfo_2_classLit = createForClass('com.google.gwt.i18n.client', 'LocaleInfo', 159);
function $getISOTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = initValues(getClassLiteralForArray(C_classLit, 1), $intern_4, 0, 7, [43, 48, 48, 58, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ~~(~~(offset / 60) / 10) & $intern_2;
  data_0[2] = data_0[2] + ~~(offset / 60) % 10 & $intern_2;
  data_0[4] = data_0[4] + ~~(offset % 60 / 10) & $intern_2;
  data_0[5] = data_0[5] + offset % 10 & $intern_2;
  return __valueOf(data_0, 0, data_0.length);
}

function $getRFCTimeZoneString(this$static){
  var data_0, offset;
  offset = -this$static.standardOffset;
  data_0 = initValues(getClassLiteralForArray(C_classLit, 1), $intern_4, 0, 7, [43, 48, 48, 48, 48]);
  if (offset < 0) {
    data_0[0] = 45;
    offset = -offset;
  }
  data_0[1] = data_0[1] + ~~(~~(offset / 60) / 10) & $intern_2;
  data_0[2] = data_0[2] + ~~(offset / 60) % 10 & $intern_2;
  data_0[3] = data_0[3] + ~~(offset % 60 / 10) & $intern_2;
  data_0[4] = data_0[4] + offset % 10 & $intern_2;
  return __valueOf(data_0, 0, data_0.length);
}

function TimeZone(){
}

function composeGMTString(offset){
  var data_0;
  data_0 = initValues(getClassLiteralForArray(C_classLit, 1), $intern_4, 0, 7, [71, 77, 84, 45, 48, 48, 58, 48, 48]);
  if (offset <= 0) {
    data_0[3] = 43;
    offset = -offset;
  }
  data_0[4] = data_0[4] + ~~(~~(offset / 60) / 10) & $intern_2;
  data_0[5] = data_0[5] + ~~(offset / 60) % 10 & $intern_2;
  data_0[7] = data_0[7] + ~~(offset % 60 / 10) & $intern_2;
  data_0[8] = data_0[8] + offset % 10 & $intern_2;
  return __valueOf(data_0, 0, data_0.length);
}

function composePOSIXTimeZoneID(offset){
  var str;
  if (offset == 0) {
    return 'Etc/GMT';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'Etc/GMT-';
  }
   else {
    str = 'Etc/GMT+';
  }
  return str + offsetDisplay(offset);
}

function composeUTCString(offset){
  var str;
  if (offset == 0) {
    return 'UTC';
  }
  if (offset < 0) {
    offset = -offset;
    str = 'UTC+';
  }
   else {
    str = 'UTC-';
  }
  return str + offsetDisplay(offset);
}

function createTimeZone(timeZoneOffsetInMinutes){
  var tz;
  tz = new TimeZone;
  tz.standardOffset = timeZoneOffsetInMinutes;
  tz.timezoneID = composePOSIXTimeZoneID(timeZoneOffsetInMinutes);
  tz.tzNames = initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 2, 4, 1);
  tz.tzNames[0] = composeUTCString(timeZoneOffsetInMinutes);
  tz.tzNames[1] = composeUTCString(timeZoneOffsetInMinutes);
  return tz;
}

function offsetDisplay(offset){
  var hour, mins;
  hour = ~~(offset / 60);
  mins = offset % 60;
  if (mins == 0) {
    return '' + hour;
  }
  return '' + hour + ':' + ('' + mins);
}

defineClass(302, 1, {}, TimeZone);
_.standardOffset = 0;
var Lcom_google_gwt_i18n_client_TimeZone_2_classLit = createForClass('com.google.gwt.i18n.client', 'TimeZone', 302);
function DateTimeFormatInfoImpl(){
}

defineClass(301, 344, {}, DateTimeFormatInfoImpl);
var Lcom_google_gwt_i18n_client_impl_cldr_DateTimeFormatInfoImpl_2_classLit = createForClass('com.google.gwt.i18n.client.impl.cldr', 'DateTimeFormatInfoImpl', 301);
function DateTimeFormat$PatternPart(txt, cnt){
  this.text_0 = txt;
  this.count = cnt;
  this.abutStart = false;
}

defineClass(58, 1, {58:1}, DateTimeFormat$PatternPart);
_.abutStart = false;
_.count = 0;
var Lcom_google_gwt_i18n_shared_DateTimeFormat$PatternPart_2_classLit = createForClass('com.google.gwt.i18n.shared', 'DateTimeFormat/PatternPart', 58);
defineClass(341, 1, {});
_.isArray_0 = function isArray(){
  return null;
}
;
_.isObject = function isObject(){
  return null;
}
;
_.isString = function isString(){
  return null;
}
;
var Lcom_google_gwt_json_client_JSONValue_2_classLit = createForClass('com.google.gwt.json.client', 'JSONValue', 341);
function $get(this$static, index_0){
  var v = this$static.jsArray[index_0];
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function JSONArray(arr){
  this.jsArray = arr;
}

function unwrap(value_0){
  return value_0.jsArray;
}

defineClass(84, 341, {84:1}, JSONArray);
_.equals$ = function equals_1(other){
  if (!instanceOf(other, 84)) {
    return false;
  }
  return this.jsArray == dynamicCast(other, 84).jsArray;
}
;
_.getUnwrapper = function getUnwrapper(){
  return unwrap;
}
;
_.hashCode$ = function hashCode_3(){
  return getHashCode(this.jsArray);
}
;
_.isArray_0 = function isArray_0(){
  return this;
}
;
_.toString$ = function toString_6(){
  var c, i, sb;
  sb = new StringBuilder_1('[');
  for (i = 0 , c = this.jsArray.length; i < c; i++) {
    i > 0 && (sb.string += ',' , sb);
    $append(sb, $get(this, i));
  }
  sb.string += ']';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONArray_2_classLit = createForClass('com.google.gwt.json.client', 'JSONArray', 84);
function $clinit_JSONBoolean(){
  $clinit_JSONBoolean = emptyMethod;
  FALSE = new JSONBoolean(false);
  TRUE = new JSONBoolean(true);
}

function JSONBoolean(value_0){
  this.value_0 = value_0;
}

function unwrap_0(value_0){
  return value_0.value_0;
}

defineClass(108, 341, {}, JSONBoolean);
_.getUnwrapper = function getUnwrapper_0(){
  return unwrap_0;
}
;
_.toString$ = function toString_7(){
  return $clinit_Boolean() , '' + this.value_0;
}
;
_.value_0 = false;
var FALSE, TRUE;
var Lcom_google_gwt_json_client_JSONBoolean_2_classLit = createForClass('com.google.gwt.json.client', 'JSONBoolean', 108);
function JSONException(message){
  RuntimeException_0.call(this, message);
}

function JSONException_0(cause){
  this.detailMessage = !cause?null:$toString(cause);
  captureStackTrace(this, this.detailMessage);
}

defineClass(87, 18, $intern_6, JSONException, JSONException_0);
var Lcom_google_gwt_json_client_JSONException_2_classLit = createForClass('com.google.gwt.json.client', 'JSONException', 87);
function $clinit_JSONNull(){
  $clinit_JSONNull = emptyMethod;
  instance_1 = new JSONNull;
}

function JSONNull(){
}

function unwrap_1(){
  return null;
}

defineClass(296, 341, {}, JSONNull);
_.getUnwrapper = function getUnwrapper_1(){
  return unwrap_1;
}
;
_.toString$ = function toString_8(){
  return 'null';
}
;
var instance_1;
var Lcom_google_gwt_json_client_JSONNull_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNull', 296);
function JSONNumber(value_0){
  this.value_0 = value_0;
}

function unwrap_2(value_0){
  return value_0.value_0;
}

defineClass(70, 341, {70:1}, JSONNumber);
_.equals$ = function equals_2(other){
  if (!instanceOf(other, 70)) {
    return false;
  }
  return this.value_0 == dynamicCast(other, 70).value_0;
}
;
_.getUnwrapper = function getUnwrapper_2(){
  return unwrap_2;
}
;
_.hashCode$ = function hashCode_4(){
  return round_int((new Double(this.value_0)).value_0);
}
;
_.toString$ = function toString_9(){
  return this.value_0 + '';
}
;
_.value_0 = 0;
var Lcom_google_gwt_json_client_JSONNumber_2_classLit = createForClass('com.google.gwt.json.client', 'JSONNumber', 70);
function $computeKeys0(this$static, result){
  var jsObject = this$static.jsObject;
  var i = 0;
  for (var key in jsObject) {
    jsObject.hasOwnProperty(key) && (result[i++] = key);
  }
  return result;
}

function $containsKey(this$static, key){
  return key in this$static.jsObject;
}

function $get_0(this$static, key){
  if (key == null) {
    throw new NullPointerException;
  }
  return $get0(this$static, key);
}

function $get0(this$static, key){
  var jsObject = this$static.jsObject;
  var v;
  key = String(key);
  jsObject.hasOwnProperty(key) && (v = jsObject[key]);
  var func = ($clinit_JSONParser() , typeMap)[typeof v];
  var ret = func?func(v):throwUnknownTypeException(typeof v);
  return ret;
}

function $keySet(this$static){
  var keys_0;
  keys_0 = $computeKeys0(this$static, initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1));
  return new JSONObject$1(this$static, keys_0);
}

function $put(this$static, key, jsonValue){
  var previous;
  if (key == null) {
    throw new NullPointerException;
  }
  previous = $get_0(this$static, key);
  $put0(this$static, key, jsonValue);
  return previous;
}

function $put0(this$static, key, value_0){
  if (value_0) {
    var func = value_0.getUnwrapper();
    this$static.jsObject[key] = func(value_0);
  }
   else {
    delete this$static.jsObject[key];
  }
}

function JSONObject(){
  JSONObject_0.call(this, {});
}

function JSONObject_0(jsValue){
  this.jsObject = jsValue;
}

function unwrap_3(value_0){
  return value_0.jsObject;
}

defineClass(48, 341, {48:1}, JSONObject, JSONObject_0);
_.equals$ = function equals_3(other){
  if (!instanceOf(other, 48)) {
    return false;
  }
  return this.jsObject == dynamicCast(other, 48).jsObject;
}
;
_.getUnwrapper = function getUnwrapper_3(){
  return unwrap_3;
}
;
_.hashCode$ = function hashCode_5(){
  return getHashCode(this.jsObject);
}
;
_.isObject = function isObject_0(){
  return this;
}
;
_.toString$ = function toString_10(){
  var first, key, key$index, key$max, keys_0, sb;
  sb = new StringBuilder_1('{');
  first = true;
  keys_0 = $computeKeys0(this, initDim(Ljava_lang_String_2_classLit, $intern_4, 2, 0, 4, 1));
  for (key$index = 0 , key$max = keys_0.length; key$index < key$max; ++key$index) {
    key = keys_0[key$index];
    first?(first = false):(sb.string += ', ' , sb);
    $append_0(sb, escapeValue(key));
    sb.string += ':';
    $append(sb, $get_0(this, key));
  }
  sb.string += '}';
  return sb.string;
}
;
var Lcom_google_gwt_json_client_JSONObject_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject', 48);
function $advanceToFind(this$static, o, remove){
  var e, iter;
  for (iter = this$static.iterator(); iter.hasNext();) {
    e = iter.next();
    if (maskUndefined(o) === maskUndefined(e) || o != null && equals_Ljava_lang_Object__Z__devirtual$(o, e)) {
      remove && iter.remove_1();
      return true;
    }
  }
  return false;
}

function $containsAll(this$static, c){
  var e, e$iterator;
  checkNotNull(c);
  for (e$iterator = c.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    if (!this$static.contains_0(e)) {
      return false;
    }
  }
  return true;
}

function $toString_0(this$static){
  var comma, e, e$iterator, sb;
  sb = new StringBuilder_1('[');
  comma = false;
  for (e$iterator = this$static.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    comma?(sb.string += ', ' , sb):(comma = true);
    sb.string += e === this$static?'(this Collection)':'' + e;
  }
  sb.string += ']';
  return sb.string;
}

defineClass(331, 1, {});
_.contains_0 = function contains(o){
  return $advanceToFind(this, o, false);
}
;
_.isEmpty = function isEmpty(){
  return this.size_1() == 0;
}
;
_.remove = function remove_0(o){
  return $advanceToFind(this, o, true);
}
;
_.toString$ = function toString_11(){
  return $toString_0(this);
}
;
var Ljava_util_AbstractCollection_2_classLit = createForClass('java.util', 'AbstractCollection', 331);
defineClass(332, 331, $intern_12);
_.equals$ = function equals_4(o){
  var other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 59)) {
    return false;
  }
  other = dynamicCast(o, 59);
  if (other.size_1() != this.size_1()) {
    return false;
  }
  return $containsAll(this, other);
}
;
_.hashCode$ = function hashCode_6(){
  return hashCode_17(this);
}
;
var Ljava_util_AbstractSet_2_classLit = createForClass('java.util', 'AbstractSet', 332);
function JSONObject$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(226, 332, $intern_12, JSONObject$1);
_.contains_0 = function contains_0(o){
  return isJavaString(o) && $containsKey(this.this$01, dynamicCastToString(o));
}
;
_.iterator = function iterator_0(){
  return new AbstractList$IteratorImpl(new Arrays$ArrayList(this.val$keys2));
}
;
_.size_1 = function size_1(){
  return this.val$keys2.length;
}
;
var Lcom_google_gwt_json_client_JSONObject$1_2_classLit = createForClass('com.google.gwt.json.client', 'JSONObject/1', 226);
function $clinit_JSONParser(){
  $clinit_JSONParser = emptyMethod;
  typeMap = {'boolean':createBoolean, number:createNumber, string:createString, object:createObject, 'function':createObject, undefined:createUndefined};
}

function createBoolean(v){
  return $clinit_JSONBoolean() , v?TRUE:FALSE;
}

function createNumber(v){
  return new JSONNumber(v);
}

function createObject(o){
  if (!o) {
    return $clinit_JSONNull() , instance_1;
  }
  var v = o.valueOf?o.valueOf():o;
  if (v !== o) {
    var func = typeMap[typeof v];
    return func?func(v):throwUnknownTypeException(typeof v);
  }
   else if (o instanceof Array || o instanceof $wnd.Array) {
    return new JSONArray(o);
  }
   else {
    return new JSONObject_0(o);
  }
}

function createString(v){
  return new JSONString(v);
}

function createUndefined(){
  return null;
}

function evaluate(json, strict){
  var v;
  if (strict) {
    try {
      v = JSON.parse(json);
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
   else {
    json = escapeJsonForEval(json);
    try {
      v = eval('(' + json + ')');
    }
     catch (e) {
      return throwJSONException('Error parsing JSON: ' + e);
    }
  }
  var func = typeMap[typeof v];
  return func?func(v):throwUnknownTypeException(typeof v);
}

function parse_0(jsonString){
  $clinit_JSONParser();
  var ex;
  if (jsonString == null) {
    throw new NullPointerException;
  }
  if (jsonString.length == 0) {
    throw new IllegalArgumentException('empty argument');
  }
  try {
    return evaluate(jsonString, true);
  }
   catch ($e0) {
    $e0 = wrap($e0);
    if (instanceOf($e0, 39)) {
      ex = $e0;
      throw new JSONException_0(ex);
    }
     else 
      throw unwrap_5($e0);
  }
}

function throwJSONException(message){
  throw new JSONException(message);
}

function throwUnknownTypeException(typeString){
  $clinit_JSONParser();
  throw new JSONException("Unexpected typeof result '" + typeString + "'; please report this bug to the GWT team");
}

var typeMap;
function JSONString(value_0){
  if (value_0 == null) {
    throw new NullPointerException;
  }
  this.value_0 = value_0;
}

function unwrap_4(value_0){
  return value_0.value_0;
}

defineClass(69, 341, {69:1}, JSONString);
_.equals$ = function equals_5(other){
  if (!instanceOf(other, 69)) {
    return false;
  }
  return $equals(this.value_0, dynamicCast(other, 69).value_0);
}
;
_.getUnwrapper = function getUnwrapper_4(){
  return unwrap_4;
}
;
_.hashCode$ = function hashCode_7(){
  return getHashCode_0(this.value_0);
}
;
_.isString = function isString_0(){
  return this;
}
;
_.toString$ = function toString_12(){
  return escapeValue(this.value_0);
}
;
var Lcom_google_gwt_json_client_JSONString_2_classLit = createForClass('com.google.gwt.json.client', 'JSONString', 69);
function $clinit_JsonpRequest(){
  $clinit_JsonpRequest = emptyMethod;
  CALLBACKS = getOrCreateCallbacksObject();
}

function $onFailure(this$static, ex){
  $cancel_0(this$static.timer);
  try {
    !!this$static.callback && this$static.callback.onFailure_0(ex);
  }
   finally {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new JsonpRequest$2(this$static));
  }
}

function $registerCallbacks(this$static, callbacks, canHaveMultipleRequestsForId){
  var self_0 = this$static;
  var callback = new Object;
  callback.onSuccess = $entry(function(data_0){
    typeof data_0 == 'boolean'?(data_0 = new Boolean_0(data_0)):typeof data_0 == 'number' && (self_0.expectInteger?(data_0 = new Integer(data_0)):(data_0 = new Double(data_0)));
    self_0.onSuccess_1(data_0);
  }
  );
  this$static.failureCallbackParam && (callback.onFailure = $entry(function(message){
    self_0.onFailure_1(message);
  }
  ));
  if (canHaveMultipleRequestsForId) {
    var callbackWrapper = callbacks[this$static.callbackId];
    if (!callbackWrapper) {
      callbackWrapper = new Object;
      callbackWrapper.callbackList = new Array;
      callbackWrapper.onSuccess = function(data_0){
        while (callbackWrapper.callbackList.length > 0) {
          callbackWrapper.callbackList.shift().onSuccess(data_0);
        }
      }
      ;
      callbackWrapper.onFailure = function(data_0){
        while (callbackWrapper.callbackList.length > 0) {
          callbackWrapper.callbackList.shift().onFailure(data_0);
        }
      }
      ;
      callbacks[this$static.callbackId] = callbackWrapper;
    }
    callbackWrapper.callbackList.push(callback);
  }
   else {
    callbacks[this$static.callbackId] = callback;
  }
}

function $unregisterCallbacks(this$static, callbacks){
  delete callbacks[this$static.callbackId];
}

function JsonpRequest(callback, timeout, callbackParam){
  var name_0, ctr;
  $clinit_JsonpRequest();
  this.callbackId = 'P' + (name_0 = '__gwt_jsonp__' , ctr = '__gwt_jsonp_counter__' , $wnd[name_0][ctr]++);
  this.callback = callback;
  this.timeout = timeout;
  this.expectInteger = false;
  this.callbackParam = callbackParam;
  this.failureCallbackParam = null;
  this.canHaveMultipleRequestsForSameId = false;
}

function getOrCreateCallbacksObject(){
  var name_0 = '__gwt_jsonp__';
  if (!$wnd[name_0]) {
    $wnd[name_0] = new Object;
    $wnd[name_0]['__gwt_jsonp_counter__'] = 0;
  }
  return $wnd[name_0];
}

defineClass(165, 1, {}, JsonpRequest);
_.onFailure_1 = function onFailure_2(message){
  $onFailure(this, new Exception(message));
}
;
_.onSuccess_1 = function onSuccess_2(data_0){
  $cancel_0(this.timer);
  try {
    !!this.callback && this.callback.onSuccess_0(data_0);
  }
   finally {
    $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new JsonpRequest$2(this));
  }
}
;
_.toString$ = function toString_13(){
  return 'JsonpRequest(id=' + this.callbackId + ')';
}
;
_.canHaveMultipleRequestsForSameId = false;
_.expectInteger = false;
_.timeout = 0;
var CALLBACKS;
var Lcom_google_gwt_jsonp_client_JsonpRequest_2_classLit = createForClass('com.google.gwt.jsonp.client', 'JsonpRequest', 165);
function JsonpRequest$1(this$0, val$baseUri){
  this.this$01 = this$0;
  this.val$baseUri2 = val$baseUri;
  Timer.call(this);
}

defineClass(166, 102, {}, JsonpRequest$1);
_.run = function run_0(){
  $onFailure(this.this$01, new TimeoutException('Timeout while calling ' + this.val$baseUri2));
}
;
var Lcom_google_gwt_jsonp_client_JsonpRequest$1_2_classLit = createForClass('com.google.gwt.jsonp.client', 'JsonpRequest/1', 166);
function JsonpRequest$2(this$0){
  this.this$01 = this$0;
}

defineClass(103, 1, {}, JsonpRequest$2);
_.execute_1 = function execute_3(){
  var script;
  this.this$01.canHaveMultipleRequestsForSameId || $unregisterCallbacks(this.this$01, ($clinit_JsonpRequest() , CALLBACKS));
  script = $getElementById($doc, this.this$01.callbackId);
  !!script && $removeChild(($clinit_JsonpRequest() , $doc.getElementsByTagName('head')[0]), script);
}
;
var Lcom_google_gwt_jsonp_client_JsonpRequest$2_2_classLit = createForClass('com.google.gwt.jsonp.client', 'JsonpRequest/2', 103);
function JsonpRequestBuilder(){
}

defineClass(164, 1, {}, JsonpRequestBuilder);
_.callbackParam = 'callback';
_.timeout = 10000;
var Lcom_google_gwt_jsonp_client_JsonpRequestBuilder_2_classLit = createForClass('com.google.gwt.jsonp.client', 'JsonpRequestBuilder', 164);
function TimeoutException(s){
  Exception.call(this, s);
}

defineClass(225, 11, $intern_6, TimeoutException);
var Lcom_google_gwt_jsonp_client_TimeoutException_2_classLit = createForClass('com.google.gwt.jsonp.client', 'TimeoutException', 225);
function getClassLiteralForArray(clazz, dimensions){
  return getClassLiteralForArray_0(clazz, dimensions);
}

function initDim(leafClassLiteral, castableTypeMap, elementTypeId, length_0, elementTypeCategory, dimensions){
  var result;
  result = initializeArrayElementsWithDefaults(elementTypeCategory, length_0);
  initValues(getClassLiteralForArray(leafClassLiteral, dimensions), castableTypeMap, elementTypeId, elementTypeCategory, result);
  return result;
}

function initValues(arrayClass, castableTypeMap, elementTypeId, elementTypeCategory, array){
  array.___clazz$ = arrayClass;
  array.castableTypeMap$ = castableTypeMap;
  array.typeMarker$ = typeMarkerFn;
  array.__elementTypeId$ = elementTypeId;
  array.__elementTypeCategory$ = elementTypeCategory;
  return array;
}

function initializeArrayElementsWithDefaults(elementTypeCategory, length_0){
  var array = new Array(length_0);
  var initValue;
  switch (elementTypeCategory) {
    case 6:
      initValue = {l:0, m:0, h:0};
      break;
    case 7:
      initValue = 0;
      break;
    case 8:
      initValue = false;
      break;
    default:return array;
  }
  for (var i = 0; i < length_0; ++i) {
    array[i] = initValue;
  }
  return array;
}

function setCheck(array, index_0, value_0){
  var elementTypeId;
  if (value_0 != null) {
    switch (array.__elementTypeCategory$) {
      case 4:
        if (!isJavaString(value_0)) {
          throw new ArrayStoreException;
        }

        break;
      case 0:
        {
          elementTypeId = array.__elementTypeId$;
          if (!canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

      case 2:
        if (!(!isJavaString(value_0) && !hasTypeMarker(value_0))) {
          throw new ArrayStoreException;
        }

        break;
      case 1:
        {
          elementTypeId = array.__elementTypeId$;
          if (!(!isJavaString(value_0) && !hasTypeMarker(value_0)) && !canCast(value_0, elementTypeId)) {
            throw new ArrayStoreException;
          }
          break;
        }

    }
  }
  return array[index_0] = value_0;
}

function cacheJavaScriptException(e, jse){
  if (e && typeof e == 'object') {
    try {
      e.__gwt$exception = jse;
    }
     catch (ignored) {
    }
  }
}

function unwrap_5(e){
  var jse;
  if (instanceOf(e, 39)) {
    jse = dynamicCast(e, 39);
    if (maskUndefined(jse.e) !== maskUndefined(($clinit_JavaScriptException() , NOT_SET))) {
      return maskUndefined(jse.e) === maskUndefined(NOT_SET)?null:jse.e;
    }
  }
  return e;
}

function wrap(e){
  var jse;
  if (instanceOf(e, 7)) {
    return e;
  }
  jse = e && e.__gwt$exception;
  if (!jse) {
    jse = new JavaScriptException(e);
    captureStackTrace(jse, e);
    cacheJavaScriptException(e, jse);
  }
  return jse;
}

function create_0(value_0){
  var a0, a1, a2;
  a0 = value_0 & $intern_13;
  a1 = value_0 >> 22 & $intern_13;
  a2 = value_0 < 0?$intern_14:0;
  return create0(a0, a1, a2);
}

function create_1(a){
  return create0(a.l, a.m, a.h);
}

function create0(l, m, h){
  return {l:l, m:m, h:h};
}

function divMod(a, b, computeRemainder){
  var aIsCopy, aIsMinValue, aIsNegative, bpower, c, negative;
  if (b.l == 0 && b.m == 0 && b.h == 0) {
    throw new ArithmeticException;
  }
  if (a.l == 0 && a.m == 0 && a.h == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create0(0, 0, 0);
  }
  if (b.h == $intern_15 && b.m == 0 && b.l == 0) {
    return divModByMinValue(a, computeRemainder);
  }
  negative = false;
  if (b.h >> 19 != 0) {
    b = neg(b);
    negative = true;
  }
  bpower = powerOfTwo(b);
  aIsNegative = false;
  aIsMinValue = false;
  aIsCopy = false;
  if (a.h == $intern_15 && a.m == 0 && a.l == 0) {
    aIsMinValue = true;
    aIsNegative = true;
    if (bpower == -1) {
      a = create_1(($clinit_LongLib$Const() , MAX_VALUE));
      aIsCopy = true;
      negative = !negative;
    }
     else {
      c = shr(a, bpower);
      negative && negate(c);
      computeRemainder && (remainder = create0(0, 0, 0));
      return c;
    }
  }
   else if (a.h >> 19 != 0) {
    aIsNegative = true;
    a = neg(a);
    aIsCopy = true;
    negative = !negative;
  }
  if (bpower != -1) {
    return divModByShift(a, bpower, negative, aIsNegative, computeRemainder);
  }
  if (!gte_0(a, b)) {
    computeRemainder && (aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h)));
    return create0(0, 0, 0);
  }
  return divModHelper(aIsCopy?a:create0(a.l, a.m, a.h), b, negative, aIsNegative, aIsMinValue, computeRemainder);
}

function divModByMinValue(a, computeRemainder){
  if (a.h == $intern_15 && a.m == 0 && a.l == 0) {
    computeRemainder && (remainder = create0(0, 0, 0));
    return create_1(($clinit_LongLib$Const() , ONE));
  }
  computeRemainder && (remainder = create0(a.l, a.m, a.h));
  return create0(0, 0, 0);
}

function divModByShift(a, bpower, negative, aIsNegative, computeRemainder){
  var c;
  c = shr(a, bpower);
  negative && negate(c);
  if (computeRemainder) {
    a = maskRight(a, bpower);
    aIsNegative?(remainder = neg(a)):(remainder = create0(a.l, a.m, a.h));
  }
  return c;
}

function divModHelper(a, b, negative, aIsNegative, aIsMinValue, computeRemainder){
  var bshift, gte, quotient, shift_0, a1, a2, a0;
  shift_0 = numberOfLeadingZeros(b) - numberOfLeadingZeros(a);
  bshift = shl(b, shift_0);
  quotient = create0(0, 0, 0);
  while (shift_0 >= 0) {
    gte = trialSubtract(a, bshift);
    if (gte) {
      shift_0 < 22?(quotient.l |= 1 << shift_0 , undefined):shift_0 < 44?(quotient.m |= 1 << shift_0 - 22 , undefined):(quotient.h |= 1 << shift_0 - 44 , undefined);
      if (a.l == 0 && a.m == 0 && a.h == 0) {
        break;
      }
    }
    a1 = bshift.m;
    a2 = bshift.h;
    a0 = bshift.l;
    setH(bshift, a2 >>> 1);
    bshift.m = a1 >>> 1 | (a2 & 1) << 21;
    bshift.l = a0 >>> 1 | (a1 & 1) << 21;
    --shift_0;
  }
  negative && negate(quotient);
  if (computeRemainder) {
    if (aIsNegative) {
      remainder = neg(a);
      aIsMinValue && (remainder = sub_0(remainder, ($clinit_LongLib$Const() , ONE)));
    }
     else {
      remainder = create0(a.l, a.m, a.h);
    }
  }
  return quotient;
}

function maskRight(a, bits){
  var b0, b1, b2;
  if (bits <= 22) {
    b0 = a.l & (1 << bits) - 1;
    b1 = b2 = 0;
  }
   else if (bits <= 44) {
    b0 = a.l;
    b1 = a.m & (1 << bits - 22) - 1;
    b2 = 0;
  }
   else {
    b0 = a.l;
    b1 = a.m;
    b2 = a.h & (1 << bits - 44) - 1;
  }
  return create0(b0, b1, b2);
}

function negate(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_13;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_13;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_14;
  setL(a, neg0);
  setM(a, neg1);
  setH(a, neg2);
}

function numberOfLeadingZeros(a){
  var b1, b2;
  b2 = numberOfLeadingZeros_0(a.h);
  if (b2 == 32) {
    b1 = numberOfLeadingZeros_0(a.m);
    return b1 == 32?numberOfLeadingZeros_0(a.l) + 32:b1 + 20 - 10;
  }
   else {
    return b2 - 12;
  }
}

function powerOfTwo(a){
  var h, l, m;
  l = a.l;
  if ((l & l - 1) != 0) {
    return -1;
  }
  m = a.m;
  if ((m & m - 1) != 0) {
    return -1;
  }
  h = a.h;
  if ((h & h - 1) != 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l == 0) {
    return -1;
  }
  if (h == 0 && m == 0 && l != 0) {
    return numberOfTrailingZeros(l);
  }
  if (h == 0 && m != 0 && l == 0) {
    return numberOfTrailingZeros(m) + 22;
  }
  if (h != 0 && m == 0 && l == 0) {
    return numberOfTrailingZeros(h) + 44;
  }
  return -1;
}

function setH(a, x_0){
  a.h = x_0;
}

function setL(a, x_0){
  a.l = x_0;
}

function setM(a, x_0){
  a.m = x_0;
}

function toDoubleHelper(a){
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function trialSubtract(a, b){
  var sum0, sum1, sum2;
  sum2 = a.h - b.h;
  if (sum2 < 0) {
    return false;
  }
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 += sum1 >> 22;
  if (sum2 < 0) {
    return false;
  }
  setL(a, sum0 & $intern_13);
  setM(a, sum1 & $intern_13);
  setH(a, sum2 & $intern_14);
  return true;
}

var remainder;
function add_1(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l + b.l;
  sum1 = a.m + b.m + (sum0 >> 22);
  sum2 = a.h + b.h + (sum1 >> 22);
  return {l:sum0 & $intern_13, m:sum1 & $intern_13, h:sum2 & $intern_14};
}

function div(a, b){
  return divMod(a, b, false);
}

function eq(a, b){
  return a.l == b.l && a.m == b.m && a.h == b.h;
}

function fromDouble(value_0){
  var a0, a1, a2, negative, result;
  if (isNaN(value_0)) {
    return $clinit_LongLib$Const() , ZERO;
  }
  if (value_0 < $intern_18) {
    return $clinit_LongLib$Const() , MIN_VALUE;
  }
  if (value_0 >= 9223372036854775807) {
    return $clinit_LongLib$Const() , MAX_VALUE;
  }
  negative = false;
  if (value_0 < 0) {
    negative = true;
    value_0 = -value_0;
  }
  a2 = 0;
  if (value_0 >= $intern_17) {
    a2 = round_int(value_0 / $intern_17);
    value_0 -= a2 * $intern_17;
  }
  a1 = 0;
  if (value_0 >= $intern_16) {
    a1 = round_int(value_0 / $intern_16);
    value_0 -= a1 * $intern_16;
  }
  a0 = round_int(value_0);
  result = create0(a0, a1, a2);
  negative && negate(result);
  return result;
}

function fromInt(value_0){
  var rebase, result;
  if (value_0 > -129 && value_0 < 128) {
    rebase = value_0 + 128;
    boxedValues == null && (boxedValues = initDim(Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit, $intern_4, 366, 256, 0, 1));
    result = boxedValues[rebase];
    !result && (result = boxedValues[rebase] = create_0(value_0));
    return result;
  }
  return create_0(value_0);
}

function gte_0(a, b){
  var signa, signb;
  signa = a.h >> 19;
  signb = b.h >> 19;
  return signa == 0?signb != 0 || a.h > b.h || a.h == b.h && a.m > b.m || a.h == b.h && a.m == b.m && a.l >= b.l:!(signb == 0 || a.h < b.h || a.h == b.h && a.m < b.m || a.h == b.h && a.m == b.m && a.l < b.l);
}

function lt(a, b){
  return !gte_0(a, b);
}

function mod(a, b){
  divMod(a, b, true);
  return remainder;
}

function mul(a, b){
  var a0, a1, a2, a3, a4, b0, b1, b2, b3, b4, c0, c00, c01, c1, c10, c11, c12, c13, c2, c22, c23, c24, p0, p1, p2, p3, p4;
  a0 = a.l & 8191;
  a1 = a.l >> 13 | (a.m & 15) << 9;
  a2 = a.m >> 4 & 8191;
  a3 = a.m >> 17 | (a.h & 255) << 5;
  a4 = (a.h & 1048320) >> 8;
  b0 = b.l & 8191;
  b1 = b.l >> 13 | (b.m & 15) << 9;
  b2 = b.m >> 4 & 8191;
  b3 = b.m >> 17 | (b.h & 255) << 5;
  b4 = (b.h & 1048320) >> 8;
  p0 = a0 * b0;
  p1 = a1 * b0;
  p2 = a2 * b0;
  p3 = a3 * b0;
  p4 = a4 * b0;
  if (b1 != 0) {
    p1 += a0 * b1;
    p2 += a1 * b1;
    p3 += a2 * b1;
    p4 += a3 * b1;
  }
  if (b2 != 0) {
    p2 += a0 * b2;
    p3 += a1 * b2;
    p4 += a2 * b2;
  }
  if (b3 != 0) {
    p3 += a0 * b3;
    p4 += a1 * b3;
  }
  b4 != 0 && (p4 += a0 * b4);
  c00 = p0 & $intern_13;
  c01 = (p1 & 511) << 13;
  c0 = c00 + c01;
  c10 = p0 >> 22;
  c11 = p1 >> 9;
  c12 = (p2 & 262143) << 4;
  c13 = (p3 & 31) << 17;
  c1 = c10 + c11 + c12 + c13;
  c22 = p2 >> 18;
  c23 = p3 >> 5;
  c24 = (p4 & 4095) << 8;
  c2 = c22 + c23 + c24;
  c1 += c0 >> 22;
  c0 &= $intern_13;
  c2 += c1 >> 22;
  c1 &= $intern_13;
  c2 &= $intern_14;
  return create0(c0, c1, c2);
}

function neg(a){
  var neg0, neg1, neg2;
  neg0 = ~a.l + 1 & $intern_13;
  neg1 = ~a.m + (neg0 == 0?1:0) & $intern_13;
  neg2 = ~a.h + (neg0 == 0 && neg1 == 0?1:0) & $intern_14;
  return create0(neg0, neg1, neg2);
}

function shl(a, n){
  var res0, res1, res2;
  n &= 63;
  if (n < 22) {
    res0 = a.l << n;
    res1 = a.m << n | a.l >> 22 - n;
    res2 = a.h << n | a.m >> 22 - n;
  }
   else if (n < 44) {
    res0 = 0;
    res1 = a.l << n - 22;
    res2 = a.m << n - 22 | a.l >> 44 - n;
  }
   else {
    res0 = 0;
    res1 = 0;
    res2 = a.l << n - 44;
  }
  return {l:res0 & $intern_13, m:res1 & $intern_13, h:res2 & $intern_14};
}

function shr(a, n){
  var a2, negative, res0, res1, res2;
  n &= 63;
  a2 = a.h;
  negative = (a2 & $intern_15) != 0;
  negative && (a2 |= -1048576);
  if (n < 22) {
    res2 = a2 >> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = negative?$intern_14:0;
    res1 = a2 >> n - 22;
    res0 = a.m >> n - 22 | a2 << 44 - n;
  }
   else {
    res2 = negative?$intern_14:0;
    res1 = negative?$intern_13:0;
    res0 = a2 >> n - 44;
  }
  return {l:res0 & $intern_13, m:res1 & $intern_13, h:res2 & $intern_14};
}

function shru(a, n){
  var a2, res0, res1, res2;
  n &= 63;
  a2 = a.h & $intern_14;
  if (n < 22) {
    res2 = a2 >>> n;
    res1 = a.m >> n | a2 << 22 - n;
    res0 = a.l >> n | a.m << 22 - n;
  }
   else if (n < 44) {
    res2 = 0;
    res1 = a2 >>> n - 22;
    res0 = a.m >> n - 22 | a.h << 44 - n;
  }
   else {
    res2 = 0;
    res1 = 0;
    res0 = a2 >>> n - 44;
  }
  return {l:res0 & $intern_13, m:res1 & $intern_13, h:res2 & $intern_14};
}

function sub_0(a, b){
  var sum0, sum1, sum2;
  sum0 = a.l - b.l;
  sum1 = a.m - b.m + (sum0 >> 22);
  sum2 = a.h - b.h + (sum1 >> 22);
  return {l:sum0 & $intern_13, m:sum1 & $intern_13, h:sum2 & $intern_14};
}

function toDouble(a){
  if (eq(a, ($clinit_LongLib$Const() , MIN_VALUE))) {
    return $intern_18;
  }
  if (!gte_0(a, ZERO)) {
    return -toDoubleHelper(neg(a));
  }
  return a.l + a.m * $intern_16 + a.h * $intern_17;
}

function toInt(a){
  return a.l | a.m << 22;
}

function xor(a, b){
  return {l:a.l ^ b.l, m:a.m ^ b.m, h:a.h ^ b.h};
}

var boxedValues;
function $clinit_LongLib$Const(){
  $clinit_LongLib$Const = emptyMethod;
  MAX_VALUE = create0($intern_13, $intern_13, 524287);
  MIN_VALUE = create0(0, 0, $intern_15);
  ONE = fromInt(1);
  fromInt(2);
  ZERO = fromInt(0);
}

var MAX_VALUE, MIN_VALUE, ONE, ZERO;
function hasTypeMarker(o){
  return o.typeMarker$ === typeMarkerFn;
}

function init(){
  $wnd.setTimeout($entry(assertCompileTimeUserAgent));
  $onModuleLoad_0();
  $onModuleLoad(new Salas);
}

function $replace(this$static, input_0, replacement){
  return input_0.replace(this$static, replacement);
}

function OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(html){
  if (html == null) {
    throw new NullPointerException_0('html is null');
  }
  this.html = html;
}

defineClass(221, 1, {71:1, 3:1}, OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml);
_.asString = function asString(){
  return this.html;
}
;
_.equals$ = function equals_6(obj){
  if (!instanceOf(obj, 71)) {
    return false;
  }
  return $equals(this.html, dynamicCast(obj, 71).asString());
}
;
_.hashCode$ = function hashCode_8(){
  return getHashCode_0(this.html);
}
;
var Lcom_google_gwt_safehtml_shared_OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml', 221);
function SafeHtmlString(){
  this.html = '';
}

defineClass(220, 1, {71:1, 3:1}, SafeHtmlString);
_.asString = function asString_0(){
  return this.html;
}
;
_.equals$ = function equals_7(obj){
  if (!instanceOf(obj, 71)) {
    return false;
  }
  return $equals(this.html, dynamicCast(obj, 71).asString());
}
;
_.hashCode$ = function hashCode_9(){
  return getHashCode_0(this.html);
}
;
_.toString$ = function toString_14(){
  return 'safe: "' + this.html + '"';
}
;
var Lcom_google_gwt_safehtml_shared_SafeHtmlString_2_classLit = createForClass('com.google.gwt.safehtml.shared', 'SafeHtmlString', 220);
function $clinit_SafeHtmlUtils(){
  $clinit_SafeHtmlUtils = emptyMethod;
  new SafeHtmlString;
  AMP_RE = new RegExp('&', 'g');
  GT_RE = new RegExp('>', 'g');
  LT_RE = new RegExp('<', 'g');
  SQUOT_RE = new RegExp("'", 'g');
  QUOT_RE = new RegExp('"', 'g');
}

function htmlEscape(s){
  $clinit_SafeHtmlUtils();
  s.indexOf('&') != -1 && (s = $replace(AMP_RE, s, '&amp;'));
  s.indexOf('<') != -1 && (s = $replace(LT_RE, s, '&lt;'));
  s.indexOf('>') != -1 && (s = $replace(GT_RE, s, '&gt;'));
  s.indexOf('"') != -1 && (s = $replace(QUOT_RE, s, '&quot;'));
  s.indexOf("'") != -1 && (s = $replace(SQUOT_RE, s, '&#39;'));
  return s;
}

var AMP_RE, GT_RE, LT_RE, QUOT_RE, SQUOT_RE;
defineClass(340, 1, {});
var Lcom_google_gwt_text_shared_AbstractRenderer_2_classLit = createForClass('com.google.gwt.text.shared', 'AbstractRenderer', 340);
function PassthroughParser(){
}

defineClass(216, 1, {}, PassthroughParser);
var INSTANCE_0;
var Lcom_google_gwt_text_shared_testing_PassthroughParser_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughParser', 216);
function PassthroughRenderer(){
}

defineClass(215, 340, {}, PassthroughRenderer);
var INSTANCE_1;
var Lcom_google_gwt_text_shared_testing_PassthroughRenderer_2_classLit = createForClass('com.google.gwt.text.shared.testing', 'PassthroughRenderer', 215);
function dispatchEvent_1(evt, elem, listener){
  var prevCurrentEvent;
  prevCurrentEvent = currentEvent;
  currentEvent = evt;
  elem == sCaptureElem && $eventGetTypeInt(evt.type) == 8192 && (sCaptureElem = null);
  listener.onBrowserEvent(evt);
  currentEvent = prevCurrentEvent;
}

function previewEvent(evt){
  var ret;
  ret = fire_3(handlers_0, evt);
  if (!ret && !!evt) {
    $eventStopPropagation(evt);
    $eventPreventDefault(evt);
  }
  return ret;
}

function releaseCapture(elem){
  !!sCaptureElem && elem == sCaptureElem && (sCaptureElem = null);
  $maybeInitializeEventSystem();
  elem.releaseCapture();
}

function resolve(maybePotential){
  return maybePotential.__gwt_resolve?maybePotential.__gwt_resolve():maybePotential;
}

function setCapture(elem){
  sCaptureElem = elem;
  $maybeInitializeEventSystem();
  elem.setCapture();
}

function sinkEvents(elem, eventBits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, eventBits);
}

var currentEvent = null, sCaptureElem;
function $onModuleLoad_0(){
  var allowedModes, currentMode, i;
  currentMode = $doc.compatMode;
  allowedModes = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['CSS1Compat']);
  for (i = 0; i < allowedModes.length; i++) {
    if ($equals(allowedModes[i], currentMode)) {
      return;
    }
  }
  allowedModes.length == 1 && $equals('CSS1Compat', allowedModes[0]) && $equals('BackCompat', currentMode)?"GWT no longer supports Quirks Mode (document.compatMode=' BackCompat').<br>Make sure your application's host HTML page has a Standards Mode (document.compatMode=' CSS1Compat') doctype,<br>e.g. by using &lt;!doctype html&gt; at the start of your application's HTML page.<br><br>To continue using this unsupported rendering mode and risk layout problems, suppress this message by adding<br>the following line to your*.gwt.xml module file:<br>&nbsp;&nbsp;&lt;extend-configuration-property name=\"document.compatMode\" value=\"" + currentMode + '"/&gt;':"Your *.gwt.xml module configuration prohibits the use of the current document rendering mode (document.compatMode=' " + currentMode + "').<br>Modify your application's host HTML page doctype, or update your custom " + "'document.compatMode' configuration property settings.";
}

function addNativePreviewHandler(handler){
  $maybeInitializeEventSystem();
  !TYPE_5 && (TYPE_5 = new GwtEvent$Type);
  if (!handlers_0) {
    handlers_0 = new HandlerManager_0(null, true);
    singleton = new Event$NativePreviewEvent;
  }
  return $addHandler_0(handlers_0, TYPE_5, handler);
}

var handlers_0;
function $dispatch_1(this$static, handler){
  $previewNativeEvent(handler.this$01, this$static);
  singleton.isFirstHandler = false;
}

function $revive(this$static){
  this$static.dead = false;
  this$static.source = null;
  this$static.isCanceled = false;
  this$static.isConsumed = false;
  this$static.isFirstHandler = true;
  this$static.nativeEvent = null;
}

function $setNativeEvent_0(this$static, nativeEvent){
  this$static.nativeEvent = nativeEvent;
}

function Event$NativePreviewEvent(){
}

function fire_3(handlers, nativeEvent){
  var lastIsCanceled, lastIsConsumed, lastIsFirstHandler, lastNativeEvent, ret;
  if (!!TYPE_5 && !!handlers && $isEventHandled(handlers, TYPE_5)) {
    lastIsCanceled = singleton.isCanceled;
    lastIsConsumed = singleton.isConsumed;
    lastIsFirstHandler = singleton.isFirstHandler;
    lastNativeEvent = singleton.nativeEvent;
    $revive(singleton);
    $setNativeEvent_0(singleton, nativeEvent);
    $fireEvent_0(handlers, singleton);
    ret = !(singleton.isCanceled && !singleton.isConsumed);
    singleton.isCanceled = lastIsCanceled;
    singleton.isConsumed = lastIsConsumed;
    singleton.isFirstHandler = lastIsFirstHandler;
    singleton.nativeEvent = lastNativeEvent;
    return ret;
  }
  return true;
}

defineClass(162, 315, {}, Event$NativePreviewEvent);
_.dispatch = function dispatch_5(handler){
  $dispatch_1(this, dynamicCast(handler, 348));
}
;
_.getAssociatedType = function getAssociatedType_6(){
  return TYPE_5;
}
;
_.revive = function revive_0(){
  $revive(this);
}
;
_.isCanceled = false;
_.isConsumed = false;
_.isFirstHandler = false;
var TYPE_5, singleton;
var Lcom_google_gwt_user_client_Event$NativePreviewEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Event/NativePreviewEvent', 162);
function $clinit_History(){
  $clinit_History = emptyMethod;
  new History$HistoryImplIE8;
  historyEventSource = new History$HistoryEventSource;
  token = getDecodedHash();
}

function addValueChangeHandler(handler){
  $clinit_History();
  return $addValueChangeHandler(historyEventSource, handler);
}

function getDecodedHash(){
  var hashToken, href_0, hashLoc;
  hashToken = (href_0 = $wnd.location.href , hashLoc = href_0.indexOf('#') , hashLoc > 0?href_0.substring(hashLoc):'');
  if (hashToken == null || !hashToken.length) {
    return '';
  }
  return $decodeHistoryToken(__substr(hashToken, 1, hashToken.length - 1));
}

function onHashChanged(){
  $clinit_History();
  var hashToken;
  hashToken = getDecodedHash();
  if (!$equals(hashToken, token)) {
    token = hashToken;
    fire_2(historyEventSource);
  }
}

var historyEventSource, token;
function $addValueChangeHandler(this$static, handler){
  return $addHandler_0(this$static.handlers, (!TYPE_4 && (TYPE_4 = new GwtEvent$Type) , TYPE_4), handler);
}

function History$HistoryEventSource(){
  this.handlers = new HandlerManager(null);
}

defineClass(303, 1, {12:1}, History$HistoryEventSource);
_.fireEvent_0 = function fireEvent_1(event_0){
  $fireEvent_0(this.handlers, event_0);
}
;
var Lcom_google_gwt_user_client_History$HistoryEventSource_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryEventSource', 303);
function $decodeHistoryToken(historyToken){
  return $wnd.decodeURI(historyToken.replace('%23', '#'));
}

defineClass(304, 1, {});
_.attachListener = function attachListener(){
  var handler = $entry(onHashChanged);
  $wnd.addEventListener('hashchange', handler, false);
}
;
var Lcom_google_gwt_user_client_History$HistoryImpl_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImpl', 304);
function History$HistoryImplIE8(){
  this.attachListener();
}

defineClass(305, 304, {}, History$HistoryImplIE8);
_.attachListener = function attachListener_0(){
  var handler = $entry(onHashChanged);
  var oldHandler = $wnd.onhashchange;
  $wnd.onhashchange = function(){
    var ex;
    try {
      handler();
    }
     catch (e) {
      ex = e;
    }
    if (oldHandler != null) {
      try {
        oldHandler();
      }
       catch (e) {
        ex = ex || e;
      }
    }
    if (ex != null) {
      throw ex;
    }
  }
  ;
}
;
var Lcom_google_gwt_user_client_History$HistoryImplIE8_2_classLit = createForClass('com.google.gwt.user.client', 'History/HistoryImplIE8', 305);
function addCloseHandler(handler){
  maybeInitializeCloseHandlers();
  return addHandler(TYPE_2?TYPE_2:(TYPE_2 = new GwtEvent$Type), handler);
}

function addHandler(type_0, handler){
  return $addHandler_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1), type_0, handler);
}

function addResizeHandler(handler){
  maybeInitializeCloseHandlers();
  maybeInitializeResizeHandlers();
  return addHandler((!TYPE_3 && (TYPE_3 = new GwtEvent$Type) , TYPE_3), handler);
}

function alert_0(msg){
  $wnd.alert(msg);
}

function maybeInitializeCloseHandlers(){
  if (!closeHandlersInitialized) {
    $initHandler('function __gwt_initWindowCloseHandler(beforeunload, unload) {\n  var wnd = window\n  , oldOnBeforeUnload = wnd.onbeforeunload\n  , oldOnUnload = wnd.onunload;\n  \n  wnd.onbeforeunload = function(evt) {\n    var ret, oldRet;\n    try {\n      ret = beforeunload();\n    } finally {\n      oldRet = oldOnBeforeUnload && oldOnBeforeUnload(evt);\n    }\n    // Avoid returning null as IE6 will coerce it into a string.\n    // Ensure that "" gets returned properly.\n    if (ret != null) {\n      return ret;\n    }\n    if (oldRet != null) {\n      return oldRet;\n    }\n    // returns undefined.\n  };\n  \n  wnd.onunload = function(evt) {\n    try {\n      unload();\n    } finally {\n      oldOnUnload && oldOnUnload(evt);\n      wnd.onresize = null;\n      wnd.onscroll = null;\n      wnd.onbeforeunload = null;\n      wnd.onunload = null;\n    }\n  };\n  \n  // Remove the reference once we\'ve initialize the handler\n  wnd.__gwt_initWindowCloseHandler = undefined;\n}\n', new WindowImplIE$1);
    closeHandlersInitialized = true;
  }
}

function maybeInitializeResizeHandlers(){
  if (!resizeHandlersInitialized) {
    $initHandler("function __gwt_initWindowResizeHandler(resize) {\n  var wnd = window, oldOnResize = wnd.onresize;\n  \n  wnd.onresize = function(evt) {\n    try {\n      resize();\n    } finally {\n      oldOnResize && oldOnResize(evt);\n    }\n  };\n  \n  // Remove the reference once we've initialize the handler\n  wnd.__gwt_initWindowResizeHandler = undefined;\n}\n", new WindowImplIE$2);
    resizeHandlersInitialized = true;
  }
}

function onClosed(){
  closeHandlersInitialized && fire_0((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
}

function onClosing(){
  var event_0;
  if (closeHandlersInitialized) {
    event_0 = new Window$ClosingEvent;
    !!handlers_1 && $fireEvent_0(handlers_1, event_0);
    return null;
  }
  return null;
}

function onResize(){
  var height, width_0;
  if (resizeHandlersInitialized) {
    width_0 = $getClientWidth($doc);
    height = $getClientHeight($doc);
    if (lastResizeWidth != width_0 || lastResizeHeight != height) {
      lastResizeWidth = width_0;
      lastResizeHeight = height;
      fire_1((!handlers_1 && (handlers_1 = new Window$WindowHandlers) , handlers_1));
    }
  }
}

var closeHandlersInitialized = false, handlers_1, lastResizeHeight = 0, lastResizeWidth = 0, resizeHandlersInitialized = false;
function $clinit_Window$ClosingEvent(){
  $clinit_Window$ClosingEvent = emptyMethod;
  TYPE_6 = new GwtEvent$Type;
}

function Window$ClosingEvent(){
  $clinit_Window$ClosingEvent();
}

defineClass(147, 315, {}, Window$ClosingEvent);
_.dispatch = function dispatch_6(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_7(){
  return TYPE_6;
}
;
var TYPE_6;
var Lcom_google_gwt_user_client_Window$ClosingEvent_2_classLit = createForClass('com.google.gwt.user.client', 'Window/ClosingEvent', 147);
function Window$WindowHandlers(){
  HandlerManager.call(this, null);
}

defineClass(80, 44, {12:1}, Window$WindowHandlers);
var Lcom_google_gwt_user_client_Window$WindowHandlers_2_classLit = createForClass('com.google.gwt.user.client', 'Window/WindowHandlers', 80);
function $eventGetTypeInt(eventType){
  switch (eventType) {
    case 'blur':
      return 4096;
    case 'change':
      return 1024;
    case 'click':
      return 1;
    case 'dblclick':
      return 2;
    case 'focus':
      return 2048;
    case 'keydown':
      return 128;
    case 'keypress':
      return 256;
    case 'keyup':
      return 512;
    case 'load':
      return $intern_19;
    case 'losecapture':
      return 8192;
    case 'mousedown':
      return 4;
    case 'mousemove':
      return 64;
    case 'mouseout':
      return 32;
    case 'mouseover':
      return 16;
    case 'mouseup':
      return 8;
    case 'scroll':
      return 16384;
    case 'error':
      return $intern_20;
    case 'DOMMouseScroll':
    case 'mousewheel':
      return 131072;
    case 'contextmenu':
      return 262144;
    case 'paste':
      return $intern_15;
    case 'touchstart':
      return 1048576;
    case 'touchmove':
      return 2097152;
    case 'touchend':
      return $intern_16;
    case 'touchcancel':
      return 8388608;
    case 'gesturestart':
      return 16777216;
    case 'gesturechange':
      return 33554432;
    case 'gestureend':
      return 67108864;
    default:return -1;
  }
}

function $getEventsSunk(elem){
  return elem.__eventBits || 0;
}

function $maybeInitializeEventSystem(){
  if (!eventSystemIsInitialized) {
    $initEventSystem();
    eventSystemIsInitialized = true;
  }
}

function getEventListener_0(elem){
  var maybeListener = elem.__listener;
  return !instanceOfJso(maybeListener) && instanceOf(maybeListener, 15)?maybeListener:null;
}

function setEventListener(elem, listener){
  elem.__listener = listener;
}

var eventSystemIsInitialized = false;
function $initEventSystem(){
  $wnd.__gwt_globalEventArray == null && ($wnd.__gwt_globalEventArray = new Array);
  $wnd.__gwt_globalEventArray[$wnd.__gwt_globalEventArray.length] = $entry(function(){
    return previewEvent($wnd.event);
  }
  );
  var dispatchEvent_0 = $entry(function(){
    var oldEventTarget = currentEventTarget;
    currentEventTarget = this;
    if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      if (!previewEventImpl()) {
        currentEventTarget = oldEventTarget;
        return;
      }
    }
    var getEventListener = getEventListener_0;
    var listener, curElem = this;
    while (curElem && !(listener = getEventListener(curElem))) {
      curElem = curElem.parentElement;
    }
    listener && dispatchEvent_1($wnd.event, curElem, listener);
    currentEventTarget = oldEventTarget;
  }
  );
  var dispatchDblClickEvent = $entry(function(){
    var newEvent = $doc.createEventObject();
    $wnd.event.returnValue == null && $wnd.event.srcElement.fireEvent && $wnd.event.srcElement.fireEvent('onclick', newEvent);
    if (this.__eventBits & 2) {
      dispatchEvent_0.call(this);
    }
     else if ($wnd.event.returnValue == null) {
      $wnd.event.returnValue = true;
      previewEventImpl();
    }
  }
  );
  var dispatchUnhandledEvent = $entry(function(){
    this.__gwtLastUnhandledEvent = $wnd.event.type;
    dispatchEvent_0.call(this);
  }
  );
  var moduleName = $moduleName.replace(/\./g, '_');
  $wnd['__gwt_dispatchEvent_' + moduleName] = dispatchEvent_0;
  callDispatchEvent = (new Function('w', 'return function() { w.__gwt_dispatchEvent_' + moduleName + '.call(this) }'))($wnd);
  $wnd['__gwt_dispatchDblClickEvent_' + moduleName] = dispatchDblClickEvent;
  callDispatchDblClickEvent = (new Function('w', 'return function() { w.__gwt_dispatchDblClickEvent_' + moduleName + '.call(this)}'))($wnd);
  $wnd['__gwt_dispatchUnhandledEvent_' + moduleName] = dispatchUnhandledEvent;
  callDispatchUnhandledEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(this)}'))($wnd);
  callDispatchOnLoadEvent = (new Function('w', 'return function() { w.__gwt_dispatchUnhandledEvent_' + moduleName + '.call(w.event.srcElement)}'))($wnd);
  var bodyDispatcher = $entry(function(){
    dispatchEvent_0.call($doc.body);
  }
  );
  var bodyDblClickDispatcher = $entry(function(){
    dispatchDblClickEvent.call($doc.body);
  }
  );
  $doc.body.attachEvent('onclick', bodyDispatcher);
  $doc.body.attachEvent('onmousedown', bodyDispatcher);
  $doc.body.attachEvent('onmouseup', bodyDispatcher);
  $doc.body.attachEvent('onmousemove', bodyDispatcher);
  $doc.body.attachEvent('onmousewheel', bodyDispatcher);
  $doc.body.attachEvent('onkeydown', bodyDispatcher);
  $doc.body.attachEvent('onkeypress', bodyDispatcher);
  $doc.body.attachEvent('onkeyup', bodyDispatcher);
  $doc.body.attachEvent('onfocus', bodyDispatcher);
  $doc.body.attachEvent('onblur', bodyDispatcher);
  $doc.body.attachEvent('ondblclick', bodyDblClickDispatcher);
  $doc.body.attachEvent('oncontextmenu', bodyDispatcher);
}

function $insertChild(parent_0, child, index_0){
  index_0 >= parent_0.children.length?parent_0.appendChild(child):parent_0.insertBefore(child, parent_0.children[index_0]);
}

function $sinkEvents(elem, bits){
  $maybeInitializeEventSystem();
  $sinkEventsImpl(elem, bits);
}

function $sinkEventsImpl(elem, bits){
  var chMask = (elem.__eventBits || 0) ^ bits;
  elem.__eventBits = bits;
  if (!chMask)
    return;
  chMask & 1 && (elem.onclick = bits & 1?callDispatchEvent:null);
  chMask & 3 && (elem.ondblclick = bits & 3?callDispatchDblClickEvent:null);
  chMask & 4 && (elem.onmousedown = bits & 4?callDispatchEvent:null);
  chMask & 8 && (elem.onmouseup = bits & 8?callDispatchEvent:null);
  chMask & 16 && (elem.onmouseover = bits & 16?callDispatchEvent:null);
  chMask & 32 && (elem.onmouseout = bits & 32?callDispatchEvent:null);
  chMask & 64 && (elem.onmousemove = bits & 64?callDispatchEvent:null);
  chMask & 128 && (elem.onkeydown = bits & 128?callDispatchEvent:null);
  chMask & 256 && (elem.onkeypress = bits & 256?callDispatchEvent:null);
  chMask & 512 && (elem.onkeyup = bits & 512?callDispatchEvent:null);
  chMask & 1024 && (elem.onchange = bits & 1024?callDispatchEvent:null);
  chMask & 2048 && (elem.onfocus = bits & 2048?callDispatchEvent:null);
  chMask & 4096 && (elem.onblur = bits & 4096?callDispatchEvent:null);
  chMask & 8192 && (elem.onlosecapture = bits & 8192?callDispatchEvent:null);
  chMask & 16384 && (elem.onscroll = bits & 16384?callDispatchEvent:null);
  chMask & $intern_19 && (elem.nodeName == 'IFRAME'?bits & $intern_19?elem.attachEvent('onload', callDispatchOnLoadEvent):elem.detachEvent('onload', callDispatchOnLoadEvent):(elem.onload = bits & $intern_19?callDispatchUnhandledEvent:null));
  chMask & $intern_20 && (elem.onerror = bits & $intern_20?callDispatchEvent:null);
  chMask & 131072 && (elem.onmousewheel = bits & 131072?callDispatchEvent:null);
  chMask & 262144 && (elem.oncontextmenu = bits & 262144?callDispatchEvent:null);
  chMask & $intern_15 && (elem.onpaste = bits & $intern_15?callDispatchEvent:null);
}

function previewEventImpl(){
  var isCancelled = false;
  for (var i = 0; i < $wnd.__gwt_globalEventArray.length; i++) {
    !$wnd.__gwt_globalEventArray[i]() && (isCancelled = true);
  }
  return !isCancelled;
}

var callDispatchDblClickEvent, callDispatchEvent, callDispatchOnLoadEvent, callDispatchUnhandledEvent;
function $get_1(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  if (index_0 < 0) {
    return null;
  }
  return dynamicCast($get_5(this$static.uiObjectList, index_0), 10);
}

function $removeByElement(this$static, elem){
  var index_0;
  index_0 = getIndex(elem);
  elem['__uiObjectID'] = null;
  $set_1(this$static.uiObjectList, index_0);
}

function ElementMapperImpl(){
  this.uiObjectList = new ArrayList;
}

function getIndex(elem){
  var index_0 = elem['__uiObjectID'];
  return index_0 == null?-1:index_0;
}

defineClass(307, 1, {}, ElementMapperImpl);
var Lcom_google_gwt_user_client_impl_ElementMapperImpl_2_classLit = createForClass('com.google.gwt.user.client.impl', 'ElementMapperImpl', 307);
function $initHandler(initFunc, cmd){
  var scriptElem;
  scriptElem = $createScriptElement($doc, initFunc);
  $appendChild($doc.body, scriptElem);
  cmd.execute_1();
  $removeChild($doc.body, scriptElem);
}

function WindowImplIE$1(){
}

defineClass(160, 1, {}, WindowImplIE$1);
_.execute_1 = function execute_4(){
  $wnd.__gwt_initWindowCloseHandler($entry(onClosing), $entry(onClosed));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$1_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/1', 160);
function WindowImplIE$2(){
}

defineClass(161, 1, {}, WindowImplIE$2);
_.execute_1 = function execute_5(){
  $wnd.__gwt_initWindowResizeHandler($entry(onResize));
}
;
var Lcom_google_gwt_user_client_impl_WindowImplIE$2_2_classLit = createForClass('com.google.gwt.user.client.impl', 'WindowImplIE/2', 161);
function $clear(this$static){
  var it;
  it = new WidgetCollection$WidgetIterator(this$static.children_0);
  while (it.index_0 < it.this$01.size_0) {
    $next_1(it);
    $remove_6(it);
  }
}

defineClass(314, 9, $intern_1);
_.doAttachChildren = function doAttachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , attachCommand));
}
;
_.doDetachChildren = function doDetachChildren_0(){
  tryCommand(this, ($clinit_AttachDetachException() , detachCommand));
}
;
var Lcom_google_gwt_user_client_ui_Panel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Panel', 314);
function $add(this$static, child, container){
  $removeFromParent(child);
  $add_4(this$static.children_0, child);
  $appendChild(container, resolve(child.element));
  $setParent(child, this$static);
}

function $remove_0(this$static, w){
  var elem;
  if (w.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    elem = w.element;
    $removeChild($getParentElement(elem), elem);
    $remove_5(this$static.children_0, w);
  }
  return true;
}

function ComplexPanel(){
  this.children_0 = new WidgetCollection(this);
}

defineClass(95, 314, $intern_1);
_.iterator = function iterator_1(){
  return new WidgetCollection$WidgetIterator(this.children_0);
}
;
_.remove_0 = function remove_1(w){
  return $remove_0(this, w);
}
;
var Lcom_google_gwt_user_client_ui_ComplexPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ComplexPanel', 95);
function $add_0(this$static, w){
  $add(this$static, w, this$static.element);
}

function $remove_1(this$static, w){
  var removed;
  removed = $remove_0(this$static, w);
  removed && changeToStaticPositioning(w.element);
  return removed;
}

function changeToStaticPositioning(elem){
  $setPropertyImpl(elem.style, 'left', '');
  $setPropertyImpl(elem.style, 'top', '');
  $setPropertyImpl(elem.style, 'position', '');
}

defineClass(143, 95, $intern_1);
_.remove_0 = function remove_2(w){
  return $remove_1(this, w);
}
;
var Lcom_google_gwt_user_client_ui_AbsolutePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AbsolutePanel', 143);
function $clinit_AttachDetachException(){
  $clinit_AttachDetachException = emptyMethod;
  attachCommand = new AttachDetachException$1;
  detachCommand = new AttachDetachException$2;
}

function AttachDetachException(causes){
  UmbrellaException_0.call(this, causes);
}

function tryCommand(hasWidgets, c){
  $clinit_AttachDetachException();
  var caught, e, w, w$iterator;
  caught = null;
  for (w$iterator = hasWidgets.iterator(); w$iterator.hasNext();) {
    w = dynamicCast(w$iterator.next(), 9);
    try {
      c.execute_2(w);
    }
     catch ($e0) {
      $e0 = wrap($e0);
      if (instanceOf($e0, 7)) {
        e = $e0;
        !caught && (caught = new HashSet);
        $add_6(caught, e);
      }
       else 
        throw unwrap_5($e0);
    }
  }
  if (caught) {
    throw new AttachDetachException(caught);
  }
}

defineClass(134, 97, $intern_11, AttachDetachException);
var attachCommand, detachCommand;
var Lcom_google_gwt_user_client_ui_AttachDetachException_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException', 134);
function AttachDetachException$1(){
}

defineClass(135, 1, {}, AttachDetachException$1);
_.execute_2 = function execute_6(w){
  w.onAttach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/1', 135);
function AttachDetachException$2(){
}

defineClass(136, 1, {}, AttachDetachException$2);
_.execute_2 = function execute_7(w){
  w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_AttachDetachException$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'AttachDetachException/2', 136);
function Button(handler){
  ButtonBase.call(this, $doc.createElement("<BUTTON type='button'><\/BUTTON>"));
  $setClassName(this.element, 'gwt-Button');
  $setInnerHTML(this.element, 'Reservar');
  $addDomHandler(this, handler, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE));
}

defineClass(72, 99, $intern_1, Button);
var Lcom_google_gwt_user_client_ui_Button_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Button', 72);
function $getWidgetTd(this$static, w){
  if (w.parent_0 != this$static) {
    return null;
  }
  return $getParentElement(w.element);
}

function $setCellHorizontalAlignment(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyString(td, 'align', align_0.textAlignString);
}

function $setCellVerticalAlignment(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_0(td, align_0){
  $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setCellVerticalAlignment_1(this$static, w, align_0){
  var td;
  td = $getWidgetTd(this$static, w);
  !!td && $setPropertyImpl(td.style, 'verticalAlign', align_0.verticalAlignString);
}

function $setSpacing(this$static, spacing){
  $setPropertyInt(this$static.table, 'cellSpacing', spacing);
}

function CellPanel(){
  ComplexPanel.call(this);
  this.table = $createElement($doc, 'table');
  this.body_0 = $createElement($doc, 'tbody');
  $appendChild(this.table, resolve(this.body_0));
  $setElement(this, this.table);
}

defineClass(96, 95, $intern_1);
var Lcom_google_gwt_user_client_ui_CellPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CellPanel', 96);
function $getFace(this$static){
  if (!this$static.face_0) {
    if (!this$static.delegateTo) {
      this$static.face_0 = $createElement($doc, 'div');
      return this$static.face_0;
    }
     else {
      return $getFace(this$static.delegateTo);
    }
  }
   else {
    return this$static.face_0;
  }
}

function $setText(this$static, text_0){
  this$static.face_0 = $createElement($doc, 'div');
  setStyleName(this$static.face_0, 'html-face', true);
  $setInnerText(this$static.face_0, text_0);
  !!this$static.this$01.curFace && $getFace(this$static.this$01.curFace) == $getFace(this$static) && $setCurrentFaceElement(this$static.this$01, this$static.face_0);
}

defineClass(222, 1, {});
_.toString$ = function toString_15(){
  return this.val$name4;
}
;
var Lcom_google_gwt_user_client_ui_CustomButton$Face_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/Face', 222);
function CustomButton$2(this$0, $anonymous0, val$name, val$faceID){
  this.val$name4 = val$name;
  this.val$faceID5 = val$faceID;
  this.this$01 = this$0;
  this.delegateTo = $anonymous0;
}

defineClass(37, 222, {}, CustomButton$2);
_.val$faceID5 = 0;
var Lcom_google_gwt_user_client_ui_CustomButton$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CustomButton/2', 37);
function $add_1(this$static, w){
  if (this$static.widget) {
    throw new IllegalStateException_0('SimplePanel can only contain one child widget');
  }
  $setWidget(this$static, w);
}

function $remove_2(this$static, w){
  if (this$static.widget != w) {
    return false;
  }
  try {
    $setParent(w, null);
  }
   finally {
    $removeChild(this$static.getContainerElement(), w.element);
    this$static.widget = null;
  }
  return true;
}

function $setWidget(this$static, w){
  if (w == this$static.widget) {
    return;
  }
  !!w && $removeFromParent(w);
  !!this$static.widget && $remove_2(this$static, this$static.widget);
  this$static.widget = w;
  if (w) {
    $appendChild(this$static.getContainerElement(), resolve(this$static.widget.element));
    $setParent(w, this$static);
  }
}

function SimplePanel(elem){
  $setElement_0(this, elem);
}

defineClass(62, 314, $intern_1);
_.getContainerElement = function getContainerElement(){
  return this.element;
}
;
_.iterator = function iterator_2(){
  return new SimplePanel$1(this);
}
;
_.remove_0 = function remove_3(w){
  return $remove_2(this, w);
}
;
var Lcom_google_gwt_user_client_ui_SimplePanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel', 62);
function $clinit_DecoratorPanel(){
  $clinit_DecoratorPanel = emptyMethod;
  DEFAULT_ROW_STYLENAMES = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['top', 'middle', 'bottom']);
}

function DecoratorPanel(){
  $clinit_DecoratorPanel();
  DecoratorPanel_0.call(this, DEFAULT_ROW_STYLENAMES);
}

function DecoratorPanel_0(rowStyles){
  var i, row, table, trElem;
  SimplePanel.call(this, $createElement($doc, 'table'));
  table = this.element;
  this.tbody = $createElement($doc, 'tbody');
  $appendChild(table, resolve(this.tbody));
  $setPropertyInt(table, 'cellSpacing', 0);
  $setPropertyInt(table, 'cellPadding', 0);
  for (i = 0; i < rowStyles.length; i++) {
    row = (trElem = $createElement($doc, 'tr') , $setClassName(trElem, rowStyles[i]) , $clinit_LocaleInfo() , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Left'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Center'))) , $appendChild(trElem, resolve(createTD(rowStyles[i] + 'Right'))) , trElem);
    $appendChild(this.tbody, resolve(row));
    i == 1 && (this.containerElem = $getFirstChildElement(row.children[1]));
  }
  $setClassName(this.element, 'gwt-DecoratorPanel');
}

function createTD(styleName){
  var inner, tdElem;
  tdElem = $createElement($doc, 'td');
  inner = $createElement($doc, 'div');
  $appendChild(tdElem, resolve(inner));
  $setClassName(tdElem, styleName);
  $setClassName(inner, styleName + 'Inner');
  return tdElem;
}

defineClass(92, 62, $intern_1, DecoratorPanel);
_.getContainerElement = function getContainerElement_0(){
  return this.containerElem;
}
;
var DEFAULT_ROW_STYLENAMES;
var Lcom_google_gwt_user_client_ui_DecoratorPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DecoratorPanel', 92);
function $setTextOrHtml(this$static, content_0, isHtml){
  isHtml?$setInnerHTML(this$static.element, content_0):$setInnerText(this$static.element, content_0);
  if (this$static.textDir != this$static.initialElementDir) {
    this$static.textDir = this$static.initialElementDir;
    setDirectionOnElement(this$static.element, this$static.initialElementDir);
  }
}

function DirectionalTextHelper(element){
  this.element = element;
  this.initialElementDir = getDirectionOnElement(element);
  this.textDir = this.initialElementDir;
}

defineClass(163, 1, {}, DirectionalTextHelper);
var Lcom_google_gwt_user_client_ui_DirectionalTextHelper_2_classLit = createForClass('com.google.gwt.user.client.ui', 'DirectionalTextHelper', 163);
function $fireSubmitEvent(this$static){
  var event_0;
  event_0 = new FormPanel$SubmitEvent;
  !!this$static.handlerManager && $fireEvent_0(this$static.handlerManager, event_0);
  return !event_0.canceled;
}

function $setTarget_0(this$static, target){
  $setTarget(this$static.element, target);
}

function $submit(this$static){
  if (!$fireSubmitEvent(this$static)) {
    return;
  }
  $submit_0(this$static.element, this$static.synthesizedFrame);
}

function FormPanel(){
  FormPanel_0.call(this, $createElement($doc, 'form'));
}

function FormPanel_0(element){
  SimplePanel.call(this, element);
  this.frameName = 'FormPanel_' + $moduleName + '_' + ++formId;
  $setTarget_0(this, this.frameName);
  this.eventsToSink == -1?$sinkEvents(this.element, $intern_19 | $getEventsSunk(this.element)):(this.eventsToSink |= $intern_19);
}

defineClass(91, 62, $intern_1, FormPanel);
_.onAttach = function onAttach_2(){
  var dummy;
  $onAttach(this);
  if (this.frameName != null) {
    dummy = $createElement($doc, 'div');
    $setInnerHTML(dummy, $get_2(this.frameName).html);
    this.synthesizedFrame = $getFirstChildElement(dummy);
    $appendChild($doc.body, this.synthesizedFrame);
  }
  $hookEvents(this.synthesizedFrame, this.element, this);
}
;
_.onDetach = function onDetach_1(){
  $onDetach(this);
  $unhookEvents(this.synthesizedFrame, this.element);
  if (this.synthesizedFrame) {
    $removeChild($doc.body, this.synthesizedFrame);
    this.synthesizedFrame = null;
  }
}
;
_.onFormSubmit = function onFormSubmit(){
  return $fireSubmitEvent(this);
}
;
_.onFrameLoad = function onFrameLoad(){
  $scheduleDeferred(($clinit_SchedulerImpl() , INSTANCE), new FormPanel$1(this));
}
;
var formId = 0;
var Lcom_google_gwt_user_client_ui_FormPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel', 91);
function FormPanel$1(this$0){
  this.this$01 = this$0;
}

defineClass(120, 1, {}, FormPanel$1);
_.execute_1 = function execute_8(){
  $fireEvent(this.this$01, new FormPanel$SubmitCompleteEvent($getContents(this.this$01.synthesizedFrame)));
}
;
var Lcom_google_gwt_user_client_ui_FormPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel/1', 120);
function FormPanel$SubmitCompleteEvent(){
}

defineClass(122, 315, {}, FormPanel$SubmitCompleteEvent);
_.dispatch = function dispatch_7(handler){
  throwClassCastExceptionUnlessNull(handler);
  null.nullMethod();
}
;
_.getAssociatedType = function getAssociatedType_8(){
  return !TYPE_7 && (TYPE_7 = new GwtEvent$Type) , TYPE_7;
}
;
var TYPE_7;
var Lcom_google_gwt_user_client_ui_FormPanel$SubmitCompleteEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel/SubmitCompleteEvent', 122);
function $dispatch_2(this$static, handler){
  $onSubmit(handler, this$static);
}

function FormPanel$SubmitEvent(){
}

defineClass(121, 315, {}, FormPanel$SubmitEvent);
_.dispatch = function dispatch_8(handler){
  $dispatch_2(this, dynamicCast(handler, 313));
}
;
_.getAssociatedType = function getAssociatedType_9(){
  return !TYPE_8 && (TYPE_8 = new GwtEvent$Type) , TYPE_8;
}
;
_.canceled = false;
var TYPE_8;
var Lcom_google_gwt_user_client_ui_FormPanel$SubmitEvent_2_classLit = createForClass('com.google.gwt.user.client.ui', 'FormPanel/SubmitEvent', 121);
function $get_2(arg0){
  var sb;
  sb = new StringBuilder;
  sb.string += "<iframe src=\"javascript:''\" name='";
  $append_0(sb, htmlEscape(arg0));
  sb.string += "' tabindex='-1' style='position:absolute;width:0;height:0;border:0'>";
  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);
}

function $checkCellBounds(this$static, row, column){
  var cellSize;
  $checkRowBounds(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Column ' + column + ' must be non-negative: ' + column);
  }
  cellSize = this$static.numColumns;
  if (cellSize <= column) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $checkRowBounds(this$static, row){
  var rowSize;
  rowSize = this$static.numRows;
  if (row >= rowSize || row < 0) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + rowSize);
  }
}

function $cleanCell(this$static, row, column, clearInnerHTML){
  var td;
  td = $getRawElement(this$static.cellFormatter, row, column);
  $internalClearCell(this$static, td, clearInnerHTML);
  return td;
}

function $internalClearCell(this$static, td, clearInnerHTML){
  var maybeChild, widget;
  maybeChild = $getFirstChildElement(td);
  widget = null;
  !!maybeChild && (widget = dynamicCast($get_1(this$static.widgetMap, maybeChild), 9));
  if (widget) {
    $remove_3(this$static, widget);
    return true;
  }
   else {
    clearInnerHTML && $setInnerHTML(td, '');
    return false;
  }
}

function $remove_3(this$static, widget){
  var elem;
  if (widget.parent_0 != this$static) {
    return false;
  }
  try {
    $setParent(widget, null);
  }
   finally {
    elem = widget.element;
    $removeChild($getParentElement(elem), elem);
    $removeByElement(this$static.widgetMap, elem);
  }
  return true;
}

function $removeRow(this$static, row){
  var column, columnCount;
  columnCount = this$static.numColumns;
  for (column = 0; column < columnCount; ++column) {
    $cleanCell(this$static, row, column, false);
  }
  $removeChild(this$static.bodyElem, $getRow(this$static.bodyElem, row));
}

function $setCellFormatter(this$static, cellFormatter){
  this$static.cellFormatter = cellFormatter;
}

function $setColumnFormatter(this$static, formatter){
  !!this$static.columnFormatter && (formatter.columnGroup = this$static.columnFormatter.columnGroup);
  this$static.columnFormatter = formatter;
  $prepareColumnGroup(this$static.columnFormatter);
}

function $setText_0(this$static, row, column, text_0){
  var td;
  $prepareCell(this$static, row, column);
  td = $cleanCell(this$static, row, column, text_0 == null);
  text_0 != null && $setInnerText(td, text_0);
}

defineClass(297, 314, $intern_1);
_.iterator = function iterator_3(){
  return new HTMLTable$1(this);
}
;
_.remove_0 = function remove_4(widget){
  return $remove_3(this, widget);
}
;
var Lcom_google_gwt_user_client_ui_HTMLTable_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable', 297);
function $prepareCell(this$static, row, column){
  $prepareRow(this$static, row);
  if (column < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a column with a negative index: ' + column);
  }
  if (column >= this$static.numColumns) {
    throw new IndexOutOfBoundsException_0('Column index: ' + column + ', Column size: ' + this$static.numColumns);
  }
}

function $prepareRow(this$static, row){
  if (row < 0) {
    throw new IndexOutOfBoundsException_0('Cannot access a row with a negative index: ' + row);
  }
  if (row >= this$static.numRows) {
    throw new IndexOutOfBoundsException_0('Row index: ' + row + ', Row size: ' + this$static.numRows);
  }
}

function $removeRow_0(this$static, row){
  $removeRow(this$static, row);
  --this$static.numRows;
}

function $resizeColumns(this$static, columns){
  var i, j, td, tr, tr_0, td_0, td_1;
  if (this$static.numColumns == columns) {
    return;
  }
  if (columns < 0) {
    throw new IndexOutOfBoundsException_0('Cannot set number of columns to ' + columns);
  }
  if (this$static.numColumns > columns) {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns - 1; j >= columns; j--) {
        $checkCellBounds(this$static, i, j);
        td = $cleanCell(this$static, i, j, false);
        tr = $getRow(this$static.bodyElem, i);
        tr.removeChild(td);
      }
    }
  }
   else {
    for (i = 0; i < this$static.numRows; i++) {
      for (j = this$static.numColumns; j < columns; j++) {
        tr_0 = $getRow(this$static.bodyElem, i);
        td_0 = (td_1 = $createElement($doc, 'td') , $setInnerHTML(td_1, '&nbsp;') , td_1);
        $insertChild(tr_0, resolve(td_0), j);
      }
    }
  }
  this$static.numColumns = columns;
  $resizeColumnGroup(this$static.columnFormatter, columns, false);
}

function $resizeRows(this$static, rows_0){
  if (this$static.numRows == rows_0) {
    return;
  }
  if (rows_0 < 0) {
    throw new IndexOutOfBoundsException_0('Cannot set number of rows to ' + rows_0);
  }
  if (this$static.numRows < rows_0) {
    addRows(this$static.bodyElem, rows_0 - this$static.numRows, this$static.numColumns);
    this$static.numRows = rows_0;
  }
   else {
    while (this$static.numRows > rows_0) {
      $removeRow_0(this$static, this$static.numRows - 1);
    }
  }
}

function Grid(rows_0, columns){
  this.widgetMap = new ElementMapperImpl;
  this.tableElem = $createElement($doc, 'table');
  this.bodyElem = $createElement($doc, 'tbody');
  $appendChild(this.tableElem, resolve(this.bodyElem));
  $setElement(this, this.tableElem);
  $setCellFormatter(this, new HTMLTable$CellFormatter(this));
  $setColumnFormatter(this, new HTMLTable$ColumnFormatter(this));
  $resizeColumns(this, columns);
  $resizeRows(this, rows_0);
}

function addRows(table, rows_0, columns){
  var td = $doc.createElement('td');
  td.innerHTML = '&nbsp;';
  var row = $doc.createElement('tr');
  for (var cellNum = 0; cellNum < columns; cellNum++) {
    var cell = td.cloneNode(true);
    row.appendChild(cell);
  }
  table.appendChild(row);
  for (var rowNum = 1; rowNum < rows_0; rowNum++) {
    table.appendChild(row.cloneNode(true));
  }
}

defineClass(74, 297, $intern_1, Grid);
_.numColumns = 0;
_.numRows = 0;
var Lcom_google_gwt_user_client_ui_Grid_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Grid', 74);
function LabelBase(element){
  $setElement_0(this, element);
  this.directionalTextHelper = new DirectionalTextHelper(this.element);
}

defineClass(66, 9, $intern_1);
var Lcom_google_gwt_user_client_ui_LabelBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'LabelBase', 66);
function Label(){
  LabelBase.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-Label');
}

function Label_0(element){
  LabelBase.call(this, element, $equalsIgnoreCase('span', $getTagName(element)));
}

defineClass(90, 66, $intern_1, Label);
var Lcom_google_gwt_user_client_ui_Label_2_classLit = createForClass('com.google.gwt.user.client.ui', 'Label', 90);
function HTML(html){
  Label_0.call(this, $createElement($doc, 'div'));
  $setClassName(this.element, 'gwt-HTML');
  $setTextOrHtml(this.directionalTextHelper, html, true);
}

function HTML_0(){
  HTML.call(this, '<div> <\/div>');
  this.element.style['whiteSpace'] = ($clinit_Style$WhiteSpace() , 'normal');
}

defineClass(50, 90, $intern_1, HTML, HTML_0);
var Lcom_google_gwt_user_client_ui_HTML_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTML', 50);
function $findNext(this$static){
  while (++this$static.nextIndex < this$static.widgetList.array.length) {
    if ($get_5(this$static.widgetList, this$static.nextIndex) != null) {
      return;
    }
  }
}

function $next(this$static){
  var result;
  if (this$static.nextIndex >= this$static.widgetList.array.length) {
    throw new NoSuchElementException;
  }
  result = dynamicCast($get_5(this$static.widgetList, this$static.nextIndex), 9);
  this$static.lastIndex_0 = this$static.nextIndex;
  $findNext(this$static);
  return result;
}

function HTMLTable$1(this$0){
  this.this$01 = this$0;
  this.widgetList = this.this$01.widgetMap.uiObjectList;
  $findNext(this);
}

defineClass(300, 1, {}, HTMLTable$1);
_.hasNext = function hasNext(){
  return this.nextIndex < this.widgetList.array.length;
}
;
_.next = function next_0(){
  return $next(this);
}
;
_.remove_1 = function remove_5(){
  var w;
  if (this.lastIndex_0 < 0) {
    throw new IllegalStateException;
  }
  w = dynamicCast($get_5(this.widgetList, this.lastIndex_0), 9);
  $removeFromParent(w);
  this.lastIndex_0 = -1;
}
;
_.lastIndex_0 = -1;
_.nextIndex = -1;
var Lcom_google_gwt_user_client_ui_HTMLTable$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/1', 300);
function $getCellElement(tbody, row, col){
  return $getCells(tbody.children[row])[col];
}

function $getRawElement(this$static, row, column){
  return $getCellElement(this$static.this$01.bodyElem, row, column);
}

function HTMLTable$CellFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(298, 1, {}, HTMLTable$CellFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$CellFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/CellFormatter', 298);
function $prepareColumnGroup(this$static){
  if (!this$static.columnGroup) {
    this$static.columnGroup = $createElement($doc, 'colgroup');
    $insertChild(this$static.this$01.tableElem, resolve(this$static.columnGroup), 0);
    $appendChild(this$static.columnGroup, resolve($createElement($doc, 'col')));
  }
}

function $resizeColumnGroup(this$static, columns, growOnly){
  var i, num;
  columns = columns > 1?columns:1;
  num = this$static.columnGroup.childNodes.length;
  if (num < columns) {
    for (i = num; i < columns; i++) {
      $appendChild(this$static.columnGroup, $createElement($doc, 'col'));
    }
  }
   else if (!growOnly && num > columns) {
    for (i = num; i > columns; i--) {
      $removeChild(this$static.columnGroup, this$static.columnGroup.lastChild);
    }
  }
}

function HTMLTable$ColumnFormatter(this$0){
  this.this$01 = this$0;
}

defineClass(299, 1, {}, HTMLTable$ColumnFormatter);
var Lcom_google_gwt_user_client_ui_HTMLTable$ColumnFormatter_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HTMLTable/ColumnFormatter', 299);
function $getCells(row){
  return row.children;
}

function $getRow(tbody, row){
  return tbody.children[row];
}

function $clinit_HasHorizontalAlignment(){
  $clinit_HasHorizontalAlignment = emptyMethod;
  ALIGN_CENTER = new HasHorizontalAlignment$HorizontalAlignmentConstant(($clinit_Style$TextAlign() , 'center'));
  new HasHorizontalAlignment$HorizontalAlignmentConstant('justify');
  ALIGN_LEFT = new HasHorizontalAlignment$HorizontalAlignmentConstant('left');
  new HasHorizontalAlignment$HorizontalAlignmentConstant('right');
  ALIGN_LOCALE_START = ($clinit_LocaleInfo() , ALIGN_LEFT);
  ALIGN_DEFAULT = ALIGN_LOCALE_START;
}

var ALIGN_CENTER, ALIGN_DEFAULT, ALIGN_LEFT, ALIGN_LOCALE_START;
defineClass(333, 1, {});
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$AutoHorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/AutoHorizontalAlignmentConstant', 333);
function HasHorizontalAlignment$HorizontalAlignmentConstant(textAlignString){
  this.textAlignString = textAlignString;
}

defineClass(65, 333, {}, HasHorizontalAlignment$HorizontalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasHorizontalAlignment$HorizontalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasHorizontalAlignment/HorizontalAlignmentConstant', 65);
function $clinit_HasVerticalAlignment(){
  $clinit_HasVerticalAlignment = emptyMethod;
  new HasVerticalAlignment$VerticalAlignmentConstant('bottom');
  ALIGN_MIDDLE = new HasVerticalAlignment$VerticalAlignmentConstant('middle');
  ALIGN_TOP = new HasVerticalAlignment$VerticalAlignmentConstant('top');
}

var ALIGN_MIDDLE, ALIGN_TOP;
function HasVerticalAlignment$VerticalAlignmentConstant(verticalAlignString){
  this.verticalAlignString = verticalAlignString;
}

defineClass(79, 1, {}, HasVerticalAlignment$VerticalAlignmentConstant);
var Lcom_google_gwt_user_client_ui_HasVerticalAlignment$VerticalAlignmentConstant_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HasVerticalAlignment/VerticalAlignmentConstant', 79);
function $add_2(this$static, w){
  var td, td_0;
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment(td_0, this$static.vertAlign) , td_0);
  $appendChild(this$static.tableRow, resolve(td));
  $add(this$static, w, td);
}

function HorizontalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  this.tableRow = $createElement($doc, 'tr');
  $appendChild(this.body_0, resolve(this.tableRow));
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(43, 96, {16:1, 12:1, 15:1, 14:1, 43:1, 17:1, 10:1, 9:1}, HorizontalPanel);
_.remove_0 = function remove_6(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove_0(this, w);
  removed && $removeChild(this.tableRow, td);
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_HorizontalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'HorizontalPanel', 43);
function $eventTargetsPopup(this$static, event_0){
  var target;
  target = event_0.srcElement;
  if (is_0(target)) {
    return isOrHasChildImpl(this$static.element, target);
  }
  return false;
}

function $hide(this$static){
  if (!this$static.showing) {
    return;
  }
  $setState(this$static.resizeAnimation, false, false);
  fire_0(this$static);
}

function $maybeUpdateSize(this$static){
  var w;
  w = this$static.widget;
  if (w) {
    this$static.desiredHeight != null && w.setHeight(this$static.desiredHeight);
    this$static.desiredWidth != null && w.setWidth(this$static.desiredWidth);
  }
}

function $previewNativeEvent(this$static, event_0){
  var eventTargetsPopupOrPartner, nativeEvent, target, type_0;
  if (event_0.isCanceled || !this$static.previewAllNativeEvents && event_0.isConsumed) {
    this$static.modal && (event_0.isCanceled = true);
    return;
  }
  event_0.isFirstHandler && (event_0.nativeEvent , false) && (event_0.isCanceled = true);
  if (event_0.isCanceled) {
    return;
  }
  nativeEvent = event_0.nativeEvent;
  eventTargetsPopupOrPartner = $eventTargetsPopup(this$static, nativeEvent);
  eventTargetsPopupOrPartner && (event_0.isConsumed = true);
  this$static.modal && (event_0.isCanceled = true);
  type_0 = $eventGetTypeInt(nativeEvent.type);
  switch (type_0) {
    case 512:
    case 256:
    case 128:
      {
        $eventGetKeyCode(nativeEvent) & $intern_2;
        ($eventGetShiftKey(nativeEvent)?1:0) | ($eventGetMetaKey(nativeEvent)?8:0) | ($eventGetCtrlKey(nativeEvent)?2:0) | ($eventGetAltKey(nativeEvent)?4:0);
        return;
      }

    case 4:
    case 1048576:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
      }

      if (!eventTargetsPopupOrPartner && this$static.autoHide) {
        $hide(this$static);
        return;
      }

      break;
    case 8:
    case 64:
    case 1:
    case 2:
    case $intern_16:
      {
        if (sCaptureElem) {
          event_0.isConsumed = true;
          return;
        }
        break;
      }

    case 2048:
      {
        target = nativeEvent.srcElement;
        if (this$static.modal && !eventTargetsPopupOrPartner && !!target) {
          target.blur && target != $doc.body && target.blur();
          event_0.isCanceled = true;
          return;
        }
        break;
      }

  }
}

function $setPopupPosition(this$static, left, top_0){
  var elem;
  this$static.leftPosition = left;
  this$static.topPosition = top_0;
  left -= $getBodyOffsetLeft($doc);
  top_0 -= $getBodyOffsetTop($doc);
  elem = this$static.element;
  elem.style['left'] = left + ($clinit_Style$Unit() , 'px');
  elem.style['top'] = top_0 + 'px';
}

function $setWidget_0(this$static, w){
  $setWidget(this$static, w);
  $maybeUpdateSize(this$static);
}

function $show(this$static){
  if (this$static.showing) {
    return;
  }
   else 
    this$static.attached && $removeFromParent(this$static);
  $setState(this$static.resizeAnimation, true, false);
}

function $updateHandlers(this$static){
  if (this$static.nativePreviewHandlerRegistration) {
    $removeHandler(this$static.nativePreviewHandlerRegistration.real);
    this$static.nativePreviewHandlerRegistration = null;
  }
  if (this$static.historyHandlerRegistration) {
    $removeHandler(this$static.historyHandlerRegistration.real);
    this$static.historyHandlerRegistration = null;
  }
  if (this$static.showing) {
    this$static.nativePreviewHandlerRegistration = addNativePreviewHandler(new PopupPanel$3(this$static));
    this$static.historyHandlerRegistration = addValueChangeHandler(new PopupPanel$4(this$static));
  }
}

function PopupPanel(){
  SimplePanel.call(this, $createElement($doc, 'div'));
  this.glassResizer = new PopupPanel$1;
  this.leftPosition = -1;
  this.resizeAnimation = new PopupPanel$ResizeAnimation(this);
  this.topPosition = -1;
  $appendChild(this.element, $createElement($doc, 'div'));
  $setPopupPosition(this, 0, 0);
  $setClassName($getParentElement($getFirstChildElement(this.element)), 'gwt-PopupPanel');
  $setClassName($getFirstChildElement(this.element), 'popupContent');
  this.autoHide = true;
  this.autoHideOnHistoryEvents = true;
}

defineClass(106, 62, $intern_1, PopupPanel);
_.getContainerElement = function getContainerElement_1(){
  return $getFirstChildElement(this.element);
}
;
_.onUnload = function onUnload_0(){
  this.showing && $setState(this.resizeAnimation, false, true);
}
;
_.setHeight = function setHeight_0(height){
  this.desiredHeight = height;
  $maybeUpdateSize(this);
  height.length == 0 && (this.desiredHeight = null);
}
;
_.setWidth = function setWidth_0(width_0){
  this.desiredWidth = width_0;
  $maybeUpdateSize(this);
  width_0.length == 0 && (this.desiredWidth = null);
}
;
_.autoHide = false;
_.autoHideOnHistoryEvents = false;
_.isGlassEnabled = false;
_.leftPosition = 0;
_.modal = false;
_.previewAllNativeEvents = false;
_.showing = false;
_.topPosition = 0;
var Lcom_google_gwt_user_client_ui_PopupPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel', 106);
function $onResize(){
  var height, width_0, winHeight, winWidth;
  null.nullMethod();
  winWidth = $getClientWidth($doc);
  winHeight = $getClientHeight($doc);
  null.nullMethod($clinit_Style$Display());
  null.nullMethod($clinit_Style$Unit());
  null.nullMethod($clinit_Style$Unit());
  width_0 = $getScrollWidth($doc);
  height = $getScrollHeight($doc);
  null.nullMethod((width_0 > winWidth?width_0:winWidth) + 'px');
  null.nullMethod((height > winHeight?height:winHeight) + 'px');
  null.nullMethod($clinit_Style$Display());
}

function PopupPanel$1(){
}

defineClass(228, 1, {347:1, 29:1}, PopupPanel$1);
var Lcom_google_gwt_user_client_ui_PopupPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/1', 228);
function PopupPanel$3(this$0){
  this.this$01 = this$0;
}

defineClass(229, 1, {29:1, 348:1}, PopupPanel$3);
var Lcom_google_gwt_user_client_ui_PopupPanel$3_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/3', 229);
function PopupPanel$4(this$0){
  this.this$01 = this$0;
}

defineClass(230, 1, {349:1, 29:1}, PopupPanel$4);
var Lcom_google_gwt_user_client_ui_PopupPanel$4_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/4', 230);
function $maybeShowGlass(this$static){
  if (this$static.showing) {
    if (this$static.curPanel.isGlassEnabled) {
      $appendChild($doc.body, this$static.curPanel.glass);
      this$static.resizeRegistration = addResizeHandler(this$static.curPanel.glassResizer);
      $onResize();
      this$static.glassShowing = true;
    }
  }
   else if (this$static.glassShowing) {
    $removeChild($doc.body, this$static.curPanel.glass);
    $removeHandler(this$static.resizeRegistration.real);
    this$static.resizeRegistration = null;
    this$static.glassShowing = false;
  }
}

function $onComplete(this$static){
  if (!this$static.showing) {
    $maybeShowGlass(this$static);
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
  $setClip(this$static.curPanel.element, 'rect(auto, auto, auto, auto)');
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onInstantaneousRun(this$static){
  $maybeShowGlass(this$static);
  if (this$static.showing) {
    $setPropertyImpl(this$static.curPanel.element.style, 'position', 'absolute');
    this$static.curPanel.topPosition != -1 && $setPopupPosition(this$static.curPanel, this$static.curPanel.leftPosition, this$static.curPanel.topPosition);
    $add_0(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
   else {
    this$static.isUnloading || $remove_1(($clinit_RootPanel() , get_0(null)), this$static.curPanel);
  }
  $setPropertyImpl(this$static.curPanel.element.style, 'overflow', 'visible');
}

function $onUpdate(this$static, progress){
  var bottom, height, left, right, top_0, width_0;
  this$static.showing || (progress = 1 - progress);
  top_0 = 0;
  left = 0;
  right = 0;
  bottom = 0;
  height = round_int(progress * this$static.offsetHeight);
  width_0 = round_int(progress * this$static.offsetWidth);
  switch (0) {
    case 0:
      top_0 = this$static.offsetHeight - height >> 1;
      left = this$static.offsetWidth - width_0 >> 1;
      right = left + width_0;
      bottom = top_0 + height;
  }
  $setClip(this$static.curPanel.element, 'rect(' + top_0 + 'px, ' + right + 'px, ' + bottom + 'px, ' + left + 'px)');
}

function $setState(this$static, showing, isUnloading){
  this$static.isUnloading = isUnloading;
  $cancel(this$static);
  this$static.curPanel.showing = showing;
  $updateHandlers(this$static.curPanel);
  this$static.showing = showing;
  $onInstantaneousRun(this$static);
}

function PopupPanel$ResizeAnimation(panel){
  Animation.call(this, (!instance && (instance = !!$wnd.requestAnimationFrame && !!$wnd.cancelAnimationFrame?new AnimationSchedulerImplStandard:new AnimationSchedulerImplTimer) , instance));
  this.curPanel = panel;
}

defineClass(227, 107, {}, PopupPanel$ResizeAnimation);
_.curPanel = null;
_.glassShowing = false;
_.isUnloading = false;
_.offsetHeight = 0;
_.offsetWidth = -1;
_.showing = false;
var Lcom_google_gwt_user_client_ui_PopupPanel$ResizeAnimation_2_classLit = createForClass('com.google.gwt.user.client.ui', 'PopupPanel/ResizeAnimation', 227);
function $clinit_RootPanel(){
  $clinit_RootPanel = emptyMethod;
  maybeDetachCommand = new RootPanel$1;
  rootPanels = new HashMap;
  widgetsToDetach = new HashSet;
}

function RootPanel(elem){
  ComplexPanel.call(this);
  $setElement_0(this, elem);
  $onAttach(this);
}

function detachNow(widget){
  $clinit_RootPanel();
  try {
    widget.onDetach();
  }
   finally {
    $remove_11(widgetsToDetach, widget);
  }
}

function detachWidgets(){
  $clinit_RootPanel();
  try {
    tryCommand(widgetsToDetach, maybeDetachCommand);
  }
   finally {
    $reset(widgetsToDetach.map_0);
    $reset(rootPanels);
  }
}

function get_0(id_0){
  $clinit_RootPanel();
  var elem, rp;
  rp = dynamicCast($getStringValue(rootPanels, id_0), 55);
  elem = null;
  if (id_0 != null) {
    if (!(elem = $getElementById($doc, id_0))) {
      return null;
    }
  }
  if (rp) {
    if (!elem || rp.element == elem) {
      return rp;
    }
  }
  if (rootPanels.size_0 == 0) {
    addCloseHandler(new RootPanel$2);
    $clinit_LocaleInfo();
  }
  !elem?(rp = new RootPanel$DefaultRootPanel):(rp = new RootPanel(elem));
  $putStringValue(rootPanels, id_0, rp);
  $add_6(widgetsToDetach, rp);
  return rp;
}

defineClass(55, 143, $intern_21, RootPanel);
var maybeDetachCommand, rootPanels, widgetsToDetach;
var Lcom_google_gwt_user_client_ui_RootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel', 55);
function RootPanel$1(){
}

defineClass(145, 1, {}, RootPanel$1);
_.execute_2 = function execute_9(w){
  w.attached && w.onDetach();
}
;
var Lcom_google_gwt_user_client_ui_RootPanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/1', 145);
function RootPanel$2(){
}

defineClass(146, 1, {346:1, 29:1}, RootPanel$2);
var Lcom_google_gwt_user_client_ui_RootPanel$2_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/2', 146);
function RootPanel$DefaultRootPanel(){
  RootPanel.call(this, $doc.body);
}

defineClass(144, 55, $intern_21, RootPanel$DefaultRootPanel);
var Lcom_google_gwt_user_client_ui_RootPanel$DefaultRootPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RootPanel/DefaultRootPanel', 144);
function $next_0(this$static){
  if (!this$static.hasElement || !this$static.this$01.widget) {
    throw new NoSuchElementException;
  }
  this$static.hasElement = false;
  return this$static.returned = this$static.this$01.widget;
}

function SimplePanel$1(this$0){
  this.this$01 = this$0;
  this.hasElement = !!this.this$01.widget;
}

defineClass(123, 1, {}, SimplePanel$1);
_.hasNext = function hasNext_0(){
  return this.hasElement;
}
;
_.next = function next_1(){
  return $next_0(this);
}
;
_.remove_1 = function remove_7(){
  !!this.returned && $remove_2(this.this$01, this.returned);
}
;
_.hasElement = false;
_.returned = null;
var Lcom_google_gwt_user_client_ui_SimplePanel$1_2_classLit = createForClass('com.google.gwt.user.client.ui', 'SimplePanel/1', 123);
function $getValueOrThrow(this$static){
  var text_0;
  text_0 = $getPropertyString(this$static.element, 'value');
  if ($equals('', text_0)) {
    return null;
  }
  return text_0;
}

function $setValue(this$static, value_0){
  this$static.element['value'] = value_0 != null?value_0:'';
}

function ValueBoxBase(elem){
  FocusWidget.call(this, elem);
  $clinit_LocaleInfo();
}

defineClass(137, 98, $intern_1);
_.onBrowserEvent = function onBrowserEvent_1(event_0){
  var type_0;
  type_0 = $eventGetTypeInt(event_0.type);
  (type_0 & 896) != 0?$onBrowserEvent(this, event_0):$onBrowserEvent(this, event_0);
}
;
_.onLoad = function onLoad_1(){
}
;
var Lcom_google_gwt_user_client_ui_ValueBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'ValueBoxBase', 137);
function $clinit_TextBoxBase(){
  $clinit_TextBoxBase = emptyMethod;
  $clinit_ValueBoxBase$TextAlignment();
}

function $getValue(this$static){
  var raw;
  raw = $getValueOrThrow(this$static);
  return raw == null?'':raw;
}

defineClass(138, 137, $intern_1);
var Lcom_google_gwt_user_client_ui_TextBoxBase_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBoxBase', 138);
function TextBox(){
  var e;
  $clinit_TextBoxBase();
  TextBox_0.call(this, (e = $doc.createElement('INPUT') , e.type = 'text' , e));
}

function TextBox_0(element){
  ValueBoxBase.call(this, element, (!INSTANCE_1 && (INSTANCE_1 = new PassthroughRenderer) , !INSTANCE_0 && (INSTANCE_0 = new PassthroughParser)));
  $setClassName(this.element, 'gwt-TextBox');
}

defineClass(60, 138, $intern_1, TextBox);
var Lcom_google_gwt_user_client_ui_TextBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'TextBox', 60);
function $clinit_ValueBoxBase$TextAlignment(){
  $clinit_ValueBoxBase$TextAlignment = emptyMethod;
  CENTER_0 = new ValueBoxBase$TextAlignment$1;
  JUSTIFY_0 = new ValueBoxBase$TextAlignment$2;
  LEFT_0 = new ValueBoxBase$TextAlignment$3;
  RIGHT_0 = new ValueBoxBase$TextAlignment$4;
}

function ValueBoxBase$TextAlignment(enum$name, enum$ordinal){
  Enum.call(this, enum$name, enum$ordinal);
}

function values_6(){
  $clinit_ValueBoxBase$TextAlignment();
  return initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit, 1), $intern_4, 33, 0, [CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0]);
}

defineClass(33, 5, $intern_22);
var CENTER_0, JUSTIFY_0, LEFT_0, RIGHT_0;
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment', 33, values_6);
function ValueBoxBase$TextAlignment$1(){
  ValueBoxBase$TextAlignment.call(this, 'CENTER', 0);
}

defineClass(139, 33, $intern_22, ValueBoxBase$TextAlignment$1);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$1_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/1', 139, null);
function ValueBoxBase$TextAlignment$2(){
  ValueBoxBase$TextAlignment.call(this, 'JUSTIFY', 1);
}

defineClass(140, 33, $intern_22, ValueBoxBase$TextAlignment$2);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$2_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/2', 140, null);
function ValueBoxBase$TextAlignment$3(){
  ValueBoxBase$TextAlignment.call(this, 'LEFT', 2);
}

defineClass(141, 33, $intern_22, ValueBoxBase$TextAlignment$3);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$3_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/3', 141, null);
function ValueBoxBase$TextAlignment$4(){
  ValueBoxBase$TextAlignment.call(this, 'RIGHT', 3);
}

defineClass(142, 33, $intern_22, ValueBoxBase$TextAlignment$4);
var Lcom_google_gwt_user_client_ui_ValueBoxBase$TextAlignment$4_2_classLit = createForEnum('com.google.gwt.user.client.ui', 'ValueBoxBase/TextAlignment/4', 142, null);
function $add_3(this$static, w){
  var td, tr, td_0;
  tr = $createElement($doc, 'tr');
  td = (td_0 = $createElement($doc, 'td') , $setPropertyString(td_0, 'align', this$static.horzAlign.textAlignString) , $setCellVerticalAlignment_0(td_0, this$static.vertAlign) , td_0);
  $appendChild(tr, resolve(td));
  $appendChild(this$static.body_0, resolve(tr));
  $add(this$static, w, td);
}

function VerticalPanel(){
  CellPanel.call(this);
  this.horzAlign = ($clinit_HasHorizontalAlignment() , ALIGN_DEFAULT);
  this.vertAlign = ($clinit_HasVerticalAlignment() , ALIGN_TOP);
  $setPropertyString(this.table, 'cellSpacing', '0');
  $setPropertyString(this.table, 'cellPadding', '0');
}

defineClass(42, 96, {16:1, 12:1, 15:1, 14:1, 17:1, 10:1, 42:1, 9:1}, VerticalPanel);
_.remove_0 = function remove_8(w){
  var removed, td;
  td = $getParentElement(w.element);
  removed = $remove_0(this, w);
  removed && $removeChild(this.body_0, $getParentElement(td));
  return removed;
}
;
var Lcom_google_gwt_user_client_ui_VerticalPanel_2_classLit = createForClass('com.google.gwt.user.client.ui', 'VerticalPanel', 42);
function $add_4(this$static, w){
  $insert(this$static, w, this$static.size_0);
}

function $get_3(this$static, index_0){
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  return this$static.array[index_0];
}

function $indexOf(this$static, w){
  var i;
  for (i = 0; i < this$static.size_0; ++i) {
    if (this$static.array[i] == w) {
      return i;
    }
  }
  return -1;
}

function $insert(this$static, w, beforeIndex){
  var i, i0, newArray;
  if (beforeIndex < 0 || beforeIndex > this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  if (this$static.size_0 == this$static.array.length) {
    newArray = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 9, this$static.array.length * 2, 0, 1);
    for (i0 = 0; i0 < this$static.array.length; ++i0) {
      setCheck(newArray, i0, this$static.array[i0]);
    }
    this$static.array = newArray;
  }
  ++this$static.size_0;
  for (i = this$static.size_0 - 1; i > beforeIndex; --i) {
    setCheck(this$static.array, i, this$static.array[i - 1]);
  }
  setCheck(this$static.array, beforeIndex, w);
}

function $remove_4(this$static, index_0){
  var i;
  if (index_0 < 0 || index_0 >= this$static.size_0) {
    throw new IndexOutOfBoundsException;
  }
  --this$static.size_0;
  for (i = index_0; i < this$static.size_0; ++i) {
    setCheck(this$static.array, i, this$static.array[i + 1]);
  }
  setCheck(this$static.array, this$static.size_0, null);
}

function $remove_5(this$static, w){
  var index_0;
  index_0 = $indexOf(this$static, w);
  if (index_0 == -1) {
    throw new NoSuchElementException;
  }
  $remove_4(this$static, index_0);
}

function WidgetCollection(parent_0){
  this.parent_0 = parent_0;
  this.array = initDim(Lcom_google_gwt_user_client_ui_Widget_2_classLit, $intern_4, 9, 4, 0, 1);
}

defineClass(211, 1, {}, WidgetCollection);
_.iterator = function iterator_4(){
  return new WidgetCollection$WidgetIterator(this);
}
;
_.size_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection', 211);
function $next_1(this$static){
  if (this$static.index_0 >= this$static.this$01.size_0) {
    throw new NoSuchElementException;
  }
  this$static.currentWidget = this$static.this$01.array[this$static.index_0];
  ++this$static.index_0;
  return this$static.currentWidget;
}

function $remove_6(this$static){
  if (!this$static.currentWidget) {
    throw new IllegalStateException;
  }
  this$static.this$01.parent_0.remove_0(this$static.currentWidget);
  --this$static.index_0;
  this$static.currentWidget = null;
}

function WidgetCollection$WidgetIterator(this$0){
  this.this$01 = this$0;
}

defineClass(75, 1, {}, WidgetCollection$WidgetIterator);
_.hasNext = function hasNext_1(){
  return this.index_0 < this.this$01.size_0;
}
;
_.next = function next_2(){
  return $next_1(this);
}
;
_.remove_1 = function remove_9(){
  $remove_6(this);
}
;
_.index_0 = 0;
var Lcom_google_gwt_user_client_ui_WidgetCollection$WidgetIterator_2_classLit = createForClass('com.google.gwt.user.client.ui', 'WidgetCollection/WidgetIterator', 75);
function $focus(elem){
  try {
    elem.focus();
  }
   catch (e) {
    if (!elem || !elem.focus) {
      throw e;
    }
  }
}

function $getContents(iframe){
  try {
    if (!iframe.contentWindow || !iframe.contentWindow.document)
      return null;
    return iframe.contentWindow.document.body.innerHTML;
  }
   catch (e) {
    return null;
  }
}

function $setEncoding(form_0, encoding){
  form_0.enctype = encoding;
  form_0.encoding = encoding;
}

function $submit_0(form_0, iframe){
  iframe && (iframe.__formAction = form_0.action);
  form_0.submit();
}

function $hookEvents(iframe, form_0, listener){
  iframe && (iframe.onreadystatechange = $entry(function(){
    if (!iframe.__formAction)
      return;
    iframe.readyState == 'complete' && listener.onFrameLoad();
  }
  ));
  form_0.onsubmit = $entry(function(){
    iframe && (iframe.__formAction = form_0.action);
    return listener.onFormSubmit();
  }
  );
}

function $unhookEvents(iframe, form_0){
  iframe && (iframe.onreadystatechange = null);
  form_0.onsubmit = null;
}

function $setClip(popup, rect){
  $setPropertyImpl(popup.style, 'clip', rect);
}

function assertCompileTimeUserAgent(){
  var runtimeValue;
  runtimeValue = $getRuntimeValue();
  if (!$equals('ie8', runtimeValue)) {
    throw new UserAgentAsserter$UserAgentAssertionError(runtimeValue);
  }
}

function Error_0(message){
  Throwable.call(this, message);
}

defineClass(76, 7, $intern_5);
var Ljava_lang_Error_2_classLit = createForClass('java.lang', 'Error', 76);
defineClass(22, 76, $intern_5);
var Ljava_lang_AssertionError_2_classLit = createForClass('java.lang', 'AssertionError', 22);
function UserAgentAsserter$UserAgentAssertionError(runtimeValue){
  Error_0.call(this, '' + ('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.'), instanceOf('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7)?dynamicCast('Possible problem with your *.gwt.xml module file.\nThe compile time user.agent value (ie8) does not match the runtime user.agent value (' + runtimeValue + ').\n' + 'Expect more errors.', 7):null);
}

defineClass(125, 22, $intern_5, UserAgentAsserter$UserAgentAssertionError);
var Lcom_google_gwt_useragent_client_UserAgentAsserter$UserAgentAssertionError_2_classLit = createForClass('com.google.gwt.useragent.client', 'UserAgentAsserter/UserAgentAssertionError', 125);
function $getRuntimeValue(){
  var ua = navigator.userAgent.toLowerCase();
  var docMode = $doc.documentMode;
  if (function(){
    return ua.indexOf('webkit') != -1;
  }
  ())
    return 'safari';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 10 && docMode < 11;
  }
  ())
    return 'ie10';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 9 && docMode < 11;
  }
  ())
    return 'ie9';
  if (function(){
    return ua.indexOf('msie') != -1 && docMode >= 8 && docMode < 11;
  }
  ())
    return 'ie8';
  if (function(){
    return ua.indexOf('gecko') != -1 || docMode >= 11;
  }
  ())
    return 'gecko1_8';
  return 'unknown';
}

function $removeHandler(this$static){
  $doRemove(this$static.this$01, this$static.val$type2, this$static.val$source3, this$static.val$handler4);
}

function SimpleEventBus$1(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(150, 1, {}, SimpleEventBus$1);
var Lcom_google_web_bindery_event_shared_SimpleEventBus$1_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/1', 150);
function SimpleEventBus$2(this$0, val$type, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = null;
  this.val$handler4 = val$handler;
}

defineClass(151, 1, {312:1}, SimpleEventBus$2);
_.execute_1 = function execute_10(){
  $doAddNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$2_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/2', 151);
function SimpleEventBus$3(this$0, val$type, val$source, val$handler){
  this.this$01 = this$0;
  this.val$type2 = val$type;
  this.val$source3 = val$source;
  this.val$handler4 = val$handler;
}

defineClass(152, 1, {312:1}, SimpleEventBus$3);
_.execute_1 = function execute_11(){
  $doRemoveNow(this.this$01, this.val$type2, this.val$source3, this.val$handler4);
}
;
var Lcom_google_web_bindery_event_shared_SimpleEventBus$3_2_classLit = createForClass('com.google.web.bindery.event.shared', 'SimpleEventBus/3', 152);
function AbstractStringBuilder(string){
  this.string = string;
}

defineClass(78, 1, {});
_.toString$ = function toString_16(){
  return this.string;
}
;
var Ljava_lang_AbstractStringBuilder_2_classLit = createForClass('java.lang', 'AbstractStringBuilder', 78);
function ArithmeticException(){
  RuntimeException_0.call(this, 'divide by zero');
}

defineClass(133, 18, $intern_6, ArithmeticException);
var Ljava_lang_ArithmeticException_2_classLit = createForClass('java.lang', 'ArithmeticException', 133);
function ArrayStoreException(){
  RuntimeException.call(this);
}

defineClass(63, 18, $intern_6, ArrayStoreException);
var Ljava_lang_ArrayStoreException_2_classLit = createForClass('java.lang', 'ArrayStoreException', 63);
function $clinit_Boolean(){
  $clinit_Boolean = emptyMethod;
  new Boolean_0(false);
  new Boolean_0(true);
}

function Boolean_0(value_0){
  $clinit_Boolean();
  this.value_0 = value_0;
}

defineClass(51, 1, {3:1, 51:1, 6:1}, Boolean_0);
_.equals$ = function equals_8(o){
  return instanceOf(o, 51) && dynamicCast(o, 51).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_10(){
  return this.value_0?1231:1237;
}
;
_.toString$ = function toString_17(){
  return '' + this.value_0;
}
;
_.value_0 = false;
var Ljava_lang_Boolean_2_classLit = createForClass('java.lang', 'Boolean', 51);
function digit(c){
  if (c >= 48 && c < 58) {
    return c - 48;
  }
  if (c >= 97 && c < 97) {
    return c - 97 + 10;
  }
  if (c >= 65 && c < 65) {
    return c - 65 + 10;
  }
  return -1;
}

function ClassCastException(){
  RuntimeException.call(this);
}

defineClass(45, 18, $intern_6, ClassCastException);
var Ljava_lang_ClassCastException_2_classLit = createForClass('java.lang', 'ClassCastException', 45);
function __parseAndValidateInt(s){
  var i, isTooLow, length_0, startIndex, toReturn;
  if (s == null) {
    throw new NumberFormatException('null');
  }
  length_0 = s.length;
  startIndex = length_0 > 0 && (s.charCodeAt(0) == 45 || s.charCodeAt(0) == 43)?1:0;
  for (i = startIndex; i < length_0; i++) {
    if (digit(s.charCodeAt(i)) == -1) {
      throw new NumberFormatException('For input string: "' + s + '"');
    }
  }
  toReturn = parseInt(s, 10);
  isTooLow = toReturn < -2147483648;
  if (isNaN(toReturn)) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
   else if (isTooLow || toReturn > 2147483647) {
    throw new NumberFormatException('For input string: "' + s + '"');
  }
  return toReturn;
}

defineClass(77, 1, {3:1, 77:1});
var Ljava_lang_Number_2_classLit = createForClass('java.lang', 'Number', 77);
function Double(value_0){
  this.value_0 = value_0;
}

defineClass(64, 77, {3:1, 6:1, 64:1, 77:1}, Double);
_.equals$ = function equals_9(o){
  return instanceOf(o, 64) && dynamicCast(o, 64).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_11(){
  return round_int(this.value_0);
}
;
_.toString$ = function toString_19(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Double_2_classLit = createForClass('java.lang', 'Double', 64);
function IllegalArgumentException(message){
  RuntimeException_0.call(this, message);
}

defineClass(41, 18, $intern_6, IllegalArgumentException);
var Ljava_lang_IllegalArgumentException_2_classLit = createForClass('java.lang', 'IllegalArgumentException', 41);
function IllegalStateException(){
  RuntimeException.call(this);
}

function IllegalStateException_0(s){
  RuntimeException_0.call(this, s);
}

defineClass(32, 18, $intern_6, IllegalStateException, IllegalStateException_0);
var Ljava_lang_IllegalStateException_2_classLit = createForClass('java.lang', 'IllegalStateException', 32);
function IndexOutOfBoundsException(){
  RuntimeException.call(this);
}

function IndexOutOfBoundsException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(23, 18, $intern_6, IndexOutOfBoundsException, IndexOutOfBoundsException_0);
var Ljava_lang_IndexOutOfBoundsException_2_classLit = createForClass('java.lang', 'IndexOutOfBoundsException', 23);
function Integer(value_0){
  this.value_0 = value_0;
}

function numberOfLeadingZeros_0(i){
  var m, n, y_0;
  if (i < 0) {
    return 0;
  }
   else if (i == 0) {
    return 32;
  }
   else {
    y_0 = -(i >> 16);
    m = y_0 >> 16 & 16;
    n = 16 - m;
    i = i >> m;
    y_0 = i - 256;
    m = y_0 >> 16 & 8;
    n += m;
    i <<= m;
    y_0 = i - 4096;
    m = y_0 >> 16 & 4;
    n += m;
    i <<= m;
    y_0 = i - 16384;
    m = y_0 >> 16 & 2;
    n += m;
    i <<= m;
    y_0 = i >> 14;
    m = y_0 & ~(y_0 >> 1);
    return n + 2 - m;
  }
}

function numberOfTrailingZeros(i){
  var r, rtn;
  if (i == 0) {
    return 32;
  }
   else {
    rtn = 0;
    for (r = 1; (r & i) == 0; r <<= 1) {
      ++rtn;
    }
    return rtn;
  }
}

function valueOf(i){
  var rebase, result;
  if (i > -129 && i < 128) {
    rebase = i + 128;
    result = ($clinit_Integer$BoxedValues() , boxedValues_0)[rebase];
    !result && (result = boxedValues_0[rebase] = new Integer(i));
    return result;
  }
  return new Integer(i);
}

defineClass(46, 77, {3:1, 6:1, 46:1, 77:1}, Integer);
_.equals$ = function equals_10(o){
  return instanceOf(o, 46) && dynamicCast(o, 46).value_0 == this.value_0;
}
;
_.hashCode$ = function hashCode_12(){
  return this.value_0;
}
;
_.toString$ = function toString_20(){
  return '' + this.value_0;
}
;
_.value_0 = 0;
var Ljava_lang_Integer_2_classLit = createForClass('java.lang', 'Integer', 46);
function $clinit_Integer$BoxedValues(){
  $clinit_Integer$BoxedValues = emptyMethod;
  boxedValues_0 = initDim(Ljava_lang_Integer_2_classLit, $intern_4, 46, 256, 0, 1);
}

var boxedValues_0;
function max_0(y_0){
  return 5 > y_0?5:y_0;
}

function NullPointerException(){
  RuntimeException.call(this);
}

function NullPointerException_0(message){
  RuntimeException_0.call(this, message);
}

defineClass(34, 18, $intern_6, NullPointerException, NullPointerException_0);
var Ljava_lang_NullPointerException_2_classLit = createForClass('java.lang', 'NullPointerException', 34);
function NumberFormatException(message){
  IllegalArgumentException.call(this, message);
}

defineClass(67, 41, $intern_6, NumberFormatException);
var Ljava_lang_NumberFormatException_2_classLit = createForClass('java.lang', 'NumberFormatException', 67);
function $charAt(this$static, index_0){
  return this$static.charCodeAt(index_0);
}

function $equals(this$static, other){
  return this$static === other;
}

function $equalsIgnoreCase(this$static, other){
  if (other == null) {
    return false;
  }
  if (this$static == other) {
    return true;
  }
  return this$static.length == other.length && this$static.toLowerCase() == other.toLowerCase();
}

function $indexOf_0(this$static, str){
  return this$static.indexOf(str);
}

function $matches(this$static, regex){
  return (new RegExp('^(' + regex + ')$')).test(this$static);
}

function $split(this$static, regex, maxMatch){
  var compiled = new RegExp(regex, 'g');
  var out = [];
  var count = 0;
  var trail = this$static;
  var lastTrail = null;
  while (true) {
    var matchObj = compiled.exec(trail);
    if (matchObj == null || trail == '' || count == maxMatch - 1 && maxMatch > 0) {
      out[count] = trail;
      break;
    }
     else {
      out[count] = trail.substring(0, matchObj.index);
      trail = trail.substring(matchObj.index + matchObj[0].length, trail.length);
      compiled.lastIndex = 0;
      if (lastTrail == trail) {
        out[count] = trail.substring(0, 1);
        trail = trail.substring(1);
      }
      lastTrail = trail;
      count++;
    }
  }
  if (maxMatch == 0 && this$static.length > 0) {
    var lastNonEmpty = out.length;
    while (lastNonEmpty > 0 && out[lastNonEmpty - 1] == '') {
      --lastNonEmpty;
    }
    lastNonEmpty < out.length && out.splice(lastNonEmpty, out.length - lastNonEmpty);
  }
  var jr = __createArray(out.length);
  for (var i = 0; i < out.length; ++i) {
    jr[i] = out[i];
  }
  return jr;
}

function $substring(this$static, beginIndex){
  return __substr(this$static, beginIndex, this$static.length - beginIndex);
}

function $substring_0(this$static, beginIndex, endIndex){
  return this$static.substr(beginIndex, endIndex - beginIndex);
}

function $trim(this$static){
  if (this$static.length == 0 || this$static[0] > ' ' && this$static[this$static.length - 1] > ' ') {
    return this$static;
  }
  return this$static.replace(/^[\u0000-\u0020]*|[\u0000-\u0020]*$/g, '');
}

function __createArray(numElements){
  return initDim(Ljava_lang_String_2_classLit, $intern_4, 2, numElements, 4, 1);
}

function __substr(str, beginIndex, len){
  return str.substr(beginIndex, len);
}

function __valueOf(x_0, start_0, end){
  var s = '';
  for (var batchStart = start_0; batchStart < end;) {
    var batchEnd = Math.min(batchStart + 10000, end);
    s += String.fromCharCode.apply(null, x_0.slice(batchStart, batchEnd));
    batchStart = batchEnd;
  }
  return s;
}

function fromCodePoint(codePoint){
  var hiSurrogate, loSurrogate;
  if (codePoint >= $intern_20) {
    hiSurrogate = 55296 + (codePoint - $intern_20 >> 10 & 1023) & $intern_2;
    loSurrogate = 56320 + (codePoint - $intern_20 & 1023) & $intern_2;
    return valueOf_0(hiSurrogate) + valueOf_0(loSurrogate);
  }
   else {
    return String.fromCharCode(codePoint & $intern_2);
  }
}

function valueOf_0(x_0){
  return String.fromCharCode(x_0);
}

function valueOf_1(x_0){
  return __valueOf(x_0, 0, x_0.length);
}

var Ljava_lang_String_2_classLit = createForClass('java.lang', 'String', 2);
function $clinit_String$HashCache(){
  $clinit_String$HashCache = emptyMethod;
  back_0 = {};
  front = {};
}

function compute(str){
  var hashCode, i, n, nBatch;
  hashCode = 0;
  n = str.length;
  nBatch = n - 4;
  i = 0;
  while (i < nBatch) {
    hashCode = str.charCodeAt(i + 3) + 31 * (str.charCodeAt(i + 2) + 31 * (str.charCodeAt(i + 1) + 31 * (str.charCodeAt(i) + 31 * hashCode)));
    hashCode = ~~hashCode;
    i += 4;
  }
  while (i < n) {
    hashCode = hashCode * 31 + $charAt(str, i++);
  }
  hashCode = ~~hashCode;
  return hashCode;
}

function getHashCode_0(str){
  $clinit_String$HashCache();
  var key = ':' + str;
  var result = front[key];
  if (result != null) {
    return result;
  }
  result = back_0[key];
  result == null && (result = compute(str));
  increment();
  return front[key] = result;
}

function increment(){
  if (count_0 == 256) {
    back_0 = front;
    front = {};
    count_0 = 0;
  }
  ++count_0;
}

var back_0, count_0 = 0, front;
function $append(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function $append_0(this$static, x_0){
  this$static.string += x_0;
  return this$static;
}

function StringBuilder(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_0(){
  AbstractStringBuilder.call(this, '');
}

function StringBuilder_1(s){
  AbstractStringBuilder.call(this, s);
}

defineClass(30, 78, {345:1}, StringBuilder, StringBuilder_0, StringBuilder_1);
var Ljava_lang_StringBuilder_2_classLit = createForClass('java.lang', 'StringBuilder', 30);
function UnsupportedOperationException(message){
  RuntimeException_0.call(this, message);
}

defineClass(81, 18, $intern_6, UnsupportedOperationException);
var Ljava_lang_UnsupportedOperationException_2_classLit = createForClass('java.lang', 'UnsupportedOperationException', 81);
function $containsEntry(this$static, entry){
  var key, ourValue, value_0;
  key = entry.getKey();
  value_0 = entry.getValue();
  ourValue = isJavaString(key)?$getStringValue(this$static, key):getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
  if (!(maskUndefined(value_0) === maskUndefined(ourValue) || value_0 != null && equals_Ljava_lang_Object__Z__devirtual$(value_0, ourValue))) {
    return false;
  }
  if (ourValue == null && !(isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key))) {
    return false;
  }
  return true;
}

function $toString_1(this$static, o){
  return o === this$static?'(this Map)':'' + o;
}

function getEntryValueOrNull(entry){
  return !entry?null:entry.getValue();
}

defineClass(330, 1, {26:1});
_.equals$ = function equals_11(obj){
  var entry, entry$iterator, otherMap;
  if (obj === this) {
    return true;
  }
  if (!instanceOf(obj, 26)) {
    return false;
  }
  otherMap = dynamicCast(obj, 26);
  if (this.size_0 != otherMap.size_0) {
    return false;
  }
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(otherMap)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 20));
    if (!$containsEntry(this, entry)) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_13(){
  return hashCode_17(new AbstractHashMap$EntrySet(this));
}
;
_.toString$ = function toString_21(){
  var comma, entry, entry$iterator, sb;
  sb = new StringBuilder_1('{');
  comma = false;
  for (entry$iterator = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this)).this$01); $hasNext(entry$iterator);) {
    entry = (checkStructuralChange(entry$iterator.this$01, entry$iterator) , checkCriticalElement($hasNext(entry$iterator)) , entry$iterator.last = entry$iterator.current , dynamicCast(entry$iterator.current.next(), 20));
    comma?(sb.string += ', ' , sb):(comma = true);
    $append_0(sb, $toString_1(this, entry.getKey()));
    sb.string += '=';
    $append_0(sb, $toString_1(this, entry.getValue()));
  }
  sb.string += '}';
  return sb.string;
}
;
var Ljava_util_AbstractMap_2_classLit = createForClass('java.util', 'AbstractMap', 330);
function $containsKey_0(this$static, key){
  return isJavaString(key)?$hasStringValue(this$static, key):!!$getEntry(this$static.hashCodeMap, key);
}

function $elementAdded(this$static){
  ++this$static.size_0;
  structureChanged(this$static);
}

function $elementRemoved(this$static){
  --this$static.size_0;
  structureChanged(this$static);
}

function $get_4(this$static, key){
  return getEntryValueOrNull($getEntry(this$static.hashCodeMap, key));
}

function $getStringValue(this$static, key){
  return key == null?getEntryValueOrNull($getEntry(this$static.hashCodeMap, null)):this$static.stringMap.get_1(key);
}

function $hasStringValue(this$static, key){
  return key == null?!!$getEntry(this$static.hashCodeMap, null):!(this$static.stringMap.get_1(key) === undefined);
}

function $put_0(this$static, key, value_0){
  return isJavaString(key)?$putStringValue(this$static, key, value_0):$put_1(this$static.hashCodeMap, key, value_0);
}

function $putStringValue(this$static, key, value_0){
  return key == null?$put_1(this$static.hashCodeMap, null, value_0):this$static.stringMap.put(key, value_0);
}

function $remove_7(this$static, key){
  return isJavaString(key)?key == null?$remove_12(this$static.hashCodeMap, null):this$static.stringMap.remove_3(key):$remove_12(this$static.hashCodeMap, key);
}

function $reset(this$static){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory();
  this$static.hashCodeMap = delegate.createJsHashCodeMap();
  this$static.hashCodeMap.host = this$static;
  this$static.stringMap = delegate.createJsStringMap();
  this$static.stringMap.host = this$static;
  this$static.size_0 = 0;
  structureChanged(this$static);
}

defineClass(129, 330, {26:1});
_.size_0 = 0;
var Ljava_util_AbstractHashMap_2_classLit = createForClass('java.util', 'AbstractHashMap', 129);
function $contains(this$static, o){
  if (instanceOf(o, 20)) {
    return $containsEntry(this$static.this$01, dynamicCast(o, 20));
  }
  return false;
}

function AbstractHashMap$EntrySet(this$0){
  this.this$01 = this$0;
}

defineClass(52, 332, $intern_12, AbstractHashMap$EntrySet);
_.contains_0 = function contains_1(o){
  return $contains(this, o);
}
;
_.iterator = function iterator_5(){
  return new AbstractHashMap$EntrySetIterator(this.this$01);
}
;
_.remove = function remove_10(entry){
  var key;
  if ($contains(this, entry)) {
    key = dynamicCast(entry, 20).getKey();
    $remove_7(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_2(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractHashMap$EntrySet_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySet', 52);
function $hasNext(this$static){
  if (this$static.current.hasNext()) {
    return true;
  }
  if (this$static.current != this$static.stringMapEntries) {
    return false;
  }
  this$static.current = this$static.this$01.hashCodeMap.entries();
  return this$static.current.hasNext();
}

function $next_2(this$static){
  return checkStructuralChange(this$static.this$01, this$static) , checkCriticalElement($hasNext(this$static)) , this$static.last = this$static.current , dynamicCast(this$static.current.next(), 20);
}

function $remove_8(this$static){
  checkState(!!this$static.last);
  checkStructuralChange(this$static.this$01, this$static);
  this$static.last.remove_1();
  this$static.last = null;
  recordLastKnownStructure(this$static.this$01, this$static);
}

function AbstractHashMap$EntrySetIterator(this$0){
  this.this$01 = this$0;
  this.stringMapEntries = this.this$01.stringMap.entries();
  this.current = this.stringMapEntries;
  setModCount(this, this$0._gwt_modCount);
}

defineClass(53, 1, {}, AbstractHashMap$EntrySetIterator);
_.hasNext = function hasNext_2(){
  return $hasNext(this);
}
;
_.next = function next_3(){
  return $next_2(this);
}
;
_.remove_1 = function remove_11(){
  $remove_8(this);
}
;
var Ljava_util_AbstractHashMap$EntrySetIterator_2_classLit = createForClass('java.util', 'AbstractHashMap/EntrySetIterator', 53);
function $indexOf_1(this$static, toFind){
  var i, n;
  for (i = 0 , n = this$static.array.length; i < n; ++i) {
    if (equals_16(toFind, (checkElementIndex(i, this$static.array.length) , this$static.array[i]))) {
      return i;
    }
  }
  return -1;
}

defineClass(334, 331, {31:1});
_.add_0 = function add_2(index_0, element){
  throw new UnsupportedOperationException('Add not supported on this list');
}
;
_.add_1 = function add_3(obj){
  this.add_0(this.size_1(), obj);
  return true;
}
;
_.equals$ = function equals_12(o){
  var elem, elem$iterator, elemOther, iterOther, other;
  if (o === this) {
    return true;
  }
  if (!instanceOf(o, 31)) {
    return false;
  }
  other = dynamicCast(o, 31);
  if (this.size_1() != other.size_1()) {
    return false;
  }
  iterOther = other.iterator();
  for (elem$iterator = this.iterator(); elem$iterator.hasNext();) {
    elem = elem$iterator.next();
    elemOther = iterOther.next();
    if (!(maskUndefined(elem) === maskUndefined(elemOther) || elem != null && equals_Ljava_lang_Object__Z__devirtual$(elem, elemOther))) {
      return false;
    }
  }
  return true;
}
;
_.hashCode$ = function hashCode_14(){
  return hashCode_18(this);
}
;
_.iterator = function iterator_6(){
  return new AbstractList$IteratorImpl(this);
}
;
_.listIterator = function listIterator(){
  return new AbstractList$ListIteratorImpl(this, 0);
}
;
_.listIterator_0 = function listIterator_0(from){
  return new AbstractList$ListIteratorImpl(this, from);
}
;
_.remove_2 = function remove_12(index_0){
  throw new UnsupportedOperationException('Remove not supported on this list');
}
;
var Ljava_util_AbstractList_2_classLit = createForClass('java.util', 'AbstractList', 334);
function AbstractList$IteratorImpl(this$0){
  this.this$01_0 = this$0;
}

defineClass(21, 1, {}, AbstractList$IteratorImpl);
_.hasNext = function hasNext_3(){
  return this.i < this.this$01_0.size_1();
}
;
_.next = function next_4(){
  return checkCriticalElement(this.i < this.this$01_0.size_1()) , this.this$01_0.get_0(this.last = this.i++);
}
;
_.remove_1 = function remove_13(){
  checkState(this.last != -1);
  this.this$01_0.remove_2(this.last);
  this.i = this.last;
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_AbstractList$IteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/IteratorImpl', 21);
function AbstractList$ListIteratorImpl(this$0, start_0){
  this.this$01 = this$0;
  AbstractList$IteratorImpl.call(this, this$0);
  checkPositionIndex(start_0, this$0.size_1());
  this.i = start_0;
}

defineClass(100, 21, {}, AbstractList$ListIteratorImpl);
_.hasPrevious = function hasPrevious(){
  return this.i > 0;
}
;
_.previous = function previous_0(){
  checkCriticalElement(this.i > 0);
  return this.this$01.get_0(this.last = --this.i);
}
;
var Ljava_util_AbstractList$ListIteratorImpl_2_classLit = createForClass('java.util', 'AbstractList/ListIteratorImpl', 100);
function $iterator(this$static){
  var outerIter;
  outerIter = new AbstractHashMap$EntrySetIterator((new AbstractHashMap$EntrySet(this$static.this$01)).this$01);
  return new AbstractMap$1$1(outerIter);
}

function AbstractMap$1(this$0){
  this.this$01 = this$0;
}

defineClass(94, 332, $intern_12, AbstractMap$1);
_.contains_0 = function contains_2(key){
  return $containsKey_0(this.this$01, key);
}
;
_.iterator = function iterator_7(){
  return $iterator(this);
}
;
_.remove = function remove_14(key){
  if ($containsKey_0(this.this$01, key)) {
    $remove_7(this.this$01, key);
    return true;
  }
  return false;
}
;
_.size_1 = function size_3(){
  return this.this$01.size_0;
}
;
var Ljava_util_AbstractMap$1_2_classLit = createForClass('java.util', 'AbstractMap/1', 94);
function AbstractMap$1$1(val$outerIter){
  this.val$outerIter2 = val$outerIter;
}

defineClass(132, 1, {}, AbstractMap$1$1);
_.hasNext = function hasNext_4(){
  return $hasNext(this.val$outerIter2);
}
;
_.next = function next_5(){
  var entry;
  entry = $next_2(this.val$outerIter2);
  return entry.getKey();
}
;
_.remove_1 = function remove_15(){
  $remove_8(this.val$outerIter2);
}
;
var Ljava_util_AbstractMap$1$1_2_classLit = createForClass('java.util', 'AbstractMap/1/1', 132);
defineClass(130, 1, $intern_23);
_.equals$ = function equals_13(other){
  var entry;
  if (!instanceOf(other, 20)) {
    return false;
  }
  entry = dynamicCast(other, 20);
  return equals_16(this.key, entry.getKey()) && equals_16(this.value_0, entry.getValue());
}
;
_.getKey = function getKey(){
  return this.key;
}
;
_.getValue = function getValue(){
  return this.value_0;
}
;
_.hashCode$ = function hashCode_15(){
  return hashCode_20(this.key) ^ hashCode_20(this.value_0);
}
;
_.setValue = function setValue(value_0){
  var oldValue;
  oldValue = this.value_0;
  this.value_0 = value_0;
  return oldValue;
}
;
_.toString$ = function toString_22(){
  return this.key + '=' + this.value_0;
}
;
var Ljava_util_AbstractMap$AbstractEntry_2_classLit = createForClass('java.util', 'AbstractMap/AbstractEntry', 130);
function AbstractMap$SimpleEntry(key, value_0){
  this.key = key;
  this.value_0 = value_0;
}

defineClass(131, 130, $intern_23, AbstractMap$SimpleEntry);
var Ljava_util_AbstractMap$SimpleEntry_2_classLit = createForClass('java.util', 'AbstractMap/SimpleEntry', 131);
defineClass(336, 1, $intern_23);
_.equals$ = function equals_14(other){
  var entry;
  if (!instanceOf(other, 20)) {
    return false;
  }
  entry = dynamicCast(other, 20);
  return equals_16(this.getKey(), entry.getKey()) && equals_16(this.getValue(), entry.getValue());
}
;
_.hashCode$ = function hashCode_16(){
  return hashCode_20(this.getKey()) ^ hashCode_20(this.getValue());
}
;
_.toString$ = function toString_23(){
  return this.getKey() + '=' + this.getValue();
}
;
var Ljava_util_AbstractMapEntry_2_classLit = createForClass('java.util', 'AbstractMapEntry', 336);
function $add_5(this$static, o){
  setCheck(this$static.array, this$static.array.length, o);
  return true;
}

function $get_5(this$static, index_0){
  checkElementIndex(index_0, this$static.array.length);
  return this$static.array[index_0];
}

function $indexOf_2(this$static, o, index_0){
  for (; index_0 < this$static.array.length; ++index_0) {
    if (equals_16(o, this$static.array[index_0])) {
      return index_0;
    }
  }
  return -1;
}

function $remove_9(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  splice(this$static.array, index_0, 1);
  return previous;
}

function $remove_10(this$static, o){
  var i;
  i = $indexOf_2(this$static, o, 0);
  if (i == -1) {
    return false;
  }
  this$static.remove_2(i);
  return true;
}

function $set_1(this$static, index_0){
  var previous;
  previous = (checkElementIndex(index_0, this$static.array.length) , this$static.array[index_0]);
  setCheck(this$static.array, index_0, null);
  return previous;
}

function $toArray(this$static, out){
  var i, size_0, result;
  size_0 = this$static.array.length;
  out.length < size_0 && (out = (result = initializeArrayElementsWithDefaults(0, size_0) , initValues(getClass__Ljava_lang_Class___devirtual$(out), out.castableTypeMap$, out.__elementTypeId$, out.__elementTypeCategory$, result) , result));
  for (i = 0; i < size_0; ++i) {
    setCheck(out, i, this$static.array[i]);
  }
  out.length > size_0 && setCheck(out, size_0, null);
  return out;
}

function ArrayList(){
  this.array = initDim(Ljava_lang_Object_2_classLit, $intern_4, 1, 0, 3, 1);
}

function splice(array, index_0, deleteCount){
  array.splice(index_0, deleteCount);
}

function splice_0(array, index_0, deleteCount, value_0){
  array.splice(index_0, deleteCount, value_0);
}

defineClass(24, 334, $intern_24, ArrayList);
_.add_0 = function add_4(index_0, o){
  checkPositionIndex(index_0, this.array.length);
  splice_0(this.array, index_0, 0, o);
}
;
_.add_1 = function add_5(o){
  return $add_5(this, o);
}
;
_.contains_0 = function contains_3(o){
  return $indexOf_2(this, o, 0) != -1;
}
;
_.get_0 = function get_1(index_0){
  return $get_5(this, index_0);
}
;
_.isEmpty = function isEmpty_0(){
  return this.array.length == 0;
}
;
_.remove_2 = function remove_16(index_0){
  return $remove_9(this, index_0);
}
;
_.remove = function remove_17(o){
  return $remove_10(this, o);
}
;
_.size_1 = function size_4(){
  return this.array.length;
}
;
var Ljava_util_ArrayList_2_classLit = createForClass('java.util', 'ArrayList', 24);
function Arrays$ArrayList(array){
  this.array = array;
}

defineClass(68, 334, $intern_24, Arrays$ArrayList);
_.contains_0 = function contains_4(o){
  return $indexOf_1(this, o) != -1;
}
;
_.get_0 = function get_2(index_0){
  return checkElementIndex(index_0, this.array.length) , this.array[index_0];
}
;
_.size_1 = function size_5(){
  return this.array.length;
}
;
var Ljava_util_Arrays$ArrayList_2_classLit = createForClass('java.util', 'Arrays/ArrayList', 68);
function $clinit_Collections(){
  $clinit_Collections = emptyMethod;
  EMPTY_LIST = new Collections$EmptyList;
}

function hashCode_17(collection){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 0;
  for (e$iterator = collection.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

function hashCode_18(list){
  $clinit_Collections();
  var e, e$iterator, hashCode;
  hashCode = 1;
  for (e$iterator = list.iterator(); e$iterator.hasNext();) {
    e = e$iterator.next();
    hashCode = 31 * hashCode + (e != null?hashCode__I__devirtual$(e):0);
    hashCode = ~~hashCode;
  }
  return hashCode;
}

var EMPTY_LIST;
function Collections$EmptyList(){
}

defineClass(153, 334, $intern_24, Collections$EmptyList);
_.contains_0 = function contains_5(object){
  return false;
}
;
_.get_0 = function get_3(location_0){
  checkElementIndex(location_0, 0);
  return null;
}
;
_.iterator = function iterator_8(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.listIterator = function listIterator_1(){
  return $clinit_Collections() , $clinit_Collections$EmptyListIterator() , INSTANCE_2;
}
;
_.size_1 = function size_6(){
  return 0;
}
;
var Ljava_util_Collections$EmptyList_2_classLit = createForClass('java.util', 'Collections/EmptyList', 153);
function $clinit_Collections$EmptyListIterator(){
  $clinit_Collections$EmptyListIterator = emptyMethod;
  INSTANCE_2 = new Collections$EmptyListIterator;
}

function Collections$EmptyListIterator(){
}

defineClass(154, 1, {}, Collections$EmptyListIterator);
_.hasNext = function hasNext_5(){
  return false;
}
;
_.hasPrevious = function hasPrevious_0(){
  return false;
}
;
_.next = function next_6(){
  throw new NoSuchElementException;
}
;
_.previous = function previous_1(){
  throw new NoSuchElementException;
}
;
_.remove_1 = function remove_18(){
  throw new IllegalStateException;
}
;
var INSTANCE_2;
var Ljava_util_Collections$EmptyListIterator_2_classLit = createForClass('java.util', 'Collections/EmptyListIterator', 154);
function checkStructuralChange(host, iterator){
  if (iterator._gwt_modCount != host._gwt_modCount) {
    throw new ConcurrentModificationException;
  }
}

function recordLastKnownStructure(host, iterator){
  setModCount(iterator, host._gwt_modCount);
}

function setModCount(o, modCount){
  o._gwt_modCount = modCount;
}

function structureChanged(map_0){
  var modCount;
  modCount = map_0._gwt_modCount | 0;
  setModCount(map_0, modCount + 1);
}

function ConcurrentModificationException(){
  RuntimeException.call(this);
}

defineClass(219, 18, $intern_6, ConcurrentModificationException);
var Ljava_util_ConcurrentModificationException_2_classLit = createForClass('java.util', 'ConcurrentModificationException', 219);
function Date_0(){
  this.jsdate = new Date;
}

function Date_1(date){
  this.jsdate = create(toDouble(date));
}

function padTwo(number){
  return number < 10?'0' + number:'' + number;
}

defineClass(38, 1, {3:1, 6:1, 38:1}, Date_0, Date_1);
_.equals$ = function equals_15(obj){
  return instanceOf(obj, 38) && eq(fromDouble(this.jsdate.getTime()), fromDouble(dynamicCast(obj, 38).jsdate.getTime()));
}
;
_.hashCode$ = function hashCode_19(){
  var time;
  time = fromDouble(this.jsdate.getTime());
  return toInt(xor(time, shru(time, 32)));
}
;
_.toString$ = function toString_24(){
  var hourOffset, minuteOffset, offset;
  offset = -this.jsdate.getTimezoneOffset();
  hourOffset = (offset >= 0?'+':'') + ~~(offset / 60);
  minuteOffset = (offset < 0?-offset:offset) % 60 < 10?'0' + (offset < 0?-offset:offset) % 60:'' + (offset < 0?-offset:offset) % 60;
  return ($clinit_Date$StringData() , DAYS)[this.jsdate.getDay()] + ' ' + MONTHS[this.jsdate.getMonth()] + ' ' + padTwo(this.jsdate.getDate()) + ' ' + padTwo(this.jsdate.getHours()) + ':' + padTwo(this.jsdate.getMinutes()) + ':' + padTwo(this.jsdate.getSeconds()) + ' GMT' + hourOffset + minuteOffset + ' ' + this.jsdate.getFullYear();
}
;
var Ljava_util_Date_2_classLit = createForClass('java.util', 'Date', 38);
function $clinit_Date$StringData(){
  $clinit_Date$StringData = emptyMethod;
  DAYS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']);
  MONTHS = initValues(getClassLiteralForArray(Ljava_lang_String_2_classLit, 1), $intern_4, 2, 4, ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']);
}

var DAYS, MONTHS;
function $equals_0(value1, value2){
  return maskUndefined(value1) === maskUndefined(value2) || value1 != null && equals_Ljava_lang_Object__Z__devirtual$(value1, value2);
}

function $getHashCode(key){
  var hashCode;
  hashCode = hashCode__I__devirtual$(key);
  return ~~hashCode;
}

function HashMap(){
  $reset(this);
}

defineClass(25, 129, {3:1, 26:1}, HashMap);
var Ljava_util_HashMap_2_classLit = createForClass('java.util', 'HashMap', 25);
function $add_6(this$static, o){
  var old;
  old = $put_0(this$static.map_0, o, this$static);
  return old == null;
}

function $contains_0(this$static, o){
  return $containsKey_0(this$static.map_0, o);
}

function $remove_11(this$static, o){
  return $remove_7(this$static.map_0, o) != null;
}

function HashSet(){
  this.map_0 = new HashMap;
}

defineClass(83, 332, {3:1, 59:1}, HashSet);
_.contains_0 = function contains_6(o){
  return $contains_0(this, o);
}
;
_.isEmpty = function isEmpty_1(){
  return this.map_0.size_0 == 0;
}
;
_.iterator = function iterator_9(){
  return $iterator(new AbstractMap$1(this.map_0));
}
;
_.remove = function remove_19(o){
  return $remove_11(this, o);
}
;
_.size_1 = function size_7(){
  return this.map_0.size_0;
}
;
_.toString$ = function toString_25(){
  return $toString_0(new AbstractMap$1(this.map_0));
}
;
var Ljava_util_HashSet_2_classLit = createForClass('java.util', 'HashSet', 83);
function $ensureChain(this$static, hashCode){
  var map_0 = this$static.backingMap;
  return map_0[hashCode] || (map_0[hashCode] = []);
}

function $getChain(this$static, hashCode){
  return this$static.backingMap[hashCode];
}

function $getChainOrEmpty(this$static, hashCode){
  return this$static.backingMap[hashCode] || [];
}

function $getEntry(this$static, key){
  var entry, entry$array, entry$index, entry$max;
  for (entry$array = $getChainOrEmpty(this$static, key == null?'0':'' + $getHashCode(key)) , entry$index = 0 , entry$max = entry$array.length; entry$index < entry$max; ++entry$index) {
    entry = entry$array[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry;
    }
  }
  return null;
}

function $keys(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_1(this$static, key, value_0){
  var chain, entry, entry$index, entry$max;
  chain = $ensureChain(this$static, key == null?'0':'' + $getHashCode(key));
  for (entry$index = 0 , entry$max = chain.length; entry$index < entry$max; ++entry$index) {
    entry = chain[entry$index];
    if ($equals_0(key, entry.getKey())) {
      return entry.setValue(value_0);
    }
  }
  setCheck(chain, chain.length, new AbstractMap$SimpleEntry(key, value_0));
  $elementAdded(this$static.host);
  return null;
}

function $remove_12(this$static, key){
  var chain, entry, hashCode, i;
  hashCode = key == null?'0':'' + $getHashCode(key);
  chain = $getChainOrEmpty(this$static, hashCode);
  for (i = 0; i < chain.length; i++) {
    entry = chain[i];
    if ($equals_0(key, entry.getKey())) {
      chain.length == 1?(delete this$static.backingMap[hashCode] , undefined):(chain.splice(i, 1) , undefined);
      $elementRemoved(this$static.host);
      return entry.getValue();
    }
  }
  return null;
}

function InternalJsHashCodeMap(){
  this.backingMap = this.createMap();
}

defineClass(104, 1, {}, InternalJsHashCodeMap);
_.createMap = function createMap(){
  return Object.create(null);
}
;
_.entries = function entries(){
  return new InternalJsHashCodeMap$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap', 104);
function $hasNext_0(this$static){
  if (this$static.itemIndex < this$static.chain.length) {
    return true;
  }
  if (this$static.chainIndex < this$static.keys_0.length - 1) {
    this$static.chain = $getChain(this$static.this$01, this$static.keys_0[++this$static.chainIndex]);
    this$static.itemIndex = 0;
    return true;
  }
  return false;
}

function InternalJsHashCodeMap$1(this$0){
  this.this$01 = this$0;
  this.keys_0 = $keys(this.this$01);
  this.chain = initDim(Ljava_util_Map$Entry_2_classLit, $intern_4, 20, 0, 0, 1);
}

defineClass(172, 1, {}, InternalJsHashCodeMap$1);
_.hasNext = function hasNext_6(){
  return $hasNext_0(this);
}
;
_.next = function next_7(){
  return checkCriticalElement($hasNext_0(this)) , this.lastChain = this.chain , this.lastEntry = this.chain[this.itemIndex++] , this.lastEntry;
}
;
_.remove_1 = function remove_20(){
  checkState(!!this.lastEntry);
  $remove_12(this.this$01, this.lastEntry.getKey());
  maskUndefined(this.chain) === maskUndefined(this.lastChain) && this.chain.length != 1 && --this.itemIndex;
  this.lastEntry = null;
}
;
_.chainIndex = -1;
_.itemIndex = 0;
_.lastChain = null;
_.lastEntry = null;
var Ljava_util_InternalJsHashCodeMap$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/1', 172);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy(){
  InternalJsHashCodeMap.call(this);
}

defineClass(170, 104, {}, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy);
_.createMap = function createMap_0(){
  return {};
}
;
_.entries = function entries_0(){
  var list = this.newEntryList();
  var map_0 = this.backingMap;
  for (var hashCode in map_0) {
    if (hashCode == parseInt(hashCode, 10)) {
      var array = map_0[hashCode];
      for (var i = 0, c = array.length; i < c; ++i) {
        list.add_1(array[i]);
      }
    }
  }
  return list.iterator();
}
;
_.newEntryList = function newEntryList(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this);
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy', 170);
function InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(171, 24, $intern_24, InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1);
_.remove_2 = function remove_21(index_0){
  var removed;
  return removed = dynamicCast($remove_9(this, index_0), 20) , $remove_12(this.this$11, removed.getKey()) , removed;
}
;
var Ljava_util_InternalJsHashCodeMap$InternalJsHashCodeMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsHashCodeMap/InternalJsHashCodeMapLegacy/1', 171);
function InternalJsMapFactory(){
}

defineClass(167, 1, {}, InternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap(){
  return new InternalJsHashCodeMap;
}
;
_.createJsStringMap = function createJsStringMap(){
  return new InternalJsStringMap;
}
;
var Ljava_util_InternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory', 167);
function $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory(){
  $clinit_InternalJsMapFactory$BackwardCompatibleJsMapFactory = emptyMethod;
  delegate = createFactory();
}

function canHandleProto(){
  var protoField = '__proto__';
  var map_0 = Object.create(null);
  if (map_0[protoField] !== undefined) {
    return false;
  }
  var keys_0 = Object.getOwnPropertyNames(map_0);
  if (keys_0.length != 0) {
    return false;
  }
  map_0[protoField] = 42;
  if (map_0[protoField] !== 42) {
    return false;
  }
  return true;
}

function createFactory(){
  var map_0;
  if (Object.create && Object.getOwnPropertyNames && canHandleProto()) {
    return (map_0 = Object.create(null) , map_0['__proto__'] = 42 , Object.getOwnPropertyNames(map_0).length == 0)?new InternalJsMapFactory$KeysWorkaroundJsMapFactory:new InternalJsMapFactory;
  }
  return new InternalJsMapFactory$LegacyInternalJsMapFactory;
}

var delegate;
function InternalJsMapFactory$KeysWorkaroundJsMapFactory(){
}

defineClass(169, 167, {}, InternalJsMapFactory$KeysWorkaroundJsMapFactory);
_.createJsStringMap = function createJsStringMap_0(){
  return new InternalJsStringMap$InternalJsStringMapWithKeysWorkaround;
}
;
var Ljava_util_InternalJsMapFactory$KeysWorkaroundJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/KeysWorkaroundJsMapFactory', 169);
function InternalJsMapFactory$LegacyInternalJsMapFactory(){
}

defineClass(168, 167, {}, InternalJsMapFactory$LegacyInternalJsMapFactory);
_.createJsHashCodeMap = function createJsHashCodeMap_0(){
  return new InternalJsHashCodeMap$InternalJsHashCodeMapLegacy;
}
;
_.createJsStringMap = function createJsStringMap_1(){
  return new InternalJsStringMap$InternalJsStringMapLegacy;
}
;
var Ljava_util_InternalJsMapFactory$LegacyInternalJsMapFactory_2_classLit = createForClass('java.util', 'InternalJsMapFactory/LegacyInternalJsMapFactory', 168);
function $keys_0(this$static){
  return Object.getOwnPropertyNames(this$static.backingMap);
}

function $put_2(this$static, key, value_0){
  var oldValue;
  oldValue = this$static.backingMap[key];
  oldValue === undefined && $elementAdded(this$static.host);
  $set_2(this$static, key, value_0 === undefined?null:value_0);
  return oldValue;
}

function $remove_13(this$static, key){
  var value_0;
  value_0 = this$static.backingMap[key];
  if (!(value_0 === undefined)) {
    delete this$static.backingMap[key];
    $elementRemoved(this$static.host);
  }
  return value_0;
}

function $set_2(this$static, key, value_0){
  this$static.backingMap[key] = value_0;
}

function InternalJsStringMap(){
  this.backingMap = this.createMap_0();
}

defineClass(82, 1, {}, InternalJsStringMap);
_.createMap_0 = function createMap_1(){
  return Object.create(null);
}
;
_.entries = function entries_1(){
  var keys_0;
  keys_0 = this.keys_1();
  return new InternalJsStringMap$1(this, keys_0);
}
;
_.get_1 = function get_4(key){
  return this.backingMap[key];
}
;
_.keys_1 = function keys_1(){
  return $keys_0(this);
}
;
_.newMapEntry = function newMapEntry(key){
  return new InternalJsStringMap$2(this, key);
}
;
_.put = function put(key, value_0){
  return $put_2(this, key, value_0);
}
;
_.remove_3 = function remove_22(key){
  return $remove_13(this, key);
}
;
var Ljava_util_InternalJsStringMap_2_classLit = createForClass('java.util', 'InternalJsStringMap', 82);
function InternalJsStringMap$1(this$0, val$keys){
  this.this$01 = this$0;
  this.val$keys2 = val$keys;
}

defineClass(158, 1, {}, InternalJsStringMap$1);
_.hasNext = function hasNext_7(){
  return this.i < this.val$keys2.length;
}
;
_.next = function next_8(){
  return checkCriticalElement(this.i < this.val$keys2.length) , new InternalJsStringMap$2(this.this$01, this.val$keys2[this.last = this.i++]);
}
;
_.remove_1 = function remove_23(){
  checkState(this.last != -1);
  this.this$01.remove_3(this.val$keys2[this.last]);
  this.last = -1;
}
;
_.i = 0;
_.last = -1;
var Ljava_util_InternalJsStringMap$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/1', 158);
function InternalJsStringMap$2(this$0, val$key){
  this.this$01 = this$0;
  this.val$key2 = val$key;
}

defineClass(101, 336, $intern_23, InternalJsStringMap$2);
_.getKey = function getKey_0(){
  return this.val$key2;
}
;
_.getValue = function getValue_0(){
  return this.this$01.get_1(this.val$key2);
}
;
_.setValue = function setValue_0(object){
  return this.this$01.put(this.val$key2, object);
}
;
var Ljava_util_InternalJsStringMap$2_2_classLit = createForClass('java.util', 'InternalJsStringMap/2', 101);
function InternalJsStringMap$InternalJsStringMapLegacy(){
  InternalJsStringMap.call(this);
}

defineClass(155, 82, {}, InternalJsStringMap$InternalJsStringMapLegacy);
_.createMap_0 = function createMap_2(){
  return {};
}
;
_.entries = function entries_2(){
  var list = this.newEntryList_0();
  for (var key in this.backingMap) {
    if (key.charCodeAt(0) == 58) {
      var entry = this.newMapEntry(key.substring(1));
      list.add_1(entry);
    }
  }
  return list.iterator();
}
;
_.get_1 = function get_5(key){
  return this.backingMap[':' + key];
}
;
_.newEntryList_0 = function newEntryList_0(){
  return new InternalJsStringMap$InternalJsStringMapLegacy$1(this);
}
;
_.put = function put_0(key, value_0){
  return $put_2(this, ':' + key, value_0);
}
;
_.remove_3 = function remove_24(key){
  return $remove_13(this, ':' + key);
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy', 155);
function InternalJsStringMap$InternalJsStringMapLegacy$1(this$1){
  this.this$11 = this$1;
  ArrayList.call(this);
}

defineClass(157, 24, $intern_24, InternalJsStringMap$InternalJsStringMapLegacy$1);
_.remove_2 = function remove_25(index_0){
  var removed;
  return removed = dynamicCast($remove_9(this, index_0), 20) , $remove_13(this.this$11, ':' + dynamicCastToString(removed.getKey())) , removed;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapLegacy$1_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapLegacy/1', 157);
function InternalJsStringMap$InternalJsStringMapWithKeysWorkaround(){
  InternalJsStringMap.call(this);
}

defineClass(156, 82, {}, InternalJsStringMap$InternalJsStringMapWithKeysWorkaround);
_.keys_1 = function keys_2(){
  var keys_0;
  keys_0 = $keys_0(this);
  !(this.backingMap['__proto__'] === undefined) && (keys_0[keys_0.length] = '__proto__');
  return keys_0;
}
;
var Ljava_util_InternalJsStringMap$InternalJsStringMapWithKeysWorkaround_2_classLit = createForClass('java.util', 'InternalJsStringMap/InternalJsStringMapWithKeysWorkaround', 156);
var Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
function NoSuchElementException(){
  RuntimeException.call(this);
}

defineClass(40, 18, $intern_6, NoSuchElementException);
var Ljava_util_NoSuchElementException_2_classLit = createForClass('java.util', 'NoSuchElementException', 40);
function equals_16(a, b){
  return maskUndefined(a) === maskUndefined(b) || a != null && equals_Ljava_lang_Object__Z__devirtual$(a, b);
}

function hashCode_20(o){
  return o != null?hashCode__I__devirtual$(o):0;
}

var Lcom_google_gwt_lang_CollapsedPropertyHolder_2_classLit = createForClass('com.google.gwt.lang', 'CollapsedPropertyHolder', 319), Lcom_google_gwt_lang_JavaClassHierarchySetupUtil_2_classLit = createForClass('com.google.gwt.lang', 'JavaClassHierarchySetupUtil', 321), Lcom_google_gwt_lang_LongLibBase$LongEmul_2_classLit = createForClass('com.google.gwt.lang', 'LongLibBase/LongEmul', null), Lcom_google_gwt_lang_ModuleUtils_2_classLit = createForClass('com.google.gwt.lang', 'ModuleUtils', 324), C_classLit = createForPrimitive('char', 'C'), Ljava_util_Map$Entry_2_classLit = createForInterface('java.util', 'Map/Entry');
var $entry = registerEntry();
var gwtOnLoad = gwtOnLoad = gwtOnLoad_0;
addInitFunctions(init);
setGwtProperty('permProps', [[['locale', 'default'], ['user.agent', 'ie8']]]);
$sendStats('moduleStartup', 'moduleEvalEnd');
gwtOnLoad(__gwtModuleFunction.__errFn, __gwtModuleFunction.__moduleName, __gwtModuleFunction.__moduleBase, __gwtModuleFunction.__softPermutationId,__gwtModuleFunction.__computePropValue);
$sendStats('moduleStartup', 'end');
$gwt && $gwt.permProps && __gwtModuleFunction.__moduleStartupDone($gwt.permProps);
//# sourceURL=salas-0.js

