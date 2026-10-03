/* Crop Expert — MoA Service: committee/master queries. */
(function(){'use strict';
  function rows(data,committee){return data?.data?.records?.[committee]||[]}
  function codes(data,committee){return [...new Set(rows(data,committee).map(r=>r[1]).filter(Boolean))]}
  function activeIngredients(data,committee){return [...new Set(rows(data,committee).flatMap(r=>String(r[5]||'').split(';').map(x=>x.trim()).filter(Boolean)))]}
  window.CropExpertMoaService=Object.freeze({rows,codes,activeIngredients});
})();
