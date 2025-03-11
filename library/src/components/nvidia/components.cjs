module.exports={
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
        --background-color: #02040c;
        --background-gradient: radial-gradient(
          #0d1d4b,
          #091023,
          #040713,
          #02040c
        );
        --card-background: #09010f;
        --color-primary: #77b900;
        --primary-text-color: #e8ecf0;
        --color-success: #77b900;
        --color-danger: #b9000f;
        --color-muted: #837a7b;
        --color-secondary: white;
        --color-blue: #0028b9;
        --color-orange: #b96600;
        --color-purple: #3600b9;
        --highlight-border: #1f263b;
        --color-tertiary: #080e20;
        --color-background-l2: #081230;
        --color-background-l3: #0d1d4b;
        --box-shadow: box-shadow(0 0 #02040c);
      }
      body:has(option[value="theme-light"]:checked) {
        --background-color: #e5e2e7;
        --background-gradient: radial-gradient(#f2f1f3, #e0dee0, #c4c2c4);
        --color-primary: #77b900;
        --color-secondary: white;
        --color-blue: #0028b9;
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
      }

      body {
        height: 100vh;
        width: 100vw;
        font-family: poppins, sans-serif;
        font-size: 0.88rem;
        background: var(--background-gradient);
        overflow-x: hidden;
        color: var(--primary-text-color);
      }
      *::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
        background-color: var(--background-color);
      }

      *::-webkit-scrollbar {
        width: 6px;
        height: 6px;
        background-color: var(--background-color);
      }

      *::-webkit-scrollbar-thumb {
        background-color: var(--color-primary);
      }
      .theme-selector {
        padding: 0.5rem;
        border-radius: 0.2rem;
        width: 3rem;
        background: var(--background-color);
        color: var(--color-secondary);
        box-shadow: --box-shadow;
      }
      nav {
        display: grid;
        grid-template-columns: 1fr 1fr 0.2fr;
        width: 100%;
        padding: 0.5rem;
        margin-bottom: 1rem;
      }
      nav img {
        height: 2rem;
      }
      .container {
        width: 100vw;
        padding: 1rem;
      }
      .level-one-info {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 1rem;
      }
      .level-one-info .l1-info-card {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        font-size: 1rem;
        box-shadow: -2px -2px 2px #77b900, 5px 5px 4px #000000;
      }
      .l1-info-card .icon {
        background: var(--color-primary);
        color: var(--color-secondary);
        padding: 1rem;
        clip-path: polygon(0 0, 0 100%, 300% 0);
        border-radius: 0.1rem;
        font-size: 2rem;
      }
      .l1-info-card .text .header {
        color: white;
        font-size: 1rem;
      }
      .l1-info-card .icon.danger {
        background: var(--color-danger);
      }
      .level-one-info .l1-info-card:has(.icon.danger) {
        box-shadow: -2px -2px 2px var(--color-danger), 5px 5px 4px #000000;
      }
      .l1-info-card .icon.blue {
        background: var(--color-blue);
      }
      .level-one-info .l1-info-card:has(.icon.blue) {
        box-shadow: -2px -2px 2px var(--color-blue), 5px 5px 4px #000000;
      }
      .l2-info {
        width: 100%;
        margin-top: 1rem;
      }

      .table {
        display: grid;
        grid-template-columns: 1fr;
      }

      .table .row {
        display: grid;
        grid-template-columns: minmax(1rem,0.1fr) minmax(2rem,0.2fr) 1fr 1fr minmax(3rem,0.3fr);
        padding: 0.5rem 0.2rem;
        border-radius: 0.3rem;
        /*border-left: 0.2rem solid var(--color-primary);*/
        background-color: var(--background-color);
        margin: 0.2rem 0;
        color: var(--primary-text-color)
      }
      .table .row.compare-values {
        display: grid;
        grid-template-columns: 1fr 4fr;
        align-items: center;
        justify-content: flex-start;
        background-color: transparent;
        border-left: none;
      }
      .row.compare-table-wrapper {
        display: grid;
        grid-template-columns: 1fr;
        align-items: center;
        justify-content: flex-start;
        background-color: transparent;
        border-left: none;
        position: relative;
        padding-top: 2rem;
      }
      .table .row.compare-values .col.scrollable-right {
        overflow-x: auto;
        display: flex;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0.5rem;
        padding: 0.5rems;
      }
      .compare-value {
        background: var(--background-color);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 1rem;
        border-radius: 0.3rem;
        box-shadow: 0 0 9px #0a1738, 1px -1px 6px #060e26;
        flex-shrink: 0;
        padding: 0 0.5rem;
      }
      .compare-value i:first-child {
        color: #0086b9 !important;
      }
      .compare-value.success i {
        color: var(--color-primary) !important;
      }
      .compare-value.danger i {
        color: var(--color-danger) !important;
      }
      .compare-value .status {
        font-size: 2rem;
        padding: 1rem;
        border-right: 0.02rem solid var(--color-background-l2);
      }
      .compare-value .content {
      }
      .compare-value .content .header,
      .compare-value .content .row-value {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.3rem;
        border-bottom: 0.05rem solid var(--color-background-l2);
        padding: 0.5rem 0.2rem;
      }
      .compare-value .content .body .row-value {
        border-bottom: none;
      }
      .compare-value .content .body .row-value:last-child {
        border-right: none;
      }
      .compare-value .content .body .row-info {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.3rem;
      }
      .table .row.danger {
        border-left-color: var(--color-danger);
      }
      .table .row.screenshot {
        border-left-color: var(--color-blue);
      }
      .table .row.api {
        border-left-color: var(--color-orange);
      }
      .table .row.db {
        border-left-color: var(--color-purple);
      }
      .col {
        padding: 0.2rem;
        color: var(--color-secondary);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        font-size: 1rem;
      }
      .col:nth-child(1),
      .col:nth-child(5) {
        justify-content: center;
      }
      .table .row .col:nth-child(1) i {
        color: var(--color-primary);
      }
      .table .row.danger .col:nth-child(1) i {
        color: var(--color-danger);
      }
      .table-header,
      .table-body {
        display: grid;
        grid-template-columns: 1fr;
      }
      .compare-table {
        background-color: var(--background-color);
        border-radius: 0.3rem;
        box-shadow: 0 0 9px #0a1738, 1px -1px 6px #060e26;
        flex-shrink: 0;
        /*padding: 0 0.5rem;*/
        color: var(--color-secondary);
      }
      .table-row {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.3rem;
        border-bottom: 0.05rem solid var(--color-background-l2);
        /*border-left: 0.2rem solid var(--color-primary);*/
      }
      .table-col {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-basis: 0;
        flex-grow: 1;
        padding: 0.5rem;
        border-left: 0.05rem solid var(--color-background-l2);
      }
      .table-col:nth-child(1),
      .table-col:nth-child(2) {
        max-width: 7rem;
        justify-content: center;
      }
      .table-header .table-row,
      .table-header .table-row .table-col:nth-child(1) {
        border-left-color: var(--background-color);
      }
      .table-header .table-row {
        color: #0086b9;
      }
      .table-row.danger {
        border-left: 0.2rem solid var(--color-danger);
      }
      .table-row.success i {
        color: var(--color-primary);
      }
      .table-row.danger i {
        color: var(--color-danger);
      }
      .compare-table-header {
        background: var(--color-blue);
        color: var(--color-secondary);
        padding: 0.5rem;
        clip-path: polygon(0 0%, 100% 0, 85% 100%, 0 100%);
        border-radius: 0.3rem;
        width: fit-content;
        margin: 1rem 0;
        position: absolute;
        top: 0;
        left: -0.3rem;
      }
      .compare-table-header h4 {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0 1rem;
      }
      .modal-wrapper {
        height: 100vh;
        width: 100vw;
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        padding: 1.5rem 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .modal {
        background: var(--background-color);
        height: 98vh;
        width: 98vw;
        border-radius: 0.3rem;
      }
      .modal .heading {
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size: 1rem;
        border-bottom: 0.1rem solid var(--highlight-border);
        color: white;
        cursor: pointer;
      }
      .modal .body {
        padding: 1rem;
        height: 98vh;
        max-height:90vh;
        width: 98vw;
        overflow-y:auto;
      }
      .modal .body img{
        height:100%;
        object-fit: scale-down;
      }
      .modal .heading .icon {
        clip-path: polygon(0 0, 80% 0%, 100% 100%, 0% 100%);
        color: white;
        padding: 0.5rem 1rem;
      }
      .modal .row.screenshot{
        height:88vh;
      }
      .modal .row.screenshot img{
        height:88vh;
      }
      .modal .row.screenshot img:hover{
        transform: scale(1.5); /* Scale the image on hover */
        transform-origin: top left;
      }
      .icon.screenshot.screenshot {
        background: var(--color-blue);
      }
      .icon.api {
        background: var(--color-orange);
      }
      .icon.db {
        background: var(--color-purple);
      }

      .modal .heading .close-modal {
        clip-path: polygon(20% 0, 100% 0, 100% 100%, 0% 100%);
        color: white;
        padding: 0.5rem 1rem;
        background: var(--color-danger);
      }
      .modal:has(.screenshot) .body::-webkit-scrollbar-thumb {
        background-color: var(--color-blue);
      }
      .modal:has(.api) .body::-webkit-scrollbar-thumb {
        background: var(--color-orange);
      }
      .modal:has(.db) .body::-webkit-scrollbar-thumb {
        background-color: var(--color-purple);
      }
      .modal .footer {
        width: 100%;
      }
      .modal .json-viewer {
        color: white;
        font-size: 1rem;
      }
      .modal .json-viewer .parent {
        margin-left: 3rem;
      }
      .parent .key-name {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
      }
      .parent .key-value {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.5rem;
        margin-left: 1.5rem;
      }
      .parent .data-type {
        font-size: 0.6rem;
      }
      .key-value .key {
        color: var(--color-primary);
      }
      .key-value .value {
        color: var(--color-blue);
      }
      .data-type {
        color: var(--color-orange);
      }
      .json-compare .body {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        justify-content: center;
        gap: 2rem;
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
          grid-gap: 0.3rem;
          width: 100%;
        }
        .test-step {
          display: grid;
          align-items: center;
          justify-content: center;
          grid-template-columns: minmax(1rem,0.1fr) minmax(2rem,0.2fr) 1fr 1fr minmax(3rem,0.3fr);
          gap: 1rem;
          width: 100%;
          /*background-color: var(--secondary-bg-color);*/
          background-color: var(--background-color);
          color: var(--primary-text-color);
          border: 0.2rem solid var(--secondary-bg-color);
          border-radius: 0.5rem;
          padding: 1rem 0.5rem;
        }
        .test-step .action-items{
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }
        .test-step .test-step-info {
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
        .test-step .detailed-info, .modal .detailed-info{
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
          justify-content: center;
          gap: 1rem;
          /* overflow-x: auto; Enable horizontal scrolling */
          width: 100%;
        }
        .detailed-info .payload {
          background: var(--primary-bg-color);
          flex: 1 0 49%; /* Set flex-basis to 50% */
          min-width: 0; /* Allow items to shrink */
          padding: 0.5rem;
          border-radius: 0.5rem;
          overflow:auto
        }
        .detailed-info .header {
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
        .d-none {
          display: none !important;
        }
      </style>
  </head>
  <body>
    <nav id="navbar"></nav>
    <main>
      <section class="level-one-info" id="stats-left">
      </section>
      <section>
        <div class="l2-info">
            <div class="table test-steps">
                
            </div>
        </div>
      </section>
    </main>
    <div class="modal-wrapper d-none">
      <div class="modal">
        <div class="heading">
          <div class="icon screenshot"><span class="material-symbols-outlined">visibility</span></div>
          <div class="title"></div>
          <div class="close-modal" onclick="document.querySelector('.modal-wrapper').classList.toggle('d-none')">
            <span class="material-symbols-outlined">close</span>
          </div>
        </div>
        <div class="body detailed-info" id="modal-body">
          
        </div>
        <div class="footer"></div>
      </div>
    </div>
    <script src="https://cdn.jsdelivr.net/gh/google/code-prettify@master/loader/run_prettify.js?autorun=true"></script>
    <script>
      window.addEventListener("load", function () {
        console.log("Page loaded successfully");
      });
    </script>
  </body>
</html>
`,
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
              <span class="material-symbols-outlined" onclick="document.getElementById('modal-body').innerHTML = this.parentElement.parentElement.querySelector('.detailed-info').innerHTML;document.querySelector('.modal-wrapper').classList.toggle('d-none')">expand_content</span>
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
                <pre class="payload downloadable prettyprint ${responseBody?.includes("<")?"lang-xml":"lang-js"}">${responseBody}</pre>
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
              <span class="material-symbols-outlined" onclick="document.getElementById('modal-body').innerHTML = this.parentElement.parentElement.querySelector('.detailed-info').innerHTML;document.querySelector('.modal-wrapper').classList.toggle('d-none')">expand_content</span>
            </div>
            <div class="detailed-info d-none">
              <div class="row">
                <span class="payload bg-primary">${info}</span>
              </div>
              <div class="row">
                <span class="header">Response</span>
              </div>
              <div class="row">
                <pre class="payload downloadable prettyprint ${payload?.includes("<")?"lang-xml":"lang-js"}">${payload}</pre>
              </div>
            </div>
          </div>`
},
testStepImage:function(stepNumber, screenshotName, screenshotPath){
  
  return `<div class="test-step">
            <span class="material-symbols-outlined text-blue">image</span>
            <span>#${stepNumber}</span>
            <span>Screenshot</span>
            <span>${screenshotName}</span>
            <div class="action-items">
              <span class="material-symbols-outlined">content_copy</span>
              <span class="material-symbols-outlined">downloading</span>
              <span class="material-symbols-outlined" onclick="document.getElementById('modal-body').innerHTML = this.parentElement.parentElement.querySelector('.detailed-info').innerHTML;document.querySelector('.modal-wrapper').classList.toggle('d-none')">expand_content</span>
            </div>
            <div class="detailed-info d-none">
              <div class="row screenshot">
                <img src="${screenshotPath}">
              </div>
            </div>
          </div>`
},
statBox: function(statName,statValue, statMaterialIcon, additionalIconClass){
  return `<div class="l1-info-card">
              <div class="">
                <span class="material-symbols-outlined icon ${additionalIconClass}">${statMaterialIcon}</span>
              </div>
              <div class="text">
                <div class="header">${statName}</div>
                <div class="content">${statValue}</div>
              </div>
            </div>`
},
testStepTable:function(tableUUID, tableName, tableHeaders = []){
  return `<div class="row compare-table-wrapper">
    <div class="compare-table-header">
        <h4><span class="material-symbols-outlined">compare_arrows</span> ${tableName} Comparison</h4>
    </div>
    <div class="compare-table">
        <div class="table-header">
            <div class="table-row">
                <div class="table-col"></div>
                <div class="table-col"></div>
                <div class="table-col">Field Name</div>
                <div class="table-col">Expected Value</div>
                <div class="table-col">Actual Value</div>
            </div>
        </div>
        <div class="table-body" id="row${tableUUID}" next-row-number="1">
            
        </div>
    </div>
</div>`
},
testStepTableRow:function(testStatus,rowNumber, tableRowData=[]){
  return `<div class="table-row">
              <div class="table-col">${testStatus && (testStatus.toLowerCase().includes("pass") || testStatus == true)?'<span class="material-symbols-outlined text-success">check_circle</span>':'<span class="material-symbols-outlined text-danger">cancel</span>'}</div>
              <div class="table-col">${rowNumber}</div>
              ${tableRowData.map(tableColData=>{
                return `<div class="table-col">${tableColData}</div>`
              }).join('')}
          </div>`
}
}