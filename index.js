function pn(n) {
    if (n <= 1) {
        return false;
    } else if (n === 2) {
        return true;
    }
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
const a = [],
    b = new URL(window.location.href),
    n = document.getElementById("n"),
    m = document.getElementById("m");
function reload() {
    b.searchParams.set("n", n.value);
    b.searchParams.set("m", m.value);
    window.location.href = b;
}
if (!b.searchParams.has("n")) {
    b.searchParams.append("n", 1);
    if (!b.searchParams.has("m")) {
        b.searchParams.append("m", 200);
    }
    window.location.href = b;
} else if (!b.searchParams.has("m")) {
    b.searchParams.append("m", 200);
    window.location.href = b;
}
document.querySelector("title").innerHTML = `${b.searchParams.get(
    "n"
)}から${b.searchParams.get("m")}までの素数`;
n.value = b.searchParams.get("n");
m.value = b.searchParams.get("m");
for (let i = b.searchParams.get("n"); i <= b.searchParams.get("m"); i++) {
    if (pn(i)) {
        a.push(i);
    }
    document.querySelector("textarea").value = a.join("\n");
}
function f(e) {
    if (e.key === "Enter") {
        document.querySelector("button").click();
    }
}
n.addEventListener("keydown", f);
m.addEventListener("keydown", f);