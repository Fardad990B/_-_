const insuranceDates = document.querySelectorAll(".insurance-date");

const today = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
}).format(new Date());

function toNumber(date) {

    const english = date
        .replace(/[۰-۹]/g, d => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
        .replace(/\//g, "")
        .replace(/\D/g, "");

    return Number(english);

}

insuranceDates.forEach(item => {

    const expire = item.dataset.expire;

    if (expire === "---") return;

    if (toNumber(expire) < toNumber(today)) {

        item.classList.add(
            "bg-red-700",
            "text-white",
            "font-bold"
        );

    }

});