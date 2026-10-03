/* Crop Expert — State Service
 * Centralized application state. UI modules should depend on this service instead of creating parallel state objects.
 */
(function(){
  'use strict';
  const defaults={committee:'IRAC',data:null,emerging:null,opt:null,imageSources:null,control:null,eppoLinks:null,formulations:null,pesticideKnowledge:null,pesticides:null,sources:null,agroKnowledge:null,fusarium:null,hamaSource:null,cropGrowth:null,cropNutritionProfiles:null,cropProfiles:null,featuredPests:null,pesticideMoaGuide:null,nutrition:null,nutritionFilter:'ALL',nutritionSearch:'',libraryFilter:'ALL',librarySearch:'',search:'',group:'ALL',screen:'home',type:'Hama',pestFilter:'Semua',formulationFilter:'ALL',formulationSearch:'',pesticideFilter:'ALL',pesticideSearch:'',moaView:'ai',detailRef:null,deferredPrompt:null,historyReady:false,historyLock:false,targetCategory:'nerve-muscle',scanFile:null,lensSearch:''};
  let state={...defaults};
  function get(){return state}
  function set(patch){Object.assign(state,patch||{});return state}
  function reset(){state={...defaults};return state}
  window.CropExpertStateService=Object.freeze({get,set,reset,defaults:Object.freeze({...defaults})});
})();
