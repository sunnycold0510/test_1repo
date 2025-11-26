export default function main() {
    
    // HTML 요소 가져오기
    const mainMenu = document.querySelector('#main-menu');
    const creditScreen = document.querySelector('#credit-screen');
    const optionScreen = document.querySelector('#option-screen');

    // 메인 메뉴의 항목들만 리스트로 가져오기
    const menuItems = Array.from(document.querySelectorAll('#main-menu .menu-item'));
    
    // 현재 선택된 메뉴 인덱스 (0: New, 1: Load, 2: Option, 3: Credit)
    let currentIndex = 0;

    // 초기 실행 시 첫 번째 메뉴 선택 표시
    updateMenuSelection();

    // ------------------------------------------------
    // 기능 함수들
    // ------------------------------------------------

    // 화면 전환 함수
    function showScreen(screenName) {
        // 모든 화면 숨기기
        mainMenu.classList.add('hide');
        creditScreen.classList.add('hide');
        optionScreen.classList.add('hide');

        // 선택된 화면만 보이기
        switch(screenName) {
            case 'main':
                mainMenu.classList.remove('hide');
                break;
            case 'credit':
                creditScreen.classList.remove('hide');
                break;
            case 'option':
                optionScreen.classList.remove('hide');
                break;
        }
    }

    // 메뉴 선택 상태 시각적 업데이트 (CSS 클래스 적용)
    function updateMenuSelection() {
        // 모든 메뉴의 selected 클래스 제거 (초기화)
        menuItems.forEach(item => item.classList.remove('selected'));
        
        // 현재 인덱스에 해당하는 메뉴에만 selected 클래스 추가
        if (menuItems[currentIndex]) {
            menuItems[currentIndex].classList.add('selected');
        }
    }

    // 액션 실행 로직 (클릭/엔터 공통)
    function executeAction(action) {
        console.log(`Action: ${action}`); // 디버깅용

        if (action === 'new') {
            alert("New Game 기능은 아직 구현되지 않았습니다.");
        } 
        else if (action === 'load') {
            alert("Load Game 기능은 아직 구현되지 않았습니다.");
        } 
        else if (action === 'option') {
            showScreen('option');
        } 
        else if (action === 'credit') {
            showScreen('credit');
        } 
        else if (action === 'back') {
            showScreen('main');
        }
    }

    // ------------------------------------------------
    // 이벤트 리스너
    // ------------------------------------------------

    // 1. 마우스 클릭 이벤트 (이벤트 위임)
    document.body.addEventListener('click', (event) => {
        const target = event.target;
        const action = target.dataset.action;

        if (action) {
            executeAction(action);
            
            // [추가] 마우스로 클릭해서 메뉴를 이동했다면, 키보드 포커스도 해당 메뉴로 맞춤
            if (target.classList.contains('menu-item')) {
                currentIndex = menuItems.indexOf(target);
                updateMenuSelection();
            }
        }
    });

    // 2. 키보드 이벤트 (방향키, 엔터, ESC)
    document.addEventListener('keydown', (event) => {
        
        // 메인 메뉴가 화면에 없을 때 (옵션/크레딧 화면일 때)
        if (mainMenu.classList.contains('hide')) {
            // ESC나 Backspace를 누르면 메인 메뉴로 돌아감
            if (event.key === 'Escape' || event.key === 'Backspace') {
                showScreen('main');
            }
            // 옵션/크레딧 화면의 'Back' 버튼 엔터 처리 등을 원하면 여기에 추가 로직 필요
            return; 
        }

        // 메인 메뉴가 화면에 있을 때
        switch (event.key) {
            case 'ArrowUp': 
                // 인덱스 감소 (0보다 작아지면 배열의 끝으로 이동)
                currentIndex = (currentIndex - 1 + menuItems.length) % menuItems.length;
                updateMenuSelection();
                break;

            case 'ArrowDown':
                // 인덱스 증가 (배열 길이 넘어가면 0으로 이동)
                currentIndex = (currentIndex + 1) % menuItems.length;
                updateMenuSelection();
                break;

            case 'Enter':
            case ' ': // 스페이스바
                // 현재 선택된 메뉴의 action 실행
                const action = menuItems[currentIndex].dataset.action;
                executeAction(action);
                break;
        }
    });
}