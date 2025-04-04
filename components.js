export default {
    HTML: `<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined"
        rel="stylesheet"
      />
      <style>
        /* Pretty printing styles. Used with prettify.js. */
        /* Vim sunburst theme by David Leibovic */
  
        pre .str,
        code .str {
          color: #65b042;
        } /* string  - green */
        pre .kwd,
        code .kwd {
          color: #e28964;
        } /* keyword - dark pink */
        pre .com,
        code .com {
          color: #aeaeae;
          font-style: italic;
        } /* comment - gray */
        pre .typ,
        code .typ {
          color: #89bdff;
        } /* type - light blue */
        pre .lit,
        code .lit {
          color: #3387cc;
        } /* literal - blue */
        pre .pun,
        code .pun {
          color: #fff;
        } /* punctuation - white */
        pre .pln,
        code .pln {
          color: #fff;
        } /* plaintext - white */
        pre .tag,
        code .tag {
          color: #89bdff;
        } /* html/xml tag    - light blue */
        pre .atn,
        code .atn {
          color: #bdb76b;
        } /* html/xml attribute name  - khaki */
        pre .atv,
        code .atv {
          color: #65b042;
        } /* html/xml attribute value - green */
        pre .dec,
        code .dec {
          color: #3387cc;
        } /* decimal - blue */
  
        pre.prettyprint,
        code.prettyprint {
          background-color: #000;
          border-radius: 8px;
        }
  
        pre.prettyprint {
          width: 95%;
          margin: 1em auto;
          padding: 1em;
          white-space: pre-wrap;
        }
  
        /* Specify class=linenums on a pre to get line numbering */
        ol.linenums {
          margin-top: 0;
          margin-bottom: 0;
          color: #aeaeae;
        } /* IE indents via margin-left */
        li.L0,
        li.L1,
        li.L2,
        li.L3,
        li.L5,
        li.L6,
        li.L7,
        li.L8 {
          list-style-type: none;
        }
        /* Alternate shading for lines */
        li.L1,
        li.L3,
        li.L5,
        li.L7,
        li.L9 {
        }
  
        @media print {
          pre .str,
          code .str {
            color: #060;
          }
          pre .kwd,
          code .kwd {
            color: #006;
            font-weight: bold;
          }
          pre .com,
          code .com {
            color: #600;
            font-style: italic;
          }
          pre .typ,
          code .typ {
            color: #404;
            font-weight: bold;
          }
          pre .lit,
          code .lit {
            color: #044;
          }
          pre .pun,
          code .pun {
            color: #440;
          }
          pre .pln,
          code .pln {
            color: #000;
          }
          pre .tag,
          code .tag {
            color: #006;
            font-weight: bold;
          }
          pre .atn,
          code .atn {
            color: #404;
          }
          pre .atv,
          code .atv {
            color: #060;
          }
        }
      </style>
      <style>
        @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");
        :root {
          --primary-bg-color: #1e1f24;
          --primary-text-color: #e8ecf0;
          --secondary-bg-color: #242529;
          --color-two: #46649f;
          --color-success: green;
          --color-danger: rgb(199, 14, 14);
        }
  
        * {
          margin: 0;
          padding: 0;
          outline: 0;
          appearance: none;
          border: none;
          text-decoration: none;
          list-style: none;
          box-sizing: border-box;
          transition: 300ms all ease;
          scrollbar-width: thin;
          scrollbar-color: var(--color-two) var(--primary-bg-color);
        }
        body {
          height: 100vh;
          width: 100vw;
          font-family: poppins, sans-serif;
          background: var(--primary-bg-color);
          color: var(--primary-text-color);
        }
        .material-symbols-outlined{
          cursor: pointer;
        }
        nav {
          height: 2rem;
          background: var(--secondary-bg-color);
        }
  
        main {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 2rem;
          width: 100%;
          padding: 1.5rem;
        }
        main section {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 100%;
          gap: 1rem;
        }
        .section-header {
          display: grid;
          align-items: center;
          justify-content: flex-start;
          grid-template-columns: 3fr 1fr 1fr;
          width: 100%;
        }
        .section-header h3 {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 0.2rem;
        }
        .stat-row {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 4fr 2fr;
          width: 100%;
          background-color: var(--secondary-bg-color);
          color: var(--primary-text-color);
          border: 0.2rem solid var(--secondary-bg-color);
          border-radius: 0.5rem;
        }
        .stat-left-60 {
          display: grid;
          align-items: center;
          justify-content: space-evenly;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 1rem;
          padding: 0 1rem;
        }
        .stat-box {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          flex-direction: column;
          gap: 0.5rem;
          border-bottom: 0.2rem solid var(--color-two);
        }
        .stat-box .icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          background: var(--primary-bg-color);
          height: 2rem;
          width: 2rem;
        }
        .test-steps {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 0.3rem;
          width: 100%;
        }
        .test-step {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 0.3fr 0.5fr 1fr 1fr 0.1fr;
          gap: 1rem;
          width: 100%;
          background-color: var(--secondary-bg-color);
          color: var(--primary-text-color);
          border: 0.2rem solid var(--secondary-bg-color);
          border-radius: 0.5rem;
          padding: 1rem 0.5rem;
        }
        .test-step .action-items {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }
        .test-step .action-items,
        .test-step-info {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 1rem;
        }
        .badge-rect {
          padding: 0.2rem;
          color: var(--primary-text-color);
          font-weight: bold;
          font-size: 0.8rem;
          border-radius: 0.2rem;
        }
        .test-step .detailed-info {
          grid-column: 1 / -1; /* Span across all columns */
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-direction: column;
          gap: 1rem;
          border-radius: 0.5rem;
        }
        .detailed-info .row {
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          gap: 1rem;
          overflow-x: auto; /* Enable horizontal scrolling */
          width: 100%;
        }
        .test-step .detailed-info .payload {
          background: var(--primary-bg-color);
          flex: 1 0 49%; /* Set flex-basis to 50% */
          min-width: 0; /* Allow items to shrink */
          padding: 0.5rem;
          border-radius: 0.5rem;
        }
        .test-step .detailed-info .header {
          flex: 1 0 49%; /* Set flex-basis to 50% */
          min-width: 0; /* Allow items to shrink */
        }
        .text-success {
          color: var(--color-success);
        }
        .text-danger {
          color: var(--color-danger);
        }
        .bg-success {
          background: var(--color-success);
        }
        .bg-danger {
          background: var(--color-danger);
        }
        .bg-primary {
          background: var(--primary-bg-color);
        }
        .table {
          width: 100%;
        }
        .table .row {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: 0.3fr 0.1fr repeat(3, 1fr);
          border: 0.1rem dashed var(--primary-bg-color);
          padding: 0.5rem 0.2rem;
        }
        .d-none {
          display: none !important;
        }
      </style>
    </head>
    <body>
      <nav id="navbar"></nav>
      <main>
        <section>
          <div class="section-header">
            <h3>
              <span class="material-symbols-outlined">conversion_path</span>
              Detailed Report
            </h3>
            <div class="search-box"></div>
            <div class="date-box"></div>
          </div>
          <div class="stat-row">
            <div class="stat-left-60" id="stats-left">
              
            </div>
            <div class="stat-right-40"></div>
          </div>
        </section>
        <section>
          <div class="section-header">
            <h3>
              <span class="material-symbols-outlined">stairs_2</span> Test Steps
            </h3>
          </div>
          <div class="test-steps"></div>
        </section>
      </main>
      <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true"></script>
      <script>
        window.addEventListener("load", function () {
          console.log("Page loaded successfully");
        });
      </script>
    </body>
  </html>`,
testStep: function(status,stepNumber,command,fieldName,additionalInfo){
  return `<div class="test-step">
            ${status && (status.toLowerCase().includes("pass") || status == true)?'<span class="material-symbols-outlined text-success">check_circle</span>':'<span class="material-symbols-outlined text-danger">cancel</span>'}
            <span>#${stepNumber}</span>
            <span>${command}</span>
            <span>${fieldName}</span>
            <div class="action-items">
              <span class="placeholder"></span>
              <span class="material-symbols-outlined" onClick="navigator.clipboard.writeText(this.getAttribute('copy-info'))" copy-info='${additionalInfo}'>content_copy</span>
            </div>
          </div>`
},
testStepApi: function(status,stepNumber,serviceName,metaDataMetrics = [],additionalInfo, endpoint, requestHeaders, requestBody,responseHeaders, responseBody){
  return `<div class="test-step">
            ${status && (status.toLowerCase().includes("pass") || status == true)?'<span class="material-symbols-outlined text-success">cloud_done</span>':'<span class="material-symbols-outlined text-danger">cloud_alert</span>'}
            <span>#${stepNumber}</span>
            <span>${serviceName}</span>
            <span class="test-step-info">
              ${metaDataMetrics.map(metaDataObject=>{
                let status = metaDataObject.status
                return `<div class="badge-rect ${status && (status.toLowerCase().includes("pass") || status == true)?"bg-success":"bg-danger"}">${metaDataObject.value}</div>`
              }).join('')}
            </span>
            <div class="action-items">
              <span class="material-symbols-outlined">content_copy</span>
              <span class="material-symbols-outlined">downloading</span>
              <span class="material-symbols-outlined" onclick="this.parentElement.parentElement.querySelector('.detailed-info').classList.toggle('d-none')">expand_content</span>
            </div>
            <div class="detailed-info d-none">
              <div class="row">
                <span class="payload bg-primary">${endpoint}</span>
              </div>
              <div class="row">
                <span class="header">Request Headers</span>
                <span class="header">Response Headers</span>
              </div>
              <div class="row">
                <pre class="payload prettyprint lang-js">${requestHeaders}</pre>
                <pre class="payload prettyprint lang-js">${responseHeaders}</pre>
              </div>
              <div class="row">
                <span class="header">Request Body</span>
                <span class="header">Response Body</span>
              </div>
              <div class="row">
                <pre class="payload prettyprint ${requestBody?.includes("<")?"lang-xml":"lang-js"}">${requestBody}</pre>
                <pre class="payload prettyprint ${requestBody?.includes("<")?"lang-xml":"lang-js"}">${responseBody}</pre>
              </div>
            </div>
          </div>`
},
testStepPayload: function(status,stepNumber,serviceName,metaDataMetrics = [],additionalInfo, info, payload){
return `<div class="test-step">
          ${status && (status.toLowerCase().includes("pass") || status == true)?'<span class="material-symbols-outlined text-success">check_circle</span>':'<span class="material-symbols-outlined text-danger">cancel</span>'}
            <span>#${stepNumber}</span>
            <span>${serviceName}</span>
            <span class="test-step-info">
              ${metaDataMetrics.map(metaDataObject=>{
                let status = metaDataObject.status
                return `<div class="badge-rect ${status && (status.toLowerCase().includes("pass") || status == true)?"bg-success":"bg-danger"}">${metaDataObject.value}</div>`
              }).join('')}
            </span>
            <div class="action-items">
              <span class="material-symbols-outlined">content_copy</span>
              <span class="material-symbols-outlined">downloading</span>
              <span class="material-symbols-outlined" onclick="this.parentElement.parentElement.querySelector('.detailed-info').classList.toggle('d-none')">expand_content</span>
            </div>
            <div class="detailed-info d-none">
              <div class="row">
                <span class="payload bg-primary">${info}</span>
              </div>
              <div class="row">
                <span class="header">Response</span>
              </div>
              <div class="row">
                <pre class="payload prettyprint ${payload?.includes("<")?"lang-xml":"lang-js"}">${payload}</pre>
              </div>
            </div>
          </div>`
},
testStepImage:function(stepNumber, screenshotName, screenshotPath){
  
  return `<div class="test-step">
            <span class="material-symbols-outlined text-blue">image</span>
            <span>#${stepNumber}</span>
            <span>Scteenshot</span>
            <span>${screenshotName}</span>
            <div class="action-items">
              <span class="material-symbols-outlined">content_copy</span>
              <span class="material-symbols-outlined">downloading</span>
              <span class="material-symbols-outlined" onclick="this.parentElement.parentElement.querySelector('.detailed-info').classList.toggle('d-none')">expand_content</span>
            </div>
            <div class="detailed-info d-none">
              <div class="row">
                <img src="${screenshotPath}">
              </div>
            </div>
          </div>`
},
statBox: function(statName,statValue, statMaterialIcon){
  return `<div class="stat-box">
              <div class="icon-wrapper">
                <span class="material-symbols-outlined">${statMaterialIcon}</span>
              </div>
              <div class="heading-wrapper">${statName}</div>
              <h1>${statValue}</h1>
            </div>`
}
}