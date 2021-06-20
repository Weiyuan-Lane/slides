(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"05nj":function(e,n,a){"use strict";a.r(n),a.d(n,"default",(function(){return z}));var t=a("0iUn"),s=a("sLSF"),l=a("MI3g"),i=a("a7VT"),o=a("Tit0"),r=a("q1tI"),c=a.n(r),u=a("8Kt/"),d=a.n(u),m=a("uWjd"),g=a("yLiY"),p=a.n(g),h=a("IcOa"),b=a("nd7M"),f=a.n(b),N=a("kjVW"),v=a.n(N),w=a("2mRh"),y=a.n(w),C=a("e5P2"),A=a.n(C),k=a("YFuJ"),S=a.n(k),x=a("fn31"),_=a.n(x),E=a("5S2a"),j=a.n(E),I=a("HbG/"),R=a.n(I),T=a("SetY"),P=a.n(T),M=a("Xm02"),q=a.n(M),O=a("6SO2"),B=a.n(O),D=a("V9Mr"),W=a.n(D),F=a("O5KN"),Y=a.n(F),J=a("eJNd"),L=a.n(J),V=a("qc+4"),X=a.n(V),G=a("E1BS"),H=a.n(G),U=c.a.createElement,$=p()().publicRuntimeConfig.basePath||"",K=["".concat($,"/static/reveal-3.8.0/theme/sky.css"),"".concat($,"/static/reveal-3.8.0/reveal.css"),"".concat($,"/static/reveal-3.8.0/lib/monokai.css")],Q=[{src:"".concat($,"/static/reveal-3.8.0/plugin/markdown/marked.js")},{src:"".concat($,"/static/reveal-3.8.0/plugin/markdown/markdown.js")},{src:"".concat($,"/static/reveal-3.8.0/plugin/notes/notes.js"),async:!0},{src:"".concat($,"/static/reveal-3.8.0/plugin/highlight/highlight.js"),async:!0}],z=function(e){function n(e){var a;return Object(t.a)(this,n),(a=Object(l.a)(this,Object(i.a)(n).call(this,e))).title="Doing more with (server)less",a.description="The Speedrun of Serverless, with Google Cloud Platform",a}return Object(o.a)(n,e),Object(s.a)(n,[{key:"componentDidMount",value:function(){window.Reveal=Object(m.revealInit)(),window.Reveal.initialize({dependencies:Q,slideNumber:"c/t"})}},{key:"render",value:function(){return U(c.a.Fragment,null,U(d.a,null,U("title",null,this.title),U("meta",{name:"twitter:card",content:"summary"}),U("meta",{property:"og:title",content:this.title}),U("meta",{property:"og:description",content:this.description}),U("meta",{property:"og:image",content:f.a}),K.map((function(e,n){return U("link",{key:n,rel:"stylesheet",href:e})}))),U("div",{className:"reveal background-white-translucent"},U("div",{className:"slides"},U("section",null,U("h2",null,"Doing More With (Server)less"),U("p",null,'"P2, Recapping the Speedrun of Serverless, ',U("br",null),' With Google Cloud Console (UI)"'),U("img",{src:f.a,className:"banner image-s"}),U("p",null,U("small",null,"By ",U("a",{href:h.a.WEIYUAN.SITE},"Weiyuan Liu | Rakuten Viki")))),U("section",null,U("h3",null,"This is P2 of the speedrun"),U("img",{"data-src":v.a,style:{maxHeight:"20%",maxWidth:"20%",width:"20%"}}),U("p",null,"For the slides in P1, go ",U("a",{target:"_blank",href:"https://drive.google.com/open?id=1n6S6rYLYbQwEntyqNW8gk3yCvOOhQEPINhT3oOEbMnw"},"here")," ")),U("section",null,U("h3",null,"Overview"),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},"Created new Google Cloud Platform project"),U("li",{className:"fragment"},"Deployed CICD pipeline with Cloud Build"),U("li",{className:"fragment"},"Assigned roles to service account for Cloud Build to perform deployment for App Engine and Cloud Run "),U("li",{className:"fragment"},"Deployed Web application(s) to App Engine & Cloud Run"))),U("section",null,U("h3",null,"Let's examine the speedrun,",U("br",null)," in ",U("b",null,"10")," distinct steps")),U("section",null,U("h5",null,"#1 - Create the Project"),U("img",{"data-src":y.a,className:"image-m"})),U("section",null,U("h5",null,"#2a - Enable App Engine "),U("img",{"data-src":A.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6 "},U("li",{className:"fragment"},'Assess the above from the Navgation Menu - "App Engine > Dashboard"'),U("li",{className:"fragment"},"Click the ",U("b",null,"Create Application")," button"))),U("section",null,U("h5",null,"#2b - Select App Engine Region"),U("img",{"data-src":S.a,className:"image-m"})),U("section",null,U("h5",null,"#2c - Set App Engine Core Configuration"),U("img",{"data-src":_.a,className:"image-m"}),U("p",{className:"pseudo-h6s"},"See more on choosing the appropriate",U("br",null)," App Engine environment ",U("a",{href:"https://cloud.google.com/appengine/docs/the-appengine-environments",target:"_blank"},"here"))),U("section",null,U("h5",null,"#3 - Enable App Engine Admin API"),U("img",{"data-src":j.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},'Assess the above from the Navgation Menu - "APIs & Services > Dashboard"'),U("li",{className:"fragment"},'Search for "App Engine Admin API" and click the ',U("b",null,"Enable")," button"),U("li",{className:"fragment"},"See ",U("a",{href:"https://cloud.google.com/appengine/docs/admin-api/overview",target:"_blank"},"here")," on why this API is required"))),U("section",null,U("h5",null,"#4 - Enable Cloud Run"),U("img",{"data-src":R.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},'Assess the above from the Navgation Menu - "Cloud Run"'),U("li",{className:"fragment"},"Click the ",U("b",null,"Start Using Cloud Run")," button"))),U("section",null,U("h5",null,"#5 - Enable Cloud Build (for CI/CD)"),U("img",{"data-src":P.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},'Assess the above from the Navgation Menu - "Cloud Build"'),U("li",{className:"fragment"},"Click the ",U("b",null,"Enable Cloud Build API")," button"))),U("section",null,U("h5",null,"#6a - Add Cloud Build configuration"),U("img",{"data-src":q.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},'Assess the above from the Navgation Menu - "Cloud Build > Triggers"'),U("li",{className:"fragment"},"Click ",U("b",null,"Connect Repository")))),U("section",null,U("h5",null,"#6b - Connect Repository"),U("img",{"data-src":B.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},"Select the correct code repository product that you are using"),U("li",{className:"fragment"},"Click ",U("b",null,"Continue")," once you're ready"))),U("section",null,U("h5",null,"#6c - Proceed to add build trigger"),U("img",{"data-src":W.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},"Click ",U("b",null,"Add Trigger")))),U("section",null,U("h5",null,"#6d - Connect Repository"),U("img",{"data-src":Y.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},'Select the "Build configuration" setting as seen above'),U("li",{className:"fragment"},"Add branch regex (optional) if you only want to target a certain group of branches"),U("li",{className:"fragment"},"Click ",U("b",null,"Create Trigger")))),U("section",null,U("h5",null,"#7 - Add IAM roles to Cloud Build Service Account"),U("img",{"data-src":L.a,className:"image-m"}),U("ul",{className:"aquablue-list pseudo-h6"},U("li",{className:"fragment"},'Assess the above from the Navgation Menu - "IAM & admin > IAM"'),U("li",{className:"fragment"},"Add the above IAM roles to ",U("b",null,"${id}@cloudbuild.gserviceaccount.com"),". This is a service account that is the underlying identity when running Cloud Build."),U("li",{className:"fragment"},'View the privileges offered under the above roles from Navigation Menu - "IAM & admin > Roles"'))),U("section",null,U("h5",null,"#8 - Add App Engine Configuration to codebase"),U("pre",null,U("code",{className:"hljs yaml"},"runtime: nodejs10\ninstance_class: B1\nmanual_scaling:\n  instances: 1\n\nhandlers:\n- url: /static\n  static_dir: static\n- url: /public\n  static_dir: public\n- url: /client-assets\n  static_dir: client-assets                ")),U("p",{className:"pseudo-h6 fragment"},"Add the above in the root dir of project as ",U("b",null,"app.yaml")),U("p",{className:"pseudo-h6 fragment"},"App Engine configuration differs between environment (Standard VS Flexible). Do check out the standard configuration ",U("a",{href:"https://cloud.google.com/appengine/docs/standard/nodejs/config/appref",target:"_blank"},"here")," and flexible configuration ",U("a",{href:"https://cloud.google.com/appengine/docs/flexible/nodejs/reference/app-yaml",target:"_blank"},"here")," ."),U("p",{className:"pseudo-h6 fragment"},"See code base that I used ",U("a",{href:"https://github.com/Weiyuan-Lane/slides/tree/backup/serverless-demo",target:"_blank"},"here")," .")),U("section",null,U("h5",null,"#9 - Add Cloud Build Configuration to codebase"),U("pre",null,U("code",{className:"hljs yaml"},"timeout: '600s'\nsteps:\n- id: init\n  waitFor: ['-']\n  name: 'gcr.io/cloud-builders/npm'\n  args: ['install']\n\n- id: frontendTest\n  waitFor: ['init']\n  name: 'gcr.io/cloud-builders/npm'\n  args: ['run', 'f-test']\n\n- id: backendTest\n  waitFor: ['init']\n  name: 'gcr.io/cloud-builders/npm'\n  args: ['run', 'b-test']\n\n- id: buildAssets\n  waitFor: ['frontendTest', 'backendTest']\n  name: 'gcr.io/cloud-builders/npm'\n  args: ['run', 'build']\n\n- id: appEngineDeploy\n  waitFor: ['buildAssets']\n  name: 'gcr.io/cloud-builders/gcloud'\n  args: ['app', 'deploy', '-q', '--project', '$PROJECT_ID']\n\n- id: cloudRunDeploy\n  waitFor: ['frontendTest', 'backendTest']\n  name: 'gcr.io/cloud-builders/gcloud'\n  entrypoint: 'sh'\n  args:\n    - -c\n    - |\n      gcloud builds submit --tag gcr.io/$PROJECT_ID/webapp:1 -q\n      gcloud beta run deploy --image gcr.io/$PROJECT_ID/webapp:1 -q --allow-unauthenticated --platform=\"managed\" --region=\"us-central1\" webapp\n                ")),U("p",{className:"pseudo-h6 fragment"},"Add the above in the root dir of project as ",U("b",null,"cloudbuild.yaml")),U("p",{className:"pseudo-h6 fragment"},"The above runs the application's unit tests, before building the assets and deploying the applications to Cloud Run and App Engine. See ",U("a",{href:"https://cloud.google.com/cloud-build/docs/build-config",target:"_blank"},"here")," for more details on Cloud Build's configuration.")),U("section",null,U("h5",null,"#10 - Commit the configurations"),U("img",{"data-src":X.a,className:"image-m"}),U("p",{className:"pseudo-h6 fragment"},"Committing the code above will trigger Cloud Build to starting building based on the trigger from ",U("b",null,"#6"))),U("section",null,U("h4",null,"Viola! Wait for a few minutes before your web applications are deployed"),U("br",null),U("p",{className:"pseudo-h6"},"Note that you might want to omit the usage of ",U("b",null,"Cloud Run")," if you're using ",U("b",null,"App Engine"),", or vice versa, as you only need to serve a web application from one of them. Amend from the Cloud Build steps to select the tool to use for your web application.",U("br",null),U("br",null),'Deploying using both tools during the speedrun was part of the challenge to show how easy it was to get started with "serverless" XD')),U("section",null,U("h2",null,"Thanks for listening!"),U("hr",null),U("p",null,"Linkedin / Github : ",U("a",{href:"https://bit.ly/weiyuan",target:"_blank"},"bit.ly/weiyuan")),U("img",{"data-src":H.a,style:{maxHeight:"20%",maxWidth:"20%",width:"20%"}})))))}}]),n}(c.a.Component)},"2mRh":function(e,n){e.exports="/slides/_next/static/images/reviewStep1.2fe5f89339293cf.png"},"5S2a":function(e,n){e.exports="/slides/_next/static/images/reviewStep3.9104ebf444c8246.png"},"6SO2":function(e,n){e.exports="/slides/_next/static/images/reviewStep6b.57870297235325c.png"},"HbG/":function(e,n){e.exports="/slides/_next/static/images/reviewStep4.29621b28303b57d.png"},LYX6:function(e,n,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events/la-kopi-serverless-2019-10-23",function(){return a("05nj")}])},O5KN:function(e,n){e.exports="/slides/_next/static/images/reviewStep6d.087b4f477373ba5.png"},SetY:function(e,n){e.exports="/slides/_next/static/images/reviewStep5.78a3aa8060cb2f0.png"},V9Mr:function(e,n){e.exports="/slides/_next/static/images/reviewStep6c.3692eb39c2f0d36.png"},Xm02:function(e,n){e.exports="/slides/_next/static/images/reviewStep6a.11eee918119f476.png"},YFuJ:function(e,n){e.exports="/slides/_next/static/images/reviewStep2b.612e2e589dd85d3.png"},e5P2:function(e,n){e.exports="/slides/_next/static/images/reviewStep2a.61f2e11a3652a58.png"},eJNd:function(e,n){e.exports="/slides/_next/static/images/reviewStep7.91f70811ef987c2.png"},fn31:function(e,n){e.exports="/slides/_next/static/images/reviewStep2c.fc80afd93ceb437.png"},kjVW:function(e,n){e.exports="/slides/_next/static/images/shockedCat.c67fb0918551148.jpg"},nd7M:function(e,n){e.exports="/slides/_next/static/images/introPic.0b53883ee5a9ec0.png"},"qc+4":function(e,n){e.exports="/slides/_next/static/images/reviewStep10.70046fc7a05b500.png"}},[["LYX6",0,1]]]);