# Cogo-Gift-Crawler

코고 (Cogo) 포인트 교환 상품 크롤러

# 사용 방법

1. 터미널에 python3 -m [pogo_gift_crawler.py 파일이 위치한 경로] 입력
2. 상한가, 하한가 입력 -> 공백 구분하여 각각 숫자로 입력

-   상한가 / 상한가 하한가 / 없음 세 가지 중 하나로 입력할 수 있다.
-   입력 예시 1 (상한가 20,000원, 하한가 1,000원)
    -   20000 1000
-   입력 예시 2 (상한가 20,000원)
    -   20000
-   입력 예시 3 (상한가, 하한가 없음)
    -   (공란)

3. 검색할 최대 페이지 수 입력

-   입력 예시 (최대 20페이지까지 검색)
    -   20

4. 검색 후 저장 방법 선택

-   txt 파일 또는 csv 파일로 저장하며, 저장되는 형식은 다음과 같다.
    -   브랜드
    -   상품명
    -   가격
    -   상품 URL
