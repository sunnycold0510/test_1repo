export default function main() {     /*이 함수 모듈의 기본 내보내기로 지정*/
    console.log("hello es6");
    let _list = document.querySelector('#list-todo') 
    let _btn_add = document.querySelector('#btn-add')   /*사용될 버튼부*/
    let _todoTitle = document.querySelector('#todoTitle') /*사용될 <input> 요소*/
    let _btn_del = document.querySelector('#btn-delete')

    _btn_add.addEventListener('click', ()=>{       /*add 버튼 클릭되었을 때 실행되는 콜백 함수*/
        let _title = _todoTitle.value;            /*입력된 텍스트 값을 가져옴*/

        console.log(_title)
        //_list 추가
        let _li = document.createElement('li')    /*새로운 li 요소 생성*/
        _li.innerText = _title                   /*li 요소에 입력값 텍스트로 설정*/

        _list.appendChild(_li)                   /*생성한 li 요소를 목록에 추가*/

        _todoTitle.value = ""                    /*입력 필드 비움*/
    })

    _btn_del.addEventListener('click', ()=>{     /*delete 버튼이 클릭되었을 때 실행되는 콜백 함수*/
        let _lastLi = _list.lastElementChild      /*목록의 마지막 li 요소를 가져온다*/
        _list.removeChild(_lastLi)                /*마지막 li 요소를 목록에서 제거*/
    })

    _list.addEventListener('click',(evt)=>{       /*목록이 클릭되었을 때 실행되는 콜백 함수*/
        console.log(evt.target)

        //이전 내용 클리어
        let _list_items = _list.children          /*목록의 모든 자식 요소(li)들을 가져온다*/
        const itemsArray = Array.from(_list_items)/*HTMLCollection을 배열로 변환*/
        itemsArray.forEach( (item)=>{             /*모든 li 요소에서 클래스 select-item을 제거*/
            //item.classList
            item.classList.remove('select-item')
        })

        evt.target.classList.add('select-item')   /*클릭된 li 요소에 select-item 클래스를 추가하여 스타일을 변경*/
    })
}
