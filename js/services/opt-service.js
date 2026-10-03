/* Crop Expert — OPT Service: domain queries over loaded OPT data. */
(function(){'use strict';
  const service={
    all(data){return data?.opt||{pests:[],diseases:[],weeds:[]}},
    pests(data){return this.all(data).pests||[]},
    diseases(data){return this.all(data).diseases||[]},
    weeds(data){return this.all(data).weeds||[]},
    find(data,id){const x=this.all(data);return [...(x.pests||[]),...(x.diseases||[]),...(x.weeds||[])].find(v=>v.id===id)||null}
  };
  window.CropExpertOptService=Object.freeze(service);
})();
