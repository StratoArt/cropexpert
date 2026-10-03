/* Crop Expert — Pesticide Service: product/active-ingredient queries. */
(function(){'use strict';
  function records(data){return data?.pesticides?.records||[]}
  function byId(data,id){return records(data).find(x=>x.id===id)||null}
  function byActiveIngredient(data,name){const q=String(name||'').toLowerCase().trim();return records(data).filter(x=>String(x['Bahan Aktif']||'').split(';').some(v=>v.trim().toLowerCase()===q))}
  window.CropExpertPesticideService=Object.freeze({records,byId,byActiveIngredient});
})();
