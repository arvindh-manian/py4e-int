(self.webpackChunkWebComponents=self.webpackChunkWebComponents||[]).push([[882],{12882:(e,n,t)=>{"use strict";t.r(n);var o=t(2568);function d(e,n){let t=new o.Z;e.domRoot.find("#jmpFirstInstr").click((function(){t.logBookEvent({event:"codelens",act:"first",div_id:n})})),e.domRoot.find("#jmpLastInstr").click((function(){t.logBookEvent({event:"codelens",act:"last",div_id:n})})),e.domRoot.find("#jmpStepBack").click((function(){t.logBookEvent({event:"codelens",act:"back",div_id:n})})),e.domRoot.find("#jmpStepFwd").click((function(){t.logBookEvent({event:"codelens",act:"fwd",div_id:n})})),e.domRoot.find("#executionSlider").bind("slide",(function(e,o){t.logBookEvent({event:"codelens",act:"slide",div_id:n})})),t.containerDiv=document.getElementById(n),t.indicate_component_ready()}function i(e){var n=$("#"+e);$(n).find("#jmpFirstInstr").addClass("btn btn-default"),$(n).find("#jmpStepBack").addClass("btn btn-danger"),$(n).find("#jmpStepFwd").addClass("btn btn-success"),$(n).find("#jmpLastInstr").addClass("btn btn-default")}t(71951),"undefined"==typeof allVsualizers&&(window.allVisualizers=[]),$(document).ready((function(){if("undefined"!=typeof allTraceData){for(let e in allTraceData){let n=document.getElementById(e),t=$(n).data("params").lang;try{let n=addVisualizerToPage(allTraceData[e],e,{startingInstruction:0,editCodeBaseURL:null,hideCode:!1,lang:t});d(n,e),i(e),window.allVisualizers.push(n)}catch(n){console.log(`Error rendering CodeLens Problem ${e}`),console.log(n)}}document.addEventListener("codelens:answer",(function(e){(new o.Z).logBookEvent({event:"codelens",div_id:e.detail.divid,act:`answer:${e.detail.answer}`,correct:e.detail.correct}),console.log(e)}))}}))}}]);
//# sourceMappingURL=882.bundle.js.map?v=55908a409ab84282a977