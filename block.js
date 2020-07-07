function getblockid(name){
 return _.find(Entry.variableContainer.functions_,
        d => d.block.template.replace(/ /gi,'') == name).id
}

Entry.block[`func_${getblockid('%1경고하기%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('%1경고하기%2')}`].func = (sprite, script) => {
    alert(script.getValue('content',script))
}
