{
/**
 * 素数判定をする
 * @param {Number} n 自然数
 * @returns {Boolean} 素数かどうか
 */
function isPrime(n) {
    if (n < 2) return false;
    else if (n===2||n===3||n===5) return true;
    for (let i = 2,j=0,a=n**0.5; i <= a; i+=[4,2,4,2,4,6,2,6][j%8],j++) {
        if (n % i === 0){
            // iで割り切れるならfalseを返す
            return false;
        }
    }
    // nを割り切れなかったらtrueを返す
    return true;
}
/** @type {Window} */
const w=window,
    /**
     * URLパラメータ
     * @type {URLSearchParams}
     */
    url = new URLSearchParams(),
    /**@type {HTMLInputElement[]} */
    [n,m]=document.getElementsByTagName("input");
{
/**@type {HTMLLabelElement} */
const label=document.querySelector("label");
label.innerHTML = label.innerHTML.replace(
        "1から200までの素数",
        `${+url.get("n")}から${+url.get("m")||200}までの素数`
    );
}
// タイトルを｢(n)から(m)までの素数｣に変更する
document.querySelector("title").innerHTML = `${+url.get(
    "n"
)}から${+url.get("m")||200}までの素数`;
// nからmまでの素数を表示する
{
    const prime=[]
for (let i = +url.get("n"),a=+url.get("m")||200; i <= a; i++) {
    if (isPrime(i)) {
        // iが素数ならaにiを追加する
        prime.push(i);
    }
}
// textareaにaを表示する
document.querySelector("textarea").value = prime.join("\n");
}
n.value = +url.get("n");
m.value = +url.get("m")||200;
/**
 * @param {KeyboardEvent} e
 * @returns {Void}
 */
function f(e) {
    if (e.key === "Enter") {
        /**@type {URLSearchParams} */
        const url=new URLSearchParams(),
        /**@type {number[]}*/
        prime=[];
        {
            const label=document.querySelector("label");
            label.innerHTML=label.innerHTML.replace(`${+url.get("n")}から${+url.get("m")}までの素数`,`${n.value}から${m.value}までの素数`);
        }
        url.set("n",n.value);
        url.set("m",m.value);
        w.history.replaceState("","",`?${url.toString()}`);
        for (let i = +url.get("n"),a=+url.get("m")||200; i <= a; i++)
            if (isPrime(i))prime.push(i);
        document.querySelector("textarea").value = prime.join("\n");
        document.querySelector("title").innerHTML=`${+url.get("n")}から${url.get("m")??200}までの素数`;
    }
}
n.addEventListener("keydown", f);
m.addEventListener("keydown", f);
}