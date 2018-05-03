let workspace = Blockly.inject('blocklyDiv',
{
    toolbox: document.getElementById('toolbox')
});

workspace.registerButtonCallback('RUN', function(button) {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    eval(code);
});

workspace.registerButtonCallback('SHOW', function(button) {
    let code = Blockly.JavaScript.workspaceToCode(workspace);
    alert(code);
});

workspace.registerButtonCallback('SAVE', function(button) {
    let dom = Blockly.Xml.workspaceToDom(workspace);
    let domString = Blockly.Xml.domToPrettyText(dom);
    
    localStorage.setItem('blocks', domString);
});

workspace.registerButtonCallback('CLEAR', function(button) {
    workspace.clear();
});

(function carregarCodigo(){
    let domString = localStorage.getItem('blocks');
    
    if(!domString){
        return;
    }
    
    let dom = Blockly.Xml.textToDom(domString);
    Blockly.Xml.domToWorkspace(dom, workspace);
})();