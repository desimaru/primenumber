function pn(n) {
    if (n <= 1) {
        return true;
    } else if (n === 2) {
        return true;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
        return true;
    }
}
const a = [],
    b = new URL(window.location.href);
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
for (let i = b.searchParams.get("n"); i < b.searchParams.get("m"); i++) {
    if (pn(i)) {
        a.push(i);
    }
    document.querySelector("textarea").value = a.join("\n");
}
