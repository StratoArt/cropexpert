/* Crop Expert — Crop Service: crop master/profile queries. */
(function(){'use strict';
  function records(data){return data?.cropProfiles?.records||[]}
  function byId(data,id){return records(data).find(x=>x.id===id)||null}
  function search(data,q){const n=String(q||'').toLowerCase();return records(data).filter(x=>JSON.stringify(x).toLowerCase().includes(n))}
  window.CropExpertCropService=Object.freeze({records,byId,search});
})();
