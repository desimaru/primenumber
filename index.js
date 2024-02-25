/**
 * 素数判定をする
 * @param {Number} n 自然数
 * @returns {Boolean} 素数かどうか
 */
function isPrime(n) {
    if (n <= 1) {
        // n=1ならfalseを返す
        return false;
    } else if (n === 2) {
        // n=2ならtrueを返す
        return true;
    }
    for (let i = 2; i <= n ** 0.5; i++) {
        if (n % i === 0) {
            // iで割り切れるならfalseを返す
            return false;
        }
    }
    // nを割り切れなかったらtrueを返す
    return true;
}
/**
 * 素数の配列
 * @type {Number[]}
 */
const prime = [],
    /**
     * URLオブジェクト
     * @type {URL}
     */
    b = new URL(window.location.href),
    /**@type {HTMLInputElement} */
    n = document.getElementById("n"),
    /** @type {HTMLInputElement} */
    m = document.getElementById("m");
/**
 * リダイレクトする
 * @returns {Void}
 */
function redirect() {
    b.searchParams.set("n", n.value);
    b.searchParams.set("m", m.value);
    window.location.href = b;
}
if (!b.searchParams.has("n")) {
    // もしnがなければnを1に設定する
    b.searchParams.append("n", 1);
    if (!b.searchParams.has("m")) {
        // もしmがなければmを200に設定する
        b.searchParams.append("m", 200);
    }
    // リダイレクト
    window.location.href = b;
} else if (!b.searchParams.has("m")) {
    // もしmがなければmを200に設定する
    b.searchParams.append("m", 200);
    // リダイレクト
    window.location.href = b;
}
// タイトルを「(n)から(m)までの素数」に変更する
document.querySelector("title").innerHTML = `${b.searchParams.get(
    "n"
)}から${b.searchParams.get("m")}までの素数`;
n.value = b.searchParams.get("n");
m.value = b.searchParams.get("m");
// nからmまでの素数を表示する
for (let i = b.searchParams.get("n"); i <= b.searchParams.get("m"); i++) {
    if (pn(i)) {
        // iが素数ならaにiを追加する
        a.push(i);
    }
    // textareaにaを表示する
    document.querySelector("textarea").value = a.join("\n");
}
/**
 * @param {KeyboardEvent} e
 * @returns {Void}
 */
function f(e) {
    if (e.key === "Enter") {
        redirect();
    }
}
n.addEventListener("keydown", f);
m.addEventListener("keydown", f);