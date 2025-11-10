export default function main() {
    console.log("던전앤 드래곤즈(New Font) 실행 준비 완료");

    const menus = document.querySelectorAll('.mid-test');
    menus.forEach(menu => {
        menu.addEventListener('click', (e) => {
            alert(`[${e.target.innerText.trim()}] 메뉴가 선택되었습니다.`);
        });
    });
}