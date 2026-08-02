const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

    menu.classList.toggle("translate-x-full");

});
const loginBtn = document.getElementById("loginBtn");

if (loginBtn) {

    loginBtn.addEventListener("click", () => {

        const password = document.getElementById("password").value;

        const error = document.getElementById("error");

        const loginBox = document.getElementById("loginBox");

        const panel = document.getElementById("teacherPanel");

        if (password === "لبیک یا حسین") {

            error.classList.add("hidden");

            loginBox.classList.add("hidden");

            panel.classList.remove("hidden");

        } else {

            error.classList.remove("hidden");

        }

    });

}
const showPassword = document.getElementById("showPassword");

if (showPassword) {

    showPassword.addEventListener("click", () => {

        const input = document.getElementById("password");

        if (input.type === "password") {

            input.type = "text";

            showPassword.innerHTML = '<i data-lucide="eye-off"></i>';

        } else {

            input.type = "password";

            showPassword.innerHTML = '<i data-lucide="eye"></i>';

        }

        lucide.createIcons();

    });

}
lucide.createIcons();
const students = [

"سامان خسروی مقدم",

"فرداد یحیایی راد",

"فرید رحیمی",

"محمد صولتی",

"محمد حامد صولتی",

"محمد محسن مالکی",

"محمد طاها پرهیزکار",

"محمد گفتی"

];
const studentsList = document.getElementById("studentsList");

if(studentsList){

students.forEach(name=>{

studentsList.innerHTML += `

<div class="rounded-xl border border-[#4B5A4C] bg-[#202421] p-4">

<div class="mb-4 text-center font-bold text-white">

${name}

</div>

<div class="flex justify-center gap-4">

<button class="status-btn present rounded-full bg-green-600 px-4 py-2 text-white">
    حاضر
</button>

<button class="status-btn excused rounded-full bg-yellow-500 px-4 py-2 text-black">
    موجه
</button>

<button class="status-btn absent rounded-full bg-red-600 px-4 py-2 text-white">
    غیبت
</button>

</div>

</div>

`;

});

}
document.querySelectorAll(".status-btn").forEach(button=>{

button.addEventListener("click",()=>{

const parent=button.parentElement;

parent.querySelectorAll(".status-btn").forEach(btn=>{

btn.classList.remove(
"ring-4",
"ring-white",
"scale-125"
);

});

button.classList.add(
"ring-4",
"ring-white",
"scale-125"
);

});

});
const copyAttendance = document.getElementById("copyAttendance");

if (copyAttendance) {

    copyAttendance.addEventListener("click", () => {

        const date = document.getElementById("sessionDate").value;

        let report = "بسم الله الرحمن الرحیم\n\n";

        report += `تاریخ جلسه: ${date}\n\n`;

        document.querySelectorAll("#studentsList > div").forEach(card => {

            const name = card.querySelector(".student-name").innerText;

            const active = card.querySelector(".status-btn.ring-4");

            let status = "ثبت نشده";

            if (active) {

                if (active.dataset.status === "present") {

                    status = "حاضر";

                } else if (active.dataset.status === "excused") {

                    status = "غیبت موجه";

                } else {

                    status = "غیبت غیر موجه";

                }

            }

            report += `${name} : ${status}\n`;

        });

        navigator.clipboard.writeText(report);

        alert("گزارش کپی شد.");

    });

}
const copyBtn = document.getElementById("copyAttendance");

if (copyBtn) {

    copyBtn.addEventListener("click", () => {

        const date = document.getElementById("sessionDate").value;

        let text = "بسم الله الرحمن الرحیم\n\n";

        text += "تاریخ: " + date + "\n\n";

        document.querySelectorAll("#studentsList > div").forEach(card => {

            const name = card.querySelector(".font-bold").innerText;

            let status = "ثبت نشده";

            if (card.querySelector(".present").classList.contains("ring-4")) {

                status = "حاضر";

            }

            else if (card.querySelector(".excused").classList.contains("ring-4")) {

                status = "غیبت موجه";

            }

            else if (card.querySelector(".absent").classList.contains("ring-4")) {

                status = "غیبت غیرموجه";

            }

            text += `${name} : ${status}\n`;

        });

        navigator.clipboard.writeText(text);

        alert("✅ گزارش در کلیپ‌بورد کپی شد.");

    });

}
const sessionDate = document.getElementById("sessionDate");

if (sessionDate) {

    const today = new Date();

    const formatter = new Intl.DateTimeFormat("fa-IR-u-ca-persian", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit"
    });

    let persianDate = formatter.format(today);

    // تبدیل جداکننده‌ها به /
    persianDate = persianDate.replaceAll("٫", "/");
    persianDate = persianDate.replaceAll("/", "/");

    sessionDate.placeholder = persianDate;

}