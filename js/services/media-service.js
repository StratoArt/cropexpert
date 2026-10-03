/* Crop Expert — Media Service
 * Normalizes media references. Upload/write operations belong to Data Manager backend.
 */
(function(){'use strict';
  function resolve(path){return String(path||'').replace(/^\.?\//,'')}
  function list(ref){if(Array.isArray(ref))return ref.map(resolve);if(!ref)return [];return [resolve(ref)]}
  function primary(ref){return list(ref)[0]||null}
  window.CropExpertMediaService=Object.freeze({resolve,list,primary});
})();
