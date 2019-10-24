// Ref : https://yamea-guide.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-%EC%A0%95%EA%B7%9C%EC%8B%9D%EC%9D%84-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%B4%88%EA%B0%84%EB%8B%A8-%EC%B2%9C%EB%8B%A8%EC%9C%84%EC%BD%A4%EB%A7%88
const commaToNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const $ = (selector) => {
    return document.querySelector(selector);
};

const $$ = (selectors) => {
    return document.querySelectorAll(selectors);
};

export { $, $$, commaToNumber };