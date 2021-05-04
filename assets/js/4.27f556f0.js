(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{365:function(t,a,e){t.exports=e.p+"assets/img/p1.0908606c.jpg"},366:function(t,a,e){t.exports=e.p+"assets/img/p2.c7ca5a40.jpg"},367:function(t,a,e){t.exports=e.p+"assets/img/p3.b2d27f79.jpg"},392:function(t,a,e){"use strict";e.r(a);var s=e(25),r=Object(s.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"reamparser-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reamparser-js"}},[t._v("#")]),t._v(" reamparser.js")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://github.com/chmlee/reamparser.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("reamparser.js"),s("OutboundLink")],1),t._v(" is a parser and emitter for REAM written in JavaScript.")]),t._v(" "),s("p",[t._v("NOTE: "),s("a",{attrs:{href:"https://github.com/chmlee/ream-editor",target:"_blank",rel:"noopener noreferrer"}},[t._v("REAM-editor"),s("OutboundLink")],1),t._v(" ships with reamparser.js and does not required a local copy of the parser.")]),t._v(" "),s("h2",{attrs:{id:"reqruiements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reqruiements"}},[t._v("#")]),t._v(" Reqruiements")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("node.js")])]),t._v(" "),s("li",[s("code",[t._v("commander.js")]),t._v(" if using the CLI tool "),s("code",[t._v("parsemd")])])]),t._v(" "),s("h2",{attrs:{id:"installation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/chmlee/reamparser.js\n")])])]),s("h2",{attrs:{id:"usage"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#usage"}},[t._v("#")]),t._v(" Usage")]),t._v(" "),s("h3",{attrs:{id:"import-as-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#import-as-module"}},[t._v("#")]),t._v(" Import as module")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const fs = require('fs');")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fileText = fs.readFileSync('path/to/REAM/file', 'utf8')")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" MdFile "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path/to/ream.min.js'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mdFile "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MdFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fileText"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" mdCSV "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" mdFile"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toCSV")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cli"}},[t._v("#")]),t._v(" CLI")]),t._v(" "),s("p",[t._v("The CLI tool "),s("code",[t._v("parsemd")]),t._v(" requires "),s("code",[t._v("commander")]),t._v(".\nInstall "),s("code",[t._v("commander")]),t._v(" with npm:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" commander\n")])])]),s("p",[s("code",[t._v("parsemd")]),t._v(" take a path as an argument, and output the compiled CSV as stdout.")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ path/to/parsemd path/to/input.md\n")])])]),s("p",[t._v("To save the output, pipe the stdout to a file:")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ path/to/parsemd path/to/input.md "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" path/to/output.csv\n")])])]),s("h2",{attrs:{id:"benchmark"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#benchmark"}},[t._v("#")]),t._v(" Benchmark")]),t._v(" "),s("p",[t._v("The parser is fairly fast.\nIt compiles a 10000 rows * 360 columns dataset in about 7 seconds, and can be as fast as 3 seconds if utilizes REAM's inheritance feature in my benchmark.")]),t._v(" "),s("p",[t._v("To test it, first generate the eight benchmark REAM files with "),s("a",{attrs:{href:"https://github.com/chmlee/reamparser.js/blob/master/benchmark/generator.py",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("generator.py")]),s("OutboundLink")],1),t._v(".\nThey are identical in content, but with different schemas.\nYou can use any benchmark tools you desire.\nIf you are using "),s("a",{attrs:{href:"https://github.com/sharkdp/hyperfine",target:"_blank",rel:"noopener noreferrer"}},[t._v("hyperfine"),s("OutboundLink")],1),t._v(", the script I use is available: "),s("a",{attrs:{href:"https://github.com/chmlee/reamparser.js/blob/master/benchmark/benchmark_hf.sh",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("benchmark_hf.sh")]),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("The results are as follow:")]),t._v(" "),s("p",[s("img",{attrs:{src:e(365),alt:"benchmark"}}),t._v(" "),s("img",{attrs:{src:e(366),alt:"benchmark"}}),t._v(" "),s("img",{attrs:{src:e(367),alt:"benchmark"}})]),t._v(" "),s("p",[t._v("(Intel i7-6700HQ, 8GB Memory, WSL2/Arch Linux with nodejs v15.2.0)")])])}),[],!1,null,null,null);a.default=r.exports}}]);