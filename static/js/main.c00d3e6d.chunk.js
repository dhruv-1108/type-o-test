(this["webpackJsonptype-o-test"]=this["webpackJsonptype-o-test"]||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),r=a(4),i=a.n(r),o=a(8),c=a(2),h=a(5),l=a(6),d=a(10),u=a(9),m=(a(15),a.p+"static/media/keyboard.ae610b97.png"),f=(a(16),a(0)),p=function(){return Object(f.jsx)("div",{className:"nav-container",children:Object(f.jsxs)("div",{className:"nav-left",children:[Object(f.jsx)("img",{src:m,alt:"Logo",className:"type-logo"}),Object(f.jsx)("p",{className:"type-logo-text",children:"Type-o-Test"})]})})},b=(a(18),a.p+"static/media/logo.8574a867.png"),g=a(7),j=a.n(g),w=function(){return Object(f.jsxs)("div",{className:"landing-container",children:[Object(f.jsxs)("div",{"data-aos":"fade-right",className:"landing-left",children:[Object(f.jsx)("h1",{className:"landing-header",children:"Can you type..."}),Object(f.jsx)("div",{className:"typewriter-container",children:Object(f.jsx)(j.a,{options:{strings:["Fast?","Accurate?","Correct?"],autoStart:!0,loop:!0}})})]}),Object(f.jsx)("div",{className:"landing-right",children:Object(f.jsx)("img",{src:b,alt:"Logo image",className:"main-image"})})]})},y=(a(20),a(21),a(22),function(e){var t=e.words,a=e.characters,s=e.wpm,n=e.startAgain;return Object(f.jsxs)("div",{className:"try-again-container",children:[Object(f.jsx)("h1",{children:"Type-o-Test Results.."}),Object(f.jsxs)("div",{className:"result-container",children:[Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Characters: "})," ",a]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Words: "})," ",t]}),Object(f.jsxs)("p",{children:[Object(f.jsx)("b",{children:"Speed: "})," ",s]})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{onClick:function(){return n()},className:"end-button start-again-button",children:"Try Again"})})]})}),v=(a(23),a(24),function(e){var t=e.cardName,a=e.cardValue;return Object(f.jsxs)("div",{className:"details-card-container",children:[Object(f.jsx)("div",{className:"card-name",children:t}),Object(f.jsx)("div",{className:"card-value",children:a})]})}),x=(a(25),a(26),function(e){var t,a=e.individualLetterInfo,s=a.status;return t="correct"===s?"test-letter-correct":"incorrect"===s?"test-letter-incorrect":"test-letter-unattempted",Object(f.jsx)("span",{className:"test-letter ".concat(t),children:a.testLetter})}),O=function(e){var t=e.timeLeft,a=e.timerStarted,s=e.testInfo,n=e.onInputChange;return Object(f.jsxs)("div",{className:"typing-challenge",children:[Object(f.jsxs)("div",{className:"timer-container",children:[Object(f.jsxs)("p",{className:"timer",children:["00:",t>=10?t:"0".concat(t)]}),Object(f.jsx)("p",{className:"timer-info",children:!a&&"Start typing to start the test"})]}),Object(f.jsxs)("div",{className:"textarea-container",children:[Object(f.jsx)("div",{className:"textarea-left ",children:Object(f.jsx)("div",{className:"textarea test-paragraph",children:s.map((function(e,t){return Object(f.jsx)(x,{individualLetterInfo:e},t)}))})}),Object(f.jsx)("div",{className:"textarea-right",children:Object(f.jsx)("textarea",{onChange:function(e){return n(e.target.value)},className:"textarea",placeholder:"Start typing here"})})]})]})},k=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,n=e.wpm,r=e.timeLeft,i=e.timerStarted,o=e.testInfo,c=e.onInputChange;return Object(f.jsxs)("div",{className:"typing-challenge-container",children:[Object(f.jsxs)("div",{className:"details-container",children:[Object(f.jsx)(v,{cardName:"Words",cardValue:a}),Object(f.jsx)(v,{cardName:"Characters",cardValue:s}),Object(f.jsx)(v,{cardName:"Speed",cardValue:n})]}),Object(f.jsx)("div",{className:"typewriter-container",children:Object(f.jsx)(O,{timeLeft:r,timerStarted:i,selectedParagraph:t,testInfo:o,onInputChange:c})})]})},I=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,n=e.wpm,r=e.timeLeft,i=e.timerStarted,o=e.testInfo,c=e.onInputChange,h=e.startAgain;return Object(f.jsx)("div",{className:"test-container",children:r>0?Object(f.jsx)("div",{"data-aos":"fade-up",className:"typing-challenge-container",children:Object(f.jsx)(k,{selectedParagraph:t,words:a,characters:s,wpm:n,timeLeft:r,timerStarted:i,testInfo:o,onInputChange:c})}):Object(f.jsx)("div",{className:"try-again-container",children:Object(f.jsx)(y,{words:a,characters:s,wpm:n,startAgain:h})})})},N=function(e){var t=e.selectedParagraph,a=e.words,s=e.characters,n=e.wpm,r=e.timeLeft,i=e.timerStarted,o=e.testInfo,c=e.onInputChange,h=e.startAgain;return Object(f.jsxs)("div",{className:"challenge-section",children:[Object(f.jsx)("h1",{"data-aos":"fade-down",className:"challenge-section-header",children:"Take a speed test now!"}),Object(f.jsx)(I,{selectedParagraph:t,timeLeft:r,timerStarted:i,words:a,characters:s,wpm:n,testInfo:o,onInputChange:c,startAgain:h})]})},A=(a(27),function(){return Object(f.jsx)("div",{className:"footer-container",children:Object(f.jsx)("h1",{children:"So what was your score??"})})}),S=["Although most people consider piranhas to be quite dangerous, they are, except in two main situations, entirely harmless. Piranhas rarely feed on large animals; they eat smaller fish and aquatic plants. When confronted with humans, piranhas\u2019 instinct is to flee, not attack. But there are two situations in which a piranha bite is likely. The first is when a frightened piranha is lifted out of the water\u2014for example, if it has been caught in a fishing net. The second is when the water level in pools where piranhas are living falls too low. A large number of fish may be trapped in a single pool, and if they are hungry, they may attack anything that enters the water.","We can assume that any instance of a stool can be construed as a funest handle. In recent years, we can assume that any instance of a cloakroom can be construed as a topfull leather. Far from the truth, a turnip sees a man as a churlish poison. A plate can hardly be considered a farming rat without also being a lumber. Some posit the cissoid pastor to be less than shamefaced. This is not to discredit the idea that a season of the selection is assumed to be an absurd jaw. As far as we can estimate, the time of a level becomes a prolate october. If this was somewhat unclear, a time sees a representative as an anguished ox. In modern times authors often misinterpret the popcorn as a sternmost kendo, when in actuality it feels more like a battered step-brother.","Some posit the thickset timer to be less than shaken. A methane of the deodorant is assumed to be a snappish cold. The toeless blanket comes from a learned clover. A hollow command is an island of the mind. In recent years, the whity snowboard comes from a bijou cause. If this was somewhat unclear, a discoid pig without trials is truly a bulb of smacking zephyrs. Few can name a luscious honey that isn't a deuced guilty. Before undercloths, siameses were only capitals. Some assert that few can name a sunfast edger that isn't a smectic laura.","The montane peripheral comes from a hoggish security. Nowhere is it disputed that the palms could be said to resemble pinnate bombers. This could be, or perhaps a grenade is a keyboard from the right perspective. Extending this logic, the japans could be said to resemble centrist brackets. Their Friday was, in this moment, a phatic helmet. A systemless gondola without attentions is truly a wolf of spermic edwards. The literature would have us believe that a willful cuticle is not but a geese. If this was somewhat unclear, one cannot separate coaches from brilliant plows. A dish is an olden baritone.","Some chairborne fronts are thought of simply as routes. One cannot separate hamsters from crackbrained journeies. As far as we can estimate, some increased stopsigns are thought of simply as changes. Few can name an uncalled doctor that isn't a ledgy kendo. Some posit the dendroid buffet to be less than surgy. The literature would have us believe that a rollneck growth is not but a sand. They were lost without the vying bulb that composed their blouse. A heat is a watchmaker's white. The fitchy bush reveals itself as a briny share to those who look.","To be more specific, the grades could be said to resemble latish plasterboards. The first strawless grain is, in its own way, an undercloth. A sheep is the time of a step-son. Some assert that authors often misinterpret the poppy as an unslung lycra, when in actuality it feels more like a kacha ex-husband. We can assume that any instance of an encyclopedia can be construed as an undyed asia. We know that feathers are humdrum reactions. It's an undeniable fact, really; before communities, ashes were only ATMS. The first dicky delete is, in its own way, a cross. They were lost without the arranged string that composed their paint.","Extending this logic, the basses could be said to resemble zippy sugars. A secund lobster's iris comes with it the thought that the throaty Vietnam is an alligator. A toad is the kitchen of a production. Some posit the notour chef to be less than morish. To be more specific, a moonlit pumpkin's sea comes with it the thought that the fiercest cub is a measure. Recent controversy aside, a slimsy downtown without perches is truly a grandson of spiry sousaphones. The bowl of a couch becomes a daring archeology. A kayak is a chill from the right perspective. If this was somewhat unclear, few can name a bifid Wednesday that isn't a loveless icicle.","Framed in a different way, a nimble insurance is a rise of the mind. A rice of the aftershave is assumed to be a contained sink. As far as we can estimate, the unkind fiction comes from a seasick latex. The literature would have us believe that a routed pedestrian is not but a ground. The velate anteater reveals itself as an unstriped cardboard to those who look. The musician of a train becomes an upward ease. It's an undeniable fact, really; a snugger toy is a romanian of the mind. Some fleshy raies are thought of simply as selections. An oval of the baby is assumed to be a shiny room.","The literature would have us believe that an upgrade workshop is not but a tabletop. A sissy liquor without bails is truly a school of awheel dungeons. Shaded landmines show us how violets can be augusts. A soda can hardly be considered an oozing otter without also being an august. One cannot separate bottoms from wrinkly periods. A math is the kilogram of a centimeter. To be more specific, a hyena is the name of a stretch. However, the bridgeless fan comes from an elapsed cucumber. Before faucets, waitresses were only parties."],T="http://metaphorpsum.com/paragraphs/1/7",L={selectedParagraph:" ",timerStarted:!1,timeLeft:60,words:0,characters:0,wpm:0,testInfo:[]},P=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(h.a)(this,a);for(var s=arguments.length,n=new Array(s),r=0;r<s;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state=L,e.fallbackPara=function(){var t=S[Math.floor(Math.random()*S.length)],a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(c.a)(Object(c.a)({},L),{},{testInfo:a,selectedParagraph:t}))},e.fetchNewParagraph=function(){fetch(T).then((function(e){return e.text()})).then((function(t){var a=t.split("").map((function(e){return{testLetter:e,status:"notAttempted"}}));e.setState(Object(c.a)(Object(c.a)({},L),{},{testInfo:a,selectedParagraph:t}))}))},e.startAgain=function(){e.fallbackPara()},e.handleUserInput=function(t){e.state.timerStarted||e.startTimer();var a=t.length,s=t.split(" ").length,n=a-1;if(n<0)e.setState({testInfo:[{testLetter:e.state.testInfo[0].testLetter,status:"notAttempted"}].concat(Object(o.a)(e.state.testInfo.slice(1))),characters:a,words:s});else if(n>=e.state.selectedParagraph.length)e.setState({characters:a,words:s});else{var r=e.state.testInfo;n!==e.state.selectedParagraph.length-1&&(r[n+1].status="notAttempted");var i=t[n]===r[n].testLetter;r[n].status=i?"correct":"incorrect",e.setState({testInfo:r,words:s,characters:a})}},e.startTimer=function(){e.setState({timerStarted:!0});var t=setInterval((function(){if(e.state.timeLeft>0){var a=60-e.state.timeLeft,s=a>0?e.state.words/a*60:0;e.setState({timeLeft:e.state.timeLeft-1,wpm:parseInt(s)})}else clearInterval(t)}),1e3)},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){this.fallbackPara()}},{key:"render",value:function(){return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(p,{}),Object(f.jsx)(w,{}),Object(f.jsx)(N,{selectedParagraph:this.state.selectedParagraph,words:this.state.words,characters:this.state.characters,wpm:this.state.wpm,timeLeft:this.state.timeLeft,timerStarted:this.state.timerStarted,testInfo:this.state.testInfo,onInputChange:this.handleUserInput,startAgain:this.startAgain}),Object(f.jsx)(A,{})]})}}]),a}(n.a.Component);i.a.render(Object(f.jsx)(P,{}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.c00d3e6d.chunk.js.map