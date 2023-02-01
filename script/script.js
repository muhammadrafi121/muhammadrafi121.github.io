const workList = [
    {
        id: '0',
        title: 'Aplikasi Monitoring SI',
        image: 'images/works/amplas.png',
        url: 'https://amplas.ptsi.co.id',
        tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'Laravel'],
        desc: 'Aplikasi Monitoring SI is an application used by PT. Surveyor Indonesia to monitor survey results on land that will be used in tower construction.'
    },
    {
        id: '1',
        title: 'SIMAPRES UNSRI',
        image: 'images/works/simapres.png',
        url: 'https://simapres.unsri.dev',
        tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'Codeigniter'],
        desc: "SIMAPRES UNSRI is a platform used to record and assess the academic and extracurricular accomplishments of students. Additionally, it supports Sriwijaya University's accreditation process by adhering to relevant regulations."
    },
    {
        id: '2',
        title: 'Telkom Avatar Teleticketing System',
        image: 'images/works/telkom.png',
        url: 'https://teleticketing.dtvv.net/telkom-avatar/',
        tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'Codeigniter'],
        desc: "Telkom's ATS is a system used by UseeTV, Telkom Indonesia's internal division, to report service issues across Indonesia, as well as evaluate the performance and quality of its employees."
    },
    {
        id: '3',
        title: 'PPCBK',
        image: 'images/works/ppcbk.png',
        url: 'https://ppcbk.com/',
        tech: ['HTML', 'CSS', 'Javascript', 'PHP', 'Codeigniter'],
        desc: 'PPCBK is a web based order monitoring system used by PT. Dok dan Perkapalan Air Kantung.'
    },
];

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

$(document).ready(function() {
    const showIndicator = workList.map((item, id) => {
        return `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="` + id + `"
        ` + (id == 0 ? 'class="active"' : '') + ` aria-current="true" aria-label="` + item.title + `"></button>`
    });

    $('#work-indicators').html(showIndicator.join(' '));

    const showWorks = workList.map((item, id) => {
        return `<div ` + (id == 0 ? 'class="carousel-item active work" data-bs-interval="5000"' : 'class="carousel-item work"') + ` id="` + id + `">
                    <img src="` + item.image + `" class="d-block w-100 img-fluid rounded" alt="` + item.title + `">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>` + item.title + `</h5>
                    </div>
                </div>`;
    });

    $('#work-carousel').html(showWorks.join(' '));

    const hiddenElement = document.querySelectorAll('.hidden');
    hiddenElement.forEach((el) => observer.observe(el));

    $('.work').click(function(e) {
        const work = workList.filter((w) => w.id == e.delegateTarget.id)[0];
        modalText(work.title, work.desc, work.image, work.tech, work.url);
    });
});

function modalText(title, desc, image, tech, url) {
    $('#modalLabel').html(title);
    $('#modalDesc').html(desc);
    $('#modalImage').attr('src', image);
    $('#modalUrl').attr('href', url);

    const techList = $('#tech-list');
    techList.html('');
    let ul = $('<ul>');
    let ul2 = $('<ul>');
    for (let i = 0; i < tech.length; i++) {
        let item = `<li>` + tech[i] + `</li>`;
        if (i % 2 === 0) {
            ul.append(item);
        } else {
            ul2.append(item);
        }
    }
    techList.append(ul);
    techList.append(ul2);

    $('#modal').modal('show');
}