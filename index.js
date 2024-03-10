{
/**
 * 素数判定をする
 * @param {Number} n 自然数
 * @returns {Boolean} 素数かどうか
 */
function isPrime(n) {
    if (n < 2) return false;
    else if (n === 2) return true;
    const a=n**0.5;
    for (let i = 2; i <= a; i++) {
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
 * @type {number[]}
 */
const w=window,
    /**
     * URLオブジェクト
     * @type {URL}
     */
    b = new URL(w.location.href),
    /**@type {HTMLInputElement} */
    n = document.getElementById("n"),
    /** @type {HTMLInputElement} */
    m = document.getElementById("m")
/**
 * リダイレクトする
 * @returns {void}
 */
function redirect() {
    b.searchParams.set("n", n.value);
    b.searchParams.set("m", m.value);
    w.location.href = b;
}
if (!b.searchParams.has("n")) {
    // もしnがなければnを1に設定する
    b.searchParams.append("n", 1);
}
if (!b.searchParams.has("m")) {
    // もしmがなければmを200に設定する
    b.searchParams.append("m", 200);
}
if (w.location.href !== b.toString()) w.location.href = b;
document.querySelector("label").innerHTML = document
    .querySelector("label")
    .innerHTML.replace(
        "1から200までの素数",
        `${b.searchParams.get("n")}から${b.searchParams.get("m")}までの素数`
    );
// タイトルを｢(n)から(m)までの素数｣に変更する
document.querySelector("title").innerHTML = `${b.searchParams.get(
    "n"
)}から${b.searchParams.get("m")}までの素数`;
// nからmまでの素数を表示する
{
    const prime=[],
    a=b.searchParams.get("m")
for (let i = b.searchParams.get("n"); i <= a; i++) {
    if (isPrime(i)) {
        // iが素数ならaにiを追加する
        prime.push(i);
    }
}
// textareaにaを表示する
document.querySelector("textarea").value = prime.join("\n");
}
n.value = b.searchParams.get("n");
m.value = b.searchParams.get("m");
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
}
