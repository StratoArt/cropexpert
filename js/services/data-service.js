/* Crop Expert — Data Service
 * Single responsibility: load and return application datasets.
 * No UI/rendering logic lives here.
 */
(function(){
  'use strict';

  async function jsonOr(path, fallback){
    try{
      const r = await fetch(path, {cache:'no-cache'});
      if(!r.ok) throw new Error(`${r.status} ${path}`);
      return await r.json();
    }catch(err){
      console.warn('[Crop Expert] Data tidak tersedia:', path, err);
      return fallback;
    }
  }

  async function loadAll(){
    const [
      moa,
      emerging,
      opt,
      imageSources,
      control,
      eppoLinks,
      formulations,
      pesticideKnowledge,
      pesticides,
      sources,
      agroKnowledge,
      fusarium,
      hamaSource,
      cropGuidelines,
      scanGuide,
      cropOptSources,
      cropGrowth,
      nutrition,
      cropNutritionProfiles,
      cropProfiles,
      featuredPests,
      pesticideMoaGuide
    ] = await Promise.all([
      jsonOr('data/moa_master_2026.json',{records:{IRAC:[],FRAC:[],HRAC:[]}}),
      jsonOr('data/emerging_actives.json',{records:[]}),
      jsonOr('data/opt.json',{pests:[],diseases:[],weeds:[]}),
      jsonOr('data/image_sources.json',{}),
      jsonOr('data/opt_control.json',{relationships:{},active_ingredients:[]}),
      jsonOr('data/eppo_links.json',{}),
      jsonOr('data/formulations.json',{items:[]}),
      jsonOr('data/pesticide_knowledge.json',{sections:[]}),
      jsonOr('data/pesticide_database_id.json',{records:[]}),
      jsonOr('data/sources.json',{sources:[]}),
      jsonOr('data/agrobiology_knowledge.json',{sections:[]}),
      jsonOr('data/fusarium_watermelon.json',null),
      jsonOr('data/hama_source_table.json',{records:[],crop_names_source:[],products:[],classifications:[],record_count:0}),
      jsonOr('data/crop_guidelines.json',{records:[]}),
      jsonOr('data/scan_analysis_guide.json',{}),
      jsonOr('data/crop_opt_sources_2026.json',{records:[]}),
      jsonOr('data/crop_growth_guidelines_2026.json',{records:[]}),
      jsonOr('data/crop_nutrition_guideline_2026.json',{records:[]}),
      jsonOr('data/crop_nutrition_crop_guidelines_2026.json',{records:[]}),
      jsonOr('data/crop_profiles_2026.json',{records:[]}),
      jsonOr('data/crop_featured_pests_2026.json',{records:[]}),
      jsonOr('data/pesticide_mode_of_action_2026.json',{
        version:'fallback',
        insecticide:{title:'Insektisida',subtitle:'Target biologis',targets:[],entry:[],neural:[]},
        fungicide:{title:'Fungisida',subtitle:'Target biologis',targets:[],principles:[]},
        herbicide:{title:'Herbisida',subtitle:'Target biologis',targets:[],principles:[]}
      })
    ]);

    return {
      data: moa,
      pesticideMoaGuide,
      featuredPests,
      cropGrowth,
      cropNutritionProfiles,
      cropProfiles,
      nutrition,
      scanGuide,
      emerging,
      opt,
      imageSources,
      control,
      eppoLinks,
      formulations,
      pesticideKnowledge,
      pesticides,
      sources,
      agroKnowledge,
      fusarium,
      hamaSource,
      cropGuidelines,
      cropOptSources
    };
  }

  window.CropExpertDataService = Object.freeze({loadAll});
})();
