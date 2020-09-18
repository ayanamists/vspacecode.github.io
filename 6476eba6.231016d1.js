(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{63:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return d}));var i=t(2),a=t(6),o=(t(0),t(80)),c={id:"usage",title:"Usage",slug:"whichkey"},b={unversionedId:"usage",id:"usage",isDocsHomePage:!1,title:"Usage",description:"The Which Key extension can be used by itself or be called by other extensions.",source:"@site/docs/usage.md",slug:"/whichkey",permalink:"/docs/whichkey",editUrl:"https://github.com/VSpaceCode/vspacecode.github.io/edit/master/docs/usage.md",version:"current",sidebar:"someSidebar",previous:{title:"Troubleshooting",permalink:"/docs/troubleshooting"},next:{title:"Extra",permalink:"/docs/extra"}},l=[{value:"Standalone",id:"standalone",children:[]},{value:"With extension",id:"with-extension",children:[]}],s={rightToc:l};function d(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},s,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Which Key extension can be used by itself or be called by other extensions."),Object(o.b)("h3",{id:"standalone"},"Standalone"),Object(o.b)("p",null,"This extension comes with a default that didn't have any third-party dependencies."),Object(o.b)("h4",{id:"setup-i-am-using-vscode-vim"},"Setup: I am using VSCode Vim"),Object(o.b)("p",null,"If you want a better default behavior design for VSCode Vim, checkout ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://github.com/VSpaceCode/VSpaceCode"}),"VSpaceCode"),"."),Object(o.b)("p",null,"Add the menu key as follows in ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json"),". This following example is to let VSCode Vim to capture the ",Object(o.b)("inlineCode",{parentName:"p"},"space")," key and trigger the action menu in normal mode and visual mode."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To access ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json"),", you can search ",Object(o.b)("inlineCode",{parentName:"p"},"Setting")," in the command list with ",Object(o.b)("inlineCode",{parentName:"p"},"Ctl+Shift+P")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Cmd+Shift+P")," and select ",Object(o.b)("inlineCode",{parentName:"p"},"Preference: Open Settings (JSON)"),".")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"If you have existing config for ",Object(o.b)("inlineCode",{parentName:"p"},"vim.normalModeKeyBindingsNonRecursive")," or ",Object(o.b)("inlineCode",{parentName:"p"},"vim.visualModeKeyBindingsNonRecursive"),", make sure you add to the array instead of replace them.")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'"vim.normalModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>"],\n    "commands": ["whichkey.show"]\n  }\n],\n"vim.visualModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>"],\n    "commands": ["whichkey.show"]\n  }\n]\n')),Object(o.b)("p",null,"You can also bind a customize menu with Vim directly"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'"vim.visualModeKeyBindingsNonRecursive": [\n  {\n    "before": ["<space>"],\n    "commands": ["whichkey.show"],\n  }\n]\n')),Object(o.b)("h4",{id:"setup-i-am-not-using-vscode-vim"},"Setup: I am ",Object(o.b)("em",{parentName:"h4"},"not")," using VSCode Vim"),Object(o.b)("p",null,"Add the command as follows in ",Object(o.b)("inlineCode",{parentName:"p"},"keybindings.json"),". This following json is an example to bind ",Object(o.b)("inlineCode",{parentName:"p"},"alt+space")," to the action menu when a text editor is in focus."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"To access ",Object(o.b)("inlineCode",{parentName:"p"},"keybindings.json"),", you can search ",Object(o.b)("inlineCode",{parentName:"p"},"Keyboard")," in the command list with ",Object(o.b)("inlineCode",{parentName:"p"},"Ctl+Shift+P")," or ",Object(o.b)("inlineCode",{parentName:"p"},"Cmd+Shift+P")," and select ",Object(o.b)("inlineCode",{parentName:"p"},"Preference: Open Keyboard Shortcuts (JSON)"),".")),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "key": "alt+space",\n  "command": "whichkey.show",\n  "when": "editorTextFocus"\n},\n')),Object(o.b)("h4",{id:"menu-customization"},"Menu Customization"),Object(o.b)("p",null,"There are two ways to customize the menu: incrementally, and from scratch. Incrementally is great for when you only need to modify a few bindings from the default. Customizing from scratch is great for total control and the customization."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},"The default bindings are subject to change before ",Object(o.b)("inlineCode",{parentName:"p"},"1.0.0"),". If you find something you that think it should bind to a particular key by default, or you want a particular command, please open an issue as a feature request.")),Object(o.b)("h5",{id:"incrementally"},"Incrementally"),Object(o.b)("p",null,"Using this option will allow to you surgically update the default bindings (",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.bindings"),"). The extension will override bindings sequentially base on ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.bindingOverrides"),"."),Object(o.b)("h5",{id:"addreplace"},"Add/Replace"),Object(o.b)("p",null,"The following json will replace ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g s")," in the same position if the binding exists in ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.bindings"),", and append ",Object(o.b)("inlineCode",{parentName:"p"},"s")," to menu ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g")," if it doesn't exists. This override will only execute if ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g")," menu exists. An optional ",Object(o.b)("inlineCode",{parentName:"p"},"position")," key can be used to specified index of where the item should be inserted/moved to."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "name": "Go to line",\n      "type": "command",\n      "command":"workbench.action.gotoLine",\n    }\n  ]\n}\n')),Object(o.b)("p",null,"The following example will replace/append the whole ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g")," menu with one binding ",Object(o.b)("inlineCode",{parentName:"p"},"s")," in it."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": "g",\n      "name": "Go...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "s",\n          "name": "Go to",\n          "type": "command",\n          "command": "workbench.action.gotoLine",\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"If the key binding's key uses character ",Object(o.b)("inlineCode",{parentName:"p"},".")," like ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> e ."),", you can target that by using an array in the keys like ",Object(o.b)("inlineCode",{parentName:"p"},'"keys": ["e", "."]'),"."),Object(o.b)("h5",{id:"removal"},"Removal"),Object(o.b)("p",null,"Any negative number in position is denoting a removal operation. In the following example, any item bound to ",Object(o.b)("inlineCode",{parentName:"p"},"<SPC> g s")," will be remove."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-jsonc"}),'{\n  "whichkey.bindingOverrides": [\n    {\n      "keys": "g.s",\n      "position": -1,\n    }\n  ]\n}\n')),Object(o.b)("h5",{id:"from-scratch"},"From Scratch"),Object(o.b)("p",null,"To customize the menu items from scratch, you can override the menu completely by putting your own ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.bindings")," into your ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json"),". Using this option will prevent any update to your own bindings."),Object(o.b)("p",null,"An example of a ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json")," file that overrides space menu is as follows:"),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-json"}),'{\n  "whichkey.bindings": [\n    {\n      "key": "f",\n      "name": "File...",\n      "type": "bindings",\n      "bindings": [\n        {\n          "key": "f",\n          "name": "Open file",\n          "type": "command",\n          "command": "workbench.action.files.openFileFolder"\n        },\n        {\n          "key": "i",\n          "name": "Indentation...",\n          "type": "bindings",\n          "bindings": [\n            {\n              "key": "i",\n              "name": "Change indentation",\n              "type": "command",\n              "command": "changeEditorIndentation"\n            },\n            {\n              "key": "d",\n              "name": "Detect indentation",\n              "type": "command",\n              "command": "editor.action.detectIndentation"\n            }\n          ]\n        }\n      ]\n    }\n  ]\n}\n')),Object(o.b)("p",null,"The default value can be found in the ",Object(o.b)("inlineCode",{parentName:"p"},"contributes.configuration.whichkey.bindings.default")," section of the ",Object(o.b)("inlineCode",{parentName:"p"},"package.json")," in this repo. You can use the default value as an example to craft your own custom menu."),Object(o.b)("h3",{id:"with-extension"},"With extension"),Object(o.b)("p",null,"If you writing an extension and wanting to have which key functionality, you can bundle it with the extension pack feature of vscode. There is two mode of operation."),Object(o.b)("p",null,"To bundle ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," to your extension, you can add ",Object(o.b)("inlineCode",{parentName:"p"},"VSpaceCode.whichkey")," to the ",Object(o.b)("inlineCode",{parentName:"p"},"extensionDependencies")," of your ",Object(o.b)("inlineCode",{parentName:"p"},"package.json"),". This will install ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," on upon installation of your extension and make sure ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," is activated before your extension."),Object(o.b)("h4",{id:"read-from-config"},"Read from config"),Object(o.b)("p",null,"This mode will let ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," to mange the reading of the config from user's ",Object(o.b)("inlineCode",{parentName:"p"},"settings.json"),". ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," will load the specified config portion and update when the config is updated. This is suitable for large menu that might take a bit time to load."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Register to the location of the config"),Object(o.b)("p",{parentName:"li"},"The follow extension will tell ",Object(o.b)("inlineCode",{parentName:"p"},"which-key")," the bindings is living in ",Object(o.b)("inlineCode",{parentName:"p"},"myExtension.bindings"),", have an optional override config in ",Object(o.b)("inlineCode",{parentName:"p"},"myExtension.bindingOverrides"),", and have a title of ",Object(o.b)("inlineCode",{parentName:"p"},"My Menu"),". Note that overrides and title are optional."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'commands.executeCommand("whichkey.register", {\n  bindings: ["myExtension", "bindings"],\n  overrides: ["myExtension", "bindingOveArrides"],\n  title: "My menu"\n});\n'))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Launch the menu"),Object(o.b)("p",{parentName:"li"},"Once you registered the config location, the menu will be loaded, so the launch of the menu can be as quick as possible. The follow code is an example to launch a registered menu."),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'commands.executeCommand("whichkey.show", "myExtension.bindings");\n')))),Object(o.b)("h4",{id:"show-directly"},"Show directly"),Object(o.b)("p",null,"This is a simpler operating mode. In your extension, you can pass a ",Object(o.b)("inlineCode",{parentName:"p"},"BindingItem")," array when calling ",Object(o.b)("inlineCode",{parentName:"p"},"whichkey.show"),". However, this might not suitable for large bindings because of the load time."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-javascript"}),'commands.executeCommand("whichkey.show", [\n  {\n    "key": "f",\n    "name": "File...",\n    "type": "bindings",\n    "bindings": [\n      {\n        "key": "f",\n        "name": "Open file",\n        "type": "command",\n        "command": "workbench.action.files.openFileFolder"\n      },\n      {\n        "key": "i",\n        "name": "Indentation...",\n        "type": "bindings",\n        "bindings": [\n          {\n            "key": "i",\n            "name": "Change indentation",\n            "type": "command",\n            "command": "changeEditorIndentation"\n          },\n          {\n            "key": "d",\n            "name": "Detect indentation",\n            "type": "command",\n            "command": "editor.action.detectIndentation"\n          }\n        ]\n      }\n    ]\n  }\n]);\n')))}d.isMDXComponent=!0}}]);