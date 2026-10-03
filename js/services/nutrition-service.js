/* Crop Expert — Nutrition Service: nutrition guideline access. */
(function(){'use strict';
  function cropGuidelines(data){return data?.cropNutritionProfiles?.records||[]}
  function general(data){return data?.nutrition?.records||data?.nutrition||null}
  function findCrop(data,id){return cropGuidelines(data).find(x=>x.id===id)||null}
  window.CropExpertNutritionService=Object.freeze({cropGuidelines,general,findCrop});
})();
