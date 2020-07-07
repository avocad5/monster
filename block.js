function getblockid(name){
 return _.find(Entry.variableContainer.functions_,
        d => d.block.template.replace(/ /gi,'') == name).id
}


//alert 블록
Entry.block[`func_${getblockid('%1경고하기%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('%1경고하기%2')}`].func = (sprite, script) => {
  alert(script.getValue('content',script))
}


//comfirm 블록
Entry.block[`func_${getblockid('%1확인하기%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('%1확인하기%2')}`].func = (sprite, script) => {
  if(confirm(script.getValue('content',script))==true){
   Entry.variableContainer.getVariableByName('avo').value_ = '확인'
  } else{
   Entry.variableContainer.getVariableByName('avo').value_ = '취소'
  }
}


//prompt 블록
Entry.block[`func_${getblockid('%1물어보기%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('%1물어보기%2')}`].func = (sprite, script) => {
    Entry.variableContainer.getVariableByName('avo').value_ = prompt(script.getValue('content',script))
}
