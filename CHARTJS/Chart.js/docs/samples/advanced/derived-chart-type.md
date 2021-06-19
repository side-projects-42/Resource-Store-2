Derived Chart Type
==================

\`\`\`js chart-editor // const DATA\_COUNT = 7; const NUMBER\_CFG = { count: DATA\_COUNT, min: -100, max: 100, rmin: 1, rmax: 20, }; const data = { datasets: \[ { label: “My First dataset”, backgroundColor: Utils.transparentize(Utils.CHART\_COLORS.blue, 0.5), borderColor: Utils.CHART\_COLORS.blue, borderWidth: 1, boxStrokeStyle: “red”, data: Utils.bubbles(NUMBER\_CFG), }, \], }; //

// const config = { type: “derivedBubble”, data: data, options: { responsive: true, plugins: { title: { display: true, text: “Derived Chart Type”, }, }, }, };

//

module.exports = { actions: \[\], config: config, }; \`\`\`

DerivedBubble Implementation
----------------------------

&lt;&lt;&lt; @/docs/scripts/derived-bubble.js
