function getblockid(name){
 var block = _.find(Entry.variableContainer.functions_,
        d => d.block.template.replace(/ /gi,'') == name);
 return block.id
}

Entry.block[`func_${getblockid('%1경고하기')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('%1경고하기')}`].func = (sprite, script) => {
    alert(script.getValue('content',script))
}
