//muno9748님의 EntAI 1.0코드를 참고해서 avocad5가 만들었습니다

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


//toast 블록 (알림)
Entry.block[`func_${getblockid('%1제목과%2내용의알림창띄우기%3')}`].paramsKeyMap = { title : 0, content: 1 };
Entry.block[`func_${getblockid('%1제목과%2내용의알림창띄우기%3')}`].func = (sprite, script) => {
    Entry.toast['success'](script.getValue('title',script),script.getValue('content',script),true)
}


//toast 블록 (경고)
Entry.block[`func_${getblockid('%1제목과%2내용의경고창띄우기%3')}`].paramsKeyMap = { title : 0, content: 1 };
Entry.block[`func_${getblockid('%1제목과%2내용의경고창띄우기%3')}`].func = (sprite, script) => {
    Entry.toast['alert'](script.getValue('title',script),script.getValue('content',script),true)
}


//콘솔 log
Entry.block[`func_${getblockid('콘솔창에%1라고쓰기%2')}`].paramsKeyMap = { content: 0 };
Entry.block[`func_${getblockid('콘솔창에%1라고쓰기%2')}`].func = (sprite, script) => {
  console.log(script.getValue('content',script))
}


//콘솔 clear
Entry.block[`func_${getblockid('콘솔창초기화하기%1')}`].paramsKeyMap = {};
Entry.block[`func_${getblockid('콘솔창초기화하기%1')}`].func = (sprite, script) => {
  console.clear()
}


//쉽표배열의 ()번째항목
Entry.block[`func_${getblockid('쉼표배열%1의%2번째항목%3')}`].paramsKeyMap = { mylist : 0, num:1};
Entry.block[`func_${getblockid('쉼표배열%1의%2번째항목%3')}`].func = (sprite, script) => {
  var mylist = script.getValue('mylist',script)
  var num = script.getValue('num',script)*1
  Entry.variableContainer.getVariableByName('avo').value_ = mylist.split(',')[num+1]
}


//쉽표배열 항목수
Entry.block[`func_${getblockid('쉼표배열%1의항목수%2')}`].paramsKeyMap = { mylist : 0};
Entry.block[`func_${getblockid('쉼표배열%1의항목수%2')}`].func = (sprite, script) => {
  var mylist = script.getValue('mylist',script)
  Entry.variableContainer.getVariableByName('avo').value_ = mylist.split(',').length
}


Entry.variableContainer.getVariableByName('avo').value_ = '설치됨'
alert('몬스터블록이 모두 설치되었습니다!')
