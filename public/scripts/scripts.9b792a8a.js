"use strict";angular.module("generatorFacturaApp",[]),angular.module("generatorFacturaApp").controller("MainCtrl",function(){this.getWidth=function(a){return{width:0!=a?""+(45-15*(this.bill.columns.length-2))+"%":"55%"}},this.getLineWidth=function(a){return{width:0!=a?""+(45-15*(this.bill.columns.length-2))+"%":"45%"}},this.bill={serie:"SSW",numar:"001",data:"02-09-2015",currency:"RON",columns:["SERVICIU OFERIT","VALOARE"],total:4e3,seller:{name:"Sandd Soft Works S.R.L.",cif:"33535396",orc:"J25/235/01.09.2014",sediu:"Str Smardan 26, Bl S4E, Sc 1, Ap 4",oras:"Drobeta Turnu Severin",judet:"Mehedinti",tara:"Romania",banca:"ING Bank",cont:"RO000PULA"},buyer:{name:"Sandd Soft Works S.R.L.",cif:"33535396",orc:"J25/235/01.09.2014",sediu:"Str Smardan 26, Bl S4E, Sc 1, Ap 4",oras:"Drobeta Turnu Severin",judet:"Mehedinti",tara:"Romania",banca:"ING Bank",cont:"RO000PULA"},products:[{lines:[4e3],title:"Dezvoltare software la comanda",desc:"Conform contractului 01.01.2016"},{lines:[4e3],title:"Dezvoltare software la comanda",desc:"Conform contractului 01.01.2016"}]},this.int8n={data:"Data",f_title:"Factura Fiscala",serie:"Serie",numar:"Numar",furnizor:"Furnizor",cumparator:"Cumparator",name:"Denumirea firmei",cif:"Codul unic de identificare",orc:"Numar ordin ORC",sediu:"Sediul",oras:"Oras",judet:"Judet",tara:"Tara",banca:"Banca",cont:"Cont",total:"TOTAL"}}),angular.module("generatorFacturaApp").run(["$templateCache",function(a){a.put("views/main.html",'<div class="jumbotron"> <h1>\'Allo, \'Allo!</h1> <p class="lead"> <img src="images/yeoman.png" alt="I\'m Yeoman"><br> Always a pleasure scaffolding your apps. </p> <p><a class="btn btn-lg btn-success" ng-href="#/">Splendid!<span class="glyphicon glyphicon-ok"></span></a></p> </div> <div class="row marketing"> <h4>HTML5 Boilerplate</h4> <p> HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites. </p> <h4>Angular</h4> <p> AngularJS is a toolset for building the framework most suited to your application development. </p> <h4>Karma</h4> <p>Spectacular Test Runner for JavaScript.</p> </div>')}]);